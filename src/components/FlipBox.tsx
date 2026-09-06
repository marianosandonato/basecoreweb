"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import Image from "next/image";

/**
 * Elementor flip-box widget, in the two effects the site actually uses.
 *
 * "zoom-in" (cycle pages) — the front layer stays put; the back layer sits on
 *   top of it starting at `opacity:0; scale(.7)` and animates to
 *   `opacity:1; scale(1)` on hover (transform .7s, opacity .5s).
 *
 * "slide-up" (/marketing) — from `widget-flip-box.min.css`: the back layer
 *   starts at `translateY(100%)` and animates to `none` over `.6s ease-in-out`,
 *   clipped by `overflow:hidden` on the box. The front layer does not move —
 *   only Elementor's `push` effect moves the front, and this page uses `slide`.
 *
 * See the `.flip-box*` rules in globals.css.
 *
 * `tabIndex` on the wrapper makes the back layer reachable by keyboard, and
 * touch devices get it on tap — Elementor sets `cursor:pointer` below 1024px
 * for the same reason.
 *
 * Mobile scroll-in teaser: the first time a card crosses 60% visible, it
 * auto-triggers the same reveal a manual tap would (`.flip-box--auto-reveal`,
 * see globals.css), holds it briefly, then reverts — so a fast scroller sees
 * the back face exists without having to discover the tap-to-flip by luck.
 * Desktop (hover-capable pointers) and `prefers-reduced-motion` never
 * schedule this at all. Runs once per card per page load, and a real touch
 * cancels any pending/playing teaser for that card immediately.
 */
const AUTO_REVEAL_THRESHOLD = 0.6;
const AUTO_REVEAL_HOLD_MS = 2200; // long enough to register the back content
                                  // exists without hogging the CSS transitions
                                  // that follow (~0.6-0.7s open/close, unchanged)
const STAGGER_STEP_MS = 150; // minimum gap between two teasers firing close together
const STAGGER_BASE_DELAY_MS = 120; // small delay before the very first one in a burst

/** Monotonic queue so cards that enter the viewport within the same scroll
 * frame don't all flip at once — each new teaser is slotted at least
 * STAGGER_STEP_MS after the previous one. */
let nextTeaserSlot = 0;
function reserveTeaserDelay(): number {
  const now = performance.now();
  const slot = Math.max(now + STAGGER_BASE_DELAY_MS, nextTeaserSlot);
  nextTeaserSlot = slot + STAGGER_STEP_MS;
  return slot - now;
}

type Props = {
  frontImage: string;
  backImage: string;
  front: ReactNode;
  back: ReactNode;
  /** Background colour behind the front photo. */
  frontColor?: string;
  /** Tint laid over the front photo (the home page's front layer has none). */
  frontOverlay?: string;
  /** Tint laid over the back photo. */
  backOverlay?: string;
  /** Box height in px (Elementor default is 280; the home page uses 375). */
  height?: number;
  /** Elementor effect: "zoom-in" on the cycle pages, "slide-up" on /marketing. */
  effect?: "zoom-in" | "slide-up";
  label?: string;
};

export default function FlipBox({
  frontImage,
  backImage,
  front,
  back,
  frontColor = "#FFFFFF",
  frontOverlay,
  backOverlay = "rgba(0, 41, 75, 0.24)",
  height = 375,
  effect = "zoom-in",
  label,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const engagedRef = useRef(false); // true once teased or touched — never re-trigger

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isTouchDevice || reducedMotion) return;

    const pendingTimeouts: number[] = [];
    const clearPending = () => {
      pendingTimeouts.forEach(clearTimeout);
      pendingTimeouts.length = 0;
    };

    const cancelTeaser = () => {
      engagedRef.current = true;
      clearPending();
      el.classList.remove("flip-box--auto-reveal");
    };
    el.addEventListener("pointerdown", cancelTeaser, { passive: true });
    el.addEventListener("focus", cancelTeaser);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || engagedRef.current) return;
        engagedRef.current = true;
        observer.disconnect();

        const openDelay = reserveTeaserDelay();
        const openTimer = window.setTimeout(() => {
          el.classList.add("flip-box--auto-reveal");
          const closeTimer = window.setTimeout(() => {
            el.classList.remove("flip-box--auto-reveal");
          }, AUTO_REVEAL_HOLD_MS);
          pendingTimeouts.push(closeTimer);
        }, openDelay);
        pendingTimeouts.push(openTimer);
      },
      { threshold: AUTO_REVEAL_THRESHOLD },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      clearPending();
      el.removeEventListener("pointerdown", cancelTeaser);
      el.removeEventListener("focus", cancelTeaser);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={`flip-box cursor-pointer ${effect === "slide-up" ? "flip-box--slide-up" : ""}`}
      style={{ height: `${height}px` }}
      tabIndex={0}
      role="group"
      aria-label={label}
    >
      {/* Front */}
      <div className="flip-box__layer" style={{ backgroundColor: frontColor }}>
        <Image
          src={frontImage}
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, 400px"
          className="object-cover object-center"
        />
        <div
          className="relative flex h-full w-full flex-col items-stretch justify-center p-[35px] text-center"
          style={frontOverlay ? { backgroundColor: frontOverlay } : undefined}
        >
          {front}
        </div>
      </div>

      {/* Back */}
      <div className="flip-box__layer flip-box__back">
        <Image
          src={backImage}
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, 400px"
          className="object-cover object-center"
        />
        <div
          className="relative flex h-full w-full flex-col items-stretch justify-center p-[35px] text-center text-white"
          style={{ backgroundColor: backOverlay }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
