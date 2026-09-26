"use client";

import { useEffect } from "react";

let requested = false;

function loadGtagScript(gaId: string) {
  if (requested) return;
  requested = true;
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  script.async = true;
  document.head.appendChild(script);
}

/**
 * Loads the ~166KB gtag/js *library* (the actual GA4 runtime that fetches,
 * parses and executes on the critical path today) out of the initial render
 * — not the tiny inline dataLayer/gtag() shim next to this component in
 * AppShell, which stays eager and free (no network, a few bytes of JS) so
 * `window.gtag(...)` exists immediately and every call — the automatic
 * `config` page_view, WebVitals.tsx's LCP/CLS/INP events, ContactForm's/
 * EbookForm's `generate_lead`/`file_download` — queues into `dataLayer`
 * exactly as it does today, whether or not the library has loaded yet. This
 * component only decides *when* that queue gets drained.
 *
 * Why not next/script's built-in `strategy="lazyOnload"`: reading
 * node_modules/next/dist/client/script.js (handleClientScriptLoad) shows it
 * waits for the `window.load` event first, *then* calls requestIdleCallback
 * with no `timeout` option — so on a page with slow/late-loading resources
 * (images, fonts, WhatsApp button icon, etc.) the actual fetch could be
 * pushed well past any bound, and requestIdleCallback with no timeout has no
 * guaranteed ceiling either. That fails the one hard requirement here: GA4's
 * page_view (and therefore Web Vitals/lead events, which all depend on the
 * same `gtag`) can't be delayed indefinitely, because someone who bounces
 * before the library loads is a real, permanently lost data point — not
 * just a slower load. requestIdleCallback's own `timeout` option gives
 * exactly the hybrid wanted: run in the browser's next idle slot, but never
 * wait past `timeout` ms even if the main thread is never idle. That's
 * reimplemented here directly (skipping the window.load wait) with a
 * setTimeout fallback for the rare environment with no requestIdleCallback
 * at all.
 *
 * Deliberately does NOT gate on user interaction/visibility the way
 * Turnstile.tsx defers Cloudflare's widget (IntersectionObserver on the
 * form). Turnstile is free to skip entirely until someone scrolls to a
 * form — nothing is lost if they never do. GA4 has no such free lunch: every
 * pageview needs counting, including the ones that bounce without ever
 * scrolling or clicking, so the only lever available is *when* within a
 * short, bounded window — never *if*.
 */
const IDLE_TIMEOUT_MS = 2500;

/**
 * Extra delay held before even *requesting* idle time, confirmed necessary
 * by a local production-build trace (Lighthouse CLI, devtools throttling,
 * mobile CPU 4x/8x -- see commit message for the full before/after
 * numbers): requestIdleCallback fired the very first idle slot after
 * hydration in every run, and that slot lines up almost exactly with when
 * Next.js's own <Link> prefetching (also idle-scheduled) starts firing its
 * batch of RSC requests for the header/footer nav links. Both features
 * grabbing the same first-idle moment stacked GTM's ~166KB fetch on top of
 * that prefetch burst under throttled network, keeping the connection
 * non-quiet for longer and pulling more of the timeline into Lighthouse's
 * [FCP, TTI] window that Total Blocking Time is measured over -- not a
 * literal main-thread collision with React hydration (traces showed GTM's
 * own script evaluation running in isolation, no overlapping hydration
 * tasks), but a shared-idle-slot pileup with the framework's own prefetcher.
 * Holding off this long before asking for idle time at all (rather than
 * raising IDLE_TIMEOUT_MS, which traces showed was never actually the
 * limiting factor -- genuine idle was found well before any timeout could
 * fire) lets that initial prefetch burst mostly clear the connection first.
 */
const PRE_IDLE_DELAY_MS = 2000;

export default function GtmLoader({ gaId }: { gaId: string }) {
  useEffect(() => {
    if (requested) return undefined;

    let idleId: number | undefined;

    function scheduleIdle() {
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(() => loadGtagScript(gaId), {
          timeout: IDLE_TIMEOUT_MS,
        });
      } else {
        // No requestIdleCallback support at all (older Safari) -- there's
        // no idle signal to hook, so just wait out the same ceiling on a
        // timer.
        window.setTimeout(() => loadGtagScript(gaId), IDLE_TIMEOUT_MS);
      }
    }

    const delayId = window.setTimeout(scheduleIdle, PRE_IDLE_DELAY_MS);

    return () => {
      window.clearTimeout(delayId);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
    };
  }, [gaId]);

  return null;
}
