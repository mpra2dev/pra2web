import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Servicios", href: "/nexum-industries#servicios" },
  { label: "Enfoque", href: "/nexum-industries#enfoque" },
  { label: "Proceso", href: "/nexum-industries#proceso" },
];

export function NexumFooter() {
  return (
    <footer className="border-t border-slate-700/70 bg-[linear-gradient(180deg,#233548_0%,#1b2b3b_100%)] py-16 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
          <div>
            <Link href="/nexum-industries" className="inline-flex items-center">
              <Image
                src="/nexum-industrial.svg"
                alt="Nexum Industries"
                width={176}
                height={44}
                className="h-auto w-[10rem] object-contain sm:w-[11.5rem]"
              />
            </Link>

            <p className="mt-5 max-w-sm text-base leading-7 text-slate-300">
              Ejemplo claro de landing diseñada para página industrial. Esta página es solo un
              pequeño ejemplo y no muestra todas las posibilidades que ofrece pra2dev.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-200">
              Navegación
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-200">
              Contacto
            </h3>

            <div className="mt-5 space-y-4">
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center rounded-sm border border-sky-300/25 bg-[linear-gradient(135deg,#93c5fd_0%,#60a5fa_40%,#1e3a5f_100%)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_12px_24px_rgba(96,165,250,0.18)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Solicitar propuesta
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-700/70 pt-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 pra2dev. Todos los derechos reservados.</p>

          <p>
            Esta página ha sido diseñada y creada por{" "}
            <Link href="/" className="font-semibold text-sky-200 transition-colors hover:text-white">
              pra2dev
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
