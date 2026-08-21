import type { Metadata } from "next";
import AboutLogoBlock from "@/components/AboutLogoBlock";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import CheckList from "@/components/CheckList";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Implementaciones Tecnológicas: IA + Software",
  description:
    "Implementamos agentes y procesos con IA. Migramos e instalamos CRM y otros softwares para tu equipo comercial.",
  alternates: {
    canonical: "/tecnologia",
    languages: { es: "/tecnologia", en: "/en/tecnologia" },
  },
};

/**
 * Placeholder page: hero (same construction as /marketing's first cajon,
 * #6be773a9), the "Qué hacemos" second cajon and the contact footer. The
 * rest of the page — mirroring /marketing's remaining sections — is still
 * pending.
 */
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
        <div className="container-bc grid items-center gap-y-[30px] dt:grid-cols-[auto_1fr_1.3fr] dt:gap-x-[45px] dt:gap-y-0">
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

          <div>
            <p className="font-sans text-[18px] leading-[1.8] text-body">AAA</p>
            <p className="mt-[20px] font-sans text-[18px] leading-[1.8] text-body">AAA</p>
          </div>
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
