import Button from "./Button";
import SectionHeading from "./SectionHeading";
import type { Lang } from "@/lib/site";

/**
 * Home/service-page teaser for BaseHub — links to the bespoke /basehub page.
 * Full-width photo teaser, same construction as the E-Book CTA section
 * (background photo + bg-navy tint at 0.82 opacity + centred white text):
 * the same image /basehub's own hero uses, not a split layout or a laptop
 * mockup — that photo is bright/high-key, so it needs the E-Book CTA's
 * stronger tint (not PageHero's default) to keep the text legible.
 */
const copy = {
  es: {
    kicker: "BaseHub",
    title: "Tu proyecto, en un solo lugar",
    description:
      "Sin pagar una herramienta de gestión de proyectos aparte. BaseHub es la plataforma de seguimiento e implementación de Base Core, incluida en tu proyecto. Estado en tiempo real, tarea por tarea, rama por rama.",
    cta: "CONOCE BASEHUB",
    href: "/basehub",
  },
  en: {
    kicker: "BaseHub",
    title: "Your project, in one place",
    description:
      "No separate project management tool to pay for. BaseHub is Base Core's own tracking and implementation platform, included with your project. Real-time status, task by task, branch by branch.",
    cta: "SEE BASEHUB",
    href: "/en/basehub",
  },
} as const;

export default function BaseHubTeaser({
  lang = "es",
  className = "",
}: {
  lang?: Lang;
  className?: string;
}) {
  const t = copy[lang];

  return (
    <section
      className={`relative bg-cover bg-center bg-no-repeat py-[70px] xl:py-[90px] dt:bg-fixed ${className}`}
      style={{ backgroundImage: "url(/images/tableros-reporting-base-core-sales-1.webp)" }}
    >
      <span aria-hidden="true" className="absolute inset-0 bg-navy opacity-[0.82]" />
      <div className="container-bc relative text-center">
        <span className="mb-[10px] block font-sans text-[22px] font-semibold tracking-tight text-white md:text-[26px]">
          {t.kicker}
        </span>
        {/* Title set in the exact same type as the "BaseHub" wordmark on
            /basehub's "Qué es" cajón (font-sans/DM Sans, semibold,
            tracking-tight, 48/56px) instead of SectionHeading's usual
            heading font — bigger and matching that lockup one-for-one. */}
        <SectionHeading
          title={t.title}
          description={t.description}
          dark
          showLine={false}
          maxWidth={800}
          className="mx-auto mb-[20px]"
          titleClassName="!font-sans !text-[48px] !font-semibold !tracking-tight md:!text-[56px]"
        />
        <Button href={t.href} size="sm">
          {t.cta}
        </Button>
      </div>
    </section>
  );
}
