import { EstrategiaIcon, VentaIcon } from "@/components/cycleIcons";
import { PREVENTA_GRID } from "./flipGrids";
import type { ServicePageData } from "./types";

export const preventa: ServicePageData = {
  slug: "preventa",
  breadcrumb: "Preventa",
  hero: {
    title: ["¿Buscas prospectar y", "captar clientes B2B?"],
    lines: [
      "Consigue reuniones con tus clientes potenciales.",
      "Identificamos tu público objetivo y relevamos información imprescindible.",
    ],
    image: "/images/base-core-sales-consegui-reuniones-con-tus-clientes-potenciales.jpg",
  },
  about: {
    eyebrow: "Qué hacemos",
    title: "PREVENTA",
    subtitle: "Algunos de nuestros desarrollos.",
    bullets: [
      "Desarrollamos bases de datos",
      "Modelo de contactación",
      "Calificación de leads",
      "Detección de oportunidades comerciales",
      "Conseguimos reuniones con tus clientes potenciales.",
    ],
    paragraphs: [
      "Antes de que exista una venta, existe un trabajo silencioso de identificar, calificar y acercarse a quien realmente puede convertirse en cliente. Esa es la preventa: el conjunto de actividades que transforma una base de datos fría en una agenda de reuniones calificadas.",
      "Según McKinsey & Company, las empresas con procesos de preventa sólidos logran tasas de éxito de 40% a 50% en negocios nuevos y de 80% a 90% en renovaciones — muy por encima del promedio del mercado. Ese tipo de resultado no sale de un informe: sale de un proceso bien construido y sostenido en el tiempo.",
      "Una vez que la oportunidad está calificada, el trabajo pasa a manos del proceso de venta.",
    ],
  },
  etapas: {
    eyebrow: "PREVENTA",
    grid: PREVENTA_GRID,
    cards: [
      {
        title: "Armado de base de datos",
        tagline: ["Clientes Potenciales"],
        image: "/images/Definicion-de-publico-empresarial-objetivo.jpg",
        items: [
          "Identificación de empresas target",
          "Audiencias en Linkedin Sales Navigator",
          "Campos mínimos requeridos por empresa",
          "Construcción de base de prospección en CRM",
          "Nutrición de datos desde motores de búsqueda",
          "Plataformas de info empresarial + Google Search",
          "Implementación de CRM",
        ],
      },
      {
        title: "Calificación de Leads",
        tagline: ["Nurturing Orgánico"],
        image: "/images/Nurturing-Organico.jpg",
        items: [
          "Enriquecimiento de datos",
          "Market research: Identificación tomadores de decisión",
          "Campos mínimos requeridos por prospecto",
          "Verificadores de mail",
          "Sitios Web - Redes Sociales",
          "Consolidación de base inicial + Perfil del prospectos",
        ],
      },
      {
        title: "Relevamiento multidimensional",
        tagline: ["Contactación"],
        image: "/images/contactamiento-Relevamiento-multidimensional.jpg",
        items: [
          "Modelos de contactación",
          "Envíos de email personalizados",
          "Material comercial - Newsletters",
          "Branding & Awareness",
          "Llamados en frío > Relacionamiento",
          "BANT: Presupuesto, Autoridad, Necesidad y Plazos",
        ],
      },
      {
        title: "Detección de oportunidad comercial",
        tagline: ["Conversión"],
        image: "/images/Deteccion-de-oportunidad-comercial.jpg",
        items: [
          "Agenda de reunión para abordaje comercial",
          "Presentación del ejecutivo de venta",
          "Apertura al funnel de ventas",
        ],
      },
    ],
  },
  recruiting: {
    title: "Conformamos un equipo de preventa sólido y profesional",
    items: [
      "Descripciones de puesto",
      "Fuentes de reclutamiento",
      "Direccionamiento de entrevistas",
      "Presentación de candidatos",
    ],
  },
  puestos: {
    eyebrow: "ESTRUCTURA COMERCIAL DE PREVENTA",
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
    label: "VER FUNNEL VENTAS",
    href: "/venta",
  },
};
