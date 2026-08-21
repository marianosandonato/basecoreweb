import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Technology Implementations: AI + Software",
  description:
    "We implement AI agents and processes. We migrate and set up CRM and other software for your sales team.",
  alternates: {
    canonical: "/en/tecnologia",
    languages: { es: "/tecnologia", en: "/en/tecnologia" },
  },
};

/**
 * EN counterpart of /tecnologia — same placeholder scope: only the hero
 * (mirroring /marketing's first cajon) and the contact footer for now.
 */
export default function TechnologyPage() {
  return (
    <>
      <Breadcrumb current="Technology" lang="en" />

      <PageHero
        title={["Looking to systematize", "and implement AI?"]}
        lines={[
          "We implement AI agents and processes.",
          "We migrate and set up CRM and other software.",
        ]}
        image="/images/TECNOLOGIA-BASECORE.jpg"
        cta={{ label: "BOOK A DISCOVERY CALL", href: "#contacto" }}
        overlayOpacity={0.32}
      />

      <ContactSection
        titleAs="h2"
        backgroundImage="/images/bg-5.jpg"
        className="py-[70px] xl:py-[120px]"
        lang="en"
      />
    </>
  );
}
