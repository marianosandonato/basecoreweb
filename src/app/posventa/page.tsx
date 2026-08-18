import type { Metadata } from "next";
import ServiceCyclePage from "@/components/ServiceCyclePage";
import { posventa } from "@/content/posventa";

export const metadata: Metadata = {
  title: "Fidelización y Retención de Clientes",
  description:
    "Fidelización y retención de clientes: reducción de churn, cross selling y up selling, desarrollo de cuentas y segmentación de cartera.",
  alternates: {
    canonical: "/posventa",
    languages: { es: "/posventa", en: "/en/post-sales" },
  },
};

export default function PosventaPage() {
  return <ServiceCyclePage data={posventa} />;
}
