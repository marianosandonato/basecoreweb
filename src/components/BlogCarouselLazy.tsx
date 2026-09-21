"use client";

import dynamic from "next/dynamic";

/**
 * `next/dynamic` only defers a Client Component's JS into a separate,
 * lower-priority chunk when it's called FROM a Client Component boundary —
 * calling it directly in a Server Component (page.tsx) does not get the
 * extra code-splitting (documented in
 * node_modules/next/dist/docs/01-app/02-guides/lazy-loading.md, "Skipping
 * SSR"). This thin wrapper exists only to provide that boundary. `ssr: true`
 * (the default) keeps the carousel's content in the server-rendered HTML —
 * no flash, no CLS, still visible to crawlers/AI bots without JS — while its
 * own bundle downloads and hydrates separately from the page's main chunk
 * (perf/1.28, validating the pattern before applying it elsewhere).
 */
const BlogCarousel = dynamic(() => import("./BlogCarousel"));

export default BlogCarousel;
