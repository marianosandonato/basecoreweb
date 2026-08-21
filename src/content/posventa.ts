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
      "Conseguir un cliente nuevo puede costar entre 5 y 25 veces más que retener uno que ya confía en vos, según distintos estudios de Bain & Company y Harvard Business Review*. Sin embargo, es habitual que las empresas dediquen casi todo su esfuerzo comercial a la puerta de entrada, y muy poco a lo que pasa después de la firma. La posventa es donde se decide si esa inversión inicial se convierte en un cliente que vuelve a comprar — o en una oportunidad que se pierde en silencio.",
      "Un cliente existente tiene entre 60% y 70% de probabilidad de comprarte de nuevo si le ofrecés algo relevante, contra apenas 5% a 20% de probabilidad de conversión de un prospecto nuevo, según datos de Marketing Metrics*. Y no es un detalle menor: un aumento del 5% en la retención puede elevar las ganancias de una empresa entre 25% y 95%. La posventa no es un costo de soporte — es, probablemente, la palanca de rentabilidad más subestimada de todo el ciclo comercial.",
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
