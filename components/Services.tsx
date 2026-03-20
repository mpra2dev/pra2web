"use client";

import { useInView } from "@/hooks/useInView";

const services = [
  {
    title: "Landing que convierte",
    description: "Pensadas para transformar visitas en clientes reales",
  },
  {
    title: "Ejecucion en dias",
    description: "Sin procesos eternos. Tu web lista en tiempo record",
  },
  {
    title: "Optimizadas para subvenciones",
    description: "Preparadas para justificar inversion y generar impacto",
  },
];

export function Services() {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px",
  });

  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-neutral-950 py-24 sm:py-28"
    >
      {/* Soft background accents keep the section aligned with the hero tone. */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.09),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.08),transparent_24%)]" />

      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 transition-all duration-700 ease-out sm:px-6 lg:px-8 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }`}
      >
        {/* The wrapper animates once when it enters the viewport, keeping the motion subtle and performant. */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Small section label to frame the offer without adding noise. */}
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200/75">
            Servicios
          </p>

          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            Landing pages que convierten visitas en clientes
          </h2>

          <p className="mt-5 text-pretty text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
            Disenamos paginas enfocadas a captar interes, filtrar oportunidades
            y acelerar decisiones de compra desde el primer scroll.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/10"
            >
              {/* Short, sales-oriented blocks keep the section skimmable and conversion-focused. */}
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-neutral-300">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          {/* Reuse the navbar CTA language so the page keeps a consistent action path. */}
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-lg bg-[linear-gradient(45deg,#a855f7_0%,#4ca1fc_52%,#22c55e_100%)] px-5 py-3 text-sm font-semibold tracking-[0.01em] text-white shadow-[0_10px_28px_rgba(76,161,252,0.22)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(34,197,94,0.18)]"
          >
            Solicitar propuesta
          </a>
        </div>
      </div>
    </section>
  );
}
