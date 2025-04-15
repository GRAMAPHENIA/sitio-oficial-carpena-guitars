import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronRight,
  Instagram,
  Facebook,
  Youtube,
  ExternalLink,
  ArrowLeft,
  Music,
  User,
  GuitarIcon,
} from "lucide-react"
import { featuredArtists } from "@/data/artists"
import { featuredGuitars } from "@/data/guitars"

type Props = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: Props): Metadata {
  const artist = getArtist(params.slug)

  if (!artist) {
    return {
      title: "Artista no encontrado",
      description: "El artista que estás buscando no existe o ha sido eliminado.",
    }
  }

  return {
    title: `${artist.name} | ${artist.band}`,
    description: artist.bio,
  }
}

export default function ArtistDetailPage({ params }: Props) {
  const artist = getArtist(params.slug)

  if (!artist) {
    notFound()
  }

  // Obtener artistas relacionados (diferentes artistas)
  const relatedArtists = featuredArtists.filter((a) => a.id !== artist.id).slice(0, 3)

  // Obtener instrumentos del artista
  const artistInstruments = artist.instruments.map((instrumentName) => {
    // Buscar el instrumento en featuredGuitars que coincida con el nombre
    const instrument = featuredGuitars.find((g) => g.name === instrumentName)
    return instrument || { name: instrumentName, href: "#", image: "/placeholder.svg" }
  })

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-wrap items-center gap-2 mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Inicio
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/artistas" className="hover:text-foreground">
          Artistas
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{artist.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-6">
              <Image
                src={artist.image || "/placeholder.svg"}
                alt={artist.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <h1 className="text-3xl font-bold mb-2">{artist.name}</h1>
            <p className="text-xl text-muted-foreground mb-4">{artist.band}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {artist.instruments.map((instrument, index) => (
                <span key={index} className="bg-muted text-muted-foreground text-sm px-3 py-1 rounded-full">
                  {instrument}
                </span>
              ))}
            </div>

            <div className="flex space-x-3 mb-6">
              {artist.social?.instagram && (
                <Link
                  href={artist.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              )}
              {artist.social?.facebook && (
                <Link
                  href={artist.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              )}
              {artist.social?.youtube && (
                <Link
                  href={artist.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              )}
              {artist.website && (
                <Link
                  href={artist.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span className="sr-only">Website</span>
                </Link>
              )}
            </div>

            <Button asChild className="w-full">
              <Link href="/contacto">Contactar</Link>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Tabs defaultValue="bio" className="mb-16">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="bio" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Biografía</span>
              </TabsTrigger>
              <TabsTrigger value="instruments" className="flex items-center gap-2">
                <GuitarIcon className="h-4 w-4" />
                <span>Instrumentos</span>
              </TabsTrigger>
              <TabsTrigger value="music" className="flex items-center gap-2">
                <Music className="h-4 w-4" />
                <span>Música</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="bio" className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Biografía</h2>
              <div className="prose max-w-none">
                <p>{artist.bio}</p>
                <p>
                  {artist.name} es reconocido por su técnica excepcional y su estilo único que ha influenciado a
                  numerosos músicos en la escena. Su dedicación a la música y su constante búsqueda de la excelencia lo
                  han convertido en uno de los artistas más respetados en su género.
                </p>
                <p>
                  Comenzó su carrera musical a temprana edad, mostrando un talento natural para el instrumento. A lo
                  largo de los años, ha perfeccionado su técnica y desarrollado un estilo distintivo que combina
                  influencias de diversos géneros musicales.
                </p>
                <p>
                  Como miembro fundador de {artist.band}, ha participado en numerosas giras nacionales e
                  internacionales, compartiendo escenario con algunos de los nombres más importantes de la industria
                  musical. Su trabajo con la banda ha sido aclamado por la crítica y ha ganado una base de seguidores
                  leales en todo el mundo.
                </p>
                <p>
                  Además de su trabajo con {artist.band}, {artist.name} ha colaborado con diversos artistas y ha
                  participado en proyectos paralelos que le han permitido explorar diferentes facetas de su creatividad
                  musical.
                </p>
                <p>
                  Su elección de instrumentos refleja su compromiso con la calidad y su búsqueda del sonido perfecto.
                  Confía en nuestras guitarras para lograr el tono y la respuesta que necesita para expresar su visión
                  musical.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="instruments" className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Instrumentos</h2>
              <p className="text-muted-foreground mb-6">
                Estos son los instrumentos que {artist.name} utiliza actualmente en sus grabaciones y presentaciones en
                vivo.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {artistInstruments.map((instrument, index) => (
                  <Link key={index} href={instrument.href} className="group">
                    <div className="border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={instrument.image || "/placeholder.svg"}
                          alt={instrument.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                          {instrument.name}
                        </h3>
                        <p className="text-primary font-medium">Ver detalles</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="bg-muted rounded-lg p-6 mt-8">
                <h3 className="font-bold text-lg mb-2">Configuración personalizada</h3>
                <p className="text-muted-foreground mb-4">
                  {artist.name} utiliza una configuración personalizada en sus instrumentos para lograr su sonido
                  característico. Algunas de las modificaciones incluyen:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Pastillas personalizadas para un tono más definido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Perfil de mástil ajustado a sus preferencias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Sistema de cableado optimizado para reducir el ruido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Acabado personalizado exclusivo</span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="music" className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Música</h2>
              <p className="text-muted-foreground mb-6">
                Descubre la música de {artist.name} con {artist.band} y sus otros proyectos.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Álbumes destacados</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="relative aspect-square">
                        <Image
                          src="/placeholder.svg?height=400&width=400"
                          alt="Álbum 1"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold mb-1">Nombre del Álbum</h4>
                        <p className="text-sm text-muted-foreground mb-2">{artist.band} (2022)</p>
                        <Link
                          href="#"
                          className="text-primary text-sm font-medium hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Escuchar en Spotify
                        </Link>
                      </div>
                    </div>
                    <div className="border rounded-lg overflow-hidden">
                      <div className="relative aspect-square">
                        <Image
                          src="/placeholder.svg?height=400&width=400"
                          alt="Álbum 2"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold mb-1">Nombre del Álbum</h4>
                        <p className="text-sm text-muted-foreground mb-2">{artist.band} (2020)</p>
                        <Link
                          href="#"
                          className="text-primary text-sm font-medium hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Escuchar en Spotify
                        </Link>
                      </div>
                    </div>
                    <div className="border rounded-lg overflow-hidden">
                      <div className="relative aspect-square">
                        <Image
                          src="/placeholder.svg?height=400&width=400"
                          alt="Álbum 3"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold mb-1">Nombre del Álbum</h4>
                        <p className="text-sm text-muted-foreground mb-2">{artist.band} (2018)</p>
                        <Link
                          href="#"
                          className="text-primary text-sm font-medium hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Escuchar en Spotify
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Videos destacados</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Video 1"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center">
                            <div className="h-0 w-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold mb-1">Título del Video</h4>
                        <p className="text-sm text-muted-foreground">Videoclip oficial</p>
                      </div>
                    </div>
                    <div className="border rounded-lg overflow-hidden">
                      <div className="relative aspect-video">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Video 2"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center">
                            <div className="h-0 w-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold mb-1">Título del Video</h4>
                        <p className="text-sm text-muted-foreground">Actuación en vivo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <Separator className="my-12" />

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Próximos conciertos</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center">
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="font-bold">Festival de Música</div>
                  <div className="text-muted-foreground">Buenos Aires, Argentina</div>
                </div>
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="font-medium">15 de Octubre, 2023</div>
                  <div className="text-sm text-muted-foreground">20:00 hs</div>
                </div>
                <div>
                  <Button asChild variant="outline" size="sm">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      Entradas
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center">
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="font-bold">Teatro Gran Rex</div>
                  <div className="text-muted-foreground">Buenos Aires, Argentina</div>
                </div>
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="font-medium">22 de Octubre, 2023</div>
                  <div className="text-sm text-muted-foreground">21:00 hs</div>
                </div>
                <div>
                  <Button asChild variant="outline" size="sm">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      Entradas
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center">
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="font-bold">Estadio Obras</div>
                  <div className="text-muted-foreground">Buenos Aires, Argentina</div>
                </div>
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="font-medium">5 de Noviembre, 2023</div>
                  <div className="text-sm text-muted-foreground">20:30 hs</div>
                </div>
                <div>
                  <Button asChild variant="outline" size="sm">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      Entradas
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {relatedArtists.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Otros artistas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArtists.map((relatedArtist) => (
                  <Link key={relatedArtist.id} href={`/artistas/${relatedArtist.slug}`} className="group">
                    <div className="border rounded-lg overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={relatedArtist.image || "/placeholder.svg"}
                          alt={relatedArtist.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                          {relatedArtist.name}
                        </h3>
                        <p className="text-muted-foreground mb-3">{relatedArtist.band}</p>
                        <div className="text-primary font-medium">Ver perfil</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-center">
            <Button asChild variant="outline" className="flex items-center gap-2">
              <Link href="/artistas">
                <ArrowLeft className="h-4 w-4" />
                <span>Volver a todos los artistas</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function getArtist(slug: string) {
  return featuredArtists.find((artist) => artist.slug === slug)
}
