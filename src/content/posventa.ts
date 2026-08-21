import { EstrategiaIcon, VentaIcon } from "@/components/cycleIcons";
import { POSVENTA_GRID } from "./flipGrids";
import type { ServicePageData } from "./types";

export const posventa: ServicePageData = {
  slug: "posventa",
  breadcrumb: "Posventa",
  hero: {
    title: ["¿Buscas fidelizar y", "retener a tus clientes?"],
    lines: [
      "Mejorá la experiencia de tus usuarios.",
      "Identificamos oportunidades para el desarrollo de cuentas.",
    ],
    image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-Support.jpg",
  },
  about: {
    eyebrow: "Qué hacemos",
    title: "Posventa",
    subtitle: "Algunos de nuestros desarrollos.",
    bullets: [
      "Desarrollo de cuentas",
      "Cross y up-selling",
      "Medición de bajas",
      "Segmentación de cartera",
      "Retención y fidelización de clientes.",
    ],
    paragraphs: [
      "Adquirir un cliente nuevo puede costar entre 6 y 7 veces más que retener a uno que ya confía en tu empresa. Sin embargo, la mayoría de las organizaciones concentra su energía comercial en la apertura de cuentas. Ahí es donde la posventa define el resultado: es la etapa que determina si esa inversión inicial se transforma en una relación rentable y sostenida, o en una nueva baja.",
      "Un cliente existente tiene entre 60% y 70% de probabilidad de volver a comprarte cuando la propuesta es relevante. Un prospecto nuevo, entre 5% y 20%. Ese contraste explica por qué pequeñas mejoras en la tasa de retención tienen un impacto desproporcionado en la rentabilidad. Vista así, la posventa deja de ser un área de soporte y pasa a ser lo que realmente es: la palanca de rentabilidad más subestimada del ciclo comercial.",
    ],
  },
  etapas: {
    eyebrow: "MENTORING POSVENTA",
    grid: POSVENTA_GRID,
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
