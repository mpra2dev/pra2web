import type { Metadata } from "next";
import Link from "next/link";

import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nexum Industries",
  description:
    "Caso de estudio de una landing orientada a conversión para una empresa de mantenimiento y fabricación industrial.",
  alternates: {
    canonical: "/clientes/nexum-industries",
  },
};

const metrics = [
  {
    value: "+38%",
    label: "Incremento en solicitudes de contacto",
  },
  {
    value: "+2.5x",
    label: "Tiempo medio en página",
  },
];

const results = [
  "Mayor claridad en los servicios",
  "Incremento en solicitudes de presupuesto",
  "Reducción de fricción en el contacto",
];

const approach = [
  "Simplificación del mensaje",
  "Estructura orientada a conversión",
  "Jerarquía visual clara",
];

const landingHref = "/nexum-industries";

export default function NexumIndustriesPage() {
  return (
    <main className="min-h-screen bg-[#060b11] text-white">
      <div className="relative isolate min-h-screen overflow-hidden">
        <style>{`
          @keyframes case-study-glow {
            0% {
              transform: translate3d(-1.5%, -1%, 0) scale(1);
            }
            100% {
              transform: translate3d(1.5%, 1%, 0) scale(1.04);
            }
          }
        `}</style>

        {/* Base visual compartida para mantener coherencia con el resto de la web. */}
        <div className="absolute inset-0 -z-40 bg-[linear-gradient(180deg,#060b11_0%,#071018_34%,#08111a_64%,#060a10_100%)]" />

        {/* Velo ambiental suave para que la página no quede plana, sin competir con el contenido. */}
        <div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 32%), linear-gradient(315deg, rgba(76,161,252,0.04) 0%, transparent 34%), linear-gradient(40deg, rgba(34,197,94,0.03) 0%, transparent 28%)",
            animation: "case-study-glow 18s ease-in-out infinite alternate",
          }}
        />

        {/* Brillos localizados para dar profundidad a los paneles oscuros. */}
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_12%,rgba(76,161,252,0.09),transparent_26%),radial-gradient(circle_at_82%_8%,rgba(168,85,247,0.08),transparent_22%),radial-gradient(circle_at_50%_88%,rgba(34,197,94,0.06),transparent_26%)]" />

        <Navbar />

        <section className="px-4 pb-24 pt-14 sm:px-6 sm:pt-20 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-16">
            <Link
              href="/#clientes"
              className="inline-flex items-center text-sm font-medium text-neutral-400 transition-colors duration-200 hover:text-white"
            >
              Volver a clientes
            </Link>

            {/* Hero centrado y despejado para que la propuesta se entienda al primer vistazo. */}
            <header className="mx-auto max-w-3xl py-24 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200/75">
                Caso de cliente
              </p>

              <h1 className="mt-6 text-balance text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl">
                Nexum Industries
              </h1>

              <p className="mt-5 text-xl text-neutral-300 sm:text-2xl">
                Mantenimiento y fabricación industrial
              </p>

              <p className="mt-8 text-balance text-lg leading-8 text-neutral-400 sm:text-xl">
                Una landing clara y directa para convertir visitas en solicitudes de trabajo
              </p>
            </header>

            {/* Bloque de métricas con protagonismo visual para fijar credibilidad rápido. */}
            <section className="grid gap-6 sm:grid-cols-2">
              {metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] px-8 py-10 text-center shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm"
                >
                  <p className="bg-[linear-gradient(45deg,#a855f7_0%,#4ca1fc_52%,#22c55e_100%)] bg-clip-text text-5xl font-semibold tracking-[-0.08em] text-transparent sm:text-6xl">
                    {metric.value}
                  </p>
                  <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">
                    {metric.label}
                  </p>
                </article>
              ))}
            </section>

            {/* Contenido principal dividido en bloques cortos y fáciles de escanear. */}
            <div className="space-y-16">
              <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-10">
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  El punto de partida
                </h2>
                <p className="mt-5 text-base leading-8 text-neutral-300 sm:text-lg">
                  La empresa contaba con presencia online, pero la información estaba
                  desorganizada y no transmitía claramente sus servicios. Esto generaba
                  fricción y pérdida de oportunidades comerciales.
                </p>
              </section>

              <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-10">
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  Qué hicimos
                </h2>
                <p className="mt-5 text-base leading-8 text-neutral-300 sm:text-lg">
                  Se diseñó una landing enfocada en mostrar de forma clara los servicios de
                  mantenimiento y fabricación, estructurando la información para que cualquier
                  visitante entendiera rápidamente qué ofrece la empresa y cómo contactar.
                </p>
              </section>

              <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-10">
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  Resultados
                </h2>
                <ul className="mt-6 grid gap-4">
                  {results.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-base leading-7 text-neutral-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* El testimonio rompe el ritmo de paneles y funciona como prueba social. */}
              <section className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 text-center shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-12">
                <blockquote className="mx-auto max-w-3xl text-balance text-xl leading-9 text-neutral-200 italic sm:text-2xl">
                  &ldquo;Ahora los clientes entienden exactamente lo que ofrecemos desde el
                  primer momento. Hemos notado un aumento claro en solicitudes.&rdquo;
                </blockquote>
                <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-cyan-200/75">
                  Equipo Nexum Industries
                </p>
              </section>

              <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-10">
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  Enfoque aplicado
                </h2>
                <ul className="mt-6 grid gap-4">
                  {approach.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-base leading-7 text-neutral-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Este bloque conecta el caso de estudio con la demo navegable del cliente. */}
              <section className="rounded-[1.75rem] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(76,161,252,0.10),rgba(255,255,255,0.03))] p-8 text-center shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-10">
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  Ver la landing de Nexum
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
                  Accede a la propuesta web desarrollada para presentar los servicios de
                  mantenimiento y fabricación industrial con un enfoque más claro y comercial.
                </p>

                <Link
                  href={landingHref}
                  className="mt-8 inline-flex items-center justify-center rounded-lg border border-white/12 bg-white/6 px-6 py-3.5 text-sm font-semibold tracking-[0.01em] text-white transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 active:scale-[0.98]"
                >
                  Entrar en la landing
                </Link>
              </section>
            </div>

            {/* CTA final enlazado al bloque de contacto principal del sitio. */}
            <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-8 py-12 text-center shadow-[0_28px_70px_rgba(0,0,0,0.22)] sm:px-12">
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                ¿Quieres algo así para tu empresa?
              </h2>

              <Link
                href="/#contacto"
                className="mt-8 inline-flex items-center justify-center rounded-lg bg-[linear-gradient(45deg,#a855f7_0%,#4ca1fc_52%,#22c55e_100%)] px-6 py-3.5 text-sm font-semibold tracking-[0.01em] text-white shadow-[0_10px_28px_rgba(76,161,252,0.22)] transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-[0_16px_36px_rgba(34,197,94,0.18)] active:scale-[0.98]"
              >
                Solicitar propuesta
              </Link>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
