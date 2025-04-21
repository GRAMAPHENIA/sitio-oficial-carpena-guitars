import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { featuredArtists } from "@/data/artists"
import { ExternalLink, Instagram, Facebook, Youtube } from "lucide-react"

export const metadata: Metadata = {
  title: "Artistas | Músicos que Confían en Nuestros Instrumentos",
  description:
    "Conoce a los artistas que utilizan nuestras guitarras y bajos. Músicos profesionales de todo el mundo eligen nuestros instrumentos por su calidad y sonido.",
}

export default function ArtistasPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Artistas</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Músicos profesionales de todo el mundo eligen nuestros instrumentos por su calidad, sonido y confiabilidad
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredArtists.map((artist) => (
          <Card key={artist.id} className="overflow-hidden">
            <div className="relative h-80">
              <Image src={artist.image || "/placeholder.svg"} alt={artist.name} fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">{artist.name}</h3>
              <p className="text-muted-foreground mb-3">{artist.band}</p>
              <p className="mb-4 line-clamp-3">{artist.bio}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {artist.instruments.map((instrument, index) => (
                  <span key={index} className="bg-muted text-muted-foreground text-sm px-2 py-1 rounded">
                    {instrument}
                  </span>
                ))}
              </div>

              {/* <div className="flex justify-between items-center">
                <Link href={`/artistas/${artist.slug}`} className="text-primary font-medium hover:underline">
                  Ver perfil completo
                </Link>
                <div className="flex space-x-2">
                  {artist.social?.instagram && (
                    <Link
                      href={artist.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
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
                      className="text-muted-foreground hover:text-foreground"
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
                      className="text-muted-foreground hover:text-foreground"
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
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span className="sr-only">Website</span>
                    </Link>
                  )}
                </div>
              </div> */}
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-24 bg-muted rounded-lg p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">¿Eres un Artista?</h2>
            <p className="text-lg mb-6">
              Si eres un músico profesional y estás interesado en nuestros instrumentos, nos encantaría hablar contigo.
              Ofrecemos programas de endorsement para artistas que comparten nuestra pasión por la música y la calidad.
            </p>
            <Button asChild size="lg">
              <Link href="/contacto">Contactar para Endorsement</Link>
            </Button>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Artista tocando en vivo"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
