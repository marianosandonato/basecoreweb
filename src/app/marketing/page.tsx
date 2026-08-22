import type { Metadata } from "next";
import AboutLogoBlock from "@/components/AboutLogoBlock";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import CheckList from "@/components/CheckList";
import ContactSection from "@/components/ContactSection";
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

      {/* "Qué hacemos" (replica of the cycle pages' about block,
          ServiceCyclePage #3b58066) — text, image stack, text. Sits right
          after the hero, ahead of "Pilares comunicacionales". */}
      <section className="py-[50px]">
        <div className="container-bc grid items-center gap-y-[30px] min-[1200px]:grid-cols-[auto_1fr_1.3fr] min-[1200px]:gap-x-[90px] min-[1200px]:gap-y-0">
          <AboutLogoBlock label="Marketing" />

          <div>
            <SectionHeading
              eyebrow="QUÉ HACEMOS"
              align="left"
              maxWidth={800}
              className="mb-[16px] w-full"
            />

            <CheckList
              items={[
                "Desarrollo de marca",
                "Identidad corporativa",
                "Concepto comunicacional",
                "Estrategia creativa",
                "SEO y Pauta Publicitaria",
                "Redes sociales",
                "Sitios web",
              ]}
            />

            <div className="mt-[28px]">
              <Button href="#contacto">CONTÁCTANOS</Button>
            </div>
          </div>

          <div className="text-center">
            <p className="font-sans text-[18px] leading-[1.8] text-body">
              Ninguna etapa del ciclo comercial funciona en el vacío: la preventa necesita una marca confiable, la venta necesita materiales que respalden la propuesta, y la posventa necesita comunicación consistente. El marketing es la base de todo lo demás.
            </p>
            <p className="mt-[20px] font-sans text-[18px] leading-[1.8] text-body">
              El 90% de los compradores B2B empieza su proceso de compra investigando por su cuenta, mucho antes de hablar con un vendedor. Si tu marca no está construida —y no se encuentra— en ese momento, tu equipo compite con una desventaja que ningún guion compensa.
            </p>
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
      <section className="container-bc px-0 pt-[15px] md:pt-[24px]">
        <FlipCardGrid cards={pilares.slice(4)} grid={MARKETING_GRID} />
      </section>
      <div className="h-[50px]" aria-hidden="true" />

      <TechnologyBlock />

      {/* Recruiting — same construction as the cycle pages' Recruiting
          section (ServiceCyclePage #27c2ba5f), copy adapted from "fuerza de
          ventas" to marketing. */}
      <section
        className="relative z-[1] min-h-[640px] bg-cover bg-right bg-no-repeat dt:flex dt:min-h-0 dt:bg-fixed"
        style={{ backgroundImage: "url(/images/Fondo-Base-Core-01.webp)" }}
      >
        <div className="px-[15px] pb-0 pt-[70px] md:pb-[80px] md:pt-[60px] dt:w-[55%] dt:py-0">
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
