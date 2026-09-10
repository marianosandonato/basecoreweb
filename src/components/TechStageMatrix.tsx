import SectionHeading from "./SectionHeading";
import type { Lang } from "@/lib/site";

type Row = {
  label: string;
  cells: readonly [string, string, string, string];
};

/**
 * "La misma tecnología, en todo el ciclo comercial" — /tecnologia's own
 * matrix cajón, between "Módulos" and "BaseCore AI System" (see that page
 * for placement).
 *
 * Deliberately inverted vs. a conventional table: the 4 commercial stages
 * (Marketing/Preventa/Venta/Posventa) are COLUMNS, and the 4 capabilities
 * (IA/Automatización/Software a medida/CRM) plus "¿Qué hacemos?" are ROWS —
 * this reads as "pick a stage, scan down what we do there", matching how
 * TechnologyBlock already frames each of those 4 pages individually. This
 * component is the one place that puts all 4 side by side for comparison.
 *
 * A real `<table>` (semantic, indexable, works with screen readers) rather
 * than a div-grid dressed up to look like one — styled with the site's own
 * tokens (bg-navy header, text-muted/text-heading/text-body, border-line),
 * no colors outside that palette. No vertical grid lines except the one
 * that matters (sticky label column vs. data) -- lots of whitespace instead
 * of a busy administrative-table look. The label column is `sticky left-0`
 * so it stays visible while scrolling horizontally on narrow viewports
 * (the requested mobile behaviour: scroll instead of cramming 4 columns
 * illegibly small, never collapse into 4 separate card stacks — that would
 * destroy the side-by-side comparison this cajón exists to make).
 */
const copy = {
  es: {
    eyebrow: "TECNOLOGÍA POR ETAPA",
    title: "La misma tecnología, en todo el ciclo comercial",
    intro:
      "Aplicamos IA, automatización, software a medida y CRM de forma transversal en marketing, preventa, venta y posventa.",
    caption:
      "Tabla: capacidades de tecnología (IA, automatización, software a medida, CRM) aplicadas a marketing, preventa, venta y posventa.",
    corner: "Capacidad",
    stages: ["MARKETING", "PREVENTA", "VENTA", "POSVENTA"] as const,
    rows: [
      {
        label: "¿QUÉ HACEMOS?",
        cells: [
          "Captamos, nutrimos y medimos",
          "Identificamos y calificamos oportunidades",
          "Gestionamos y aceleramos oportunidades",
          "Retenemos y hacemos crecer clientes",
        ],
      },
      {
        label: "IA",
        cells: [
          "Contenido y research",
          "Calificación y enriquecimiento",
          "Análisis y seguimiento",
          "Churn y recompra",
        ],
      },
      {
        label: "AUTOMATIZACIÓN",
        cells: [
          "Campañas y nurturing",
          "Scoring y lead routing",
          "Follow-up y tareas",
          "Seguimiento y renovaciones",
        ],
      },
      {
        label: "SOFTWARE A MEDIDA",
        cells: [
          "Web, landing pages y SEO",
          "Prospección y data enrichment",
          "Pipeline, forecast y KPIs",
          "Cartera y segmentación",
        ],
      },
      {
        label: "CRM",
        cells: [
          "Leads y segmentación",
          "Leads y oportunidades",
          "Pipeline y reporting",
          "Clientes y renovaciones",
        ],
      },
    ] satisfies readonly Row[],
  },
  en: {
    eyebrow: "TECHNOLOGY BY STAGE",
    title: "The same technology, across your entire sales cycle",
    intro:
      "We apply AI, automation, custom software, and CRM across marketing, presales, sales, and post-sales.",
    caption:
      "Table: technology capabilities (AI, automation, custom software, CRM) applied to marketing, presales, sales, and post-sales.",
    corner: "Capability",
    stages: ["MARKETING", "PRESALES", "SALES", "POST-SALES"] as const,
    rows: [
      {
        label: "WHAT WE DO",
        cells: [
          "We attract, nurture, and measure",
          "We identify and qualify opportunities",
          "We manage and accelerate opportunities",
          "We retain and grow customers",
        ],
      },
      {
        label: "AI",
        cells: [
          "Content and research",
          "Qualification and enrichment",
          "Analysis and follow-up",
          "Churn and repurchase",
        ],
      },
      {
        label: "AUTOMATION",
        cells: [
          "Campaigns and nurturing",
          "Scoring and lead routing",
          "Follow-up and tasks",
          "Tracking and renewals",
        ],
      },
      {
        label: "CUSTOM SOFTWARE",
        cells: [
          "Web, landing pages, and SEO",
          "Prospecting and data enrichment",
          "Pipeline, forecast, and KPIs",
          "Portfolio and segmentation",
        ],
      },
      {
        label: "CRM",
        cells: [
          "Leads and segmentation",
          "Leads and opportunities",
          "Pipeline and reporting",
          "Customers and renewals",
        ],
      },
    ] satisfies readonly Row[],
  },
} as const;

export default function TechStageMatrix({ lang = "es" }: { lang?: Lang }) {
  const t = copy[lang];

  return (
    <>
      <section className="container-bc py-[10px]">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.intro}
          maxWidth={720}
          className="mx-auto"
        />
      </section>

      {/* Outer wrapper owns the rounded corners + border (clipped once);
          the inner wrapper owns the horizontal scroll, so a narrow viewport
          scrolls the table without losing the rounded frame around it. */}
      <section className="container-bc pt-[40px]">
        <div className="overflow-hidden rounded-[12px] border border-line">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">{t.caption}</caption>
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="sticky left-0 z-[2] min-w-[130px] border-r border-white/15 bg-navy px-[18px] py-[16px] align-bottom font-sans text-[11px] font-semibold uppercase tracking-[1.5px] text-muted md:px-[24px] md:py-[20px]"
                  >
                    {t.corner}
                  </th>
                  {t.stages.map((stage) => (
                    <th
                      key={stage}
                      scope="col"
                      className="min-w-[150px] bg-navy px-[18px] py-[16px] align-bottom font-heading text-[15px] font-bold uppercase tracking-[0.5px] text-white md:px-[24px] md:py-[20px] md:text-[18px]"
                    >
                      {stage}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.rows.map((row, i) => {
                  const isFirst = i === 0;
                  const rowBg = isFirst ? "bg-soft" : "bg-white";
                  return (
                    <tr key={row.label}>
                      <th
                        scope="row"
                        className={`sticky left-0 z-[1] min-w-[130px] border-t border-r border-line px-[18px] py-[16px] text-left font-heading text-[13px] font-bold tracking-[0.3px] md:px-[24px] md:py-[20px] md:text-[15px] ${rowBg} ${
                          isFirst ? "text-primary" : "text-heading"
                        }`}
                      >
                        {row.label}
                      </th>
                      {row.cells.map((cell, j) => (
                        <td
                          key={j}
                          className={`min-w-[150px] border-t border-line px-[18px] py-[16px] font-sans text-[13.5px] leading-[1.6] text-body md:px-[24px] md:py-[20px] md:text-[15px] ${rowBg}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="h-[50px]" aria-hidden="true" />
    </>
  );
}
