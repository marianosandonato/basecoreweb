import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export default function NotFound() {
  return (
    <>
      <Breadcrumb current="Página no encontrada" />
      <section className="py-24 text-center">
        <div className="mx-auto max-w-xl px-4">
          <p className="font-heading text-7xl font-light text-primary">404</p>
          <h1 className="mt-4 text-3xl font-semibold text-navy">
            Página no encontrada
          </h1>
          <p className="mt-4 text-body">
            La página que buscas no existe o fue movida.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded bg-primary px-8 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-primary-dark"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
    </>
  );
}
