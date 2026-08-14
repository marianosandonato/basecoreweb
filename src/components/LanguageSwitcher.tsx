"use client";

import Link from "next/link";
import type { Lang } from "@/lib/site";

/** Remembers an explicit choice so proxy.ts can honor it on return visits. */
function rememberLang(lang: Lang) {
  document.cookie = `basecore_lang=${lang}; path=/; max-age=31536000; samesite=lax`;
}

export default function LanguageSwitcher({
  lang,
  className = "",
}: {
  lang: Lang;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-[6px] font-sans text-[13px] font-medium ${className}`}
      aria-label="Language"
    >
      <Link
        href="/"
        onClick={() => rememberLang("es")}
        aria-current={lang === "es" ? "true" : undefined}
        className={`transition-colors hover:text-primary ${
          lang === "es" ? "text-primary" : "text-inherit opacity-70"
        }`}
      >
        ES
      </Link>
      <span aria-hidden="true" className="opacity-40">
        |
      </span>
      <Link
        href="/en"
        onClick={() => rememberLang("en")}
        aria-current={lang === "en" ? "true" : undefined}
        className={`transition-colors hover:text-primary ${
          lang === "en" ? "text-primary" : "text-inherit opacity-70"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
