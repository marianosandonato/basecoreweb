import type { Metadata } from "next";
import { site } from "@/lib/site";

/**
 * Shared root-layout metadata defaults, factored out so both root layouts
 * (src/app/(es)/layout.tsx and src/app/(en)/en/layout.tsx — see
 * documentation/seo/plan-seo.md 1.18) declare the same `metadata` export
 * without duplicating the object by hand. Every individual page already
 * overrides title/description/openGraph via its own `generateMetadata`, so
 * this only matters as the fallback for routes that don't set their own —
 * and as the base `openGraph.locale`, which does need to differ per root.
 */
export function buildRootMetadata(openGraphLocale: "es_ES" | "en_US"): Metadata {
  return {
    metadataBase: new URL(site.url),
    title: {
      default: site.name,
      template: `%s – ${site.shortName}`,
    },
    description: site.description,
    icons: {
      icon: "/images/cropped-FAVICON-BASE-CORE-SALES-32x32.png",
      apple: "/images/cropped-FAVICON-BASE-CORE-SALES-192x192.png",
    },
    openGraph: {
      type: "website",
      locale: openGraphLocale,
      url: site.url,
      siteName: site.shortName,
      title: site.name,
      description: site.description,
      images: ["/images/basecoresales-slide-marketing-espana-1.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: site.name,
      description: site.description,
      images: ["/images/basecoresales-slide-marketing-espana-1.jpg"],
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
  url: site.url,
  logo: `${site.url}/images/LOGO-BASE-CORE-SALES-CON-SLOGAN.png`,
  description: site.description,
  email: site.email,
  areaServed: ["ES", "AR"],
  founder: {
    "@type": "Person",
    name: site.founder.name,
    url: site.founder.linkedin,
  },
  sameAs: [site.social.linkedin, site.social.instagram, site.social.facebook],
};
