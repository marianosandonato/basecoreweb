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
