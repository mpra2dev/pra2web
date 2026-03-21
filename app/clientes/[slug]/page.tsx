import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Navbar } from "@/components/Navbar";
import { clients } from "@/components/client-data";

type ClientPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return clients.map((client) => ({
    slug: client.slug,
  }));
}

export default async function ClientPage({ params }: ClientPageProps) {
  const { slug } = await params;
  const client = clients.find((entry) => entry.slug === slug);

  if (!client) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="relative isolate min-h-screen overflow-hidden">
        <style>{`
          @keyframes hero-grid-move {
            0% {
              background-position:
                0px 0px,
                0px 0px;
            }
            100% {
              background-position:
                60px 60px,
                60px 60px;
            }
          }
        `}</style>

        {/* Dark base anchors the page and matches the hero surface on home. */}
        <div className="absolute inset-0 -z-40 bg-neutral-950" />

        {/* The moving grid mirrors the home hero so the case-study pages feel part of the same visual system. */}
        <div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            animation: "hero-grid-move 12s linear infinite",
          }}
        />

        {/* Brand glows reuse the same palette distribution as the hero for a consistent animated backdrop. */}
        <div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(76,161,252,0.12), transparent 60%), radial-gradient(circle at 70% 0%, rgba(192,38,211,0.1), transparent 60%), radial-gradient(circle at 50% 80%, rgba(34,197,94,0.08), transparent 60%)",
          }}
        />

        {/* The same center fade keeps content readable and prevents the motion from taking over. */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),rgba(255,255,255,0.015)_28%,rgba(10,10,10,0.12)_60%,rgba(10,10,10,0.38)_84%)]" />

        <Navbar />
        <section className="px-4 pb-24 pt-14 sm:px-6 sm:pt-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/#clientes"
              className="inline-flex items-center text-sm font-medium text-neutral-400 transition-colors duration-200 hover:text-white"
            >
              Volver a clientes
            </Link>

            {/* The hero uses a stronger visual composition with layered light, a framed logo, and a dedicated highlight band for the main result. */}
            <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-8 py-14 text-center shadow-[0_30px_80px_rgba(0,0,0,0.28)] sm:px-14 sm:py-20">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_20%_20%,rgba(76,161,252,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(192,38,211,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(34,197,94,0.10),transparent_34%)]" />
              <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-white/10" />

              <div className="relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
                {/* The left column anchors the brand with a larger logo, client name, and type so the identity reads first. */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="flex min-h-36 items-center justify-center rounded-2xl border border-white/10 bg-white/6 px-10 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:min-h-44 sm:px-12 sm:py-10">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={320}
                      height={128}
                      className="h-24 w-auto object-contain opacity-95 sm:h-28 lg:h-32"
                    />
                  </div>

                  <p className="mt-8 text-sm font-medium uppercase tracking-[0.18em] text-cyan-200/75">
                    Caso de cliente
                  </p>

                  <h1 className="mt-5 text-balance text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl lg:text-[4.5rem] lg:leading-[0.95]">
                    {client.name}
                  </h1>

                  <p className="mt-5 max-w-md text-lg text-neutral-400 sm:text-xl">
                    {client.type}
                  </p>
                </div>

                {/* The right column holds the value proposition and result so the hero feels more editorial and conversion-oriented. */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <p className="max-w-2xl text-balance text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl lg:text-[2.2rem] lg:leading-[1.18]">
                    {client.heroSummary}
                  </p>

                  <div className="mt-8 w-full max-w-2xl rounded-2xl border border-white/10 bg-black/20 px-6 py-5 backdrop-blur-sm">
                    <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-400">
                      Resultado destacado
                    </p>
                    <p className="mt-3 bg-gradient-to-r from-purple-400 via-[#4ca1fc] to-green-400 bg-clip-text text-xl font-semibold tracking-[-0.03em] text-transparent sm:text-2xl">
                      {client.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* This metric block gives the page an immediate visual proof point before the explanatory content begins. */}
            <section className="mt-10 text-center">
              <p className="bg-gradient-to-r from-purple-400 via-[#4ca1fc] to-green-400 bg-clip-text text-6xl font-semibold tracking-[-0.08em] text-transparent sm:text-7xl">
                {client.metricValue}
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">
                {client.metricLabel}
              </p>
            </section>

            {/* The content is divided into three clear sections so the page reads like a concise, useful case study instead of a long sales wall. */}
            <div className="mt-14 space-y-8">
              <section className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:p-10">
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  El punto de partida
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">
                  {client.description}
                </p>
              </section>

              <section className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:p-10">
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  Que hicimos
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">
                  {client.work}
                </p>
              </section>

              <section className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:p-10">
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  Resultados
                </h2>

                <ul className="mt-6 space-y-4">
                  {client.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="rounded-xl border border-white/10 bg-white/4 px-5 py-4 text-base leading-7 text-neutral-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                    >
                      {outcome}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* A centered testimonial adds social proof without turning the page into a noisy case-study layout. */}
            <section className="mx-auto mt-14 max-w-2xl text-center">
              <blockquote className="text-balance text-xl leading-9 text-neutral-200 italic sm:text-2xl">
                &ldquo;{client.testimonialQuote}&rdquo;
              </blockquote>
              <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-cyan-200/75">
                {client.testimonialAuthor}
              </p>
            </section>

            {/* The external link sits on its own so users can inspect the real site without competing with the main CTA. */}
            <div className="mt-10 flex justify-center">
              <a
                href={client.siteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/12 bg-white/4 px-5 py-3 text-sm font-semibold tracking-[0.01em] text-white/90 transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/8 hover:text-white active:scale-[0.98]"
              >
                Ver sitio web
              </a>
            </div>

            {/* The final CTA keeps the page conversion-focused and routes the user back to the main landing action. */}
            <section className="mt-14 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 text-center sm:p-10">
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                ¿Quieres algo asi para tu proyecto?
              </h2>

              <Link
                href="/#contacto"
                className="mt-8 inline-flex items-center justify-center rounded-lg bg-[linear-gradient(45deg,#a855f7_0%,#4ca1fc_52%,#22c55e_100%)] px-5 py-3 text-sm font-semibold tracking-[0.01em] text-white shadow-[0_10px_28px_rgba(76,161,252,0.22)] transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-[0_16px_36px_rgba(34,197,94,0.18)] active:scale-[0.98]"
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
