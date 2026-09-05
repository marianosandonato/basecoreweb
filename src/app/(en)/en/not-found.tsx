import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

/**
 * EN counterpart of src/app/(es)/not-found.tsx. Needed as its own file now
 * that /en has its own root layout (see documentation/seo/plan-seo.md 1.18):
 * `notFound()` thrown inside the /en tree (e.g. an unknown blog slug in
 * src/app/(en)/en/blog/[slug]/page.tsx) resolves this file, composed with
 * the (en) root layout -- so it should read as English, not reuse the ES one.
 */
export default function NotFoundEn() {
  return (
    <>
      <Breadcrumb current="Page not found" lang="en" />
      <section className="py-24 text-center">
        <div className="mx-auto max-w-xl px-4">
          <p className="font-heading text-7xl font-light text-primary">404</p>
          <h1 className="mt-4 text-3xl font-semibold text-navy">
            Page not found
          </h1>
          <p className="mt-4 text-body">
            The page you&rsquo;re looking for doesn&rsquo;t exist or was moved.
          </p>
          <Link
            href="/en"
            className="mt-8 inline-block rounded bg-primary px-8 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-primary-dark"
          >
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
