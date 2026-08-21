import type { Metadata } from "next";
import AboutLogoBlock from "@/components/AboutLogoBlock";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import CheckList from "@/components/CheckList";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

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
 * EN counterpart of /tecnologia — same placeholder scope: the hero
 * (mirroring /marketing's first cajon), the "What We Do" second cajon and
 * the contact footer for now.
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

      {/* "What We Do" (replica of the cycle pages' about block) — logo, text, text. */}
      <section className="py-[50px]">
        <div className="container-bc grid items-center gap-y-[30px] dt:grid-cols-[auto_1fr_1.3fr] dt:gap-x-[90px] dt:gap-y-0">
          <AboutLogoBlock label="Technology" />

          <div>
            <SectionHeading
              eyebrow="WHAT WE DO"
              align="left"
              maxWidth={800}
              className="mb-[16px] w-full"
            />

            <CheckList
              items={[
                "AI: agents, process automation",
                "CRM: custom, Hubspot, Zoho, Pipedrive",
                "Custom management software",
                "Billing, logistics & inventory software",
              ]}
            />

            <div className="mt-[28px]">
              <Button href="#contacto">CONTACT US</Button>
            </div>
          </div>

          <div className="text-center">
            <p className="font-sans text-[18px] leading-[1.8] text-body">AAA</p>
            <p className="mt-[20px] font-sans text-[18px] leading-[1.8] text-body">AAA</p>
          </div>
        </div>
      </section>

      <ContactSection
        titleAs="h2"
        backgroundImage="/images/bg-5.jpg"
        className="py-[70px] xl:py-[120px]"
        lang="en"
      />
    </>
  );
}
