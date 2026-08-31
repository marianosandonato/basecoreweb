import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection";
import BlogPostingJsonLd from "@/components/BlogPostingJsonLd";
import { renderBold } from "@/lib/renderBold";
import { site, siteEn, type Lang } from "@/lib/site";
import type { BlogPost } from "@/content/blog/types";

const copy = {
  es: {
    breadcrumbLabel: "Blog",
    dateLocale: "es-ES",
    minutes: (n: number) => `${n} min de lectura`,
    by: `Por ${site.founder.name}, ${site.founder.role} de ${site.shortName}`,
  },
  en: {
    breadcrumbLabel: "Blog",
    dateLocale: "en-US",
    minutes: (n: number) => `${n} min read`,
    by: `By ${site.founder.name}, ${siteEn.founderRole} of ${site.shortName}`,
  },
} as const;

export default function BlogPostPage({
  post,
  path,
  lang = "es",
}: {
  post: BlogPost;
  path: string;
  lang?: Lang;
}) {
  const t = copy[lang];
  const publishedLabel = new Date(post.publishedAt).toLocaleDateString(t.dateLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <BlogPostingJsonLd post={post} path={path} />
      <Breadcrumb current={post.title} lang={lang} path={path} />

      <article className="container-bc py-[70px] xl:py-[90px]">
        <div className="mx-auto max-w-[760px]">
          <p className="font-sans text-[13px] font-medium uppercase tracking-[1.5px] text-body">
            {publishedLabel} · {t.minutes(post.readingMinutes)}
          </p>
          <h1 className="mt-[10px] font-heading text-[32px] font-bold leading-[40px] text-heading md:text-[42px] md:leading-[52px]">
            {post.title}
          </h1>

          <a
            href={site.founder.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[14px] inline-block font-sans text-[14px] text-body hover:text-primary hover:underline"
          >
            {t.by}
          </a>

          <div className="relative mt-[30px] aspect-[16/9] w-full overflow-hidden rounded-[8px]">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 760px"
              priority
              className="object-cover"
            />
          </div>

          <div className="mt-[40px] font-sans text-[17px] leading-[1.8] text-body">
            {post.body.map((block, index) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={index}
                    className="mb-[16px] mt-[36px] font-heading text-[24px] font-bold leading-[32px] text-heading first:mt-0"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={index} className="mb-[20px] list-disc space-y-[8px] pl-[22px]">
                    {block.items.map((item) => (
                      <li key={item}>{renderBold(item, "text-heading")}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="mb-[20px]">
                  {renderBold(block.text, "text-heading")}
                </p>
              );
            })}
          </div>

          <div className="mt-[20px] border-t border-line pt-[30px]">
            <Button href={post.cta.href}>{post.cta.label}</Button>
          </div>
        </div>
      </article>

      <ContactSection
        titleAs="h2"
        backgroundImage="/images/bg-5.jpg"
        className="py-[70px] xl:py-[120px]"
        lang={lang}
      />
    </>
  );
}
