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
 * `tabIndex` + `onClick` make the back layer reachable by keyboard and by
 * tap — clicking sets `clicked` in React state rather than leaning on
 * `:focus-within`, since a plain tabIndex div doesn't reliably take focus on
 * tap on iOS Safari. Below 768px there's also no hover at all, so an
 * IntersectionObserver tracks whether the box is in view and drives a
 * second bit of state, `inView`, live as it scrolls in and out (not a
 * one-time trigger — it un-reveals when the box leaves the viewport so it
 * flips again next time). Entering view only sets `inView` after a short
 * delay, giving the front a moment to actually be read before the flip
 * takes over; leaving view clears it immediately. `revealed` (either bit
 * true) drives the `flip-box--revealed` class, which only has an effect
 * inside the `max-width: 767px` block in globals.css — harmless to compute
 * at every width, so there's no need to also gate any of this on a
 * matchMedia check. >=768 still runs on plain :hover/:focus-within, none of
 * which this touches.
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
  const [inView, setInView] = useState(false);
  const [clicked, setClicked] = useState(false);
  const revealed = inView || clicked;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timer);
        if (entry.isIntersecting) {
          // ~1.5s to read the front (icon + title) before it flips away.
          timer = setTimeout(() => setInView(true), 1500);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
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
      onClick={() => {
        setClicked(true);
        ref.current?.focus();
      }}
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
