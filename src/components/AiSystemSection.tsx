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
  /** All three cards now share the same "Rol — descripción" list format. */
  roles: readonly string[];
};

type WorkflowStep = {
  title: string;
  description: string;
};

/**
 * "BaseCore AI System" — /tecnologia's own methodology cajón, between "Módulos"
 * and the BaseHub teaser (see that page for placement).
 *
 * Structure (top to bottom): intro (two paragraphs) -> Capacidades (3 plain
 * cards, no photos -- this is informational, not a marketing flip-box) ->
 * Skills (a pill row) -> Agentes en producción (the most important block,
 * navy cards so it reads with more weight than the white cards above it) ->
 * Workflow (a 7-step process, title+description per step) -> "El mismo
 * método, aplicado a tu negocio" (visually distinct dashed/soft offer box —
 * see the file's comment above that block for why it must never look like
 * the "Agentes en producción" block above it).
 */
const copy = {
  es: {
    eyebrow: "METODOLOGÍA PROPIA DE IA",
    title: "BaseCore AI System",
    introLines: [
      "Un sistema propio de agentes de inteligencia artificial que investiga, observa y decide antes de ejecutar.",
      "Cada proyecto trabaja con agentes especializados que comparten contexto, herramientas y criterios de decisión. El objetivo no es automatizar por automatizar: es tomar mejores decisiones antes de ejecutar.",
    ] as readonly string[],
    capacidadesLabel: "QUÉ PUEDE HACER, ADEMÁS DE PROGRAMAR",
    capacidades: [
      {
        title: "Investigación en tiempo real",
        description:
          "Consulta información actual de mercado, competencia y tendencias cuando esa información puede cambiar una decisión. No trabaja solo con conocimiento previo: investiga cuando hace falta.",
        icon: ResearchIcon,
        tool: "Perplexity",
      },
      {
        title: "Observación de sitios reales",
        description:
          "Entra al sitio o la aplicación real, navega, prueba la experiencia y detecta problemas directamente sobre lo que va a ver un usuario. No supone cómo funciona: lo observa.",
        icon: ObservationIcon,
        tool: "Playwright",
      },
      {
        title: "Memoria del proyecto",
        description:
          "Recupera decisiones, contexto, historial y criterios relevantes antes de empezar una tarea nueva. Cada proyecto conserva su propio conocimiento, para no arrancar de cero cada vez.",
        icon: MemoryIcon,
      },
    ] satisfies readonly Capability[],
    skillsLabel: "CON CRITERIO PROPIO EN",
    skills: [
      "Proceso de decisión propio",
      "Buenas prácticas de SEO y conversión",
      "Dirección de diseño e identidad visual",
      "Criterios de seguridad",
      "Priorización y planificación",
    ],
    agentsBadge: "HOY, EN PRODUCCIÓN",
    agentsTitle: "Los agentes que ya trabajan en Base Core",
    agentsIntro: "Cinco agentes especializados, coordinados entre sí, en uso real todos los días:",
    agentsInProduction: "EN PRODUCCIÓN",
    agents: [
      {
        title: "Sitio Web",
        roles: [
          "Producto & Diseño — UX, UI, estructura y evolución del sitio",
          "SEO & Conversión — posicionamiento, keywords, contenido y conversión",
          "Performance — velocidad, rendimiento y Core Web Vitals",
        ],
      },
      {
        title: "Contenido y Redes",
        roles: [
          "Social Content — estrategia y producción de contenido alineada a la marca, el canal y los objetivos del negocio",
        ],
      },
      {
        title: "Desarrollo de Producto",
        roles: [
          "BaseHub — desarrollo y evolución de la plataforma propia de seguimiento e implementación de proyectos",
        ],
      },
    ] satisfies readonly AgentGroup[],
    workflowLabel: "CÓMO DECIDE ANTES DE EJECUTAR",
    workflowTitle: "Un mismo proceso, en cada tarea",
    workflow: [
      { title: "Entender", description: "Identifica el objetivo, el contexto y las restricciones." },
      { title: "Observar", description: "Comprueba la situación real antes de sacar conclusiones." },
      { title: "Investigar", description: "Busca información externa cuando puede cambiar la decisión." },
      { title: "Recordar", description: "Recupera conocimiento y decisiones relevantes del proyecto." },
      { title: "Decidir", description: "Analiza alternativas, prioriza y define un camino." },
      { title: "Ejecutar", description: "Implementa recién después de definir qué hacer y por qué." },
      { title: "Comprobar", description: "Verifica el resultado y ajusta si hace falta." },
    ] satisfies readonly WorkflowStep[],
    extensionBadge: "SERVICIO A MEDIDA",
    extensionTitle: "El mismo método, a la medida de tu negocio",
    extensionBody:
      "Base Core puede diseñar el mismo sistema para otras áreas de tu empresa: agentes que investigan, observan y deciden antes de automatizar procesos reales.",
    extensionAreas: ["Preventa", "Venta", "Posventa", "Reclutamiento", "Marketing", "Operaciones"],
    extensionCta: "CONVERSEMOS SOBRE TU EQUIPO",
  },
  en: {
    eyebrow: "OUR OWN AI METHODOLOGY",
    title: "BaseCore AI System",
    introLines: [
      "An AI agent system that researches, observes, and decides before acting.",
      "Every project runs on specialized agents that share context, tools, and decision criteria. The goal isn't automation for its own sake — it's better decisions before execution.",
    ] as readonly string[],
    capacidadesLabel: "WHAT IT CAN DO, BEYOND WRITING CODE",
    capacidades: [
      {
        title: "Real-time research",
        description:
          "Checks current market, competitor, and trend data when that information can change a decision. It doesn't rely only on prior knowledge — it researches when it's actually needed.",
        icon: ResearchIcon,
        tool: "Perplexity",
      },
      {
        title: "Observation of real sites",
        description:
          "Opens the real site or app, navigates it, tests the experience, and catches issues directly on what a user will actually see. It doesn't assume how something works — it observes it.",
        icon: ObservationIcon,
        tool: "Playwright",
      },
      {
        title: "Project memory",
        description:
          "Retrieves decisions, context, history, and relevant criteria before starting a new task. Every project keeps its own knowledge, instead of starting from zero each time.",
        icon: MemoryIcon,
      },
    ] satisfies readonly Capability[],
    skillsLabel: "WORKING WITH ITS OWN CRITERIA FOR",
    skills: [
      "Its own decision-making process",
      "SEO and conversion best practices",
      "Design direction and visual identity",
      "Security guidelines",
      "Prioritization and planning",
    ],
    agentsBadge: "LIVE TODAY",
    agentsTitle: "The agents already working at Base Core",
    agentsIntro: "Five specialized agents, coordinated with each other, in real use every day:",
    agentsInProduction: "IN PRODUCTION",
    agents: [
      {
        title: "Website",
        roles: [
          "Product & Design — UX, UI, site structure and evolution",
          "SEO & Conversion — rankings, keywords, content and conversion",
          "Performance — speed and Core Web Vitals",
        ],
      },
      {
        title: "Content & Social",
        roles: [
          "Social Content — content strategy and production aligned with the brand, channel and business goals",
        ],
      },
      {
        title: "Product Development",
        roles: [
          "BaseHub — development and evolution of our own project tracking and implementation platform",
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
      { title: "Verify", description: "Checks the result and adjusts if needed." },
    ] satisfies readonly WorkflowStep[],
    extensionBadge: "CUSTOM-BUILT SERVICE",
    extensionTitle: "The same method, tailored to your business",
    extensionBody:
      "Base Core can design the same system for other areas of your company: agents that research, observe, and decide before automating real processes.",
    extensionAreas: ["Presales", "Sales", "Post-Sales", "Recruiting", "Marketing", "Operations"],
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
          description={
            <>
              {t.introLines.map((line, i) => (
                <p key={i} className={i > 0 ? "mt-[16px]" : undefined}>
                  {line}
                </p>
              ))}
            </>
          }
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

              <ul className="mt-[16px] flex flex-col gap-[12px]">
                {agent.roles.map((role) => (
                  <li key={role} className="font-sans text-[14px] leading-[1.7] text-muted">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow — the real internal cycle condensed to seven stages, each
          with a short description, shown as a numbered vertical stepper.
          A 7-step flow with title+description no longer fits a horizontal
          row-with-connectors on desktop (the old 6-word-only version did),
          so it keeps the same stepper language everywhere and just splits
          into two columns (4 + 3) from `lg` up to use the width instead of
          producing one very long column. Below `lg` it's one continuous
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

        {/* lg and up: two vertical steppers side by side (steps 1–4, 5–7),
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
