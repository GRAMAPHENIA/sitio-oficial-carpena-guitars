import Image from "next/image"
import Link from "next/link"
import { featuredArtists } from "@/data/artists"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function FeaturedArtists() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Artistas que Confían en Nosotros</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Músicos profesionales de todo el mundo eligen nuestros instrumentos por su calidad, sonido y confiabilidad
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArtists.slice(0, 3).map((artist) => (
            <Card key={artist.id} className="overflow-hidden">
              <div className="relative h-80">
                <Image src={artist.image || "/placeholder.svg"} alt={artist.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{artist.name}</h3>
                <p className="text-muted-foreground mb-3">{artist.band}</p>
                <p className="mb-4 line-clamp-3">{artist.bio}</p>
                <div className="flex justify-between items-center">
                  {/* <Link
                    href={`/artistas/${artist.slug}`}
                    className="text-primary font-medium hover:underline flex items-center"
                  >
                    Ver perfil <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  {artist.website && (
                    <Link
                      href={artist.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" /> Web
                    </Link>
                  )} */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/artistas">Ver Todos los Artistas</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
