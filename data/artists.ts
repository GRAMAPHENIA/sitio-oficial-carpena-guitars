export interface Artist {
  id: string
  name: string
  slug: string
  band: string
  image: string
  bio: string
  instruments: string[]
  website?: string
  social?: {
    instagram?: string
    facebook?: string
    youtube?: string
  }
  featured?: boolean
}

export const featuredArtists: Artist[] = [
  {
    id: "chowy-fernandez",
    name: "Chowy Fernandez",
    slug: "chowy-fernandez",
    band: "Barro – Chowy Fernandez Proyect",
    image: "/placeholder.svg?height=800&width=600",
    bio: "Reconocido guitarrista con una técnica impecable y un estilo único que fusiona diferentes géneros musicales.",
    instruments: ["Fenix 6 Custom", "Fenix 7 Custom"],
    website: "https://example.com/chowy",
    social: {
      instagram: "https://instagram.com/chowy",
      youtube: "https://youtube.com/chowy",
    },
    featured: true,
  },
  {
    id: "rod-zamora",
    name: "Rod Zamora",
    slug: "rod-zamora",
    band: "Darlo Todo – Los Turkos",
    image: "/placeholder.svg?height=800&width=600",
    bio: "Virtuoso guitarrista conocido por su versatilidad y dominio técnico en diversos estilos musicales.",
    instruments: ["Det Guitar 7", "Valkiria 6"],
    social: {
      instagram: "https://instagram.com/rod",
      facebook: "https://facebook.com/rod",
    },
    featured: true,
  },
  {
    id: "juani-de-abreu",
    name: "Juani de Abreu",
    slug: "juani-de-abreu",
    band: "Plan 4",
    image: "/placeholder.svg?height=800&width=600",
    bio: "Talentoso guitarrista con un estilo agresivo y técnico, referente en la escena del metal progresivo.",
    instruments: ["Divell 7", "Fenix 8 Custom"],
    website: "https://example.com/juani",
    social: {
      instagram: "https://instagram.com/juani",
      youtube: "https://youtube.com/juani",
    },
    featured: true,
  },
  {
    id: "german-bielnerkorn",
    name: "German Bielnerkorn",
    slug: "german-bielnerkorn",
    band: "Taenia",
    image: "/placeholder.svg?height=800&width=600",
    bio: "Innovador guitarrista que explora constantemente nuevos sonidos y técnicas en el metal extremo.",
    instruments: ["Fenix 7 Custom", "Det Guitar 8"],
    featured: true,
  },
  {
    id: "brian-spindola",
    name: "Brian Spindola",
    slug: "brian-spindola",
    band: "Del Infierno",
    image: "/placeholder.svg?height=800&width=600",
    bio: "Guitarrista de gran técnica y creatividad, conocido por sus riffs potentes y solos melódicos.",
    instruments: ["Divell 6", "Fenix 6 Custom"],
    featured: true,
  },
  {
    id: "facundo-gatelett",
    name: "Facundo Gatelett",
    slug: "facundo-gatelett",
    band: "Jaque Reina",
    image: "/placeholder.svg?height=800&width=600",
    bio: "Bajista virtuoso con un estilo único que combina técnica y groove en partes iguales.",
    instruments: ["JDA 5", "Explosion 6"],
    featured: true,
  },
]
