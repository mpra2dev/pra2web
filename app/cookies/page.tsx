import Link from "next/link";

import { Navbar } from "@/components/Navbar";

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="relative isolate min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-30 bg-neutral-950" />

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
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200/75">
                Información legal
              </p>

              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                Política de cookies
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
                Esta página explica qué cookies puede utilizar pra2dev, con qué
                finalidad y cómo puedes gestionarlas desde tu navegador.
              </p>
            </div>

            <div className="mt-10 space-y-8">
              <section className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
                <h2 className="text-2xl font-semibold text-white">
                  ¿Qué son las cookies?
                </h2>

                <div className="mt-5 space-y-5 text-base leading-relaxed text-neutral-300">
                  <p>
                    Las cookies son pequeños archivos de texto que se almacenan
                    en tu dispositivo (ordenador, tablet, smartphone...) cuando
                    visitas ciertas páginas web. Su finalidad puede ser muy
                    diversa: desde recordar tus preferencias de navegación hasta
                    recopilar información estadística o mostrarte contenido
                    personalizado.
                  </p>

                  <p>
                    Las cookies permiten reconocer el navegador de un usuario,
                    almacenar información y recuperar datos previamente
                    insertados. No contienen información personal específica y,
                    en muchos casos, se borran automáticamente al cerrar el
                    navegador.
                  </p>
                </div>
              </section>

              <section className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
                <h2 className="text-2xl font-semibold text-white">
                  ¿Qué tipos de cookies existen?
                </h2>

                <div className="mt-6 space-y-8 text-base leading-relaxed text-neutral-300">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Según quien las gestione
                    </h3>

                    <ul className="mt-4 space-y-4">
                      <li>
                        <span className="font-semibold text-white">
                          Cookies propias:
                        </span>{" "}
                        son aquellas enviadas desde nuestros propios servidores
                        o dominios y gestionadas por pra2dev, como titular de
                        esta web.
                      </li>
                      <li>
                        <span className="font-semibold text-white">
                          Cookies de terceros:
                        </span>{" "}
                        se envían desde un dominio que no es gestionado
                        directamente por nosotros, sino por otra entidad que
                        trata los datos obtenidos, por ejemplo, Google
                        Analytics.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Según su duración
                    </h3>

                    <ul className="mt-4 space-y-4">
                      <li>
                        <span className="font-semibold text-white">
                          Cookies de sesión:
                        </span>{" "}
                        se eliminan automáticamente al cerrar el navegador.
                      </li>
                      <li>
                        <span className="font-semibold text-white">
                          Cookies persistentes:
                        </span>{" "}
                        permanecen en tu dispositivo durante un periodo
                        determinado, incluso después de cerrar el navegador.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Según su finalidad
                    </h3>

                    <ul className="mt-4 space-y-4">
                      <li>
                        <span className="font-semibold text-white">
                          Cookies técnicas:
                        </span>{" "}
                        necesarias para el funcionamiento básico de la web.
                        Permiten la navegación, el acceso a áreas seguras o
                        recordar el contenido de un formulario.
                      </li>
                      <li>
                        <span className="font-semibold text-white">
                          Cookies de personalización:
                        </span>{" "}
                        permiten al usuario acceder con algunas características
                        predefinidas, como el idioma o el tipo de navegador.
                      </li>
                      <li>
                        <span className="font-semibold text-white">
                          Cookies de análisis o medición:
                        </span>{" "}
                        nos ayudan a entender cómo interactúan los usuarios con
                        la web y a mejorarla, mediante la recopilación de datos
                        anónimos sobre el comportamiento de navegación.
                      </li>
                      <li>
                        <span className="font-semibold text-white">
                          Cookies publicitarias:
                        </span>{" "}
                        permiten gestionar los espacios publicitarios que se
                        puedan incluir en la web, mostrando anuncios basados en
                        criterios como el contenido visualizado o la frecuencia.
                      </li>
                      <li>
                        <span className="font-semibold text-white">
                          Cookies de publicidad comportamental:
                        </span>{" "}
                        almacenan información del comportamiento del usuario
                        obtenida a través de la observación continua de sus
                        hábitos de navegación, lo que permite mostrar publicidad
                        personalizada.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
                <h2 className="text-2xl font-semibold text-white">
                  ¿Qué cookies utilizamos en esta web?
                </h2>

                <div className="mt-5 space-y-5 text-base leading-relaxed text-neutral-300">
                  <p>
                    Actualmente utilizamos cookies técnicas y de análisis (como
                    las proporcionadas por Google Analytics). En el futuro,
                    podríamos incorporar cookies de personalización o
                    publicitarias, siempre con información previa y el
                    consentimiento del usuario a través del sistema de gestión
                    de cookies.
                  </p>

                  <p>
                    Puedes consultar en todo momento el detalle actualizado de
                    las cookies activas desde el banner de configuración que
                    aparece al entrar en la web.
                  </p>
                </div>
              </section>

              <section className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
                <h2 className="text-2xl font-semibold text-white">
                  ¿Cómo puedes gestionar tus cookies?
                </h2>

                <div className="mt-5 space-y-5 text-base leading-relaxed text-neutral-300">
                  <p>
                    Puedes configurar tu navegador para aceptar o rechazar todas
                    las cookies por defecto, o para recibir un aviso en pantalla
                    cada vez que se instale una cookie y decidir en ese momento
                    si la aceptas o no.
                  </p>

                  <p>
                    Además, puedes eliminar en cualquier momento las cookies que
                    ya se hayan instalado. Ten en cuenta que, si desactivas
                    todas las cookies, es posible que algunas funcionalidades de
                    la web no estén disponibles o no funcionen correctamente.
                  </p>

                  <div>
                    <p className="font-semibold text-white">
                      A continuación, te dejamos los enlaces a las instrucciones
                      para gestionar cookies en los principales navegadores:
                    </p>

                    <ul className="mt-4 space-y-3">
                      <li>Google Chrome</li>
                      <li>Mozilla Firefox</li>
                      <li>Safari</li>
                      <li>Microsoft Edge</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
                <h2 className="text-2xl font-semibold text-white">
                  Más información
                </h2>

                <div className="mt-5 space-y-5 text-base leading-relaxed text-neutral-300">
                  <p>
                    Si tienes preguntas sobre esta Política de cookies o deseas
                    obtener más información, puedes contactarnos por correo
                    electrónico en{" "}
                    <a
                      href="mailto:info@pra2dev.com"
                      className="text-white transition-colors duration-200 hover:text-cyan-200"
                    >
                      info@pra2dev.com
                    </a>
                    .
                  </p>

                  <p>
                    También puedes volver a la{" "}
                    <Link
                      href="/"
                      className="text-white transition-colors duration-200 hover:text-cyan-200"
                    >
                      página principal
                    </Link>{" "}
                    para seguir navegando por el sitio.
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
