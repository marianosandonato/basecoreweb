import type { ReactNode } from "react";
import Image from "next/image";
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
    title: (
      <>
        Tu proyecto,
        <br /> en un solo lugar.
      </>
    ),
    lines: [
      "Sin pagar una herramienta de gestión de proyectos aparte.",
      <>
        BaseHub es la plataforma de seguimiento e implementación de Base Core,
        <br /> incluida en tu proyecto.
      </>,
      "Estado en tiempo real, tarea por tarea, área por área.",
    ] as readonly ReactNode[],
    cta: "CONOCE BASEHUB",
    href: "/basehub",
  },
  en: {
    kicker: "BaseHub",
    title: (
      <>
        Your project,
        <br /> in one place.
      </>
    ),
    lines: [
      "No separate project management tool to pay for.",
      "BaseHub is Base Core's own tracking and implementation platform, included with your project.",
      "Real-time status, task by task, area by area.",
    ] as readonly ReactNode[],
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
    <section className={`relative overflow-hidden py-[70px] xl:py-[90px] ${className}`}>
      <Image
        src="/images/tableros-reporting-base-core-sales-1.webp"
        alt=""
        fill
        sizes="(max-width: 1199px) 100vw, 1200px"
        className="object-cover object-center"
      />
      <span aria-hidden="true" className="absolute inset-0 bg-navy opacity-[0.82]" />
      <div className="container-bc relative text-center">
        {/* Kicker set in the type of the "BaseHub" wordmark on /basehub's
            "Qué es" cajón (font-sans/DM Sans, semibold, tracking-tight) —
            not a smaller caption above the title, the wordmark itself. 10%
            larger than that cajón's own 48/56px (53/62px) per feedback that
            this teaser's kicker should read bigger than the one there. */}
        <span className="mb-[10px] block font-sans text-[53px] font-semibold tracking-tight text-white md:text-[62px]">
          {t.kicker}
        </span>
        <SectionHeading
          title={t.title}
          description={
            <>
              {t.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </>
          }
          dark
          showLine={false}
          maxWidth={800}
          className="mx-auto mb-[20px]"
          titleClassName="!text-[36px] !leading-[1.3] md:!text-[44px]"
        />
        <Button href={t.href} size="sm">
          {t.cta}
        </Button>
      </div>
    </section>
  );
}
