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
      "Pasamos de no tener nada a tener una presencia digital, que, por fin transmitia bien la marca y nos ayudaba a atraer visitas. El equipo de pra2dev comprendió enseguida que necesitábamos y enseguida trabajó para sacar adelante nuestras peticiones.",
    testimonialAuthor: "Marina Rodríguez, Fundadora de Anfitrite",
    siteUrl: "https://anfitrite.es",
    description:
      "Anfitrite necesitaba una presencia digital que mostrase su catálogo de forma cuidada y facilitase el primer contacto con potenciales clientes.",
    work: "Se diseñó una landing visual, ligera y enfocada en presentar colecciones, reforzar confianza y derivar tráfico hacia sus redes.",
    result:
      "La marca ganó una presencia digital sólida y centralizó todos los productos en una página web sencilla para los clientes.",
    outcomes: [
      "Mayor cantidad de visitas a las redes sociales, y por consecuente, aumento en las ventas.",
      "Mas claridad al presentar la marca y sus colecciones.",
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
      "Una propuesta mas clara, una estructura mas solida y una landing preparada para convertir tráfico en demos.",
    metricValue: "+35%",
    metricLabel: "Conversion a demo",
    testimonialQuote:
      "La nueva landing hizo mucho mas facil explicar el producto y empezar a captar oportunidades con mas contexto.",
    testimonialAuthor: "Equipo Startup SaaS",
    siteUrl: "https://pra2dev.com",
    description:
      "Producto SaaS en fase de crecimiento que necesitaba una landing capaz de explicar mejor el valor del producto y generar demos.",
    work: "Se trabajo el mensaje, la jerarquia de secciones y el desarrollo completo para reducir friccion y apoyar la captacion.",
    result:
      "La landing quedo lista para ventas y empezo a generar leads cualificados desde las primeras semanas.",
    outcomes: [
      "+35% en conversion a demo durante las primeras semanas.",
      "Mejor comprension de la propuesta desde el primer scroll.",
      "Base mas solida para campanas y outreach comercial.",
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
    testimonialAuthor: "Victor Castro, jefe departamento de abogacía",
    description:
      "Esta empresa estaba sin marca digital alguna, el objetivo es que su marca se adentre en internet como es debido.",
    work: "Estamos definiendo estructura, y dirección visual para el desarrollo de la landing.",
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
    name: "Demo AI Scheduler",
    slug: "demo-ai-scheduler",
    type: "Concepto de producto para automatizar la coordinacion de reuniones",
    logo: "/window.svg",
    heroSummary:
      "Una demo conceptual para explorar como presentar un producto AI con mas claridad, confianza y sensacion de valor desde la primera visita.",
    metricValue: "Concepto",
    metricLabel: "Demo de producto",
    testimonialQuote:
      "La demo sirve para validar narrativa, interfaz y sensacion de producto antes de convertirlo en una version comercial completa.",
    testimonialAuthor: "Concept Lab",
    description:
      "Concepto orientado a mostrar un producto AI que organiza agendas, reduce friccion operativa y simplifica la coordinacion de reuniones.",
    work: "Se planteo una demo de marca, mensaje y experiencia para testear como vender el producto antes de invertir en una version final.",
    result:
      "La demo deja lista una direccion clara para evolucionar hacia una landing o MVP con una propuesta mucho mas facil de comunicar.",
    outcomes: [
      "Narrativa validable para un producto todavia en exploracion.",
      "Concepto visual util para demos, feedback y presentaciones.",
      "Base estrategica para evolucionar hacia MVP o landing comercial.",
    ],
    status: "Concepto",
  },
];
