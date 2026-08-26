import type { Metadata } from "next";
import AboutLogoBlock from "@/components/AboutLogoBlock";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import CheckList from "@/components/CheckList";
import ContactSection from "@/components/ContactSection";
import FlipCardGrid from "@/components/FlipCardGrid";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { TECNOLOGIA_GRID } from "@/content/flipGrids";
import type { FlipCardData } from "@/content/types";

/**
 * The eight "Módulos" flip boxes — /tecnologia's counterpart to /marketing's
 * "Pilares comunicacionales", same box geometry (TECNOLOGIA_GRID) but with a
 * bulleted back face instead of a description paragraph.
 */
const modulos: readonly FlipCardData[] = [
  {
    title: "Agentes de IA",
    image: "/images/agentes-de-ia-base-core-sales-1.webp",
    items: [
      "Calificación y enriquecimiento automático de leads",
      "Chatbots y formularios inteligentes de primer filtro",
      "Análisis de base y detección de oportunidades",
      "Generación y adaptación de contenido comercial",
    ],
  },
  {
    title: "Automatización",
    image: "/images/automatizacion-base-core-sales-1.webp",
    items: [
      "Captura y asignación automática de leads",
      "Secuencias de seguimiento, scrapers y nurturing",
      "Sincronización entre CRM, marketing y operación",
      "Reportes de campañas y KPIs consolidados",
    ],
  },
  {
    title: "CRM",
    image: "/images/crm-base-core-sales-1.webp",
    items: [
      "Implementación de HubSpot, Pipedrive, Zoho u otras plataformas",
      "Configuración de pipeline, etapas y criterios de avance",
      "Automatización de asignaciones, seguimientos y alertas",
      "Migración de datos y adopción del equipo",
    ],
  },
  {
    title: "Softwares de gestión",
    image: "/images/softwares-gestion-base-core-sales-1.webp",
    items: [
      "Desarrollo ágil con Claude Code",
      "Sistemas de gestión comercial, operativa o de proyectos",
      "Portales de cliente y aplicaciones internas",
      "Gestión de pedidos, proyectos e inventario",
    ],
  },
  {
    title: "Tableros y reporting",
    image: "/images/tableros-reporting-base-core-sales-1.webp",
    items: [
      "Dashboard ejecutivo con los KPIs que dirección realmente usa",
      "Pipeline, forecast y conversión entre etapas en tiempo real",
      "Consolidación de datos de CRM, ERP y plataformas de campañas",
      "Reportes automáticos que se envían solos",
    ],
  },
  {
    title: "Marketing",
    image: "/images/marketing-tecnologia-base-core-sales-1.webp",
    items: [
      "Sitios web y landing pages con Claude Code",
      "Posicionamiento en Google y en buscadores con IA",
      "Captura automática de leads desde web y redes al CRM",
      "Medición de retorno real por campaña y canal",
    ],
  },
  {
    title: "Contenido y diseño con IA",
    image: "/images/contenido-diseno-ia-base-core-sales-1.webp",
    items: [
      "Producción de contenido a escala, alineado al tono de tu marca",
      "Variantes creativas para testear y optimizar campañas",
      "Piezas gráficas, presentaciones y propuestas con Claude Design",
      "Materiales comerciales listos para usar por todo el equipo",
    ],
  },
  {
    title: "Diagnóstico tecnológico",
    image: "/images/diagnostico-tecnologico-base-core-sales-1.webp",
    items: [
      "Inventario de herramientas: qué usas, qué pagas y qué está duplicado",
      "Mapeo de cómo funcionan hoy tus procesos, no de cómo deberían",
      "Identificación de brechas y oportunidades de automatización",
      "Definición de prioridades según impacto y esfuerzo",
    ],
  },
];

export const metadata: Metadata = {
  title: "Implementaciones Tecnológicas: IA + Software",
  description:
    "Implementamos agentes y procesos con IA. Migramos e instalamos CRM y otros softwares para tu equipo comercial.",
  alternates: {
    canonical: "/tecnologia",
    languages: { es: "/tecnologia", en: "/en/tecnologia" },
  },
};

export default function TecnologiaPage() {
  return (
    <>
      <Breadcrumb current="Tecnología" />

      <PageHero
        title={["¿Buscas sistematizar e", "implementar IA?"]}
        lines={[
          "Implementamos agentes y procesos con IA.",
          "Migramos e instalamos CRM y otros softwares.",
        ]}
        image="/images/TECNOLOGIA-BASECORE.jpg"
        cta={{ label: "AGENDAR RELEVAMIENTO", href: "#contacto" }}
        overlayOpacity={0.32}
      />

      {/* "Qué hacemos" (replica of the cycle pages' about block) — logo, text, text. */}
      <section className="py-[50px]">
        <div className="container-bc grid items-center gap-y-[30px] min-[1200px]:grid-cols-[auto_1fr_1.3fr] min-[1200px]:gap-x-[90px] min-[1200px]:gap-y-0">
          <AboutLogoBlock label="Tecnología" />

          <div>
            <SectionHeading
              eyebrow="QUÉ HACEMOS"
              align="left"
              maxWidth={800}
              className="mb-[16px] w-full"
            />

            <CheckList
              items={[
                "IA: agentes, automatizaciones de procesos",
                "CRM: a medida, Hubspot, Zoho, Pipedrive",
                "Software de gestión a medida",
                "Softs facturación, logística, stock",
              ]}
            />

            <div className="mt-[28px]">
              <Button href="#contacto">CONTÁCTANOS</Button>
            </div>
          </div>

          <div className="text-center">
            <p className="font-sans text-[18px] leading-[1.8] text-body">
              Más de la mitad de las implementaciones de CRM falla por falta
              de adopción, roles poco claros o flujos que nunca se
              ordenaron. Un CRM no ordena un proceso comercial, lo refleja.
              Por eso definimos el proceso{" "}
              <strong className="font-bold">antes de implementar</strong>{" "}
              la herramienta.
            </p>
            <p className="mt-[20px] font-sans text-[18px] leading-[1.8] text-body">
              Implementar IA no es sumar una herramienta más: es delegar
              decisiones. Todas requieren un{" "}
              <strong className="font-bold">criterio</strong>{" "}
              que hoy vive en la cabeza de alguien de tu equipo. Nuestro
              trabajo es hacerlo explícito antes de automatizarlo.
            </p>
          </div>
        </div>
      </section>

      {/* Módulos heading — replica of /marketing's "Pilares comunicacionales"
          heading spacing (50px foot above, matching the grid below). */}
      <div className="h-[50px]" aria-hidden="true" />
      <section className="container-bc py-[10px]">
        <SectionHeading
          eyebrow="BASES TECNOLÓGICAS"
          title="Módulos"
          maxWidth={800}
          className="mb-[16px]"
        />
      </section>

      {/* Módulos flip boxes — same two-rows-of-four construction as
          /marketing's pilares grid. */}
      <section className="container-bc px-0 pt-[40px]">
        <FlipCardGrid cards={modulos.slice(0, 4)} grid={TECNOLOGIA_GRID} />
      </section>
      <section className="container-bc px-0 pt-[15px] md:pt-[24px]">
        <FlipCardGrid cards={modulos.slice(4)} grid={TECNOLOGIA_GRID} />
      </section>

      {/* No extra foot spacer here — ContactSection's own top padding already
          matches the gap /marketing gets after its Recruiting section (166px);
          a second 50px spacer on top of it read as a much bigger gap than
          every other transition on the page. */}
      <ContactSection
        titleAs="h2"
        backgroundImage="/images/bg-5.jpg"
        className="py-[70px] xl:py-[120px]"
      />
    </>
  );
}
