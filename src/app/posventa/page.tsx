import type { Metadata } from "next";
import ServiceCyclePage from "@/components/ServiceCyclePage";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import { posventa } from "@/content/posventa";

const title = "Fidelización y Retención de Clientes";
const description =
  "Fidelización y retención de clientes: reducción de churn, cross selling y up selling, desarrollo de cuentas y segmentación de cartera.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/posventa",
    languages: { es: "/posventa", en: "/en/post-sales", "x-default": "/posventa" },
  },
  openGraph: {
    locale: "es_ES",
    title,
    description,
    images: ["/images/Base-Core-Consultoria-Comercial-y-Marketing-Support.jpg"],
  },
};

export default function PosventaPage() {
  return (
    <>
      <ServiceJsonLd name={title} description={description} path="/posventa" />
      <ServiceCyclePage data={posventa} path="/posventa" />
    </>
  );
}
