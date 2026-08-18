import type { Metadata } from "next";
import ServiceCyclePage from "@/components/ServiceCyclePage";
import { preventa } from "@/content/preventa";

export const metadata: Metadata = {
  title: "Prospección de Clientes B2B",
  description:
    "Prospección y captación de clientes B2B: armado de base de datos, calificación de leads y detección de oportunidades comerciales para conseguir más reuniones.",
  alternates: {
    canonical: "/preventa",
    languages: { es: "/preventa", en: "/en/presales" },
  },
};

export default function PreventaPage() {
  return <ServiceCyclePage data={preventa} />;
}
