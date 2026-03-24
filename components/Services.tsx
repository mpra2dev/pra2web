"use client";

import type { SVGProps } from "react";

import { useInView } from "@/hooks/useInView";

function SparkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M12 3 6 5.5V11c0 4 2.6 7.7 6 9 3.4-1.3 6-5 6-9V5.5L12 3Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m9.5 11.5 1.7 1.7 3.3-3.7"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const services = [
  {
    title: "Landing que convierte",
    description:
      "Estructura, mensaje y jerarquía visual orientados a transformar tráfico en conversaciones reales.",
    icon: SparkIcon,
    accent:
      "from-[rgba(168,85,247,0.22)] via-[rgba(76,161,252,0.16)] to-[rgba(34,197,94,0.12)]",
    stat: "Más claridad desde el primer scroll",
  },
  {
    title: "Ejecución en días",
    description:
      "Procesos cortos, decisiones rápidas y una entrega pensada para salir al mercado sin meses de espera.",
    icon: FlashIcon,
    accent:
      "from-[rgba(76,161,252,0.22)] via-[rgba(255,255,255,0.08)] to-transparent",
    stat: "Velocidad real sin perder calidad",
  },
  {
    title: "Optimizadas para subvenciones",
    description:
      "Una web con nivel visual y enfoque comercial, preparada para justificar inversión y proyectar solidez.",
    icon: ShieldIcon,
    accent:
      "from-[rgba(34,197,94,0.2)] via-[rgba(76,161,252,0.14)] to-transparent",
    stat: "Mejor presentación para proyectos financiados",
  },
];

export function Services() {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px",
  });

  const featuredService = services[0];
  const secondaryServices = services.slice(1);

  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-transparent py-16 sm:py-24 lg:py-28"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 transition-all duration-700 ease-out sm:px-6 lg:px-8 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200/75">
            Servicios
          </p>

          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
            No vendemos una web bonita. Dise&ntilde;amos una web que empuja al
            cliente a avanzar.
          </h2>

          <p className="mt-4 text-pretty text-sm leading-6 text-neutral-300 sm:mt-5 sm:text-lg sm:leading-8">
            Cada entrega combina claridad comercial, sensación premium y foco
            en conversión para que tu página no se quede en presentación.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
          <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.22)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_36px_90px_rgba(0,0,0,0.28)] sm:p-10">
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${featuredService.accent} opacity-100`}
            />
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-white/12" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <featuredService.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-200/75 sm:text-sm">
                    Servicio principal
                  </span>
                </div>

                <h3 className="mt-5 max-w-xl text-2xl font-semibold tracking-[-0.05em] text-white sm:mt-8 sm:text-4xl">
                  {featuredService.title}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-200 sm:mt-5 sm:text-lg sm:leading-8">
                  {featuredService.description}
                </p>
              </div>

              <div className="mt-6 grid gap-3 border-t border-white/10 pt-4 sm:mt-10 sm:gap-4 sm:pt-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 backdrop-blur-sm sm:px-5 sm:py-4">
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-400">
                    Lo que aporta
                  </p>
                  <p className="mt-3 text-base font-medium text-white">
                    {featuredService.stat}
                  </p>
                </div>
                <div className="hidden rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 backdrop-blur-sm sm:block sm:px-5 sm:py-4">
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-400">
                    Enfoque
                  </p>
                  <p className="mt-3 text-base font-medium text-white">
                    Copy, estructura y CTA alineados con negocio.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {secondaryServices.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/8 hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] sm:p-8"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.accent} opacity-100`}
                />

                <div className="relative z-10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/8 text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                    <service.icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-white sm:mt-6 sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 hidden text-base leading-7 text-neutral-300 sm:block">
                    {service.description}
                  </p>

                  <div className="mt-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-medium text-cyan-100/90 sm:mt-6">
                    {service.stat}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 hidden justify-center sm:mt-12 sm:flex">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-lg bg-[linear-gradient(45deg,#a855f7_0%,#4ca1fc_52%,#22c55e_100%)] px-6 py-3 text-sm font-semibold tracking-[0.01em] text-white shadow-[0_10px_28px_rgba(76,161,252,0.22)] transition-all duration-200 ease-out hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(34,197,94,0.18)] active:scale-[0.98]"
          >
            Solicitar propuesta
          </a>
        </div>
      </div>
    </section>
  );
}
