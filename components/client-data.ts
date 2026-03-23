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
  status: "Finalizado" | "En desarrollo" | "Concepto" | "Proyecto interno";
};

export const clients: Client[] = [
  {
    name: "Anfitrite Complementos",
    slug: "anfitrite",
    type: "Web-galeria para tienda de complementos artesanales",
    logo: "/anfitritelogo.svg",
    heroSummary:
      "Una landing clara, estructurada y pensada para generar clientes desde la primera visita.",
    metricValue: "+35%",
    metricLabel: "Visitas a las redes sociales, donde se realizan las ventas.",
    testimonialQuote:
      "Pasamos de no tener nada a tener una presencia digital que por fin transmitia bien la marca y nos ayudaba a atraer visitas. El equipo de pra2dev comprendio enseguida lo que necesitabamos y trabajo rapido para sacar adelante nuestras peticiones.",
    testimonialAuthor: "Marina Rodriguez, Fundadora de Anfitrite",
    siteUrl: "https://anfitrite.es",
    description:
      "Anfitrite necesitaba una presencia digital que mostrase su catalogo de forma cuidada y facilitase el primer contacto con potenciales clientes.",
    work: "Se diseno una landing visual, ligera y enfocada en presentar colecciones, reforzar confianza y derivar trafico hacia sus redes.",
    result:
      "La marca gano una presencia digital solida y centralizo todos los productos en una pagina web sencilla para los clientes.",
    outcomes: [
      "Mayor cantidad de visitas a las redes sociales, y por consecuente, aumento en las ventas.",
      "Mas claridad al presentar la marca y sus colecciones.",
      "Mejor experiencia para descubrir productos y contactar.",
    ],
    status: "Finalizado",
  },
  {
    name: "pra2dev",
    slug: "pra2dev",
    type: "Proyecto interno para mostrar como planteamos webs orientadas a conversion",
    logo: "/logo.svg",
    heroSummary:
      "Una demo funcional creada para ensenar de forma directa el tipo de estructura, mensaje y acabado que desarrollamos para clientes.",
    metricValue: "Proyecto interno",
    metricLabel: "Demo funcional de pra2dev",
    testimonialQuote:
      "Esta web funciona como una muestra real de nuestro enfoque: claridad, estructura y foco en conversion, sin venderlo como un caso externo.",
    testimonialAuthor: "pra2dev",
    siteUrl: "https://pra2dev.com",
    description:
      "Es un proyecto propio pensado para ensenar con una web real como trabajamos el mensaje, la jerarquia visual y la conversion en servicios digitales.",
    work: "Se definio como sistema interno de demostracion: estructura reusable, bloques orientados a captar interes y una presentacion clara del servicio.",
    result:
      "Permite ensenar criterio, nivel de ejecucion y enfoque comercial de forma transparente, sin presentarlo como cliente externo.",
    outcomes: [
      "Aporta una referencia real y navegable de como planteamos una web comercial.",
      "Refuerza la percepcion de nivel sin atribuir resultados a un cliente inexistente.",
      "Sirve como base para explicar a futuros clientes el tipo de sistema que desarrollamos.",
    ],
    status: "Proyecto interno",
  },
  {
    name: "Administradores de Fincas Castro",
    slug: "admin_castro",
    type: "Web comercial para empresa de administracion de fincas y abogacia",
    logo: "/globe.svg",
    heroSummary:
      "Un proyecto en desarrollo para ordenar la propuesta, reforzar la marca y preparar una web lista para captar interes comercial.",
    metricValue: "En curso",
    metricLabel: "Diseno y desarrollo",
    testimonialQuote:
      "El objetivo es salir con una web que no solo se vea bien, sino que ayude de verdad a captar clientes.",
    testimonialAuthor: "Victor Castro, jefe departamento de abogacia",
    description:
      "Esta empresa estaba sin marca digital alguna, el objetivo es que su marca se adentre en internet como es debido.",
    work: "Estamos definiendo estructura y direccion visual para el desarrollo de la landing.",
    result:
      "El proyecto avanza con una base clara de mensaje, una estructura validada y una experiencia pensada para activarse en cuanto se publique.",
    outcomes: [
      "Arquitectura preparada para crecer con nuevas lineas o campanas.",
      "Mejor narrativa comercial para captar interes desde el primer scroll.",
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
