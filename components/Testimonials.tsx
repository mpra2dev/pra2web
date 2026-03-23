"use client";

import Link from "next/link";

import { clients } from "@/components/client-data";
import { useInView } from "@/hooks/useInView";

const castroClient = clients.find(
  (client) => client.name === "Administradores de Fincas Castro",
);

const testimonials = [
  {
    quote:
      "En menos de una semana teniamos la landing lista y empezamos a recibir leads.",
    author: "Startup SaaS",
  },
  {
    quote:
      castroClient?.testimonialQuote ??
      "El objetivo es salir con una web que no solo se vea bien, sino que ayude de verdad a captar clientes.",
    author: castroClient?.name ?? "Administradores de Fincas Castro",
    href: castroClient ? `/clientes/${castroClient.slug}` : undefined,
  },
  {
    quote:
      "Rapido, claro y enfocado a resultados desde el primer momento.",
    author: "Founder",
  },
];

const metrics = ["+10 proyectos", "Entregas en dias", "Foco en conversion"];

export function Testimonials() {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px",
  });

  return (
    <section
      id="clientes"
      className="relative overflow-hidden bg-neutral-950 py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(76,161,252,0.06),transparent_24%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.05),transparent_30%)]" />

      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 transition-all duration-700 ease-out sm:px-6 lg:px-8 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }`}
      >
        {/* The header frames the section around outcomes so the testimonials reinforce business value instead of reading as generic praise. */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
            Proyectos que ya estan generando resultados
          </h2>

          <p className="mt-5 text-pretty text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
            No hacemos webs para que estén Online, las hacemos para que sean una herramienta principal dentro de tu negocio.
          </p>
        </div>

        {/* The grid stays single-column on mobile for readability and expands to three columns on desktop to create a solid social-proof block. */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.author}
              className="rounded-xl border border-white/10 bg-white/5 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/8"
            >
              {testimonial.href ? (
                <Link href={testimonial.href} className="block">
                  {/* Each testimonial keeps the quote dominant and the author secondary so scanning stays fast and credible. */}
                  <p className="text-lg leading-8 text-white sm:text-[1.15rem]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <p className="mt-6 text-sm font-medium tracking-[0.08em] text-cyan-200/80 uppercase">
                    {testimonial.author}
                  </p>
                </Link>
              ) : (
                <>
                  {/* Each testimonial keeps the quote dominant and the author secondary so scanning stays fast and credible. */}
                  <p className="text-lg leading-8 text-white sm:text-[1.15rem]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <p className="mt-6 text-sm font-medium tracking-[0.08em] text-cyan-200/80 uppercase">
                    {testimonial.author}
                  </p>
                </>
              )}
            </article>
          ))}
        </div>

        {/* This compact metrics line adds extra proof without introducing another heavy content block. */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-neutral-400">
          {metrics.map((metric) => (
            <span key={metric}>{metric}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
