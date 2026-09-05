import { EstrategiaIcon, VentaIcon } from "@/components/cycleIcons";
import { VENTA_GRID } from "./flipGrids";
import type { ServicePageData } from "./types";

export const ventaEn: ServicePageData = {
  slug: "sales",
  breadcrumb: "Sales",
  hero: {
    title: ["Looking to improve your", "commercial management?"],
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
      "Sustained results don't come from intuition — they come from a process the team can follow and repeat with consistent results. **Getting sales in order** means answering, at any moment, what stage each deal is in and what's pushing it toward close.",
      "A pipeline without metrics is, literally, a blind pipeline. 80% of sales require at least five touches to close, yet 44% of reps give up after the first one. That gap closes with a process that defines **when and how to move forward**.",
      "Already have a process but need to structure it? Download our free [e-book, Sales Process from Scratch](/en/ebook).",
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
