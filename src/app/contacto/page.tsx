import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Diagnóstico Gratuito",
  description:
    "Solicita un diagnóstico gratuito: dejanos tus datos y te proponemos un plan de ruta para mejorar tus procesos y metodologías.",
  alternates: {
    canonical: "/contacto",
    languages: { es: "/contacto", en: "/en/contact" },
  },
};

export default function ContactoPage() {
  return (
    <>
      {/* #0a10a20 — the only page where the original's breadcrumb widget
          actually renders (280px hero). */}
      <Breadcrumb current="Contacto" variant="hero" />
      {/* #28113bfd — no background image, padding 90px 0 120px, h1 title. */}
      <ContactSection titleAs="h1" className="py-[70px] md:pb-[70px] md:pt-0 dt:pb-[120px] dt:pt-[90px]" />
    </>
  );
}
