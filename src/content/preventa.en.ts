import { EstrategiaIcon, VentaIcon } from "@/components/cycleIcons";
import { PREVENTA_GRID } from "./flipGrids";
import { preventaFaqEn } from "./faqs.en";
import type { ServicePageData } from "./types";

export const preventaEn: ServicePageData = {
  slug: "presales",
  breadcrumb: "Presales",
  hero: {
    title: ["Looking for B2B", "lead generation?"],
    lines: [
      "Get meetings with your potential clients.",
      "We identify your target audience and gather the information you need.",
    ],
    image: "/images/base-core-sales-consegui-reuniones-con-tus-clientes-potenciales.jpg",
  },
  about: {
    eyebrow: "What We Do",
    title: "Presales",
    bullets: [
      "Database building",
      "Outreach models",
      "Lead qualification",
      "Sales opportunity detection",
      "Meetings with your potential clients.",
    ],
    paragraphs: [
      "Before a sale ever happens, there's quiet groundwork: identifying, qualifying, and reaching out to whoever can realistically become a client. **That's presales** — the set of activities that turns a cold database into a calendar full of qualified meetings.",
      "Organized presales means your sales team only talks to people who can actually buy, instead of splitting its time across every contact that comes in. Results like that don't come from a report — they come from a well-built process, sustained over time.",
      "If you're building your [sales process from scratch](/en/ebook), download our free e-book.",
    ],
  },
  etapas: {
    title: "Stages",
    eyebrow: "PRESALES",
    grid: PREVENTA_GRID,
    cards: [
      {
        title: "Prospecting",
        tagline: ["Database"],
        image: "/images/Definicion-de-publico-empresarial-objetivo.jpg",
        items: [
          "Identification of target companies",
          "LinkedIn Sales Navigator audiences",
          "Market research: decision-makers",
          "Data enrichment",
          "Email verifiers",
          "Building the database in the CRM",
        ],
      },
      {
        title: "First Contact",
        tagline: ["Outreach Models"],
        image: "/images/contactamiento-Relevamiento-multidimensional.jpg",
        items: [
          "Outreach models",
          "Personalized email sends",
          "Sales material and newsletters",
          "Cold calling > Relationship building",
        ],
      },
      {
        title: "Qualification",
        tagline: ["BANT"],
        image: "/images/Nurturing-Organico.jpg",
        items: [
          "BANT: Budget, Authority, Need and Timeline",
          "Prospect profile",
          "Minimum fields per prospect",
          "Nurturing for those not ready yet",
        ],
      },
      {
        title: "Opportunity",
        tagline: ["Sales Meeting"],
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
    label: "SEE SALES",
    href: "/en/sales",
  },
  faq: preventaFaqEn,
};
