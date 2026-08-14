import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Honors a `basecore_lang` cookie that's only ever set *after* a visitor
 * explicitly picks a language (switcher click or banner accept) — never
 * from IP/Accept-Language guessing. Googlebot never carries this cookie, so
 * it always sees the canonical content for whatever URL it requested.
 *
 * Scoped to exactly "/" and "/en" so every other route (and every static
 * asset) skips Proxy entirely and stays on the fast, statically-prerendered
 * path.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const preferred = request.cookies.get("basecore_lang")?.value;

  const wantsEn = preferred === "en" && pathname === "/";
  const wantsEs = preferred === "es" && pathname === "/en";
  if (!wantsEn && !wantsEs) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = wantsEn ? "/en" : "/";
  return NextResponse.redirect(url);
}

/**
 * `missing` excludes Link's automatic prefetch requests (tagged with
 * `next-router-prefetch` / `purpose: prefetch`). Without this, a stale
 * cookie present at prefetch time (e.g. the page loads with `es` still set)
 * gets redirected here, and the client router caches that redirect. A later
 * real click — after the cookie is updated to the new language — then
 * reuses the cached (stale) redirect instead of fetching fresh, so the
 * language switcher silently does nothing until a hard refresh bypasses the
 * router cache.
 */
export const config = {
  matcher: [
    {
      source: "/",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
    {
      source: "/en",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
