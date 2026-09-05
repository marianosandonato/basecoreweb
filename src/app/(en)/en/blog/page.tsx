import type { Metadata } from "next";
import BlogListPage from "@/components/BlogListPage";
import { blogPosts } from "@/content/blog/posts";
import { site } from "@/lib/site";

const title = "Commercial Management & CRM Blog";
const ogTitle = `${title} – ${site.shortName}`;
const description =
  "Articles on sales processes, CRM, and technology applied to sales for small businesses in Spain and Latin America.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/blog",
    languages: { es: "/blog", en: "/en/blog", "x-default": "/blog" },
  },
  openGraph: {
    locale: "en_US",
    url: `${site.url}/en/blog`,
    title: ogTitle,
    description,
    // Same reused asset as the ES /blog page — see that file for the note.
    images: ["/images/crm-comparativa-base-core-sales.webp"],
  },
};

export default function BlogIndexPageEn() {
  return <BlogListPage entries={blogPosts} lang="en" />;
}
