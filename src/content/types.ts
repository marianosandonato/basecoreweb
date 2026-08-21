import type { ComponentType, SVGProps } from "react";

export type FlipCardData = {
  title: string;
  /** Short tag lines shown on the front face under the title */
  tagline?: readonly string[];
  /** Detail lines shown on the back face */
  items: readonly string[];
  /** Background photo shared by both faces */
  image: string;
};

/**
 * Everything that varies between the originals' flip-box grids.
 *
 * This started as a single `variant: "full" | "boxed"` prop meant to name a page
 * archetype, and it was wrong or insufficient on every page after the first:
 * /venta needed a second variant, /posventa needed a `boxHeight` bolted on, and
 * /marketing varies four more axes on top of that (a different Elementor effect,
 * a different title font, 15px cells, a 4x2 grid). The axes are genuinely
 * independent, so they are spelled out rather than bundled into a name.
 *
 * See documentation/PLAN-MARKETING.md for the four originals side by side.
 */
export type FlipGridSpec = {
  /** "full" spans the viewport (`elementor-section-full_width`); "boxed" is the 1200px container. */
  layout: "full" | "boxed";
  columns: 3 | 4;
  boxHeight: number;
  /**
   * Elementor column padding. Horizontal is what sets the box width; vertical
   * is 0 wherever the original's section height equals the box height
   * (/preventa 520 vs 500 comes from the section's own padding, not the cell).
   */
  cellPadding: { x: 10 | 15; y: 0 | 10 };
  /** Elementor flip-box effect. */
  effect: "zoom-in" | "slide-up";
  /** Cycle pages use Sora 200; /marketing uses Gilmer 600. */
  titleFont: "sora" | "gilmer";
  frontOverlay: string;
  backOverlay: string;
  /**
   * How `FlipCardData.items` is rendered on the back face:
   *   "check-list"  /preventa — fa-check-circle bullets
   *   "lines"       /venta, /posventa — plain stacked lines
   *   "description" /marketing — a single description paragraph
   */
  backStyle: "check-list" | "lines" | "description";
};

export type PuestoCardData = {
  title: string;
  image: string;
  roles: readonly string[];
  /** Line-art glyph shown in the white content box (service-item.style-2). */
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

export type ServicePageData = {
  slug: string;
  breadcrumb: string;
  hero: {
    title: string[];
    lines: readonly string[];
    image: string;
  };
  etapas: {
    eyebrow: string;
    cards: readonly FlipCardData[];
    grid: FlipGridSpec;
  };
  recruiting: {
    title: string;
    items: readonly string[];
  };
  puestos: {
    eyebrow: string;
    cards: readonly PuestoCardData[];
  };
  nextCycle?: {
    label: string;
    href: string;
  };
  /** /preventa renders the Contacto title as h3, /venta as h2. */
  contactTitleAs?: "h2" | "h3";
};
