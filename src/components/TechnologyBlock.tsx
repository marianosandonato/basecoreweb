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
    eyebrow: "Convertimos tus procesos en sistemas",
    title: "IA + CRM",
    bullets: [
      { label: "IA", text: "Agentes que apoyan toda tu operación comercial." },
      { label: "Automatización", text: "Marketing, ventas y CRM sin tareas manuales" },
      { label: "Software a medida", text: "Sitios, dashboards y portales de clientes" },
      { label: "CRM", text: "Implementación de HubSpot, Pipedrive, Zoho, entre otros" },
    ],
    cta: "IMPLEMENTACIONES TECNOLÓGICAS",
    href: "/tecnologia",
    stageLabels: {
      preventa: "Preventa",
      venta: "Venta",
      posventa: "Posventa",
      marketing: "Marketing",
    },
    stageEyebrows: {
      preventa: "Tecnología para acelerar la preventa",
      venta: "Tecnología para vender más y mejor",
      posventa: "Tecnología para retener y hacer crecer",
      marketing: "Tecnología para escalar tu marketing",
    },
    stageBullets: {
      preventa: [
        { label: "IA", text: "Agentes de calificación y enriquecimiento de leads" },
        { label: "Automatización", text: "Scoring, nurturing y asignación automática" },
        { label: "Software a medida", text: "Prospección y enriquecimiento de datos" },
        { label: "CRM", text: "Gestión de leads, calificación y seguimiento" },
      ],
      venta: [
        { label: "IA", text: "Agentes de análisis y mejora de abordaje" },
        { label: "Automatización", text: "Seguimiento, tareas y alertas automáticas" },
        { label: "Software a medida", text: "Tableros de pipeline, forecast y KPIs" },
        { label: "CRM", text: "Funnels, responsables y reporting comercial" },
      ],
      posventa: [
        { label: "IA", text: "Agentes de gestión en churn y recompra" },
        { label: "Automatización", text: "Renovaciones, recordatorios y retención" },
        { label: "Software a medida", text: "Tableros de segmentación de cartera" },
        { label: "CRM", text: "Planes de contacto e historial de clientes" },
      ],
      marketing: [
        { label: "IA", text: "Contenidos generados y adaptados por canal" },
        { label: "Automatización", text: "Captación, nurturing y seguimiento de leads" },
        { label: "Software a medida", text: "Webs, landings y herramientas de marketing" },
        { label: "CRM", text: "Leads, campañas y segmentación centralizados" },
      ],
    },
  },
  en: {
    label: "Technology",
    eyebrow: "We turn your processes into systems",
    title: "AI + CRM",
    bullets: [
      { label: "AI", text: "Agents that support your entire sales operation." },
      { label: "Automation", text: "Marketing, sales, and CRM without manual tasks" },
      { label: "Custom Software", text: "Websites, dashboards, and client portals" },
      { label: "CRM", text: "HubSpot, Pipedrive, Zoho, and others" },
    ],
    cta: "TECHNOLOGY IMPLEMENTATIONS",
    href: "/en/tecnologia",
    stageLabels: {
      preventa: "Presales",
      venta: "Sales",
      posventa: "Post-Sales",
      marketing: "Marketing",
    },
    stageEyebrows: {
      preventa: "Technology to accelerate presales",
      venta: "Technology to sell more and better",
      posventa: "Technology to retain and grow clients",
      marketing: "Technology to scale your marketing",
    },
    stageBullets: {
      preventa: [
        { label: "AI", text: "Lead qualification and enrichment agents" },
        { label: "Automation", text: "Scoring, nurturing, and automatic assignment" },
        { label: "Custom Software", text: "Prospecting and data enrichment" },
        { label: "CRM", text: "Lead management, qualification, and follow-up" },
      ],
      venta: [
        { label: "AI", text: "Analysis and approach-improvement agents" },
        { label: "Automation", text: "Follow-up, tasks, and automatic alerts" },
        { label: "Custom Software", text: "Pipeline, forecast, and KPI dashboards" },
        { label: "CRM", text: "Funnels, owners, and sales reporting" },
      ],
      posventa: [
        { label: "AI", text: "Churn and win-back management agents" },
        { label: "Automation", text: "Renewals, reminders, and retention" },
        { label: "Custom Software", text: "Portfolio segmentation dashboards" },
        { label: "CRM", text: "Contact plans and client history" },
      ],
      marketing: [
        { label: "AI", text: "Content generated and adapted by channel" },
        { label: "Automation", text: "Acquisition, nurturing, and lead follow-up" },
        { label: "Custom Software", text: "Websites, landing pages, and marketing tools" },
        { label: "CRM", text: "Leads, campaigns, and segmentation, centralized" },
      ],
    },
  },
} as const;

/**
 * Four fixed pillars, always in the same order (IA / Automatización /
 * Software a medida / CRM) across the generic copy and all four stages -- so
 * the icon can be mapped by bullet index instead of carried in the data.
 * Hand-drawn with plain primitives (circles/lines/arcs, no borrowed icon-font
 * path data) so the shape is exactly what's specified, nothing recalled from
 * memory.
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

/** Two arced arrows chasing each other into a closed loop -- a hand-drawn
    take on the familiar "sync"/refresh glyph, standing in for continuous,
    unattended automation (as opposed to the one-off agent actions AgentIcon
    represents). Same primitives family as its siblings: arcs + short
    straight arrowhead strokes, no filled shapes. */
function AutomationIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M4.5 12a7.5 7.5 0 0 1 12.8-5.3M19.5 12a7.5 7.5 0 0 1-12.8 5.3" />
      <path d="M17.3 3.3v3.6h-3.6M6.7 20.7v-3.6h3.6" />
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

const bulletIcons = [AgentIcon, AutomationIcon, CodeIcon, CrmIcon] as const;

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
 * Visual redesign (9/2026): the bullets used to be plain checklist text
 * (small check icon + bold inline tool-name prefix) directly on the photo --
 * flagged as "too much text, not visual enough". They now sit inside a
 * frosted glass panel (bg-white/75 + backdrop-blur, doesn't hide the photo,
 * just grounds the text on its own surface) as icon-tile rows: a distinct
 * hand-drawn icon per pillar (agent network / sync loop / code brackets /
 * CRM stack) in a navy tile, a small tag with the pillar name, and the
 * outcome copy below -- replacing the old bold-prefix-inline pattern instead
 * of just restyling it.
 *
 * Copy pass (9/2026, second round): expanded from 3 pillars (Agente Claude /
 * Claude Code / CRM) to 4 (IA / Automatización / Software a medida / CRM) --
 * "Automatización" was missing as its own line even though the block always
 * covered it implicitly. Each page also gets its own eyebrow instead of one
 * generic line shared by all five placements; no intro paragraph was added
 * between the title and the panel (evaluated and dropped -- the eyebrow +
 * four scannable rows already carry the page-specific context, and a
 * sentence in between would repeat the row copy right above it while
 * breaking the direct title-to-panel rhythm the visual redesign relies on).
 */
export default function TechnologyBlock({
  lang = "es",
  stage,
}: {
  lang?: Lang;
  stage?: Stage;
}) {
  const t = copy[lang];
  const eyebrow = stage ? t.stageEyebrows[stage] : t.eyebrow;
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
            sizes="(min-width: 768px) 190px, 140px"
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
            eyebrow={eyebrow}
            title={t.title}
            align="left"
            centerOnMobile
            showLine={false}
            maxWidth={800}
            className="mb-[18px] w-full"
            titleClassName="!text-[45px] !leading-[1.3]"
            // eyebrow-to-title gap (spacing polish): matches the 15px the
            // wrapping `className` already puts between title and bullets,
            // measured with Playwright -- eyebrow has no margin of its own
            // otherwise, just its 30px line-height.
            eyebrowClassName="mb-[15px]"
          />

          {/* Feature panel (visual redesign): one frosted card holding the 4
              pillars, always left-aligned regardless of the column's own
              mobile centering -- icon+text rows don't read well centered.
              Row padding/icon size trimmed from the original 3-row build
              (was px-[18/22] py-[14/16], 38px tile, 14px gap) so a 4th row
              doesn't make the card disproportionately tall, especially on
              mobile -- verified with Playwright against the approved 3-row
              version so density reads as "one family", not just "smaller". */}
          <div className="flex w-full flex-col divide-y divide-line/60 overflow-hidden rounded-[14px] border border-line/70 bg-white/75 text-left shadow-[0_10px_30px_-12px_rgba(0,41,75,0.28)] backdrop-blur-sm">
            {bullets.map(({ label, text }, index) => {
              const Icon = bulletIcons[index];
              return (
                <div
                  key={label}
                  className="flex items-start gap-[12px] px-[18px] py-[11px] md:px-[20px] md:py-[13px]"
                >
                  <span className="mt-[1px] flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[9px] bg-navy text-white">
                    <Icon className="h-[16px] w-[16px]" />
                  </span>
                  <div className="text-left">
                    <p className="font-sans text-[15px] font-semibold uppercase leading-[1.4] tracking-[1px] text-primary md:text-[16px]">
                      {label}
                    </p>
                    <p className="mt-[2px] font-sans text-[14px] leading-[1.45] text-body md:text-[15px]">
                      {text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* bullets-to-button gap (spacing polish): trimmed from the
              original 3-row build's mt-[45px]/[70px] (which matched the
              section's own bottom padding) to keep the section's total
              height in check now that the panel itself grew by a row. */}
          <div className="mt-[35px] dt:mt-[55px]">
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
