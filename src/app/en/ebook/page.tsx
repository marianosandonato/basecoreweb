import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import EbookSection from "@/components/EbookSection";
import { site } from "@/lib/site";

const title = "Sales Process from Scratch";
const description =
  "Download our free e-book: how to build a sales process from scratch and the importance of a strong presales cycle to attract new clients.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/ebook",
    languages: { es: "/ebook", en: "/en/ebook" },
  },
  openGraph: {
    locale: "en_US",
    url: `${site.url}/en/ebook`,
    title,
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
        title="What are the first steps to an effective sales process and the importance of defining a presales cycle to attract new clients?"
      />
      <EbookSection lang="en" />
    </>
  );
}
