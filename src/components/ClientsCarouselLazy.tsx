"use client";

import dynamic from "next/dynamic";

/** See BlogCarouselLazy.tsx for why this wrapper exists. */
const ClientsCarousel = dynamic(() => import("./ClientsCarousel"));

export default ClientsCarousel;
