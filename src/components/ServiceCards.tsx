import Image from "next/image";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import type { PuestoCardData } from "@/content/types";

type Card = PuestoCardData & {
  href?: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

type Props = {
  cards: readonly Card[];
  /** Extra classes for the grid wrapper */
  className?: string;
  /**
   * Width of one cell, i.e. Elementor's `.item-columns`. Measured on the
   * original, this is a plain percentage of the section's content width at
   * every viewport, not a fixed max-width:
   *   Ciclos (home, boxed 1200)      33.33%
   *   Puestos (cycle pages, full)    35%   -> 467px cards at 1463
   * Both collapse to one column at <=767.
   */
  cellClass?: string;
};

/**
 * Theme `service-item.style-2`.
 *
 * Photo (370x280) with a white content box floating over its bottom edge
 * (margin: -40px 20px 30px, padding 30px 30px 25px, 0 0 30px rgba(0,0,0,.06)).
 * The box holds the title on the left and a 58px line-art icon on the right,
 * backed by a 38x38 #EDF3F6 square offset -15px.
 *
 * On hover a layer covering `calc(100% - 30px)` zooms in from scale(.9) with
 * the same photo behind a #00294B @ 80% tint.
 */
export default function ServiceCards({
  cards,
  className = "",
  cellClass = "w-full md:w-1/3",
}: Props) {
  return (
    // A centred, wrapping row rather than a grid: the original's cells are a
    // percentage of the section width, so the row shrink-wraps around them.
    // The 30px gutter comes from 15px padding on each cell. No negative margin:
    // the callers already supply the full-bleed width, and adding one here made
    // the row wider than the viewport (a 15px horizontal overflow).
    <div className={`flex flex-wrap ${className}`}>
      {cards.map((card) => {
        const Icon = card.icon;

        const inner = (
          // `overflow-hidden` matches `.gsc-services-group .service-item` and is
          // load-bearing: without it the content box's 30px bottom margin collapses
          // out of the article, so the hover layer (height: 100% - 30px) ends up
          // 30px short and leaves a strip of the white box showing.
          <article className="service-card relative overflow-hidden">
            {/* Photo */}
            <div className="relative aspect-[370/280] w-full overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 370px"
                className="object-cover"
              />
            </div>

            {/* White content box, pulled up over the photo */}
            <div className="relative z-[9] -mt-[40px] mb-[30px] ml-[20px] mr-[20px] bg-white px-[30px] pb-[25px] pt-[30px] shadow-[0_0_30px_0_rgba(0,0,0,0.06)]">
              <div className="flex items-center justify-between">
                <h3 className="-mt-[6px] pr-[10px] font-heading text-[20px] font-bold leading-[26px] text-heading">
                  {card.title}
                </h3>
                {Icon && (
                  // 60px tall, not 58: the original's icon is an <i> whose line box
                  // is 58x60, and that extra 2px is part of the 116px box height.
                  <span className="relative flex h-[60px] shrink-0 items-center">
                    <span
                      aria-hidden="true"
                      className="absolute left-[-15px] top-0 z-[1] h-[38px] w-[38px] bg-soft"
                    />
                    <Icon className="relative z-[2] block text-[58px] text-primary" />
                  </span>
                )}
              </div>
            </div>

            {/* Hover layer */}
            <div className="service-card-hover absolute inset-x-0 top-0 z-[9] flex h-[calc(100%-30px)] items-center text-center">
              <div className="absolute inset-0 z-[6]">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 370px"
                  className="object-cover"
                />
                <span className="absolute inset-0 z-[1] bg-navy/80" />
              </div>
              <div className="relative z-[9] mx-auto max-w-[280px] px-[15px] py-[20px]">
                {Icon && <Icon className="mx-auto block text-[62px] text-white" />}
                <h3 className="my-[18px] font-heading text-[22px] font-bold leading-[1.3] text-white">
                  {card.title}
                </h3>
                {card.roles.map((role) => (
                  <div
                    key={role}
                    className="font-sans text-[15px] leading-[18px] text-white opacity-[0.82]"
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </article>
        );

        return card.href ? (
          <Link key={card.title} href={card.href} className={`block px-[15px] ${cellClass}`}>
            {inner}
          </Link>
        ) : (
          <div key={card.title} className={`px-[15px] ${cellClass}`}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}
