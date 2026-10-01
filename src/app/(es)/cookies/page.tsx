import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { cookiesEs } from "@/content/legal/cookies-es";
import { LEGAL_PUBLICATION_DATE } from "@/lib/legalDates";

const title = "Política de Cookies";
const description =
  "Política de cookies de Base Core: qué tecnologías usa basecoresales.com, con qué finalidad, cuánto duran y cómo gestionar tu consentimiento.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/cookies",
    languages: { es: "/cookies", en: "/en/cookies", "x-default": "/cookies" },
  },
  openGraph: {
    locale: "es_ES",
    title,
    description,
  },
};

export default function CookiesPage() {
  return (
    <LegalPage
      doc={cookiesEs}
      updatedDate={LEGAL_PUBLICATION_DATE.es}
      lang="es"
      path="/cookies"
      breadcrumbCurrent="Cookies"
    />
  );
}
