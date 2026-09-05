"use client";

import { useReportWebVitals } from "next/web-vitals";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Real-user (field) Core Web Vitals -> GA4.
 *
 * Every measurement taken on this site so far (the Turnstile/logos/fonts/
 * TechnologyBlock fixes) was lab data from Lighthouse/PSI. CrUX has no field
 * data for basecoresales.com (insufficient traffic), so PSI always reports
 * "No Data" for INP -- this is the only way to see what real visitors
 * actually experience.
 *
 * Why `next/web-vitals` instead of installing the `web-vitals` npm package
 * directly: Next.js 16 still ships `useReportWebVitals` (the Pages-Router-era
 * hook survived the jump to 16), and it isn't a thin wrapper that only covers
 * the old metric set -- it internally calls the compiled `web-vitals`
 * library's onCLS/onFID/onLCP/onINP/onFCP/onTTFB (see
 * node_modules/next/dist/client/web-vitals.js), so INP is already covered.
 * Installing `web-vitals` separately would just duplicate code Next already
 * ships as part of its client runtime for zero benefit. Confirmed via
 * `npm run build` (see commit message) that this adds no new dependency and
 * a negligible amount of shared JS.
 *
 * Only LCP, CLS and INP are forwarded -- those are the current Core Web
 * Vitals. FID (deprecated, replaced by INP) and FCP/TTFB (useful but not
 * part of the official three) are ignored rather than spamming GA4 with
 * events nobody asked for.
 *
 * Event shape follows the web-vitals library's own official GA4 recipe
 * (https://github.com/GoogleChrome/web-vitals#send-the-results-to-google-analytics):
 * one GA4 event per metric, named after the metric itself ("LCP" / "CLS" /
 * "INP"), not a single generic "web_vitals" event with a metric_name param --
 * that shape shows up in several third-party GTM tutorials, but this site
 * has no GTM container, it calls gtag() directly (see the inline
 * "google-analytics" Script in src/app/layout.tsx), so the library's direct-
 * gtag recipe is the one that actually applies here. `metric_rating` is the
 * one addition beyond the library's minimal example: it's listed there as an
 * optional extra param, and it lets us filter "poor" events in GA4 without
 * needing BigQuery export.
 */
const CORE_WEB_VITALS = new Set(["LCP", "CLS", "INP"]);

type WebVitalsMetric = {
  name: string;
  id: string;
  value: number;
  delta: number;
  rating: string;
};

function sendToGoogleAnalytics(metric: WebVitalsMetric) {
  if (!CORE_WEB_VITALS.has(metric.name)) return;
  window.gtag?.("event", metric.name, {
    // Built-in param: use delta so GA4 can sum repeated reports (CLS/INP
    // can each fire more than once per page load) without double-counting.
    value: metric.delta,
    // Custom params, straight from the library's own recipe.
    metric_id: metric.id,
    metric_value: metric.value,
    metric_delta: metric.delta,
    metric_rating: metric.rating,
  });
}

/**
 * Mounted once in the root layout (src/app/layout.tsx), same place as
 * WhatsAppButton/LanguageBanner -- covers every route under both the `/es`
 * (default) and `/en` trees, since `app/en/layout.tsx` nests inside this
 * root layout rather than replacing it.
 */
export default function WebVitals() {
  useReportWebVitals(sendToGoogleAnalytics);
  return null;
}
