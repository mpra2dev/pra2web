const steps = [
  {
    number: "01",
    title: "Entendemos tu objetivo",
    description:
      "Aterrizamos tu propuesta, el tipo de cliente que quieres atraer y la accion que debe generar la landing.",
  },
  {
    number: "02",
    title: "Disenamos para convertir",
    description:
      "Definimos estructura, mensaje y jerarquia visual para que cada seccion empuje al usuario a avanzar.",
  },
  {
    number: "03",
    title: "Construimos rapido",
    description:
      "Desarrollamos la pagina con foco en velocidad, claridad y una entrega agil para salir pronto al mercado.",
  },
  {
    number: "04",
    title: "Lanzamos y optimizamos",
    description:
      "Publicamos, revisamos el resultado y ajustamos los puntos clave para mejorar respuesta y conversion.",
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="relative overflow-hidden bg-neutral-950 py-24 sm:py-28"
    >
      {/* A very light ambient layer keeps the section connected to the rest of the page without adding heavy card backgrounds. */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(76,161,252,0.07),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.05),transparent_24%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* The header states the promise first, then clarifies that the workflow is intentionally simple. */}
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200/75">
            Proceso
          </p>

          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            De idea a clientes en d&iacute;as
          </h2>

          <p className="mt-5 text-pretty text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
            Un proceso simple, r&aacute;pido y enfocado a resultados.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {steps.map((step) => (
            <article key={step.number} className="relative">
              {/* The oversized number gives each step a clear anchor without needing heavier containers. */}
              <p className="text-5xl font-semibold tracking-[-0.08em] text-white/12 sm:text-6xl">
                {step.number}
              </p>

              <div className="mt-5 border-t border-white/10 pt-5">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-sm text-base leading-7 text-neutral-300">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
