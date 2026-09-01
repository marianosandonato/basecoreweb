"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ClientCard from "@/components/ClientCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import type { Lang } from "@/lib/site";
import type { ClientProject } from "@/content/clients/projects";

const copy = {
  es: { prev: "Empresa anterior", next: "Empresa siguiente", region: "Carrusel de empresas con las que trabajamos" },
  en: { prev: "Previous company", next: "Next company", region: "Carousel of companies we've worked with" },
} as const;

/**
 * Same scroll-snap mechanics as BlogCarousel (native, no dependency) --
 * kept as a separate component instead of a shared/generic one because the
 * card content and copy differ enough (logo instead of cover photo, tags,
 * external links) that sharing would mean threading render-prop-shaped
 * flexibility through BlogCarousel for a single caller.
 */
export default function ClientsCarousel({
  projects,
  lang = "es",
}: {
  projects: readonly ClientProject[];
  lang?: Lang;
}) {
  const t = copy[lang];
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(projects.length > 1);

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
    <div role="region" aria-label={t.region} className="relative px-[95px]">
      <ul
        ref={trackRef}
        className="no-scrollbar flex list-none items-stretch snap-x snap-mandatory gap-[30px] overflow-x-auto scroll-smooth p-0 pb-[6px]"
      >
        {projects.map((project) => (
          <li
            key={project.slug}
            data-carousel-card
            className="w-full shrink-0 snap-start sm:w-[calc(50%-15px)] dt:w-[calc(33.333%-20px)]"
          >
            <ClientCard project={project} lang={lang} />
          </li>
        ))}
      </ul>

      {projects.length > 1 && (
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
