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

const projects: ShowcaseItem[] = [
  ...clients.map((client) => ({
    name: client.name,
    logo: client.logo,
    href: `/clientes/${client.slug}`,
    status: client.status,
  })),
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
    <div className="mt-10 sm:mt-14">
      <div>
        <div>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
            {title}
          </h3>
          <p className="mt-3 text-base leading-7 text-neutral-400">{subtitle}</p>
        </div>
      </div>

      <div className="relative mt-6 sm:mt-8">
        <button
          type="button"
          aria-label={`Desplazar ${title} a la izquierda`}
          onClick={() => scrollRail("left")}
          className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-neutral-950/85 text-white/80 backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/8 hover:text-white active:scale-[0.98] md:inline-flex"
        >
          <ArrowLeftIcon />
        </button>
        <button
          type="button"
          aria-label={`Desplazar ${title} a la derecha`}
          onClick={() => scrollRail("right")}
          className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-neutral-950/85 text-white/80 backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/8 hover:text-white active:scale-[0.98] md:inline-flex"
        >
          <ArrowRightIcon />
        </button>

        <div
          ref={railRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [-ms-overflow-style:none] sm:gap-5 [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => {
            const logoFailed = item.logo ? failedLogos[item.name] : true;
            const content = (
              <div className="group relative flex h-28 w-[14rem] shrink-0 snap-start items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/5 px-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/15 hover:bg-white/8 sm:h-32 sm:w-[16rem] sm:px-6">
                {item.status ? (
                  <span className="absolute left-4 top-4 z-20 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {item.status}
                  </span>
                ) : null}

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
                    </div>
                  )}

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
      className="relative overflow-hidden bg-transparent py-16 sm:py-24"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 transition-all duration-700 ease-out sm:px-6 lg:px-8 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
            Casos, proyectos en marcha y demos sectoriales
          </h2>

          <p className="mt-5 text-pretty text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
            Una selección de trabajos finalizados, proyectos en desarrollo y
            conceptos creados para explorar nuevas oportunidades comerciales.
          </p>
        </div>

        <ShowcaseRail
          title="Proyectos"
          subtitle="Trabajos reales, proyectos activos y una demo sectorial para enseñar cómo planteamos nuevas propuestas."
          items={projects}
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
