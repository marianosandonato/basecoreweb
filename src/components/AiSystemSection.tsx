import type { ComponentType, SVGProps } from "react";
import Button from "./Button";
import SectionHeading from "./SectionHeading";
import { MemoryIcon, ObservationIcon, ResearchIcon } from "./aiSystemIcons";
import type { Lang } from "@/lib/site";

type Capability = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** MCP/tool name shown as a small caption — only the two externally-connected ones have it. */
  tool?: string;
};

type AgentGroup = {
  title: string;
  /** Sub-roles shown as a mini list (only the "Sitio Web" cluster has more than one). */
  roles?: readonly string[];
  description?: string;
};

/**
 * "BaseCore AI System" — /tecnologia's own methodology cajón, between "Módulos"
 * and the BaseHub teaser (see that page for placement).
 *
 * Structure (top to bottom): intro -> Capacidades (3 plain cards, no photos --
 * this is informational, not a marketing flip-box) -> Skills (a pill row) ->
 * Agentes en producción (the most important block, navy cards so it reads with
 * more weight than the white cards above it) -> Workflow (a 6-step flow
 * diagram) -> "El mismo método, aplicado a tu negocio" (visually distinct
 * dashed/soft offer box — see the file's comment above that block for why it
 * must never look like the "Agentes en producción" block above it).
 */
const copy = {
  es: {
    eyebrow: "METODOLOGÍA PROPIA DE IA",
    title: "BaseCore AI System",
    intro:
      "El sistema de agentes de inteligencia artificial con el que construimos cada proyecto. Antes de escribir una línea de código, investiga el contexto, observa la situación real y decide un camino — no ejecuta a ciegas.",
    capacidadesLabel: "QUÉ PUEDE HACER, ADEMÁS DE PROGRAMAR",
    capacidades: [
      {
        title: "Investigación en tiempo real",
        description:
          "Consulta información actual de mercado, competencia y tendencias antes de tomar una decisión, en vez de asumir con datos viejos.",
        icon: ResearchIcon,
        tool: "Perplexity",
      },
      {
        title: "Observación de sitios reales",
        description:
          "Entra al sitio o la app real, navega, prueba formularios y detecta problemas visuales antes de que los encuentre un usuario.",
        icon: ObservationIcon,
        tool: "Playwright",
      },
      {
        title: "Memoria del proyecto",
        description:
          "Trabaja con los documentos vigentes de cada proyecto — decisiones, historial, criterios — en vez de partir de cero en cada tarea.",
        icon: MemoryIcon,
      },
    ] satisfies readonly Capability[],
    skillsLabel: "CON CRITERIO PROPIO EN",
    skills: [
      "Proceso de decisión propio",
      "Buenas prácticas de SEO y conversión",
      "Dirección de diseño e identidad visual",
      "Criterios de seguridad",
    ],
    agentsBadge: "HOY, EN PRODUCCIÓN",
    agentsTitle: "Los agentes que ya trabajan en Base Core",
    agentsIntro: "Cinco agentes especializados, coordinados entre sí, en uso real todos los días:",
    agentsInProduction: "EN PRODUCCIÓN",
    agents: [
      {
        title: "Sitio Web",
        roles: [
          "Producto & Diseño — visión completa del sitio, UX y desarrollo",
          "SEO & Conversión — posicionamiento, keywords y copy",
          "Performance — velocidad y Core Web Vitals",
        ],
      },
      {
        title: "Contenido y Redes",
        description:
          "Produce contenido editorial y de redes sociales alineado a la marca y a la estrategia de cada canal.",
      },
      {
        title: "Desarrollo de Producto",
        description:
          "Construye y hace evolucionar BaseHub, la plataforma propia de seguimiento e implementación de proyectos.",
      },
    ] satisfies readonly AgentGroup[],
    workflowLabel: "CÓMO DECIDE ANTES DE EJECUTAR",
    workflowTitle: "Un mismo proceso, en cada tarea",
    workflow: [
      "Entender el objetivo",
      "Observar la situación real",
      "Investigar si hace falta",
      "Decidir un camino y explicarlo",
      "Ejecutar",
      "Comprobar el resultado y ajustar",
    ],
    extensionBadge: "SERVICIO A MEDIDA",
    extensionTitle: "El mismo método, a la medida de tu negocio",
    extensionBody:
      "Base Core también diseña y construye agentes de este tipo para otras áreas de tu empresa, con el mismo criterio de investigar, observar y decidir antes de automatizar.",
    extensionAreas: ["Preventa", "Venta", "Posventa", "Reclutamiento", "Marketing"],
    extensionCta: "CONVERSEMOS SOBRE TU EQUIPO",
  },
  en: {
    eyebrow: "OUR OWN AI METHODOLOGY",
    title: "BaseCore AI System",
    intro:
      "The AI agent system we use to build every project. Before writing a single line of code, it researches the context, observes the real situation, and decides a path forward — it doesn't execute blindly.",
    capacidadesLabel: "WHAT IT CAN DO, BEYOND WRITING CODE",
    capacidades: [
      {
        title: "Real-time research",
        description:
          "Checks current market, competitor and trend data before making a decision, instead of assuming with outdated information.",
        icon: ResearchIcon,
        tool: "Perplexity",
      },
      {
        title: "Observation of real sites",
        description:
          "Opens the real site or app, navigates it, tests forms, and catches visual issues before a user does.",
        icon: ObservationIcon,
        tool: "Playwright",
      },
      {
        title: "Project memory",
        description:
          "Works from each project's living documents — decisions, history, criteria — instead of starting from zero on every task.",
        icon: MemoryIcon,
      },
    ] satisfies readonly Capability[],
    skillsLabel: "WORKING WITH ITS OWN CRITERIA FOR",
    skills: [
      "Its own decision-making process",
      "SEO and conversion best practices",
      "Design direction and visual identity",
      "Security guidelines",
    ],
    agentsBadge: "LIVE TODAY",
    agentsTitle: "The agents already working at Base Core",
    agentsIntro: "Five specialized agents, coordinated with each other, in real use every day:",
    agentsInProduction: "IN PRODUCTION",
    agents: [
      {
        title: "Website",
        roles: [
          "Product & Design — full site vision, UX and development",
          "SEO & Conversion — rankings, keywords and copy",
          "Performance — speed and Core Web Vitals",
        ],
      },
      {
        title: "Content & Social",
        description:
          "Produces editorial and social content aligned with the brand and each channel's strategy.",
      },
      {
        title: "Product Development",
        description: "Builds and evolves BaseHub, our own project tracking and implementation platform.",
      },
    ] satisfies readonly AgentGroup[],
    workflowLabel: "HOW IT DECIDES BEFORE ACTING",
    workflowTitle: "The same process, every time",
    workflow: [
      "Understand the goal",
      "Observe the real situation",
      "Research if needed",
      "Decide a path and explain why",
      "Execute",
      "Check the real result and adjust",
    ],
    extensionBadge: "CUSTOM-BUILT SERVICE",
    extensionTitle: "The same method, tailored to your business",
    extensionBody:
      "Base Core also designs and builds agents like these for other areas of your company, with the same discipline of researching, observing and deciding before automating.",
    extensionAreas: ["Presales", "Sales", "Post-Sales", "Recruiting", "Marketing"],
    extensionCta: "LET'S TALK ABOUT YOUR TEAM",
  },
} as const;

const eyebrowClass = "font-sans text-[14px] font-medium uppercase tracking-[1.5px] text-body";

export default function AiSystemSection({ lang = "es" }: { lang?: Lang }) {
  const t = copy[lang];

  return (
    <>
      {/* Header + intro */}
      <section className="container-bc py-[10px]">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.intro}
          maxWidth={760}
          className="mx-auto"
        />
      </section>

      {/* Capacidades — three plain (no-photo) cards: this is explanatory, not
          a teaser, so it deliberately skips the FlipCardGrid the Módulos
          cajón above just used. */}
      <section className="container-bc pt-[40px]">
        <p className={`text-center ${eyebrowClass} mb-[24px]`}>{t.capacidadesLabel}</p>
        <div className="grid gap-[20px] md:grid-cols-3">
          {t.capacidades.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="flex flex-col items-center rounded-[8px] border border-line bg-white px-[28px] py-[32px] text-center"
              >
                <span className="mb-[18px] flex h-[56px] w-[56px] items-center justify-center rounded-full bg-soft">
                  <Icon className="text-[24px] text-primary" />
                </span>
                <h3 className="font-heading text-[19px] font-bold leading-[26px] text-heading">
                  {cap.title}
                </h3>
                <p className="mt-[10px] font-sans text-[15px] leading-[1.8] text-body">
                  {cap.description}
                </p>
                {cap.tool && (
                  <span className="mt-[14px] inline-block rounded-full bg-soft px-[14px] py-[5px] font-sans text-[12px] font-semibold uppercase tracking-[0.5px] text-body">
                    {cap.tool}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Skills, translated away from raw internal names into plain
          categories (see task brief — "basecore-workflow" etc. mean nothing
          to a visitor, "Proceso de decisión propio" does). */}
      <section className="container-bc pt-[36px]">
        <p className={`text-center ${eyebrowClass} mb-[16px]`}>{t.skillsLabel}</p>
        <div className="flex flex-wrap justify-center gap-[10px]">
          {t.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-line bg-white px-[18px] py-[9px] font-sans text-[14px] font-medium text-navy"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Agentes en producción — the most important block: real, named
          agents that exist today. Navy cards give it more visual weight than
          the white Capacidades cards above, and the filled "EN PRODUCCIÓN"
          badge is the deliberate visual opposite of the outlined
          "SERVICIO A MEDIDA" badge on the offer box below — solid = real and
          live, outlined = offer, never mixed into the same list. */}
      <section className="container-bc pt-[56px]">
        <div className="mx-auto max-w-[720px] text-center">
          <span className="inline-block rounded-full bg-primary px-[14px] py-[5px] font-sans text-[12px] font-semibold uppercase tracking-[1px] text-white">
            {t.agentsBadge}
          </span>
          <h3 className="mt-[14px] font-heading text-[28px] font-bold leading-[1.3] text-heading md:text-[32px]">
            {t.agentsTitle}
          </h3>
          <p className="mt-[10px] font-sans text-[16px] leading-[1.8] text-body">{t.agentsIntro}</p>
        </div>

        <div className="mt-[32px] grid gap-[20px] md:grid-cols-3">
          {t.agents.map((agent) => (
            <div key={agent.title} className="flex flex-col rounded-[8px] bg-navy p-[28px]">
              <div className="flex items-start justify-between gap-[12px]">
                <h4 className="font-heading text-[20px] font-bold leading-[1.3] text-white">
                  {agent.title}
                </h4>
                <span className="shrink-0 rounded-full bg-primary px-[10px] py-[3px] font-sans text-[10px] font-semibold uppercase tracking-[0.5px] text-white">
                  {t.agentsInProduction}
                </span>
              </div>

              {agent.roles ? (
                <ul className="mt-[16px] flex flex-col gap-[12px]">
                  {agent.roles.map((role) => (
                    <li
                      key={role}
                      className="font-sans text-[14px] leading-[1.7] text-muted"
                    >
                      {role}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-[16px] font-sans text-[15px] leading-[1.8] text-muted">
                  {agent.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Workflow — the real 13-step internal cycle condensed to six plain
          stages, shown as a flow rather than a technical checklist. Two
          separate markups (stacked-with-vertical-line on mobile, row-with-
          connectors on desktop) rather than one layout doing both, so the
          connecting line never has to be positioned with fragile math. */}
      <section className="container-bc pt-[56px]">
        <div className="mx-auto max-w-[640px] text-center">
          <p className={eyebrowClass}>{t.workflowLabel}</p>
          <h3 className="mt-[8px] font-heading text-[26px] font-bold leading-[1.3] text-heading md:text-[30px]">
            {t.workflowTitle}
          </h3>
        </div>

        {/* Mobile: vertical stepper */}
        <ol className="mx-auto mt-[32px] flex max-w-[420px] flex-col md:hidden">
          {t.workflow.map((step, i) => (
            <li key={step} className="relative flex gap-[16px] pb-[28px] last:pb-0">
              {i < t.workflow.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[19px] top-[40px] bottom-0 w-[2px] bg-line"
                />
              )}
              <span className="relative z-[1] flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white font-heading text-[16px] font-bold text-primary">
                {i + 1}
              </span>
              <p className="pt-[9px] font-sans text-[15px] font-medium leading-[1.4] text-heading">
                {step}
              </p>
            </li>
          ))}
        </ol>

        {/* Desktop: horizontal flow with connectors between fixed-width steps */}
        <ol className="mt-[40px] hidden items-start justify-center md:flex">
          {t.workflow.flatMap((step, i) => {
            const node = (
              <li key={`step-${i}`} className="flex w-[130px] shrink-0 flex-col items-center text-center">
                <span className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white font-heading text-[18px] font-bold text-primary">
                  {i + 1}
                </span>
                <p className="mt-[12px] font-sans text-[13px] font-medium leading-[1.4] text-heading">
                  {step}
                </p>
              </li>
            );
            if (i === t.workflow.length - 1) return [node];
            return [
              node,
              <li key={`line-${i}`} aria-hidden="true" className="mt-[24px] h-[2px] w-full flex-1 bg-line" />,
            ];
          })}
        </ol>
      </section>

      {/* "Así extendemos el sistema a tu negocio" — an offer, not a fact.
          Visually distinct from the "Agentes en producción" block above:
          dashed border + soft tint (vs. solid navy cards) and an outlined
          badge (vs. the filled "EN PRODUCCIÓN" pill), so it never reads as
          "these agents already exist at Base Core". */}
      <section className="container-bc pt-[56px]">
        <div className="rounded-[12px] border-2 border-dashed border-primary/30 bg-soft px-[24px] py-[40px] text-center md:px-[56px]">
          <span className="inline-block rounded-full border border-primary px-[14px] py-[5px] font-sans text-[12px] font-semibold uppercase tracking-[1px] text-primary">
            {t.extensionBadge}
          </span>
          <h3 className="mx-auto mt-[16px] max-w-[600px] font-heading text-[26px] font-bold leading-[1.3] text-heading md:text-[30px]">
            {t.extensionTitle}
          </h3>
          <p className="mx-auto mt-[12px] max-w-[620px] font-sans text-[16px] leading-[1.8] text-body">
            {t.extensionBody}
          </p>
          <div className="mt-[24px] flex flex-wrap justify-center gap-[10px]">
            {t.extensionAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-white px-[16px] py-[8px] font-sans text-[14px] font-medium text-navy"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="mt-[28px]">
            <Button href="#contacto" size="sm">
              {t.extensionCta}
            </Button>
          </div>
        </div>
      </section>

      <div className="h-[50px]" aria-hidden="true" />
    </>
  );
}
