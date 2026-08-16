import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import EbookSection from "@/components/EbookSection";
import { site } from "@/lib/site";

const description =
  "Download our free E-Book: first steps to an effective sales process and the importance of a strong presales cycle.";

export const metadata: Metadata = {
  title: "E-Book",
  description,
  alternates: {
    canonical: "/en/ebook",
    languages: { es: "/ebook", en: "/en/ebook" },
  },
  openGraph: {
    locale: "en_US",
    url: `${site.url}/en/ebook`,
    title: "E-Book",
    description,
  },
};

export default function EbookPageEn() {
  return (
    <>
      <Breadcrumb
        current="E-Book"
        variant="hero"
        lang="en"
        title="What are the first steps to an effective sales process and the importance of defining an effective presales cycle to attract new clients?"
      />
      <EbookSection lang="en" />
    </>
  );
}
