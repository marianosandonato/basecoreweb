import type { BlogPost } from "../types";

export const queCrmElegirParaPyme: BlogPost = {
  title: "¿Qué CRM elegir para una pyme? Guía sin vueltas",
  description:
    "HubSpot, Pipedrive o Zoho: comparamos precio, funciones y para qué tipo de equipo comercial sirve cada uno, para que elijas con criterio, no por moda.",
  publishedAt: "2026-08-30",
  readingMinutes: 6,
  image: "/images/crm-base-core-sales-1.webp",
  imageAlt: "Comparativa de CRM para pymes: HubSpot, Pipedrive y Zoho",
  body: [
    {
      type: "p",
      text: "Más de la mitad de las implementaciones de CRM fracasa — no por el software elegido, sino por falta de adopción, roles poco claros o un proceso que nunca se ordenó antes de automatizarlo. Aun así, la pregunta que más se repite entre pymes es cuál herramienta usar. Antes de responderla, vale la pena decir esto con claridad: **el CRM no arregla un proceso comercial, lo refleja**.",
    },
    {
      type: "h2",
      text: "Antes de comparar, una advertencia",
    },
    {
      type: "p",
      text: "Si tu equipo no tiene un proceso definido —etapas claras, criterios de avance, alguien responsable de cada paso—, cualquiera de las tres herramientas de abajo va a terminar siendo una agenda cara. La comparación que sigue asume que ya tenés (o estás por definir) ese proceso, y buscás la herramienta que mejor lo sostenga.",
    },
    {
      type: "h2",
      text: "HubSpot",
    },
    {
      type: "p",
      text: "Tiene el plan gratuito más generoso de los tres: contactos ilimitados, un pipeline y seguimiento de email para hasta dos usuarios, sin límite de tiempo. Los planes pagos arrancan cerca de los 15 USD por usuario/mes y suman automatización de marketing, lo que lo vuelve fuerte si marketing y ventas van a compartir la misma base de datos desde el día uno. Es, en términos generales, la opción con menos fricción para arrancar y el ecosistema de integraciones más amplio.",
    },
    {
      type: "h2",
      text: "Pipedrive",
    },
    {
      type: "p",
      text: "No tiene plan gratuito, pero arranca liviano: desde 14 USD por usuario/mes con facturación anual. Su fuerte es la visualización del pipeline —pensado por y para gente de ventas, no para marketing ni soporte—. Si tu prioridad número uno es ver de un vistazo en qué etapa está cada oportunidad y qué se estancó, suele ser la herramienta con la que el equipo comercial se siente más cómodo día a día.",
    },
    {
      type: "h2",
      text: "Zoho CRM",
    },
    {
      type: "p",
      text: "Plan gratuito para hasta tres usuarios, y su plan pago de entrada (Standard, ~14 USD/usuario/mes) es el que más funciones trae por ese precio: múltiples pipelines, email masivo, dashboards personalizados. Zoho tiene sentido cuando ya usás —o vas a usar— otras herramientas de su suite (facturación, soporte, inventario), porque todo se integra nativamente. Si tu operación es más compleja que \"solo ventas\", vale la pena mirarlo primero por eso, no solo por precio.",
    },
    {
      type: "h2",
      text: "Entonces, ¿cuál elegís?",
    },
    {
      type: "ul",
      items: [
        "Simplicidad y foco absoluto en el pipeline → Pipedrive",
        "Marketing y ventas comparten la misma base, y preferís no pagar hasta crecer → HubSpot",
        "Tu negocio ya es (o va a ser) más que ventas: soporte, facturación, inventario → Zoho",
      ],
    },
    {
      type: "p",
      text: "Elegir la herramienta es la parte fácil. Definir el proceso que esa herramienta va a sostener —y lograr que el equipo realmente la use— es donde la mayoría de las implementaciones se cae.",
    },
  ],
  cta: {
    label: "VER CÓMO IMPLEMENTAMOS CRM E IA",
    href: "/tecnologia",
  },
};
