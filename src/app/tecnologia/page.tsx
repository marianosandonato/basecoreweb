import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Implementaciones Tecnológicas: IA + Software",
  description:
    "Implementamos agentes y procesos con IA. Migramos e instalamos CRM y otros softwares para tu equipo comercial.",
  alternates: {
    canonical: "/tecnologia",
  },
};

/**
 * Placeholder page: only the hero (same construction as /marketing's first
 * cajon, #6be773a9) and the contact footer. The rest of the page — mirroring
 * /marketing's remaining sections — is still pending.
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
      />

      <ContactSection
        titleAs="h2"
        backgroundImage="/images/bg-5.jpg"
        className="py-[70px] xl:py-[120px]"
      />
    </>
  );
}
