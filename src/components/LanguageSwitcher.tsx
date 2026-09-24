"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routeMap, type Lang } from "@/lib/site";
import { blogSlugPairs } from "@/content/blog/slugs";

/** Remembers an explicit choice so proxy.ts can honor it on return visits. */
function rememberLang(lang: Lang) {
  document.cookie = `basecore_lang=${lang}; path=/; max-age=31536000; samesite=lax`;
}

/** Blog post slugs aren't in routeMap (they're per-post, not per-page) —
    resolve them from blogSlugPairs instead. Returns null for anything else. */
function blogAlternateHref(pathname: string): string | null {
  const esMatch = pathname.match(/^\/blog\/(.+)$/);
  if (esMatch) {
    const pair = blogSlugPairs.find((p) => p.es === esMatch[1]);
    return pair ? `/en/blog/${pair.en}` : null;
  }
  const enMatch = pathname.match(/^\/en\/blog\/(.+)$/);
  if (enMatch) {
    const pair = blogSlugPairs.find((p) => p.en === enMatch[1]);
    return pair ? `/blog/${pair.es}` : null;
  }
  return null;
}

/** ES/EN are ~16x23px and sit 16px apart — an invisible ::before grows each
    link's clickable area to ~30x45px without moving anything visible. 7px per
    side keeps the two areas from overlapping across the "|" separator. */
const HIT_AREA =
  "relative before:absolute before:-inset-x-[7px] before:-inset-y-[11px] before:content-['']";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const lang: Lang = pathname.startsWith("/en") ? "en" : "es";
  const otherHref =
    blogAlternateHref(pathname) ?? routeMap[pathname] ?? (lang === "en" ? "/" : "/en");
  const esHref = lang === "es" ? pathname : otherHref;
  const enHref = lang === "en" ? pathname : otherHref;

  return (
    <div
      className={`flex items-center gap-[6px] font-sans text-[13px] font-medium ${className}`}
      aria-label="Language"
    >
      <Link
        href={esHref}
        onClick={() => rememberLang("es")}
        aria-current={lang === "es" ? "true" : undefined}
        prefetch={lang === "es" ? false : undefined}
        className={`${HIT_AREA} transition-colors hover:text-accent-light ${
          lang === "es" ? "text-accent-light" : "text-inherit opacity-70"
        }`}
      >
        ES
      </Link>
      <span aria-hidden="true" className="pointer-events-none opacity-40">
        |
      </span>
      <Link
        href={enHref}
        onClick={() => rememberLang("en")}
        aria-current={lang === "en" ? "true" : undefined}
        prefetch={lang === "en" ? false : undefined}
        className={`${HIT_AREA} transition-colors hover:text-accent-light ${
          lang === "en" ? "text-accent-light" : "text-inherit opacity-70"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
