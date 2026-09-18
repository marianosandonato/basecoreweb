#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.11"
# dependencies = [
#     "requests>=2.31",
# ]
# ///
"""
PageSpeed Insights API CLI para basecoresales.com — solo lectura.

Credencial: una API key simple (no cuenta de servicio) de Google Cloud,
restringida a "PageSpeed Insights API". Nunca commitear esa key; vive
fuera del repo en ~/.config/basecoreweb-seo/psi-api-key por default
(override con PSI_API_KEY_FILE, o pasar la key directo en PSI_API_KEY).

Contexto (1.28 del Plan de SEO): reemplaza el circuito manual de "Mariano
pasa un reporte de PSI, performance lo analiza" por consultas directas a
la API — mismos datos que muestra pagespeed.web.dev, en el mismo formato
que ya se usa en el Plan de SEO ("Reporte PSI de Home, 14/9 17:25").

Usage:
  uv run scripts/seo/psi.py check [--url <url>] [--strategy mobile|desktop|both]
  uv run scripts/seo/psi.py check --url https://basecoresales.com/tecnologia --strategy mobile
"""

import argparse
import os
import sys

import requests

DEFAULT_URL = "https://basecoresales.com/"
DEFAULT_KEY_PATH = os.path.expanduser("~/.config/basecoreweb-seo/psi-api-key")
ENDPOINT = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"
CATEGORIES = ("performance", "accessibility", "best-practices", "seo")


def get_api_key():
    inline = os.environ.get("PSI_API_KEY")
    if inline:
        return inline.strip()
    key_path = os.environ.get("PSI_API_KEY_FILE", DEFAULT_KEY_PATH)
    if not os.path.isfile(key_path):
        sys.exit(f"No encuentro la API key en {key_path} (ni PSI_API_KEY seteada)")
    with open(key_path) as f:
        return f.read().strip()


def fetch(url, strategy, api_key):
    params = [
        ("url", url),
        ("key", api_key),
        ("strategy", strategy),
    ] + [("category", c) for c in CATEGORIES]
    resp = requests.get(ENDPOINT, params=params, timeout=60)
    if not resp.ok:
        detail = resp.json().get("error", {}).get("message", resp.text) if resp.content else resp.reason
        sys.exit(f"PSI API error ({resp.status_code}) para {strategy}: {detail}")
    return resp.json()


def print_report(url, strategy, data):
    categories = data.get("lighthouseResult", {}).get("categories", {})
    audits = data.get("lighthouseResult", {}).get("audits", {})

    def score(cat_id):
        cat = categories.get(cat_id)
        return round(cat["score"] * 100) if cat and cat.get("score") is not None else "—"

    def metric(audit_id):
        a = audits.get(audit_id, {})
        return a.get("displayValue", "—")

    label = strategy.capitalize()
    print(f"{label + ':':<9} Performance {score('performance')} · Accessibility {score('accessibility')} "
          f"· Best Practices {score('best-practices')} · SEO {score('seo')}")
    print(f"{'':<9} FCP {metric('first-contentful-paint')} · LCP {metric('largest-contentful-paint')} "
          f"· TBT {metric('total-blocking-time')} · CLS {metric('cumulative-layout-shift')} "
          f"· SI {metric('speed-index')}")


def cmd_check(url, strategy):
    api_key = get_api_key()
    strategies = ["mobile", "desktop"] if strategy == "both" else [strategy]
    print(f"PageSpeed Insights — {url}\n")
    for s in strategies:
        data = fetch(url, s, api_key)
        print_report(url, s, data)
    print()


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="cmd", required=True)

    p_check = sub.add_parser("check", help="Scores + Core Web Vitals de una URL (formato del Plan de SEO)")
    p_check.add_argument("--url", default=DEFAULT_URL)
    p_check.add_argument("--strategy", choices=["mobile", "desktop", "both"], default="both")

    args = p.parse_args()
    if args.cmd == "check":
        cmd_check(args.url, args.strategy)


if __name__ == "__main__":
    main()
