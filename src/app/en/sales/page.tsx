import type { Metadata } from "next";
import ServiceCyclePage from "@/components/ServiceCyclePage";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import { ventaEn } from "@/content/venta.en";
import { site } from "@/lib/site";

const title = "Commercial Management Consulting";
const description =
  "Commercial management for small business: sales process, pipeline management, sales KPIs, forecasting and CRM implementation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/sales",
    languages: { es: "/venta", en: "/en/sales", "x-default": "/venta" },
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
  return (
    <>
      <ServiceJsonLd name={title} description={description} path="/en/sales" />
      <ServiceCyclePage data={ventaEn} lang="en" path="/en/sales" />
    </>
  );
}
