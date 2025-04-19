export interface Guitar {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: string;
  strings: string;
  isNew?: boolean;
  href: string;
  features?: string[];
  specs?: {
    body: string;
    neck: string;
    fretboard: string;
    frets: number;
    pickups: string;
    bridge: string;
    hardware: string;
    finish: string;
  };
}

export const featuredGuitars: Guitar[] = [
  {
    id: "fenix-6-custom",
    name: "Fenix 6 Custom",
    category: "Guitarras Fenix",
    description:
      "Nuestra guitarra insignia con 6 cuerdas, diseñada para músicos exigentes que buscan versatilidad y calidad superior.",
    image: "/placeholder.svg?height=600&width=400",
    price: "Consultar",
    strings: "6",
    isNew: true,
    href: "/guitarras/fenix/6-cuerdas",
    features: [
      "Construcción neck-through",
      "Pastillas de alta ganancia",
      "Hardware premium",
      "Acabado personalizable",
    ],
    specs: {
      body: "Caoba con tapa de arce flameado",
      neck: "Arce/Caoba 5 piezas",
      fretboard: "Ébano",
      frets: 24,
      pickups: "Humbucker/Humbucker",
      bridge: "Floyd Rose Original",
      hardware: "Negro",
      finish: "Satinado",
    },
  },
  {
    id: "det-guitar-7",
    name: "Det Guitar 7",
    category: "Guitarras Det",
    description:
      "Guitarra de 7 cuerdas con un diseño ergonómico y un sonido potente y definido para los estilos más extremos.",
    image: "/placeholder.svg?height=600&width=400",
    price: "Consultar",
    strings: "7",
    href: "/guitarras/det-guitar/7-cuerdas",
    features: [
      "Escala extendida",
      "Pastillas de alta definición",
      "Construcción set-neck",
      "Diapasón con radio compuesto",
    ],
  },
  {
    id: "valkiria-6",
    name: "Valkiria 6",
    category: "Guitarras Valkiria",
    description:
      "Elegancia y potencia en un diseño único. Perfecta para géneros que requieren claridad y punch.",
    image: "/placeholder.svg?height=600&width=400",
    price: "Consultar",
    strings: "6",
    href: "/guitarras/valkiria/6-cuerdas",
  },
  {
    id: "divell-7",
    name: "Divell 7",
    category: "Guitarras Divell",
    description:
      "Diseño agresivo con un sonido contundente. La elección perfecta para metal y géneros extremos.",
    image: "/placeholder.svg?height=600&width=400",
    price: "Consultar",
    strings: "7",
    href: "/guitarras/divell/7-cuerdas",
  },
  {
    id: "explosion-4", // Nuevo elemento agregado
    name: "Explosion 4",
    category: "Bajos Explosion",
    description:
      "Bajo de 4 cuerdas con un sonido explosivo y una definición excepcional en todas las frecuencias.",
    image: "/placeholder.svg?height=600&width=400",
    price: "Consultar",
    strings: "4",
    href: "/bajos/explosion/4-cuerdas",
  },
  {
    id: "explosion-5",
    name: "Explosion 5",
    category: "Bajos Explosion",
    description:
      "Bajo de 5 cuerdas con un sonido explosivo y una definición excepcional en todas las frecuencias.",
    image: "/placeholder.svg?height=600&width=400",
    price: "Consultar",
    strings: "5",
    href: "/bajos/explosion/5-cuerdas",
  },
  {
    id: "explosion-6", // Nuevo elemento agregado
    name: "Explosion 6",
    category: "Bajos Explosion",
    description:
      "Bajo de 6 cuerdas con un sonido explosivo y una definición excepcional en todas las frecuencias.",
    image: "/placeholder.svg?height=600&width=400",
    price: "Consultar",
    strings: "6",
    href: "/bajos/explosion/6-cuerdas",
  },
  {
    id: "jda-4",
    name: "JDA 4",
    category: "Bajos JDA",
    description:
      "Bajo de 4 cuerdas con un sonido clásico y versátil, perfecto para cualquier estilo musical.",
    image: "/placeholder.svg?height=600&width=400",
    price: "Consultar",
    strings: "4",
    href: "/bajos/jda/4-cuerdas",
  },
  {
    id: "jda-5",
    name: "JDA 5",
    category: "Bajos JDA",
    description:
      "Bajo de 5 cuerdas con un sonido moderno y versátil.",
    image: "/placeholder.svg?height=600&width=400",
    price: "Consultar",
    strings: "5",
    href: "/bajos/jda/5-cuerdas",
  },
  {
    id: "stinker-5",
    name: "Stinker 5",
    category: "Bajos Stinker",
    description:
      "Bajo de 5 cuerdas con un diseño moderno y un sonido potente y definido.",
    image: "/placeholder.svg?height=600&width=400",
    price: "Consultar",
    strings: "5",
    href: "/bajos/stinker/5-cuerdas",
  },
  {
    id: "fenix-8-custom",
    name: "Fenix 8 Custom",
    category: "Guitarras Fenix",
    description:
      "Nuestra guitarra de 8 cuerdas más avanzada, diseñada para músicos que buscan explorar nuevos territorios sonoros.",
    image: "/placeholder.svg?height=600&width=400",
    price: "Consultar",
    strings: "8",
    isNew: true,
    href: "/guitarras/fenix/8-cuerdas",
  },
];
