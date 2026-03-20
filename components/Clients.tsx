"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import { clients } from "@/components/client-data";
import { useInView } from "@/hooks/useInView";

type ShowcaseItem = {
  name: string;
  logo?: string;
  href?: string;
  status?: string;
};

const completedProjects: ShowcaseItem[] = clients.map((client) => ({
  name: client.name,
  logo: client.logo,
  href: `/clientes/${client.slug}`,
}));

const ongoingProjects: ShowcaseItem[] = [
  {
    name: "Proyecto Retail",
    status: "En curso",
  },
  {
    name: "Startup B2B",
    status: "En curso",
  },
  {
    name: "Marca DTC",
    status: "En curso",
  },
];

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
      <path
        d="M15 18 9 12l6-6"
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
        d="m9 18 6-6-6-6"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShowcaseRail({
  title,
  subtitle,
  items,
  failedLogos,
  onLogoError,
}: {
  title: string;
  subtitle: string;
  items: ShowcaseItem[];
  failedLogos: Record<string, boolean>;
  onLogoError: (key: string) => void;
}) {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollRail = (direction: "left" | "right") => {
    const rail = railRef.current;

    if (!rail) return;

    rail.scrollBy({
      left: direction === "right" ? 320 : -320,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-14">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
            {title}
          </h3>
          <p className="mt-3 text-base leading-7 text-neutral-400">{subtitle}</p>
        </div>

        {/* Desktop arrows replace the old autoplay so the rail feels more deliberate and easier to control. */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            aria-label={`Desplazar ${title} a la izquierda`}
            onClick={() => scrollRail("left")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8 hover:text-white"
          >
            <ArrowLeftIcon />
          </button>
          <button
            type="button"
            aria-label={`Desplazar ${title} a la derecha`}
            onClick={() => scrollRail("right")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8 hover:text-white"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>

      {/* The rail uses native horizontal scrolling so mobile gets touch scroll and desktop gets button-driven movement without loop artifacts. */}
      <div
        ref={railRef}
        className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => {
          const logoFailed = item.logo ? failedLogos[item.name] : true;
          const content = (
            <div className="group relative flex h-32 w-[16rem] shrink-0 snap-start items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/5 px-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/15 hover:bg-white/8">
              <div className="relative z-10 flex h-16 w-full items-center justify-center">
                {!logoFailed && item.logo ? (
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={144}
                    height={64}
                    className="h-14 w-auto object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    onError={() => onLogoError(item.name)}
                  />
                ) : (
                  <div className="text-center">
                    <span className="block text-lg font-medium tracking-tight text-white">
                      {item.name}
                    </span>
                    {item.status ? (
                      <span className="mt-2 block text-xs font-medium uppercase tracking-[0.18em] text-cyan-200/75">
                        {item.status}
                      </span>
                    ) : null}
                  </div>
                )}

                {/* The floating label keeps the logo readable while still revealing the project name on hover. */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span
                    className="px-3 py-1 text-lg font-medium tracking-tight text-white sm:text-xl"
                    style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.65)" }}
                  >
                    {item.name}
                  </span>
                </div>
              </div>
            </div>
          );

          if (item.href) {
            return (
              <Link key={item.name} href={item.href} className="block">
                {content}
              </Link>
            );
          }

          return <div key={item.name}>{content}</div>;
        })}
      </div>
    </div>
  );
}

export function Clients() {
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.16,
    rootMargin: "0px 0px -8% 0px",
  });

  return (
    <section
      id="clientes"
      className="relative overflow-hidden bg-neutral-950 py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(76,161,252,0.07),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.05),transparent_28%)]" />

      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 transition-all duration-700 ease-out sm:px-6 lg:px-8 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
            Proyectos que ya estan generando resultados
          </h2>

          <p className="mt-5 text-pretty text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
            No hacemos webs para que esten online. Las hacemos para que
            conviertan.
          </p>
        </div>

        <ShowcaseRail
          title="Proyectos completados"
          subtitle="Casos ya entregados y enfocados a generar resultados reales."
          items={completedProjects}
          failedLogos={failedLogos}
          onLogoError={(key) =>
            setFailedLogos((current) => ({
              ...current,
              [key]: true,
            }))
          }
        />

        <ShowcaseRail
          title="Proyectos en curso"
          subtitle="Trabajos activos que estamos desarrollando ahora mismo."
          items={ongoingProjects}
          failedLogos={failedLogos}
          onLogoError={(key) =>
            setFailedLogos((current) => ({
              ...current,
              [key]: true,
            }))
          }
        />
      </div>
    </section>
  );
}
