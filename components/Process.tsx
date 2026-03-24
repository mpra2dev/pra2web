"use client";

import type { SVGProps } from "react";

import { useInView } from "@/hooks/useInView";

function CompassIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m15.5 8.5-2.6 5.1-5.1 2.6 2.6-5.1 5.1-2.6Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LayoutIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="2.5"
        strokeWidth="1.8"
      />
      <path
        d="M9 4v16M9 10h12"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BoltIcon(props: SVGProps<SVGSVGElement>) {
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

function RocketIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M14 4c3.8 0 6 2.2 6 6 0 3.3-2.6 6.7-7.8 10-1 .6-2.2.6-3.2 0C3.8 16.7 1.2 13.3 1.2 10c0-3.8 2.2-6 6-6 2.1 0 3.7.8 4.8 2.3C10.3 4.8 11.9 4 14 4Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8.5h.01"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const steps = [
  {
    number: "01",
    title: "Entendemos tu objetivo",
    description:
      "Aterrizamos tu producto, el tipo de cliente al que vas y la acción que la web debe provocar.",
    icon: CompassIcon,
    accent:
      "from-[rgba(168,85,247,0.22)] via-[rgba(76,161,252,0.12)] to-transparent",
    tag: "Diagnóstico rápido",
    timing: "Día 1",
  },
  {
    number: "02",
    title: "Diseñamos para convertir",
    description:
      "Ordenamos mensaje, jerarquía y llamadas a la acción para que la visita tenga una dirección clara.",
    icon: LayoutIcon,
    accent:
      "from-[rgba(76,161,252,0.22)] via-[rgba(255,255,255,0.08)] to-transparent",
    tag: "Estructura y copy",
    timing: "Día 2",
  },
  {
    number: "03",
    title: "Construimos rápido",
    description:
      "Desarrollo ágil y entregable real, sin cadenas eternas de revisiones ni bloqueos innecesarios.",
    icon: BoltIcon,
    accent:
      "from-[rgba(34,197,94,0.2)] via-[rgba(76,161,252,0.12)] to-transparent",
    tag: "Entrega en días",
    timing: "Días 3-4",
  },
  {
    number: "04",
    title: "Lanzamos y optimizamos",
    description:
      "Publicamos con todo listo para captar clientes y dejamos la base preparada para iterar después.",
    icon: RocketIcon,
    accent:
      "from-[rgba(255,255,255,0.12)] via-[rgba(168,85,247,0.16)] to-transparent",
    tag: "Salida a mercado",
    timing: "Día 5",
  },
];

export function Process() {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px",
  });

  return (
    <section
      id="proceso"
      className="relative overflow-hidden bg-transparent py-16 sm:py-24 lg:py-28"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 transition-all duration-700 ease-out sm:px-6 lg:px-8 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200/75">
            Proceso
          </p>

          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
            De idea a clientes en días
          </h2>

          <p className="mt-5 text-pretty text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
            Un sistema directo para pasar de una necesidad difusa a una landing
            lista para vender, sin fricción innecesaria.
          </p>

          <div className="mt-6 hidden flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-300 backdrop-blur-sm sm:mt-8 sm:inline-flex sm:gap-3">
            <span className="text-cyan-200/85">Timing real:</span>
            <span>estrategia</span>
            <span className="text-white/20">•</span>
            <span>diseño</span>
            <span className="text-white/20">•</span>
            <span>desarrollo</span>
            <span className="text-white/20">•</span>
            <span>lanzamiento en días</span>
          </div>
        </header>

        <div className="relative mt-12 sm:mt-16 lg:mt-20">
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.05),rgba(76,161,252,0.28),rgba(168,85,247,0.24),rgba(34,197,94,0.24),rgba(255,255,255,0.05))] lg:block" />

          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-6">
            {steps.map((step) => (
              <article
                key={step.number}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/8 hover:shadow-[0_22px_48px_rgba(0,0,0,0.2)] sm:p-8"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${step.accent} opacity-100`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                      <step.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <p className="text-5xl font-semibold tracking-[-0.08em] text-white/12 sm:text-6xl">
                      {step.number}
                    </p>
                  </div>

                  <div className="mt-4 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan-200/80 sm:mt-8">
                    {step.tag}
                  </div>

                  <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-neutral-400">
                    {step.timing}
                  </p>

                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.04em] text-white sm:mt-6 sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 hidden text-base leading-7 text-neutral-300 sm:block">
                    {step.description}
                  </p>
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
            Empezar proyecto
          </a>
        </div>
      </div>
    </section>
  );
}
