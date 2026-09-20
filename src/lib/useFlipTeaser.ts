"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Shared behaviour behind every "flip on hover, focus, or tap" card on the
 * site (FlipBox, ServiceCards) that doesn't redirect on click. Cards WITH a
 * link/redirect (e.g. the home page's "Ciclos" cards) don't use the
 * `flipHandlers` this hook returns — they keep the plain CSS
 * `:hover`/`:focus-within` reveal scoped to `.service-card--linked` in
 * globals.css, since a click there navigates away and there's no toggle to
 * conflict with.
 *
 * For hrefless cards, everything is driven by real state instead of CSS
 * pseudo-classes, on purpose: CSS `:hover`/`:focus-within` used to be an
 * independent trigger for the same visual, and a mouse click's incidental
 * focus (or the hover itself) can't be "closed" by a click — the pseudo-class
 * keeps the back face showing regardless of what React state says, which is
 * exactly the bug this replaces (stuck-open after mouseleave; a click that
 * visibly does nothing). `open` is that single source of truth now:
 *
 *   mouseenter/focus (hover-capable pointers only) -> open = true
 *   mouseleave/blur  (hover-capable pointers only) -> open = false, always
 *   click            (any pointer)                 -> open = !open
 *
 * Gating the hover/focus pair to `isHoverCapableRef` (a real mouse, checked
 * once via matchMedia) keeps touch devices out of this path entirely: a tap
 * only ever runs `handleActivate`, one event, one toggle — no race with a
 * synthetic hover/focus event that a touchscreen's first tap can also fire.
 *
 * `handleActivate` skips its own `.blur()` on hover-capable pointers: a
 * clicked element that's still focused doesn't refire `focus` on the next
 * click, which is what let a stale focus event re-open the card between two
 * clicks in a row. Touch still blurs on close, same as before — its own
 * focus/blur handling is gated off above, so there is nothing to refight.
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
  const isHoverCapableRef = useRef(false); // real mouse+fine pointer, checked once on mount
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
      } else if (!isHoverCapableRef.current) {
        // Touch only — see the file header for why hover-capable pointers
        // skip this (it's what let a stale focus event re-open the card
        // between two clicks in a row).
        rootRef.current?.blur();
      }
      return next;
    });
  }

  // Hover-capable-only: mouseenter/focus open, mouseleave/blur always close.
  // Gated so a touchscreen's first tap (which can fire a synthetic focus
  // alongside its click) never races handleActivate's own toggle above.
  function handlePointerEnter() {
    if (!isHoverCapableRef.current) return;
    isOpenRef.current = true;
    setOpen(true);
  }
  function handlePointerLeave() {
    if (!isHoverCapableRef.current) return;
    isOpenRef.current = false;
    setOpen(false);
  }

  const flipHandlers = {
    onMouseEnter: handlePointerEnter,
    onMouseLeave: handlePointerLeave,
    onFocus: handlePointerEnter,
    onBlur: handlePointerLeave,
    onClick: handleActivate,
  } as const;

  useEffect(() => {
    isHoverCapableRef.current = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }, []);

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

  return { rootRef, open, handleActivate, flipHandlers } as const;
}
