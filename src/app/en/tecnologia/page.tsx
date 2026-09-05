import type { Metadata } from "next";
import AboutLogoBlock from "@/components/AboutLogoBlock";
import BaseHubTeaser from "@/components/BaseHubTeaser";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import CheckList from "@/components/CheckList";
import ContactSection from "@/components/ContactSection";
import FlipCardGrid from "@/components/FlipCardGrid";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import { TECNOLOGIA_GRID } from "@/content/flipGrids";
import type { FlipCardData } from "@/content/types";
import { site } from "@/lib/site";

/** EN counterpart of /tecnologia's "Módulos" — see the ES page for source. */
const modules: readonly FlipCardData[] = [
  {
    title: "AI Agents",
    image: "/images/agentes-de-ia-base-core-sales-1.webp",
    items: [
      "Automatic lead scoring and enrichment",
      "Chatbots and smart intake forms for first-line filtering",
      "Database analysis and opportunity detection",
      "Generation and adaptation of sales content",
    ],
  },
  {
    title: "Automation",
    image: "/images/automatizacion-base-core-sales-1.webp",
    items: [
      "Automatic lead capture and routing",
      "Follow-up sequences, scrapers and nurturing",
      "Sync between CRM, marketing and operations",
      "Consolidated campaign and KPI reporting",
    ],
  },
  {
    title: "CRM",
    image: "/images/crm-base-core-sales-1.webp",
    items: [
      "Implementation of HubSpot, Pipedrive, Zoho or other platforms",
      "Pipeline, stage and progression-criteria setup",
      "Automated assignment, follow-ups and alerts",
      "Data migration and team adoption",
    ],
  },
  {
    title: "Management Software",
    image: "/images/softwares-gestion-base-core-sales-1.webp",
    items: [
      "Agile development with Claude Code",
      "Sales, operations or project management systems",
      "Client portals and internal applications",
      "Order, project and inventory management",
    ],
  },
  {
    title: "Dashboards & Reporting",
    image: "/images/tableros-reporting-base-core-sales-1.webp",
    items: [
      "Executive dashboard with the KPIs leadership actually uses",
      "Real-time pipeline, forecast and stage conversion",
      "Data consolidation from CRM, ERP and campaign platforms",
      "Automated reports that send themselves",
    ],
  },
  {
    title: "Marketing",
    image: "/images/marketing-tecnologia-base-core-sales-1.webp",
    items: [
      "Websites and landing pages built with Claude Code",
      "Google ranking and AI-search visibility",
      "Automatic lead capture from web and social into the CRM",
      "Real ROI measurement by campaign and channel",
    ],
  },
  {
    title: "AI Content & Design",
    image: "/images/contenido-diseno-ia-base-core-sales-1.webp",
    items: [
      "Content production at scale, on-brand and on-tone",
      "Creative variants to test and optimize campaigns",
      "Graphics, decks and proposals with Claude Design",
      "Sales-ready materials for the whole team",
    ],
  },
  {
    title: "Technology Diagnostics",
    image: "/images/diagnostico-tecnologico-base-core-sales-1.webp",
    items: [
      "Tool inventory: what you use, what you pay for, what's duplicated",
      "Mapping how your processes actually work today, not how they should",
      "Identifying gaps and automation opportunities",
      "Prioritization based on impact and effort",
    ],
  },
];

const title = "AI & CRM for Businesses";
const description =
  "AI and CRM for businesses: AI agent implementation, process automation, CRM consulting and management software for your sales team.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/tecnologia",
    languages: { es: "/tecnologia", en: "/en/tecnologia", "x-default": "/tecnologia" },
  },
  openGraph: {
    locale: "en_US",
    url: `${site.url}/en/tecnologia`,
    title,
    description,
    images: ["/images/TECNOLOGIA-BASECORE.jpg"],
  },
};

export default function TechnologyPage() {
  return (
    <>
      <ServiceJsonLd name={title} description={description} path="/en/tecnologia" />
      <Breadcrumb current="Technology" lang="en" path="/en/tecnologia" />

      <PageHero
        title={["Looking to implement", "AI and CRM for your business?"]}
        lines={[
          "We implement AI agents and processes.",
          "We migrate and set up CRM and other software.",
        ]}
        image="/images/TECNOLOGIA-BASECORE.jpg"
        cta={{ label: "BOOK A DISCOVERY CALL", href: "#contacto" }}
        overlayOpacity={0.32}
      />

      {/* "What We Do" (replica of the cycle pages' about block) — logo, text,
          text. Navy background + white mark, same treatment as the home
          page's "Agencia de Marketing" cajón, so this block continues the
          hero's dark mood instead of a plain white slab. */}
      <section className="bg-navy py-[50px]">
        <div className="container-bc grid items-center gap-y-[30px] min-[1200px]:grid-cols-[auto_1fr_1.3fr] min-[1200px]:gap-x-[90px] min-[1200px]:gap-y-0">
          <AboutLogoBlock label="Technology" dark />

          <div>
            <SectionHeading
              eyebrow="WHAT WE DO"
              align="left"
              dark
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
              dark
            />

            <div className="mt-[28px]">
              <Button href="#contacto">CONTACT US</Button>
            </div>
          </div>

          <div className="text-center">
            <p className="font-sans text-[18px] leading-[1.8] text-muted">
              More than half of all CRM implementations fail because of low
              adoption, unclear roles, or workflows that were never mapped
              out. A CRM doesn&apos;t fix a broken sales process, it mirrors
              it. That&apos;s why we define the process{" "}
              <strong className="font-bold text-white">before implementing</strong>{" "}
              the tool.
            </p>
            <p className="mt-[20px] font-sans text-[18px] leading-[1.8] text-muted">
              Implementing AI isn&apos;t just adding another tool: it&apos;s
              delegating decisions. Each one requires a{" "}
              <strong className="font-bold text-white">criterion</strong>{" "}
              that today lives in someone&apos;s head on your team. Our job
              is to make it explicit before automating it.
            </p>
          </div>
        </div>
      </section>

      {/* Modules heading — EN counterpart of /tecnologia's "Módulos". */}
      <div className="h-[50px]" aria-hidden="true" />
      <section className="container-bc py-[10px]">
        <SectionHeading
          eyebrow="TECHNOLOGY FOUNDATIONS"
          title="Modules"
          maxWidth={800}
          className="mb-[16px]"
        />
      </section>

      <section className="container-bc px-0 pt-[40px]">
        <FlipCardGrid cards={modules.slice(0, 4)} grid={TECNOLOGIA_GRID} />
      </section>
      <section className="container-bc px-0 pt-[15px] md:pt-[24px]">
        <FlipCardGrid cards={modules.slice(4)} grid={TECNOLOGIA_GRID} />
      </section>

      {/* Foot of the Modules grid — same 50px as /marketing gets below its
          own Pilares grid (was missing here, so the grid sat flush against
          the teaser's photo below it). */}
      <div className="h-[50px]" aria-hidden="true" />

      {/* /en/tecnologia has no TechnologyBlock/Recruiting cajones of its own
          (it IS the tecnologia page), so the teaser sits here instead, right
          before Contact. */}
      <BaseHubTeaser lang="en" />

      <ContactSection
        titleAs="h2"
        backgroundImage="/images/bg-5.jpg"
        className="py-[70px] xl:py-[120px]"
        lang="en"
      />
    </>
  );
}
