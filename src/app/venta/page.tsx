import type { Metadata } from "next";
import ServiceCyclePage from "@/components/ServiceCyclePage";
import { venta } from "@/content/venta";

export const metadata: Metadata = {
  title: "Venta",
  description:
    "Mejora tus procesos de venta: modelo comercial, pipeline y funnel, metas y objetivos, KPI's, forecast, esquemas de compensación e implementación de CRM.",
  alternates: {
    canonical: "/venta",
    languages: { es: "/venta", en: "/en/sales" },
  },
};

export default function VentaPage() {
  return <ServiceCyclePage data={venta} />;
}
