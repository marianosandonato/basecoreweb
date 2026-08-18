import type { Metadata } from "next";
import ServiceCyclePage from "@/components/ServiceCyclePage";
import { ventaEn } from "@/content/venta.en";
import { site } from "@/lib/site";

const title = "Sales Process Consulting";
const description =
  "Sales process consulting for small business: sales model, pipeline management, sales KPIs, forecasting, compensation schemes and CRM implementation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/sales",
    languages: { es: "/venta", en: "/en/sales" },
  },
  openGraph: {
    locale: "en_US",
    url: `${site.url}/en/sales`,
    title,
    description,
    images: ["/images/sales-base-core-sales.jpg"],
  },
};

export default function SalesPage() {
  return <ServiceCyclePage data={ventaEn} lang="en" />;
}
