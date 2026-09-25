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
// How long to wait, after the widget mounts, before treating it as stuck.
// Covers the real-device failure modes found in mobile QA: iOS Safari with
// iCloud Private Relay or "Prevent Cross-Site Tracking" makes the managed
// challenge hang in "verifying" forever with no error/timeout callback at
// all (a documented Cloudflare/Safari conflict, not something fixable from
// here) — plus the script/iframe never loading (content blocker, flaky
// connection). Either way the visitor is stuck looking at a dead widget, so
// `onStuck` tells the parent form to stop requiring a token.
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
  onStuck,
  stuckMessage = "No pudimos verificar la seguridad automáticamente — podés enviar el formulario igual.",
  retryLabel = "Reintentar la verificación",
}: {
  siteKey: string;
  onVerify: (token: string) => void;
  onExpire?: () => void;
  /** Fires once the widget is confirmed stuck (see STUCK_TIMEOUT_MS above) — the parent form should stop requiring a token past this point. */
  onStuck?: () => void;
  stuckMessage?: string;
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

    function markStuck() {
      if (cancelled) return;
      setStuck(true);
      onStuck?.();
    }

    // Started only once the widget is actually rendered (not on page load —
    // the widget is deferred until the form scrolls near the viewport), and
    // cleared as soon as the widget verifies or hands control to the visitor
    // with an interactive checkbox. Otherwise it fires on healthy widgets too.
    let stuckTimer: number | undefined;
    function startStuckTimer() {
      window.clearTimeout(stuckTimer);
      stuckTimer = window.setTimeout(markStuck, STUCK_TIMEOUT_MS);
    }
    function clearStuckTimer() {
      window.clearTimeout(stuckTimer);
      stuckTimer = undefined;
    }

    function clearWidget() {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
      widgetIdRef.current = null;
    }

    function mountWidget() {
      // Covers the script itself never loading (content blocker, flaky
      // connection) — restarted below once the widget is rendered.
      startStuckTimer();
      loadTurnstileScript()
        .then(() => {
          if (cancelled || !containerRef.current || !window.turnstile) return;
          clearWidget();
          startStuckTimer();
          widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            callback: (token: string) => {
              if (cancelled) return;
              clearStuckTimer();
              setStuck(false);
              onVerify(token);
            },
            // The widget is waiting on a click, not hung — the visitor may
            // take longer than STUCK_TIMEOUT_MS to get to it.
            "before-interactive-callback": clearStuckTimer,
            "expired-callback": () => {
              if (cancelled) return;
              onExpire?.();
            },
            // Both a network/render failure and an interactive-challenge
            // timeout leave the checkbox unusable — same fallback as the
            // silent Safari hang the stuckTimer above catches.
            "error-callback": () => {
              clearStuckTimer();
              markStuck();
            },
            "timeout-callback": () => {
              clearStuckTimer();
              markStuck();
            },
          });
        })
        .catch(() => {
          clearStuckTimer();
          markStuck();
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
        <p className="mt-2 text-sm text-body">
          {stuckMessage}{" "}
          <button
            type="button"
            onClick={() => setRetryCount((n) => n + 1)}
            className="font-medium text-primary underline"
          >
            {retryLabel}
          </button>
        </p>
      )}
    </div>
  );
}
