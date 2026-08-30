import type { Metadata } from "next";
import ServiceCyclePage from "@/components/ServiceCyclePage";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import { posventaEn } from "@/content/posventa.en";
import { site } from "@/lib/site";

const title = "Customer Retention Consulting";
const description =
  "Customer retention and customer success consulting for small business: reduce churn, cross-selling and up-selling, account development and portfolio segmentation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/post-sales",
    languages: { es: "/posventa", en: "/en/post-sales", "x-default": "/posventa" },
  },
  openGraph: {
    locale: "en_US",
    url: `${site.url}/en/post-sales`,
    title,
    description,
    images: ["/images/Base-Core-Consultoria-Comercial-y-Marketing-Support.jpg"],
  },
};

export default function PostSalesPage() {
  return (
    <>
      <ServiceJsonLd name={title} description={description} path="/en/post-sales" />
      <ServiceCyclePage data={posventaEn} lang="en" path="/en/post-sales" />
    </>
  );
}
