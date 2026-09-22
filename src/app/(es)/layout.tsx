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
      {/*
        pb-[var(--lang-banner-height,0px)]: LanguageBanner.tsx is `fixed
        bottom-0` and sets this var via ResizeObserver while visible (0px
        otherwise). Without this, a page whose content doesn't already
        overflow the viewport by the banner's height has nowhere to scroll
        the banner clear of -- the last section (or, on a short page, real
        content well above the footer) stays permanently covered. Reserving
        the space here guarantees there's always room to scroll it into view.
        No transition: same non-composited-layout reasoning as the WhatsApp
        button's bottom offset (see WhatsAppButton.tsx) -- an instant jump
        beats animating a layout property, and this only fires on the rare
        visit where the banner toggles.
      */}
      <body className="flex min-h-full flex-col pb-[var(--lang-banner-height,0px)]">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
