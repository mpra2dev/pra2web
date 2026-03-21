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
      "Tu landing lista en dias, no en meses. Reducimos friccion, cerramos decisiones rapido y priorizamos salir antes al mercado.",
    tag: "Entrega rapida",
    accent:
      "from-[rgba(76,161,252,0.22)] via-[rgba(255,255,255,0.08)] to-transparent",
  },
  {
    title: "Enfoque en conversion",
    icon: PathIcon,
    description:
      "Cada seccion existe para mover al usuario a la siguiente accion. Ordenamos el mensaje para que la visita avance y convierta.",
    tag: "Mensaje con direccion",
    accent:
      "from-[rgba(168,85,247,0.22)] via-[rgba(76,161,252,0.14)] to-transparent",
  },
  {
    title: "Pensado para subvenciones",
    icon: ShieldIcon,
    description:
      "Entendemos lo que necesita un proyecto financiado: velocidad, buena presentacion y una web que tenga sentido tambien para negocio.",
    tag: "Contexto real",
    accent:
      "from-[rgba(34,197,94,0.2)] via-[rgba(76,161,252,0.12)] to-transparent",
  },
  {
    title: "Mentalidad de producto",
    icon: CubeIcon,
    description:
      "No entregamos una web para dejarla ahi. Construimos una herramienta comercial lista para apoyar ventas, validacion y crecimiento.",
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
      className="relative overflow-hidden bg-neutral-950 py-24 sm:py-28"
    >
      {/* Richer ambient layers make this section feel like a key trust block instead of a plain feature list. */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(76,161,252,0.1),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(168,85,247,0.1),transparent_24%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.08),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-36 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),transparent)]" />

      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 transition-all duration-700 ease-out sm:px-6 lg:px-8 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-10">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.22)] sm:p-10">
            {/* This panel establishes the positioning before the detailed reasons, giving the section a clear focal point. */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(76,161,252,0.18),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.16),transparent_34%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.12),transparent_36%)]" />
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-white/12" />

            <div className="relative z-10">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200/75">
                Diferencia
              </p>

              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                &iquest;Por qu&eacute; pra2dev?
              </h2>

              <p className="mt-5 text-pretty text-base leading-8 text-neutral-200 sm:text-lg">
                Porque no hacemos webs para rellenar presencia digital.
                Construimos una herramienta comercial con claridad, velocidad y
                una ejecucion que se nota desde el primer scroll.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 backdrop-blur-sm">
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-400">
                    Lo que cambia
                  </p>
                  <p className="mt-3 text-base font-medium text-white">
                    Menos ruido, mas direccion y mejor conversion.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 backdrop-blur-sm">
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-400">
                    En la practica
                  </p>
                  <p className="mt-3 text-base font-medium text-white">
                    Una web lista para vender, no solo para verse bien.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {featuredReasons.map((reason) => (
              <article
                key={reason.title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/8 hover:shadow-[0_22px_48px_rgba(0,0,0,0.2)]"
              >
                {/* Featured reasons get a little more visual weight because they carry the strongest differentiators. */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${reason.accent} opacity-100`}
                />

                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <reason.icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <div className="mt-6 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan-200/80">
                    {reason.tag}
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {reason.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-neutral-300">
                    {reason.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {secondaryReasons.map((reason) => (
            <article
              key={reason.title}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/8 hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)]"
            >
              {/* The lower row stays slightly calmer so the hierarchy remains clear across the whole section. */}
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

        <div className="mt-12 flex justify-center">
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
