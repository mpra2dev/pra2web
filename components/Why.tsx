"use client";

import type { SVGProps } from "react";

import { useInView } from "@/hooks/useInView";

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

function PathIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M4 7h6a3 3 0 1 1 0 6H8a3 3 0 1 0 0 6h12"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m14 5 2 2-2 2M18 17l2 2-2 2"
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

function CubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="m12 3 7 4v10l-7 4-7-4V7l7-4Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m19 7-7 4-7-4M12 11v10"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const reasons = [
  {
    title: "Velocidad real",
    icon: BoltIcon,
    description:
      "Tu landing lista en días, no en meses. Reducimos fricción, cerramos decisiones rápido y priorizamos salir antes al mercado.",
    tag: "Entrega rápida",
    accent:
      "from-[rgba(76,161,252,0.22)] via-[rgba(255,255,255,0.08)] to-transparent",
  },
  {
    title: "Enfoque en conversión",
    icon: PathIcon,
    description:
      "Cada sección existe para mover al usuario a la siguiente acción. Ordenamos el mensaje para que la visita avance y convierta.",
    tag: "Mensaje con dirección",
    accent:
      "from-[rgba(168,85,247,0.22)] via-[rgba(76,161,252,0.14)] to-transparent",
  },
  {
    title: "Pensado para subvenciones",
    icon: ShieldIcon,
    description:
      "Entendemos lo que necesita un proyecto financiado: velocidad, buena presentación y una web que tenga sentido también para negocio.",
    tag: "Contexto real",
    accent:
      "from-[rgba(34,197,94,0.2)] via-[rgba(76,161,252,0.12)] to-transparent",
  },
  {
    title: "Mentalidad de producto",
    icon: CubeIcon,
    description:
      "No entregamos una web para dejarla ahí. Construimos una herramienta comercial lista para apoyar ventas, validación y crecimiento.",
    tag: "Pensado para iterar",
    accent:
      "from-[rgba(255,255,255,0.12)] via-[rgba(168,85,247,0.16)] to-transparent",
  },
];

export function Why() {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px",
  });

  const featuredReasons = reasons.slice(0, 2);
  const secondaryReasons = reasons.slice(2);

  return (
    <section
      id="porque"
      className="relative overflow-hidden bg-transparent py-16 sm:py-24 lg:py-28"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 transition-all duration-700 ease-out sm:px-6 lg:px-8 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-10">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.22)] sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(76,161,252,0.18),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.16),transparent_34%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.12),transparent_36%)]" />
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-white/12" />

            <div className="relative z-10">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200/75">
                Diferencia
              </p>

              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                &iquest;Por qu&eacute; pra2dev?
              </h2>

              <p className="mt-4 text-pretty text-sm leading-6 text-neutral-200 sm:mt-5 sm:text-lg sm:leading-8">
                Porque no hacemos webs para rellenar presencia digital.
                Construimos una herramienta comercial con claridad, velocidad y
                una ejecución que se nota desde el primer scroll.
              </p>

              <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 backdrop-blur-sm sm:px-5 sm:py-4">
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-400">
                    Lo que cambia
                  </p>
                  <p className="mt-3 text-base font-medium text-white">
                    Menos ruido, más dirección y mejor conversión.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 backdrop-blur-sm sm:px-5 sm:py-4">
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-400">
                    En la práctica
                  </p>
                  <p className="mt-3 text-base font-medium text-white">
                    Una web lista para vender, no solo para verse bien.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
            {featuredReasons.map((reason) => (
              <article
                key={reason.title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/8 hover:shadow-[0_22px_48px_rgba(0,0,0,0.2)] sm:p-8"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${reason.accent} opacity-100`}
                />

                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <reason.icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <div className="mt-4 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan-200/80 sm:mt-6">
                    {reason.tag}
                  </div>

                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.04em] text-white sm:mt-6 sm:text-2xl">
                    {reason.title}
                  </h3>

                  <p className="mt-3 hidden text-base leading-7 text-neutral-300 sm:block">
                    {reason.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 hidden grid-cols-1 gap-4 sm:mt-8 sm:grid sm:gap-6 sm:grid-cols-2">
          {secondaryReasons.map((reason) => (
            <article
              key={reason.title}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/8 hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] sm:p-8"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${reason.accent} opacity-100`}
              />

              <div className="relative z-10 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <reason.icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <div>
                  <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan-200/80">
                    {reason.tag}
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {reason.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-neutral-300">
                    {reason.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
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
