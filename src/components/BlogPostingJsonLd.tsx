import { site } from "@/lib/site";
import type { BlogPost } from "@/content/blog/types";

/** BlogPosting schema for an individual /blog article — the site-wide
    ProfessionalService JSON-LD in the root layout describes the business,
    this describes the article itself. */
export default function BlogPostingJsonLd({
  post,
  path,
}: {
  post: BlogPost;
  path: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    image: `${site.url}${post.image}`,
    url: `${site.url}${path}`,
    mainEntityOfPage: `${site.url}${path}`,
    author: {
      "@type": "Person",
      name: site.founder.name,
    },
    publisher: {
      "@type": "ProfessionalService",
      name: site.shortName,
      url: site.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
