"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Lang } from "@/lib/site";

const COOKIE_NAME = "basecore_lang";

function getCookie(name: string): string | undefined {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1];
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/; max-age=31536000; samesite=lax`;
}

const copy = {
  es: {
    text: "This site is also available in English.",
    accept: "Continue in English",
    dismiss: "Seguir en español",
  },
  en: {
    text: "Este sitio también está disponible en español.",
    accept: "Seguir en español",
    dismiss: "Continue in English",
  },
} as const;

/**
 * Only rendered on "/" and "/en" — the only pair with a real translation so
 * far (see documentation/PLAN-I18N.md). Suggests, never redirects: Google
 * advises against auto-redirecting by browser language/geo, so this only
 * ever acts after the visitor's own click, then remembers it via cookie.
 */
export default function LanguageBanner({
  lang,
  alternateHref,
}: {
  lang: Lang;
  alternateHref: string;
}) {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    // Deferred a frame so the setState below isn't synchronous inside the
    // effect body (react-hooks/set-state-in-effect) — this is a one-time
    // read of browser-only state (cookie, navigator.language) on mount, not
    // something with a server snapshot, so useSyncExternalStore doesn't fit.
    const id = requestAnimationFrame(() => {
      if (getCookie(COOKIE_NAME)) return;
      const browserWantsSpanish = navigator.language.toLowerCase().startsWith("es");
      setVisible(lang === "en" ? browserWantsSpanish : !browserWantsSpanish);
    });
    return () => cancelAnimationFrame(id);
  }, [lang]);

  if (!visible) return null;

  const dismiss = (choice: Lang) => {
    setCookie(COOKIE_NAME, choice);
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[1000] bg-navy px-[15px] py-[12px] text-white shadow-[0_-2px_10px_rgba(0,0,0,0.15)]">
      <div className="container-bc flex flex-wrap items-center justify-center gap-x-[16px] gap-y-[8px] px-0 text-center sm:justify-between sm:text-left">
        <p className="font-sans text-[14px] text-[#D2DCE5]">{t.text}</p>
        <div className="flex items-center gap-[16px]">
          <button
            type="button"
            onClick={() => {
              dismiss(lang === "en" ? "es" : "en");
              router.push(alternateHref);
            }}
            className="font-sans text-[14px] font-semibold text-white underline underline-offset-2 transition-colors hover:text-primary"
          >
            {t.accept}
          </button>
          <button
            type="button"
            onClick={() => dismiss(lang)}
            aria-label="Dismiss"
            className="font-sans text-[14px] text-[#D2DCE5] transition-colors hover:text-white"
          >
            {t.dismiss}
          </button>
        </div>
      </div>
    </div>
  );
}
