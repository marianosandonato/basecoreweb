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
    servicePlaceholder: "SERVICIO",
    services: [
      "CONSULTORÍA COMERCIAL",
      "CONSULTORÍA DE MARKETING",
      "CONSULTORÍA COMERCIAL Y MARKETING",
    ],
    whatsapp: "WHATSAPP",
    email: "EMAIL",
    message: "MENSAJE",
    sending: "ENVIANDO...",
    submit: "ENVIAR MENSAJE",
    sentTitle: "¡Gracias por tu mensaje!",
    sentBody: "Te contactaremos a la brevedad para coordinar un llamado.",
    defaultError: "No se pudo enviar el mensaje.",
    errorAlsoText: "También puedes escribirnos por",
    errorOrText: "o a",
    captchaStuckMessage: "No pudimos verificar la seguridad automáticamente — podés enviar el mensaje igual.",
    captchaRetryLabel: "Reintentar la verificación",
  },
  en: {
    name: "FIRST NAME",
    lastName: "LAST NAME",
    company: "COMPANY",
    servicePlaceholder: "SERVICE",
    services: [
      "COMMERCIAL CONSULTING",
      "MARKETING CONSULTING",
      "COMMERCIAL & MARKETING CONSULTING",
    ],
    whatsapp: "WHATSAPP",
    email: "EMAIL",
    message: "MESSAGE",
    sending: "SENDING...",
    submit: "SEND MESSAGE",
    sentTitle: "Thanks for reaching out!",
    sentBody: "We'll get back to you shortly to schedule a call.",
    defaultError: "We couldn't send your message.",
    errorAlsoText: "You can also reach us on",
    errorOrText: "or at",
    captchaStuckMessage: "We couldn't verify the security check automatically — you can still send the message.",
    captchaRetryLabel: "Retry verification",
  },
} as const;

/* Contact Form 7 fields as themed on basecoresales.com: 60px tall, #EDF3F6 fill,
   square corners, no visible border, 15px inline padding, DM Sans 14px #7A838B. */
const inputCls =
  "w-full rounded-none border-0 bg-soft px-[15px] font-sans text-[14px] text-body placeholder:text-body focus:outline-none focus:ring-1 focus:ring-primary";

const fieldCls = `${inputCls} h-[60px] peer`;

/* Floating label for the 60px single-line fields (input/select): sits where
   the placeholder used to (vertically centered, 14px) and floats to the top
   of the same box, shrinking, on focus or once the field has a value. Kept
   inside the field's own height so it never touches the form's tuned
   vertical rhythm (gap-y, field heights) — no layout changes needed. */
const floatingLabelCls =
  "pointer-events-none absolute left-[15px] top-1/2 -translate-y-1/2 font-sans text-[14px] text-body transition-all duration-150 ease-out motion-reduce:transition-none peer-focus:top-[10px] peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:tracking-[0.05em] peer-focus:text-primary peer-[&:not(:placeholder-shown)]:top-[10px] peer-[&:not(:placeholder-shown)]:translate-y-0 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:tracking-[0.05em]";

/* Same idea for the select: options can't use :placeholder-shown, so
   "has a value" is tracked in state (servicioFilled) instead of CSS.
   The resting/filled position classes are mutually exclusive (never both
   in the class list at once) so there's no same-specificity tie between
   them; peer-focus, being a compound selector, safely overrides either
   one to float the label while the field is focused. */
const floatingSelectLabelCls = (filled: boolean) =>
  [
    "pointer-events-none absolute left-[15px] font-sans transition-all duration-150 ease-out motion-reduce:transition-none",
    filled
      ? "top-[10px] translate-y-0 text-[10px] tracking-[0.05em] text-body"
      : "top-1/2 -translate-y-1/2 text-[14px] text-body",
    "peer-focus:top-[10px] peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:tracking-[0.05em] peer-focus:text-primary",
  ].join(" ");

/* Textarea's placeholder sits top-left, same spot where typed text starts —
   unlike the centered inputs, shrinking the label alone isn't enough: the
   text would grow right underneath it. The textarea's own top padding grows
   on focus/fill (see its className below) to make room, so the label only
   needs to shrink in place. */
const floatingTextareaLabelCls =
  "pointer-events-none absolute left-[20px] top-[8px] font-sans text-[14px] text-body transition-all duration-150 ease-out motion-reduce:transition-none peer-focus:text-[10px] peer-focus:tracking-[0.05em] peer-focus:text-primary peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:tracking-[0.05em]";

export default function ContactForm({ lang = "es" }: { lang?: Lang }) {
  const t = copy[lang];
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaStuck, setCaptchaStuck] = useState(false);
  /* Presentational only (floating label for "Servicio") — the value itself
     is still read from FormData on submit, same as every other field. */
  const [servicioFilled, setServicioFilled] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, turnstileToken: captchaToken }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(json.error ?? t.defaultError);
      }
      window.gtag?.("event", "generate_lead", { form_id: "contact" });
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
        <input required id="contact-nombre" name="nombre" placeholder=" " className={fieldCls} />
        <label htmlFor="contact-nombre" className={floatingLabelCls}>
          {t.name}
        </label>
      </div>
      <div className="relative">
        <input id="contact-apellidos" name="apellidos" placeholder=" " className={fieldCls} />
        <label htmlFor="contact-apellidos" className={floatingLabelCls}>
          {t.lastName}
        </label>
      </div>
      <div className="relative">
        <input required id="contact-empresa" name="empresa" placeholder=" " className={fieldCls} />
        <label htmlFor="contact-empresa" className={floatingLabelCls}>
          {t.company}
        </label>
      </div>
      <div className="relative">
        <select
          id="contact-servicio"
          name="servicio"
          defaultValue=""
          className={`${fieldCls} appearance-none pr-[15px]`}
          onChange={(e) => setServicioFilled(e.currentTarget.value !== "")}
        >
          {/* Empty text on purpose: the floating label below covers this
              role visually now, so the native placeholder option no longer
              needs to render its own copy of "SERVICIO"/"SERVICE". */}
          <option value="" disabled></option>
          {t.services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <label htmlFor="contact-servicio" className={floatingSelectLabelCls(servicioFilled)}>
          {t.servicePlaceholder}
        </label>
        {/* Right gap mirrors the field's left padding (15px) — same distance
            the "SERVICIO" text keeps from the left edge. */}
        <svg
          aria-hidden="true"
          viewBox="0 0 448 512"
          className="pointer-events-none absolute right-[15px] top-1/2 h-[12px] w-[12px] -translate-y-1/2 fill-body"
        >
          <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L241.03 381.476c-9.373 9.373-24.569 9.373-33.941 0z" />
        </svg>
      </div>
      <div className="relative">
        <input required id="contact-whatsapp" name="whatsapp" placeholder=" " className={fieldCls} />
        <label htmlFor="contact-whatsapp" className={floatingLabelCls}>
          {t.whatsapp}
        </label>
      </div>
      <div className="relative">
        <input type="email" id="contact-email" name="email" placeholder=" " className={fieldCls} />
        <label htmlFor="contact-email" className={floatingLabelCls}>
          {t.email}
        </label>
      </div>
      {/* The textarea is 180px in the original too, but its wrapper measures 191:
          an inline-block in a block whose line-height is 32.4px leaves an 11px
          descender gap below it. That 11px is load-bearing for the 646px form
          height, so the wrapper reproduces it rather than absorbing it. */}
      <div className="relative leading-[32.4px] sm:col-span-2">
        <textarea
          id="contact-mensaje"
          name="mensaje"
          placeholder=" "
          rows={5}
          className={`${inputCls} peer h-[180px] resize-none px-[20px] py-[10px] transition-[padding] duration-150 ease-out motion-reduce:transition-none focus:pt-[24px] [&:not(:placeholder-shown)]:pt-[24px]`}
        />
        <label htmlFor="contact-mensaje" className={floatingTextareaLabelCls}>
          {t.message}
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

      {/* At <=767 the original drops the 35px lead-in and the button shrinks to
          192x46 with 12px/24px padding; from 768 it is 211x58 with 18px/30px. */}
      <div className="pt-0 sm:col-span-2 md:pt-[35px]">
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
