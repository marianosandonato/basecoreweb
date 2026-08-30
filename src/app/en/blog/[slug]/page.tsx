import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPage from "@/components/BlogPostPage";
import { blogPosts, getBlogPost } from "@/content/blog/posts";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((entry) => ({ slug: entry.enSlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost("en", slug);
  if (!post) return {};

  const entry = blogPosts.find((p) => p.enSlug === slug)!;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/en/blog/${slug}`,
      languages: {
        es: `/blog/${entry.esSlug}`,
        en: `/en/blog/${slug}`,
        "x-default": `/blog/${entry.esSlug}`,
      },
    },
    openGraph: {
      locale: "en_US",
      url: `${site.url}/en/blog/${slug}`,
      title: post.title,
      description: post.description,
      images: [post.image],
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPageEn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost("en", slug);
  if (!post) notFound();

  return <BlogPostPage post={post} path={`/en/blog/${slug}`} lang="en" />;
}
