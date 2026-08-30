import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import CheckList from "@/components/CheckList";
import ContactSection from "@/components/ContactSection";
import MethodologyGrid, { type MethodologyStep } from "@/components/MethodologyGrid";
import ProcessImageStack from "@/components/ProcessImageStack";
import SectionHeading from "@/components/SectionHeading";
import ServiceCards from "@/components/ServiceCards";
import TechnologyBlock from "@/components/TechnologyBlock";
import { site } from "@/lib/site";
import { PosventaIcon, PreventaIcon, VentaIcon } from "@/components/cycleIcons";
import {
  ChartBarIcon,
  ChartLineIcon,
  CogsIcon,
  PaperPlaneIcon,
} from "@/components/icons";

/**
 * "/en" is a child route segment of the root layout (unlike "/", which
 * shares the root layout's own segment and so is exempt from its title
 * template — see node_modules/next/dist/docs' generate-metadata.md, the
 * "title.template ... not the segment it's defined in" note). So `title`
 * here gets " – Base Core Sales" appended by the root template automatically;
 * only the openGraph title needs it spelled out, since OG fields aren't templated.
 */
const homeTitle = "Commercial Consulting for Small Business";
const homeOgTitle = `${homeTitle} – Base Core Sales`;
const homeDescription =
  "Commercial consulting for small businesses in Spain & Latin America: sales, prospecting, retention and marketing as a service. We build productive foundations.";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: {
    canonical: "/en",
    languages: { es: "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    locale: "en_US",
    url: `${site.url}/en`,
    title: homeOgTitle,
    description: homeDescription,
    images: ["/images/basecoresales-slide-marketing-espana-1.jpg"],
  },
};

const aboutChecklist = [
  "Presales, Sales & Post-Sales",
  "Commercial strategy & plan",
  "Marketing: brand development",
  "Tools: CRM, custom software",
  "AI: automations with Claude",
  "Team selection & training",
];

const methodology: readonly MethodologyStep[] = [
  {
    title: "Discovery",
    icon: PaperPlaneIcon,
    frontImage: "/images/01-base-core-sales.jpg",
    backImage: "/images/1-diagnostico-base-core-sales.webp",
    items: ["Free audit", "Assessment of your business's current state"],
  },
  {
    title: "Roadmap",
    icon: ChartBarIcon,
    frontImage: "/images/02-base-core-sales.jpg",
    backImage: "/images/2-plan-de-rutas-base-core-sales.webp",
    items: ["Gantt chart or action plan presentation"],
  },
  {
    title: "Strategy",
    icon: CogsIcon,
    frontImage: "/images/03-base-core-sales.jpg",
    backImage: "/images/3-estrategia-base-core-sales.webp",
    items: [
      "Discovery findings presentation",
      "Plan refinement",
      "Your project leader is assigned",
      "Weekly meeting sprints",
    ],
  },
  {
    title: "Continuous Improvement",
    icon: ChartLineIcon,
    frontImage: "/images/04-base-core-sales.jpg",
    backImage: "/images/4-mejora-continua-base-core-sales.webp",
    items: [
      "Process development",
      "Metrics monitoring & improvement",
      "Project status tracking",
    ],
  },
];

// Destinations stay on the Spanish routes: those pages don't have an /en
// version yet (see documentation/PLAN-I18N.md) and a translated card linking
// to a translated page beats a 404 or blocking the link entirely.
const cycles = [
  {
    title: "Presales",
    href: "/preventa",
    icon: PreventaIcon,
    image: "/images/presales-basecoresales-espana.jpg",
    roles: [
      "Market research - Database building - Prospecting - Cold calling - Lead qualification - Sales opportunity generation",
    ],
  },
  {
    title: "Sales",
    href: "/venta",
    icon: VentaIcon,
    image: "/images/sales-basecoresales-espana.jpg",
    roles: [
      "Current-state assessment - Sales model - Pipeline - Goals & targets - KPIs - Conversion rates - Forecasting - Onboarding & coaching models - Compensation schemes - CRM implementation",
    ],
  },
  {
    title: "Post-Sales",
    href: "/posventa",
    icon: PosventaIcon,
    image: "/images/support-basecoresales-espana.jpg",
    roles: [
      "Customer scoring - ABC analysis - Cross & up-selling - Historical churn & acquisition tracking - Win-back - Customer acquisition - Portfolio segmentation - Retention & loyalty",
    ],
  },
];

const partnerChecklist = [
  "Creative strategy",
  "Data & analytics",
  "SEO: audit & rankings",
  "SEM - Meta & Google Ads",
  "Social Media",
  "Graphic design",
  "Websites",
];

const recruitingChecklist = [
  "Job descriptions",
  "Sourcing channels",
  "Screening filters",
  "Interview coordination",
  "Candidate selection",
];

export default function HomePageEn() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="hero relative overflow-hidden">
        <div className="animate-hero-panzoom absolute inset-0">
          <Image
            src="/images/basecoresales-slide-marketing-espana-1.jpg"
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="container-bc relative h-full">
          <div className="relative h-full">
            <div className="hero-layer hero-title-layer">
              <h1 className="hero-title animate-hero-title font-heading font-bold text-white">
                Commercial & Marketing
                <br />Consulting
              </h1>
            </div>
            <div className="hero-layer hero-tagline-layer">
              <p className="hero-tagline animate-hero-tagline font-sans text-white">
                BUILDING PRODUCTIVE FOUNDATIONS
              </p>
            </div>
            <div className="hero-layer hero-button-layer">
              <div className="animate-hero-button">
                <a
                  href="#contacto"
                  className="hero-button inline-block rounded-[4px] bg-primary font-montserrat font-semibold uppercase tracking-[1px] text-white transition-colors duration-300 hover:bg-[rgba(5,117,188,0.9)]"
                >
                  BOOK A DISCOVERY CALL
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Us / Process as a Service ───────────────────────────────
          50px top/bottom, matching the cycle pages' Etapas/Puestos boxes.
          Three columns: text, the shrunk image composition centred, then
          the "full cycle" copy. */}
      <section className="py-[50px]">
        <div className="container-bc grid items-center dt:grid-cols-3">
          <div className="px-[15px] pb-[45px]">
            {/* Mobile-only flat image */}
            <Image
              src="/images/Process-as-a-Service.jpg"
              alt="Process as a Service"
              width={850}
              height={567}
              sizes="100vw"
              className="mb-[40px] mt-[15px] h-auto w-full md:hidden"
            />

            <SectionHeading
              eyebrow="About Us"
              title="Process as a Service"
              align="left"
              maxWidth={800}
              className="mb-[8px] w-full dt:mb-[10px]"
            />

            <h3 className="mb-[12px] font-heading text-[18px] font-medium leading-[24px] text-heading md:text-[20px] md:leading-[32px]">
              Base Core delivers consulting services across every stage of sales and
              marketing.
            </h3>

            <CheckList items={aboutChecklist} />

            <div className="mt-[28px]">
              <Button href="#contacto">CONTACT US</Button>
            </div>
          </div>

          {/* Layered composition — desktop/tablet only, shrunk and centred
              in the middle column. */}
          <div className="hidden px-[15px] md:flex md:justify-center">
            <ProcessImageStack />
          </div>

          <div className="px-[15px] pb-[45px]">
            <h3 className="mb-[12px] font-heading text-[18px] font-medium leading-[24px] text-heading md:text-[20px] md:leading-[32px]">
              We implement processes that drive your company&apos;s growth, help you get
              organized, and increase your sales.
            </h3>

            <p className="font-sans text-[18px] leading-[1.8] text-body">
              We support the implementation with a detailed work plan and concrete
              timelines, so progress is tracked and results are visible at every stage.
            </p>
            <p className="mt-[20px] font-sans text-[18px] leading-[1.8] text-body">
              Marketing <strong className="font-bold uppercase">attracts</strong>. Presales{" "}
              <strong className="font-bold uppercase">qualifies</strong>. Sales{" "}
              <strong className="font-bold uppercase">closes</strong>. Post-sales{" "}
              <strong className="font-bold uppercase">retains</strong>.
              <br />
              That&apos;s the complete cycle we work on at Base Core.
            </p>
          </div>
        </div>
      </section>

      {/* ── Methodology ──────────────────────────────────────────────────── */}
      <section
        className="bg-cover bg-center bg-no-repeat pb-[70px] pt-[80px] dt:bg-fixed dt:pb-[90px] dt:pt-[110px]"
        style={{ backgroundImage: "url(/images/footer-base-core-sales.webp)" }}
      >
        <div className="container-bc px-0">
          <MethodologyGrid steps={methodology} />
        </div>
      </section>

      {/* ── Sales Cycles ─────────────────────────────────────────────────────
          50px top/bottom, matching the cycle pages' Etapas/Puestos boxes. */}
      <section className="py-[50px]">
        <div className="container-bc px-0">
          <div className="px-[15px]">
            <SectionHeading
              eyebrow="commercial mentoring"
              title="Sales Cycles"
              maxWidth={800}
              className="mb-[30px]"
            />
          </div>
          <ServiceCards cards={cycles} cellClass="w-full md:w-1/2 dt:w-1/3" />
        </div>
      </section>

      {/* ── Strategic Partner / Not-a-Numb3r ──────────────────────────────── */}
      <section className="relative z-[1] md:flex">
        <div
          className="relative bg-cover bg-left bg-no-repeat px-[15px] pb-[80px] pt-[60px] max-md:bg-top md:w-1/2"
          style={{ backgroundImage: "url(/images/MARKETING-BASECORE.webp)" }}
        >
          <span aria-hidden="true" className="absolute inset-0 bg-black opacity-[0.74]" />
          <div className="relative flex h-full min-h-[300px] flex-col items-center justify-center gap-[18px] text-center">
            <Image
              src="/images/base-core-logo-blanco-sin-slogan.webp"
              alt="Base Core"
              width={900}
              height={927}
              sizes="(min-width: 768px) 190px, 140px"
              className="h-auto w-[140px] md:w-[190px]"
            />
            <span className="font-sora text-[24px] font-extralight tracking-[2px] text-white md:text-[30px]">
              Marketing
            </span>
          </div>
        </div>

        <div className="bg-navy px-[15px] py-[60px] max-md:pl-[35px] md:w-1/2 dt:py-[106px] dt:pl-[100px]">
          <div className="max-w-[680px]">
            <SectionHeading
              eyebrow="Brand Development"
              title="Marketing Agency"
              align="left"
              dark
              maxWidth={800}
              className="mb-[15px]"
              titleClassName="!text-[44px] !leading-[1.3]"
            />
            <CheckList items={partnerChecklist} dark size="md" />
            <div className="mt-[15px]">
              <Button href="/en/marketing" size="sm">
                MARKETING AGENCY
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TechnologyBlock lang="en" />

      {/* ── Recruiting ──────────────────────────────────────────────────── */}
      <section
        className="relative z-[1] bg-cover bg-right bg-no-repeat dt:flex dt:bg-fixed"
        style={{ backgroundImage: "url(/images/Fondo-Base-Core-01.webp)" }}
      >
        <div className="px-[15px] pb-0 pt-[70px] md:pb-[80px] md:pt-[60px] dt:w-[55%] dt:py-0">
          <div className="h-[10px] dt:h-[160px]" />
        </div>

        <div className="px-[15px] pb-[45px] max-md:pl-[25px] dt:w-[45%] dt:py-[100px] dt:pl-[85px]">
          <SectionHeading
            eyebrow="RECRUITING: SALES FORCE"
            title="We support you in sourcing and selecting the right talent for your business."
            description="Beyond our training model, we look for profiles that fit and perform within the proposed sales model."
            align="left"
            maxWidth={800}
            className="mb-[8px] pr-[50px] dt:mb-[10px]"
          />
          <div className="mt-[20px]">
            <CheckList items={recruitingChecklist} size="md" />
          </div>
        </div>
      </section>

      {/* ── E-Book CTA ──────────────────────────────────────────────────── */}
      <section
        className="relative bg-cover bg-center bg-no-repeat pb-[70px] pt-[80px] dt:bg-fixed dt:pb-[75px] dt:pt-[90px]"
        style={{ backgroundImage: "url(/images/base-core-sales-ebook.webp)" }}
      >
        <span aria-hidden="true" className="absolute inset-0 bg-navy opacity-[0.82]" />
        <div className="container-bc relative">
          <SectionHeading
            title="Optimize your processes: first steps toward an effective sales process"
            description="Download our free E-Book"
            dark
            showLine={false}
            maxWidth={900}
            className="mb-[20px]"
            titleClassName="!text-[26px] !leading-[40px] md:!text-[40px] md:!leading-[50px] dt:!text-[44px] dt:!leading-[68px]"
            descriptionClassName="!text-[24px] !text-[#C6C6C6] !pt-[20px]"
          />
          <div className="text-center">
            <Button
              href="/en/ebook"
              size="sm"
              className="mt-[15px]"
              ariaLabel="Download the sales process from scratch e-book"
            >
              DOWNLOAD
            </Button>
          </div>
        </div>
      </section>

      <ContactSection lang="en" />
    </>
  );
}
