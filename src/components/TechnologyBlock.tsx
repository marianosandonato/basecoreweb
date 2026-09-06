import Image from "next/image";
import Button from "./Button";
import CheckList from "./CheckList";
import SectionHeading from "./SectionHeading";
import type { Lang } from "@/lib/site";

type Stage = "preventa" | "venta" | "posventa" | "marketing";

const copy = {
  es: {
    label: "Tecnología",
    eyebrow: "Implementaciones Tecnológicas",
    title: "IA + Software",
    bullets: [
      "Implementación de agentes y automatizaciones con Claude",
      "Desarrollo de software con Claude Code",
      "Implementación de CRM",
    ],
    cta: "IMPLEMENTACIONES TECNOLÓGICAS",
    href: "/tecnologia",
    stageLabels: {
      preventa: "Preventa",
      venta: "Venta",
      posventa: "Posventa",
      marketing: "Marketing",
    },
    stageBullets: {
      preventa: [
        "**Claude:** Agentes de calificación y enriquecimiento de leads",
        "**Claude Code:** Desarrollo de scrapers para nurturing",
        "**CRM:** Gestión de base de datos y oportunidades",
      ],
      venta: [
        "**Claude:** Agentes de seguimiento y análisis de oportunidades",
        "**Claude Code:** Tableros de pipeline, forecast y reporting de KPIs",
        "**CRM:** Configuración de etapas, criterios de avance y alertas",
      ],
      posventa: [
        "**Claude:** Agentes de detección de señales de churn y oportunidades de recompra",
        "**Claude Code:** Desarrollo de tableros de segmentación de cartera",
        "**CRM:** Planes de contacto, renovaciones y seguimiento posventa",
      ],
      marketing: [
        "**Claude:** Agentes de generación y adaptación de contenido",
        "**Claude Code:** Sitios web, SEO, campañas",
        "**CRM:** Canales de captación, campañas activas y leads de marketing",
      ],
    },
  },
  en: {
    label: "Technology",
    eyebrow: "Technology Implementations",
    title: "AI + Software",
    bullets: [
      "AI agent & automation implementation with Claude",
      "Custom software development with Claude Code",
      "CRM implementation",
    ],
    cta: "TECHNOLOGY IMPLEMENTATIONS",
    href: "/en/tecnologia",
    stageLabels: {
      preventa: "Presales",
      venta: "Sales",
      posventa: "Post-Sales",
      marketing: "Marketing",
    },
    stageBullets: {
      preventa: [
        "**Claude:** Lead scoring and enrichment agents",
        "**Claude Code:** Custom scraper development for nurturing",
        "**CRM:** Database and opportunity management",
      ],
      venta: [
        "**Claude:** Opportunity follow-up and analysis agents",
        "**Claude Code:** Pipeline, forecast, and KPI reporting dashboards",
        "**CRM:** Stage configuration, advancement criteria, and alerts",
      ],
      posventa: [
        "**Claude:** Churn-signal detection and win-back opportunity agents",
        "**Claude Code:** Portfolio segmentation dashboard development",
        "**CRM:** Contact plans, renewals, and post-sales follow-up",
      ],
      marketing: [
        "**Claude:** Content generation and repurposing agents",
        "**Claude Code:** Websites, SEO, campaigns",
        "**CRM:** Acquisition channels, active campaigns, and marketing leads",
      ],
    },
  },
} as const;

/**
 * "Tecnología / IA + Software" — full-bleed photo, logo on the left and the
 * text block on the right, ~2cm (76px) apart, both groups sitting directly
 * on the photo. First built on the home page, then reused on the cycle pages
 * (between Etapas and Recruiting) and /marketing (below Pilares).
 *
 * `stage` swaps the generic bullets for the page's own tech stack and adds
 * the cycle name under the "Tecnología" logo lockup; omit it (home page) to
 * keep the original generic copy.
 */
export default function TechnologyBlock({
  lang = "es",
  stage,
}: {
  lang?: Lang;
  stage?: Stage;
}) {
  const t = copy[lang];
  const bullets = stage ? t.stageBullets[stage] : t.bullets;

  return (
    <section className="relative z-[1] overflow-hidden px-[15px] py-[70px] dt:py-[110px]">
      {/* No navy overlay: this block is informational (like Metodología/Recruiting), not a CTA like BaseHub/E-Book -- photo chosen light enough for dark text unaided. */}
      <Image
        src="/images/Base-Core-Sales-estrategia-tecnologia.jpeg"
        alt=""
        fill
        sizes="(max-width: 1199px) 100vw, 1200px"
        className="object-cover object-center"
      />
      <div className="relative mx-auto flex max-w-[960px] flex-col items-center gap-[40px] md:flex-row md:justify-center md:gap-[76px]">
        <div className="flex shrink-0 flex-col items-center gap-[16px] text-center">
          <Image
            src="/images/base-core-logo-azul-sin-slogan.webp"
            alt="Base Core"
            width={900}
            height={927}
            className="h-auto w-[140px] md:w-[190px]"
          />
          <div className="flex flex-col items-center gap-[4px]">
            <span className="font-sora text-[24px] font-extralight tracking-[2px] text-navy md:text-[30px]">
              {t.label}
            </span>
            {stage && (
              <span className="font-sora text-[15px] font-light tracking-[2px] text-body md:text-[18px]">
                {t.stageLabels[stage]}
              </span>
            )}
          </div>
        </div>

        <div className="flex max-w-[460px] flex-col items-center text-center md:items-start md:text-left">
          {/* centerOnMobile (correction B): align="left" sets an explicit
              text-left on SectionHeading's own eyebrow/title, which -- being
              directly assigned, not inherited -- doesn't fall back to this
              column's text-center just because the column changed. Needs its
              own opt-in to actually center below `md`. */}
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            align="left"
            centerOnMobile
            showLine={false}
            maxWidth={800}
            className="mb-[15px] w-full"
            titleClassName="!text-[44px] !leading-[1.3]"
          />
          <CheckList items={bullets} size="md" centerOnMobile />
          <div className="mt-[15px]">
            {/* max-md: the label ("IMPLEMENTACIONES TECNOLÓGICAS") is wider
                than the mobile column, so it always wraps -- and an
                inline-block box that wraps naturally claims the *full*
                available width (CSS shrink-to-fit: once max-content exceeds
                available space, used width = available space), not just
                what its wrapped lines need. w-fit alone doesn't fix that --
                shrink-to-fit's own formula still resolves to the full
                available width whenever the unwrapped text is wider than it,
                so the box needs an explicit max-width to cap the available
                width fed into that formula (260px: just enough to fit the ES
                copy's longest word, "IMPLEMENTACIONES", on one of the two
                wrapped lines without it overflowing the box -- verified
                against both language variants via Playwright/browse). The
                parent column's own `items-center` (mobile) then centers that
                fixed-width box, and its inherited `text-center` centers the
                wrapped label inside it. */}
            <Button href={t.href} size="sm" className="max-md:w-fit max-md:max-w-[260px]">
              {t.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
