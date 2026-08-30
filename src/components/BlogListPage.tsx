import Breadcrumb from "@/components/Breadcrumb";
import ContactSection from "@/components/ContactSection";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import type { Lang } from "@/lib/site";
import type { BlogEntry } from "@/content/blog/posts";

const copy = {
  es: {
    breadcrumbLabel: "Blog",
    eyebrow: "BLOG",
    title: "Recursos para vender mejor",
    description:
      "Artículos sobre procesos comerciales, CRM y tecnología aplicada a ventas — sin relleno, con datos.",
  },
  en: {
    breadcrumbLabel: "Blog",
    eyebrow: "BLOG",
    title: "Resources to sell better",
    description:
      "Articles on sales processes, CRM, and technology applied to sales — no filler, just data.",
  },
} as const;

export default function BlogListPage({
  entries,
  lang = "es",
}: {
  entries: readonly BlogEntry[];
  lang?: Lang;
}) {
  const t = copy[lang];
  const path = lang === "en" ? "/en/blog" : "/blog";

  return (
    <>
      <Breadcrumb current={t.breadcrumbLabel} lang={lang} path={path} />

      <section className="container-bc py-[70px] xl:py-[90px]">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
          as="h1"
          maxWidth={700}
          className="mb-[50px]"
        />

        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
          {entries.map((entry) => {
            const slug = lang === "en" ? entry.enSlug : entry.esSlug;
            const post = lang === "en" ? entry.en : entry.es;
            return (
              <BlogCard
                key={slug}
                post={post}
                href={`${path}/${slug}`}
                lang={lang}
              />
            );
          })}
        </div>
      </section>

      <ContactSection
        titleAs="h2"
        backgroundImage="/images/bg-5.jpg"
        className="py-[70px] xl:py-[120px]"
        lang={lang}
      />
    </>
  );
}
