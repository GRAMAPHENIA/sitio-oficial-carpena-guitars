import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Bajos | Modelos JDA, Explosion y Stinker",
  description:
    "Explora nuestra colección de bajos personalizados de alta calidad. Modelos de 4, 5 y 6 cuerdas con diseños únicos y sonidos excepcionales.",
}

export default function BajosPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Bajos</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Descubre nuestra colección de bajos personalizados, diseñados y construidos con los más altos estándares de
          calidad
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full mb-12">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="jda">JDA</TabsTrigger>
          <TabsTrigger value="explosion">Explosion</TabsTrigger>
          <TabsTrigger value="stinker">Stinker</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-12">
          <BassCategory
            title="JDA"
            description="Bajos de alta precisión con un sonido clásico y versátil, perfectos para cualquier estilo musical."
            image="/placeholder.svg?height=600&width=1200"
            href="/bajos/jda"
          />

          <BassCategory
            title="Explosion"
            description="Bajos con un sonido explosivo y una definición excepcional en todas las frecuencias."
            image="/placeholder.svg?height=600&width=1200"
            href="/bajos/explosion"
          />

          <BassCategory
            title="Stinker"
            description="Bajos con un diseño moderno y un sonido potente y definido."
            image="/placeholder.svg?height=600&width=1200"
            href="/bajos/stinker"
          />

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">¿Buscas algo único?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Diseña tu bajo personalizado con nuestro equipo de expertos luthiers
            </p>
            <Button asChild size="lg">
              <Link href="/bajos/custom">Bajo Custom</Link>
            </Button>
          </div>
        </TabsContent>

        {/* Contenido para cada pestaña similar a la página de guitarras */}
        <TabsContent value="jda">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">JDA Series</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Bajos de alta precisión con un sonido clásico y versátil, perfectos para cualquier estilo musical. Cada
                bajo JDA ofrece un equilibrio perfecto entre comodidad y rendimiento.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/bajos/jda/4-cuerdas">4 Cuerdas</Link>
                </Button>
                <Button asChild>
                  <Link href="/bajos/jda/5-cuerdas">5 Cuerdas</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Bajo JDA" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            <BassCard
              name="JDA 4"
              image="/placeholder.svg?height=600&width=400"
              description="Bajo de 4 cuerdas con un sonido clásico y versátil, perfecto para cualquier estilo musical."
              href="/bajos/jda/4-cuerdas"
              strings="4"
            />
            <BassCard
              name="JDA 5"
              image="/placeholder.svg?height=600&width=400"
              description="Versión de 5 cuerdas con mayor rango y versatilidad, manteniendo la esencia JDA."
              href="/bajos/jda/5-cuerdas"
              strings="5"
            />
          </div>
        </TabsContent>

        <TabsContent value="explosion">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Explosion Series</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Bajos con un sonido explosivo y una definición excepcional en todas las frecuencias. Diseñados para
                bajistas que buscan potencia y claridad en cualquier contexto.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/bajos/explosion/4-cuerdas">4 Cuerdas</Link>
                </Button>
                <Button asChild>
                  <Link href="/bajos/explosion/5-cuerdas">5 Cuerdas</Link>
                </Button>
                <Button asChild>
                  <Link href="/bajos/explosion/6-cuerdas">6 Cuerdas</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Bajo Explosion" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <BassCard
              name="Explosion 4"
              image="/placeholder.svg?height=600&width=400"
              description="Bajo de 4 cuerdas con un sonido explosivo y una definición excepcional."
              href="/bajos/explosion/4-cuerdas"
              strings="4"
            />
            <BassCard
              name="Explosion 5"
              image="/placeholder.svg?height=600&width=400"
              description="Versión de 5 cuerdas con mayor rango y la misma potencia característica."
              href="/bajos/explosion/5-cuerdas"
              strings="5"
            />
            <BassCard
              name="Explosion 6"
              image="/placeholder.svg?height=600&width=400"
              description="Bajo de 6 cuerdas para músicos que buscan explorar nuevos territorios sonoros."
              href="/bajos/explosion/6-cuerdas"
              strings="6"
              isNew={true}
            />
          </div>
        </TabsContent>

        <TabsContent value="stinker">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Stinker Series</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Bajos con un diseño moderno y un sonido potente y definido. Perfectos para estilos modernos que
                requieren versatilidad y precisión.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/bajos/stinker/4-cuerdas">4 Cuerdas</Link>
                </Button>
                <Button asChild>
                  <Link href="/bajos/stinker/5-cuerdas">5 Cuerdas</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Bajo Stinker" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            <BassCard
              name="Stinker 4"
              image="/placeholder.svg?height=600&width=400"
              description="Bajo de 4 cuerdas con un diseño moderno y un sonido potente y definido."
              href="/bajos/stinker/4-cuerdas"
              strings="4"
            />
            <BassCard
              name="Stinker 5"
              image="/placeholder.svg?height=600&width=400"
              description="Versión de 5 cuerdas con mayor rango y la misma definición característica."
              href="/bajos/stinker/5-cuerdas"
              strings="5"
            />
          </div>
        </TabsContent>
      </Tabs>

      <section className="mt-24 bg-muted rounded-lg p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Bajos Personalizados</h2>
            <p className="text-lg mb-6">
              Nuestro equipo de expertos luthiers crea bajos únicos con las mejores maderas y componentes. Cada bajo es
              una obra de arte diseñada para satisfacer las necesidades específicas de cada músico.
            </p>
            <Button asChild size="lg">
              <Link href="/contacto">Más Información</Link>
            </Button>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=600&width=800" alt="Bajo Custom" fill className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  )
}

function BassCategory({
  title,
  description,
  image,
  href,
}: {
  title: string
  description: string
  image: string
  href: string
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="order-2 md:order-1">
        <h2 className="text-3xl font-bold mb-4">{title} Series</h2>
        <p className="text-lg text-muted-foreground mb-6">{description}</p>
        <Button asChild>
          <Link href={href} className="flex items-center">
            Ver Modelos <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="relative h-[300px] rounded-lg overflow-hidden order-1 md:order-2">
        <Image src={image || "/placeholder.svg"} alt={`Bajos ${title}`} fill className="object-cover" />
      </div>
    </div>
  )
}

function BassCard({
  name,
  image,
  description,
  href,
  strings,
  isNew,
}: {
  name: string
  image: string
  description: string
  href: string
  strings: string
  isNew?: boolean
}) {
  return (
    <Link href={href} className="group">
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {isNew && (
            <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-sm font-medium px-2 py-1 rounded">
              Nuevo
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{name}</h3>
          <p className="text-muted-foreground line-clamp-2 mb-4">{description}</p>
          <div className="flex justify-between items-center">
            <div className="text-sm">
              <span className="font-medium">Cuerdas:</span> {strings}
            </div>
            <div className="text-primary font-medium flex items-center">
              Ver detalles <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
