import type { FlipGridSpec } from "./types";

/**
 * The four flip-box grids in the original, measured at viewport 1463.
 *
 * Every value here was read off the live DOM or the page's Elementor CSS; none
 * is inferred from another page. The three cycle-page specs reproduce exactly
 * what the old `variant` prop used to imply, so splitting the prop was a
 * no-op for them — verified by re-measuring all three.
 *
 *              /preventa      /venta       /posventa    /marketing
 *   grid       4 x 1          3 x 3        3 x 1        4 x 2
 *   box        342 x 500      380 x 250    380 x 400    270 x 430
 *   cells      10 / 10        10 / 10      10 / 10      15 / 0
 *   effect     zoom-in        zoom-in      zoom-in      slide-up
 *   title      Sora 200       Sora 200     Sora 200     Gilmer 600
 */

/** /preventa #81be2e9 — full-width section, x=10/372/734/1096. */
export const PREVENTA_GRID: FlipGridSpec = {
  layout: "full",
  columns: 4,
  boxHeight: 500,
  cellPadding: { x: 10, y: 10 },
  effect: "zoom-in",
  titleFont: "sora",
  frontOverlay: "rgba(0, 0, 0, 0.47)",
  backOverlay: "rgba(0, 41, 75, 0.83)",
  backStyle: "check-list",
};

/** /venta #9a1d78f, #20949cf, #2afe01f — three rows of three, x=134/534/934. */
export const VENTA_GRID: FlipGridSpec = {
  layout: "boxed",
  columns: 3,
  boxHeight: 250,
  cellPadding: { x: 10, y: 10 },
  effect: "zoom-in",
  titleFont: "sora",
  frontOverlay: "rgba(0, 0, 0, 0.49)",
  backOverlay: "rgba(0, 41, 75, 0.84)",
  backStyle: "lines",
};

/** /posventa #9a1d78f — one row of three, x=134/534/934. */
export const POSVENTA_GRID: FlipGridSpec = {
  layout: "boxed",
  columns: 3,
  boxHeight: 400,
  cellPadding: { x: 10, y: 10 },
  effect: "zoom-in",
  titleFont: "sora",
  frontOverlay: "rgba(0, 0, 0, 0.47)",
  backOverlay: "rgba(0, 41, 75, 0.83)",
  backStyle: "lines",
};

/**
 * /marketing #fd651a4 + #e8a47dc — two rows of four, x=139/439/739/1039.
 * 1200 / 4 = 300 columns, minus 15px each side = 270.
 */
export const MARKETING_GRID: FlipGridSpec = {
  layout: "boxed",
  columns: 4,
  boxHeight: 430,
  cellPadding: { x: 15, y: 0 },
  mobileGapY: 15,
  effect: "slide-up",
  titleFont: "gilmer",
  frontOverlay: "rgba(0, 0, 0, 0.48)",
  backOverlay: "rgba(0, 41, 75, 0.83)",
  backStyle: "check-list",
};

/**
 * /tecnologia "Módulos" — same box geometry and effect as /marketing's
 * "Pilares comunicacionales", but each card's back is a bulleted list
 * (4 items) rather than a single description paragraph.
 */
export const TECNOLOGIA_GRID: FlipGridSpec = {
  layout: "boxed",
  columns: 4,
  boxHeight: 430,
  cellPadding: { x: 15, y: 0 },
  mobileGapY: 15,
  effect: "slide-up",
  titleFont: "gilmer",
  frontOverlay: "rgba(0, 0, 0, 0.48)",
  backOverlay: "rgba(0, 41, 75, 0.83)",
  backStyle: "check-list",
};
