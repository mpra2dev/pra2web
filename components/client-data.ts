export type Client = {
  name: string;
  slug: string;
  type: string;
  logo: string;
  heroSummary: string;
  metricValue: string;
  metricLabel: string;
  testimonialQuote: string;
  testimonialAuthor: string;
  siteUrl?: string;
  description: string;
  work: string;
  result: string;
  outcomes: string[];
  status: "Finalizado" | "En desarrollo" | "Concepto";
};

export const clients: Client[] = [
  {
    name: "Anfitrite Complementos",
    slug: "anfitrite",
    type: "Web-galería para tienda de complementos artesanales",
    logo: "/anfitritelogo.svg",
    heroSummary:
      "Una landing clara, estructurada y pensada para generar clientes desde la primera visita.",
    metricValue: "+35%",
    metricLabel: "Visitas a las redes sociales, donde se realizan las ventas.",
    testimonialQuote:
      "Pasamos de no tener nada a tener una presencia digital que, por fin, transmitía bien la marca y nos ayudaba a atraer visitas. El equipo de pra2dev comprendió enseguida lo que necesitábamos y trabajó rápido para sacar adelante nuestras peticiones.",
    testimonialAuthor: "Marina Rodríguez, fundadora de Anfitrite",
    siteUrl: "https://anfitrite.es",
    description:
      "Anfitrite necesitaba una presencia digital que mostrase su catálogo de forma cuidada y facilitase el primer contacto con potenciales clientes.",
    work: "Se diseñó una landing visual, ligera y enfocada en presentar colecciones, reforzar la confianza y derivar tráfico hacia sus redes.",
    result:
      "La marca ganó una presencia digital sólida y centralizó todos sus productos en una página web sencilla para los clientes.",
    outcomes: [
      "Mayor cantidad de visitas a las redes sociales y, por consecuente, aumento en las ventas.",
      "Más claridad al presentar la marca y sus colecciones.",
      "Mejor experiencia para descubrir productos y contactar.",
    ],
    status: "Finalizado",
  },
  {
    name: "pra2dev (esta página)",
    slug: "pra2dev",
    type: "Landing page para productora de servicios web",
    logo: "/logo.svg",
    heroSummary:
      "Una propuesta más clara, una estructura más sólida y una landing preparada para convertir tráfico en demos.",
    metricValue: "+35%",
    metricLabel: "Conversión a demo",
    testimonialQuote:
      "La nueva landing hizo mucho más fácil explicar el producto y empezar a captar oportunidades con más contexto.",
    testimonialAuthor: "Equipo Startup SaaS",
    siteUrl: "https://pra2dev.com",
    description:
      "Producto SaaS en fase de crecimiento que necesitaba una landing capaz de explicar mejor el valor del producto y generar demos.",
    work: "Se trabajó el mensaje, la jerarquía de secciones y el desarrollo completo para reducir fricción y apoyar la captación.",
    result:
      "La landing quedó lista para ventas y empezó a generar leads cualificados desde las primeras semanas.",
    outcomes: [
      "+35% en conversión a demo durante las primeras semanas.",
      "Mejor comprensión de la propuesta desde el primer scroll.",
      "Base más sólida para campañas y outreach comercial.",
    ],
    status: "Finalizado",
  },
  {
    name: "Administradores de Fincas Castro",
    slug: "admin_castro",
    type: "Web comercial para empresa de administración de fincas y abogacía",
    logo: "/globe.svg",
    heroSummary:
      "Un proyecto en desarrollo para ordenar la propuesta, reforzar la marca y preparar una web lista para captar interés comercial.",
    metricValue: "En curso",
    metricLabel: "Diseño y desarrollo",
    testimonialQuote:
      "El objetivo es salir con una web que no solo se vea bien, sino que ayude de verdad a captar clientes.",
    testimonialAuthor: "Víctor Castro, jefe del departamento de abogacía",
    description:
      "Esta empresa estaba sin marca digital alguna; el objetivo es que su marca se adentre en internet como es debido.",
    work: "Estamos definiendo la estructura y la dirección visual para el desarrollo de la landing.",
    result:
      "El proyecto avanza con una base clara de mensaje, una estructura validada y una experiencia pensada para activarse en cuanto se publique.",
    outcomes: [
      "Arquitectura preparada para crecer con nuevas líneas o campañas.",
      "Mejor narrativa comercial para captar interés desde el primer scroll.",
      "Base visual consistente para marca y servicios.",
    ],
    status: "En desarrollo",
  },
  {
    name: "Nexum Industrial",
    slug: "nexum-industrial",
    type: "Landing corporativa para empresa de mantenimiento industrial",
    logo: "/nexum-industrial.svg",
    heroSummary:
      "Una demo sectorial pensada para transmitir capacidad técnica, orden operativo y confianza comercial desde el primer vistazo.",
    metricValue: "Concepto",
    metricLabel: "Demo sectorial B2B",
    testimonialQuote:
      "La propuesta muestra con claridad cómo presentar servicios técnicos complejos de forma más directa, más creíble y más orientada al contacto comercial.",
    testimonialAuthor: "Demo sectorial",
    description:
      "Concepto de landing para una empresa de mantenimiento industrial enfocada en presentar servicios, reforzar la confianza técnica y facilitar solicitudes de presupuesto.",
    work: "Se planteó una estructura estática con enfoque comercial para ordenar servicios de mantenimiento preventivo, correctivo y asistencia técnica en planta.",
    result:
      "La demo deja definida una dirección clara para convertir una empresa industrial compleja en una propuesta más comprensible, más seria y más fácil de vender online.",
    outcomes: [
      "Mensaje más claro para captar interés comercial desde la primera visita.",
      "Estructura válida para presentar servicios técnicos sin saturar al usuario.",
      "Base reutilizable para una futura web corporativa orientada a captación.",
    ],
    status: "Concepto",
  },
];
