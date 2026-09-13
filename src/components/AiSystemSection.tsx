import type { ComponentType, SVGProps } from "react";
import Button from "./Button";
import SectionHeading from "./SectionHeading";
import { MemoryIcon, ObservationIcon, ResearchIcon } from "./aiSystemIcons";
import type { Lang } from "@/lib/site";

type Capability = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** MCP/tool name shown as a small caption — all three are named tools now. */
  tool?: string;
};

/** One branch (rama) of the "Agentes en producción" block: a title and the
 * plain names of the agents that exist in it — no descriptions (10/9
 * request: the previous name+paragraph version read as a wall of text). */
type AgentGroup = {
  title: string;
  roles: readonly string[];
};

type WorkflowStep = {
  title: string;
  description: string;
};

/**
 * "BaseCore AI System" — /tecnologia's own methodology cajón, between
 * TechStageMatrix and the BaseHub teaser (see that page for placement).
 *
 * Structure (top to bottom): eyebrow/title/intro -> "HOY, EN PRODUCCIÓN"
 * badge -> Agentes en producción (5 navy branch cards, names only, no
 * title of its own) -> Sistema de análisis (3 plain white cards) -> Workflow
 * (an 8-step process, title+description per step) -> "El mismo método,
 * adaptado a tus procesos" (visually distinct dashed/soft offer box — see
 * the file's comment above that block for why it must never look like the
 * "Agentes en producción" block above it).
 */
const copy = {
  es: {
    eyebrow: "METODOLOGÍA PROPIA DE IA",
    title: "BaseCore AI System",
    intro: "Agentes de IA que investigan, deciden y proponen antes de ejecutar.",
    agentsBadge: "AGENTES EN PRODUCCIÓN",
    agents: [
      {
        title: "Tecnología",
        roles: ["AI Systems", "Software Development", "Automation", "Integrations"],
      },
      {
        title: "Marketing",
        roles: ["Producto & Diseño", "SEO & Conversión", "Performance", "Social Content"],
      },
      {
        title: "Preventa",
        roles: ["Prospección & Research", "Lead Qualification", "Lead Routing & Booking"],
      },
      {
        title: "Venta",
        roles: ["Sales Follow-up", "Proposal & Quote", "Pipeline Intelligence"],
      },
      {
        title: "Posventa",
        roles: ["Customer Success", "Retention & Churn", "Renewals & Growth", "Customer Support"],
      },
    ] satisfies readonly AgentGroup[],
    capacidadesLabel: "SISTEMA DE ANÁLISIS",
    capacidades: [
      {
        title: "Investigación en tiempo real",
        description:
          "Consulta información actual de mercado, competencia y tendencias cuando esa información puede cambiar una decisión.",
        icon: ResearchIcon,
        tool: "Perplexity",
      },
      {
        title: "Observación de sitios reales",
        description:
          "Navega y prueba sitios o aplicaciones reales para detectar problemas directamente sobre la experiencia que tendrá el usuario.",
        icon: ObservationIcon,
        tool: "Playwright",
      },
      {
        title: "Memoria del proyecto",
        description:
          "Recupera decisiones, contexto, historial y criterios relevantes antes de comenzar una nueva tarea.",
        icon: MemoryIcon,
        tool: "Claude Mem",
      },
    ] satisfies readonly Capability[],
    workflowLabel: "CÓMO DECIDE ANTES DE EJECUTAR",
    workflowTitle: "Un mismo proceso, en cada tarea",
    workflow: [
      { title: "Entender", description: "Identifica el objetivo, contexto y restricciones." },
      { title: "Observar", description: "Comprueba la situación real antes de sacar conclusiones." },
      { title: "Investigar", description: "Busca información externa cuando puede cambiar la decisión." },
      { title: "Recordar", description: "Recupera conocimiento y decisiones relevantes del proyecto." },
      { title: "Decidir", description: "Analiza alternativas, prioriza y define un camino." },
      { title: "Ejecutar", description: "Implementa después de definir qué hacer y por qué." },
      { title: "Comprobar", description: "Verifica el resultado sobre la realidad." },
      { title: "Iterar", description: "Si el resultado no es suficiente, ajusta y vuelve a ejecutar." },
    ] satisfies readonly WorkflowStep[],
    extensionBadge: "SISTEMAS DE IA PARA TU EMPRESA",
    extensionTitle: "El mismo método, adaptado a tus procesos.",
    extensionBody: [
      "Diseñamos agentes que investigan, observan, deciden y ejecutan dentro de procesos reales de tu empresa.",
      "No se trata de instalar una herramienta. Diseñamos el sistema, los agentes, los criterios y los flujos necesarios para resolver un problema concreto.",
    ] as readonly string[],
    extensionAreas: ["Marketing", "Preventa", "Venta", "Posventa", "Reclutamiento", "Operaciones"],
    extensionCta: "CONVERSEMOS SOBRE TU EQUIPO",
  },
  en: {
    eyebrow: "OUR OWN AI METHODOLOGY",
    title: "BaseCore AI System",
    intro: "AI agents that research, decide, and propose before acting.",
    agentsBadge: "AGENTS IN PRODUCTION",
    agents: [
      {
        title: "Technology",
        roles: ["AI Systems", "Software Development", "Automation", "Integrations"],
      },
      {
        title: "Marketing",
        roles: ["Product & Design", "SEO & Conversion", "Performance", "Social Content"],
      },
      {
        title: "Presales",
        roles: ["Prospecting & Research", "Lead Qualification", "Lead Routing & Booking"],
      },
      {
        title: "Sales",
        roles: ["Sales Follow-up", "Proposal & Quote", "Pipeline Intelligence"],
      },
      {
        title: "Post-Sales",
        roles: ["Customer Success", "Retention & Churn", "Renewals & Growth", "Customer Support"],
      },
    ] satisfies readonly AgentGroup[],
    capacidadesLabel: "ANALYSIS SYSTEM",
    capacidades: [
      {
        title: "Real-time research",
        description:
          "Checks current market, competitor, and trend data when that information can change a decision.",
        icon: ResearchIcon,
        tool: "Perplexity",
      },
      {
        title: "Observation of real sites",
        description:
          "Navigates and tests real sites or applications to catch issues directly on the experience a user will have.",
        icon: ObservationIcon,
        tool: "Playwright",
      },
      {
        title: "Project memory",
        description:
          "Retrieves decisions, context, history, and relevant criteria before starting a new task.",
        icon: MemoryIcon,
        tool: "Claude Mem",
      },
    ] satisfies readonly Capability[],
    workflowLabel: "HOW IT DECIDES BEFORE ACTING",
    workflowTitle: "The same process, every time",
    workflow: [
      { title: "Understand", description: "Identifies the goal, context, and constraints." },
      { title: "Observe", description: "Checks the real situation before drawing conclusions." },
      { title: "Research", description: "Looks for external information when it can change the decision." },
      { title: "Remember", description: "Retrieves relevant project knowledge and past decisions." },
      { title: "Decide", description: "Weighs alternatives, prioritizes, and picks a path." },
      { title: "Execute", description: "Implements only after deciding what to do and why." },
      { title: "Verify", description: "Checks the result against reality." },
      { title: "Iterate", description: "If the result isn't good enough, adjusts and executes again." },
    ] satisfies readonly WorkflowStep[],
    extensionBadge: "AI SYSTEMS FOR YOUR BUSINESS",
    extensionTitle: "The same method, adapted to your processes.",
    extensionBody: [
      "We design agents that research, observe, decide, and execute within your company's real processes.",
      "This isn't about installing a tool. We design the system, the agents, the criteria, and the workflows needed to solve a specific problem.",
    ] as readonly string[],
    extensionAreas: ["Marketing", "Presales", "Sales", "Post-Sales", "Recruiting", "Operations"],
    extensionCta: "LET'S TALK ABOUT YOUR TEAM",
  },
} as const;

const eyebrowClass = "font-sans text-[14px] font-medium uppercase tracking-[1.5px] text-body";

/** One navy card in the "Agentes en producción" grid: a numbered badge (the
 * same circle-with-number language the Workflow stepper below uses, so the
 * two blocks read as one system) + the branch title, then its agent names
 * as a wrap of plain pill chips — no per-agent description. Chips over a
 * bulleted list keep the card scannable at a glance instead of reading like
 * a résumé. */
function AgentCard({ agent, index }: { agent: AgentGroup; index: number }) {
  return (
    <div className="flex flex-col rounded-[8px] bg-navy p-[24px]">
      <div className="flex items-center gap-[12px]">
        <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border-2 border-primary font-heading text-[13px] font-bold text-white">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h4 className="font-heading text-[18px] font-bold leading-[1.3] text-white">{agent.title}</h4>
      </div>
      <div className="mt-[18px] flex flex-wrap gap-[8px]">
        {agent.roles.map((name) => (
          <span
            key={name}
            className="rounded-full border border-white/15 bg-white/10 px-[12px] py-[6px] font-sans text-[13px] font-medium leading-[1.3] text-white"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AiSystemSection({ lang = "es" }: { lang?: Lang }) {
  const t = copy[lang];

  return (
    <>
      {/* Header + intro + "HOY, EN PRODUCCIÓN" badge (the badge sits in
          SectionHeading's `children` slot so it inherits the same centered,
          max-width column as the intro right above it). */}
      <section className="container-bc py-[10px]">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.intro}
          maxWidth={760}
          className="mx-auto"
        >
          <div className="mt-[20px]">
            <span className="inline-block rounded-full bg-primary px-[14px] py-[5px] font-sans text-[12px] font-semibold uppercase tracking-[1px] text-white">
              {t.agentsBadge}
            </span>
          </div>
        </SectionHeading>
      </section>

      {/* Agentes en producción — five branch cards, names only (10/9: the
          previous name+paragraph version read as a wall of text). No title
          of its own anymore; the badge above already frames the block. One
          responsive grid instead of the old 2-over-3 split, since chips are
          light enough that an even row of five reads cleanly on desktop. */}
      <section className="container-bc pt-[32px]">
        <div className="grid gap-[16px] sm:grid-cols-2 dt:grid-cols-5">
          {t.agents.map((agent, i) => (
            <AgentCard key={agent.title} agent={agent} index={i} />
          ))}
        </div>
      </section>

      {/* Sistema de análisis — three plain (no-photo) cards: this is
          explanatory, not a teaser, so it deliberately skips the
          FlipCardGrid the Módulos cajón above just used. */}
      <section className="container-bc pt-[56px]">
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

      {/* Workflow — the real internal cycle condensed to eight stages, each
          with a short description, shown as a numbered vertical stepper.
          An 8-step flow with title+description no longer fits a horizontal
          row-with-connectors on desktop (the old 6-word-only version did),
          so it keeps the same stepper language everywhere and just splits
          into two even columns (4 + 4) from `lg` up to use the width instead
          of producing one very long column. Below `lg` it's one continuous
          column — a plain split into two independent lists would break the
          connecting line and the reading order between step 4 and step 5,
          which matters more on a narrow, one-thing-at-a-time viewport. */}
      <section className="container-bc pt-[56px]">
        <div className="mx-auto max-w-[640px] text-center">
          <p className={eyebrowClass}>{t.workflowLabel}</p>
          <h3 className="mt-[8px] font-heading text-[26px] font-bold leading-[1.3] text-heading md:text-[30px]">
            {t.workflowTitle}
          </h3>
        </div>

        {/* Below lg: single continuous vertical stepper */}
        <ol className="mx-auto mt-[36px] flex max-w-[480px] flex-col lg:hidden">
          {t.workflow.map((step, i) => (
            <li key={step.title} className="relative flex gap-[16px] pb-[28px] last:pb-0">
              {i < t.workflow.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[19px] top-[40px] bottom-0 w-[2px] bg-line"
                />
              )}
              <span className="relative z-[1] flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white font-heading text-[16px] font-bold text-primary">
                {i + 1}
              </span>
              <div className="pt-[7px] text-left">
                <p className="font-sans text-[16px] font-semibold leading-[1.4] text-heading">
                  {step.title}
                </p>
                <p className="mt-[4px] font-sans text-[14px] leading-[1.6] text-body">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* lg and up: two vertical steppers side by side (steps 1–4, 5–8),
            each with its own continuous connecting line. */}
        <div className="mx-auto mt-[40px] hidden max-w-[920px] gap-x-[64px] lg:grid lg:grid-cols-2">
          {[t.workflow.slice(0, 4), t.workflow.slice(4)].map((column, colIndex) => (
            <ol key={colIndex} className="flex flex-col">
              {column.map((step, i) => {
                const globalIndex = colIndex * 4 + i;
                const isLast = i === column.length - 1;
                return (
                  <li key={step.title} className="relative flex gap-[16px] pb-[32px] last:pb-0">
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[21px] top-[44px] bottom-0 w-[2px] bg-line"
                      />
                    )}
                    <span className="relative z-[1] flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white font-heading text-[17px] font-bold text-primary">
                      {globalIndex + 1}
                    </span>
                    <div className="pt-[8px] text-left">
                      <p className="font-sans text-[16px] font-semibold leading-[1.4] text-heading">
                        {step.title}
                      </p>
                      <p className="mt-[4px] font-sans text-[14px] leading-[1.6] text-body">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          ))}
        </div>
      </section>

      {/* "El mismo método, adaptado a tus procesos" — an offer, not a fact.
          Visually distinct from the "Agentes en producción" block above:
          dashed border + soft tint (vs. solid navy cards) and an outlined
          badge (vs. the filled "HOY, EN PRODUCCIÓN" pill), so it never reads
          as "these agents already exist at Base Core". */}
      <section className="container-bc pt-[56px]">
        <div className="rounded-[12px] border-2 border-dashed border-primary/30 bg-soft px-[24px] py-[40px] text-center md:px-[56px]">
          <span className="inline-block rounded-full border border-primary px-[14px] py-[5px] font-sans text-[12px] font-semibold uppercase tracking-[1px] text-primary">
            {t.extensionBadge}
          </span>
          <h3 className="mx-auto mt-[16px] max-w-[600px] font-heading text-[26px] font-bold leading-[1.3] text-heading md:text-[30px]">
            {t.extensionTitle}
          </h3>
          <div className="mx-auto mt-[12px] max-w-[620px]">
            {t.extensionBody.map((line, i) => (
              <p
                key={i}
                className={`font-sans text-[16px] leading-[1.8] text-body ${i > 0 ? "mt-[10px]" : ""}`}
              >
                {line}
              </p>
            ))}
          </div>
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
