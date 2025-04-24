import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Guitarras | Modelos Fenix, Det Guitar, Valkiria y Divell",
  description:
    "Explora nuestra colección de guitarras personalizadas de alta calidad. Modelos de 6, 7 y 8 cuerdas con diseños únicos y sonidos excepcionales.",
}

export default function GuitarrasPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestras Guitarras</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Descubre nuestra colección de guitarras personalizadas, diseñadas y construidas con los más altos estándares
          de calidad
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full mb-12">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-14
        lg:mb-8">
          <TabsTrigger value="all">Todas</TabsTrigger>
          <TabsTrigger value="fenix">Fenix</TabsTrigger>
          <TabsTrigger value="det-guitar">Det Guitar</TabsTrigger>
          <TabsTrigger value="valkiria">Valkiria</TabsTrigger>
          <TabsTrigger value="divell">Divell</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-12">
          <GuitarCategory
            title="Fenix"
            description="Nuestra línea insignia de guitarras, diseñada para músicos exigentes que buscan versatilidad y calidad superior."
            image="/placeholder.svg?height=600&width=1200"
            href="/guitarras/fenix"
          />

          <GuitarCategory
            title="Det Guitar"
            description="Guitarras con un diseño ergonómico y un sonido potente y definido para los estilos más extremos."
            image="/placeholder.svg?height=600&width=1200"
            href="/guitarras/det-guitar"
          />

          <GuitarCategory
            title="Valkiria"
            description="Elegancia y potencia en un diseño único. Perfectas para géneros que requieren claridad y punch."
            image="/placeholder.svg?height=600&width=1200"
            href="/guitarras/valkiria"
          />

          <GuitarCategory
            title="Divell"
            description="Diseño agresivo con un sonido contundente. La elección perfecta para metal y géneros extremos."
            image="/placeholder.svg?height=600&width=1200"
            href="/guitarras/divell"
          />

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">¿Buscas algo único?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Diseña tu guitarra personalizada con nuestro equipo de expertos luthiers
            </p>
            <Button asChild size="lg">
              <Link href="/guitarras/custom">Guitarra Custom</Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="fenix">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Fenix Series</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nuestra línea insignia de guitarras, diseñada para músicos exigentes que buscan versatilidad y calidad
                superior. Cada guitarra Fenix es construida con maderas seleccionadas y componentes de la más alta
                calidad.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>Construcción neck-through para máxima sustain</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>Pastillas de alta ganancia seleccionadas</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>Hardware premium para mayor estabilidad</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>Acabados personalizables según tus preferencias</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/guitarras/fenix/6-cuerdas">6 Cuerdas</Link>
                </Button>
                <Button asChild>
                  <Link href="/guitarras/fenix/7-cuerdas">7 Cuerdas</Link>
                </Button>
                <Button asChild>
                  <Link href="/guitarras/fenix/8-cuerdas">8 Cuerdas</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Guitarra Fenix" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <GuitarCard
              name="Fenix 6 Custom"
              image="/placeholder.svg?height=600&width=400"
              description="Nuestra guitarra insignia con 6 cuerdas, diseñada para músicos exigentes."
              href="/guitarras/fenix/6-cuerdas"
              strings="6"
            />
            <GuitarCard
              name="Fenix 7 Custom"
              image="/placeholder.svg?height=600&width=400"
              description="Versión de 7 cuerdas con un rango extendido para estilos más pesados."
              href="/guitarras/fenix/7-cuerdas"
              strings="7"
            />
            <GuitarCard
              name="Fenix 8 Custom"
              image="/placeholder.svg?height=600&width=400"
              description="Nuestra guitarra de 8 cuerdas más avanzada para explorar nuevos territorios sonoros."
              href="/guitarras/fenix/8-cuerdas"
              strings="8"
              isNew={true}
            />
          </div>
        </TabsContent>

        <TabsContent value="det-guitar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Det Guitar Series</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Guitarras con un diseño ergonómico y un sonido potente y definido para los estilos más extremos. Cada
                Det Guitar ofrece una combinación perfecta de comodidad y rendimiento.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>Escala extendida para mayor tensión y definición</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>Pastillas de alta definición para estilos modernos</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>Construcción set-neck para mayor comodidad</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>Diapasón con radio compuesto para mayor comodidad</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/guitarras/det-guitar/6-cuerdas">6 Cuerdas</Link>
                </Button>
                <Button asChild>
                  <Link href="/guitarras/det-guitar/7-cuerdas">7 Cuerdas</Link>
                </Button>
                <Button asChild>
                  <Link href="/guitarras/det-guitar/8-cuerdas">8 Cuerdas</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Guitarra Det Guitar"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <GuitarCard
              name="Det Guitar 6"
              image="/placeholder.svg?height=600&width=400"
              description="Guitarra de 6 cuerdas con un diseño ergonómico y un sonido potente."
              href="/guitarras/det-guitar/6-cuerdas"
              strings="6"
            />
            <GuitarCard
              name="Det Guitar 7"
              image="/placeholder.svg?height=600&width=400"
              description="Guitarra de 7 cuerdas con escala extendida para mayor definición."
              href="/guitarras/det-guitar/7-cuerdas"
              strings="7"
            />
            <GuitarCard
              name="Det Guitar 8"
              image="/placeholder.svg?height=600&width=400"
              description="Guitarra de 8 cuerdas para los estilos más extremos y experimentales."
              href="/guitarras/det-guitar/8-cuerdas"
              strings="8"
            />
          </div>
        </TabsContent>

        <TabsContent value="valkiria">
          {/* Contenido similar para Valkiria */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Valkiria Series</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Elegancia y potencia en un diseño único. Perfectas para géneros que requieren claridad y punch. Las
                guitarras Valkiria combinan estética clásica con prestaciones modernas.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/guitarras/valkiria/6-cuerdas">6 Cuerdas</Link>
                </Button>
                <Button asChild>
                  <Link href="/guitarras/valkiria/7-cuerdas">7 Cuerdas</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Guitarra Valkiria"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            <GuitarCard
              name="Valkiria 6"
              image="/placeholder.svg?height=600&width=400"
              description="Elegancia y potencia en un diseño único. Perfecta para géneros que requieren claridad y punch."
              href="/guitarras/valkiria/6-cuerdas"
              strings="6"
            />
            <GuitarCard
              name="Valkiria 7"
              image="/placeholder.svg?height=600&width=400"
              description="Versión de 7 cuerdas con un rango extendido manteniendo la elegancia característica."
              href="/guitarras/valkiria/7-cuerdas"
              strings="7"
            />
          </div>
        </TabsContent>

        <TabsContent value="divell">
          {/* Contenido similar para Divell */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Divell Series</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Diseño agresivo con un sonido contundente. La elección perfecta para metal y géneros extremos. Las
                guitarras Divell están diseñadas para ofrecer máxima potencia y definición.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/guitarras/divell/6-cuerdas">6 Cuerdas</Link>
                </Button>
                <Button asChild>
                  <Link href="/guitarras/divell/7-cuerdas">7 Cuerdas</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Guitarra Divell" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            <GuitarCard
              name="Divell 6"
              image="/placeholder.svg?height=600&width=400"
              description="Diseño agresivo con un sonido contundente. Perfecta para metal y géneros extremos."
              href="/guitarras/divell/6-cuerdas"
              strings="6"
            />
            <GuitarCard
              name="Divell 7"
              image="/placeholder.svg?height=600&width=400"
              description="Versión de 7 cuerdas con un diseño aún más agresivo para los estilos más extremos."
              href="/guitarras/divell/7-cuerdas"
              strings="7"
            />
          </div>
        </TabsContent>
      </Tabs>

      <section className="mt-24 bg-muted rounded-lg p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Guitarras Personalizadas</h2>
            <p className="text-lg mb-6">
              Nuestro equipo de expertos luthiers crea instrumentos únicos con las mejores maderas y componentes. Cada
              guitarra es una obra de arte diseñada para satisfacer las necesidades específicas de cada músico.
            </p>
            <Button asChild size="lg">
              <Link href="/contacto">Más Información</Link>
            </Button>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=600&width=800" alt="Guitarra Custom" fill className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  )
}

function GuitarCategory({
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
        <Image src={image || "/placeholder.svg"} alt={`Guitarras ${title}`} fill className="object-cover" />
      </div>
    </div>
  )
}

function GuitarCard({
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
