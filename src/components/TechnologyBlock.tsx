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
    cta: "MÁS INFORMACIÓN",
    ctaAriaLabel: "Más información sobre implementaciones tecnológicas",
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
    cta: "LEARN MORE",
    ctaAriaLabel: "Learn more about technology implementations",
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
    <section
      className="relative z-[1] bg-cover bg-center bg-no-repeat px-[15px] py-[70px] dt:bg-fixed dt:py-[110px]"
      style={{ backgroundImage: "url(/images/TECNOLOGIA-BASECORE.jpg)" }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/55 to-navy/45"
      />
      <div className="relative mx-auto flex max-w-[960px] flex-col items-center gap-[40px] md:flex-row md:justify-center md:gap-[76px]">
        <div className="flex shrink-0 flex-col items-center gap-[16px] text-center">
          <Image
            src="/images/base-core-logo-blanco-sin-slogan.webp"
            alt="Base Core"
            width={900}
            height={927}
            className="h-auto w-[140px] md:w-[190px]"
          />
          <div className="flex flex-col items-center gap-[4px]">
            <span className="font-sora text-[24px] font-extralight tracking-[2px] text-white md:text-[30px]">
              {t.label}
            </span>
            {stage && (
              <span className="font-sora text-[15px] font-light tracking-[2px] text-white/80 md:text-[18px]">
                {t.stageLabels[stage]}
              </span>
            )}
          </div>
        </div>

        <div className="flex max-w-[460px] flex-col items-start text-left">
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            align="left"
            dark
            maxWidth={800}
            className="mb-[15px] w-full"
            titleClassName="!text-[44px] !leading-[1.3]"
          />
          <CheckList items={bullets} dark size="md" />
          <div className="mt-[15px]">
            <Button href={t.href} size="sm" ariaLabel={t.ctaAriaLabel}>
              {t.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
