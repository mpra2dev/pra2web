import Link from "next/link";

import { Logo } from "@/components/Logo";

const navItems = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Portfolio", href: "/#portfolio" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* The grid keeps the footer compact on mobile and balanced in three columns on desktop. */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
          <div>
            {/* Reusing the main logo helps the footer feel like a clean closing block instead of a separate section. */}
            <Link
              href="/"
              className="inline-flex items-center text-white transition-transform duration-300 hover:-translate-y-[1px]"
            >
              <Logo className="h-8 w-auto" />
            </Link>

            <p className="mt-5 max-w-sm text-base leading-7 text-neutral-400">
              Productos y servicios digitales pra2dev.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.14em] text-white uppercase">
              Navegacion
            </h3>

            {/* These links point back to home sections so the footer works from any route in the app. */}
            <nav className="mt-5 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base text-neutral-400 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.14em] text-white uppercase">
              Contacto
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:hola@pra2dev.com"
                className="block text-base text-neutral-400 transition-colors duration-200 hover:text-white"
              >
                info@pra2dev.com
              </a>

              {/* The footer CTA mirrors the main conversion path without turning the footer into a heavy sales block. */}
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center rounded-lg bg-[linear-gradient(45deg,#a855f7_0%,#4ca1fc_52%,#22c55e_100%)] px-5 py-3 text-sm font-semibold tracking-[0.01em] text-white shadow-[0_10px_28px_rgba(76,161,252,0.22)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(34,197,94,0.18)]"
              >
                Solicitar propuesta
              </Link>
            </div>
          </div>
        </div>

        {/* The lower strip groups legal links together so they stay visible without becoming a separate heavy footer column. */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 pra2dev. Todos los derechos reservados.</p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href="/cookies"
              className="transition-colors duration-200 hover:text-white"
            >
              Cookies
            </Link>

            <Link
              href="/legal"
              className="transition-colors duration-200 hover:text-white"
            >
              Aviso legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
