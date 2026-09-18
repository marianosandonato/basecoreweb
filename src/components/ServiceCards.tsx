import type { ComponentType, SVGProps } from "react";
import type { PuestoCardData } from "@/content/types";
import ServiceCard from "./ServiceCard";

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
 * the same photo behind a #00294B @ 80% tint. See ServiceCard.tsx for the
 * interactive (tap-to-close + scroll-in teaser) part of each card — this
 * component stays a Server Component on purpose and resolves `card.icon`
 * (a component reference) to JSX here, since a component reference itself
 * can't cross into a Client Component as a prop.
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
        return (
          <ServiceCard
            key={card.title}
            title={card.title}
            image={card.image}
            roles={card.roles}
            href={card.href}
            cellClass={cellClass}
            icon={Icon ? <Icon className="relative z-[2] block text-[58px] text-primary" /> : null}
            hoverIcon={Icon ? <Icon className="mx-auto block text-[62px] text-white" /> : null}
          />
        );
      })}
    </div>
  );
}
