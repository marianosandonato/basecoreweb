export const site = {
  name: "Base Core – Consultoría Comercial y Marketing",
  shortName: "Base Core Sales",
  /**
   * Feeds metadataBase, the OG tags, sitemap.ts and robots.ts. Env-driven so a
   * preview deployment points at itself instead of emitting canonical URLs for
   * the live WordPress site. Production needs no variable set.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.basecoresales.com",
  description:
    "Consultoría comercial y marketing para todos los ciclos de venta: preventa, venta, posventa y marketing. Creamos bases productivas.",
  email: "info@basecoresales.com",
  phoneSpain: { display: "+34 607 206 559", tel: "+34607206559" },
  phoneArgentina: { display: "+54 11 5564-3798", tel: "+541155643798" },
  whatsappUrl: "https://wa.me/5491155643798",
  meetingUrl: "https://meetings-eu1.hubspot.com/msandonato",
  location: "Barcelona - Bs.As.",
  founder: {
    name: "Mariano Sandonato",
    role: "Fundador",
    linkedin: "https://www.linkedin.com/in/marianosandonato/",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/base-core/",
    facebook: "https://www.facebook.com/basecore",
    instagram: "https://www.instagram.com/basecoresales/",
  },
  /** Google Analytics 4 measurement ID (GA4 property "Base Core Sales"). */
  gaId: "G-0NRE1KWMBM",
} as const;

// Flat list of every top-level page, in canonical order — Marketing before
// the sales-cycle stages, since it's the top of the funnel that feeds them.
// This is the source of truth for pages like ContactSection/EbookSection
// that pull a plain "Marketing/Preventa/Venta/Posventa/Tecnología" checklist
// via nav.slice(1, 6) — keep it flat and untouched; the header's own grouped
// display lives in headerNav below, built from these same entries so
// labels/hrefs never drift.
export const nav = [
  { label: "Home", href: "/" },
  { label: "Marketing", href: "/marketing" },
  { label: "Preventa", href: "/preventa" },
  { label: "Venta", href: "/venta" },
  { label: "Posventa", href: "/posventa" },
  { label: "Tecnología", href: "/tecnologia" },
  { label: "Contacto", href: "/contacto" },
  { label: "BaseHub", href: "/basehub" },
] as const;

export type Lang = "es" | "en";

export const navEn = [
  { label: "Home", href: "/en" },
  { label: "Marketing", href: "/en/marketing" },
  { label: "Presales", href: "/en/presales" },
  { label: "Sales", href: "/en/sales" },
  { label: "Post-Sales", href: "/en/post-sales" },
  { label: "Technology", href: "/en/tecnologia" },
  { label: "Contact", href: "/en/contact" },
  { label: "BaseHub", href: "/en/basehub" },
] as const;

export type NavItem = { readonly label: string; readonly href: string };
export type NavEntry = NavItem & { readonly children?: readonly NavItem[] };

/**
 * What the header actually renders: Preventa/Venta/Posventa collapsed into
 * one "Venta" dropdown (so the desktop bar has room for Blog and BaseHub,
 * without going back past the 7-item width that already forced the header
 * to widen once — see documentation/PLAN-HEADER.md / Header.tsx). Everything
 * else in `nav` passes through unchanged.
 */
export const headerNav: readonly NavEntry[] = [
  nav[0],
  nav[1],
  { label: "Venta", href: nav[3].href, children: [nav[2], nav[3], nav[4]] },
  nav[5],
  nav[7],
  { label: "Blog", href: "/blog" },
  nav[6],
];

export const headerNavEn: readonly NavEntry[] = [
  navEn[0],
  navEn[1],
  { label: "Sales", href: navEn[3].href, children: [navEn[2], navEn[3], navEn[4]] },
  navEn[5],
  navEn[7],
  { label: "Blog", href: "/en/blog" },
  navEn[6],
];

// Blog post slugs are per-language and paired via blogSlugPairs in
// src/content/blog/posts.ts, not here — this only covers the /blog index.

/**
 * Every ES path's EN counterpart, both directions — the single source of
 * truth for the language switcher, the suggestion banner, and the footer's
 * service links. Keep in sync with the route folders under src/app/(en/).
 */
export const routeMap: Record<string, string> = {
  "/": "/en",
  "/en": "/",
  "/preventa": "/en/presales",
  "/en/presales": "/preventa",
  "/venta": "/en/sales",
  "/en/sales": "/venta",
  "/posventa": "/en/post-sales",
  "/en/post-sales": "/posventa",
  "/marketing": "/en/marketing",
  "/en/marketing": "/marketing",
  "/tecnologia": "/en/tecnologia",
  "/en/tecnologia": "/tecnologia",
  "/contacto": "/en/contact",
  "/en/contact": "/contacto",
  "/ebook": "/en/ebook",
  "/en/ebook": "/ebook",
  "/blog": "/en/blog",
  "/en/blog": "/blog",
  "/basehub": "/en/basehub",
  "/en/basehub": "/basehub",
};

export const siteEn = {
  name: "Base Core – Commercial Consulting & Marketing",
  description:
    "Commercial consulting and marketing for every stage of the sales cycle: presales, sales, post-sales and marketing. We build productive foundations.",
  founderRole: "Founder",
} as const;
