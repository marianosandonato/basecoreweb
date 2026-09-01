import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceJsonLd from "@/components/ServiceJsonLd";

const title = "BaseHub: Plataforma de Gestión de Proyectos";
const description =
  "BaseHub: la plataforma de seguimiento e implementación de proyectos de Base Core, incluida en tu consultoría. Sin pagar una herramienta de gestión de proyectos aparte.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/basehub",
    languages: { es: "/basehub", en: "/en/basehub", "x-default": "/basehub" },
  },
};

/** The 5 features that exist today in BaseHub (Fases 1-3) — no more, no less. */
const features = [
  {
    title: "Panel por área de trabajo",
    description: "Las seis ramas de tu negocio, cada una con su % de avance, de un vistazo.",
  },
  {
    title: "Catálogo de procesos",
    description:
      "Cada proceso que implementamos queda registrado con su estado real: pendiente, en diagnóstico, en implementación, implementado.",
  },
  {
    title: "Seguimiento de tareas",
    description:
      'Prioridad y fecha objetivo por tarea. Una vista de "Hoy" te muestra qué está pendiente, ordenado.',
  },
  {
    title: "Historial de avance",
    description: "Una línea de tiempo muestra cómo evolucionó cada proceso, no solo la foto de hoy.",
  },
  {
    title: "Acceso para tu equipo",
    description:
      "Entrás con tu usuario y ves el estado real de tu implementación, con el logo de tu empresa — sin esperar que alguien te mande un reporte.",
  },
];

export default function BaseHubPage() {
  return (
    <>
      <ServiceJsonLd name={title} description={description} path="/basehub" />
      <Breadcrumb current="BaseHub" path="/basehub" />

      <PageHero
        title={["Tu proyecto,", "en un solo lugar."]}
        lines={[
          "Sin pagar una herramienta de gestión de proyectos aparte.",
          "BaseHub es la plataforma de seguimiento e implementación de Base Core, incluida en tu proyecto. Estado en tiempo real, tarea por tarea, rama por rama.",
        ]}
        image="/images/tableros-reporting-base-core-sales-1.webp"
        cta={{ label: "VER CÓMO FUNCIONA", href: "#como-funciona" }}
      />

      {/* "Qué es" — logo lockup built for BaseHub specifically: the tree mark
          alone (no "Base Core" wordmark baked into the image), with
          "BaseHub" set below it in the same font-sora/tracking-[2px] type
          the site already uses for a page name under the mark (AboutLogoBlock,
          TechnologyBlock's "Tecnología" label), just bold instead of
          extralight — same lineup as the BaseHubTeaser kicker. */}
      <section className="bg-navy py-[50px]">
        <div className="container-bc grid items-center gap-y-[30px] min-[1200px]:grid-cols-[auto_1fr] min-[1200px]:gap-x-[90px] min-[1200px]:gap-y-0">
          <div className="hidden flex-col items-center gap-[16px] text-center md:flex">
            <Image
              src="/images/base-core-tree-icon-blanco.webp"
              alt=""
              width={700}
              height={581}
              className="h-auto w-[189px] md:w-[257px]"
            />
            <span className="font-sora text-[32px] font-bold tracking-[2px] text-white md:text-[41px]">
              BaseHub
            </span>
          </div>

          <div>
            <SectionHeading
              eyebrow="QUÉ ES"
              title="Tu implementación, visible de principio a fin"
              align="left"
              dark
              maxWidth={800}
              className="mb-[16px] w-full"
            />
            <p className="font-sans text-[18px] leading-[1.8] text-muted">
              Cuando Base Core arranca tu proyecto, lo organiza en BaseHub: un tablero propio
              donde ves el estado de las seis áreas de tu negocio —Marketing, Preventa, Venta,
              Posventa, Recruiting y Tecnología— sin tener que preguntarle a nadie en qué está
              cada cosa.
            </p>
          </div>
        </div>
      </section>

      {/* Features heading — same spacing pattern as /marketing's "Pilares
          comunicacionales" and /tecnologia's "Módulos". */}
      <div className="h-[50px]" aria-hidden="true" />
      <section id="como-funciona" className="container-bc py-[10px]">
        <SectionHeading
          eyebrow="GESTIÓN DE PROYECTOS"
          title="Cómo funciona"
          maxWidth={800}
          className="mb-[16px]"
        />
      </section>

      {/* Feature grid — the 5 real features, two columns on desktop. */}
      <section className="container-bc pb-[10px] pt-[30px]">
        <div className="grid gap-[24px] md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[4px] border border-line bg-white p-[28px] shadow-[0_0_30px_0_rgba(0,0,0,0.06)]"
            >
              <h3 className="mb-[10px] font-heading text-[20px] font-bold leading-[26px] text-heading">
                {feature.title}
              </h3>
              <p className="font-sans text-[16px] leading-[1.8] text-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA — same dark, centred construction as the E-Book CTA. */}
      <section className="bg-navy py-[70px] xl:py-[90px]">
        <div className="container-bc text-center">
          <SectionHeading
            title="Empezá tu implementación con BaseHub incluido"
            description="Agendá un relevamiento gratuito y te mostramos cómo se ve tu proyecto organizado en BaseHub desde el primer día."
            dark
            showLine={false}
            maxWidth={700}
            className="mx-auto mb-[30px]"
          />
          <Button href="#contacto" size="sm">
            AGENDAR RELEVAMIENTO
          </Button>
        </div>
      </section>

      <ContactSection
        titleAs="h2"
        backgroundImage="/images/bg-5.jpg"
        className="py-[70px] xl:py-[120px]"
      />
    </>
  );
}
