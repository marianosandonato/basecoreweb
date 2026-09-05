import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import AppShell from "@/components/AppShell";
import Breadcrumb from "@/components/Breadcrumb";
import { fontVariables } from "@/lib/fonts";

/**
 * Catches URLs that match neither the (es) nor the (en)/en root layout at
 * all (typos, dead external links) -- not the same case as a `notFound()`
 * thrown inside one of those trees (an unknown blog slug, say), which is
 * still handled by that group's own not-found.tsx. Required as its own file
 * because splitting lang="es"/lang="en" into two root layouts (see
 * documentation/seo/plan-seo.md 1.18) left no single layout to compose a
 * fallback 404 from -- this bypasses normal rendering entirely, so it needs
 * its own <html>/<body> and its own font/CSS imports.
 *
 * No reliable way to tell from here whether the mistyped URL was under /en/*
 * -- Next doesn't expose the unmatched pathname to this file -- so this
 * defaults to Spanish, the same default the old single root layout always
 * rendered on first paint for this exact case.
 */
export const metadata: Metadata = {
  title: "404 - Página no encontrada",
  description: "La página que buscas no existe o fue movida.",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="es" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <AppShell>
          <Breadcrumb current="Página no encontrada" />
          <section className="py-24 text-center">
            <div className="mx-auto max-w-xl px-4">
              <p className="font-heading text-7xl font-light text-primary">404</p>
              <h1 className="mt-4 text-3xl font-semibold text-navy">
                Página no encontrada
              </h1>
              <p className="mt-4 text-body">
                La página que buscas no existe o fue movida.
              </p>
              <Link
                href="/"
                className="mt-8 inline-block rounded bg-primary px-8 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-primary-dark"
              >
                Volver al inicio
              </Link>
            </div>
          </section>
        </AppShell>
      </body>
    </html>
  );
}
