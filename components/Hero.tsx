export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-24 sm:px-6 sm:pb-32 sm:pt-28 lg:px-8 lg:pt-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_38%),radial-gradient(circle_at_18%_20%,rgba(99,102,241,0.14),transparent_26%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.07),transparent_24%)]" />
      <div className="absolute left-1/2 top-20 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute right-[12%] top-28 -z-10 h-40 w-40 rounded-full bg-indigo-400/10 blur-3xl" />

      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <p className="max-w-3xl text-sm font-medium tracking-[0.18em] text-cyan-200/80 uppercase">
          Para startups, SaaS y proyectos con subvencion
        </p>

        <h1 className="mt-6 max-w-5xl text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl lg:leading-[1.02]">
          Landing pages que convierten visitas en{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
            clientes
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-pretty text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
          Ayudamos a startups y proyectos financiados a generar clientes reales
          con webs disenadas para vender.
        </p>

        <p className="mt-4 text-sm font-medium text-neutral-400 sm:text-base">
          Entrega en dias, no en meses.
        </p>

        <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:mt-12 sm:flex-row sm:justify-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full border border-cyan-300/20 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 shadow-[0_12px_34px_rgba(255,255,255,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-50 hover:shadow-[0_18px_40px_rgba(125,211,252,0.2)]"
          >
            Habla con nosotros
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/4 px-6 py-3.5 text-sm font-semibold text-white/90 transition-all duration-200 hover:border-white/20 hover:bg-white/8 hover:text-white"
          >
            Ver nuestro trabajo
          </a>
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-6 text-neutral-500 sm:text-base">
          Optimizadas para captar interes, filtrar leads y acelerar decisiones
          desde la primera visita.
        </p>
      </div>
    </section>
  );
}
