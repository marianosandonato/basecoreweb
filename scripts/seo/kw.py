#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.11"
# dependencies = [
#     "google-auth>=2.35",
#     "google-auth-oauthlib>=1.2",
#     "requests>=2.32",
# ]
# ///
"""
Keyword Planner (Google Ads API) CLI para basecoresales.com — solo lectura.

Da volúmenes de búsqueda reales (los mismos de Keyword Planner) sin depender
de la UI de Google Ads, para que los agentes (seo-marketing) validen keywords
por su cuenta. Usa la REST API de Google Ads directo (sin la librería
google-ads), con OAuth de usuario.

Acceso (4/10/2026): desde 2026 el nivel de acceso de la API vive en el
proyecto de Google Cloud que emite las credenciales OAuth, no en un developer
token. El proyecto `basecore-seo` tiene acceso Basic (requisito de
KeywordPlanIdeaService en cuentas de producción; Explorer no lo incluye) y la
marca de la pantalla de consentimiento verificada. No hace falta MCC.

Credenciales, nunca en el repo (mismo patrón que ga4.py/gsc.py/psi.py):
  ~/.config/basecoreweb-seo/google-ads-oauth-client.json  cliente OAuth
      "App de escritorio" (kw-cli) descargado de Google Auth Platform.
  ~/.config/basecoreweb-seo/google-ads-token.json  refresh token, lo crea
      `auth-finish`.
Cuenta de Google Ads consultada: 534-076-3297 (override con
GOOGLE_ADS_CUSTOMER_ID o --customer).

Autorización inicial (una sola vez, la hace Mariano con su cuenta):
  uv run scripts/seo/kw.py auth-url
      -> abre el link, acepta; el navegador termina en un http://localhost...
         que no carga: copiá esa URL completa de la barra de direcciones.
  uv run scripts/seo/kw.py auth-finish "<url completa de localhost>"

Uso:
  uv run scripts/seo/kw.py volume "kw 1" "kw 2" ... [--geo ES|AR|US|ES,AR] [--lang es|en]
  uv run scripts/seo/kw.py ideas "semilla 1" "semilla 2" [--geo ES] [--lang es] [--limit 50]
  uv run scripts/seo/kw.py volume --file lista.txt --json

Geo por default: ES,AR (los dos mercados del Mapa de Keywords), idioma es.
Las cifras son el promedio mensual de los últimos 12 meses; la competencia es
la de Google Ads (LOW/MEDIUM/HIGH) y el CPC sale de las pujas de la parte
alta y baja de la página, en la moneda de la cuenta.
"""

import argparse
import json
import os
import sys
from pathlib import Path

import requests
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials

CONFIG_DIR = Path(os.environ.get("BASECOREWEB_SEO_CONFIG", "~/.config/basecoreweb-seo")).expanduser()
CLIENT_FILE = CONFIG_DIR / "google-ads-oauth-client.json"
TOKEN_FILE = CONFIG_DIR / "google-ads-token.json"
PENDING_FILE = CONFIG_DIR / ".google-ads-auth-pending.json"

SCOPES = ["https://www.googleapis.com/auth/adwords"]
REDIRECT_URI = "http://localhost:8765/"
DEFAULT_CUSTOMER = "5340763297"
# Probadas en orden: la API retira versiones cada ~año; la primera que
# responda queda en uso. Sumar la nueva arriba cuando salga.
API_VERSIONS = ["v24", "v23", "v22", "v21"]

GEOS = {"ES": 2724, "AR": 2032, "US": 2840, "MX": 2484, "CL": 2152, "CO": 2170, "UY": 2858}
LANGS = {"es": 1003, "en": 1000}


def die(msg: str) -> None:
    print(msg, file=sys.stderr)
    sys.exit(1)


# ---------- auth ----------

def _flow():
    from google_auth_oauthlib.flow import Flow

    if not CLIENT_FILE.exists():
        die(f"Falta el cliente OAuth en {CLIENT_FILE}")
    return Flow.from_client_secrets_file(str(CLIENT_FILE), scopes=SCOPES, redirect_uri=REDIRECT_URI)


def cmd_auth_url(_args) -> None:
    flow = _flow()
    url, state = flow.authorization_url(access_type="offline", prompt="consent", include_granted_scopes="true")
    PENDING_FILE.write_text(json.dumps({"state": state, "code_verifier": flow.code_verifier}))
    PENDING_FILE.chmod(0o600)
    print("Abrí este link, elegí tu cuenta de Google y aceptá:\n")
    print(url)
    print("\nAl final el navegador va a ir a http://localhost:8765/... y no va a cargar: es normal.")
    print('Copiá esa URL completa y corré: uv run scripts/seo/kw.py auth-finish "<url>"')


def cmd_auth_finish(args) -> None:
    if not PENDING_FILE.exists():
        die("Primero corré auth-url.")
    pending = json.loads(PENDING_FILE.read_text())
    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"  # el redirect es a localhost por http
    flow = _flow()
    flow.code_verifier = pending["code_verifier"]
    flow.fetch_token(authorization_response=args.url)
    creds = flow.credentials
    if not creds.refresh_token:
        die("Google no devolvió refresh token. Volvé a correr auth-url (el link fuerza el consentimiento).")
    TOKEN_FILE.write_text(json.dumps({"refresh_token": creds.refresh_token}))
    TOKEN_FILE.chmod(0o600)
    PENDING_FILE.unlink()
    print(f"Listo: refresh token guardado en {TOKEN_FILE}")


def _credentials() -> Credentials:
    if not TOKEN_FILE.exists():
        die("Falta autorizar: corré auth-url y después auth-finish (ver el docstring).")
    client = json.loads(CLIENT_FILE.read_text())
    client = client.get("installed") or client.get("web")
    creds = Credentials(
        token=None,
        refresh_token=json.loads(TOKEN_FILE.read_text())["refresh_token"],
        token_uri=client["token_uri"],
        client_id=client["client_id"],
        client_secret=client["client_secret"],
        scopes=SCOPES,
    )
    creds.refresh(Request())
    return creds


# ---------- API ----------

def _post(customer: str, method: str, body: dict) -> dict:
    creds = _credentials()
    headers = {"Authorization": f"Bearer {creds.token}", "Content-Type": "application/json"}
    last = None
    for version in API_VERSIONS:
        url = f"https://googleads.googleapis.com/{version}/customers/{customer}:{method}"
        r = requests.post(url, headers=headers, json=body, timeout=60)
        if r.status_code == 404:  # versión retirada o todavía no disponible
            last = r
            continue
        if r.status_code != 200:
            die(f"Error {r.status_code} ({version}): {r.text[:1500]}")
        return r.json()
    die(f"Ninguna versión de la API respondió: {last.status_code if last else '?'} {last.text[:500] if last else ''}")


def _targeting(args) -> dict:
    geos = []
    for g in args.geo.upper().split(","):
        if g not in GEOS:
            die(f"Geo desconocida: {g}. Opciones: {', '.join(GEOS)}")
        geos.append(f"geoTargetConstants/{GEOS[g]}")
    if args.lang not in LANGS:
        die(f"Idioma desconocido: {args.lang}. Opciones: {', '.join(LANGS)}")
    return {
        "geoTargetConstants": geos,
        "language": f"languageConstants/{LANGS[args.lang]}",
        "keywordPlanNetwork": "GOOGLE_SEARCH",
    }


def _row(text: str, m: dict) -> dict:
    micros = lambda v: round(int(v) / 1_000_000, 2) if v is not None else None  # noqa: E731
    return {
        "keyword": text,
        "avg_monthly_searches": int(m["avgMonthlySearches"]) if m.get("avgMonthlySearches") is not None else None,
        "competition": m.get("competition"),
        "competition_index": m.get("competitionIndex"),
        "cpc_low": micros(m.get("lowTopOfPageBidMicros")),
        "cpc_high": micros(m.get("highTopOfPageBidMicros")),
    }


def _print(rows: list[dict], as_json: bool) -> None:
    if as_json:
        print(json.dumps(rows, ensure_ascii=False, indent=2))
        return
    print(f"{'keyword':<55} {'búsq/mes':>9} {'comp.':<8} {'CPC bajo-alto':>14}")
    for r in rows:
        vol = "—" if r["avg_monthly_searches"] is None else str(r["avg_monthly_searches"])
        cpc = "—" if r["cpc_low"] is None and r["cpc_high"] is None else f"{r['cpc_low'] or 0}-{r['cpc_high'] or 0}"
        print(f"{r['keyword'][:55]:<55} {vol:>9} {str(r['competition'] or '—'):<8} {cpc:>14}")


def _keywords(args) -> list[str]:
    kws = list(args.keywords or [])
    if args.file:
        kws += [line.strip() for line in Path(args.file).read_text().splitlines() if line.strip() and not line.startswith("#")]
    if not kws:
        die("Pasá keywords como argumentos o con --file.")
    return kws


def cmd_volume(args) -> None:
    kws = _keywords(args)
    body = {**_targeting(args), "keywords": kws}
    data = _post(args.customer, "generateKeywordHistoricalMetrics", body)
    rows = [_row(r.get("text", ""), r.get("keywordMetrics", {})) for r in data.get("results", [])]
    found = {r["keyword"].lower() for r in rows}
    rows += [_row(k, {}) for k in kws if k.lower() not in found]  # sin datos: Google no las devuelve
    _print(rows, args.json)


def cmd_ideas(args) -> None:
    kws = _keywords(args)
    body = {**_targeting(args), "keywordSeed": {"keywords": kws}, "pageSize": args.limit}
    data = _post(args.customer, "generateKeywordIdeas", body)
    rows = [_row(r.get("text", ""), r.get("keywordIdeaMetrics", {})) for r in data.get("results", [])]
    rows.sort(key=lambda r: r["avg_monthly_searches"] or 0, reverse=True)
    _print(rows[: args.limit], args.json)


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="cmd", required=True)

    sub.add_parser("auth-url").set_defaults(func=cmd_auth_url)
    f = sub.add_parser("auth-finish")
    f.add_argument("url")
    f.set_defaults(func=cmd_auth_finish)

    for name, func in (("volume", cmd_volume), ("ideas", cmd_ideas)):
        s = sub.add_parser(name)
        s.add_argument("keywords", nargs="*")
        s.add_argument("--file")
        s.add_argument("--geo", default="ES,AR")
        s.add_argument("--lang", default="es")
        s.add_argument("--customer", default=os.environ.get("GOOGLE_ADS_CUSTOMER_ID", DEFAULT_CUSTOMER).replace("-", ""))
        s.add_argument("--json", action="store_true")
        if name == "ideas":
            s.add_argument("--limit", type=int, default=50)
        s.set_defaults(func=func)

    args = p.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
