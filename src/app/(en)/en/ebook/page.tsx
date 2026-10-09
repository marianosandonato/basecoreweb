import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import EbookSection from "@/components/EbookSection";
import { site } from "@/lib/site";

const title = "Sales Process from Scratch";
const shareTitle = "First Steps to an Effective Sales Process";
const description =
  "Download our free e-book: how to build a sales process from scratch and the importance of a strong presales cycle to attract new clients.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/ebook",
    languages: { es: "/ebook", en: "/en/ebook", "x-default": "/ebook" },
  },
  openGraph: {
    locale: "en_US",
    url: `${site.url}/en/ebook`,
    // Nombre real del e-book al compartir el link; el <title> conserva la keyword.
    title: shareTitle,
    description,
    images: ["/images/base-core-sales-ebook.webp"],
  },
};

export default function EbookPageEn() {
  return (
    <>
      <Breadcrumb
        current="E-Book"
        variant="hero"
        lang="en"
        path="/en/ebook"
      />
      <EbookSection lang="en" />
    </>
  );
}
