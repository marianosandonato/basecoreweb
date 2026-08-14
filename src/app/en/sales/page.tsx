import type { Metadata } from "next";
import ServiceCyclePage from "@/components/ServiceCyclePage";
import { ventaEn } from "@/content/venta.en";
import { site } from "@/lib/site";

const description =
  "Improve your sales processes: sales model, pipeline and funnel, goals and targets, KPIs, forecasting, compensation schemes and CRM implementation.";

export const metadata: Metadata = {
  title: "Sales",
  description,
  alternates: {
    canonical: "/en/sales",
    languages: { es: "/venta", en: "/en/sales" },
  },
  openGraph: {
    locale: "en_US",
    url: `${site.url}/en/sales`,
    title: "Sales",
    description,
  },
};

export default function SalesPage() {
  return <ServiceCyclePage data={ventaEn} lang="en" />;
}
