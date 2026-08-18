import type { Metadata } from "next";
import ServiceCyclePage from "@/components/ServiceCyclePage";
import { venta } from "@/content/venta";

export const metadata: Metadata = {
  title: "Proceso de Ventas para Pymes",
  description:
    "Proceso de ventas para pymes: modelo comercial, pipeline y funnel, KPIs comerciales, forecast, esquemas de compensación e implementación de CRM.",
  alternates: {
    canonical: "/venta",
    languages: { es: "/venta", en: "/en/sales" },
  },
};

export default function VentaPage() {
  return <ServiceCyclePage data={venta} />;
}
