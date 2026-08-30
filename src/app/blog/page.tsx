import type { Metadata } from "next";
import BlogListPage from "@/components/BlogListPage";
import { blogPosts } from "@/content/blog/posts";

const title = "Blog";
const description =
  "Artículos sobre procesos comerciales, CRM y tecnología aplicada a ventas para pymes en España y Latinoamérica.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blog",
    languages: { es: "/blog", en: "/en/blog", "x-default": "/blog" },
  },
};

export default function BlogIndexPage() {
  return <BlogListPage entries={blogPosts} lang="es" />;
}
