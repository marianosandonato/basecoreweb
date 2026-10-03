import type { Metadata } from "next";
import { site, siteEn } from "@/lib/site";

/**
 * Shared root-layout metadata defaults, factored out so both root layouts
 * (src/app/(es)/layout.tsx and src/app/(en)/en/layout.tsx — see
 * documentation/seo/plan-seo.md 1.18) declare the same `metadata` export
 * without duplicating the object by hand. Every individual page already
 * overrides title/description/openGraph via its own `generateMetadata`, so
 * this only matters as the fallback for routes that don't set their own
 * (the 404s, for one) — and as the base `openGraph.locale`, which does need
 * to differ per root. The fallback copy follows the root's language too:
 * with `site` hard-coded here, every /en/* 404 tab and share preview came
 * out in Spanish.
 *
 * `twitter` only sets the card type on purpose. Next fills twitter:title,
 * :description and :image from each route's own openGraph when the twitter
 * block doesn't set them (postProcessMetadata in
 * next/dist/lib/metadata/resolve-metadata.js), so every page shares with its
 * own title and language. Setting them here instead pinned all pages to the
 * home page's generic Spanish copy.
 */
export function buildRootMetadata(openGraphLocale: "es_ES" | "en_US"): Metadata {
  const copy = openGraphLocale === "en_US" ? siteEn : site;
  return {
    metadataBase: new URL(site.url),
    title: {
      default: copy.name,
      template: `%s – ${site.shortName}`,
    },
    description: copy.description,
    icons: {
      icon: "/images/cropped-FAVICON-BASE-CORE-SALES-32x32.png",
      apple: "/images/cropped-FAVICON-BASE-CORE-SALES-192x192.png",
    },
    openGraph: {
      type: "website",
      locale: openGraphLocale,
      url: site.url,
      siteName: site.shortName,
      title: copy.name,
      description: copy.description,
      images: ["/images/basecoresales-slide-marketing-espana-1.jpg"],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

/**
 * ProfessionalService, not LocalBusiness: Base Core has no public office to
 * declare an address for (see documentation/PLAN.md's Google Business
 * Profile notes -- claiming a location without a genuine physical tie to it
 * risks a misrepresentation flag from Google). areaServed carries the
 * geographic targeting instead. Same business, so this doesn't vary by
 * locale -- rendered once from AppShell, not per root layout.
 */
export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.shortName,
  alternateName: "Base Core",
  url: site.url,
  logo: `${site.url}/images/logo-base-core-building-productive-foundations.png`,
  description: site.description,
  // schema.org's field for exactly this case: distinguishes this entity from
  // others sharing the "Base Core" name (see documentation/seo/plan-seo.md
  // 8.2) without naming any of them — neutral on purpose, pending brand-risk
  // review in 8.3.
  disambiguatingDescription:
    "Base Core Sales es una consultoría de ventas, marketing y tecnología B2B para empresas de España y Latinoamérica, con foco en preventa, venta, posventa y marketing.",
  email: site.email,
  areaServed: ["ES", "AR", "Latinoamérica"],
  founder: {
    "@type": "Person",
    name: site.founder.name,
    url: site.founder.linkedin,
  },
  sameAs: [site.social.linkedin, site.social.instagram, site.social.facebook],
};
