const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Portfolio", href: "#portfolio" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-950/60 backdrop-blur-[6px]">
      <div className="mx-auto flex h-16 max-w-7xl items-stretch justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="inline-flex items-center text-[0.98rem] font-semibold tracking-[0.01em] text-white transition-opacity duration-200 hover:opacity-90"
        >
          pra2dev
        </a>

        <div className="flex h-full items-stretch gap-4 sm:gap-5">
          <nav className="hidden h-full items-stretch gap-3 md:flex lg:gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative inline-flex h-full items-center overflow-hidden px-4 text-base font-semibold tracking-normal text-neutral-200 transition-colors duration-300"
              >
                <span className="absolute inset-0 z-0 origin-bottom scale-y-0 bg-[linear-gradient(45deg,rgba(168,85,247,0.72)_0%,rgba(76,161,252,0.58)_52%,rgba(34,197,94,0.5)_100%)] transition-transform duration-300 ease-out group-hover:scale-y-100" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="my-2 inline-flex items-center justify-center rounded-lg bg-[linear-gradient(45deg,#a855f7_0%,#4ca1fc_52%,#22c55e_100%)] px-4 text-sm font-semibold tracking-[0.01em] text-white shadow-[0_10px_28px_rgba(76,161,252,0.22)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(34,197,94,0.18)] sm:px-5"
          >
            Solicitar propuesta
          </a>
        </div>
      </div>
    </header>
  );
}
