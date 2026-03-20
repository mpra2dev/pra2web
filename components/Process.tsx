const steps = [
  {
    number: "01",
    title: "Entendemos tu objetivo",
    description:
      "Analizamos tu producto, tu publico y que necesitas conseguir",
  },
  {
    number: "02",
    title: "Disenamos para convertir",
    description:
      "Estructuramos la landing enfocada a generar clientes desde la primera visita",
  },
  {
    number: "03",
    title: "Construimos rapido",
    description: "Desarrollo agil, sin procesos eternos ni bloqueos",
  },
  {
    number: "04",
    title: "Lanzamos y optimizamos",
    description: "Tu web lista para captar clientes en dias, no meses",
  },
];

export function Process() {
  return (
    <section id="proceso" className="relative overflow-hidden bg-neutral-950 py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(76,161,252,0.06),transparent_24%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
            De idea a clientes en dias
          </h2>

          <p className="mt-5 text-pretty text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8">
            Un proceso simple, rapido y enfocado a resultados
          </p>
        </header>

        {/* Layout: stack vertical on mobile and switch to a horizontal flex flow on desktop for a cleaner SaaS-style process. */}
        <div className="relative mt-16 flex flex-col gap-10 lg:mt-20 lg:flex-row lg:gap-8">
          {/* Connection line: only visible on desktop and placed absolutely behind the items so the four steps feel part of one flow. */}
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-white/10 lg:block" />

          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative flex-1 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Responsive: each item keeps generous vertical spacing on mobile, while desktop relies on equal-width columns for precise alignment. */}
              <div className="relative w-full">
                <p className="text-5xl font-semibold tracking-[-0.08em] text-neutral-700 sm:text-6xl">
                  {step.number}
                </p>

                <div className="mt-6 max-w-xs">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-neutral-400">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
