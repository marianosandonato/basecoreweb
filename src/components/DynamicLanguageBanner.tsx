"use client";

import dynamic from "next/dynamic";

/**
 * AppShell (the caller) is a Server Component, and `ssr: false` is only
 * allowed inside a Client Component (see node_modules/next/dist/docs/01-app/
 * 02-guides/lazy-loading.md, "Skipping SSR") — hence this one-line client
 * wrapper instead of calling dynamic() directly in AppShell.tsx.
 *
 * LanguageBanner is already fully client-only in effect (it renders `null`
 * until a useEffect/requestAnimationFrame flips `visible` after checking the
 * cookie + navigator.language), so skipping SSR for it doesn't change what
 * ships in the initial HTML — it just keeps its JS out of the main
 * server-rendered bundle and defers loading it until after mount.
 */
export default dynamic(() => import("./LanguageBanner"), { ssr: false });
