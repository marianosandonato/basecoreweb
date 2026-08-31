"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
 * time, keeping BlogCard's exact layout so it still matches /blog. Cards all
 * stretch to the row's tallest one (BlogCard is `h-full flex-col`, the flex
 * track below stretches its items by default) so the prev/next buttons can
 * center on `top-1/2` of that shared height instead of a per-card measurement.
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

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < maxScroll - 8);
  }, []);

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => updateEdges();
    window.addEventListener("resize", updateEdges);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-card]");
    const step = card ? card.offsetWidth + 30 : el.clientWidth;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div role="region" aria-label={t.region} className="relative px-[79px]">
      <div
        ref={trackRef}
        className="no-scrollbar flex items-stretch snap-x snap-mandatory gap-[30px] overflow-x-auto scroll-smooth pb-[6px]"
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

      {/* Buttons live in the px-[79px] gutter reserved above, not over the
          track itself, so they never sit on top of a card's image/content. */}
      {entries.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label={t.prev}
            className="absolute left-0 top-1/2 z-10 flex h-[79px] w-[79px] -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/95 text-heading shadow-md transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-0"
          >
            <ChevronLeftIcon className="text-[27px]" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label={t.next}
            className="absolute right-0 top-1/2 z-10 flex h-[79px] w-[79px] -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/95 text-heading shadow-md transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-0"
          >
            <ChevronRightIcon className="text-[27px]" />
          </button>
        </>
      )}
    </div>
  );
}
