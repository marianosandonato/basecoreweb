import type { Metadata } from "next";
import Image from "next/image";
import BaseHubTeaser from "@/components/BaseHubTeaser";
import BlogCarousel from "@/components/BlogCarousel";
import Button from "@/components/Button";
import CheckList from "@/components/CheckList";
import ClientsCarousel from "@/components/ClientsCarousel";
import ContactSection from "@/components/ContactSection";
import MethodologyGrid, { type MethodologyStep } from "@/components/MethodologyGrid";
import ProcessImageStack from "@/components/ProcessImageStack";
import SectionHeading from "@/components/SectionHeading";
import ServiceCards from "@/components/ServiceCards";
import TechnologyBlock from "@/components/TechnologyBlock";
import { blogPosts } from "@/content/blog/posts";
import { clientProjects } from "@/content/clients/projects";
import { PosventaIcon, PreventaIcon, VentaIcon } from "@/components/cycleIcons";
import {
  ChartBarIcon,
  ChartLineIcon,
  CogsIcon,
  PaperPlaneIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Consultoría Comercial para Pymes – Base Core Sales",
  description:
    "Consultoría comercial para pymes en España y Latinoamérica: procesos como servicio para preventa, venta, posventa y marketing. Creamos bases productivas.",
  alternates: {
    canonical: "/",
    languages: { es: "/", en: "/en", "x-default": "/" },
  },
};

const aboutChecklist = [
  "Preventa, Venta y Posventa",
  "Estrategia y plan comercial",
  "Marketing: desarrollo de marca",
  "Herramientas: CRM, software a medida",
  "IA: Automatizaciones con Claude",
  "Selección y formación de equipos",
];

const methodology: readonly MethodologyStep[] = [
  {
    title: "Diagnóstico",
    icon: PaperPlaneIcon,
    frontImage: "/images/01-base-core-sales.jpg",
    backImage: "/images/1-diagnostico-base-core-sales.webp",
    items: ["Auditoría gratuita", "Relevamiento del estado actual del negocio"],
  },
  {
    title: "Plan de Ruta",
    icon: ChartBarIcon,
    frontImage: "/images/02-base-core-sales.jpg",
    backImage: "/images/2-plan-de-rutas-base-core-sales.webp",
    items: ["Presentación de gantt o plan de acción"],
  },
  {
    title: "Estrategia",
    icon: CogsIcon,
    frontImage: "/images/03-base-core-sales.jpg",
    backImage: "/images/3-estrategia-base-core-sales.webp",
    items: [
      "Presentación de diagnóstico",
      "Adaptación del plan",
      "Asignación de tu project leader",
      "Sprint de reuniones semanales",
    ],
  },
  {
    title: "Mejora Continua",
    icon: ChartLineIcon,
    frontImage: "/images/04-base-core-sales.jpg",
    backImage: "/images/4-mejora-continua-base-core-sales.webp",
    items: [
      "Desarrollo de procesos",
      "Monitoreo en mejora de métricas",
      "Seguimiento del estado del proyecto",
    ],
  },
];

const cycles = [
  {
    title: "Preventa",
    href: "/preventa",
    icon: PreventaIcon,
    image: "/images/presales-basecoresales-espana.jpg",
    roles: [
      "Market research - Armado de base de datos - Prospección - Llamados en frío - Calificación de leads - Generación de oportunidades comerciales",
    ],
  },
  {
    title: "Venta",
    href: "/venta",
    icon: VentaIcon,
    image: "/images/sales-basecoresales-espana.jpg",
    roles: [
      "Diagnóstico de situación actual - Modelo comercial - Pipeline - Metas y Objetivos - KPI’s - Tasas de conversión - Forecast - Modelos de inducción y supervisión - Esquemas de compensación - Implementación CRM",
    ],
  },
  {
    title: "Posventa",
    href: "/posventa",
    icon: PosventaIcon,
    image: "/images/support-basecoresales-espana.jpg",
    roles: [
      "Calificación de clientes - ABC - Cross & Up Selling - Medición histórica de altas y bajas - Recupero - Captación - Segmentación de cartera - Retención – Fidelización",
    ],
  },
];

const partnerChecklist = [
  "Estrategia creativa",
  "Base estadística",
  "SEO: Auditoría y posicionamiento",
  "SEM - Publicidad Meta & Google",
  "Social Media",
  "Diseño gráfico",
  "Sitios Web",
];

const recruitingChecklist = [
  "Descripciones de puesto",
  "Fuentes de reclutamiento",
  "Filtros de búsqueda",
  "Direccionamiento de entrevistas",
  "Selección de candidatos",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero (#0e79c74) ───────────────────────────────────────────────
          Revolution Slider: 880px tall, no colour overlay, content left-aligned
          on the 1170px grid, slow pan-zoom on the photo. */}
      <section className="hero relative overflow-hidden">
        {/* The site's LCP image. The pan-zoom stays on this wrapper: animating
            the <Image> itself would fight `fill`'s absolute positioning. */}
        <div className="animate-hero-panzoom absolute inset-0">
          <Image
            src="/images/basecoresales-slide-marketing-espana-1.jpg"
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="container-bc relative h-full">
          <div className="relative h-full">
            <div className="hero-layer hero-title-layer">
              <h1 className="hero-title animate-hero-title font-heading font-bold text-white">
                Consultoría Comercial
                <br />y Marketing
              </h1>
            </div>
            <div className="hero-layer hero-tagline-layer">
              <p className="hero-tagline animate-hero-tagline font-sans text-white">
                CREANDO BASES PRODUCTIVAS
              </p>
            </div>
            <div className="hero-layer hero-button-layer">
              <div className="animate-hero-button">
                <a
                  href="#contacto"
                  className="hero-button inline-block rounded-[4px] bg-primary font-montserrat font-semibold uppercase tracking-[1px] text-white transition-colors duration-300 hover:bg-[rgba(5,117,188,0.9)]"
                >
                  AGENDAR RELEVAMIENTO
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nosotros / Proceso como servicio (#3b58066) ────────────────────
          50px top/bottom, matching the cycle pages' Etapas/Puestos boxes.
          Three columns: text, the shrunk image composition centred, then
          the "ciclo completo" copy. */}
      <section className="py-[50px]">
        <div className="container-bc grid items-center dt:grid-cols-3">
          <div className="px-[15px] pb-[45px]">
            {/* Mobile-only flat image (#0144309) */}
            <Image
              src="/images/Process-as-a-Service.jpg"
              alt="Proceso como servicio"
              width={850}
              height={567}
              sizes="100vw"
              className="mb-[40px] mt-[15px] h-auto w-full md:hidden"
            />

            <SectionHeading
              eyebrow="Nosotros"
              title="Proceso como servicio"
              align="left"
              maxWidth={800}
              className="mb-[8px] w-full dt:mb-[10px]"
            />

            {/* icon-box (#a20a695) — a statement, not a heading description */}
            <h3 className="mb-[12px] font-heading text-[18px] font-medium leading-[24px] text-heading md:text-[20px] md:leading-[32px]">
              Base Core ofrece servicios de consultoría para todos los ciclos de ventas y
              marketing.
            </h3>

            <CheckList items={aboutChecklist} />

            <div className="mt-[28px]">
              <Button href="#contacto">CONTÁCTANOS</Button>
            </div>
          </div>

          {/* Layered composition — desktop/tablet only, shrunk and centred
              in the middle column. */}
          <div className="hidden px-[15px] md:flex md:justify-center">
            <ProcessImageStack />
          </div>

          <div className="px-[15px] pb-[45px]">
            <h3 className="mb-[12px] font-heading text-[18px] font-medium leading-[24px] text-heading md:text-[20px] md:leading-[32px]">
              Implementamos procesos para impulsar el desarrollo de tu empresa, organizarla
              y aumentar sus ventas.
            </h3>

            <p className="font-sans text-[18px] leading-[1.8] text-body">
              Acompañamos la implementación, con un plan de trabajo detallado y plazos
              concretos, para que el desarrollo esté monitoreado y los resultados sean
              visibles en cada etapa.
            </p>
            <p className="mt-[20px] font-sans text-[18px] leading-[1.8] text-body">
              El marketing <strong className="font-bold uppercase">atrae</strong>. La
              preventa <strong className="font-bold uppercase">califica</strong>. La venta{" "}
              <strong className="font-bold uppercase">cierra</strong>. La posventa{" "}
              <strong className="font-bold uppercase">fideliza</strong>.
              <br />
              Ese es el ciclo completo que trabajamos en Base Core.
            </p>
          </div>
        </div>
      </section>

      {/* ── Metodología (#a72b136) ────────────────────────────────────────
          Skyscraper photo, fixed on desktop. The Elementor overlay is #00294B
          at alpha 0, so the photo is deliberately untinted. */}
      <section
        className="bg-cover bg-center bg-no-repeat pb-[70px] pt-[80px] dt:bg-fixed dt:pb-[90px] dt:pt-[110px]"
        style={{ backgroundImage: "url(/images/footer-base-core-sales.webp)" }}
      >
        {/* Inner-section grids span the full 1200px container (no 15px inset),
            so the 10px cell padding yields 280px cards at x=134 like the original. */}
        <div className="container-bc px-0">
          <MethodologyGrid steps={methodology} />
        </div>
      </section>

      {/* ── Ciclos de Venta (#6ff6d2e) ─────────────────────────────────────
          50px top/bottom, matching the cycle pages' Etapas/Puestos boxes. */}
      <section className="py-[50px]">
        <div className="container-bc px-0">
          <div className="px-[15px]">
            <SectionHeading
              eyebrow="mentoring comercial"
              title="Ciclos de Venta"
              maxWidth={800}
              className="mb-[30px]"
            />
          </div>
          <ServiceCards cards={cycles} cellClass="w-full md:w-1/2 dt:w-1/3" />
        </div>
      </section>

      {/* ── Partner Estratégico / Not-a-Numb3r (#5f421622) ────────────────
          Full-bleed 50/50: photo + black 74% on the left, solid navy on the right. */}
      <section className="relative z-[1] md:flex">
        <div
          className="relative bg-cover bg-left bg-no-repeat px-[15px] pb-[80px] pt-[60px] max-md:bg-top md:w-1/2"
          style={{ backgroundImage: "url(/images/MARKETING-BASECORE.webp)" }}
        >
          <span aria-hidden="true" className="absolute inset-0 bg-black opacity-[0.74]" />
          <div className="relative flex h-full min-h-[300px] flex-col items-center justify-center gap-[18px] text-center">
            <Image
              src="/images/base-core-logo-blanco-sin-slogan.webp"
              alt="Base Core"
              width={900}
              height={927}
              sizes="(min-width: 768px) 190px, 140px"
              className="h-auto w-[140px] md:w-[190px]"
            />
            <span className="font-sora text-[24px] font-extralight tracking-[2px] text-white md:text-[30px]">
              Marketing
            </span>
          </div>
        </div>

        <div className="bg-navy px-[15px] py-[60px] max-md:pl-[35px] md:w-1/2 dt:py-[106px] dt:pl-[100px]">
          <div className="max-w-[680px]">
            <SectionHeading
              eyebrow="Desarrollo de Marca"
              title="Agencia de Marketing"
              align="left"
              dark
              maxWidth={800}
              className="mb-[15px]"
              titleClassName="!text-[44px] !leading-[1.3]"
            />
            <CheckList items={partnerChecklist} dark size="md" />
            <div className="mt-[15px]">
              <Button href="/marketing" size="sm">
                AGENCIA DE MARKETING
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TechnologyBlock />

      <BaseHubTeaser />

      {/* ── Recruiting (#e610736) ────────────────────────────────────────
          One photo, no overlay: dark on the left, light on the right where the
          text sits. 55/45 split. */}
      <section
        className="relative z-[1] min-h-[640px] bg-cover bg-right bg-no-repeat dt:flex dt:min-h-0 dt:bg-fixed"
        style={{ backgroundImage: "url(/images/Fondo-Base-Core-01.webp)" }}
      >
        {/* Left column is empty — it only holds the 160px spacer */}
        <div className="px-[15px] pb-0 pt-[70px] md:pb-[80px] md:pt-[60px] dt:w-[55%] dt:py-0">
          <div className="h-[10px] dt:h-[160px]" />
        </div>

        <div className="px-[15px] pb-[45px] max-md:pl-[25px] dt:w-[45%] dt:py-[100px] dt:pl-[85px]">
          <SectionHeading
            eyebrow="RECRUITING: FUERZA DE VENTAS"
            title="Te acompañamos en la búsqueda y selección de perfiles acordes a tu negocio."
            description="Además de nuestro modelo de formación, buscamos perfiles acordes y eficientes al modelo de ventas propuesto."
            align="left"
            maxWidth={800}
            className="mb-[8px] pr-[50px] dt:mb-[10px]"
          />
          <div className="mt-[20px]">
            <CheckList items={recruitingChecklist} size="md" />
          </div>
        </div>
      </section>

      {/* Empresas con las que trabajamos (#seo-plan 4.4) — prueba social sin
          testimonios textuales: logo real + servicios prestados, cada
          tarjeta linkea al sitio del cliente. Reutiliza la mecánica de
          BlogCarousel (ver ClientsCarousel). */}
      <section className="container-bc py-[70px] xl:py-[90px]">
        <SectionHeading
          eyebrow="NUESTRO TRABAJO"
          title="Empresas con las que trabajamos"
          description="Organizaciones con las que ya implementamos procesos comerciales, marketing y tecnología."
          maxWidth={700}
          className="mb-[40px]"
        />
        <ClientsCarousel projects={clientProjects} />
      </section>

      {/* ── E-Book CTA (#1ee6de6) ────────────────────────────────────────── */}
      <section
        className="relative bg-cover bg-center bg-no-repeat pb-[70px] pt-[80px] dt:bg-fixed dt:pb-[75px] dt:pt-[90px]"
        style={{ backgroundImage: "url(/images/base-core-sales-ebook.webp)" }}
      >
        <span aria-hidden="true" className="absolute inset-0 bg-navy opacity-[0.82]" />
        <div className="container-bc relative">
          <SectionHeading
            title="Optimiza tus procesos: primeros pasos para un proceso comercial efectivo"
            description="Descarga nuestro E-Book"
            dark
            showLine={false}
            maxWidth={900}
            className="mb-[20px]"
            titleClassName="!text-[26px] !leading-[40px] md:!text-[40px] md:!leading-[50px] dt:!text-[44px] dt:!leading-[68px]"
            descriptionClassName="!text-[24px] !text-[#C6C6C6] !pt-[20px]"
          />
          <div className="text-center">
            <Button
              href="/ebook"
              size="sm"
              className="mt-[15px]"
              ariaLabel="Descargar el e-book sobre proceso de ventas desde cero"
            >
              DESCARGAR
            </Button>
          </div>
        </div>
      </section>

      {/* Blog teaser — a carousel over every post, not just the 3 most
          recent, so the archive stays reachable from Home as it grows. */}
      <section className="container-bc py-[70px] xl:py-[90px]">
        <SectionHeading
          eyebrow="BLOG"
          title="Recursos para procesos comerciales efectivos"
          description="Ideas prácticas sobre procesos comerciales, CRM y tecnología aplicada a ventas."
          maxWidth={700}
          className="mb-[40px]"
        />
        <BlogCarousel entries={blogPosts} />
        <div className="mt-[30px] text-center">
          <Button href="/blog" size="sm">
            IR AL BLOG
          </Button>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
