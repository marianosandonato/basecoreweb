import { EstrategiaIcon, VentaIcon } from "@/components/cycleIcons";
import { VENTA_GRID } from "./flipGrids";
import type { ServicePageData } from "./types";

export const ventaEn: ServicePageData = {
  slug: "sales",
  breadcrumb: "Sales",
  hero: {
    title: ["Looking to improve your", "sales process?"],
    lines: [
      "Define a strategic plan.",
      "We professionalize your sales team.",
    ],
    image: "/images/sales-base-core-sales.jpg",
  },
  about: {
    eyebrow: "What We Do",
    title: "Sales",
    bullets: [
      "Sales model definition",
      "Pipeline & forecasting",
      "Sales funnels & cycles",
      "Sales playbooks & materials",
      "Goals, targets & KPIs",
      "Compensation schemes",
    ],
    paragraphs: [
      "Closing a sale rarely comes down to a “naturally gifted” rep — it comes down to a process anyone on the team can follow and repeat with consistent results. Getting sales in order means being able to answer, at any moment, what stage each deal is in, how much you'll bill next month, and what's actually pushing a negotiation toward close — instead of finding out only at month's end.",
      "A pipeline without metrics is, literally, a blind pipeline. In a real B2B commercial consulting engagement*, a company that was losing 60% of its opportunities to poor follow-up raised its conversion rate from 19% to 31% — and cut its sales cycle from 14 to 9 weeks — in nine months, simply by structuring the process and reviewing the pipeline every week.",
    ],
  },
  etapas: {
    eyebrow: "COMMERCIAL MENTORING",
    grid: VENTA_GRID,
    cards: [
      {
        title: "Current-State Assessment",
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-Diagnostico-de-situacion-actual.jpg",
        items: [
          "Assessment",
          "Team interviews",
          "Findings presentation",
          "Improvement opportunities",
        ],
      },
      {
        title: "Sales Model",
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-modelo-comercial.jpg",
        items: [
          "Operating framework",
          "Priority order",
          "Sales type",
          "Methodology",
        ],
      },
      {
        title: "Pipeline & Funnel",
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-Pipeline-Y-Funnel.jpg",
        items: [
          "Defining the pipeline stages",
          "Timeframes",
          "Mandatory requirements",
          "Funnel conversion rates",
        ],
      },
      {
        title: "Goals & Targets",
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-METAS-Y-OBJETIVOS.jpg",
        items: [
          "Expected outcome",
          "Overall target",
          "Results & management objectives",
          "Target per rep",
          "New business - Up & cross-sell - Recurring revenue",
        ],
      },
      {
        title: "KPIs",
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-KPI.jpg",
        items: [
          "Defining relevant indicators",
          "Measuring variables and results",
          "Strategic decision-making",
        ],
      },
      {
        title: "Forecasting",
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-FORECAST.jpg",
        items: [
          "Demand forecasting",
          "Historical sales data",
          "Average spend per client",
          "Trend and competitor analysis",
          "Sales & marketing estimates",
          "Market data",
        ],
      },
      {
        title: "Onboarding & Coaching Models",
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-Modelos-de-induccion-y-supervision.jpg",
        items: [
          "Sales rep training model",
          "Call auditing",
          "Hard and soft skills",
          "Coaching model",
          "Coaching - Sprints",
          "Meeting and follow-up agendas",
        ],
      },
      {
        title: "Compensation Schemes",
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-Esquemas-de-compensacion.jpg",
        items: [
          "Fixed and variable pay",
          "Commission system tied to targets",
          "Incentives - Bonuses - Accelerators",
          "Benefits scheme",
          "Payroll simulator",
        ],
      },
      {
        title: "CRM Implementation",
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-Implementacion-CRM.jpg",
        items: [
          "Prospecting database",
          "Presales and sales processes",
          "Actions, tasks and follow-up",
          "Quotes",
          "Reports and dashboards",
        ],
      },
    ],
  },
  recruiting: {
    title: "We build a solid, professional sales team",
    items: [
      "Job descriptions",
      "Sourcing channels",
      "Interview coordination",
      "Candidate presentation",
    ],
  },
  puestos: {
    eyebrow: "SALES COMMERCIAL STRUCTURE",
    cards: [
      {
        title: "Closers",
        icon: EstrategiaIcon,
        image: "/images/cerradores-basecoresales.jpg",
        roles: ["Sales Executive", "Inside Sales Rep", "Account Executive"],
      },
      {
        title: "New Business",
        icon: VentaIcon,
        image: "/images/nuevos-negocios-base-core-sales.jpg",
        roles: ["Business Development Manager"],
      },
    ],
  },
  nextCycle: {
    label: "SEE THE POST-SALES FUNNEL",
    href: "/en/post-sales",
  },
  contactTitleAs: "h2",
};
