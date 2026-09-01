import type { Metadata } from "next";
import AboutLogoBlock from "@/components/AboutLogoBlock";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceJsonLd from "@/components/ServiceJsonLd";

const title = "BaseHub: Project Management Platform";
const description =
  "BaseHub: Base Core's own project tracking and implementation platform, included with your engagement. No separate project management tool to pay for.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/basehub",
    languages: { es: "/basehub", en: "/en/basehub", "x-default": "/basehub" },
  },
};

/** EN counterpart of /basehub's 5 real features — see the ES page for source. */
const features = [
  {
    title: "Dashboard by work area",
    description: "All six branches of your business, each with its progress percentage, at a glance.",
  },
  {
    title: "Process catalog",
    description:
      "Every process we implement is tracked with its real status: pending, diagnosis, implementation, implemented.",
  },
  {
    title: "Task tracking",
    description: 'Priority and target date per task. A "Today" view shows what\'s pending, sorted for you.',
  },
  {
    title: "Progress history",
    description: "A timeline shows how each process evolved, not just today's snapshot.",
  },
  {
    title: "Access for your team",
    description:
      "Log in with your own user and see your implementation's real status, with your company's logo — no more waiting on someone to send you a report.",
  },
];

export default function BaseHubPageEn() {
  return (
    <>
      <ServiceJsonLd name={title} description={description} path="/en/basehub" />
      <Breadcrumb current="BaseHub" lang="en" path="/en/basehub" />

      <PageHero
        title={["Your project,", "in one place."]}
        lines={[
          "No separate project management tool to pay for.",
          "BaseHub is Base Core's own tracking and implementation platform, included with your project: see the real status, task by task, branch by branch.",
        ]}
        image="/images/tableros-reporting-base-core-sales-1.webp"
        cta={{ label: "SEE HOW IT WORKS", href: "#how-it-works" }}
      />

      {/* "What it is" — same two-column construction as the cycle pages'
          "What We Do" block (logo, text), minus the third checklist column:
          this copy is one paragraph, not a bullet list. */}
      <section className="bg-navy py-[50px]">
        <div className="container-bc grid items-center gap-y-[30px] min-[1200px]:grid-cols-[auto_1fr] min-[1200px]:gap-x-[90px] min-[1200px]:gap-y-0">
          <AboutLogoBlock label="BaseHub" dark />

          <div>
            <SectionHeading
              eyebrow="WHAT IT IS"
              title="Your implementation, visible from day one"
              align="left"
              dark
              maxWidth={800}
              className="mb-[16px] w-full"
            />
            <p className="font-sans text-[18px] leading-[1.8] text-muted">
              When Base Core kicks off your project, it&apos;s organized inside BaseHub: your own
              dashboard showing the status of your business&apos;s six areas —Marketing, Presales,
              Sales, Post-sales, Recruiting and Technology— without having to ask anyone what&apos;s
              going on.
            </p>
          </div>
        </div>
      </section>

      {/* Features heading — same spacing pattern as the other service pages'
          feature-grid headings. */}
      <div className="h-[50px]" aria-hidden="true" />
      <section id="how-it-works" className="container-bc py-[10px]">
        <SectionHeading eyebrow="BASEHUB" title="How it works" maxWidth={800} className="mb-[16px]" />
      </section>

      {/* Feature grid — the 5 real features, two columns on desktop. */}
      <section className="container-bc pb-[10px] pt-[30px]">
        <div className="grid gap-[24px] md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[4px] border border-line bg-white p-[28px] shadow-[0_0_30px_0_rgba(0,0,0,0.06)]"
            >
              <h3 className="mb-[10px] font-heading text-[20px] font-bold leading-[26px] text-heading">
                {feature.title}
              </h3>
              <p className="font-sans text-[16px] leading-[1.8] text-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product screenshot — reserved until the real capture is provided
          (see "Decisiones cerradas" in the BaseHub planning artifact). */}
      <section className="container-bc py-[50px]">
        <div className="flex aspect-video w-full items-center justify-center rounded-[4px] border-2 border-dashed border-line bg-soft">
          <p className="px-[15px] text-center font-sans text-[16px] text-body">
            BaseHub screenshot — coming soon
          </p>
        </div>
      </section>

      {/* Final CTA — same dark, centred construction as the E-Book CTA. CTA
          label matches the real one already used sitewide ("BOOK A DISCOVERY
          CALL" — the EN equivalent of "AGENDAR RELEVAMIENTO") rather than the
          unverified "BOOK YOUR ASSESSMENT" from the earlier copy draft. */}
      <section className="bg-navy py-[70px] xl:py-[90px]">
        <div className="container-bc text-center">
          <SectionHeading
            title="Start your implementation with BaseHub included"
            description="Book a free assessment and we'll show you what your project looks like organized in BaseHub from day one."
            dark
            showLine={false}
            maxWidth={700}
            className="mx-auto mb-[30px]"
          />
          <Button href="#contacto" size="sm">
            BOOK A DISCOVERY CALL
          </Button>
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
