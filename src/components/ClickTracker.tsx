"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends a GA4 event when someone clicks an element marked with
 * `data-ga-event` (optional `data-ga-location`). One document-level listener,
 * so server components can opt in with plain attributes. Respects consent:
 * gtag queues/no-ops under the default `analytics_storage: denied`.
 */
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.("[data-ga-event]");
      if (!el) return;
      const name = el.getAttribute("data-ga-event");
      if (!name) return;
      window.gtag?.("event", name, {
        location: el.getAttribute("data-ga-location") ?? undefined,
        link_url: el.getAttribute("href") ?? undefined,
      });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
