"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

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
 * for the same reason, and that tap/focus trigger still works independently
 * of the below. Below 768px there's no hover at all, so an IntersectionObserver
 * also tracks whether the box is in view and toggles `flip-box--revealed`
 * live as it scrolls in and out — not a one-time trigger, so it keeps
 * flipping each time the box crosses the viewport rather than getting stuck
 * on the back after the first pass. That class only has an effect inside the
 * `max-width: 767px` block in globals.css — harmless to compute at every
 * width, so there's no need to also gate it on a matchMedia check.
 */
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
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setRevealed(entry.isIntersecting),
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flip-box cursor-pointer ${effect === "slide-up" ? "flip-box--slide-up" : ""} ${
        revealed ? "flip-box--revealed" : ""
      }`}
      style={{ height: `${height}px` }}
      tabIndex={0}
      role="group"
      aria-label={label}
      // Tapping a plain tabIndex div doesn't reliably focus it on iOS
      // Safari, so :focus-within (the tap/click trigger) can silently no-op
      // there. Calling focus() explicitly in the click handler sidesteps
      // that quirk everywhere, including desktop, where it's a harmless
      // no-op alongside :hover.
      onClick={() => ref.current?.focus()}
    >
      {/* Front */}
      <div
        className="flip-box__layer bg-cover bg-center bg-no-repeat"
        style={{ backgroundColor: frontColor, backgroundImage: `url(${frontImage})` }}
      >
        <div
          className="flex h-full w-full flex-col items-stretch justify-center p-[35px] text-center"
          style={frontOverlay ? { backgroundColor: frontOverlay } : undefined}
        >
          {front}
        </div>
      </div>

      {/* Back */}
      <div
        className="flip-box__layer flip-box__back bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backImage})` }}
      >
        <div
          className="flex h-full w-full flex-col items-stretch justify-center p-[35px] text-center text-white"
          style={{ backgroundColor: backOverlay }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
