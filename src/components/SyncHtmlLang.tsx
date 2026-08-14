"use client";

import { useEffect } from "react";

/**
 * The root layout can't set <html lang> per-route without reading the
 * request path, which would force every page to render dynamically (see
 * src/app/layout.tsx). This patches it after hydration instead, scoped to
 * just the /en subtree, so the rest of the site stays statically prerendered.
 */
export default function SyncHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = "es";
    };
  }, [lang]);

  return null;
}
