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
};

export const clients: Client[] = [
  {
    name: "Anfitrite Complementos",
    slug: "anfitrite",
    type: "Web-galería para tienda de complementos artesanales",
    logo: "/anfitritelogo.svg",
    heroSummary:
      "Una landing clara, estructurada y pensada para generar clientes desde la primera visita",
    metricValue: "+35%",
    metricLabel: "Visitas a la tienda en redes sociales",
    testimonialQuote:
      "Pasamos de no tener nada a tener una presencia digital que nunca hubiéramos imaginado. En menos de una semana teníamos la landing lista. El equipo de pra2dev entendió perfectamente lo que necesitábamos y el resultado superó nuestras expectativas. Empezamos a recibir visitas a la tienda desde redes sociales y la diferencia se notó enseguida.",
    testimonialAuthor: "Marina Rodríguez, Fundadora y CEO de Anfitrite",
    siteUrl: "https://anfitrite.es",
    description:
      "Anfitrite necesitaba una presencia digital que mostrase su catálogo de productos y permitiera a los clientes interactuar con ellos de manera sencilla.",
    work: "Se diseñó una landing enfocada en simplificar la marca, mejorar la experiencia de usuario y facilitar a los clientes el proceso de compra.",
    result: "Mejoras inmediatas en la captación de clientes desde redes sociales y una presencia digital sólida para el crecimiento del negocio.",
    outcomes: [
      "Mayor cantidad de visitas a la tienda desde redes sociales.",
      "Mejoría en las ventas",
      "Aumento en la interacción de los clientes con el catálogo de productos.",
    ],
  },
  {
    name: "Startup SaaS",
    slug: "startup-saas",
    type: "SaaS",
    logo: "/logo.svg",
    heroSummary:
      "Una propuesta mas clara, una estructura mas solida y una landing preparada para convertir trafico en demos.",
    metricValue: "+35%",
    metricLabel: "Conversion a demo",
    testimonialQuote:
      "La nueva landing hizo mucho mas facil explicar el producto y empezar a captar oportunidades.",
    testimonialAuthor: "Equipo Startup SaaS",
    siteUrl: "https://pra2dev.com",
    description:
      "Producto SaaS en fase de crecimiento que necesitaba una landing mas clara para captar demos.",
    work: "Estrategia de mensaje, estructura de landing y desarrollo completo en Next.js.",
    result:
      "Landing publicada en menos de una semana y primeros leads cualificados desde el lanzamiento.",
    outcomes: [
      "+35% en conversion a demo durante las primeras semanas.",
      "Mejor comprension de la propuesta desde el primer scroll.",
      "Equipo comercial con una landing lista para enviar en captacion.",
    ],
  },
  {
    name: "Proyecto Financiado",
    slug: "proyecto-financiado",
    type: "Startup financiada",
    logo: "/globe.svg",
    heroSummary:
      "Una presencia digital mas robusta, pensada para explicar mejor el proyecto y acelerar conversiones.",
    metricValue: "+28%",
    metricLabel: "Solicitudes cualificadas",
    testimonialQuote:
      "La web paso a estar alineada con el nivel real del proyecto y eso se noto enseguida en la respuesta.",
    testimonialAuthor: "Equipo Proyecto Financiado",
    siteUrl: "https://pra2dev.com",
    description:
      "Equipo con financiacion cerrada que debia presentar mejor su propuesta y acelerar conversiones.",
    work: "Rediseno visual, jerarquia de contenidos y optimizacion del flujo de contacto.",
    result:
      "Mejora inmediata en conversion y una presencia digital mucho mas solida para inversores y clientes.",
    outcomes: [
      "+28% en solicitudes cualificadas desde la nueva landing.",
      "Narrativa mas clara para presentar el proyecto a partners e inversores.",
      "Experiencia mas consistente con la madurez real del producto.",
    ],
  },
  {
    name: "Founder Studio",
    slug: "founder-studio",
    type: "Founder-led business",
    logo: "/window.svg",
    heroSummary:
      "Una landing directa y bien estructurada para validar mejor la propuesta y generar conversaciones.",
    metricValue: "+22%",
    metricLabel: "Respuestas iniciales",
    testimonialQuote:
      "Rapido, claro y muy enfocado a resultados. La diferencia se noto desde el primer momento.",
    testimonialAuthor: "Founder Studio",
    siteUrl: "https://pra2dev.com",
    description:
      "Servicio digital con necesidad de validar propuesta y generar reuniones comerciales rapido.",
    work: "Diseno de experiencia, copy orientado a accion y entrega rapida para salir al mercado.",
    result:
      "Proceso mas claro, mejor confianza percibida y un embudo de captacion listo para escalar.",
    outcomes: [
      "Mas respuestas de potenciales clientes en la primera semana.",
      "Menos friccion en el paso de visita a contacto.",
      "Mejor posicionamiento del servicio desde la home hasta el CTA.",
    ],
  },
  {
    name: "Tech Venture",
    slug: "tech-venture",
    type: "Startup B2B",
    logo: "/next.svg",
    heroSummary:
      "Una experiencia mas premium y una narrativa mas clara para apoyar ventas y reforzar confianza.",
    metricValue: "+31%",
    metricLabel: "Calidad percibida",
    testimonialQuote:
      "La web empezo a jugar a favor del equipo comercial en lugar de quedarse solo en presentacion.",
    testimonialAuthor: "Equipo Tech Venture",
    siteUrl: "https://pra2dev.com",
    description:
      "Startup B2B que necesitaba una web con sensacion de producto premium y foco comercial.",
    work: "Concepto visual, sistema de secciones y desarrollo frontend optimizado.",
    result:
      "Mejor calidad percibida y soporte real al equipo de ventas desde la primera visita.",
    outcomes: [
      "Presentacion mas premium para ciclos de venta consultivos.",
      "Mayor claridad en beneficios y diferenciacion del producto.",
      "Base web lista para iterar nuevas campanas sin rehacer la estructura.",
    ],
  },
  {
    name: "Digital Ops",
    slug: "digital-ops",
    type: "Servicio digital",
    logo: "/vercel.svg",
    heroSummary:
      "Una propuesta mas limpia, una accion principal mas visible y una landing construida para captar mejor.",
    metricValue: "+19%",
    metricLabel: "Claridad comercial",
    testimonialQuote:
      "Simplificar el mensaje nos ayudo a atraer mejor al cliente correcto y reducir friccion.",
    testimonialAuthor: "Equipo Digital Ops",
    siteUrl: "https://pra2dev.com",
    description:
      "Servicio profesional con trafico pero sin una pagina capaz de filtrar oportunidades.",
    work: "Reposicionamiento del mensaje, CTA principal y simplificacion de la propuesta.",
    result: "Mas claridad comercial y un recorrido de conversion mucho mas directo.",
    outcomes: [
      "Embudo mas simple y facil de entender para el usuario.",
      "Menos ruido visual y mejor foco en la accion principal.",
      "Landing preparada para captar trafico sin perder claridad comercial.",
    ],
  },
];
