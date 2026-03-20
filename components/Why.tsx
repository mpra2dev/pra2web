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
      "Tu landing lista en dias, no en meses. Reducimos friccion, ejecutamos rapido y priorizamos salir antes al mercado para empezar a captar oportunidades cuanto antes.",
  },
  {
    title: "Enfoque en conversion",
    icon: PathIcon,
    description:
      "Cada seccion esta pensada para guiar al usuario hacia una accion concreta. No decoramos pantallas: ordenamos el mensaje para que la visita avance y convierta.",
  },
  {
    title: "Pensado para subvenciones",
    icon: ShieldIcon,
    description:
      "Entendemos como funcionan estos procesos y lo que necesita un proyecto financiado: velocidad, claridad, buena presentacion y una web que tenga sentido tambien para negocio.",
  },
  {
    title: "Mentalidad de producto",
    icon: CubeIcon,
    description:
      "No entregamos una web para dejarla ahi. Construimos una herramienta comercial que debe ayudar a validar propuesta, generar confianza y abrir conversaciones de venta.",
  },
];

export function Why() {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px",
  });

  return (
    <section
      id="porque"
      className="relative overflow-hidden bg-neutral-950 py-24 sm:py-28"
    >
      {/* Subtle ambient gradients keep the section visually connected to the hero without stealing attention from the content. */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(76,161,252,0.08),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.08),transparent_26%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.06),transparent_34%)]" />

      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 transition-all duration-700 ease-out sm:px-6 lg:px-8 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }`}
      >
        {/* This single wrapper keeps the section reveal smooth and consistent with the rest of the page. */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Compact section framing introduces the argument before the cards do the detailed persuasion work. */}
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200/75">
            Diferencia
          </p>

          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            &iquest;Por qu&eacute; pra2dev?
          </h2>

          <p className="mt-5 text-pretty text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
            Porque no hacemos webs. Construimos herramientas para generar
            clientes.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/8 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:p-10"
            >
              {/* The icon sits in a restrained badge so it supports recognition without overpowering the copy. */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/6 text-cyan-200/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <reason.icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <div>
              {/* Each card is intentionally brief so the section stays scannable while still building trust through specificity. */}
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">
                    {reason.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
                    {reason.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          {/* Reusing the main gradient CTA keeps the conversion path consistent across the landing. */}
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
