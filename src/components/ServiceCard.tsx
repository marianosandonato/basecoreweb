"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useFlipTeaser } from "@/lib/useFlipTeaser";

type Props = {
  title: string;
  image: string;
  roles: readonly string[];
  href?: string;
  cellClass: string;
  /** Pre-rendered here rather than passed as a component reference: a
      Server Component can't hand a function across the client boundary,
      only already-rendered JSX. */
  icon: ReactNode;
  hoverIcon: ReactNode;
};

/**
 * One `service-item.style-2` card (see ServiceCards.tsx for the shared
 * layout notes). Split into its own client component because it needs
 * `useFlipTeaser` (tap-to-close + the scroll-in teaser, shared with
 * FlipBox) — `ServiceCards` itself stays a Server Component so the `icon`
 * component reference in the card data never has to cross that boundary.
 *
 * A card WITH `href` navigates on tap regardless — `open`/`handleActivate`
 * are harmless there (the page unmounts before it matters) but load-
 * bearing for hrefless cards (e.g. "Puestos"), which otherwise had no way
 * to reveal or dismiss the hover layer on mobile/keyboard at all.
 */
export default function ServiceCard({ title, image, roles, href, cellClass, icon, hoverIcon }: Props) {
  const { rootRef, open, handleActivate } = useFlipTeaser<HTMLElement>("service-card--auto-reveal");

  const inner = (
    // `overflow-hidden` matches `.gsc-services-group .service-item` and is
    // load-bearing: without it the content box's 30px bottom margin collapses
    // out of the article, so the hover layer (height: 100% - 30px) ends up
    // 30px short and leaves a strip of the white box showing.
    <article
      ref={rootRef}
      className={`service-card relative overflow-hidden ${open ? "service-card--open" : ""}`}
      tabIndex={href ? undefined : 0}
      role={href ? undefined : "group"}
      aria-label={href ? undefined : title}
      onClick={href ? undefined : handleActivate}
    >
      {/* Photo */}
      <div className="relative aspect-[370/280] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 370px"
          className="object-cover"
        />
      </div>

      {/* White content box, pulled up over the photo */}
      <div className="relative z-[9] -mt-[40px] mb-[30px] ml-[20px] mr-[20px] bg-white px-[30px] pb-[25px] pt-[30px] shadow-[0_0_30px_0_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between">
          <h3 className="-mt-[6px] pr-[10px] font-heading text-[20px] font-bold leading-[26px] text-heading">
            {title}
          </h3>
          {icon && (
            // 60px tall, not 58: the original's icon is an <i> whose line box
            // is 58x60, and that extra 2px is part of the 116px box height.
            <span className="relative flex h-[60px] shrink-0 items-center">
              <span
                aria-hidden="true"
                className="absolute left-[-15px] top-0 z-[1] h-[38px] w-[38px] bg-soft"
              />
              {icon}
            </span>
          )}
        </div>
      </div>

      {/* Hrefless cards (e.g. "Puestos") have no linked page where the role
          list lives elsewhere — it only exists in the aria-hidden hover
          layer below, which a screen reader never reaches regardless of
          focus state (that's the P1 a11y finding: real content, invisible
          to assistive tech). Cards WITH href don't need this: the linked
          page is the real content, this card is just a visual teaser. */}
      {!href && roles.length > 0 && (
        <ul className="sr-only">
          {roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      )}

      {/* Hover layer — aria-hidden: it's a purely visual reveal of the
          same title (plus role list) already announced by the h3 in
          the white box above, always present in the DOM regardless of
          hover state. Without aria-hidden a screen reader navigating
          by heading hears every card's title twice (seo-plan 5.7) — the
          hrefless-only sr-only list above covers the role content that
          would otherwise only live in here. */}
      <div
        aria-hidden="true"
        className="service-card-hover absolute inset-x-0 top-0 z-[9] flex h-[calc(100%-30px)] items-center text-center"
      >
        <div className="absolute inset-0 z-[6]">
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 370px"
            className="object-cover"
          />
          <span className="absolute inset-0 z-[1] bg-navy/80" />
        </div>
        <div className="relative z-[9] mx-auto max-w-[280px] px-[15px] py-[20px]">
          {hoverIcon}
          <p className="my-[18px] font-heading text-[22px] font-bold leading-[1.3] text-white">
            {title}
          </p>
          {roles.map((role) => (
            <div key={role} className="font-sans text-[15px] leading-[18px] text-white opacity-[0.82]">
              {role}
            </div>
          ))}
        </div>
      </div>
    </article>
  );

  return href ? (
    <Link href={href} className={`block px-[15px] ${cellClass}`}>
      {inner}
    </Link>
  ) : (
    <div className={`px-[15px] ${cellClass}`}>{inner}</div>
  );
}
