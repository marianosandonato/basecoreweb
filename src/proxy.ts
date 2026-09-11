import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Two unrelated jobs share this file because both need to run ahead of
 * routing/rendering, and Next.js allows only one Proxy per project.
 *
 * 1. Trailing-slash normalization for every route except "/" and "/en"
 *    (see `skipTrailingSlashRedirect` in next.config.ts, and the matcher
 *    below). Next resolves its own default trailing-slash redirect
 *    *before* next.config's `redirects()` or this Proxy ever run, which
 *    meant a request like /sales/ always took two hops (slash-strip, then
 *    the legacy-slug redirect) on top of Cloudflare's apex→www redirect --
 *    a 3-redirect chain Google Search Console flagged as a "Redirect
 *    error" for /sales/ and /presales/ (first detected 5/9). Disabling the
 *    default and doing it here means the slash-strip and next.config's
 *    redirect resolve in the same pass, collapsing it back to the 2-hop
 *    chain the rest of the site already has (apex→www, then one app-level
 *    redirect).
 *
 * 2. Honors a `basecore_lang` cookie that's only ever set *after* a visitor
 *    explicitly picks a language (switcher click or banner accept) — never
 *    from IP/Accept-Language guessing. Googlebot never carries this cookie,
 *    so it always sees the canonical content for whatever URL it requested.
 *    Scoped to exactly "/" and "/en" via the matcher's own `missing`
 *    condition, which excludes Link's automatic prefetch requests (tagged
 *    with `next-router-prefetch` / `purpose: prefetch`) — that check has to
 *    live in the matcher, not in this function body, because Next strips
 *    the `next-router-prefetch` header from `request.headers` before Proxy
 *    code ever sees it (RSC Flight header). Without the exclusion, a stale
 *    cookie present at prefetch time (e.g. the page loads with `es` still
 *    set) gets redirected here, and the client router caches that
 *    redirect. A later real click — after the cookie is updated to the new
 *    language — then reuses the cached (stale) redirect instead of
 *    fetching fresh, so the language switcher silently does nothing until
 *    a hard refresh bypasses the router cache.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/" || pathname === "/en") {
    const preferred = request.cookies.get("basecore_lang")?.value;
    const wantsEn = preferred === "en" && pathname === "/";
    const wantsEs = preferred === "es" && pathname === "/en";
    if (!wantsEn && !wantsEs) return NextResponse.next();

    const url = request.nextUrl.clone();
    url.pathname = wantsEn ? "/en" : "/";
    return NextResponse.redirect(url);
  }

  if (pathname.endsWith("/")) {
    return NextResponse.redirect(
      new URL(pathname.slice(0, -1), request.url),
      308
    );
  }

  return NextResponse.next();
}

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
    // Everything else except static assets/metadata files, and excluding
    // "/" and "/en" (those two are covered by the entries above, which
    // additionally filter out prefetch requests).
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|\\.well-known|en$|$).*)",
  ],
};
