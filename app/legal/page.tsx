import { Navbar } from "@/components/Navbar";

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="relative isolate min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-30 bg-neutral-950" />

        {/* Reusing the subtle grid keeps the legal page visually aligned with the rest of the product pages. */}
        <div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(76,161,252,0.12), transparent 60%), radial-gradient(circle at 80% 0%, rgba(192,38,211,0.10), transparent 60%), radial-gradient(circle at 50% 100%, rgba(34,197,94,0.08), transparent 60%)",
          }}
        />

        <Navbar />

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* The intro keeps the legal content framed and readable instead of presenting a plain wall of text. */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200/75">
                Informacion legal
              </p>

              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                Aviso legal
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
                En esta pagina puedes consultar la informacion legal basica
                sobre la titularidad del sitio, sus condiciones de uso y el
                marco de responsabilidad aplicable a pra2dev.
              </p>
            </div>

            {/* Each section is isolated in its own block so the document stays easy to scan and legally clear. */}
            <div className="mt-10 space-y-8">
              <section className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
                <h2 className="text-2xl font-semibold text-white">
                  Titularidad del sitio web
                </h2>

                <div className="mt-5 space-y-5 text-base leading-relaxed text-neutral-300">
                  <p>
                    En cumplimiento con lo establecido en la Ley 34/2002, de 11
                    de julio, de Servicios de la Sociedad de la Informacion y
                    del Comercio Electronico (LSSI-CE), se informa que el
                    presente sitio web es titularidad de:
                  </p>

                  <p>pra2dev.</p>

                  <p>
                    Correo electronico: info@pra2dev.com
                    <br />
                    Dominio web: www.pra2dev.com
                  </p>
                </div>
              </section>

              <section className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
                <h2 className="text-2xl font-semibold text-white">
                  Condiciones de uso
                </h2>

                <div className="mt-5 space-y-5 text-base leading-relaxed text-neutral-300">
                  <p>
                    El acceso y uso de esta web atribuye la condicion de
                    usuario, e implica la aceptacion de las presentes
                    condiciones de uso. Si no estas de acuerdo con ellas, te
                    rogamos que no utilices el sitio web.
                  </p>

                  <p>
                    pra2dev se reserva el derecho de modificar, en cualquier
                    momento y sin previo aviso, los contenidos, servicios y
                    condiciones del sitio web.
                  </p>
                </div>
              </section>

              <section className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
                <h2 className="text-2xl font-semibold text-white">
                  Propiedad intelectual e industrial
                </h2>

                <div className="mt-5 space-y-5 text-base leading-relaxed text-neutral-300">
                  <p>
                    Todos los contenidos de esta web (textos, imagenes,
                    logotipos, marcas, estructura, diseno, etc.) son propiedad
                    de pra2dev o de terceros que han autorizado su uso.
                  </p>

                  <p>
                    Queda prohibida la reproduccion, distribucion o comunicacion
                    publica total o parcial sin la autorizacion expresa del
                    titular. El uso no autorizado podra dar lugar a las
                    correspondientes responsabilidades legales.
                  </p>
                </div>
              </section>

              <section className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
                <h2 className="text-2xl font-semibold text-white">
                  Acceso y uso del sitio web
                </h2>

                <div className="mt-5 space-y-5 text-base leading-relaxed text-neutral-300">
                  <p>
                    El acceso a la web es libre y gratuito. El usuario se
                    compromete a utilizar la web de forma licita, respetando la
                    ley, los derechos de terceros y las presentes condiciones.
                  </p>

                  <div>
                    <p className="font-semibold text-white">
                      Se prohibe expresamente:
                    </p>

                    <ul className="mt-4 space-y-4">
                      <li>
                        Realizar actividades que danen, interrumpan o generen
                        errores en el funcionamiento del sitio.
                      </li>
                      <li>
                        Introducir virus, scripts o cualquier software
                        malicioso.
                      </li>
                      <li>
                        Utilizar la web con fines fraudulentos o ilicitos.
                      </li>
                    </ul>
                  </div>

                  <p>
                    pra2dev se reserva el derecho a denegar o retirar el acceso
                    a la web a quienes incumplan estas condiciones.
                  </p>
                </div>
              </section>

              <section className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
                <h2 className="text-2xl font-semibold text-white">
                  Responsabilidad
                </h2>

                <div className="mt-5 space-y-5 text-base leading-relaxed text-neutral-300">
                  <p>
                    pra2dev no garantiza la disponibilidad continua del sitio
                    web ni la ausencia de errores. Tampoco se hace responsable
                    de posibles danos derivados del uso del sitio, ni de los
                    contenidos enlazados a traves de terceros.
                  </p>

                  <p>
                    El usuario asume la responsabilidad del uso que haga del
                    sitio y de la informacion que contenga.
                  </p>
                </div>
              </section>

              <section className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
                <h2 className="text-2xl font-semibold text-white">
                  Proteccion de datos personales
                </h2>

                <div className="mt-5 space-y-5 text-base leading-relaxed text-neutral-300">
                  <p>
                    Los datos personales facilitados a traves de este sitio
                    seran tratados conforme a lo establecido en nuestra Politica
                    de Privacidad, cumpliendo con el Reglamento General de
                    Proteccion de Datos (UE) 2016/679 y la normativa espanola
                    vigente.
                  </p>
                </div>
              </section>

              <section className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
                <h2 className="text-2xl font-semibold text-white">
                  Legislacion aplicable y jurisdiccion
                </h2>

                <div className="mt-5 space-y-5 text-base leading-relaxed text-neutral-300">
                  <p>
                    Este aviso legal se rige por la legislacion espanola. Para
                    la resolucion de cualquier conflicto que pudiera derivarse
                    del acceso o uso del sitio web, las partes se someten a los
                    Juzgados y Tribunales de Madrid, salvo que la normativa
                    establezca otro fuero imperativo.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
