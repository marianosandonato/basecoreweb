#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.11"
# dependencies = [
#     "google-auth>=2.35",
#     "google-api-python-client>=2.149",
# ]
# ///
"""
Google Search Console CLI for basecoresales.com — read-only.

Credential: a service-account JSON key, granted "Full" access on the
www.basecoresales.com Domain property in Search Console. Never commit
that key; it lives outside the repo at ~/.config/basecoreweb-seo/ by
default (override with GSC_SERVICE_ACCOUNT_JSON).

The Search Console API can report index status but cannot trigger a
crawl or "request indexing" — that action only exists in the GSC UI.

Usage:
  uv run scripts/seo/gsc.py inspect <url> [<url> ...]
  uv run scripts/seo/gsc.py sitemaps
  uv run scripts/seo/gsc.py analytics --days 28 [--query <substring>]
"""

import argparse
import os
import sys
from datetime import date, timedelta

from google.oauth2 import service_account
from googleapiclient.discovery import build

SITE_URL = "sc-domain:basecoresales.com"
DEFAULT_KEY_PATH = os.path.expanduser("~/.config/basecoreweb-seo/gsc-service-account.json")
SCOPES = ["https://www.googleapis.com/auth/webmasters"]


def get_service():
    key_path = os.environ.get("GSC_SERVICE_ACCOUNT_JSON", DEFAULT_KEY_PATH)
    if not os.path.isfile(key_path):
        sys.exit(f"No encuentro la credencial en {key_path}")
    creds = service_account.Credentials.from_service_account_file(key_path, scopes=SCOPES)
    return build("searchconsole", "v1", credentials=creds)


def cmd_inspect(urls):
    svc = get_service()
    for url in urls:
        body = {"inspectionUrl": url, "siteUrl": SITE_URL}
        result = svc.urlInspection().index().inspect(body=body).execute()
        r = result.get("inspectionResult", {}).get("indexStatusResult", {})
        print(f"\n{url}")
        print(f"  Verdicto:          {r.get('verdict', '—')}")
        print(f"  Estado cobertura:  {r.get('coverageState', '—')}")
        print(f"  URL rastreada:     {r.get('lastCrawlTime', 'nunca rastreada')}")
        print(f"  Indexación permitida: {r.get('robotsTxtState', '—')}")
        print(f"  Canonical detectado por Google: {r.get('googleCanonical', '—')}")


def cmd_sitemaps():
    svc = get_service()
    result = svc.sitemaps().list(siteUrl=SITE_URL).execute()
    for sm in result.get("sitemap", []):
        print(f"{sm.get('path')}  ·  enviado: {sm.get('lastSubmitted', '—')}  ·  descargado: {sm.get('lastDownloaded', '—')}")
        for e in sm.get("contents", []):
            print(f"    {e.get('type')}: {e.get('submitted')} enviadas, {e.get('indexed')} indexadas")


def cmd_resubmit_sitemap(feedpath):
    svc = get_service()
    svc.sitemaps().submit(siteUrl=SITE_URL, feedpath=feedpath).execute()
    print(f"Reenviado: {feedpath}")


def cmd_analytics(days, query_filter):
    svc = get_service()
    end = date.today() - timedelta(days=3)  # GSC data lags ~2-3 days
    start = end - timedelta(days=days)
    body = {
        "startDate": start.isoformat(),
        "endDate": end.isoformat(),
        "dimensions": ["query", "page"],
        "rowLimit": 500,
    }
    result = svc.searchanalytics().query(siteUrl=SITE_URL, body=body).execute()
    rows = result.get("rows", [])
    if query_filter:
        rows = [r for r in rows if query_filter.lower() in r["keys"][0].lower()]
    rows.sort(key=lambda r: r.get("clicks", 0), reverse=True)
    print(f"{'Consulta':<50} {'Página':<40} {'Clics':>6} {'Impr.':>7} {'CTR':>7} {'Pos.':>6}")
    for r in rows[:60]:
        q, page = r["keys"]
        print(f"{q[:49]:<50} {page[-39:]:<40} {r['clicks']:>6} {r['impressions']:>7} {r['ctr']*100:>6.1f}% {r['position']:>6.1f}")


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="cmd", required=True)

    p_inspect = sub.add_parser("inspect", help="Estado de indexación de una o más URLs")
    p_inspect.add_argument("urls", nargs="+")

    sub.add_parser("sitemaps", help="Estado de los sitemaps enviados")

    p_resubmit = sub.add_parser("resubmit-sitemap", help="Forzar a Google a releer un sitemap")
    p_resubmit.add_argument("feedpath", default="https://basecoresales.com/sitemap.xml", nargs="?")

    p_analytics = sub.add_parser("analytics", help="Clics/impresiones/posición por consulta (Fase 5.1)")
    p_analytics.add_argument("--days", type=int, default=28)
    p_analytics.add_argument("--query", default=None, help="Filtrar consultas que contengan este texto")

    args = p.parse_args()
    if args.cmd == "inspect":
        cmd_inspect(args.urls)
    elif args.cmd == "sitemaps":
        cmd_sitemaps()
    elif args.cmd == "resubmit-sitemap":
        cmd_resubmit_sitemap(args.feedpath)
    elif args.cmd == "analytics":
        cmd_analytics(args.days, args.query)


if __name__ == "__main__":
    main()
