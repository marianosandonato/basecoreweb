import Image from "next/image";
import Link from "next/link";
import type { Lang } from "@/lib/site";
import type { BlogPost } from "@/content/blog/types";

const copy = {
  es: {
    readMore: "Leer artículo",
    readFull: "Leer el artículo completo",
    minutes: (n: number) => `${n} min de lectura`,
  },
  en: {
    readMore: "Read article",
    readFull: "Read the full article",
    minutes: (n: number) => `${n} min read`,
  },
} as const;

export default function BlogCard({
  post,
  href,
  lang = "es",
  featured = false,
}: {
  post: BlogPost;
  href: string;
  lang?: Lang;
  /**
   * Horizontal, larger presentation for a single spotlighted post — the Home
   * teaser uses this when there's only one entry to show, instead of a 3-up
   * grid with two empty cells. See the Home page's "Blog teaser" section.
   */
  featured?: boolean;
}) {
  const t = copy[lang];

  if (featured) {
    return (
      <Link
        href={href}
        className="group flex flex-col overflow-hidden rounded-[8px] border border-line bg-white transition-shadow hover:shadow-lg md:flex-row"
      >
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden md:aspect-auto md:w-[44%]">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 44vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center p-[28px] md:p-[40px]">
          <p className="font-sans text-[13px] font-medium uppercase tracking-[1.5px] text-body">
            {t.minutes(post.readingMinutes)}
          </p>
          <h3 className="mt-[12px] font-heading text-[26px] font-bold leading-[34px] text-heading md:text-[30px] md:leading-[38px]">
            {post.title}
          </h3>
          <p className="mt-[14px] font-sans text-[16px] leading-[28px] text-body">
            {post.description}
          </p>
          <span className="mt-[24px] inline-flex w-fit items-center rounded-[4px] bg-primary px-[24px] py-[13px] font-heading text-[15px] font-medium leading-none tracking-[1.5px] text-white transition-colors duration-300 group-hover:bg-primary-dark">
            {t.readFull}
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-line bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-[24px]">
        <p className="font-sans text-[13px] font-medium uppercase tracking-[1.5px] text-body">
          {t.minutes(post.readingMinutes)}
        </p>
        <h3 className="mt-[10px] font-heading text-[22px] font-bold leading-[30px] text-heading">
          {post.title}
        </h3>
        <p className="mt-[10px] font-sans text-[15px] leading-[26px] text-body line-clamp-3">
          {post.description}
        </p>
        <span className="mt-auto inline-block pt-[16px] font-sans text-[14px] font-semibold text-primary group-hover:underline">
          {t.readMore} →
        </span>
      </div>
    </Link>
  );
}
