import { site } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp us"
      // bottom offset reads --lang-banner-height (set by LanguageBanner.tsx) and --cookie-banner-height
      // (set by CookieConsent.tsx) so none of the three ever overlap, even stacked on the rare visit
      // both banners show at once. Smaller on phones (56px, 1rem from the edge) so it covers less
      // of the hero and the contact section.
      // transition on transform only (not bottom, a layout property) -- PSI's non-composited-animations
      // audit flagged this exact node for animating `bottom`, which can't run on the compositor and
      // forces main-thread layout on every frame of the transition. The banner-offset jump is now instant
      // instead of sliding, but that only fires on the rare visit where a banner toggles.
      className="fixed right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-3xl text-white shadow-lg transition-transform duration-300 hover:scale-110 motion-reduce:transition-none bottom-[calc(1rem+var(--lang-banner-height,0px)+var(--cookie-banner-height,0px))] md:right-5 md:h-16 md:w-16 md:text-4xl md:bottom-[calc(1.25rem+var(--lang-banner-height,0px)+var(--cookie-banner-height,0px))]"
    >
      <WhatsAppIcon />
    </a>
  );
}
