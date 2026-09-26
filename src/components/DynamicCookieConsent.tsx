"use client";

import dynamic from "next/dynamic";

/**
 * Same reasoning as DynamicLanguageBanner.tsx: AppShell (the caller) is a
 * Server Component, and `ssr: false` is only allowed inside a Client
 * Component (see node_modules/next/dist/docs/01-app/02-guides/lazy-loading.md,
 * "Skipping SSR") -- hence this one-line client wrapper instead of calling
 * dynamic() directly in AppShell.tsx.
 *
 * CookieConsent.tsx renders `null` until a useEffect reads the `bc_consent`
 * cookie on mount, so skipping SSR doesn't change what ships in the initial
 * HTML -- it just keeps its JS (and the settings-panel markup, only needed
 * once someone opens it) out of the server-rendered bundle entirely.
 */
export default dynamic(() => import("./CookieConsent"), { ssr: false });
