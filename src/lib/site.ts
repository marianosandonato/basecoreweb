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

export const nav = [
  { label: "Home", href: "/" },
  { label: "Preventa", href: "/preventa" },
  { label: "Venta", href: "/venta" },
  { label: "Posventa", href: "/posventa" },
  { label: "Marketing", href: "/marketing" },
  { label: "Tecnología", href: "/tecnologia" },
  { label: "Contacto", href: "/contacto" },
] as const;

export type Lang = "es" | "en";

export const navEn = [
  { label: "Home", href: "/en" },
  { label: "Presales", href: "/en/presales" },
  { label: "Sales", href: "/en/sales" },
  { label: "Post-Sales", href: "/en/post-sales" },
  { label: "Marketing", href: "/en/marketing" },
  { label: "Technology", href: "/en/tecnologia" },
  { label: "Contact", href: "/en/contact" },
] as const;

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
};

export const siteEn = {
  name: "Base Core – Commercial Consulting & Marketing",
  description:
    "Commercial consulting and marketing for every stage of the sales cycle: presales, sales, post-sales and marketing. We build productive foundations.",
  founderRole: "Founder",
} as const;
