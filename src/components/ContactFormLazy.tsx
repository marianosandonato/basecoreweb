"use client";

import dynamic from "next/dynamic";

/**
 * See BlogCarouselLazy.tsx for why this wrapper exists (dynamic() needs a
 * Client Component boundary to actually defer a chunk in this Next version).
 * ContactForm pulls in the Turnstile widget script — heavy, and only needed
 * once a visitor reaches the bottom-of-page contact form, never for LCP.
 */
const ContactForm = dynamic(() => import("./ContactForm"));

export default ContactForm;
