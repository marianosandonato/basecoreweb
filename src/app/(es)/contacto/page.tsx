import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ContactSection from "@/components/ContactSection";

const title = "Diagnóstico Gratuito";
const description =
  "Solicita un diagnóstico gratuito: dejanos tus datos y te proponemos un plan de ruta para mejorar tus procesos y metodologías.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/contacto",
    languages: { es: "/contacto", en: "/en/contact", "x-default": "/contacto" },
  },
  openGraph: {
    locale: "es_ES",
    title,
    description,
    // breadcrumb.jpg is /contacto's own hero/LCP image (Breadcrumb variant="hero",
    // shared with /ebook) — reused here instead of the generic Home image, same
    // pattern as every other service/landing page (own hero photo as og:image).
    images: ["/images/breadcrumb.jpg"],
  },
};

export default function ContactoPage() {
  return (
    <>
      {/* #0a10a20 — the only page where the original's breadcrumb widget
          actually renders (280px hero). */}
      <Breadcrumb current="Contacto" variant="hero" path="/contacto" />
      {/* #28113bfd — no background image, padding 90px 0 120px, h1 title. */}
      <ContactSection titleAs="h1" className="py-[70px] md:pb-[70px] md:pt-0 dt:pb-[120px] dt:pt-[90px]" />
    </>
  );
}
