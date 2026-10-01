import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacidadEs } from "@/content/legal/privacidad-es";
import { LEGAL_PUBLICATION_DATE } from "@/lib/legalDates";

const title = "Política de Privacidad";
const description =
  "Política de privacidad de Base Core: qué datos recopilamos en basecoresales.com, con qué finalidad, qué proveedores los tratan y cómo ejercer tus derechos.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/privacidad",
    languages: { es: "/privacidad", en: "/en/privacy", "x-default": "/privacidad" },
  },
  openGraph: {
    locale: "es_ES",
    title,
    description,
  },
};

export default function PrivacidadPage() {
  return (
    <LegalPage
      doc={privacidadEs}
      updatedDate={LEGAL_PUBLICATION_DATE.es}
      lang="es"
      path="/privacidad"
      breadcrumbCurrent="Privacidad"
    />
  );
}
