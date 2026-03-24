"use client";

import { useState } from "react";

import { useInView } from "@/hooks/useInView";

const faqs = [
  {
    question: "¿Cuánto tardáis en tener una landing lista?",
    answer:
      "Normalmente trabajamos en días, no en semanas largas. El plazo exacto depende del alcance, pero el objetivo es salir al mercado rápido con algo serio y usable.",
    tag: "Timing",
    accent:
      "from-[rgba(76,161,252,0.18)] via-[rgba(255,255,255,0.05)] to-transparent",
  },
  {
    question: "¿Necesito tener ya el copy o la estructura pensada?",
    answer:
      "No. Podemos ayudarte a ordenar el mensaje, decidir la estructura y aterrizar la propuesta para que la web tenga dirección comercial desde el principio.",
    tag: "Estrategia",
    accent:
      "from-[rgba(168,85,247,0.18)] via-[rgba(76,161,252,0.08)] to-transparent",
  },
  {
    question: "¿Trabajáis con startups y proyectos subvencionados?",
    answer:
      "Sí. De hecho, es uno de los contextos donde más sentido tiene nuestro enfoque: velocidad, claridad, buena presentación y una base lista para validar o captar.",
    tag: "Encaje",
    accent:
      "from-[rgba(34,197,94,0.16)] via-[rgba(76,161,252,0.08)] to-transparent",
  },
  {
    question: "¿La web queda preparada para iterar después?",
    answer:
      "Sí. La idea no es entregar algo cerrado y rígido, sino una base que permita ajustar el mensaje, las secciones y las campañas sin rehacerlo todo.",
    tag: "Escalabilidad",
    accent:
      "from-[rgba(255,255,255,0.08)] via-[rgba(168,85,247,0.12)] to-transparent",
  },
  {
    question: "¿Y si no tengo claro todavía el enfoque?",
    answer:
      "Es bastante habitual. La primera parte del proceso sirve precisamente para aterrizar el objetivo, el cliente ideal y la acción principal antes de diseñar.",
    tag: "Bloqueos",
    accent:
      "from-[rgba(76,161,252,0.16)] via-[rgba(168,85,247,0.08)] to-transparent",
  },
  {
    question: "¿Qué pasa después de contactar?",
    answer:
      "Revisamos tu caso, te decimos si vemos encaje y te proponemos el siguiente paso con claridad, sin llamadas eternas ni rodeos.",
    tag: "Siguiente paso",
    accent:
      "from-[rgba(34,197,94,0.14)] via-[rgba(255,255,255,0.05)] to-transparent",
  },
];

function FAQItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: (typeof faqs)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 ease-out hover:bg-white/8 hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] ${
        isOpen ? "bg-white/8" : ""
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-100`}
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="relative z-10 flex w-full items-start justify-between gap-4 p-5 text-left sm:gap-5 sm:p-8"
      >
        <div>
          <div className="inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan-200/80">
            {item.tag}
          </div>

          <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-white sm:mt-5 sm:text-2xl">
            {item.question}
          </h3>
        </div>

        <div className="flex items-center gap-4">
          <p className="hidden text-4xl font-semibold tracking-[-0.08em] text-white/12 sm:block">
            0{index + 1}
          </p>
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/80 transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            <span className="text-2xl leading-none">+</span>
          </div>
        </div>
      </button>

      <div
        className={`relative z-10 grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div
          className={`min-h-0 border-t border-white/10 px-5 pb-5 transition-all duration-300 ease-out sm:px-8 sm:pb-8 ${
            isOpen ? "translate-y-0 pt-4 opacity-100 sm:pt-5" : "-translate-y-1 pt-0 opacity-0"
          }`}
        >
          <p className="max-w-3xl text-base leading-7 text-neutral-300">
            {item.answer}
          </p>
        </div>
      </div>
    </article>
  );
}

export function FAQ() {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.16,
    rootMargin: "0px 0px -8% 0px",
  });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-transparent py-16 sm:py-24 lg:py-28"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 transition-all duration-700 ease-out sm:px-6 lg:px-8 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200/75">
              FAQ
            </p>

            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
              Dudas que suelen aparecer antes de empezar
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-pretty text-sm leading-6 text-neutral-300 sm:mt-5 sm:text-lg sm:leading-8">
              Respuestas claras para reducir fricción antes de pasar a
              contacto. La idea es que entiendas rápido si encajamos y cómo
              trabajamos.
            </p>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-4 shadow-[0_28px_70px_rgba(0,0,0,0.2)] sm:mt-12 sm:p-6">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(76,161,252,0.12),transparent_42%),radial-gradient(circle_at_80%_18%,rgba(168,85,247,0.10),transparent_34%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.08),transparent_36%)]" />
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-white/12" />

            <div className="relative z-10 mb-4 hidden rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 backdrop-blur-sm sm:mb-5 sm:block sm:px-5 sm:py-4">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-400">
                Lo importante
              </p>
              <p className="mt-3 text-base font-medium text-white">
                Menos rodeos, más claridad y un siguiente paso fácil de dar.
              </p>
            </div>

            <div className="relative z-10 space-y-3 sm:space-y-4">
              {faqs.map((item, index) => (
                <FAQItem
                  key={item.question}
                  item={item}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex((current) => (current === index ? null : index))
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
