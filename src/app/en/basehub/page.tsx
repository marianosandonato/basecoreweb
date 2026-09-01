import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection";
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

      {/* Bespoke hero: solid navy (not a stretched photo — the header/nav
          overlay reads exactly like every other inner page, no legibility
          fight) with the real BaseHub screenshot shown below at its native
          resolution, capped by container-bc's 1170px so it never upscales. */}
      <section className="relative bg-navy pb-[60px] pt-[70px] dt:pt-[300px]">
        <div className="container-bc text-center">
          <h1 className="mx-auto max-w-[900px] font-montserrat text-[35px] font-light leading-[42px] text-white md:text-[50px] md:leading-[59px]">
            Your project,
            <span className="inline dt:block"> in one place.</span>
          </h1>
          <div className="mx-auto mt-[20px] max-w-[859px] font-sans text-[18px] leading-[32.4px] text-white/85">
            <p>No separate project management tool to pay for.</p>
            <p>
              BaseHub is Base Core&apos;s own tracking and implementation platform, included with
              your project. Real-time status, task by task, branch by branch.
            </p>
          </div>
          <div className="mt-[20px]">
            <Button href="#how-it-works" size="sm">
              SEE HOW IT WORKS
            </Button>
          </div>
        </div>

        <div className="container-bc mt-[50px]">
          <div className="relative mx-auto aspect-[2559/1388] w-full overflow-hidden rounded-[8px] border border-white/10 shadow-[0_20px_60px_0_rgba(0,0,0,0.35)]">
            <Image
              src="/images/basehub-dashboard.webp"
              alt="BaseHub dashboard showing progress across a project's six areas"
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 1200px) 1170px, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* "What it is" — logo lockup built for BaseHub specifically: the tree
          mark alone (no "Base Core" wordmark baked into the image) with
          "BaseHub" set below it, bold, matching the wordmark's own weight in
          the product header rather than the thin, tracked type the other
          pages' AboutLogoBlock uses for a page name. */}
      <section className="bg-navy py-[50px]">
        <div className="container-bc grid items-center gap-y-[30px] min-[1200px]:grid-cols-[auto_1fr] min-[1200px]:gap-x-[90px] min-[1200px]:gap-y-0">
          <div className="hidden flex-col items-center gap-[10px] text-center md:flex">
            <Image
              src="/images/base-core-tree-icon-blanco.webp"
              alt=""
              width={700}
              height={581}
              className="h-auto w-[150px] md:w-[200px]"
            />
            <span className="font-heading text-[26px] font-bold text-white md:text-[32px]">
              BaseHub
            </span>
          </div>

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
        <SectionHeading
          eyebrow="PROJECT MANAGEMENT"
          title="How it works"
          maxWidth={800}
          className="mb-[16px]"
        />
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

      {/* Final CTA — same dark, centred construction as the E-Book CTA. CTA
          label matches the real one already used sitewide ("BOOK A DISCOVERY
          CALL" — the EN equivalent of "AGENDAR RELEVAMIENTO"). */}
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
