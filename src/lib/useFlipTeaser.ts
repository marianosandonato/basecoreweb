"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Shared behaviour behind every "flip on hover, focus, or tap" card on the
 * site (FlipBox, ServiceCards): the CSS drives :hover/:focus-within as
 * always, this hook adds the two things CSS alone can't do on a touch
 * device — a real open/close toggle, and a scroll-triggered teaser so a
 * fast scroller notices the back face exists.
 *
 * Tap-to-close: a tapped touch element stays focused after a second tap
 * (the browser doesn't blur it just because it was clicked again), so
 * :focus-within alone makes the reveal a one-way flip on mobile — only
 * focusing something else closes it. `open` + `handleActivate` add an
 * explicit toggle: opening works exactly like :focus-within already did,
 * but closing also calls `.blur()` so :focus-within actually clears.
 *
 * Scroll-in teaser: each time the element crosses 60% visible (not just
 * once per page load — re-arms every time it re-enters, scrolling up or
 * down), it auto-triggers the reveal briefly via `autoRevealClass`, then
 * reverts. Desktop (hover-capable pointers) and `prefers-reduced-motion`
 * never schedule this. A real touch/focus cancels any pending/playing
 * teaser immediately and suppresses it until the user disengages (blur, or
 * closing the explicit `open` toggle) — it never fights a real interaction.
 */
const AUTO_REVEAL_THRESHOLD = 0.6;
const AUTO_REVEAL_HOLD_MS = 2200; // long enough to register the back content
                                  // exists without hogging the CSS transitions
                                  // that follow (~0.6-1s open/close)
const STAGGER_STEP_MS = 150; // minimum gap between two teasers firing close together
const STAGGER_BASE_DELAY_MS = 120; // small delay before the very first one in a burst

/** Monotonic queue so cards that enter the viewport within the same scroll
 * frame don't all flip at once — each new teaser is slotted at least
 * STAGGER_STEP_MS after the previous one. Shared across every card on the
 * page (FlipBox and ServiceCards alike), which is the point. */
let nextTeaserSlot = 0;
function reserveTeaserDelay(): number {
  const now = performance.now();
  const slot = Math.max(now + STAGGER_BASE_DELAY_MS, nextTeaserSlot);
  nextTeaserSlot = slot + STAGGER_STEP_MS;
  return slot - now;
}

export function useFlipTeaser<T extends HTMLElement>(autoRevealClass: string) {
  const rootRef = useRef<T>(null);
  const isOpenRef = useRef(false); // mirrors `open` for the effect's closures below
  const suppressTeaserRef = useRef(false); // true while the user is engaging (mid-teaser touch/focus, or the card is explicitly open)
  const teaserTimers = useRef<{ open: number | null; close: number | null }>({ open: null, close: null });
  const [open, setOpen] = useState(false);

  function clearTeaserTimers() {
    const t = teaserTimers.current;
    if (t.open !== null) window.clearTimeout(t.open);
    if (t.close !== null) window.clearTimeout(t.close);
    t.open = null;
    t.close = null;
  }

  function handleActivate() {
    setOpen((prev) => {
      const next = !prev;
      isOpenRef.current = next;
      if (next) {
        suppressTeaserRef.current = true;
        clearTeaserTimers();
        rootRef.current?.classList.remove(autoRevealClass);
      } else {
        rootRef.current?.blur();
      }
      return next;
    });
  }

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isTouchDevice || reducedMotion) return;

    const cancelTeaser = () => {
      suppressTeaserRef.current = true;
      clearTeaserTimers();
      el.classList.remove(autoRevealClass);
    };
    const releaseTeaser = () => {
      if (!isOpenRef.current) suppressTeaserRef.current = false;
    };
    el.addEventListener("pointerdown", cancelTeaser, { passive: true });
    el.addEventListener("focus", cancelTeaser);
    el.addEventListener("blur", releaseTeaser);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (suppressTeaserRef.current) return;

        if (!entry.isIntersecting) {
          // Left the viewport before the teaser fired (or while it was
          // showing) — reset so scrolling back in retries cleanly instead
          // of the card being permanently skipped.
          clearTeaserTimers();
          el.classList.remove(autoRevealClass);
          return;
        }
        if (teaserTimers.current.open !== null || teaserTimers.current.close !== null) return; // already playing

        const openDelay = reserveTeaserDelay();
        teaserTimers.current.open = window.setTimeout(() => {
          teaserTimers.current.open = null;
          el.classList.add(autoRevealClass);
          teaserTimers.current.close = window.setTimeout(() => {
            teaserTimers.current.close = null;
            el.classList.remove(autoRevealClass);
          }, AUTO_REVEAL_HOLD_MS);
        }, openDelay);
      },
      { threshold: AUTO_REVEAL_THRESHOLD },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTeaserTimers();
      el.removeEventListener("pointerdown", cancelTeaser);
      el.removeEventListener("focus", cancelTeaser);
      el.removeEventListener("blur", releaseTeaser);
    };
  }, [autoRevealClass]);

  return { rootRef, open, handleActivate } as const;
}
