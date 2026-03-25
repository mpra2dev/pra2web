"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { useInView } from "@/hooks/useInView";

const services = [
  {
    title: "Mantenimiento industrial",
    description:
      "Intervenciones preventivas y correctivas para mantener líneas, equipos e instalaciones en funcionamiento.",
  },
  {
    title: "Fabricación a medida",
    description:
      "Diseño y fabricación de estructuras, soportes y soluciones adaptadas a cada entorno productivo.",
  },
  {
    title: "Asistencia técnica",
    description:
      "Respuesta ágil ante incidencias para reducir paradas y recuperar operatividad cuanto antes.",
  },
];

const advantages = [
  "Procesos técnicos claros desde la primera toma de contacto",
  "Capacidad para combinar mantenimiento, ajuste y fabricación",
  "Comunicación directa para acelerar presupuestos y ejecución",
];

const process = [
  {
    step: "01",
    title: "Evaluación técnica",
    text: "Revisamos la necesidad, el contexto operativo y el alcance real de la intervención.",
  },
  {
    step: "02",
    title: "Propuesta de trabajo",
    text: "Definimos solución, tiempos estimados y enfoque de ejecución con criterios claros.",
  },
  {
    step: "03",
    title: "Activación en planta",
    text: "Coordinamos mantenimiento, fabricación o montaje con seguimiento durante todo el proceso.",
  },
];

function Reveal({
  children,
  className = "",
  delayClass = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  delayClass?: string;
  id?: string;
}) {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px",
  });

  return (
    <div
      ref={ref}
      id={id}
      className={`${className} transition-all duration-700 ease-out ${delayClass} ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function WrenchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
      <path
        d="M14.5 6.5a4 4 0 0 0 4.9 4.9l-7.7 7.7a2.1 2.1 0 1 1-3-3l7.7-7.7a4 4 0 0 0 4.9-4.9l-2.5 2.5-3-1 1-3 2.7-2.5Z"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FactoryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
      <path
        d="M3 21V9l6 3V9l6 3V5l6 3v13H3Z"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
      <path
        d="M13 2 5 13h6l-1 9 8-11h-6l1-9Z"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
      <path
        d="m12 4 8 4-8 4-8-4 8-4Zm8 8-8 4-8-4m16 4-8 4-8-4"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
      <path
        d="M12 3 5 6v6c0 4.5 2.8 7.8 7 9 4.2-1.2 7-4.5 7-9V6l-7-3Z"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDiagonalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
      <path
        d="M7 17 17 7M9 7h8v8"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

const serviceIcons = [WrenchIcon, FactoryIcon, BoltIcon];
const processIcons = [ShieldIcon, LayersIcon, BoltIcon];

export function NexumIndustriesLanding() {
  const [isConceptBannerVisible, setIsConceptBannerVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const dismissed =
      typeof window !== "undefined"
        ? window.sessionStorage.getItem("nexum-concept-banner-dismissed")
        : null;

    setIsConceptBannerVisible(dismissed !== "true");
  }, []);

  const handleDismissConceptBanner = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("nexum-concept-banner-dismissed", "true");
    }

    setIsConceptBannerVisible(false);
  };

  return (
    <main className="min-h-screen bg-[#dfe7ef] text-slate-900">
      <div className="relative isolate overflow-hidden">
        <style>{`
          @keyframes steel-shift {
            0% {
              transform: translate3d(-1.5%, -1%, 0) scale(1);
            }
            100% {
              transform: translate3d(1.5%, 1%, 0) scale(1.03);
            }
          }

          @keyframes beam-sweep {
            0% {
              transform: translateX(-120%) skewX(-18deg);
              opacity: 0;
            }
            18% {
              opacity: 0.65;
            }
            48% {
              opacity: 0.2;
            }
            100% {
              transform: translateX(220%) skewX(-18deg);
              opacity: 0;
            }
          }

          @keyframes pulse-grid {
            0%, 100% {
              opacity: 0.22;
            }
            50% {
              opacity: 0.42;
            }
          }

          @keyframes float-panel {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(0, -10px, 0);
            }
          }

          @keyframes hero-veil-drift {
            0% {
              transform: translate3d(-2%, 0, 0) scale(1);
            }
            100% {
              transform: translate3d(2%, 0, 0) scale(1.04);
            }
          }

          @keyframes hero-smoke-drift {
            0% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.24;
            }
            100% {
              transform: translate3d(-2%, 2%, 0) scale(1.08);
              opacity: 0.42;
            }
          }

          @keyframes status-flicker {
            0%, 100% {
              opacity: 0.45;
            }
            20% {
              opacity: 0.9;
            }
            24% {
              opacity: 0.38;
            }
            28% {
              opacity: 0.8;
            }
            60% {
              opacity: 0.55;
            }
          }

          @keyframes data-rise {
            0% {
              transform: translateY(16px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes line-scan {
            0% {
              transform: translateY(-8%);
              opacity: 0;
            }
            18% {
              opacity: 0.55;
            }
            100% {
              transform: translateY(112%);
              opacity: 0;
            }
          }

          @keyframes ring-rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes arc-orbit {
            0% {
              transform: rotate(0deg) scale(1);
              opacity: 0.35;
            }
            50% {
              transform: rotate(180deg) scale(1.04);
              opacity: 0.6;
            }
            100% {
              transform: rotate(360deg) scale(1);
              opacity: 0.35;
            }
          }
        `}</style>

        {isConceptBannerVisible ? (
          <div className="fixed right-4 top-24 z-[70] w-[min(24rem,calc(100vw-2rem))]">
            <div className="rounded-sm border border-white/14 bg-[linear-gradient(45deg,rgba(168,85,247,0.14)_0%,rgba(76,161,252,0.16)_52%,rgba(34,197,94,0.12)_100%)] p-[1px] shadow-[0_22px_48px_rgba(76,161,252,0.14)] backdrop-blur-sm">
              <div className="rounded-sm bg-slate-950/88 px-5 py-4 text-slate-100 backdrop-blur-md">
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-sky-200">
                      Demo sectorial
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      Nexum Industries es una landing concepto creada para mostrar cómo podría
                      presentarse una empresa industrial con una propuesta más clara y orientada a conversión.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleDismissConceptBanner}
                    aria-label="Cerrar aviso"
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-slate-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                      <path
                        d="m6 6 12 12M18 6 6 18"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <Link
                  href="/clientes/nexum-industries"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-200 transition-colors hover:text-white"
                >
                  Ver caso
                  <ArrowDiagonalIcon />
                </Link>
              </div>
            </div>
          </div>
        ) : null}

        <div className="absolute inset-0 -z-40 bg-[linear-gradient(180deg,#edf3f7_0%,#dfe7ef_28%,#d3dde7_62%,#c6d2de_100%)]" />

        <div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage:
              "linear-gradient(126deg, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.14) 18%, transparent 40%), linear-gradient(300deg, rgba(148,163,184,0.18) 0%, transparent 32%), linear-gradient(40deg, rgba(96,165,250,0.12) 0%, transparent 28%)",
            animation: "steel-shift 18s ease-in-out infinite alternate",
          }}
        />

        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_16%_14%,rgba(96,165,250,0.24),transparent_24%),radial-gradient(circle_at_84%_10%,rgba(226,232,240,0.55),transparent_20%),radial-gradient(circle_at_52%_88%,rgba(148,163,184,0.22),transparent_26%)]" />

        <header className="sticky top-0 z-50 border-b border-slate-700/70 bg-[#31465d]/92 backdrop-blur-xl">
          <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/nexum-industries" className="block">
              <Image
                src="/nexum-industrial.svg"
                alt="Nexum Industries"
                width={176}
                height={44}
                className="h-auto w-[10rem] object-contain sm:w-[11.5rem]"
              />
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              <a
                href="#servicios"
                className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-100 transition-colors duration-200 hover:text-sky-200"
              >
                Servicios
              </a>
              <a
                href="#enfoque"
                className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-100 transition-colors duration-200 hover:text-sky-200"
              >
                Enfoque
              </a>
              <a
                href="#proceso"
                className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-100 transition-colors duration-200 hover:text-sky-200"
              >
                Proceso
              </a>
              <Link
                href="/clientes/nexum-industries"
                className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-300 transition-colors duration-200 hover:text-white"
              >
                Caso
              </Link>
            </nav>

            <Link
              href="/#contacto"
              className="hidden items-center justify-center rounded-sm border border-sky-700/30 bg-[linear-gradient(135deg,#0f172a_0%,#1e3a5f_42%,#60a5fa_100%)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_12px_24px_rgba(30,58,95,0.18)] transition-transform duration-200 hover:-translate-y-0.5 lg:inline-flex"
            >
              ¿Quieres una página como esta?
            </Link>

            <button
              type="button"
              aria-label="Abrir menú"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-slate-500/50 bg-white/8 text-slate-100 transition-colors duration-200 hover:bg-white/12 lg:hidden"
            >
              <MenuIcon />
            </button>
          </div>
        </header>

        <div
          className={`fixed inset-0 z-[65] lg:hidden ${
            isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`absolute inset-0 bg-slate-950/55 backdrop-blur-[2px] transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          <aside
            className={`absolute right-0 top-0 flex h-full w-[min(22rem,88vw)] flex-col border-l border-slate-700/70 bg-[#24384c]/96 px-5 pb-6 pt-5 shadow-[-18px_0_40px_rgba(15,23,42,0.35)] transition-transform duration-300 ease-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">
                Navegación
              </span>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-slate-100 transition-colors duration-200 hover:bg-white/10"
              >
                <CloseIcon />
              </button>
            </div>

            <nav className="mt-8 border-t border-white/10">
              <a
                href="#servicios"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-white/10 py-4 text-lg font-semibold tracking-[-0.03em] text-white transition-colors duration-200 hover:text-sky-200"
              >
                Servicios
              </a>
              <a
                href="#enfoque"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-white/10 py-4 text-lg font-semibold tracking-[-0.03em] text-white transition-colors duration-200 hover:text-sky-200"
              >
                Enfoque
              </a>
              <a
                href="#proceso"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-white/10 py-4 text-lg font-semibold tracking-[-0.03em] text-white transition-colors duration-200 hover:text-sky-200"
              >
                Proceso
              </a>
              <Link
                href="/clientes/nexum-industries"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-white/10 py-4 text-lg font-semibold tracking-[-0.03em] text-sky-200 transition-colors duration-200 hover:text-white"
              >
                Caso
              </Link>
            </nav>

            <div className="mt-auto border-t border-white/10 pt-5">
              <p className="text-sm leading-6 text-slate-300">
                Si quieres una landing con una dirección visual así, el siguiente paso está aquí.
              </p>
              <Link
                href="/#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center rounded-sm border border-sky-700/30 bg-[linear-gradient(135deg,#0f172a_0%,#1e3a5f_42%,#60a5fa_100%)] px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_12px_24px_rgba(30,58,95,0.18)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                ¿Quieres una página como esta?
              </Link>
            </div>
          </aside>
        </div>

        <section className="px-4 pb-24 pt-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <section className="relative overflow-hidden rounded-sm border border-slate-700/70 bg-[linear-gradient(135deg,#0f1b29_0%,#17283a_36%,#243f5b_74%,#3d6388_100%)] px-8 py-12 shadow-[0_28px_70px_rgba(18,28,45,0.32)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse at 18% 22%, rgba(125,211,252,0.22), transparent 24%), radial-gradient(ellipse at 82% 18%, rgba(96,165,250,0.18), transparent 26%), linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.06) 32%, transparent 52%), linear-gradient(295deg, transparent 12%, rgba(125,211,252,0.10) 36%, transparent 58%)",
                  animation: "hero-veil-drift 9s ease-in-out infinite alternate",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                  background:
                    "radial-gradient(circle at 24% 34%, rgba(148,163,184,0.18), transparent 18%), radial-gradient(circle at 72% 66%, rgba(125,211,252,0.16), transparent 22%), radial-gradient(circle at 52% 48%, rgba(255,255,255,0.08), transparent 26%)",
                  animation: "hero-smoke-drift 11s ease-in-out infinite alternate",
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_0%,transparent_20%,transparent_80%,rgba(255,255,255,0.12)_100%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,transparent_18%,transparent_82%,rgba(15,23,42,0.22)_100%)]" />
              <div
                className="pointer-events-none absolute inset-y-0 left-[-10%] w-[42%] bg-[linear-gradient(90deg,transparent_0%,rgba(125,211,252,0.34)_45%,transparent_100%)]"
                style={{ animation: "beam-sweep 8s ease-in-out infinite" }}
              />
              <div
                className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[linear-gradient(180deg,transparent_0%,rgba(96,165,250,0.08)_48%,transparent_100%)]"
                style={{ animation: "line-scan 6.5s linear infinite" }}
              />
              <div
                className="pointer-events-none absolute right-8 top-8 hidden h-40 w-40 rounded-full border border-sky-300/40 lg:block"
                style={{ animation: "float-panel 4.5s ease-in-out infinite alternate" }}
              />
              <div
                className="pointer-events-none absolute right-16 top-16 hidden h-24 w-24 rounded-full border border-slate-400/50 lg:block"
                style={{ animation: "float-panel 5.5s ease-in-out infinite alternate" }}
              />
              <div
                className="pointer-events-none absolute bottom-[-5rem] right-[22%] hidden h-56 w-56 rounded-full border border-sky-300/25 lg:block"
                style={{ animation: "ring-rotate 16s linear infinite" }}
              />
              <div
                className="pointer-events-none absolute right-[10%] top-[16%] hidden h-[28rem] w-[28rem] lg:block"
                style={{ animation: "arc-orbit 14s linear infinite" }}
              >
                <div className="absolute inset-0 rounded-full border border-sky-300/14" />
                <div className="absolute inset-[12%] rounded-full border border-white/10" />
                <div className="absolute left-1/2 top-0 h-24 w-[2px] -translate-x-1/2 bg-[linear-gradient(180deg,rgba(125,211,252,0),rgba(125,211,252,0.95),rgba(125,211,252,0))] shadow-[0_0_22px_rgba(125,211,252,0.35)]" />
                <div className="absolute bottom-[8%] right-[18%] h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.22)_0%,rgba(125,211,252,0.08)_42%,transparent_72%)]" />
              </div>

              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-3 rounded-sm border border-sky-300/35 bg-white/10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-sky-100 shadow-[0_10px_20px_rgba(15,23,42,0.18)] backdrop-blur-sm">
                    <span
                      className="h-2 w-2 rounded-full bg-sky-500"
                      style={{ animation: "status-flicker 2.4s steps(1, end) infinite" }}
                    />
                    Soporte técnico para entornos industriales
                  </div>

                  <h1 className="mt-7 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl lg:text-[4.8rem] lg:leading-[0.92]">
                    Mantenimiento y fabricación industrial con presencia técnica y enfoque comercial
                  </h1>

                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                    Una propuesta visual más clara para presentar capacidades industriales,
                    transmitir solvencia desde el primer scroll y facilitar solicitudes de trabajo
                    con menos fricción.
                  </p>

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/#contacto"
                      className="inline-flex items-center justify-center rounded-sm border border-sky-700/30 bg-[linear-gradient(135deg,#0f172a_0%,#1e3a5f_42%,#60a5fa_100%)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_12px_24px_rgba(30,58,95,0.18)] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      Solicitar propuesta
                    </Link>

                    <Link
                      href="/clientes/nexum-industries"
                      className="inline-flex items-center justify-center gap-2 rounded-sm border border-slate-300/30 bg-white/10 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-slate-100 transition-colors duration-200 hover:bg-white/16 hover:text-white"
                    >
                      <ArrowDiagonalIcon />
                      Ver caso de estudio
                    </Link>
                  </div>

                  <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {[
                      { label: "Respuesta", value: "Ágil" },
                      { label: "Ejecución", value: "En planta" },
                      { label: "Fabricación", value: "A medida" },
                    ].map((item, index) => (
                      <div
                        key={item.label}
                        className="rounded-sm border border-sky-300/20 bg-white/10 px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.14)] backdrop-blur-sm"
                        style={{
                          animation: `data-rise 0.7s ease-out ${0.08 + index * 0.1}s both`,
                        }}
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">
                          {item.label}
                        </p>
                        <p className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-white">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <aside
                  className="relative overflow-hidden rounded-sm border border-slate-300/20 bg-slate-950 px-7 py-8 text-slate-100 shadow-[0_28px_60px_rgba(15,23,42,0.24)] sm:px-8"
                  style={{ animation: "float-panel 4.2s ease-in-out infinite alternate" }}
                >
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(125,211,252,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.10) 1px, transparent 1px)",
                      backgroundSize: "34px 34px",
                      animation: "pulse-grid 4s ease-in-out infinite",
                    }}
                  />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-sky-300/50" />

                  <div className="relative z-10 flex items-center justify-between border-b border-slate-700 pb-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
                      Capacidades
                    </p>
                    <span className="text-xs uppercase tracking-[0.22em] text-slate-400">
                      Industrial
                    </span>
                  </div>

                  <div className="relative z-10 mt-6 rounded-sm border border-sky-400/20 bg-slate-900/80 p-5">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-sky-300/90">
                      Sistema operativo
                    </p>
                    <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">
                      Operatividad técnica
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Presentación clara, tono más sólido y estructura orientada a activar contacto.
                    </p>
                  </div>

                  <ul className="relative z-10 mt-6 space-y-4">
                    {advantages.map((item, index) => (
                      <li
                        key={item}
                        className="flex gap-4 rounded-sm border border-slate-700 bg-slate-800/75 px-5 py-4 text-base leading-7 text-slate-200"
                        style={{
                          animation: `data-rise 0.65s ease-out ${0.14 * (index + 1)}s both`,
                        }}
                      >
                        <span className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                          0{index + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </aside>
              </div>
            </section>

            <section
              id="servicios"
              className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {services.map((service, index) => {
                const Icon = serviceIcons[index];

                return (
                  <Reveal key={service.title} delayClass={index === 1 ? "delay-100" : index === 2 ? "delay-200" : ""}>
                    <article className="rounded-sm border border-slate-300/80 bg-white/70 p-7 shadow-[0_20px_40px_rgba(71,85,105,0.10)]">
                      <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-sky-200 bg-sky-50 text-sky-700">
                        <Icon />
                      </div>
                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
                        Servicio
                      </p>
                      <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-base leading-8 text-slate-600">
                        {service.description}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </section>

            <section
              id="enfoque"
              className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start"
            >
              <Reveal>
                <div className="rounded-sm border border-slate-300/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.74),rgba(226,232,240,0.58))] p-8 shadow-[0_24px_60px_rgba(71,85,105,0.10)] sm:p-10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-sky-200 bg-sky-50 text-sky-700">
                    <LayersIcon />
                  </div>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
                    Enfoque
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
                    Presentación directa para que la decisión de contacto sea más rápida
                  </h2>
                  <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                    La landing está construida para que responsables de mantenimiento, producción y
                    operaciones entiendan qué hace la empresa, en qué tipo de trabajos puede intervenir
                    y cómo iniciar una solicitud sin perder tiempo entre mensajes ambiguos o páginas
                    saturadas.
                  </p>
                </div>
              </Reveal>

              <Reveal delayClass="delay-100">
                <div className="rounded-sm border border-slate-300/80 bg-slate-900 p-8 text-slate-100 shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:p-10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-sky-300/20 bg-slate-800 text-sky-300">
                    <ShieldIcon />
                  </div>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
                    Resultado
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                    Un mensaje técnico más ordenado y comercialmente más útil
                  </h2>
                  <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                    La propuesta sintetiza servicios complejos en una estructura legible, aporta
                    confianza visual desde el primer scroll y elimina fricción en el paso hacia el
                    contacto comercial.
                  </p>
                </div>
              </Reveal>
            </section>

            <Reveal
              id="proceso"
              className="mt-16 rounded-sm border border-slate-300/80 bg-white/70 px-8 py-10 shadow-[0_24px_60px_rgba(71,85,105,0.10)] sm:px-10"
            >
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
                  Proceso
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
                  Un flujo claro para pasar de necesidad técnica a ejecución
                </h2>
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                {process.map((item, index) => {
                  const Icon = processIcons[index];

                  return (
                    <Reveal
                      key={item.step}
                      delayClass={index === 1 ? "delay-100" : index === 2 ? "delay-200" : ""}
                    >
                      <article className="rounded-sm border border-slate-300/80 bg-slate-50 px-6 py-6">
                        <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-sky-200 bg-white text-sky-700">
                          <Icon />
                        </div>
                        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
                          {item.step}
                        </p>
                        <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-slate-950">
                          {item.title}
                        </h3>
                        <p className="mt-4 text-base leading-8 text-slate-600">{item.text}</p>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </Reveal>

            <Reveal className="mt-16 rounded-sm border border-slate-300/80 bg-[linear-gradient(135deg,rgba(15,23,42,0.96)_0%,rgba(30,41,59,0.94)_44%,rgba(30,58,95,0.9)_100%)] px-8 py-12 text-center shadow-[0_28px_70px_rgba(15,23,42,0.24)] sm:px-12">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-sm border border-sky-300/20 bg-white/10 text-sky-200">
                <ArrowDiagonalIcon />
              </div>
              <h2 className="mx-auto mt-6 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                ¿Necesitas una landing que presente tu capacidad técnica con más claridad?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Podemos estructurar tu propuesta para que se entienda mejor, transmita más
                confianza y convierta visitas en oportunidades reales.
              </p>

              <Link
                href="/#contacto"
                className="mt-8 inline-flex items-center justify-center rounded-sm border border-sky-300/25 bg-[linear-gradient(135deg,#93c5fd_0%,#60a5fa_40%,#1e3a5f_100%)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_12px_24px_rgba(96,165,250,0.24)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Solicitar propuesta
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </main>
  );
}

