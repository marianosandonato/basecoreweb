import type { Metadata } from "next";
import AboutLogoBlock from "@/components/AboutLogoBlock";
import BaseHubTeaser from "@/components/BaseHubTeaser";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import CheckList from "@/components/CheckList";
import ContactSection from "@/components/ContactSection";
import FlipCardGrid from "@/components/FlipCardGrid";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceJsonLd from "@/components/ServiceJsonLd";
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
    languages: { es: "/marketing", en: "/en/marketing", "x-default": "/marketing" },
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
    title: "Plan de trabajo",
    image: "/images/plan-de-trabajo-basecores-1.jpg",
    items: [
      "Objetivos definidos y métricas de seguimiento",
      "Acciones a realizar en cada pilar comunicacional",
      "Calendarización en una línea de tiempo (Gantt)",
      "Definición del equipo de trabajo y project leader",
      "Medición, analítica y reporting semanal",
    ],
  },
  {
    title: "Estrategia creativa",
    image: "/images/creatividad-base-core-sales-1.jpg",
    items: [
      "Relevamiento por briefing",
      "Análisis de competencia",
      "Concepto comunicacional",
      "Público objetivo y buyer persona",
      "Propuesta de valor y posicionamiento",
      "Manual de marca",
    ],
  },
  {
    title: "IA + Software",
    image: "/images/agentes-de-ia-base-core-sales-1.webp",
    items: [
      "Sitios web y landing pages con Claude Code",
      "Email marketing con segmentación y envío inteligente",
      "Nutrición automática de base según comportamiento del lead",
      "Scoring predictivo: qué contactos están más cerca de comprar",
      "Integración con CRM y herramientas de campaña",
    ],
  },
  {
    title: "SEO +\nBuscadores IA",
    image: "/images/SEO-base-cores-sales-1.jpg",
    items: [
      "Auditoría de posicionamiento en Google y en buscadores IA",
      "Palabras clave, estrategia semántica y análisis de competencia",
      "Arquitectura, contenido y optimización técnica del sitio",
      "Schema markup para ser citado por Google y por IA",
      "Instalación de etiquetas y píxeles de medición",
    ],
  },
  {
    title: "Sitios Web",
    image: "/images/pagina-web-basecore-sales.jpg",
    items: [
      "Desarrollo con Claude Code",
      "Identidad corporativa y diseño UX-UI",
      "Responsive y multilenguaje",
      "Hosting en servidores físicos y virtuales",
      "Control de versiones y respaldo continuo",
      "CTAs, botones de WhatsApp y formularios",
    ],
  },
  {
    title: "Redes Sociales",
    image: "/images/redes-sociales-base-core-sales-1.jpg",
    items: [
      "Auditoría de presencia actual y optimización de perfiles",
      "Grilla de contenido y copywriting creativo-estratégico",
      "Reels, stories y formatos de video",
      "Programación de publicaciones y community management",
      "Métricas, reporting y ajuste continuo",
    ],
  },
  {
    title: "Pauta publicitaria",
    image: "/images/pauta-publicitaria-mkt-base-core-sales-1.jpg",
    items: [
      "Estudio de audiencia y estrategia de campaña",
      "Creación de anuncios y variantes para testeo A/B",
      "Campañas en Google, Instagram, Facebook y LinkedIn Ads",
      "Retargeting y gestión de presupuesto entre canales",
      "Análisis de resultados: ROAS, CPA y costo por lead",
    ],
  },
  {
    title: "Diseño Gráfico y Contenido",
    image: "/images/diseno-grafico-basecoresales-1.jpg",
    items: [
      "Piezas gráficas de valor",
      "Identidad visual",
      "Creatividades para campañas y anuncios",
      "Presentaciones, dossiers y materiales comerciales",
    ],
  },
];

export default function MarketingPage() {
  return (
    <>
      {/* Breadcrumb (#31a24d1) — renders empty on the original, as on every
          inner page; ours shows a real trail. */}
      <ServiceJsonLd name={title} description={description} path="/marketing" />
      <Breadcrumb current="Marketing" path="/marketing" />

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
          after the hero, ahead of "Pilares comunicacionales". Navy
          background + white mark, same treatment as the home page's
          "Agencia de Marketing" cajón, so this block continues the hero's
          dark mood instead of a plain white slab. */}
      <section className="bg-navy py-[50px]">
        <div className="container-bc grid items-center gap-y-[30px] min-[1200px]:grid-cols-[auto_1fr_1.3fr] min-[1200px]:gap-x-[90px] min-[1200px]:gap-y-0">
          <AboutLogoBlock label="Marketing" dark />

          {/* text-center/md:text-left (#7 ajustes estéticos, punto 6): mirrors
              ServiceCyclePage's own "Qué hacemos" fix — see that file. */}
          <div className="text-center md:text-left">
            <SectionHeading
              eyebrow="QUÉ HACEMOS"
              align="left"
              centerOnMobile
              dark
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
              dark
              centerOnMobile
            />

            <div className="mt-[28px]">
              <Button href="#contacto">CONTÁCTANOS</Button>
            </div>
          </div>

          <div className="text-center">
            <p className="font-sans text-[18px] leading-[1.8] text-muted">
              Ninguna etapa del ciclo comercial funciona en el vacío: la preventa necesita una marca confiable, la venta necesita materiales que respalden la propuesta, y la posventa necesita comunicación consistente.{" "}
              <strong className="font-bold text-white">El marketing es la base.</strong>
            </p>
            <p className="mt-[20px] font-sans text-[18px] leading-[1.8] text-muted">
              El 90% de los compradores B2B empieza su proceso de compra investigando por su cuenta, mucho antes de hablar con un vendedor. Para cuando llegan a tu equipo comercial, ya se formaron una opinión: el marketing define{" "}
              <strong className="font-bold text-white">con qué opinión llegan</strong>.
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

      <TechnologyBlock stage="marketing" />

      <BaseHubTeaser />

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
