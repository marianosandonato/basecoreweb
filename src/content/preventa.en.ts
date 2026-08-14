import { EstrategiaIcon, VentaIcon } from "@/components/cycleIcons";
import { PREVENTA_GRID } from "./flipGrids";
import type { ServicePageData } from "./types";

export const preventaEn: ServicePageData = {
  slug: "presales",
  breadcrumb: "Presales",
  hero: {
    title: ["Looking for new", "business opportunities?"],
    lines: [
      "Get meetings with your potential clients.",
      "We identify your target audience and gather the information you need.",
    ],
    image: "/images/base-core-sales-consegui-reuniones-con-tus-clientes-potenciales.jpg",
  },
  etapas: {
    eyebrow: "PRESALES",
    grid: PREVENTA_GRID,
    cards: [
      {
        title: "Database Building",
        tagline: ["Potential Clients"],
        image: "/images/Definicion-de-publico-empresarial-objetivo.jpg",
        items: [
          "Identification of target companies",
          "LinkedIn Sales Navigator audiences",
          "Minimum required fields per company",
          "Prospecting database built in the CRM",
          "Data enrichment from search engines",
          "Business info platforms + Google Search",
          "CRM implementation",
        ],
      },
      {
        title: "Lead Qualification",
        tagline: ["Organic Nurturing"],
        image: "/images/Nurturing-Organico.jpg",
        items: [
          "Data enrichment",
          "Market research: identifying decision-makers",
          "Minimum required fields per prospect",
          "Email verifiers",
          "Websites - Social media",
          "Initial database consolidation + prospect profile",
        ],
      },
      {
        title: "Multi-Dimensional Assessment",
        tagline: ["Outreach"],
        image: "/images/contactamiento-Relevamiento-multidimensional.jpg",
        items: [
          "Outreach models",
          "Personalized email sends",
          "Sales material - Newsletters",
          "Branding & Awareness",
          "Cold calling > Relationship building",
          "BANT: Budget, Authority, Need and Timeline",
        ],
      },
      {
        title: "Sales Opportunity Detection",
        tagline: ["Conversion"],
        image: "/images/Deteccion-de-oportunidad-comercial.jpg",
        items: [
          "Meeting scheduled for the sales approach",
          "Sales executive introduction",
          "Entry into the sales funnel",
        ],
      },
    ],
  },
  recruiting: {
    title: "We build a solid, professional presales team",
    items: [
      "Job descriptions",
      "Sourcing channels",
      "Interview coordination",
      "Candidate presentation",
    ],
  },
  puestos: {
    eyebrow: "PRESALES COMMERCIAL STRUCTURE",
    cards: [
      {
        title: "Inbound",
        icon: EstrategiaIcon,
        image: "/images/inbound-presales.jpg",
        roles: [
          "Inbound Sales Representative",
          "Lead Development Representative",
          "Lead Response Representative",
        ],
      },
      {
        title: "Outbound",
        icon: VentaIcon,
        image: "/images/outbound-presales.jpg",
        roles: [
          "Sales Development Representative",
          "Business Development Representative",
          "Account Development Representative",
        ],
      },
    ],
  },
  nextCycle: {
    label: "SEE THE SALES FUNNEL",
    href: "/en/sales",
  },
};
