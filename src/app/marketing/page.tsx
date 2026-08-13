import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection";
import Counters, { type CounterData } from "@/components/Counters";
import { AddsIcon, BrandIcon, ContentIcon } from "@/components/counterIcons";
import FlipCardGrid from "@/components/FlipCardGrid";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { MARKETING_GRID } from "@/content/flipGrids";
import type { FlipCardData } from "@/content/types";

export const metadata: Metadata = {
  title: "Marketing",
  description:
    "Desarrolla tu imagen de marca junto a Not-a-Numb3r: estrategia creativa, SEO, pauta publicitaria, social media, diseño gráfico y sitios web.",
  alternates: { canonical: "/marketing" },
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
        title={["¿Buscas desarrollar", "tu imagen de marca?"]}
        lines={[
          "Creamos conceptos de comunicación.",
          "Generamos campañas para atraer leads.",
        ]}
        image="/images/marketing-slide-base-core-sales.jpg"
        cta={{ label: "AGENDAR RELEVAMIENTO", href: "#contacto" }}
      />

      {/* Pilares heading (#9b0a6dc) — the original carries its 100px of space
          as a section margin; a spacer avoids the margin-collapse trap. */}
      <div className="h-[100px]" aria-hidden="true" />
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
      <div className="h-[100px]" aria-hidden="true" />

      {/* Concepto como Servicio (#931c3da) — no background image at all: the
          only paint is #00294B at 90% over the white body. The CTA is a
          `.heading-action` inside the heading widget, not a separate widget. */}
      <section className="relative py-[70px] xl:pb-[100px] xl:pt-[110px]">
        <span aria-hidden="true" className="absolute inset-0 bg-navy opacity-90" />
        <div className="container-bc relative">
          <SectionHeading
            eyebrow="NOT-A NUMB3R"
            title="Concepto como Servicio"
            description="Elevar las marcas con NaN implica: conceptualización > estrategia > publicidad > escalabilidad. Cuando uno tiene claridad de procesos tiene claridad de rumbo y este es todo para cualquier ámbito de la vida. Así de sencillo, así de complejo. El rumbo demanda procesos y el proceso define el rumbo."
            dark
            showLine={false}
            maxWidth={900}
            className="mb-[20px]"
            titleClassName="!text-[32px] !leading-[1.15] lg:!text-[46px] xl:!text-[60px] xl:!leading-[68px]"
            eyebrowClassName="!text-body"
            descriptionClassName="!pt-[20px] !text-[#D7D7D7]"
          >
            <div className="mt-[30px]">
              <Button href="#contacto">AGENDAR RELEVAMIENTO</Button>
            </div>
          </SectionHeading>
        </div>
      </section>

      {/* NaN + counters (#dc71230) — 1400px container, 140/560/695 columns so
          the right-hand two thirds of the photo stay visible. */}
      <section
        className="bg-cover bg-center bg-no-repeat py-[65px] max-md:bg-left xl:bg-fixed xl:py-[115px]"
        style={{ backgroundImage: "url(/images/Project-Management-Base-Core-Sales.jpeg)" }}
      >
        <div className="container-bc-wide">
          <div className="lg:flex">
            <div className="lg:w-[10%]" />
            {/* flex, not block: the heading's 16px margin-bottom and the
                counters' 20px margin-top collapse otherwise. */}
            <div className="flex flex-col lg:w-[40%]">
              <SectionHeading
                eyebrow="NOSOTROS"
                title="NaN"
                description="NaN también es filosofía. Una forma de actuar, pensar y ejecutar. Hacemos crecer las marcas a través de una creatividad audaz y estratégica, enfocada en buscar nuevas formas de presentación contenidos al usuario en soportes digitales, visualizando las comunicaciones del presente y del futuro."
                align="left"
                maxWidth={530}
                className="mb-[16px]"
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

      {/* Hacemos crecer tu negocio (#3df3f2d) — same 1400/140/560/695 shape as
          the NaN section, left-aligned dark text on the light part of the photo. */}
      <section
        className="bg-cover bg-center bg-no-repeat py-[65px] max-md:bg-left xl:bg-fixed xl:py-[115px]"
        style={{ backgroundImage: "url(/images/Base-Core-Sales-estrategia-tecnologia.jpeg)" }}
      >
        <div className="container-bc-wide">
          <div className="lg:flex">
            <div className="lg:w-[10%]" />
            <div className="lg:w-[40%]">
              <SectionHeading
                eyebrow="BASE CORE SALES"
                title="Hacemos crecer tu negocio"
                description="NaN también es filosófico. Es una forma de pensar y actuar en la vida, de repensarnos en el vinculo, interactuando a partir del respeto primero interpersonal, luego frente al mundo. Es la expresión de deseo de enaltecer los vínculos, porque de los vínculos surgen los equipos. Y de los equipos la excelencia y los resultados. Y los resultados que buscamos son infinitos, porque están emparentados con la energía y la pasión que tampoco son números. #Not-a-numb3r."
                align="left"
                maxWidth={530}
                className="mb-[16px]"
                descriptionClassName="!pt-[20px]"
              />
            </div>
            <div className="lg:w-[50%]" />
          </div>
        </div>
      </section>

      {/* ¿Qué esperas para contactarnos? (#37326c4) — its own section on the
          original, navy #00294BED over a repeat-x photo strip, not fixed. */}
      <section
        className="bg-navy bg-repeat-x py-[70px] xl:pb-[90px] xl:pt-[150px]"
        style={{ backgroundImage: "url(/images/footer-base-core-sales.jpg)" }}
      >
        <div className="container-bc">
          <SectionHeading
            eyebrow="BASE CORE SALES"
            title="¿Qué esperas para contactarnos?"
            as="h3"
            dark
            maxWidth={800}
            className="mb-[15px]"
            titleClassName="!text-[28px] !leading-[1.3] lg:!text-[34px] xl:!text-[40px] xl:!leading-[52px]"
            eyebrowClassName="!text-white"
          />
        </div>
        {/* Elementor's 20px --widgets-spacing below the heading widget, plus the
            original's empty gva-posts widget, which is itself 20px tall. */}
        <div className="h-[40px]" aria-hidden="true" />
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
