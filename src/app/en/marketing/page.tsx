import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection";
import Counters, { type CounterData } from "@/components/Counters";
import { AddsIcon, BrandIcon, ContentIcon } from "@/components/counterIcons";
import FlipCardGrid from "@/components/FlipCardGrid";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { MARKETING_GRID } from "@/content/flipGrids";
import type { FlipCardData } from "@/content/types";
import { site } from "@/lib/site";

const title = "Marketing Consulting for Small Business";
const description =
  "Marketing consulting for small business with Not-a-Numb3r: branding, SEO, social media, paid advertising, graphic design and websites.";

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

const counters: readonly CounterData[] = [
  { value: "100", symbol: "%", label: "Brand", icon: BrandIcon },
  { value: "100", symbol: "%", label: "Content", icon: ContentIcon },
  { value: "100", symbol: "%", label: "Adds", icon: AddsIcon },
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

      <div className="h-[100px]" aria-hidden="true" />
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
      <section className="container-bc px-0 pt-[24px]">
        <FlipCardGrid cards={pilares.slice(4)} grid={MARKETING_GRID} />
      </section>
      <div className="h-[100px]" aria-hidden="true" />

      <section className="relative py-[70px] xl:pb-[100px] xl:pt-[110px]">
        <span aria-hidden="true" className="absolute inset-0 bg-navy opacity-90" />
        <div className="container-bc relative">
          <SectionHeading
            eyebrow="NOT-A NUMB3R"
            title="Concept as a Service"
            description="Elevating brands with NaN means: concept > strategy > advertising > scalability. When you have clarity of process, you have clarity of direction — and that's everything, in any area of life. As simple as that, as complex as that. Direction demands process, and process defines direction."
            dark
            showLine={false}
            maxWidth={900}
            className="mb-[20px]"
            titleClassName="!text-[32px] !leading-[1.15] lg:!text-[46px] xl:!text-[60px] xl:!leading-[68px]"
            eyebrowClassName="!text-body"
            descriptionClassName="!pt-[20px] !text-[#D7D7D7]"
          >
            <div className="mt-[30px]">
              <Button href="#contacto">BOOK A DISCOVERY CALL</Button>
            </div>
          </SectionHeading>
        </div>
      </section>

      <section
        className="bg-cover bg-center bg-no-repeat py-[65px] max-md:bg-left xl:bg-fixed xl:py-[115px]"
        style={{ backgroundImage: "url(/images/Project-Management-Base-Core-Sales.webp)" }}
      >
        <div className="container-bc-wide">
          <div className="lg:flex">
            <div className="lg:w-[10%]" />
            <div className="flex flex-col lg:w-[40%]">
              <SectionHeading
                eyebrow="OUR STRATEGIC PARTNER AS A MARKETING AGENCY"
                title={
                  <Image
                    src="/images/NaN-blanco.png"
                    alt="NaN"
                    width={523}
                    height={158}
                    className="h-auto w-[190px] brightness-0"
                  />
                }
                description="NaN is also a philosophy — a way of acting, thinking and executing. We grow brands through bold, strategic creativity, focused on finding new ways to present content to users across digital platforms, envisioning the communications of today and tomorrow."
                align="left"
                maxWidth={530}
                className="mb-[16px]"
                eyebrowClassName="mb-[20px]"
                descriptionClassName="!pt-[20px]"
              />
              <div className="mt-[20px]">
                <Counters items={counters} />
              </div>
            </div>
            <div className="lg:w-[50%]" />
          </div>
        </div>
      </section>

      <section
        className="bg-navy bg-repeat-x py-[65px] max-md:bg-left xl:py-[115px]"
        style={{ backgroundImage: "url(/images/footer-base-core-sales.webp)" }}
      >
        <div className="container-bc-wide">
          <div className="lg:flex">
            <div className="lg:w-[10%]" />
            <div className="lg:w-[40%]">
              <SectionHeading
                eyebrow="MINDSET"
                title="We grow your business"
                description="NaN is philosophical too. It's a way of thinking and acting in life — of rethinking how we relate, starting from interpersonal respect and extending outward to the world. It's a desire to elevate relationships, because relationships are where teams come from. And teams are where excellence and results come from. And the results we're after are limitless, because they're tied to energy and passion — which, like us, aren't just numbers. #Not-a-numb3r."
                align="left"
                dark
                maxWidth={530}
                className="mb-[16px]"
                eyebrowClassName="!text-white"
                descriptionClassName="!pt-[20px]"
              />
            </div>
            <div className="lg:w-[50%]" />
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
