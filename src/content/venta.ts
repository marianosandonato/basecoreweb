import { EstrategiaIcon, VentaIcon } from "@/components/cycleIcons";
import { VENTA_GRID } from "./flipGrids";
import type { ServicePageData } from "./types";

export const venta: ServicePageData = {
  slug: "venta",
  breadcrumb: "Venta",
  hero: {
    title: ["¿Buscas mejorar tu", "proceso de ventas?"],
    lines: [
      "Define un plan estratégico.",
      "Profesionalizamos a tu equipo comercial.",
    ],
    image: "/images/sales-base-core-sales.jpg",
  },
  about: {
    eyebrow: "Qué hacemos",
    title: "Venta",
    bullets: [
      "Definición de modelo comercial",
      "Pipeline y forecast",
      "Funnels y ciclos comerciales",
      "Manuales y materiales de venta",
      "Metas, objetivos y KPI’s",
      "Esquemas de compensación",
    ],
    paragraphs: [
      "Los resultados sostenidos no salen de la intuición: salen de un proceso que cualquier persona del equipo pueda seguir y repetir con resultados consistentes. Ordenar la venta significa poder responder, en cualquier momento, en qué etapa está cada oportunidad y qué es lo que realmente empuja una negociación hacia el cierre.",
      "Un pipeline sin métricas es, literalmente, un pipeline ciego. Se estima que el 80% de las ventas requiere al menos cinco puntos de contacto para concretarse, pero el 44% de los vendedores abandona después del primero. Esa brecha no se cierra pidiendo más esfuerzo al equipo: se cierra con un proceso que defina cuándo, cómo y quién hace cada seguimiento.",
    ],
  },
  etapas: {
    eyebrow: "MENTORING COMERCIAL",
    grid: VENTA_GRID,
    cards: [
      {
        title: "Diagnóstico de situación actual",
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-Diagnostico-de-situacion-actual.jpg",
        items: [
          "Relevamiento",
          "Entrevistas a equipos",
          "Presentación de diagnóstico",
          "Oportunidades de mejora",
        ],
      },
      {
        title: "Modelo comercial",
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-modelo-comercial.jpg",
        items: [
          "Esquema de actuación",
          "Orden de prioridades",
          "Tipo de venta",
          "Metodología",
        ],
      },
      {
        title: "Pipeline & Funnel",
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-Pipeline-Y-Funnel.jpg",
        items: [
          "Definición de las etapas del pipeline",
          "Temporalidades",
          "Requisitos obligatorios",
          "Tasas de conversión del funnel",
        ],
      },
      {
        title: "Metas y Objetivos",
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-METAS-Y-OBJETIVOS.jpg",
        items: [
          "Resultado esperado",
          "Meta general",
          "Objetivos de resultado y gestión",
          "Meta por vendedor",
          "Venta Nueva - Up & Cross Sell - Recurrencia",
        ],
      },
      {
        title: "KPI’s",
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-KPI.jpg",
        items: [
          "Definición de indicadores relevantes",
          "Medición de variables y resultados",
          "Toma de decisiones estratégicas",
        ],
      },
      {
        title: "Forecast",
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-FORECAST.jpg",
        items: [
          "Previsión de demanda",
          "Datos históricos de venta",
          "Gasto promedio por cliente",
          "Análisis de tendencias y competencia",
          "Estimación de ventas y marketing",
          "Datos de mercado",
        ],
      },
      {
        title: "Modelos de inducción y supervisión",
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-Modelos-de-induccion-y-supervision.jpg",
        items: [
          "Modelo de formación a vendedores",
          "Auditoría de llamados",
          "Habilidades duras y blandas",
          "Modelo de supervisión",
          "Coaching - Sprint",
          "Temarios de reunión y seguimiento",
        ],
      },
      {
        title: "Esquemas de compensación",
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-Esquemas-de-compensacion.jpg",
        items: [
          "Remuneración fija y variable",
          "Sistema de comisiones según objetivos",
          "Premios - Bonos - Aceleradores",
          "Esquema de beneficios",
          "Simulador para liquidación de haberes",
        ],
      },
      {
        title: "Implementación CRM",
        image: "/images/Base-Core-Consultoria-Comercial-y-Marketing-Implementacion-CRM.jpg",
        items: [
          "Base de datos para prospección",
          "Procesos de preventa y venta",
          "Acciones, tareas y seguimiento",
          "Presupuestos",
          "Reportes y paneles",
        ],
      },
    ],
  },
  recruiting: {
    title: "Conformamos un equipo de ventas sólido y profesional",
    items: [
      "Descripciones de puesto",
      "Fuentes de reclutamiento",
      "Direccionamiento de entrevistas",
      "Presentación de candidatos",
    ],
  },
  puestos: {
    eyebrow: "ESTRUCTURA COMERCIAL VENTAS",
    cards: [
      {
        title: "Cerradores",
        icon: EstrategiaIcon,
        image: "/images/cerradores-basecoresales.jpg",
        roles: ["Sales Executive", "Inside Sales Rep", "Account Executive"],
      },
      {
        title: "Nuevos Negocios",
        icon: VentaIcon,
        image: "/images/nuevos-negocios-base-core-sales.jpg",
        roles: ["Business Development Manager"],
      },
    ],
  },
  nextCycle: {
    label: "VER FUNNEL POSVENTA",
    href: "/posventa",
  },
  contactTitleAs: "h2",
};
