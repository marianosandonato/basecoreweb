import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import EbookSection from "@/components/EbookSection";

export const metadata: Metadata = {
  title: "Proceso de Ventas desde Cero",
  description:
    "Descarga gratis nuestro e-book: cómo armar un proceso de ventas desde cero y la importancia de un buen ciclo de preventa para atraer nuevos clientes.",
  alternates: {
    canonical: "/ebook",
    languages: { es: "/ebook", en: "/en/ebook" },
  },
};

export default function EbookPage() {
  return (
    <>
      <Breadcrumb
        current="E-Book"
        variant="hero"
        title="¿Cuáles son los primeros pasos para un proceso comercial efectivo y la importancia de definir un ciclo de preventa para atraer nuevos clientes?"
      />
      <EbookSection />
    </>
  );
}
