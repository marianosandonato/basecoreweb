import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BaseHubMockup from "@/components/BaseHubMockup";
import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import { site } from "@/lib/site";

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
  openGraph: {
    locale: "en_US",
    url: `${site.url}/en/basehub`,
    title,
    description,
    images: ["/images/basehub-dashboard.webp"],
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

      {/* overlayOpacity: /venta's own hero reads fine at PageHero's 0.14
          default because that photo is naturally dark/muted. This photo
          (bright screens, white desk) is high-key — checked 0.14 and
          /tecnologia's 0.32 exception side by side against /venta and both
          still left the title sitting on bare white screen with no contrast.
          0.82 (same value the E-Book CTA section already uses for its own
          photo backdrop) is what actually gets this photo to the same
          legible-everywhere result /venta has — verified with a screenshot,
          not assumed. */}
      <PageHero
        beforeTitle={
          // Same wordmark, same size (48px/56px, font-sans, semibold,
          // tracking-tight) as the "BaseHub" lockup in the "What it is"
          // cajón right below — see that section's own comment for why it's
          // a plain span rather than a logo image (no BaseHub logo file
          // exists; the product's own developer confirmed this is the
          // wordmark treatment).
          <span className="font-sans text-[48px] font-semibold tracking-tight text-white md:text-[56px]">
            BaseHub
          </span>
        }
        title={["Your project,", "in one place."]}
        lines={[
          "No separate project management tool to pay for.",
          "BaseHub is Base Core's own tracking and implementation platform, included with your project. Real-time status, task by task, area by area.",
        ]}
        image="/images/tableros-reporting-base-core-sales-1.webp"
        overlayOpacity={0.82}
        // This photo is natively 1200x801 (measured on the source file), so
        // PageHero's default 1200px cap is a no-op here: Next's optimizer
        // never upscales past the source, meaning the w=1200/1920/2048/3840
        // candidates are all byte-for-byte the same 70,056-byte file
        // (confirmed via curl). Keeping `100vw` explicit so a future default
        // change to PageHero doesn't silently start capping a photo that has
        // nothing to gain from it.
        sizes="100vw"
        cta={{ label: "BOOK A DISCOVERY CALL", href: "#contacto" }}
      />

      {/* "What it is" — no logo lockup: just "BaseHub" on its own, larger,
          set in the product's own wordmark type (per the BaseHub app's
          developer: DM Sans / font-sans, font-semibold, tracking-tight —
          not a heading-tag font, a plain span). */}
      <section className="bg-navy py-[50px]">
        <div className="container-bc grid items-center gap-y-[30px] min-[1200px]:grid-cols-[auto_1fr] min-[1200px]:gap-x-[90px] min-[1200px]:gap-y-0">
          <div className="hidden items-center justify-center text-center md:flex">
            <span className="font-sans text-[48px] font-semibold tracking-tight text-white md:text-[56px]">
              BaseHub
            </span>
          </div>

          <div>
            <SectionHeading
              eyebrow="PROJECT MANAGEMENT"
              title={
                <>
                  Your implementation, visible
                  <br /> from day one
                </>
              }
              align="left"
              dark
              maxWidth={800}
              className="mb-[16px] w-full"
            />
            <p className="font-sans text-[18px] leading-[1.8] text-muted">
              When Base Core kicks off your project, it&apos;s organized inside BaseHub: your own
              dashboard showing the development status of the areas we&apos;ll work on together.
            </p>
          </div>
        </div>
      </section>

      {/* Features heading — same spacing pattern as the other service pages'
          feature-grid headings. */}
      <div className="h-[50px]" aria-hidden="true" />
      <section id="how-it-works" className="container-bc py-[10px]">
        <SectionHeading
          eyebrow="DASHBOARD"
          title="How it works"
          maxWidth={800}
          className="mb-[16px]"
        />
      </section>

      {/* Product screenshot, laptop-framed — sits between the heading and
          the feature cards, same 40px-ish rhythm as the gap above/below the
          Pilares/Módulos grids elsewhere on the site. */}
      <section className="container-bc pb-[10px] pt-[10px]">
        <BaseHubMockup alt="BaseHub dashboard showing progress across a project's six areas" />
      </section>

      {/* Feature grid — the 5 real features, two columns on desktop. 50px
          foot so the cards don't sit flush against the section's bottom
          edge, matching the Etapas/Puestos boxes' own 50px foot elsewhere. */}
      <section className="container-bc pb-[50px] pt-[40px]">
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
