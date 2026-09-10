import Image from "next/image";
import Button from "./Button";
import CheckList from "./CheckList";
import SectionHeading from "./SectionHeading";
import type { Lang } from "@/lib/site";

type Stage = "preventa" | "venta" | "posventa" | "marketing";

const copy = {
  es: {
    label: "Tecnología",
    eyebrow: "Convertimos tus procesos en sistemas",
    title: "IA + Automatización + CRM",
    intro:
      "Agentes de IA que ejecutan tareas, automatizaciones que conectan tus procesos y CRM que centraliza toda tu operación comercial.",
    bullets: [
      "**IA:** Agentes que califican leads, hacen seguimiento de oportunidades y detectan señales de posventa durante todo el ciclo comercial.",
      "**Automatización:** Workflows que conectan marketing, ventas, CRM y posventa sin depender de tareas manuales.",
      "**Software a medida:** Sitios, dashboards, portales de clientes y herramientas internas adaptadas a tus procesos comerciales.",
      "**CRM:** Implementamos y optimizamos HubSpot, Pipedrive, Zoho y otras plataformas para mejorar la gestión de leads, oportunidades, clientes y todo tu ciclo comercial.",
    ],
    cta: "IMPLEMENTACIONES TECNOLÓGICAS",
    href: "/tecnologia",
    stageLabels: {
      preventa: "Preventa",
      venta: "Venta",
      posventa: "Posventa",
      marketing: "Marketing",
    },
    stageEyebrow: {
      marketing: "Tecnología para escalar tu marketing",
      preventa: "Tecnología para acelerar la preventa",
      venta: "Tecnología para vender más y mejor",
      posventa: "Tecnología para retener y hacer crecer a tus clientes",
    },
    stageIntro: {
      marketing:
        "Convertimos tu marketing en un sistema de captación, nutrición y medición conectado con tu operación comercial.",
      preventa:
        "Identificamos, enriquecemos y calificamos oportunidades para que tu equipo comercial se concentre en los leads con mayor potencial.",
      venta:
        "Automatizamos el seguimiento comercial, ordenamos tu pipeline y transformamos los datos de ventas en decisiones.",
      posventa: "Convertimos la posventa en un sistema de seguimiento, retención y crecimiento de clientes.",
    },
    stageBullets: {
      preventa: [
        "**IA:** Agentes que califican, investigan y enriquecen leads según los criterios de tu negocio.",
        "**Automatización:** Flujos de lead scoring, nurturing, asignación y seguimiento para acelerar el paso de lead a oportunidad.",
        "**Software a medida:** Herramientas de prospección, enriquecimiento de datos y gestión de oportunidades adaptadas a tu proceso.",
        "**CRM:** Gestión de leads, criterios de calificación, asignación automática y seguimiento de cada oportunidad.",
      ],
      venta: [
        "**IA:** Agentes que analizan oportunidades, preparan seguimientos y detectan acciones para avanzar en cada negocio.",
        "**Automatización:** Flujos para seguimiento, tareas, alertas y actualización automática de oportunidades.",
        "**Software a medida:** Dashboards de pipeline, forecast, KPIs y herramientas comerciales adaptadas a tu proceso.",
        "**CRM:** Configuración de etapas, criterios de avance, responsables, actividades, alertas y reporting comercial.",
      ],
      posventa: [
        "**IA:** Agentes que detectan señales de churn, oportunidades de recompra y necesidades de atención.",
        "**Automatización:** Flujos para seguimiento, renovaciones, recordatorios, satisfacción y acciones de retención.",
        "**Software a medida:** Dashboards de cartera, segmentación, indicadores de clientes y herramientas de seguimiento.",
        "**CRM:** Gestión de clientes, planes de contacto, renovaciones, historial e información para nuevas oportunidades.",
      ],
      marketing: [
        "**IA:** Agentes que investigan, generan y adaptan contenidos para diferentes audiencias y canales.",
        "**Automatización:** Workflows para captación, nurturing, campañas y seguimiento de leads sin tareas repetitivas.",
        "**Software a medida:** Sitios web, landing pages, herramientas de marketing y soluciones SEO adaptadas a tus objetivos.",
        "**CRM:** Captura y centralización de leads, campañas, segmentación y datos para conectar marketing con ventas.",
      ],
    },
  },
  en: {
    label: "Technology",
    eyebrow: "We turn your processes into systems",
    title: "AI + Automation + CRM",
    intro:
      "AI agents that execute tasks, automations that connect your processes, and a CRM that centralizes your entire commercial operation.",
    bullets: [
      "**AI:** Agents that qualify leads, follow up on opportunities, and catch post-sales signals throughout the entire sales cycle.",
      "**Automation:** Workflows that connect marketing, sales, CRM, and post-sales without relying on manual tasks.",
      "**Custom software:** Sites, dashboards, client portals, and internal tools tailored to your sales processes.",
      "**CRM:** We implement and optimize HubSpot, Pipedrive, Zoho, and other platforms to improve lead, opportunity, and customer management across your entire sales cycle.",
    ],
    cta: "TECHNOLOGY IMPLEMENTATIONS",
    href: "/en/tecnologia",
    stageLabels: {
      preventa: "Presales",
      venta: "Sales",
      posventa: "Post-Sales",
      marketing: "Marketing",
    },
    stageEyebrow: {
      marketing: "Technology to scale your marketing",
      preventa: "Technology to accelerate presales",
      venta: "Technology to sell more and better",
      posventa: "Technology to retain and grow your customers",
    },
    stageIntro: {
      marketing:
        "We turn your marketing into an acquisition, nurturing, and measurement system connected to your sales operation.",
      preventa:
        "We identify, enrich, and qualify opportunities so your sales team focuses on the leads with the most potential.",
      venta: "We automate sales follow-up, organize your pipeline, and turn your sales data into decisions.",
      posventa: "We turn post-sales into a system for following up, retaining, and growing customers.",
    },
    stageBullets: {
      preventa: [
        "**AI:** Agents that qualify, research, and enrich leads based on your business's criteria.",
        "**Automation:** Lead scoring, nurturing, assignment, and follow-up flows to speed up the move from lead to opportunity.",
        "**Custom software:** Prospecting, data enrichment, and opportunity management tools tailored to your process.",
        "**CRM:** Lead management, qualification criteria, automatic assignment, and follow-up for every opportunity.",
      ],
      venta: [
        "**AI:** Agents that analyze opportunities, prepare follow-ups, and flag actions to move each deal forward.",
        "**Automation:** Flows for follow-up, tasks, alerts, and automatic opportunity updates.",
        "**Custom software:** Pipeline, forecast, and KPI dashboards and sales tools tailored to your process.",
        "**CRM:** Stage configuration, advancement criteria, owners, activities, alerts, and sales reporting.",
      ],
      posventa: [
        "**AI:** Agents that detect churn signals, repurchase opportunities, and attention needs.",
        "**Automation:** Flows for follow-up, renewals, reminders, satisfaction, and retention actions.",
        "**Custom software:** Portfolio dashboards, segmentation, customer indicators, and follow-up tools.",
        "**CRM:** Customer management, contact plans, renewals, history, and information for new opportunities.",
      ],
      marketing: [
        "**AI:** Agents that research, generate, and adapt content for different audiences and channels.",
        "**Automation:** Workflows for acquisition, nurturing, campaigns, and lead follow-up without repetitive tasks.",
        "**Custom software:** Websites, landing pages, marketing tools, and SEO solutions tailored to your goals.",
        "**CRM:** Capturing and centralizing leads, campaigns, segmentation, and data to connect marketing with sales.",
      ],
    },
  },
} as const;

/**
 * "Tecnología / IA + Automatización + CRM" — full-bleed photo, logo on the
 * left and the text block on the right, ~2cm (76px) apart, both groups
 * sitting directly on the photo. First built on the home page, then reused
 * on the cycle pages (between Etapas and Recruiting) and /marketing (below
 * Pilares).
 *
 * `stage` swaps the generic eyebrow/intro/bullets for the page's own framing
 * and tech stack, and adds the cycle name under the "Tecnología" logo
 * lockup; omit it (home page) to keep the generic copy. `title` stays fixed
 * across every page — only the eyebrow above it and the bold intro sentence
 * below it change per stage. Bullets lead with a business capability
 * (IA / Automatización / Software a medida / CRM), not a tool/product name
 * (Claude, Claude Code) — deliberate: this cajón faces the client, so it
 * stays at the "what it does for you" level, not "which tool we run".
 */
export default function TechnologyBlock({
  lang = "es",
  stage,
}: {
  lang?: Lang;
  stage?: Stage;
}) {
  const t = copy[lang];
  const eyebrow = stage ? t.stageEyebrow[stage] : t.eyebrow;
  const intro = stage ? t.stageIntro[stage] : t.intro;
  const bullets = stage ? t.stageBullets[stage] : t.bullets;

  return (
    <section className="relative z-[1] overflow-hidden px-[15px] py-[55px] dt:py-[90px]">
      {/* No navy overlay: this block is informational (like Metodología/Recruiting), not a CTA like BaseHub/E-Book -- photo chosen light enough for dark text unaided. */}
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
            eyebrow={eyebrow}
            title={t.title}
            description={intro}
            align="left"
            centerOnMobile
            showLine={false}
            maxWidth={800}
            className="mb-[15px] w-full"
            titleClassName="!text-[44px] !leading-[1.3]"
            // eyebrow-to-title gap (spacing polish): matches the 15px the
            // wrapping `className` already puts between title and bullets,
            // measured with Playwright -- eyebrow has no margin of its own
            // otherwise, just its 30px line-height.
            eyebrowClassName="mb-[15px]"
            // Bold, heading-dark intro sentence (not the muted body-gray
            // SectionHeading defaults to elsewhere) -- it replaces what used
            // to be a bullet, so it needs the same visual weight as one, not
            // the softer voice of a description paragraph.
            descriptionClassName="!font-bold !text-heading"
          />
          <CheckList items={bullets} size="md" centerOnMobile />
          {/* bullets-to-button gap (spacing polish): matches the section's
              own bottom padding above, so the button sits as far from the
              bullets as it does from the cajón's foot. */}
          <div className="mt-[55px] dt:mt-[90px]">
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
