export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 px-4 pb-20 pt-1 sm:px-6 sm:pb-28 sm:pt-2 lg:px-8 lg:pt-2">
      {/* Dark base keeps the hero grounded and avoids decorative noise. */}
      <div className="absolute inset-0 z-0 bg-neutral-950" />

      {/* Technical grid stays subtle, but with enough contrast to read as a blueprint layer. */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Radial fade preserves focus in the center while keeping the grid visible across the hero. */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.09),rgba(255,255,255,0.03)_30%,rgba(10,10,10,0.1)_62%,rgba(10,10,10,0.34)_82%)]" />

      {/* Corner glow adds a visible but restrained product accent. */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_82%_18%,rgba(76,161,252,0.14),rgba(147,51,234,0.08),transparent_46%)]" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:min-h-[calc(100svh-3.75rem)] lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        {/* The content column leads the layout and keeps the headline as the dominant visual anchor. */}
        <div className="order-1 flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Small framing copy adds context without competing with the main hook. */}
          <p className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-cyan-100/85 uppercase backdrop-blur-sm sm:text-sm">
            Para startups, SaaS y proyectos financiados
          </p>

          {/* The headline is intentionally blunt so the problem is understood in the first scan. */}
          <h1 className="mt-8 max-w-5xl text-balance text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl lg:leading-[0.94] xl:text-8xl">
            <span className="block">
              Est&aacute;s perdiendo clientes por no tener web
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
