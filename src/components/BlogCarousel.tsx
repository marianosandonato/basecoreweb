"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import BlogCard from "@/components/BlogCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import type { Lang } from "@/lib/site";
import type { BlogEntry } from "@/content/blog/posts";

const copy = {
  es: { prev: "Artículo anterior", next: "Artículo siguiente", region: "Carrusel de artículos del blog" },
  en: { prev: "Previous article", next: "Next article", region: "Blog articles carousel" },
} as const;

/**
 * Native scroll-snap carousel, no dependency: the Home teaser used to slice
 * the 3 most recent posts into a static grid, which meant older posts (and,
 * once there are more than 3, most of the blog) were never reachable from
 * Home. This scrolls through every post in `entries` instead, one card at a
 * time, keeping BlogCard's exact layout so it still matches /blog.
 */
export default function BlogCarousel({
  entries,
  lang = "es",
}: {
  entries: readonly BlogEntry[];
  lang?: Lang;
}) {
  const t = copy[lang];
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(entries.length > 1);
  // Vertical center of a card's own image (not the whole card, which runs
  // taller than the image once the title/description below it are counted)
  // -- measured off the real DOM so it stays correct at every breakpoint's
  // card width instead of a guessed pixel value.
  const [arrowTop, setArrowTop] = useState<number | null>(null);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < maxScroll - 8);
  }, []);

  const updateArrowTop = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const image = el.querySelector<HTMLElement>("[data-carousel-card] img")?.parentElement;
    if (image) setArrowTop(image.getBoundingClientRect().height / 2);
  }, []);

  useLayoutEffect(() => {
    updateEdges();
    updateArrowTop();
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => updateEdges();
    const onResize = () => {
      updateEdges();
      updateArrowTop();
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [updateEdges, updateArrowTop]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-card]");
    const step = card ? card.offsetWidth + 30 : el.clientWidth;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div role="region" aria-label={t.region} className="relative">
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-[30px] overflow-x-auto scroll-smooth pb-[6px]"
      >
        {entries.map((entry) => {
          const post = lang === "es" ? entry.es : entry.en;
          const slug = lang === "es" ? entry.esSlug : entry.enSlug;
          const href = lang === "es" ? `/blog/${slug}` : `/en/blog/${slug}`;
          return (
            <div
              key={slug}
              data-carousel-card
              className="w-full shrink-0 snap-start sm:w-[calc(50%-15px)] dt:w-[calc(33.333%-20px)]"
            >
              <BlogCard post={post} href={href} lang={lang} />
            </div>
          );
        })}
      </div>

      {entries.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label={t.prev}
            style={arrowTop != null ? { top: arrowTop } : undefined}
            className="absolute left-[8px] z-10 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/95 text-heading shadow-md transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-0 dt:-left-[22px]"
          >
            <ChevronLeftIcon className="text-[15px]" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label={t.next}
            style={arrowTop != null ? { top: arrowTop } : undefined}
            className="absolute right-[8px] z-10 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/95 text-heading shadow-md transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-0 dt:-right-[22px]"
          >
            <ChevronRightIcon className="text-[15px]" />
          </button>
        </>
      )}
    </div>
  );
}
