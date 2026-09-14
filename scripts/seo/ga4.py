#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.11"
# dependencies = [
#     "google-auth>=2.35",
#     "google-analytics-data>=0.18",
# ]
# ///
"""
Google Analytics 4 Data API CLI para basecoresales.com — solo lectura.

Credencial: una service-account JSON key, con rol "Viewer" en la propiedad
GA4 de basecoresales.com (GA4 Admin > Administración de acceso a la
propiedad). Nunca commitear esa key; vive fuera del repo en
~/.config/basecoreweb-seo/ por default (override con GA4_SERVICE_ACCOUNT_JSON).

Necesita también el Property ID numérico (GA4 Admin > Configuración de la
propiedad, "ID de propiedad" — no confundir con el Measurement ID "G-...").
Override con GA4_PROPERTY_ID o --property.

Contexto (1.25 del Plan de SEO): src/components/WebVitals.tsx manda a GA4,
desde el 5/9, un evento por métrica ("LCP" / "CLS" / "INP") con params
custom metric_id/metric_value/metric_delta/metric_rating. GA4 no expone
percentiles (p75) vía API para params custom — solo cuentas/promedios sobre
custom dimensions ya registradas. Por eso "webvitals" reporta la
*distribución* de metric_rating (good / needs-improvement / poor) en vez de
un p75, que es el equivalente utilizable con esta API. Esto requiere que
metric_rating esté registrado como custom dimension de scope "Evento" en
GA4 Admin > Definiciones personalizadas — si no está registrado, el reporte
sale vacío para esa dimensión aunque el evento sí esté llegando.

Usage:
  uv run scripts/seo/ga4.py webvitals [--days 28] [--metric LCP|CLS|INP]
  uv run scripts/seo/ga4.py pageviews [--days 28] [--path <substring>]
"""

import argparse
import os
import sys

from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import (
    DateRange,
    Dimension,
    Metric,
    OrderBy,
    RunReportRequest,
)
from google.oauth2 import service_account

DEFAULT_KEY_PATH = os.path.expanduser("~/.config/basecoreweb-seo/ga4-service-account.json")
SCOPES = ["https://www.googleapis.com/auth/analytics.readonly"]
CORE_WEB_VITALS = ("LCP", "CLS", "INP")


def get_client():
    key_path = os.environ.get("GA4_SERVICE_ACCOUNT_JSON", DEFAULT_KEY_PATH)
    if not os.path.isfile(key_path):
        sys.exit(f"No encuentro la credencial en {key_path}")
    creds = service_account.Credentials.from_service_account_file(key_path, scopes=SCOPES)
    return BetaAnalyticsDataClient(credentials=creds)


def get_property(property_arg):
    prop = property_arg or os.environ.get("GA4_PROPERTY_ID")
    if not prop:
        sys.exit("Falta el Property ID: pasá --property o seteá GA4_PROPERTY_ID")
    return f"properties/{prop}"


def cmd_webvitals(days, metric_filter, property_arg):
    client = get_client()
    property_name = get_property(property_arg)
    metrics_wanted = [metric_filter] if metric_filter else list(CORE_WEB_VITALS)

    request = RunReportRequest(
        property=property_name,
        dimensions=[Dimension(name="eventName"), Dimension(name="customEvent:metric_rating")],
        metrics=[Metric(name="eventCount")],
        date_ranges=[DateRange(start_date=f"{days}daysAgo", end_date="today")],
        order_bys=[OrderBy(dimension=OrderBy.DimensionOrderBy(dimension_name="eventName"))],
    )
    response = client.run_report(request)

    rows_by_metric: dict[str, dict[str, int]] = {m: {} for m in metrics_wanted}
    for row in response.rows:
        event_name = row.dimension_values[0].value
        raw_rating = row.dimension_values[1].value
        rating = raw_rating if raw_rating and raw_rating != "(not set)" else "(sin registrar)"
        count = int(row.metric_values[0].value)
        if event_name in rows_by_metric:
            rows_by_metric[event_name][rating] = rows_by_metric[event_name].get(rating, 0) + count

    print(f"Core Web Vitals de campo — últimos {days} días (fuente: GA4, eventos reales de visitantes)\n")
    for m in metrics_wanted:
        ratings = rows_by_metric.get(m, {})
        total = sum(ratings.values())
        print(f"{m}")
        if total == 0:
            print("  Sin datos (¿metric_rating registrado como custom dimension en GA4 Admin?)")
            continue
        for rating in ("good", "needs-improvement", "poor", "(sin registrar)"):
            if rating not in ratings:
                continue
            pct = 100 * ratings[rating] / total
            print(f"  {rating:<20} {ratings[rating]:>6} ({pct:5.1f}%)")
        print(f"  {'total':<20} {total:>6}")
        print()


def cmd_pageviews(days, path_filter, property_arg):
    client = get_client()
    property_name = get_property(property_arg)

    request = RunReportRequest(
        property=property_name,
        dimensions=[Dimension(name="pagePath")],
        metrics=[Metric(name="screenPageViews"), Metric(name="averageSessionDuration")],
        date_ranges=[DateRange(start_date=f"{days}daysAgo", end_date="today")],
        order_bys=[
            OrderBy(metric=OrderBy.MetricOrderBy(metric_name="screenPageViews"), desc=True)
        ],
        limit=100,
    )
    response = client.run_report(request)

    print(f"{'Página':<60} {'Vistas':>8} {'Dur. prom. (s)':>15}")
    for row in response.rows:
        page = row.dimension_values[0].value
        if path_filter and path_filter.lower() not in page.lower():
            continue
        views = row.metric_values[0].value
        dur = float(row.metric_values[1].value)
        print(f"{page[:59]:<60} {views:>8} {dur:>15.1f}")


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--property", default=None, help="GA4 Property ID numérico (override de GA4_PROPERTY_ID)")
    sub = p.add_subparsers(dest="cmd", required=True)

    p_wv = sub.add_parser("webvitals", help="Distribución de rating (good/needs-improvement/poor) de LCP/CLS/INP (1.25)")
    p_wv.add_argument("--days", type=int, default=28)
    p_wv.add_argument("--metric", choices=CORE_WEB_VITALS, default=None)

    p_pv = sub.add_parser("pageviews", help="Vistas y duración promedio por página")
    p_pv.add_argument("--days", type=int, default=28)
    p_pv.add_argument("--path", default=None, help="Filtrar páginas que contengan este texto")

    args = p.parse_args()
    if args.cmd == "webvitals":
        cmd_webvitals(args.days, args.metric, args.property)
    elif args.cmd == "pageviews":
        cmd_pageviews(args.days, args.path, args.property)


if __name__ == "__main__":
    main()
