import Image from "next/image";
import type { SVGProps } from "react";
import Button from "./Button";
import SectionHeading from "./SectionHeading";
import type { Lang } from "@/lib/site";

type Stage = "preventa" | "venta" | "posventa" | "marketing";

/** One feature row: a short tool/category label (rendered as a tag above the
    description) plus the outcome copy itself. The label used to be repeated
    as a bold inline prefix on every bullet ("**Claude:** ..."); it now lives
    in its own visual slot (icon tile + tag), so the description never
    repeats the tool name -- rewriting one without the other reintroduces the
    exact redundancy this redesign removes. */
type Bullet = { label: string; text: string };

const copy = {
  es: {
    label: "Tecnología",
    eyebrow: "CRM e IA para Empresas",
    title: "IA + CRM",
    bullets: [
      { label: "Agente Claude", text: "Agentes de IA para procesos comerciales" },
      { label: "Claude Code", text: "Software y paneles de control a medida" },
      { label: "CRM", text: "Implementación y configuración de tu CRM" },
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
        { label: "Agente Claude", text: "Calificación y enriquecimiento de leads" },
        { label: "Claude Code", text: "Scrapers de datos para nurturing" },
        { label: "CRM", text: "Base de datos y oportunidades comerciales" },
      ],
      venta: [
        { label: "Agente Claude", text: "Seguimiento y análisis de oportunidades" },
        { label: "Claude Code", text: "Tableros de pipeline, forecast y KPIs" },
        { label: "CRM", text: "Etapas, criterios de avance y alertas" },
      ],
      posventa: [
        { label: "Agente Claude", text: "Detección de señales de churn y recompra" },
        { label: "Claude Code", text: "Tableros de segmentación de cartera" },
        { label: "CRM", text: "Contacto, renovaciones y seguimiento posventa" },
      ],
      marketing: [
        { label: "Agente Claude", text: "Generación y adaptación de contenido" },
        { label: "Claude Code", text: "Sitios web, SEO y campañas" },
        { label: "CRM", text: "Captación, campañas activas y leads" },
      ],
    },
  },
  en: {
    label: "Technology",
    eyebrow: "AI & CRM for Businesses",
    title: "AI + CRM",
    bullets: [
      { label: "Claude Agent", text: "AI agents for commercial processes" },
      { label: "Claude Code", text: "Custom software and dashboards" },
      { label: "CRM", text: "CRM implementation and setup" },
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
        { label: "Claude Agent", text: "Lead scoring and enrichment" },
        { label: "Claude Code", text: "Custom scrapers for nurturing" },
        { label: "CRM", text: "Database and opportunity management" },
      ],
      venta: [
        { label: "Claude Agent", text: "Opportunity follow-up and analysis" },
        { label: "Claude Code", text: "Pipeline, forecast, and KPI dashboards" },
        { label: "CRM", text: "Stage setup, advancement criteria, and alerts" },
      ],
      posventa: [
        { label: "Claude Agent", text: "Churn-signal detection and win-back opportunities" },
        { label: "Claude Code", text: "Portfolio segmentation dashboards" },
        { label: "CRM", text: "Contact plans, renewals, and follow-up" },
      ],
      marketing: [
        { label: "Claude Agent", text: "Content generation and repurposing" },
        { label: "Claude Code", text: "Websites, SEO, and campaigns" },
        { label: "CRM", text: "Acquisition channels, campaigns, and leads" },
      ],
    },
  },
} as const;

/**
 * Three fixed pillars, always in the same order (Claude agent / Claude Code /
 * CRM) across the generic copy and all four stages -- so the icon can be
 * mapped by bullet index instead of carried in the data. Hand-drawn with
 * plain primitives (circles/lines, no borrowed icon-font path data) so the
 * shape is exactly what's specified, nothing recalled from memory.
 */
function AgentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 6v3.2M12 9.2 6.2 18M12 9.2 17.8 18" />
      <circle cx="12" cy="5" r="2" fill="currentColor" stroke="none" />
      <circle cx="5.5" cy="19" r="2" fill="currentColor" stroke="none" />
      <circle cx="18.5" cy="19" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M9 7 4 12l5 5M15 7l5 5-5 5" />
    </svg>
  );
}

function CrmIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <ellipse cx="12" cy="6.2" rx="7" ry="2.6" />
      <path d="M5 6.2v5.8c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6.2" />
      <path d="M5 12v5.8c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V12" />
    </svg>
  );
}

const bulletIcons = [AgentIcon, CodeIcon, CrmIcon] as const;

/**
 * "Tecnología / IA + CRM" — full-bleed photo, logo on the left and the
 * text block on the right, ~2cm (76px) apart, both groups sitting directly
 * on the photo. First built on the home page, then reused on the cycle pages
 * (between Etapas and Recruiting) and /marketing (below Pilares).
 *
 * `stage` swaps the generic bullets for the page's own tech stack and adds
 * the cycle name under the "Tecnología" logo lockup; omit it (home page) to
 * keep the original generic copy.
 *
 * Visual redesign (9/2026): the 3 bullets used to be plain checklist text
 * (small check icon + bold inline tool-name prefix) directly on the photo --
 * flagged as "too much text, not visual enough". They now sit inside a
 * frosted glass panel (bg-white/75 + backdrop-blur, doesn't hide the photo,
 * just grounds the text on its own surface) as icon-tile rows: a distinct
 * hand-drawn icon per pillar (agent network / code brackets / CRM stack) in
 * a navy tile, a small tag with the tool name, and the outcome copy below --
 * replacing the old bold-prefix-inline pattern instead of just restyling it.
 */
export default function TechnologyBlock({
  lang = "es",
  stage,
}: {
  lang?: Lang;
  stage?: Stage;
}) {
  const t = copy[lang];
  const bullets: readonly Bullet[] = stage ? t.stageBullets[stage] : t.bullets;

  return (
    <section className="relative z-[1] overflow-hidden px-[15px] py-[55px] dt:py-[90px]">
      {/* No navy overlay: this block is informational (like Metodología/Recruiting), not a CTA like BaseHub/E-Book -- photo chosen light enough for dark text unaided. That same light photo is what makes the bullets' new white/75 glass panel read as a lifted surface instead of a flat white box. */}
      <Image
        src="/images/Base-Core-Sales-estrategia-tecnologia.jpeg"
        alt=""
        fill
        sizes="(max-width: 1199px) 100vw, 1200px"
        className="object-cover object-center"
      />
      <div className="relative mx-auto flex max-w-[960px] flex-col items-center gap-[40px] md:flex-row md:justify-center md:gap-[76px]">
        <div className="flex shrink-0 flex-col items-center gap-[12px] text-center">
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
            className="mb-[18px] w-full"
            titleClassName="!text-[44px] !leading-[1.3]"
            // eyebrow-to-title gap (spacing polish): matches the 15px the
            // wrapping `className` already puts between title and bullets,
            // measured with Playwright -- eyebrow has no margin of its own
            // otherwise, just its 30px line-height.
            eyebrowClassName="mb-[15px]"
          />

          {/* Feature panel (visual redesign): one frosted card holding the 3
              pillars, always left-aligned regardless of the column's own
              mobile centering -- icon+text rows don't read well centered. */}
          <div className="flex w-full flex-col divide-y divide-line/60 overflow-hidden rounded-[14px] border border-line/70 bg-white/75 text-left shadow-[0_10px_30px_-12px_rgba(0,41,75,0.28)] backdrop-blur-sm">
            {bullets.map(({ label, text }, index) => {
              const Icon = bulletIcons[index];
              return (
                <div
                  key={label}
                  className="flex items-start gap-[14px] px-[18px] py-[14px] md:px-[22px] md:py-[16px]"
                >
                  <span className="mt-[1px] flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] bg-navy text-white">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <div className="text-left">
                    <p className="font-sans text-[11px] font-semibold uppercase leading-[1.4] tracking-[1px] text-primary">
                      {label}
                    </p>
                    <p className="mt-[2px] font-sans text-[15px] leading-[1.5] text-body md:text-[16px]">
                      {text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* bullets-to-button gap (spacing polish): matches the section's
              own bottom padding above, so the button sits as far from the
              bullets as it does from the cajón's foot. */}
          <div className="mt-[45px] dt:mt-[70px]">
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
