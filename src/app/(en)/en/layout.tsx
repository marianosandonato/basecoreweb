import type { Metadata } from "next";
import "../../globals.css";
import AppShell from "@/components/AppShell";
import { fontVariables } from "@/lib/fonts";
import { buildRootMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildRootMetadata("en_US");

/**
 * Root layout for every /en/* route. This *replaces* the old nested
 * app/en/layout.tsx, which couldn't touch <html> (only a root layout can) and
 * instead patched `document.documentElement.lang` client-side after
 * hydration via SyncHtmlLang -- confirmed by `curl` to leave lang="es" in the
 * server-rendered HTML. See documentation/seo/plan-seo.md 1.18.
 *
 * Being a sibling root layout to `(es)/layout.tsx` (not nested under it) is
 * what makes a static, per-segment lang="en" possible without reading the
 * request path -- see that file's comment for the rest of the reasoning.
 * Trade-off: navigating between an (es) route and an (en) route now crosses
 * two different root layouts, which Next.js always does as a full page load
 * rather than a client-side transition -- validated with Playwright.
 */
export default function EnRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
