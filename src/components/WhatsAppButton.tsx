import { site } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp us"
      // bottom offset reads --lang-banner-height (set by LanguageBanner.tsx) so the two never overlap.
      className="fixed right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-4xl text-white shadow-lg transition-[bottom,transform] duration-300 hover:scale-110 motion-reduce:transition-none bottom-[calc(1.25rem+var(--lang-banner-height,0px))]"
    >
      <WhatsAppIcon />
    </a>
  );
}
