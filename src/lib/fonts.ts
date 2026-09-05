import localFont from "next/font/local";

/**
 * Shared font loaders for both root layouts (src/app/(es)/layout.tsx and
 * src/app/(en)/en/layout.tsx). Declared once here — rather than in each
 * layout file — so the two root layouts required by the lang="es"/lang="en"
 * split (see documentation/seo/plan-seo.md 1.18) don't end up with two
 * separate copies of the same `localFont()` calls (which next/font/local
 * treats as distinct font faces if declared twice, doubling preloads).
 */

/** Headings, buttons and card titles. Licensed, self-hosted (see documentation/PLAN.md §0.1). */
export const gilmer = localFont({
  variable: "--font-gilmer",
  display: "swap",
  // woff2 only. Listing .woff as a fallback looks harmless but next/font/local
  // *preloads every entry*, so shipping both formats downloaded 312 KB instead
  // of 129 KB -- worse than before the conversion. woff2 is universally
  // supported by anything that can run this site.
  src: [
    { path: "../fonts/GilmerRegular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/GilmerMedium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/GilmerBold.woff2", weight: "700", style: "normal" },
  ],
});

/**
 * Founder signature, rendered by the ContactSection/EbookSection components
 * (Home, marketing, tecnologia, ebook, basehub, contacto -- not on every
 * route, and always below the fold). `preload: false` because next/font/
 * local preloads every font declared in the root layout on every route by
 * default; eager-loading this one everywhere just competes with the hero
 * image for early bandwidth. It still loads normally via CSS wherever it's
 * used.
 */
export const reey = localFont({
  variable: "--font-signature",
  display: "swap",
  preload: false,
  src: [{ path: "../fonts/reey-regular.woff2", weight: "400", style: "normal" }],
});

/**
 * Body copy, eyebrows, descriptions, form fields. Self-hosted instead of
 * `next/font/google`: that loader fetches from fonts.gstatic.com *during
 * the Vercel build*, and a stale build-cache entry pointing at a since-
 * rotated Google asset hash reliably breaks the build with no code change
 * on our side (happened twice — see the redeploy history around Aug 2026).
 * DM Sans and Montserrat below are shipped as variable fonts (a single
 * woff2 covering their whole weight range), same "latin"-only, woff2-only
 * rule as Gilmer/reey (see that comment on `gilmer` above).
 */
export const dmSans = localFont({
  variable: "--font-dm-sans",
  display: "swap",
  src: [{ path: "../fonts/DMSans-Variable.woff2", weight: "400 700", style: "normal" }],
});

/** "Not-a-Numb3r" eyebrow (200), cycle-page heroes (300), hero button (600). */
export const montserrat = localFont({
  variable: "--font-montserrat",
  display: "swap",
  src: [{ path: "../fonts/Montserrat-Variable.woff2", weight: "200 600", style: "normal" }],
});

/**
 * Flip-box titles on the /preventa, /venta, /posventa cycle pages (and their
 * /en equivalents), plus a couple of below-the-fold section labels ("Marketing"
 * / "Tecnología") in AboutLogoBlock and TechnologyBlock. Not used on every
 * page -- and never above the fold where it is used -- so same `preload:
 * false` rationale as `reey` above: eager-loading it on every route just
 * competes with the hero image for early bandwidth.
 */
export const sora = localFont({
  variable: "--font-sora",
  display: "swap",
  preload: false,
  src: [{ path: "../fonts/Sora-200.woff2", weight: "200", style: "normal" }],
});

/** Pre-joined class string applied to both root layouts' <html> element. */
export const fontVariables = `${gilmer.variable} ${dmSans.variable} ${montserrat.variable} ${sora.variable} ${reey.variable}`;
