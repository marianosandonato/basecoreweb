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

export const config = {
  matcher: ["/", "/en"],
};
