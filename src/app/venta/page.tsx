import type { Metadata } from "next";
import ServiceCyclePage from "@/components/ServiceCyclePage";
import { venta } from "@/content/venta";

const title = "Proceso de Ventas para Pymes";
const description =
  "Proceso de ventas para pymes: modelo comercial, pipeline y funnel, KPIs comerciales, forecast, esquemas de compensación e implementación de CRM.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/venta",
    languages: { es: "/venta", en: "/en/sales" },
  },
  openGraph: {
    locale: "es_ES",
    title,
    description,
    images: ["/images/sales-base-core-sales.jpg"],
  },
};

export default function VentaPage() {
  return <ServiceCyclePage data={venta} />;
}
