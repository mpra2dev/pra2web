"use client";

import type { MouseEvent } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Logo } from "@/components/Logo";

const navItems = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Portfolio", href: "/#clientes" },
];

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
      <path
        d="m6 6 12 12M18 6 6 18"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
      <path
        d="m9 6 6 6-6 6"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (pathname !== "/" || !href.startsWith("/#")) {
      return;
    }

    const id = href.replace("/#", "");
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    event.preventDefault();

    // Offset keeps the sticky navbar from covering the section title after scrolling.
    const top = target.getBoundingClientRect().top + window.scrollY - 88;

    window.history.pushState(null, "", href);
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  const handleMobileLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    handleSmoothScroll(event, href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-neutral-950/60 backdrop-blur-[6px]">
        <div className="mx-auto flex h-16 max-w-7xl items-stretch justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex h-full items-center text-white transition-transform duration-300 hover:-translate-y-[1px]"
          >
            <Logo className="h-8 w-auto" />
          </Link>

          <div className="flex h-full items-stretch gap-3 sm:gap-5">
            <nav className="hidden h-full items-stretch gap-3 md:flex lg:gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(event) => handleSmoothScroll(event, item.href)}
                  className="group relative inline-flex h-full items-center overflow-hidden px-4 text-base font-semibold tracking-normal text-neutral-200 transition-colors duration-300"
                >
                  <span className="absolute inset-0 z-0 origin-bottom scale-y-0 bg-[linear-gradient(45deg,rgba(168,85,247,0.72)_0%,rgba(76,161,252,0.58)_52%,rgba(34,197,94,0.5)_100%)] transition-transform duration-300 ease-out group-hover:scale-y-100" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            <Link
              href="/#contacto"
              onClick={(event) => handleSmoothScroll(event, "/#contacto")}
              className="my-2 hidden items-center justify-center rounded-lg bg-[linear-gradient(45deg,#a855f7_0%,#4ca1fc_52%,#22c55e_100%)] px-4 text-sm font-semibold tracking-[0.01em] text-white shadow-[0_10px_28px_rgba(76,161,252,0.22)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(34,197,94,0.18)] sm:px-5 md:inline-flex"
            >
              Solicitar propuesta
            </Link>

            <button
              type="button"
              aria-label="Abrir menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(true)}
              className="my-2 inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-3 text-white transition-colors duration-300 hover:border-white/20 hover:bg-white/8 md:hidden"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Cerrar menu"
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/55 backdrop-blur-[2px] transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`absolute right-0 top-0 flex h-full w-[min(22rem,88vw)] flex-col border-l border-white/10 bg-neutral-950/96 px-5 pb-6 pt-5 shadow-[-18px_0_40px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/75">
              Navegacion
            </span>
            <button
              type="button"
              aria-label="Cerrar menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-300 hover:border-white/20 hover:bg-white/8"
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="mt-8 border-t border-white/10">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(event) => handleMobileLinkClick(event, item.href)}
                className="group flex items-center justify-between border-b border-white/10 py-4 text-white transition-colors duration-300 hover:text-cyan-100"
              >
                <div>
                  <span className="block text-[0.68rem] font-medium uppercase tracking-[0.22em] text-white/35 transition-colors duration-300 group-hover:text-cyan-200/70">
                    0{index + 1}
                  </span>
                  <span className="mt-1 block text-lg font-semibold tracking-[-0.03em]">
                    {item.label}
                  </span>
                </div>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 group-hover:border-cyan-200/25 group-hover:bg-white/8 group-hover:text-cyan-100">
                  <ArrowRightIcon />
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto border-t border-white/10 pt-5">
            <p className="text-sm leading-6 text-neutral-400">
              Si ya tienes claro lo que necesitas, te proponemos el siguiente paso sin rodeos.
            </p>
            <Link
              href="/#contacto"
              onClick={(event) => handleMobileLinkClick(event, "/#contacto")}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(45deg,#a855f7_0%,#4ca1fc_52%,#22c55e_100%)] px-5 py-3.5 text-sm font-semibold tracking-[0.01em] text-white shadow-[0_10px_28px_rgba(76,161,252,0.22)] transition-transform duration-300 ease-out hover:-translate-y-0.5"
            >
              Quiero una propuesta
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
