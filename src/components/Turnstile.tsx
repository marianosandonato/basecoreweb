"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      remove: (widgetId: string) => void;
    };
  }
}

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js";
// How long to wait, after the widget mounts, before offering a manual
// "reintentar" escape hatch. Covers the two real-device failure modes found
// in mobile QA: the challenge silently hangs in "verifying" forever, or the
// script/iframe never loads at all (blocked by a content blocker or a flaky
// mobile connection) so the container stays empty with nothing to tap.
const STUCK_TIMEOUT_MS = 12_000;

let scriptPromise: Promise<void> | null = null;

function loadTurnstileScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => {
      scriptPromise = null; // let a later retry re-attempt the load
      reject(new Error("Failed to load Turnstile"));
    };
    document.head.appendChild(script);
  });
  return scriptPromise;
}

/** Cloudflare Turnstile checkbox widget — never shows image puzzles. */
export default function Turnstile({
  siteKey,
  onVerify,
  onExpire,
  retryLabel = "¿No cargó la verificación? Reintentar",
}: {
  siteKey: string;
  onVerify: (token: string) => void;
  onExpire?: () => void;
  retryLabel?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [stuck, setStuck] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const container = containerRef.current;
    if (!container) return;
    setStuck(false);

    const stuckTimer = window.setTimeout(() => {
      if (!cancelled) setStuck(true);
    }, STUCK_TIMEOUT_MS);

    function clearWidget() {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
      widgetIdRef.current = null;
    }

    function mountWidget() {
      loadTurnstileScript()
        .then(() => {
          if (cancelled || !containerRef.current || !window.turnstile) return;
          clearWidget();
          widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            callback: (token: string) => {
              if (cancelled) return;
              setStuck(false);
              onVerify(token);
            },
            "expired-callback": () => {
              if (cancelled) return;
              onExpire?.();
            },
            // Both a network/render failure and an interactive-challenge
            // timeout leave the checkbox unusable — surface the same
            // "reintentar" escape hatch instead of leaving the form stuck.
            "error-callback": () => {
              if (cancelled) return;
              setStuck(true);
            },
            "timeout-callback": () => {
              if (cancelled) return;
              setStuck(true);
            },
          });
        })
        .catch(() => {
          if (!cancelled) setStuck(true);
        });
    }

    // Defer fetching/executing the Turnstile script (and its CPU cost) until
    // the form is actually about to be seen, instead of on every page that
    // mounts a form regardless of whether the visitor scrolls to it.
    if (typeof IntersectionObserver === "undefined") {
      mountWidget();
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            observer.disconnect();
            mountWidget();
          }
        },
        { rootMargin: "200px" },
      );
      observer.observe(container);
      return () => {
        cancelled = true;
        window.clearTimeout(stuckTimer);
        observer.disconnect();
        clearWidget();
      };
    }

    return () => {
      cancelled = true;
      window.clearTimeout(stuckTimer);
      clearWidget();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteKey, retryCount]);

  return (
    <div>
      <div ref={containerRef} />
      {stuck && (
        <button
          type="button"
          onClick={() => setRetryCount((n) => n + 1)}
          className="mt-2 text-sm font-medium text-primary underline"
        >
          {retryLabel}
        </button>
      )}
    </div>
  );
}
