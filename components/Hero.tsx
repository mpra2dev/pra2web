"use client";

import { useInView } from "@/hooks/useInView";

export function Hero() {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.08,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 px-4 pb-20 pt-1 sm:px-6 sm:pb-28 sm:pt-2 lg:px-8 lg:pt-2">
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

      {/* Dark base anchors the hero and preserves contrast for the content. */}
      <div className="absolute inset-0 z-0 bg-neutral-950" />

      {/* Technical grid keeps the same subtle drift, but at 12s so the motion feels a bit more present without becoming obvious. */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "hero-grid-move 12s linear infinite",
        }}
      />

      {/* Brand color layer adds atmosphere with low-opacity blue, purple, and green glows. */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(76,161,252,0.12), transparent 60%), radial-gradient(circle at 70% 0%, rgba(192,38,211,0.1), transparent 60%), radial-gradient(circle at 50% 80%, rgba(34,197,94,0.08), transparent 60%)",
        }}
      />

      {/* Soft center fade keeps the headline readable and stops the background from taking over. */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),rgba(255,255,255,0.015)_28%,rgba(10,10,10,0.12)_60%,rgba(10,10,10,0.38)_84%)]" />

      <div
        ref={ref}
        className={`relative z-10 mx-auto grid max-w-6xl items-center gap-10 transition-all duration-700 ease-out lg:min-h-[calc(100svh-3.75rem)] lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        {/* The full hero content lifts in once so the first screen feels polished without adding busy motion. */}
        {/* The content column leads the layout and keeps the headline as the dominant visual anchor. */}
        <div className="order-1 flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Small framing copy adds context without competing with the main hook. */}
          <p className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-cyan-100/85 uppercase backdrop-blur-sm sm:text-sm">
            Para startups, SaaS y proyectos financiados
          </p>

          {/* The headline stays mostly white; only the key conversion words get the brand gradient for emphasis. */}
          <h1 className="mt-8 max-w-5xl text-balance text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl lg:leading-[0.94] xl:text-8xl">
            <span className="block">
              Est&aacute;s perdiendo{" "}
              {/* Inline-block plus a tiny padding buffer gives bg-clip-text enough paint area to avoid trimming glyph edges. */}
              <span className="inline-block bg-gradient-to-r from-purple-400 via-[#4ca1fc] to-green-400 bg-clip-text px-[3px] pb-[0.08em] text-transparent">
                clientes
              </span>{" "}
              por no tener{" "}
              {/* Apply the same clipping safeguard here so the treatment stays visually identical across both keywords. */}
              <span className="inline-block bg-gradient-to-r from-purple-400 via-[#4ca1fc] to-green-400 bg-clip-text px-[3px] pb-[0.08em] text-transparent">
                web
              </span>
            </span>
            <span className="mt-3 block text-3xl font-medium tracking-[-0.04em] text-white/75 sm:text-4xl lg:text-5xl">
              (o por su dise&ntilde;o).
            </span>
          </h1>

          {/* Supporting copy explains the tension: traffic and budget exist, but conversion does not. */}
          <p className="mt-8 max-w-3xl text-pretty text-lg leading-8 text-neutral-300 sm:text-xl sm:leading-9">
            Tienes tr&aacute;fico. Tienes presupuesto. Pero tu web no est&aacute;
            dise&ntilde;ada para convertir.
          </p>

          {/* Short contrast line works as the punchline and reinforces positioning. */}
          <p className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-cyan-200 sm:text-3xl">
            Nosotros s&iacute;.
          </p>

          {/* Buttons stay grouped under the message so the next step remains obvious. */}
          <div className="mt-12 flex w-full max-w-md flex-col gap-4 sm:mt-14 sm:flex-row lg:max-w-none lg:justify-start">
            <a
              href="#contacto"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-cyan-300/20 bg-white px-7 py-4 text-sm font-semibold text-neutral-950 shadow-[0_12px_34px_rgba(255,255,255,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-50 hover:shadow-[0_18px_40px_rgba(125,211,252,0.2)]"
            >
              Habla con nosotros
            </a>
            <a
              href="#proceso"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/12 bg-white/4 px-7 py-4 text-sm font-semibold text-white/90 transition-all duration-200 hover:border-white/20 hover:bg-white/8 hover:text-white"
            >
              Ver c&oacute;mo lo hacemos
            </a>
          </div>
        </div>

        {/* Cards shift to the right and become more compact so they support, not compete. */}
        <div className="order-2 mx-auto grid w-full max-w-sm grid-cols-1 gap-3 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-1 lg:justify-self-end">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
            <p className="text-sm font-semibold tracking-[0.12em] text-cyan-200/80 uppercase">
              Problema real
            </p>
            <p className="mt-2 text-sm leading-6 text-neutral-200">
              No basta con estar online si la web no mueve al usuario a actuar.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
            <p className="text-sm font-semibold tracking-[0.12em] text-cyan-200/80 uppercase">
              Enfoque
            </p>
            <p className="mt-2 text-sm leading-6 text-neutral-200">
              Dise&ntilde;amos p&aacute;ginas para captar atenci&oacute;n, filtrar y cerrar oportunidades.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
            <p className="text-sm font-semibold tracking-[0.12em] text-cyan-200/80 uppercase">
              Velocidad
            </p>
            <p className="mt-2 text-sm leading-6 text-neutral-200">
              Ejecutamos en d&iacute;as para que el negocio no espere meses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
