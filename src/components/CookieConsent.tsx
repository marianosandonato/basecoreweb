"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  OPEN_SETTINGS_EVENT,
  PRIVACY_POLICY_HREF,
  getStoredConsent,
  setAnalyticsConsent,
} from "@/lib/consent";
import { CloseIcon } from "./icons";

type Status = "unset" | "granted" | "denied";

// Same CSS-var pattern as LanguageBanner.tsx's --lang-banner-height: read by
// WhatsAppButton.tsx so the floating button never sits under this bar, and
// used by this component itself to stack above the language banner (rather
// than on top of it) on the rare visit where both show at once.
const BANNER_HEIGHT_VAR = "--cookie-banner-height";

const copy = {
  es: {
    bannerAriaLabel: "Aviso de cookies",
    message:
      "Usamos cookies técnicas para que el sitio funcione y, si aceptás, cookies de analítica (Google Analytics) para entender cómo se usa. Podés cambiar tu elección cuando quieras desde “Configurar cookies” en el pie de página.",
    accept: "Aceptar",
    reject: "Rechazar",
    configure: "Configurar",
    panelAriaLabel: "Configurar cookies",
    panelTitle: "Configurar cookies",
    panelIntro:
      "Elegí qué cookies permitís. Las técnicas son necesarias para que el sitio funcione y no se pueden desactivar.",
    technicalTitle: "Técnicas",
    technicalDescription: "Necesarias para que el sitio funcione correctamente. Siempre activas.",
    alwaysOn: "Siempre activas",
    analyticsTitle: "Analíticas",
    analyticsDescription:
      "Google Analytics — nos ayuda a entender cómo se usa el sitio. Solo se activan si las aceptás.",
    analyticsToggleLabel: "Activar cookies analíticas",
    save: "Guardar",
    close: "Cerrar",
    // TODO (plan-seo 4.5.4): once PRIVACY_POLICY_HREF is set, render a real
    // link here ("Más información en nuestra Política de Cookies.").
    privacyPolicyLabel: "Política de cookies",
  },
  en: {
    bannerAriaLabel: "Cookie notice",
    message:
      "We use technical cookies to make the site work and, if you accept, analytics cookies (Google Analytics) to understand how it's used. You can change your choice anytime from “Cookie settings” in the footer.",
    accept: "Accept",
    reject: "Reject",
    configure: "Settings",
    panelAriaLabel: "Cookie settings",
    panelTitle: "Cookie settings",
    panelIntro:
      "Choose which cookies you allow. Technical cookies are required for the site to work and can't be turned off.",
    technicalTitle: "Technical",
    technicalDescription: "Required for the site to work correctly. Always on.",
    alwaysOn: "Always on",
    analyticsTitle: "Analytics",
    analyticsDescription:
      "Google Analytics — helps us understand how the site is used. Only turned on if you accept.",
    analyticsToggleLabel: "Turn on analytics cookies",
    save: "Save",
    close: "Close",
    privacyPolicyLabel: "Cookie policy",
  },
} as const;

const buttonBase =
  "inline-flex items-center justify-center whitespace-nowrap rounded-[4px] px-[20px] py-[12px] font-heading text-[14px] font-medium leading-none tracking-[1px] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/**
 * Cookie consent banner + settings panel (plan-seo 4.5.3). Rendered once
 * from AppShell.tsx via DynamicCookieConsent (ssr:false, same reasoning as
 * DynamicLanguageBanner.tsx) so this file's JS and the settings-panel markup
 * never ship in the server-rendered HTML or the initial client bundle.
 *
 * No cookie wall: the banner is a non-blocking fixed bar (role="region"),
 * never an overlay over the page, so the site stays fully usable with it
 * open. The settings panel IS a real modal dialog (role="dialog",
 * aria-modal, focus trap, Escape to close) since it's an explicit secondary
 * view someone opened on purpose, not something blocking first use of the
 * site.
 */
export default function CookieConsent() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "es";
  const t = copy[lang];
  const privacyHref = PRIVACY_POLICY_HREF ? PRIVACY_POLICY_HREF[lang] : null;

  const [checked, setChecked] = useState(false);
  const [status, setStatus] = useState<Status>("unset");
  const [panelOpen, setPanelOpen] = useState(false);
  const [analyticsToggle, setAnalyticsToggle] = useState(false);

  const bannerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const configureButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const bannerVisible = checked && status === "unset" && !panelOpen;

  // One-time read of the stored choice on mount. Deferred a frame, same
  // reasoning as LanguageBanner.tsx: a one-time read of browser-only state
  // (cookie) on mount isn't a server-snapshot case useSyncExternalStore fits,
  // and setting state synchronously inside the effect body trips
  // react-hooks/set-state-in-effect.
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setStatus(getStoredConsent() ?? "unset");
      setChecked(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  // Footer.tsx's "Configurar cookies" / "Cookie settings" link dispatches
  // this instead of holding its own copy of consent state.
  useEffect(() => {
    function handleOpenSettings() {
      setAnalyticsToggle(getStoredConsent() === "granted");
      setPanelOpen(true);
    }
    window.addEventListener(OPEN_SETTINGS_EVENT, handleOpenSettings);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, handleOpenSettings);
  }, []);

  // --cookie-banner-height, read by WhatsAppButton.tsx (same mechanism as
  // LanguageBanner.tsx's --lang-banner-height) so the floating button offsets
  // above whichever bars are currently showing.
  useEffect(() => {
    if (!bannerVisible) {
      document.documentElement.style.setProperty(BANNER_HEIGHT_VAR, "0px");
      return;
    }
    const el = bannerRef.current;
    if (!el) return;
    const setHeight = () => {
      document.documentElement.style.setProperty(BANNER_HEIGHT_VAR, `${el.offsetHeight}px`);
    };
    setHeight();
    const observer = new ResizeObserver(setHeight);
    observer.observe(el);
    return () => {
      observer.disconnect();
      document.documentElement.style.setProperty(BANNER_HEIGHT_VAR, "0px");
    };
  }, [bannerVisible]);

  // Focus trap + Escape-to-close + focus restore for the settings panel.
  useEffect(() => {
    if (!panelOpen) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const fallbackFocusTarget = configureButtonRef.current;
    const panel = panelRef.current;
    const focusable = panel
      ? Array.from(
          panel.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          ),
        )
      : [];
    focusable[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setPanelOpen(false);
        return;
      }
      if (event.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      (previouslyFocused.current ?? fallbackFocusTarget)?.focus();
    };
  }, [panelOpen]);

  function handleAccept() {
    setAnalyticsConsent(true);
    setStatus("granted");
  }

  function handleReject() {
    setAnalyticsConsent(false);
    setStatus("denied");
  }

  function openPanel() {
    setAnalyticsToggle(getStoredConsent() === "granted");
    setPanelOpen(true);
  }

  function handleSave() {
    setAnalyticsConsent(analyticsToggle);
    setStatus(analyticsToggle ? "granted" : "denied");
    setPanelOpen(false);
  }

  return (
    <>
      {bannerVisible && (
        <div
          ref={bannerRef}
          role="region"
          aria-label={t.bannerAriaLabel}
          className="fixed inset-x-0 bottom-[var(--lang-banner-height,0px)] z-[1000] bg-navy px-[15px] py-[16px] text-white shadow-[0_-2px_10px_rgba(0,0,0,0.15)]"
        >
          <div className="container-bc flex flex-col gap-[16px] px-0 md:flex-row md:items-center md:justify-between">
            <p className="font-sans text-[14px] leading-[1.6] text-[#D2DCE5] md:max-w-[640px]">
              {t.message}
            </p>
            <div className="flex flex-wrap gap-[12px] md:shrink-0">
              <button
                type="button"
                onClick={handleReject}
                className={`${buttonBase} border-2 border-white bg-transparent text-white hover:bg-white/10`}
              >
                {t.reject}
              </button>
              <button
                ref={configureButtonRef}
                type="button"
                onClick={openPanel}
                className={`${buttonBase} border-2 border-white/50 bg-transparent text-white hover:border-white`}
              >
                {t.configure}
              </button>
              <button
                type="button"
                onClick={handleAccept}
                className={`${buttonBase} border-2 border-primary bg-primary text-white hover:bg-primary-dark`}
              >
                {t.accept}
              </button>
            </div>
          </div>
        </div>
      )}

      {panelOpen && (
        <div className="fixed inset-0 z-[1100] flex items-end justify-center bg-black/50 px-[15px] py-[15px] md:items-center">
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={t.panelAriaLabel}
            className="w-full max-w-[520px] rounded-[12px] bg-white p-[24px] shadow-xl"
          >
            <div className="mb-[16px] flex items-start justify-between gap-[16px]">
              <h2 className="font-heading text-[22px] font-bold leading-tight text-heading">
                {t.panelTitle}
              </h2>
              <button
                type="button"
                onClick={() => setPanelOpen(false)}
                aria-label={t.close}
                className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full text-[13px] text-body transition-colors hover:bg-soft hover:text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <CloseIcon />
              </button>
            </div>

            <p className="mb-[20px] font-sans text-[15px] leading-[1.6] text-body">{t.panelIntro}</p>

            <div className="flex flex-col gap-[16px]">
              <div className="flex items-start justify-between gap-[16px] rounded-[8px] border border-line p-[16px]">
                <div>
                  <p className="font-heading text-[16px] font-semibold text-heading">
                    {t.technicalTitle}
                  </p>
                  <p className="mt-[4px] font-sans text-[14px] leading-[1.5] text-body">
                    {t.technicalDescription}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-soft px-[12px] py-[4px] font-sans text-[12px] font-medium text-body">
                  {t.alwaysOn}
                </span>
              </div>

              <div className="flex items-start justify-between gap-[16px] rounded-[8px] border border-line p-[16px]">
                <div>
                  <p className="font-heading text-[16px] font-semibold text-heading">
                    {t.analyticsTitle}
                  </p>
                  <p className="mt-[4px] font-sans text-[14px] leading-[1.5] text-body">
                    {t.analyticsDescription}
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={analyticsToggle}
                  aria-label={t.analyticsToggleLabel}
                  onClick={() => setAnalyticsToggle((value) => !value)}
                  className={`relative h-[26px] w-[46px] shrink-0 rounded-full transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    analyticsToggle ? "bg-primary" : "bg-line"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute top-[3px] h-[20px] w-[20px] rounded-full bg-white shadow transition-transform duration-200 ${
                      analyticsToggle ? "translate-x-[23px]" : "translate-x-[3px]"
                    }`}
                  />
                </button>
              </div>
            </div>

            {privacyHref && (
              <a
                href={privacyHref}
                className="mt-[16px] inline-block font-sans text-[13px] text-body underline underline-offset-2 hover:text-heading"
              >
                {t.privacyPolicyLabel}
              </a>
            )}

            <div className="mt-[24px] flex justify-end">
              <button
                type="button"
                onClick={handleSave}
                className={`${buttonBase} border-2 border-primary bg-primary text-white hover:bg-primary-dark`}
              >
                {t.save}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
