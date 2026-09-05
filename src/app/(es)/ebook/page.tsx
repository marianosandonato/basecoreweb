import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import EbookSection from "@/components/EbookSection";

const title = "Proceso de Ventas desde Cero";
const description =
  "Descarga gratis nuestro e-book: cómo armar un proceso de ventas desde cero y la importancia de un buen ciclo de preventa para atraer nuevos clientes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/ebook",
    languages: { es: "/ebook", en: "/en/ebook", "x-default": "/ebook" },
  },
  openGraph: {
    locale: "es_ES",
    title,
    description,
    images: ["/images/base-core-sales-ebook.webp"],
  },
};

export default function EbookPage() {
  return (
    <>
      <Breadcrumb
        current="E-Book"
        variant="hero"
        path="/ebook"
        title="Guía gratis: cómo armar tu proceso de ventas desde cero"
      />
      <EbookSection />
    </>
  );
}
