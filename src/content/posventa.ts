import { EstrategiaIcon, VentaIcon } from "@/components/cycleIcons";
import { POSVENTA_GRID } from "./flipGrids";
import type { ServicePageData } from "./types";

export const posventa: ServicePageData = {
  slug: "posventa",
  breadcrumb: "Posventa",
  hero: {
    title: ["¿Buscas fidelizar", "a tus clientes?"],
    lines: [
      "Mejorá la experiencia de tus usuarios.",
      "Identificamos oportunidades para el desarrollo de cuentas.",
    ],
    image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-Support.jpg",
  },
  etapas: {
    eyebrow: "MENTORING POSVENTA",
    grid: POSVENTA_GRID,
    spacerTop: 65,
    cards: [
      {
        title: "Desarrollo de Cuentas",
        tagline: ["CROSS SELLING", "UP SELLING"],
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-DESARROLLO-DE-CUENTAS.jpg",
        items: [
          "Facturación ABC",
          "Mix de productos",
          "Ticket y operaciones",
          "Estacionalidad",
          "Potencial comercial",
        ],
      },
      {
        title: "Medición histórica de altas y bajas (CHURN)",
        tagline: ["RECUPERO", "CAPTACIÓN"],
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-MEDICION-HISTORICA-DE-ALTAS-Y-BAJAS-CHURN.jpg",
        items: [
          "Impacto en meta",
          "Segmentación por tipo de venta, canal y cliente",
          "Provisionamiento por caídas",
        ],
      },
      {
        title: "Segmentación de Cartera",
        tagline: ["FIDELIZACIÓN", "RETENCIÓN"],
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-SEGMENTACION-DE-CARTERA.jpg",
        items: [
          "Facturación promedio por potencial asignado",
          "Estacionalidades",
          "Analizar - Desarrollar - Sostener",
          "Media - Desvío Estándar",
        ],
      },
    ],
  },
  recruiting: {
    title: "Conformamos un equipo de posventa sólido y profesional",
    items: [
      "Descripciones de puesto",
      "Fuentes de reclutamiento",
      "Direccionamiento de entrevistas",
      "Presentación de candidatos",
    ],
  },
  puestos: {
    eyebrow: "ESTRUCTURA COMERCIAL POSVENTA",
    paddingTop: 120,
    cards: [
      {
        title: "Retención",
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
        title: "Crecimiento",
        icon: VentaIcon,
        image: "/images/crecimiento-base-core-sales.jpg",
        roles: ["Account Manager", "KAM", "Account Representative", "Channel Manager"],
      },
    ],
  },
  contactTitleAs: "h2",
};
