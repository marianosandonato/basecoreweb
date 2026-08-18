import type { Metadata } from "next";
import ServiceCyclePage from "@/components/ServiceCyclePage";
import { posventaEn } from "@/content/posventa.en";
import { site } from "@/lib/site";

const title = "Customer Retention Consulting";
const description =
  "Customer retention consulting for small business: reduce churn, cross-selling and up-selling, account development and portfolio segmentation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/post-sales",
    languages: { es: "/posventa", en: "/en/post-sales" },
  },
  openGraph: {
    locale: "en_US",
    url: `${site.url}/en/post-sales`,
    title,
    description,
  },
};

export default function PostSalesPage() {
  return <ServiceCyclePage data={posventaEn} lang="en" />;
}
