"use client";

import dynamic from "next/dynamic";

/**
 * EbookSection (the caller) is a Server Component, and `ssr: false` is only
 * allowed inside a Client Component (see node_modules/next/dist/docs/01-app/
 * 02-guides/lazy-loading.md, "Skipping SSR") — hence this one-line client
 * wrapper instead of calling dynamic() directly in EbookSection.tsx.
 *
 * EbookForm (Turnstile widget + its client JS) is only used on /ebook and
 * /en/ebook, so keeping it out of those routes' server-rendered bundle and
 * loading it after mount trims initial JS without touching any visible copy.
 */
export default dynamic(() => import("./EbookForm"), { ssr: false });
