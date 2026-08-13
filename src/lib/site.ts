export const site = {
  name: "Base Core – Consultoría Comercial y Marketing",
  shortName: "Base Core Sales",
  /**
   * Feeds metadataBase, the OG tags, sitemap.ts and robots.ts. Env-driven so a
   * preview deployment points at itself instead of emitting canonical URLs for
   * the live WordPress site. Production needs no variable set.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://basecoresales.com",
  description:
    "Consultoría comercial y marketing para todos los ciclos de venta: preventa, venta, posventa y marketing. Creamos bases productivas.",
  email: "info@basecoresales.com",
  phoneSpain: { display: "+34 607 206 559", tel: "+34607206559" },
  phoneArgentina: { display: "+54 11 5564-3798", tel: "+541155643798" },
  whatsappUrl: "https://wa.me/5491155643798",
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
  partnerUrl: "https://not-a-numb3r.com/",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Preventa", href: "/preventa" },
  { label: "Venta", href: "/venta" },
  { label: "Posventa", href: "/posventa" },
  { label: "Marketing", href: "/marketing" },
  { label: "Contacto", href: "/contacto" },
] as const;
