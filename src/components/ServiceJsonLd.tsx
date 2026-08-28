import { site } from "@/lib/site";

/** Service schema for the five service pages (preventa/venta/posventa/marketing/tecnologia
    and their EN counterparts) — the site-wide ProfessionalService JSON-LD in the root
    layout describes the business, this describes the specific offering on each page. */
export default function ServiceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    provider: {
      "@type": "ProfessionalService",
      name: site.shortName,
      url: site.url,
    },
    areaServed: ["ES", "AR"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
