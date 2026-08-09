import type { Metadata } from "next";
import ServiceCyclePage from "@/components/ServiceCyclePage";
import { posventa } from "@/content/posventa";

export const metadata: Metadata = {
  title: "Posventa",
  description:
    "Fideliza a tus clientes: desarrollo de cuentas, cross y up selling, medición de churn, segmentación de cartera, retención y fidelización.",
  alternates: { canonical: "/posventa" },
};

export default function PosventaPage() {
  return <ServiceCyclePage data={posventa} />;
}
