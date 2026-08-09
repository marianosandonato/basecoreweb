import type { Metadata } from "next";
import ServiceCyclePage from "@/components/ServiceCyclePage";
import { preventa } from "@/content/preventa";

export const metadata: Metadata = {
  title: "Preventa",
  description:
    "Consigue reuniones con tus clientes potenciales. Armado de base de datos, calificación de leads, prospección y detección de oportunidades comerciales.",
  alternates: { canonical: "/preventa" },
};

export default function PreventaPage() {
  return <ServiceCyclePage data={preventa} />;
}
