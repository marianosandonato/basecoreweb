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
    bullets: [
      "Account development",
      "Cross-selling & up-selling",
      "Churn tracking",
      "Portfolio segmentation",
      "Customer retention & loyalty.",
    ],
    paragraphs: [
      "Acquiring a new customer can cost up to 7 times more than **retaining one who already trusts** your business, yet most companies pour their energy into opening new accounts. That's where post-sales decides the outcome: a profitable relationship, or another lost account.",
      "An existing customer has a 60% to 70% chance of buying again; a new prospect, just 5% to 20%. That's why small gains in retention move profitability so much — post-sales isn't support, it's **the most underrated asset in the cycle**.",
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
