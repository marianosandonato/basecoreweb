import type { Metadata } from "next";
import ServiceCyclePage from "@/components/ServiceCyclePage";
import { preventaEn } from "@/content/preventa.en";
import { site } from "@/lib/site";

const description =
  "Get meetings with your potential clients. Database building, lead qualification, prospecting and sales opportunity detection.";

export const metadata: Metadata = {
  title: "Presales",
  description,
  alternates: {
    canonical: "/en/presales",
    languages: { es: "/preventa", en: "/en/presales" },
  },
  openGraph: {
    locale: "en_US",
    url: `${site.url}/en/presales`,
    title: "Presales",
    description,
  },
};

export default function PresalesPage() {
  return <ServiceCyclePage data={preventaEn} lang="en" />;
}
