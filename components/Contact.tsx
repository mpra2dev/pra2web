export function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-transparent py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* The panel keeps the CTA concentrated in one premium-looking surface with enough breathing room. */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-10">
          {/* A short, direct header reduces friction and frames the next step clearly. */}
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              Cu&eacute;ntanos tu proyecto
            </h2>
            <p className="mt-4 text-pretty text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
              Te diremos c&oacute;mo convertirlo en clientes. Sin compromiso.
            </p>
          </div>

          {/* Two columns on desktop separate the direct-email shortcut from the form without adding visual noise. */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="hidden flex-col justify-between rounded-2xl border border-white/10 bg-black/20 p-6 sm:flex sm:p-8">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200/75">
                  Contacto directo
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                  &iquest;Prefieres escribir directamente?
                </h3>
                <p className="mt-4 max-w-md text-base leading-7 text-neutral-300">
                  Si ya tienes claro lo que necesitas, puedes escribirnos por
                  email y te responderemos con el siguiente paso.
                </p>
              </div>

              {/* This CTA gives low-friction users a faster route without competing with the main form. */}
              <div className="mt-6 sm:mt-8">
                <a
                  href="mailto:info@pra2dev.com"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,255,255,0.86))] px-6 py-3.5 text-base font-semibold tracking-[0.01em] text-neutral-950 shadow-[0_12px_34px_rgba(255,255,255,0.12)] transition-all duration-200 ease-out hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(255,255,255,0.16)] active:scale-[0.98]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 7.5h16v9A1.5 1.5 0 0 1 18.5 18h-13A1.5 1.5 0 0 1 4 16.5v-9Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m5 8 7 5 7-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Enviar email
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-8">
              {/* The form stays intentionally simple so the user can complete it in a few seconds. */}
              <form className="space-y-5">
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
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-200 placeholder:text-neutral-400 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-400/40"
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
                    placeholder="info@pra2dev.com"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-200 placeholder:text-neutral-400 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-400/40"
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
                    rows={4}
                    placeholder="Que quieres lanzar, mejorar o validar"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-200 placeholder:text-neutral-400 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-400/40"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-[linear-gradient(45deg,#a855f7_0%,#4ca1fc_52%,#22c55e_100%)] px-6 py-3 text-sm font-semibold tracking-[0.01em] text-white shadow-[0_10px_28px_rgba(76,161,252,0.22)] transition-all duration-200 ease-out hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(34,197,94,0.18)] active:scale-[0.98]"
                  >
                    Solicitar propuesta
                  </button>

                  {/* This line lowers perceived effort by setting a concrete response expectation. */}
                  <p className="mt-3 text-center text-sm font-medium text-cyan-200/80">
                    Respuesta en menos de 24h
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
