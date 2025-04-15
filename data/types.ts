// Tipos para Guitarras
export interface Guitar {
  id: string
  name: string
  category: string
  description: string
  image: string
  price: string
  strings: string
  isNew?: boolean
  href: string
  features?: string[]
  specs?: {
    body: string
    neck: string
    fretboard: string
    frets: number
    pickups: string
    bridge: string
    hardware: string
    finish: string
  }
}

// Tipos para Bajos
export interface Bass {
  id: string
  name: string
  category: string
  description: string
  image: string
  price: string
  strings: string
  isNew?: boolean
  href: string
  features?: string[]
  specs?: {
    body: string
    neck: string
    fretboard: string
    frets: number
    pickups: string
    bridge: string
    hardware: string
    finish: string
  }
}

// Tipos para Artistas
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

// Tipos para Testimonios
export interface Testimonial {
  id: string
  name: string
  title: string
  quote: string
  avatar: string
}

// Tipos para Galería
export interface GalleryImage {
  thumbnail: string
  fullSize: string
  alt: string
  description?: string
}

// Tipos para Merchandising
export interface MerchItem {
  id: string
  name: string
  price: string
  image: string
  category: string
  description: string
  variants?: {
    size?: string[]
    color?: string[]
  }
  inStock: boolean
}

// Tipos para Pedidos
export interface OrderFormData {
  name: string
  email: string
  phone: string
  country: string
  model: string
  strings: string
  bodyWood?: string
  neckWood?: string
  fretboardWood?: string
  pickups?: string
  bridge?: string
  finish?: string
  leftHanded: boolean
  additionalFeatures?: string[]
  comments?: string
  budget: string
  contactPreference: "email" | "phone" | "whatsapp"
  termsAccepted: boolean
}
