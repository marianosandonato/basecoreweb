import type { Metadata } from "next";
import ServiceCyclePage from "@/components/ServiceCyclePage";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import { preventaEn } from "@/content/preventa.en";
import { site } from "@/lib/site";

const title = "B2B Lead Generation & Appointment Setting";
const description =
  "B2B lead generation and appointment setting: database building, lead qualification and opportunity detection to get more meetings with your potential clients.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/presales",
    languages: { es: "/preventa", en: "/en/presales", "x-default": "/preventa" },
  },
  openGraph: {
    locale: "en_US",
    url: `${site.url}/en/presales`,
    title,
    description,
    images: ["/images/base-core-sales-consegui-reuniones-con-tus-clientes-potenciales.jpg"],
  },
};

export default function PresalesPage() {
  return (
    <>
      <ServiceJsonLd name={title} description={description} path="/en/presales" />
      <ServiceCyclePage data={preventaEn} lang="en" path="/en/presales" />
    </>
  );
}
