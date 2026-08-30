import Image from "next/image";
import Link from "next/link";
import type { Lang } from "@/lib/site";
import type { BlogPost } from "@/content/blog/types";

const copy = {
  es: { readMore: "Leer más", minutes: (n: number) => `${n} min de lectura` },
  en: { readMore: "Read more", minutes: (n: number) => `${n} min read` },
} as const;

export default function BlogCard({
  post,
  href,
  lang = "es",
}: {
  post: BlogPost;
  href: string;
  lang?: Lang;
}) {
  const t = copy[lang];

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-[8px] border border-line bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-[24px]">
        <p className="font-sans text-[13px] font-medium uppercase tracking-[1.5px] text-body">
          {t.minutes(post.readingMinutes)}
        </p>
        <h3 className="mt-[10px] font-heading text-[22px] font-bold leading-[30px] text-heading">
          {post.title}
        </h3>
        <p className="mt-[10px] font-sans text-[15px] leading-[26px] text-body line-clamp-3">
          {post.description}
        </p>
        <span className="mt-[16px] inline-block font-sans text-[14px] font-semibold text-primary group-hover:underline">
          {t.readMore} →
        </span>
      </div>
    </Link>
  );
}
