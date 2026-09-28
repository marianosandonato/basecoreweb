import { notFound } from "next/navigation";

/**
 * Catches any /en/* URL that no other route in this tree matches (typos,
 * dead external links) and hands it to (en)/en/not-found.tsx, so the
 * visitor gets the English 404 inside the English layout. Without it those
 * URLs fall through to src/app/global-not-found.tsx, which can't tell an
 * /en/* miss from a Spanish one and always renders in Spanish.
 *
 * Static routes and blog/[slug] take precedence over a catch-all, so this
 * only ever sees URLs that would have 404'd anyway.
 */
export default function EnCatchAll() {
  notFound();
}
