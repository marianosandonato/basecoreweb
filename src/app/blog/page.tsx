import type { Metadata } from "next";
import BlogListPage from "@/components/BlogListPage";
import { blogPosts } from "@/content/blog/posts";

const title = "Blog de Gestión Comercial y CRM";
const description =
  "Artículos sobre procesos comerciales, CRM y tecnología aplicada a ventas para pymes en España y Latinoamérica.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blog",
    languages: { es: "/blog", en: "/en/blog", "x-default": "/blog" },
  },
  openGraph: {
    locale: "es_ES",
    title,
    description,
    // Reused from the flagship "¿Qué CRM elegir para una pyme?" post
    // (seo-plan 1.20) — no dedicated /blog image exists, and this is the
    // most representative asset already in the repo.
    images: ["/images/crm-comparativa-base-core-sales.webp"],
  },
};

export default function BlogIndexPage() {
  return <BlogListPage entries={blogPosts} lang="es" />;
}
