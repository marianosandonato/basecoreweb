"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { useFlipTeaser } from "@/lib/useFlipTeaser";

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
 * for the same reason. The open/close toggle and the scroll-in teaser both
 * live in `useFlipTeaser` (shared with ServiceCards) — see that file for how
 * tap-to-close and the repeatable teaser work.
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
  const { rootRef, open, handleActivate } = useFlipTeaser<HTMLDivElement>("flip-box--auto-reveal");

  return (
    <div
      ref={rootRef}
      className={`flip-box cursor-pointer ${effect === "slide-up" ? "flip-box--slide-up" : ""} ${open ? "flip-box--open" : ""}`}
      style={{ height: `${height}px` }}
      tabIndex={0}
      role="group"
      aria-label={label}
      onClick={handleActivate}
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
