import { EstrategiaIcon, VentaIcon } from "@/components/cycleIcons";
import { PREVENTA_GRID } from "./flipGrids";
import { preventaFaq } from "./faqs";
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
    title: "Preventa",
    bullets: [
      "Bases de datos",
      "Modelos de contacto",
      "Calificación de leads",
      "Detección de oportunidades comerciales",
      "Reuniones con tus clientes potenciales.",
    ],
    paragraphs: [
      "Antes de que exista una venta, existe un trabajo silencioso de identificar, calificar y acercarse a quien realmente puede convertirse en cliente. **Esa es la preventa**: el conjunto de actividades que transforma una base de datos fría en una agenda de reuniones calificadas.",
      "Una preventa ordenada hace que tu equipo de ventas hable solo con quien puede comprar, en vez de repartir su tiempo entre todos los contactos que llegan. Ese resultado no sale de un informe: sale de un proceso bien construido y sostenido en el tiempo.",
      "Si estás armando tu [proceso de ventas desde cero](/ebook), descarga nuestro e-book gratuito.",
    ],
  },
  etapas: {
    title: "Etapas",
    eyebrow: "PREVENTA",
    grid: PREVENTA_GRID,
    cards: [
      {
        title: "Prospección",
        tagline: ["Base de datos"],
        image: "/images/Definicion-de-publico-empresarial-objetivo.jpg",
        items: [
          "Identificación de empresas target",
          "Audiencias en LinkedIn Sales Navigator",
          "Market research: tomadores de decisión",
          "Enriquecimiento de datos",
          "Verificadores de mail",
          "Construcción de la base en CRM",
        ],
      },
      {
        title: "Primer contacto",
        tagline: ["Modelos de contacto"],
        image: "/images/contactamiento-Relevamiento-multidimensional.jpg",
        items: [
          "Modelos de contacto",
          "Envíos de email personalizados",
          "Material comercial y newsletters",
          "Llamados en frío > Relacionamiento",
        ],
      },
      {
        title: "Calificación",
        tagline: ["BANT"],
        image: "/images/Nurturing-Organico.jpg",
        items: [
          "BANT: Presupuesto, Autoridad, Necesidad y Plazos",
          "Perfil del prospecto",
          "Campos mínimos por prospecto",
          "Nurturing para quien todavía no está listo",
        ],
      },
      {
        title: "Oportunidad",
        tagline: ["Reunión de venta"],
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
    label: "VER VENTA",
    href: "/venta",
  },
  faq: preventaFaq,
};
