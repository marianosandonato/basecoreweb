import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPage from "@/components/BlogPostPage";
import { blogPosts, getBlogPost } from "@/content/blog/posts";

export function generateStaticParams() {
  return blogPosts.map((entry) => ({ slug: entry.esSlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost("es", slug);
  if (!post) return {};

  const entry = blogPosts.find((p) => p.esSlug === slug)!;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`,
      languages: {
        es: `/blog/${slug}`,
        en: `/en/blog/${entry.enSlug}`,
        "x-default": `/blog/${slug}`,
      },
    },
    openGraph: {
      locale: "es_ES",
      title: post.title,
      description: post.description,
      images: [post.image],
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPageEs({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost("es", slug);
  if (!post) notFound();

  return <BlogPostPage post={post} path={`/blog/${slug}`} lang="es" />;
}
