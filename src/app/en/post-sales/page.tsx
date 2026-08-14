import type { Metadata } from "next";
import ServiceCyclePage from "@/components/ServiceCyclePage";
import { posventaEn } from "@/content/posventa.en";
import { site } from "@/lib/site";

const description =
  "Build customer loyalty: account development, cross- and up-selling, churn measurement, portfolio segmentation, retention and loyalty.";

export const metadata: Metadata = {
  title: "Post-Sales",
  description,
  alternates: {
    canonical: "/en/post-sales",
    languages: { es: "/posventa", en: "/en/post-sales" },
  },
  openGraph: {
    locale: "en_US",
    url: `${site.url}/en/post-sales`,
    title: "Post-Sales",
    description,
  },
};

export default function PostSalesPage() {
  return <ServiceCyclePage data={posventaEn} lang="en" />;
}
