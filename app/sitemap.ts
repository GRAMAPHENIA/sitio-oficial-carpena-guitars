import type { MetadataRoute } from "next"
import { featuredGuitars } from "@/data/guitars"
import { featuredArtists } from "@/data/artists"

export default function sitemap(): MetadataRoute.Sitemap {
  // URL base del sitio
  const baseUrl = "https://carpena-guitars.com"

  // Rutas estáticas principales
  const mainRoutes = [
    "",
    "/guitarras",
    "/bajos",
    "/artistas",
    "/nosotros",
    "/contacto",
    "/faq",
    "/guitarras/custom",
    "/bajos/custom",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Rutas de guitarras
  const guitarRoutes = featuredGuitars
    .filter((guitar) => guitar.href.includes("/guitarras/"))
    .map((guitar) => ({
      url: `${baseUrl}${guitar.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))

  // Rutas de bajos
  const bassRoutes = featuredGuitars
    .filter((bass) => bass.href.includes("/bajos/"))
    .map((bass) => ({
      url: `${baseUrl}${bass.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))

  // Rutas de artistas
  const artistRoutes = featuredArtists.map((artist) => ({
    url: `${baseUrl}/artistas/${artist.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Combinar todas las rutas
  return [...mainRoutes, ...guitarRoutes, ...bassRoutes, ...artistRoutes]
}
