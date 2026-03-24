"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "pra2dev-cookie-consent";

type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

function saveConsent(preferences: ConsentPreferences) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
}

export function CookieConsent() {
  const [isReady, setIsReady] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existingConsent = window.localStorage.getItem(STORAGE_KEY);

    const frame = window.requestAnimationFrame(() => {
      if (!existingConsent) {
        setIsBannerOpen(true);
      }

      setIsReady(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const closeAll = () => {
    setIsBannerOpen(false);
    setIsSettingsOpen(false);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      updatedAt: new Date().toISOString(),
    });
    closeAll();
  };

  const rejectOptional = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      updatedAt: new Date().toISOString(),
    });
    closeAll();
  };

  const savePreferences = () => {
    saveConsent({
      necessary: true,
      analytics,
      marketing,
      updatedAt: new Date().toISOString(),
    });
    closeAll();
  };

  if (!isReady || !isBannerOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-x-4 bottom-4 z-[70] md:left-6 md:right-auto md:max-w-md">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/96 p-5 text-white shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(76,161,252,0.14),transparent_38%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.10),transparent_28%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.08),transparent_34%)]" />

          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/75">
              Cookies
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-white">
              Usamos cookies para mejorar la experiencia
            </h3>
            <p className="mt-3 text-sm leading-6 text-neutral-300">
              Utilizamos cookies necesarias y, si lo aceptas, también analíticas
              y de marketing para entender mejor el uso del sitio.
            </p>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              Puedes cambiar tu elección más adelante desde la{" "}
              <Link href="/cookies" className="text-white hover:text-cyan-200">
                política de cookies
              </Link>
              .
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(45deg,#a855f7_0%,#4ca1fc_52%,#22c55e_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(76,161,252,0.22)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Aceptar todas
              </button>
              <button
                type="button"
                onClick={rejectOptional}
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition-colors duration-200 hover:border-white/20 hover:bg-white/8 hover:text-white"
              >
                Rechazar
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsSettingsOpen(true)}
              className="mt-4 text-sm font-medium text-neutral-300 transition-colors duration-200 hover:text-white"
            >
              Configurar cookies
            </button>
          </div>
        </div>
      </div>

      {isSettingsOpen ? (
        <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/55 p-4 backdrop-blur-[2px] sm:items-center">
          <div className="w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 text-white shadow-[0_28px_70px_rgba(0,0,0,0.42)]">
            <div className="border-b border-white/10 px-5 py-4 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/75">
                Preferencias
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                Configuración de cookies
              </h3>
            </div>

            <div className="space-y-4 px-5 py-5 sm:px-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-base font-semibold text-white">
                      Cookies necesarias
                    </p>
                    <p className="mt-2 text-sm leading-6 text-neutral-300">
                      Son imprescindibles para el funcionamiento básico de la web.
                    </p>
                  </div>
                  <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-green-200">
                    Siempre activas
                  </span>
                </div>
              </div>

              <label className="flex cursor-pointer items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div>
                  <p className="text-base font-semibold text-white">
                    Cookies analíticas
                  </p>
                  <p className="mt-2 text-sm leading-6 text-neutral-300">
                    Nos ayudan a medir visitas y mejorar el contenido del sitio.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                  className="mt-1 h-5 w-5 rounded border-white/20 bg-transparent text-cyan-300 focus:ring-cyan-400/40"
                />
              </label>

              <label className="flex cursor-pointer items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div>
                  <p className="text-base font-semibold text-white">
                    Cookies de marketing
                  </p>
                  <p className="mt-2 text-sm leading-6 text-neutral-300">
                    Permiten personalizar campañas y medir acciones comerciales.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(event) => setMarketing(event.target.checked)}
                  className="mt-1 h-5 w-5 rounded border-white/20 bg-transparent text-cyan-300 focus:ring-cyan-400/40"
                />
              </label>
            </div>

            <div className="flex flex-col gap-3 border-t border-white/10 px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
              <button
                type="button"
                onClick={() => setIsSettingsOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition-colors duration-200 hover:border-white/20 hover:bg-white/8 hover:text-white"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={savePreferences}
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(45deg,#a855f7_0%,#4ca1fc_52%,#22c55e_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(76,161,252,0.22)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
