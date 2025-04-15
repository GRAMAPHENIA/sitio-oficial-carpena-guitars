import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import FeaturedGuitars from "@/components/featured-guitars"
import FeaturedArtists from "@/components/featured-artists"
import Testimonials from "@/components/testimonials"
import Gallery from "@/components/gallery"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Guitarra personalizada de alta calidad"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Artesanía y Pasión en Cada Instrumento</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
            Guitarras y bajos personalizados de la más alta calidad, hechos a mano por expertos luthiers
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg">
              <Link href="/guitarras">Explorar Guitarras</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg bg-black/30 text-white border-white hover:bg-black/50"
            >
              <Link href="/bajos">Explorar Bajos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestras Colecciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-lg h-80">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Colección de Guitarras"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Guitarras</h3>
                <p className="text-white/80 mb-4">Fenix, Det Guitar, Valkiria y más</p>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/guitarras" className="flex items-center justify-center">
                    Ver Colección <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg h-80">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Colección de Bajos"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Bajos</h3>
                <p className="text-white/80 mb-4">JDA, Explosion, Stinker y más</p>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/bajos" className="flex items-center justify-center">
                    Ver Colección <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg h-80">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Instrumentos Personalizados"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Custom</h3>
                <p className="text-white/80 mb-4">Diseña tu instrumento soñado</p>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/pedidos" className="flex items-center justify-center">
                    Hacer Pedido <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guitars */}
      <FeaturedGuitars />

      {/* About Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Artesanía de Precisión</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Cada instrumento que creamos es el resultado de años de experiencia, investigación y pasión por la
                música. Utilizamos las mejores maderas y componentes para garantizar un sonido excepcional y una
                durabilidad incomparable.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Nuestro equipo de luthiers expertos trabaja meticulosamente en cada detalle, desde la selección de
                materiales hasta el acabado final, para crear instrumentos que inspiren a los músicos a alcanzar nuevas
                alturas creativas.
              </p>
              <Button asChild size="lg">
                <Link href="/nosotros">Conoce Nuestra Historia</Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Proceso de fabricación de guitarras"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Gallery />

      {/* Featured Artists */}
      <FeaturedArtists />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Interesado en Nuestros Instrumentos?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-primary-foreground/90">
            Contacta con nosotros para obtener más información sobre nuestras guitarras y bajos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contacto" className="text-lg">
                Contactar
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
