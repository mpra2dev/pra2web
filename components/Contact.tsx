export function Contact() {
  return (
    <section id="contacto" className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-3xl px-4">
        {/* The panel concentrates the final CTA in a single focused area to reduce friction and keep attention on the form. */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm sm:p-10">
          {/* The header keeps the value proposition short and direct so the action remains the main focus. */}
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
            Empieza a convertir visitas en clientes
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
            Cuentanos tu proyecto y te diremos como enfocarlo para generar
            resultados reales.
          </p>

          <p className="mt-4 text-sm font-medium text-cyan-200/80">
            Respuesta en menos de 24h
          </p>

          {/* The form uses a simple single-column layout so mobile and desktop keep the same low-friction flow. */}
          <form className="mt-10 space-y-5 text-left">
            <div>
              <label
                htmlFor="nombre"
                className="mb-2 block text-sm font-medium text-white"
              >
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-neutral-400 focus:border-cyan-300/40"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-neutral-400 focus:border-cyan-300/40"
              />
            </div>

            <div>
              <label
                htmlFor="proyecto"
                className="mb-2 block text-sm font-medium text-white"
              >
                Proyecto
              </label>
              <textarea
                id="proyecto"
                name="proyecto"
                rows={5}
                placeholder="Que quieres lanzar, mejorar o validar"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-neutral-400 focus:border-cyan-300/40"
              />
            </div>

            {/* The button reuses the navbar treatment so the main conversion action feels consistent across the page. */}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[linear-gradient(45deg,#a855f7_0%,#4ca1fc_52%,#22c55e_100%)] px-5 py-3.5 text-sm font-semibold tracking-[0.01em] text-white shadow-[0_10px_28px_rgba(76,161,252,0.22)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(34,197,94,0.18)] sm:w-auto"
            >
              Solicitar propuesta
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
