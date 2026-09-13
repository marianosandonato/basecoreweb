"use client";

import { useCallback, useRef, useState, type TouchEvent } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import type { Lang } from "@/lib/site";

/**
 * Laptop mockup (asset from Mariano) with real BaseHub screenshots shown
 * inside it — used on /basehub between "Cómo funciona" and the feature grid.
 *
 * The mockup's "screen" is an opaque light-grey fill, not a transparent
 * cutout, so the frame paints first and the screenshot paints on top,
 * clipped to the screen's measured rect (119,39)-(708,373) of the 829x427
 * asset. The screenshots (~2550x1350, each a slightly different aspect
 * ratio) are all proportionally wider than that rect, so each is fit with
 * `object-contain` rather than `cover`: `cover` would center-crop the sides,
 * slicing through the header/sidebar content of the real app — checked with
 * a direct pixel composite before choosing this over cropping for the
 * original single-screenshot version. `contain` leaves a thin sliver of the
 * screen's own light-grey fill at top/bottom instead, imperceptible next to
 * each screenshot's own near-white background.
 *
 * Three real screens (overview / timeline / calendar) rotate through the
 * same clipped rect via a manual, dependency-free carousel — same technique
 * already used by ClientsCarousel/BlogCarousel (native browser primitives,
 * no swiper/embla/framer-motion), adapted from horizontal scroll-snap to a
 * translateX track since here exactly one slide ever fills the visible
 * area (there's no "peek" of neighboring cards to preserve). No auto-advance:
 * the screens carry small, real text (percentages, task names) that someone
 * may still be reading, and every other carousel on this site is manual-only
 * — consistent with that precedent instead of adding a timer + pause-on-hover
 * state for marginal benefit. Arrows loop (no disabled edges) because these
 * are three fixed views of one dashboard, not an open-ended list like blog
 * posts or client logos, so wrapping around reads as switching tabs rather
 * than as running past the end of content.
 */
const SCREEN = {
  left: `${((119 / 829) * 100).toFixed(4)}%`,
  top: `${((39 / 427) * 100).toFixed(4)}%`,
  width: `${((589 / 829) * 100).toFixed(4)}%`,
  height: `${((334 / 427) * 100).toFixed(4)}%`,
};

const SLIDES = [
  {
    src: "/images/basehub-dashboard-1.webp",
    label: { es: "Resumen", en: "Overview" },
    alt: {
      es: "Panel de BaseHub con el avance de las seis áreas de un proyecto",
      en: "BaseHub dashboard showing progress across a project's six areas",
    },
  },
  {
    src: "/images/basehub-dashboard-2.webp",
    label: { es: "Timeline", en: "Timeline" },
    alt: {
      es: "Vista de Timeline de BaseHub con el cronograma de tareas por proceso",
      en: "BaseHub Timeline view showing the task schedule by process",
    },
  },
  {
    src: "/images/basehub-dashboard-3.webp",
    label: { es: "Calendario", en: "Calendar" },
    alt: {
      es: "Vista de Calendario de BaseHub con las tareas organizadas por día",
      en: "BaseHub Calendar view showing tasks organized by day",
    },
  },
] as const;

const copy = {
  es: { region: "Capturas del panel de BaseHub", prev: "Pantalla anterior", next: "Pantalla siguiente", goTo: "Ver pantalla" },
  en: { region: "BaseHub dashboard screenshots", prev: "Previous screen", next: "Next screen", goTo: "Show screen" },
} as const;

// Minimum horizontal drag (px) before a touch gesture counts as a swipe
// instead of a tap/scroll — small enough to feel responsive on a phone,
// large enough to ignore incidental finger movement.
const SWIPE_THRESHOLD = 32;

export default function BaseHubMockup({ lang = "es", className = "" }: { lang?: Lang; className?: string }) {
  const t = copy[lang];
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  const onTouchStart = (e: TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    go(index + (delta < 0 ? 1 : -1));
  };

  return (
    <div className={`mx-auto w-full max-w-[760px] ${className}`}>
      <div className="relative w-full" style={{ aspectRatio: "829 / 427" }}>
        <Image
          src="/images/basehub-mockup.png"
          alt=""
          fill
          sizes="(min-width: 1200px) 760px, 90vw"
          className="object-contain"
        />
        <div
          className="absolute overflow-hidden"
          style={SCREEN}
          role="group"
          aria-roledescription="carousel"
          aria-label={t.region}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex h-full transition-transform duration-500 ease-out motion-reduce:transition-none"
            style={{ width: `${SLIDES.length * 100}%`, transform: `translateX(-${index * (100 / SLIDES.length)}%)` }}
          >
            {SLIDES.map((slide, i) => (
              <div key={slide.src} className="relative h-full" style={{ width: `${100 / SLIDES.length}%` }} aria-hidden={i !== index}>
                <Image
                  src={slide.src}
                  alt={slide.alt[lang]}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1200px) 540px, 65vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-[14px] flex items-center justify-center gap-[12px] sm:mt-[18px] sm:gap-[16px]">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label={t.prev}
          className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border border-line bg-white text-heading shadow-sm transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronLeftIcon className="text-[13px]" />
        </button>

        <div className="flex items-center gap-[8px]">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`${t.goTo}: ${slide.label[lang]}`}
              aria-current={i === index}
              className={`h-[10px] rounded-full transition-all duration-300 ${
                i === index ? "w-[24px] bg-primary" : "w-[10px] bg-line hover:bg-primary/50"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label={t.next}
          className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border border-line bg-white text-heading shadow-sm transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronRightIcon className="text-[13px]" />
        </button>
      </div>
    </div>
  );
}
