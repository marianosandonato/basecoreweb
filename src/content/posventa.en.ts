import { EstrategiaIcon, VentaIcon } from "@/components/cycleIcons";
import { POSVENTA_GRID } from "./flipGrids";
import type { ServicePageData } from "./types";

export const posventaEn: ServicePageData = {
  slug: "post-sales",
  breadcrumb: "Post-Sales",
  hero: {
    title: ["Looking to retain and", "build customer loyalty?"],
    lines: [
      "Improve your customers' experience.",
      "We identify opportunities to grow your accounts.",
    ],
    image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-Support.jpg",
  },
  about: {
    eyebrow: "What We Do",
    title: "Post-Sales",
    subtitle: "Some of what we develop.",
    bullets: [
      "Account development",
      "Cross-selling & up-selling",
      "Churn tracking",
      "Portfolio segmentation",
      "Customer retention & loyalty.",
    ],
    paragraphs: [
      "Acquiring a new customer can cost 5 to 25 times more than retaining one who already trusts you, according to various studies by Bain & Company and Harvard Business Review*. Yet it's common for companies to pour nearly all their commercial effort into the front door, and very little into what happens after the contract is signed. Post-sales is where that initial investment either turns into a customer who buys again — or an opportunity that quietly slips away.",
      "An existing customer has a 60% to 70% chance of buying from you again when you offer them something relevant, versus just 5% to 20% for converting a new prospect, according to Marketing Metrics*. And it's not a minor detail: a 5% increase in retention can lift a company's profits by 25% to 95%. Post-sales isn't a support cost — it's arguably the most underrated profitability lever in the entire commercial cycle.",
    ],
  },
  etapas: {
    eyebrow: "POST-SALES MENTORING",
    grid: POSVENTA_GRID,
    cards: [
      {
        title: "Account Development",
        tagline: ["CROSS SELLING", "UP SELLING"],
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-DESARROLLO-DE-CUENTAS.jpg",
        items: [
          "ABC revenue analysis",
          "Product mix",
          "Ticket size and transactions",
          "Seasonality",
          "Commercial potential",
        ],
      },
      {
        title: "Historical Churn & Acquisition Tracking",
        tagline: ["WIN-BACK", "ACQUISITION"],
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-MEDICION-HISTORICA-DE-ALTAS-Y-BAJAS-CHURN.jpg",
        items: [
          "Impact on target",
          "Segmentation by sale type, channel and customer",
          "Churn provisioning",
        ],
      },
      {
        title: "Portfolio Segmentation",
        tagline: ["LOYALTY", "RETENTION"],
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-SEGMENTACION-DE-CARTERA.jpg",
        items: [
          "Average revenue vs. assigned potential",
          "Seasonality",
          "Analyze - Develop - Sustain",
          "Mean - Standard deviation",
        ],
      },
    ],
  },
  recruiting: {
    title: "We build a solid, professional post-sales team",
    items: [
      "Job descriptions",
      "Sourcing channels",
      "Interview coordination",
      "Candidate presentation",
    ],
  },
  puestos: {
    eyebrow: "POST-SALES COMMERCIAL STRUCTURE",
    cards: [
      {
        title: "Retention",
        icon: EstrategiaIcon,
        image: "/images/retencion-base-core-sales.jpg",
        roles: [
          "Customer Success Rep",
          "Customer Success Manager",
          "Customer Support Executive",
          "Customer Success Executive",
        ],
      },
      {
        title: "Growth",
        icon: VentaIcon,
        image: "/images/crecimiento-base-core-sales.jpg",
        roles: ["Account Manager", "KAM", "Account Representative", "Channel Manager"],
      },
    ],
  },
  contactTitleAs: "h2",
};
