"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const SERVICES = [
  "CONSULTORÍA COMERCIAL",
  "CONSULTORÍA DE MARKETING",
  "CONSULTORÍA COMERCIAL Y MARKETING",
] as const;

type Status = "idle" | "sending" | "sent" | "error";

/* Contact Form 7 fields as themed on basecoresales.com: 60px tall, #EDF3F6 fill,
   square corners, no visible border, 15px inline padding, DM Sans 14px #7A838B. */
const inputCls =
  "w-full rounded-none border-0 bg-soft px-[15px] font-sans text-[14px] text-body placeholder:text-body focus:outline-none focus:ring-1 focus:ring-primary";

const fieldCls = `${inputCls} h-[60px]`;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

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
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(json.error ?? "No se pudo enviar el mensaje.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "No se pudo enviar el mensaje.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded border border-primary/40 bg-soft p-8 text-center">
        <p className="text-lg font-semibold text-navy">¡Gracias por tu mensaje!</p>
        <p className="mt-2 text-body">
          Te contactaremos a la brevedad para coordinar un llamado.
        </p>
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
      <input required name="nombre" placeholder="NOMBRE" className={fieldCls} />
      <input name="apellidos" placeholder="APELLIDO" className={fieldCls} />
      <input required name="empresa" placeholder="EMPRESA" className={fieldCls} />
      <div className="relative">
        <select
          name="servicio"
          defaultValue=""
          className={`${fieldCls} appearance-none pr-[15px]`}
          aria-label="Servicio"
        >
          <option value="" disabled>
            SERVICIO
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {/* Centered between "SERVICIO" (ends ~15+61px in) and the field's right
            edge: measured midpoint is field-width/2 + 38px from the left, so
            the icon's `right` offset is field-width/2 - 38px minus its own
            half-width (6px) = calc(50% - 44px). Holds at any field width. */}
        <svg
          aria-hidden="true"
          viewBox="0 0 448 512"
          className="pointer-events-none absolute top-1/2 h-[12px] w-[12px] -translate-y-1/2 fill-body"
          style={{ right: "calc(50% - 44px)" }}
        >
          <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L241.03 381.476c-9.373 9.373-24.569 9.373-33.941 0z" />
        </svg>
      </div>
      <input required name="whatsapp" placeholder="WHATSAPP" className={fieldCls} />
      <input type="email" name="email" placeholder="EMAIL" className={fieldCls} />
      {/* The textarea is 180px in the original too, but its wrapper measures 191:
          an inline-block in a block whose line-height is 32.4px leaves an 11px
          descender gap below it. That 11px is load-bearing for the 646px form
          height, so the wrapper reproduces it rather than absorbing it. */}
      <div className="leading-[32.4px] sm:col-span-2">
        <textarea
          name="mensaje"
          placeholder="MENSAJE"
          rows={5}
          className={`${inputCls} h-[180px] resize-none px-[20px] py-[10px]`}
        />
      </div>
      {/* At <=767 the original drops the 35px lead-in and the button shrinks to
          192x46 with 12px/24px padding; from 768 it is 211x58 with 18px/30px. */}
      <div className="pt-0 sm:col-span-2 md:pt-[35px]">
        <button
          type="submit"
          disabled={status === "sending"}
          /* 18 + 22 + 18 = 58px, the original's `btn-cta` line-height. */
          className="w-auto rounded-none bg-primary px-[24px] py-[12px] font-heading text-[14px] font-bold uppercase leading-[22px] tracking-[2px] text-white transition-colors duration-300 hover:bg-[rgba(0,0,0,0.77)] disabled:cursor-not-allowed disabled:opacity-60 md:px-[30px] md:py-[18px]"
        >
          {status === "sending" ? "ENVIANDO..." : "ENVIAR MENSAJE"}
        </button>
        {status === "error" && (
          <p className="mt-3 text-sm text-red-600">
            {error} También puedes escribirnos por{" "}
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline">
              WhatsApp
            </a>{" "}
            o a{" "}
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
