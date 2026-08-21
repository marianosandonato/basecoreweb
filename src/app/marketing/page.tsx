import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CheckList from "@/components/CheckList";
import ContactSection from "@/components/ContactSection";
import Counters, { type CounterData } from "@/components/Counters";
import { AddsIcon, BrandIcon, ContentIcon } from "@/components/counterIcons";
import FlipCardGrid from "@/components/FlipCardGrid";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import TechnologyBlock from "@/components/TechnologyBlock";
import { MARKETING_GRID } from "@/content/flipGrids";
import type { FlipCardData } from "@/content/types";

const title = "Marketing Digital para Pymes";
const description =
  "Agencia de marketing digital para pymes: estrategia de marca, SEO, redes sociales, pauta publicitaria, diseño gráfico y sitios web.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/marketing",
    languages: { es: "/marketing", en: "/en/marketing" },
  },
  openGraph: {
    locale: "es_ES",
    title,
    description,
    images: ["/images/marketing-slide-base-core-sales.jpg"],
  },
};

/**
 * The eight "Pilares comunicacionales" flip boxes (#fd651a4 + #e8a47dc).
 * Titles, images and copy all verified against the original, in order.
 */
const pilares: readonly FlipCardData[] = [
  {
    title: "Estrategia creativa",
    image: "/images/creatividad-base-core-sales-1.jpg",
    items: [
      "Análisis de situación actual, proceso de relevamiento por briefing, definición de concepto comunicacional y estrategia creativa.",
    ],
  },
  {
    title: "Base estadística",
    image: "/images/base-estadistica-base-core-sales-mkt-1.jpg",
    items: [
      "Sustento en investigación de mercado, tendencias, forecast e insights del consumidor.",
    ],
  },
  {
    title: "Plan de trabajo",
    image: "/images/plan-de-trabajo-basecores-1.jpg",
    items: [
      "Presentación de GANTT o Plan de Acción, donde se especifican las acciones a realizar en cada pilar comunicacional, calendarizado en una línea de tiempo.",
    ],
  },
  {
    title: "SEO",
    image: "/images/SEO-base-cores-sales-1.jpg",
    items: [
      "Auditoría de posicionamiento actual y propuesta de mejora en base a: palabras claves, estrategia semántica, competencia, arquitectura y contenido del sitio.",
    ],
  },
  {
    title: "Pauta publicitaria",
    image: "/images/pauta-publicitaria-mkt-base-core-sales-1.jpg",
    items: [
      "Estudio de audiencia, creación de anuncios, optimización y análisis de resultados para campañas de Google, Instagram, Facebook y Linkedin Ads.",
    ],
  },
  {
    title: "Social Media",
    image: "/images/redes-sociales-base-core-sales-1.jpg",
    items: [
      "Definición de presencia en redes, optimización de bios, grilla de contenido, copywriting creativo - estratégico, moderación y programación de publicaciones.",
    ],
  },
  {
    title: "Diseño gráfico",
    image: "/images/diseno-grafico-basecoresales-1.jpg",
    items: [
      "Creación de piezas gráficas de valor para lograr identidad visual y corporativa.",
    ],
  },
  {
    title: "Sitios Web",
    image: "/images/pagina-web-basecore-sales.jpg",
    items: [
      "Tu página web es la vidriera de tu marca y es imprescindible para generar negocios!",
      "Identidad corporativa, diseño UX-UI, responsive, lenguaje, host, contenidos y textos.",
    ],
  },
];

const counters: readonly CounterData[] = [
  { value: "100", symbol: "%", label: "Brand", icon: BrandIcon },
  { value: "100", symbol: "%", label: "Content", icon: ContentIcon },
  { value: "100", symbol: "%", label: "Adds", icon: AddsIcon },
];

export default function MarketingPage() {
  return (
    <>
      {/* Breadcrumb (#31a24d1) — renders empty on the original, as on every
          inner page; ours shows a real trail. */}
      <Breadcrumb current="Marketing" />

      {/* Hero (#6be773a9) — same 100vh `height-full` section as the cycle pages. */}
      <PageHero
        title={["¿Buscas potenciar tu", "marketing digital?"]}
        lines={[
          "Creamos conceptos de comunicación.",
          "Generamos campañas para atraer leads.",
        ]}
        image="/images/marketing-slide-base-core-sales.jpg"
        cta={{ label: "AGENDAR RELEVAMIENTO", href: "#contacto" }}
      />

      {/* NaN + counters (#dc71230) — 1400px container, 140/560/695 columns so
          the right-hand two thirds of the photo stay visible. Moved up to sit
          right after the hero, ahead of "Pilares comunicacionales". */}
      <section
        className="bg-cover bg-center bg-no-repeat py-[65px] max-md:bg-left xl:bg-fixed xl:py-[115px]"
        style={{ backgroundImage: "url(/images/Project-Management-Base-Core-Sales.webp)" }}
      >
        <div className="container-bc-wide">
          <div className="lg:flex">
            <div className="lg:w-[10%]" />
            {/* flex, not block: the heading's 16px margin-bottom and the
                counters' 20px margin-top collapse otherwise. */}
            <div className="flex flex-col lg:w-[40%]">
              <SectionHeading
                eyebrow="NOSOTROS"
                title="BaseCore Marketing"
                description="BaseCore también es filosofía. Una forma de actuar, pensar y ejecutar. Hacemos crecer las marcas a través de una creatividad audaz y estratégica, enfocada en buscar nuevas formas de presentación contenidos al usuario en soportes digitales, visualizando las comunicaciones del presente y del futuro."
                align="left"
                maxWidth={530}
                className="mb-[16px]"
                eyebrowClassName="mb-[20px]"
                descriptionClassName="!pt-[20px]"
              />
              <div className="mt-[20px]">
                <Counters items={counters} />
              </div>
            </div>
            <div className="lg:w-[50%]" />
          </div>
        </div>
      </section>

      {/* Pilares heading (#9b0a6dc) — matches the cycle pages' hero-to-heading
          gap (ServiceCyclePage): 50px, same as the foot below the grid. */}
      <div className="h-[50px]" aria-hidden="true" />
      <section className="container-bc py-[10px]">
        <SectionHeading
          eyebrow="AGENCIA DE MARKETING"
          title="Pilares comunicacionales"
          maxWidth={800}
          className="mb-[16px]"
        />
      </section>

      {/* Pilares flip boxes — two sections of four on the original
          (#fd651a4 margin 40/24, #e8a47dc margin 0/100), 270x430 each. */}
      <section className="container-bc px-0 pt-[40px]">
        <FlipCardGrid cards={pilares.slice(0, 4)} grid={MARKETING_GRID} />
      </section>
      <section className="container-bc px-0 pt-[24px]">
        <FlipCardGrid cards={pilares.slice(4)} grid={MARKETING_GRID} />
      </section>
      <div className="h-[50px]" aria-hidden="true" />

      <TechnologyBlock />

      {/* Recruiting — same construction as the cycle pages' Recruiting
          section (ServiceCyclePage #27c2ba5f), copy adapted from "fuerza de
          ventas" to marketing. */}
      <section
        className="relative z-[1] bg-cover bg-right bg-no-repeat dt:flex dt:bg-fixed"
        style={{ backgroundImage: "url(/images/Fondo-Base-Core-01.webp)" }}
      >
        <div className="px-[15px] pb-0 pt-[20px] md:pb-[80px] md:pt-[60px] dt:w-[55%] dt:py-0">
          <div className="h-[10px] dt:h-[160px]" />
        </div>
        <div className="px-[15px] pb-[45px] max-md:pl-[25px] dt:w-[45%] dt:py-[100px] dt:pl-[85px]">
          <SectionHeading
            eyebrow="RECLUTAMIENTO: FUERZA DE MARKETING"
            title="Conformamos un equipo de Marketing sólido y profesional"
            description="Además de nuestro modelo de formación, buscamos perfiles acordes y eficientes al modelo de marketing propuesto."
            align="left"
            maxWidth={800}
            className="mb-[8px] pr-[50px] dt:mb-[10px]"
          />
          <div className="mt-[20px]">
            <CheckList
              items={[
                "Descripciones de puesto",
                "Fuentes de reclutamiento",
                "Direccionamiento de entrevistas",
                "Presentación de candidatos",
              ]}
              size="md"
            />
          </div>
        </div>
      </section>

      {/* Contacto (#437d5e49) */}
      <ContactSection
        titleAs="h2"
        backgroundImage="/images/bg-5.jpg"
        className="py-[70px] xl:py-[120px]"
      />
    </>
  );
}
