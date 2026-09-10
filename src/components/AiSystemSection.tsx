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

/** One line inside an agent card: the specialization (shown bold) and what it covers. */
type AgentRole = {
  name: string;
  description: string;
};

type AgentGroup = {
  title: string;
  roles: readonly AgentRole[];
};

type WorkflowStep = {
  title: string;
  description: string;
};

/**
 * "BaseCore AI System" — /tecnologia's own methodology cajón, between "Módulos"
 * and the BaseHub teaser (see that page for placement).
 *
 * Structure (top to bottom): intro (two paragraphs) -> Sistema de análisis (3
 * plain cards, no photos -- this is informational, not a marketing flip-box)
 * -> Criterios de decisión (intro line + a 3x2 pill grid) -> Agentes en
 * producción (the most important block, navy cards so it reads with more
 * weight than the white cards above it; 5 categories laid out 2 on top
 * (Tecnología, Marketing) + 3 below (Preventa, Venta, Posventa)) -> Workflow
 * (an 8-step process, title+description per step) -> "El mismo método,
 * adaptado a tus procesos" (visually distinct dashed/soft offer box — see
 * the file's comment above that block for why it must never look like the
 * "Agentes en producción" block above it).
 */
const copy = {
  es: {
    eyebrow: "METODOLOGÍA PROPIA DE IA",
    title: "BaseCore AI System",
    introLines: [
      "Agentes de IA que investigan, deciden y proponen antes de ejecutar.",
      "Un sistema diseñado para convertir procesos reales de tu empresa en sistemas inteligentes:\nanaliza el contexto, busca información, evalúa alternativas y ejecuta con criterio.",
    ] as readonly string[],
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
    skillsLabel: "CRITERIOS DE DECISIÓN",
    skillsIntro:
      "Cada agente tiene responsabilidades, conocimientos y criterios específicos para decidir cómo abordar una tarea. Cada uno está diseñado para resolver un tipo de problema.",
    skills: [
      "SEO y conversión",
      "Diseño e identidad visual",
      "Seguridad",
      "Priorización y planificación",
      "Buenas prácticas",
      "Competencia",
    ],
    agentsBadge: "HOY, EN PRODUCCIÓN",
    agentsTitle: "Los agentes que ya trabajan en Base Core",
    agentsIntro: "Agentes especializados, coordinados entre sí, en uso real todos los días:",
    agents: [
      {
        title: "Tecnología",
        roles: [
          {
            name: "AI Systems",
            description:
              "Diseño e implementación de sistemas de agentes de IA para analizar, decidir y ejecutar procesos reales de negocio.",
          },
          {
            name: "Software Development",
            description:
              "Desarrollo de software a medida para CRM, inventario, logística y operaciones. Desarrollo y evolución de BaseHub, la plataforma propia de seguimiento e implementación de proyectos.",
          },
          {
            name: "Automation",
            description:
              "Diseño e implementación de automatizaciones y workflows para reducir tareas manuales y conectar procesos.",
          },
          {
            name: "Integrations",
            description:
              "Integración de CRM, aplicaciones, APIs y fuentes de datos para conectar sistemas y centralizar información.",
          },
        ],
      },
      {
        title: "Marketing",
        roles: [
          {
            name: "Producto & Diseño",
            description: "UX, UI, estructura y evolución de sitios y experiencias digitales",
          },
          {
            name: "SEO & Conversión",
            description: "Posicionamiento, keywords, contenido y optimización de conversión",
          },
          {
            name: "Performance",
            description: "Velocidad, rendimiento y Core Web Vitals",
          },
          {
            name: "Social Content",
            description:
              "Estrategia y producción de contenido para redes y blogs, alineada a la marca y los objetivos del negocio",
          },
        ],
      },
      {
        title: "Preventa",
        roles: [
          {
            name: "Prospección & Research",
            description: "Investigación de empresas, identificación de prospectos y enriquecimiento de información",
          },
          {
            name: "Lead Qualification",
            description: "Análisis de ICP, criterios de calificación, scoring y priorización de leads",
          },
          {
            name: "Lead Routing & Booking",
            description: "Asignación de oportunidades, seguimiento inicial y coordinación de reuniones comerciales",
          },
        ],
      },
      {
        title: "Venta",
        roles: [
          {
            name: "Sales Follow-up",
            description: "Seguimiento de oportunidades, detección de negocios estancados y próximas acciones",
          },
          {
            name: "Proposal & Quote",
            description:
              "Preparación de propuestas, presupuestos y respuestas comerciales a partir de información del negocio",
          },
          {
            name: "Pipeline Intelligence",
            description: "Análisis del pipeline, priorización de oportunidades, forecast y reporting comercial",
          },
        ],
      },
      {
        title: "Posventa",
        roles: [
          {
            name: "Customer Success",
            description: "Seguimiento de clientes, tareas, hitos y estado de cada cuenta",
          },
          {
            name: "Retention & Churn",
            description: "Detección de señales de riesgo y priorización de acciones de retención",
          },
          {
            name: "Renewals & Growth",
            description: "Seguimiento de renovaciones, oportunidades de recompra, cross-sell y expansión",
          },
          {
            name: "Customer Support",
            description:
              "Clasificación de consultas, respuestas iniciales y derivación de casos que requieren intervención humana",
          },
        ],
      },
    ] satisfies readonly AgentGroup[],
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
    introLines: [
      "AI agents that research, decide, and propose before acting.",
      "A system designed to turn your company's real processes into intelligent systems:\nit analyzes context, gathers information, weighs alternatives, and acts with judgment.",
    ] as readonly string[],
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
    skillsLabel: "DECISION CRITERIA",
    skillsIntro:
      "Every agent has specific responsibilities, knowledge, and criteria to decide how to approach a task. Each one is designed to solve one type of problem.",
    skills: [
      "SEO and conversion",
      "Design and visual identity",
      "Security",
      "Prioritization and planning",
      "Best practices",
      "Competitive awareness",
    ],
    agentsBadge: "LIVE TODAY",
    agentsTitle: "The agents already working at Base Core",
    agentsIntro: "Specialized agents, coordinated with each other, in real use every day:",
    agents: [
      {
        title: "Technology",
        roles: [
          {
            name: "AI Systems",
            description:
              "Design and implementation of AI agent systems to analyze, decide, and execute real business processes.",
          },
          {
            name: "Software Development",
            description:
              "Custom software development for CRM, inventory, logistics, and operations. Development and evolution of BaseHub, our own project tracking and implementation platform.",
          },
          {
            name: "Automation",
            description:
              "Design and implementation of automations and workflows to reduce manual work and connect processes.",
          },
          {
            name: "Integrations",
            description:
              "Integration of CRMs, applications, APIs, and data sources to connect systems and centralize information.",
          },
        ],
      },
      {
        title: "Marketing",
        roles: [
          {
            name: "Product & Design",
            description: "UX, UI, structure and evolution of sites and digital experiences",
          },
          {
            name: "SEO & Conversion",
            description: "Rankings, keywords, content, and conversion optimization",
          },
          {
            name: "Performance",
            description: "Speed, performance, and Core Web Vitals",
          },
          {
            name: "Social Content",
            description:
              "Content strategy and production for social and blogs, aligned with the brand and business goals",
          },
        ],
      },
      {
        title: "Presales",
        roles: [
          {
            name: "Prospecting & Research",
            description: "Company research, prospect identification, and data enrichment",
          },
          {
            name: "Lead Qualification",
            description: "ICP analysis, qualification criteria, scoring, and lead prioritization",
          },
          {
            name: "Lead Routing & Booking",
            description: "Opportunity assignment, initial follow-up, and sales meeting coordination",
          },
        ],
      },
      {
        title: "Sales",
        roles: [
          {
            name: "Sales Follow-up",
            description: "Opportunity tracking, stalled-deal detection, and next actions",
          },
          {
            name: "Proposal & Quote",
            description: "Preparing proposals, quotes, and commercial responses based on deal information",
          },
          {
            name: "Pipeline Intelligence",
            description: "Pipeline analysis, opportunity prioritization, forecasting, and sales reporting",
          },
        ],
      },
      {
        title: "Post-Sales",
        roles: [
          {
            name: "Customer Success",
            description: "Tracking customers, tasks, milestones, and account status",
          },
          {
            name: "Retention & Churn",
            description: "Detecting risk signals and prioritizing retention actions",
          },
          {
            name: "Renewals & Growth",
            description: "Tracking renewals, repurchase opportunities, cross-sell, and expansion",
          },
          {
            name: "Customer Support",
            description: "Classifying inquiries, initial responses, and routing cases that need human intervention",
          },
        ],
      },
    ] satisfies readonly AgentGroup[],
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

/**
 * Renders `text`, turning any embedded "\n" into a hard `<br />` — used for
 * copy that has a deliberate manual line break (see introLines above),
 * unlike the rest of the paragraphs here which just wrap by width.
 */
function TextWithBreaks({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

/** One navy card in the "Agentes en producción" grid: category title + its
 * specializations, each with the role name bold and its description below. */
function AgentCard({ agent }: { agent: AgentGroup }) {
  return (
    <div className="flex flex-col rounded-[8px] bg-navy p-[28px]">
      <h4 className="font-heading text-[20px] font-bold leading-[1.3] text-white">{agent.title}</h4>
      <ul className="mt-[16px] flex flex-col gap-[14px]">
        {agent.roles.map((role) => (
          <li key={role.name}>
            <p className="font-sans text-[14px] font-bold leading-[1.5] text-white">{role.name}</p>
            <p className="mt-[2px] font-sans text-[14px] leading-[1.7] text-muted">{role.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AiSystemSection({ lang = "es" }: { lang?: Lang }) {
  const t = copy[lang];

  return (
    <>
      {/* Header + intro */}
      <section className="container-bc py-[10px]">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={
            <>
              {t.introLines.map((line, i) => (
                <p key={i} className={i > 0 ? "mt-[16px]" : undefined}>
                  <TextWithBreaks text={line} />
                </p>
              ))}
            </>
          }
          maxWidth={760}
          className="mx-auto"
        />
      </section>

      {/* Sistema de análisis — three plain (no-photo) cards: this is
          explanatory, not a teaser, so it deliberately skips the
          FlipCardGrid the Módulos cajón above just used. */}
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

      {/* Criterios de decisión — an intro line explaining that each agent
          has its own decision criteria, followed by a fixed 3-per-row pill
          grid. Six pills now (used to be five): a plain flex-wrap row would
          let width decide where it breaks (4-and-1 on the previous five-pill
          version), so this uses an explicit 3-column grid to keep it a
          deliberate 3-over-3 instead. */}
      <section className="container-bc pt-[36px]">
        <p className={`text-center ${eyebrowClass} mb-[16px]`}>{t.skillsLabel}</p>
        <p className="mx-auto max-w-[640px] text-center font-sans text-[15px] leading-[1.8] text-body">
          {t.skillsIntro}
        </p>
        <div className="mx-auto mt-[20px] grid max-w-[760px] grid-cols-1 gap-[10px] sm:grid-cols-3">
          {t.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-line bg-white px-[18px] py-[9px] text-center font-sans text-[14px] font-medium text-navy"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Agentes en producción — the most important block: real, named
          agents that exist today. Navy cards give it more visual weight than
          the white Capacidades cards above, and the filled "HOY, EN
          PRODUCCIÓN" badge above the title is the deliberate visual opposite
          of the outlined "SISTEMAS DE IA PARA TU EMPRESA" badge on the offer
          box below — solid = real and live, outlined = offer, never mixed
          into the same list. Five categories, laid out 2-over-3 (Tecnología
          + Marketing on top, Preventa/Venta/Posventa below) instead of one
          even grid, since 5 doesn't split evenly. */}
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

        <div className="mt-[32px] grid gap-[20px] md:grid-cols-2">
          {t.agents.slice(0, 2).map((agent) => (
            <AgentCard key={agent.title} agent={agent} />
          ))}
        </div>
        <div className="mt-[20px] grid gap-[20px] md:grid-cols-3">
          {t.agents.slice(2).map((agent) => (
            <AgentCard key={agent.title} agent={agent} />
          ))}
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
