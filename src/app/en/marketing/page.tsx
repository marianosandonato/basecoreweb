import type { Metadata } from "next";
import AboutLogoBlock from "@/components/AboutLogoBlock";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import CheckList from "@/components/CheckList";
import ContactSection from "@/components/ContactSection";
import FlipCardGrid from "@/components/FlipCardGrid";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import TechnologyBlock from "@/components/TechnologyBlock";
import { MARKETING_GRID } from "@/content/flipGrids";
import type { FlipCardData } from "@/content/types";
import { site } from "@/lib/site";

const title = "Marketing Consulting for Small Business";
const description =
  "Marketing consulting for small business: branding, SEO, social media, paid advertising, graphic design and websites.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/marketing",
    languages: { es: "/marketing", en: "/en/marketing" },
  },
  openGraph: {
    locale: "en_US",
    url: `${site.url}/en/marketing`,
    title,
    description,
    images: ["/images/marketing-slide-base-core-sales.jpg"],
  },
};

const pilares: readonly FlipCardData[] = [
  {
    title: "Creative Strategy",
    image: "/images/creatividad-base-core-sales-1.jpg",
    items: [
      "Current-state analysis, briefing-based discovery process, definition of the communication concept and creative strategy.",
    ],
  },
  {
    title: "Data Foundation",
    image: "/images/base-estadistica-base-core-sales-mkt-1.jpg",
    items: [
      "Grounded in market research, trends, forecasting and consumer insights.",
    ],
  },
  {
    title: "Work Plan",
    image: "/images/plan-de-trabajo-basecores-1.jpg",
    items: [
      "Gantt chart or action plan presentation, laying out the actions for each communication pillar on a timeline.",
    ],
  },
  {
    title: "SEO",
    image: "/images/SEO-base-cores-sales-1.jpg",
    items: [
      "Audit of current rankings and an improvement plan based on: keywords, semantic strategy, competitors, site architecture and content.",
    ],
  },
  {
    title: "Paid Advertising",
    image: "/images/pauta-publicitaria-mkt-base-core-sales-1.jpg",
    items: [
      "Audience research, ad creation, optimization and results analysis for Google, Instagram, Facebook and LinkedIn Ads campaigns.",
    ],
  },
  {
    title: "Social Media",
    image: "/images/redes-sociales-base-core-sales-1.jpg",
    items: [
      "Defining social presence, bio optimization, content grid, creative & strategic copywriting, moderation and post scheduling.",
    ],
  },
  {
    title: "Graphic Design",
    image: "/images/diseno-grafico-basecoresales-1.jpg",
    items: [
      "Creating high-value graphic pieces to build visual and corporate identity.",
    ],
  },
  {
    title: "Websites",
    image: "/images/pagina-web-basecore-sales.jpg",
    items: [
      "Your website is your brand's storefront — essential for generating business!",
      "Corporate identity, UX/UI design, responsive build, language, hosting, content and copy.",
    ],
  },
];

export default function MarketingPageEn() {
  return (
    <>
      <Breadcrumb current="Marketing" lang="en" />

      <PageHero
        title={["Looking to boost your", "digital marketing?"]}
        lines={[
          "We create communication concepts.",
          "We generate campaigns that attract leads.",
        ]}
        image="/images/marketing-slide-base-core-sales.jpg"
        cta={{ label: "BOOK A DISCOVERY CALL", href: "#contacto" }}
      />

      {/* "What We Do" (replica of the cycle pages' about block) — text,
          image stack, text. Sits right after the hero, ahead of
          "Communication Pillars". */}
      <section className="py-[50px]">
        <div className="container-bc grid items-center gap-y-[30px] min-[1200px]:grid-cols-[auto_1fr_1.3fr] min-[1200px]:gap-x-[90px] min-[1200px]:gap-y-0">
          <AboutLogoBlock label="Marketing" />

          <div>
            <SectionHeading
              eyebrow="WHAT WE DO"
              align="left"
              maxWidth={800}
              className="mb-[16px] w-full"
            />

            <CheckList
              items={[
                "Brand development",
                "Corporate identity",
                "Communication concept",
                "Creative strategy",
                "SEO & paid advertising",
                "Social media",
                "Websites",
              ]}
            />

            <div className="mt-[28px]">
              <Button href="#contacto">CONTACT US</Button>
            </div>
          </div>

          <div className="text-center">
            <p className="font-sans text-[18px] leading-[1.8] text-body">
              No stage of the sales cycle works in isolation: presales needs a trustworthy brand, sales needs materials that back the pitch, and post-sales needs consistent communication. Marketing is the foundation everything else stands on.
            </p>
            <p className="mt-[20px] font-sans text-[18px] leading-[1.8] text-body">
              90% of B2B buyers start researching on their own, long before they talk to a salesperson. If your brand isn&apos;t built — and isn&apos;t findable — at that moment, your team competes at a disadvantage no script can make up for.
            </p>
          </div>
        </div>
      </section>

      <div className="h-[50px]" aria-hidden="true" />
      <section className="container-bc py-[10px]">
        <SectionHeading
          eyebrow="MARKETING AGENCY"
          title="Communication Pillars"
          maxWidth={800}
          className="mb-[16px]"
        />
      </section>

      <section className="container-bc px-0 pt-[40px]">
        <FlipCardGrid cards={pilares.slice(0, 4)} grid={MARKETING_GRID} />
      </section>
      <section className="container-bc px-0 md:pt-[24px]">
        <FlipCardGrid cards={pilares.slice(4)} grid={MARKETING_GRID} />
      </section>
      <div className="h-[50px]" aria-hidden="true" />

      <TechnologyBlock lang="en" />

      {/* Recruiting — same construction as the cycle pages' Recruiting
          section, copy adapted from "sales force" to marketing. */}
      <section
        className="relative z-[1] bg-cover bg-right bg-no-repeat dt:flex dt:bg-fixed"
        style={{ backgroundImage: "url(/images/Fondo-Base-Core-01.webp)" }}
      >
        <div className="px-[15px] pb-0 pt-[70px] md:pb-[80px] md:pt-[60px] dt:w-[55%] dt:py-0">
          <div className="h-[10px] dt:h-[160px]" />
        </div>
        <div className="px-[15px] pb-[45px] max-md:pl-[25px] dt:w-[45%] dt:py-[100px] dt:pl-[85px]">
          <SectionHeading
            eyebrow="RECRUITING: MARKETING FORCE"
            title="We build a solid, professional marketing team"
            description="Beyond our training model, we look for profiles that fit and perform within the proposed marketing model."
            align="left"
            maxWidth={800}
            className="mb-[8px] pr-[50px] dt:mb-[10px]"
          />
          <div className="mt-[20px]">
            <CheckList
              items={[
                "Job descriptions",
                "Sourcing channels",
                "Interview coordination",
                "Candidate presentation",
              ]}
              size="md"
            />
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
