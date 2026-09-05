import type { Metadata } from "next";
import "../globals.css";
import AppShell from "@/components/AppShell";
import { fontVariables } from "@/lib/fonts";
import { buildRootMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildRootMetadata("es_ES");

/**
 * Root layout for every Spanish-language route (everything under src/app/(es)
 * except /en). Split from the EN root layout below so <html lang> is correct
 * in the HTML the server actually sends, instead of being patched after
 * hydration -- see documentation/seo/plan-seo.md 1.18.
 *
 * Route groups don't add a URL segment, so `(es)/venta/page.tsx` still
 * resolves to `/venta`; this is a sibling root layout to `(en)/en/layout.tsx`,
 * not a nested one, so each can declare its own <html>/<body> without either
 * wrapping the other. Reading the path here would make every route dynamic
 * just to pick "es" vs "en" for one segment -- Header/Footer/LanguageBanner
 * derive it themselves client-side via usePathname() instead, so both trees
 * stay statically prerendered.
 */
export default function EsRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
