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
      // both banners show at once.
      // transition on transform only (not bottom, a layout property) -- PSI's non-composited-animations
      // audit flagged this exact node for animating `bottom`, which can't run on the compositor and
      // forces main-thread layout on every frame of the transition. The banner-offset jump is now instant
      // instead of sliding, but that only fires on the rare visit where a banner toggles.
      className="fixed right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-4xl text-white shadow-lg transition-transform duration-300 hover:scale-110 motion-reduce:transition-none bottom-[calc(1.25rem+var(--lang-banner-height,0px)+var(--cookie-banner-height,0px))]"
    >
      <WhatsAppIcon />
    </a>
  );
}
