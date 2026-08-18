import type { Metadata } from "next";
import ServiceCyclePage from "@/components/ServiceCyclePage";
import { preventa } from "@/content/preventa";

const title = "Prospección de Clientes B2B";
const description =
  "Prospección y captación de clientes B2B: armado de base de datos, calificación de leads y detección de oportunidades comerciales para conseguir más reuniones.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/preventa",
    languages: { es: "/preventa", en: "/en/presales" },
  },
  openGraph: {
    locale: "es_ES",
    title,
    description,
    images: ["/images/base-core-sales-consegui-reuniones-con-tus-clientes-potenciales.jpg"],
  },
};

export default function PreventaPage() {
  return <ServiceCyclePage data={preventa} />;
}
