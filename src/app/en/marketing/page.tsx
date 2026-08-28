import type { Metadata } from "next";
import AboutLogoBlock from "@/components/AboutLogoBlock";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import CheckList from "@/components/CheckList";
import ContactSection from "@/components/ContactSection";
import FlipCardGrid from "@/components/FlipCardGrid";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceJsonLd from "@/components/ServiceJsonLd";
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
    languages: { es: "/marketing", en: "/en/marketing", "x-default": "/marketing" },
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
    title: "Work Plan",
    image: "/images/plan-de-trabajo-basecores-1.jpg",
    items: [
      "Defined objectives and tracking metrics",
      "Actions mapped out for each communication pillar",
      "Scheduling on a Gantt timeline",
      "Definition of the work team and project lead",
      "Measurement, analytics and weekly reporting",
    ],
  },
  {
    title: "Creative Strategy",
    image: "/images/creatividad-base-core-sales-1.jpg",
    items: [
      "Briefing-based discovery",
      "Competitive analysis",
      "Communication concept",
      "Target audience and buyer persona",
      "Value proposition and positioning",
      "Brand guidelines",
    ],
  },
  {
    title: "AI + Software",
    image: "/images/agentes-de-ia-base-core-sales-1.webp",
    items: [
      "Websites and landing pages built with Claude Code",
      "Email marketing with smart segmentation and automated sending",
      "Automated, behavior-based lead nurturing",
      "Predictive lead scoring: which contacts are closest to buying",
      "CRM and campaign tool integration",
    ],
  },
  {
    title: "SEO +\nAI Search",
    image: "/images/SEO-base-cores-sales-1.jpg",
    items: [
      "Ranking audit across Google and AI search engines",
      "Keyword research, semantic strategy and competitive analysis",
      "Site architecture, content and technical optimization",
      "Schema markup to get cited by Google and AI",
      "Tracking tag and pixel installation",
    ],
  },
  {
    title: "Websites",
    image: "/images/pagina-web-basecore-sales.jpg",
    items: [
      "Built with Claude Code",
      "Corporate identity and UX/UI design",
      "Responsive and multilingual",
      "Hosting on physical and virtual servers",
      "Version control and continuous backup",
      "CTAs, WhatsApp buttons and forms",
    ],
  },
  {
    title: "Social Media",
    image: "/images/redes-sociales-base-core-sales-1.jpg",
    items: [
      "Audit of current presence and profile optimization",
      "Content grid and creative, strategic copywriting",
      "Reels, Stories and video formats",
      "Post scheduling and community management",
      "Metrics, reporting and continuous optimization",
    ],
  },
  {
    title: "Paid Media",
    image: "/images/pauta-publicitaria-mkt-base-core-sales-1.jpg",
    items: [
      "Audience research and campaign strategy",
      "Ad creation and variants for A/B testing",
      "Google, Instagram, Facebook and LinkedIn Ads campaigns",
      "Retargeting and cross-channel budget management",
      "Results analysis: ROAS, CPA and cost per lead",
    ],
  },
  {
    title: "Graphic Design & Content",
    image: "/images/diseno-grafico-basecoresales-1.jpg",
    items: [
      "High-value graphic pieces",
      "Visual identity",
      "Creative assets for campaigns and ads",
      "Presentations, dossiers and sales materials",
    ],
  },
];

export default function MarketingPageEn() {
  return (
    <>
      <ServiceJsonLd name={title} description={description} path="/en/marketing" />
      <Breadcrumb current="Marketing" lang="en" path="/en/marketing" />

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
          "Communication Pillars". Navy background + white mark, same
          treatment as the home page's "Agencia de Marketing" cajón, so this
          block continues the hero's dark mood instead of a plain white slab. */}
      <section className="bg-navy py-[50px]">
        <div className="container-bc grid items-center gap-y-[30px] min-[1200px]:grid-cols-[auto_1fr_1.3fr] min-[1200px]:gap-x-[90px] min-[1200px]:gap-y-0">
          <AboutLogoBlock label="Marketing" dark />

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
                "Brand development",
                "Corporate identity",
                "Communication concept",
                "Creative strategy",
                "SEO & paid advertising",
                "Social media",
                "Websites",
              ]}
              dark
            />

            <div className="mt-[28px]">
              <Button href="#contacto">CONTACT US</Button>
            </div>
          </div>

          <div className="text-center">
            <p className="font-sans text-[18px] leading-[1.8] text-muted">
              No stage of the sales cycle works in isolation: presales needs a trustworthy brand, sales needs materials that back the pitch, and post-sales needs consistent communication.{" "}
              <strong className="font-bold text-white">Marketing is the foundation.</strong>
            </p>
            <p className="mt-[20px] font-sans text-[18px] leading-[1.8] text-muted">
              90% of B2B buyers start researching on their own, long before they talk to a salesperson. By the time they reach your sales team, they&apos;ve already formed an opinion: marketing defines{" "}
              <strong className="font-bold text-white">which opinion they arrive with</strong>.
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
      <section className="container-bc px-0 pt-[15px] md:pt-[24px]">
        <FlipCardGrid cards={pilares.slice(4)} grid={MARKETING_GRID} />
      </section>
      <div className="h-[50px]" aria-hidden="true" />

      <TechnologyBlock lang="en" stage="marketing" />

      {/* Recruiting — same construction as the cycle pages' Recruiting
          section, copy adapted from "sales force" to marketing. */}
      <section
        className="relative z-[1] min-h-[640px] bg-cover bg-right bg-no-repeat dt:flex dt:min-h-0 dt:bg-fixed"
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
