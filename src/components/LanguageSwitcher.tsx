"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routeMap, type Lang } from "@/lib/site";

/** Remembers an explicit choice so proxy.ts can honor it on return visits. */
function rememberLang(lang: Lang) {
  document.cookie = `basecore_lang=${lang}; path=/; max-age=31536000; samesite=lax`;
}

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const lang: Lang = pathname.startsWith("/en") ? "en" : "es";
  const otherHref = routeMap[pathname] ?? (lang === "en" ? "/" : "/en");
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
        className={`transition-colors hover:text-accent-light ${
          lang === "es" ? "text-accent-light" : "text-inherit opacity-70"
        }`}
      >
        ES
      </Link>
      <span aria-hidden="true" className="opacity-40">
        |
      </span>
      <Link
        href={enHref}
        onClick={() => rememberLang("en")}
        aria-current={lang === "en" ? "true" : undefined}
        className={`transition-colors hover:text-accent-light ${
          lang === "en" ? "text-accent-light" : "text-inherit opacity-70"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
