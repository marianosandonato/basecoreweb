"use client";

import { useState, type FormEvent } from "react";
import { site, type Lang } from "@/lib/site";
import Turnstile from "./Turnstile";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type Status = "idle" | "sending" | "sent" | "error";

const copy = {
  es: {
    name: "NOMBRE",
    lastName: "APELLIDO",
    company: "EMPRESA",
    whatsapp: "WHATSAPP",
    email: "EMAIL",
    sending: "ENVIANDO...",
    submit: "DESCARGAR",
    sentTitle: "¡Gracias! Ya podés descargar tu E-Book.",
    sentBody: "La descarga debería haber comenzado sola.",
    retryLabel: "Si no comenzó, hacé clic acá.",
    defaultError: "No se pudo procesar la descarga.",
    errorAlsoText: "También puedes escribirnos por",
    errorOrText: "o a",
    captchaStuckMessage: "No pudimos verificar la seguridad automáticamente — podés descargar igual.",
    captchaRetryLabel: "Reintentar la verificación",
  },
  en: {
    name: "FIRST NAME",
    lastName: "LAST NAME",
    company: "COMPANY",
    whatsapp: "WHATSAPP",
    email: "EMAIL",
    sending: "SENDING...",
    submit: "DOWNLOAD",
    sentTitle: "Thanks! You can now download your E-Book.",
    sentBody: "The download should have started on its own.",
    retryLabel: "If it didn't, click here.",
    defaultError: "We couldn't process the download.",
    errorAlsoText: "You can also reach us on",
    errorOrText: "or at",
    captchaStuckMessage: "We couldn't verify the security check automatically — you can still download it.",
    captchaRetryLabel: "Retry verification",
  },
} as const;

/* Same Contact Form 7 styling as ContactForm — 60px tall, #EDF3F6 fill,
   square corners, no visible border, 15px inline padding, DM Sans 14px #7A838B. */
const inputCls =
  "w-full rounded-none border-0 bg-soft px-[15px] font-sans text-[14px] text-body placeholder:text-body focus:outline-none focus:ring-2 focus:ring-primary";

const fieldCls = `${inputCls} h-[60px] peer`;

/* Same floating label pattern as ContactForm (hallazgo 1.3/1.14): the label
   sits where the placeholder used to (vertically centered, 14px) and floats
   to the top of the same 60px box, shrinking, on focus or once the field has
   a value. CSS-only via peer + :placeholder-shown, no JS. */
const floatingLabelCls =
  "pointer-events-none absolute left-[15px] top-1/2 -translate-y-1/2 font-sans text-[14px] text-body transition-all duration-150 ease-out motion-reduce:transition-none peer-focus:top-[10px] peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:tracking-[0.05em] peer-focus:text-primary peer-[&:not(:placeholder-shown)]:top-[10px] peer-[&:not(:placeholder-shown)]:translate-y-0 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:tracking-[0.05em]";

function triggerDownload(file: string, fileName: string) {
  const link = document.createElement("a");
  link.href = file;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export default function EbookForm({
  lang = "es",
  file,
  fileName,
}: {
  lang?: Lang;
  /** Public path to the PDF, e.g. /ebook/base-core-....pdf */
  file: string;
  /** Suggested filename for the browser's save dialog. */
  fileName: string;
}) {
  const t = copy[lang];
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaStuck, setCaptchaStuck] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/ebook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          idioma: lang === "en" ? "EN" : "ES",
          turnstileToken: captchaToken,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(json.error ?? t.defaultError);
      }
      window.gtag?.("event", "generate_lead", { form_id: "ebook" });
      triggerDownload(file, fileName);
      window.gtag?.("event", "file_download", { file_name: fileName, link_url: file });
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : t.defaultError);
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded border border-primary/40 bg-soft p-8 text-center">
        <p className="text-lg font-semibold text-navy">{t.sentTitle}</p>
        <p className="mt-2 text-body">{t.sentBody}</p>
        <button
          type="button"
          onClick={() => triggerDownload(file, fileName)}
          className="mt-3 font-semibold text-primary underline"
        >
          {t.retryLabel}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-x-[20px] gap-y-[22px] sm:grid-cols-2" noValidate={false}>
      {/* Honeypot: bots fill this, humans never see it */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="relative">
        <input required id="ebook-nombre" name="nombre" placeholder=" " className={fieldCls} />
        <label htmlFor="ebook-nombre" className={floatingLabelCls}>
          {t.name}
        </label>
      </div>
      <div className="relative">
        <input id="ebook-apellidos" name="apellidos" placeholder=" " className={fieldCls} />
        <label htmlFor="ebook-apellidos" className={floatingLabelCls}>
          {t.lastName}
        </label>
      </div>
      <div className="relative">
        <input required id="ebook-empresa" name="empresa" placeholder=" " className={fieldCls} />
        <label htmlFor="ebook-empresa" className={floatingLabelCls}>
          {t.company}
        </label>
      </div>
      <div className="relative">
        <input id="ebook-whatsapp" name="whatsapp" placeholder=" " className={fieldCls} />
        <label htmlFor="ebook-whatsapp" className={floatingLabelCls}>
          {t.whatsapp}
        </label>
      </div>
      <div className="relative sm:col-span-2">
        <input
          required
          type="email"
          id="ebook-email"
          name="email"
          placeholder=" "
          className={fieldCls}
        />
        <label htmlFor="ebook-email" className={floatingLabelCls}>
          {t.email}
        </label>
      </div>

      {TURNSTILE_SITE_KEY && (
        <div className="sm:col-span-2">
          <Turnstile
            siteKey={TURNSTILE_SITE_KEY}
            onVerify={setCaptchaToken}
            onExpire={() => setCaptchaToken(null)}
            onStuck={() => setCaptchaStuck(true)}
            stuckMessage={t.captchaStuckMessage}
            retryLabel={t.captchaRetryLabel}
          />
        </div>
      )}

      <div className="pt-0 sm:col-span-2 md:pt-[13px]">
        <button
          type="submit"
          disabled={status === "sending" || (Boolean(TURNSTILE_SITE_KEY) && !captchaToken && !captchaStuck)}
          /* 18 + 22 + 18 = 58px, the original's `btn-cta` line-height. */
          className="w-auto rounded-[4px] bg-primary px-[24px] py-[12px] font-heading text-[14px] font-bold uppercase leading-[22px] tracking-[2px] text-white transition-colors duration-300 hover:bg-[rgba(0,0,0,0.77)] disabled:cursor-not-allowed disabled:opacity-60 md:px-[30px] md:py-[18px]"
        >
          {status === "sending" ? t.sending : t.submit}
        </button>
        {status === "error" && (
          <p className="mt-3 text-sm text-red-600">
            {error} {t.errorAlsoText}{" "}
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline">
              WhatsApp
            </a>{" "}
            {t.errorOrText}{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-primary underline">
              {site.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
