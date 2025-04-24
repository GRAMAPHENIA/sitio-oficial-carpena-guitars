import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ChevronRight, Star, Info, Settings, Music, ArrowLeft } from "lucide-react"
import { featuredGuitars } from "@/data/guitars"

type Props = {
  params: {
    model: string
    type: string
  }
}

export async function generateStaticParams() {
  // Crear un array de objetos con los parámetros para cada ruta
  const paths = featuredGuitars
    .filter((guitar) => guitar.href.includes("/guitarras/"))
    .map((guitar) => {
      const segments = guitar.href.split("/")
      // La estructura de la URL es /guitarras/[model]/[type]
      return {
        model: segments[2],
        type: segments[3],
      }
    })

  return paths
}

export function generateMetadata({ params }: Props): Metadata {
  const guitar = getGuitar(params.model, params.type)

  if (!guitar) {
    return {
      title: "Guitarra no encontrada",
      description: "La guitarra que estás buscando no existe o ha sido eliminada.",
    }
  }

  return {
    title: `${guitar.name} | Guitarras ${params.model.charAt(0).toUpperCase() + params.model.slice(1)}`,
    description: guitar.description,
  }
}

export default function GuitarDetailPage({ params }: Props) {
  const guitar = getGuitar(params.model, params.type)

  if (!guitar) {
    return (
      <div className="container mx-auto py-16 px-4 md:px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Modelo no encontrado</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Lo sentimos, el modelo de guitarra que estás buscando no existe o ha sido descontinuado.
        </p>
        <div className="mb-12">
          <h2 className="text-xl font-medium mb-4">¿Qué puedes hacer ahora?</h2>
          <ul className="space-y-2 max-w-md mx-auto text-left">
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <ChevronRight className="h-3 w-3 text-primary" />
              </div>
              <span>Explorar nuestra colección completa de guitarras</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <ChevronRight className="h-3 w-3 text-primary" />
              </div>
              <span>Contactar con nosotros para consultar sobre modelos personalizados</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <ChevronRight className="h-3 w-3 text-primary" />
              </div>
              <span>Revisar nuestros modelos más populares</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/guitarras">Ver todas las guitarras</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contacto">Contactar</Link>
          </Button>
        </div>
      </div>
    )
  }

  // Obtener guitarras relacionadas (mismo modelo, diferente tipo)
  const relatedGuitars = featuredGuitars
    .filter((g) => g.href.includes(`/guitarras/${params.model}`) && g.href !== guitar.href)
    .slice(0, 3)

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-wrap items-center gap-2 mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Inicio
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/guitarras" className="hover:text-foreground">
          Guitarras
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/guitarras/${params.model}`} className="hover:text-foreground capitalize">
          {params.model}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{guitar.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <div className="relative aspect-square rounded-lg overflow-hidden border">
            <Image src={guitar.image || "/placeholder.svg"} alt={guitar.name} fill className="object-cover" priority />
            {guitar.isNew && <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">Nuevo</Badge>}
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden border cursor-pointer">
              <Image
                src={guitar.image || "/placeholder.svg"}
                alt={`${guitar.name} - Vista frontal`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden border cursor-pointer">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt={`${guitar.name} - Vista trasera`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden border cursor-pointer">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt={`${guitar.name} - Detalle mástil`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden border cursor-pointer">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt={`${guitar.name} - Detalle cuerpo`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{guitar.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-muted-foreground">(12 opiniones)</span>
          </div>

          <p className="text-lg text-muted-foreground mb-6">{guitar.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border rounded-md p-3">
              <div className="text-sm text-muted-foreground">Categoría</div>
              <div className="font-medium">{guitar.category}</div>
            </div>
            <div className="border rounded-md p-3">
              <div className="text-sm text-muted-foreground">Cuerdas</div>
              <div className="font-medium">{guitar.strings}</div>
            </div>
          </div>

          {guitar.features && (
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Características principales</h3>
              <ul className="space-y-2">
                {guitar.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Separator className="my-6" />

          <div className="mb-6">
            <div className="text-xl font-bold mb-2">{guitar.price}</div>
            <p className="text-sm text-muted-foreground">
              Precio base. El precio final puede variar según las opciones seleccionadas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="flex-1 py-2">
              <Link href="/contacto">Solicitar información</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex-1 py-2">
              <Link href="/contacto">Consultar disponibilidad</Link>
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="specs" className="mb-16">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="specs" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span>Datos</span>
          </TabsTrigger>
          <TabsTrigger value="details" className="flex items-center gap-2">
            <Info className="h-4 w-4" />
            <span>Detalles</span>
          </TabsTrigger>
          <TabsTrigger value="sound" className="flex items-center gap-2">
            <Music className="h-4 w-4" />
            <span>Sonido</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="specs" className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Datos técnicos</h2>

          {guitar.specs ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-b pb-2">
                  <div className="text-sm text-muted-foreground">Cuerpo</div>
                  <div className="font-medium">{guitar.specs.body}</div>
                </div>
                <div className="border-b pb-2">
                  <div className="text-sm text-muted-foreground">Mástil</div>
                  <div className="font-medium">{guitar.specs.neck}</div>
                </div>
                <div className="border-b pb-2">
                  <div className="text-sm text-muted-foreground">Diapasón</div>
                  <div className="font-medium">{guitar.specs.fretboard}</div>
                </div>
                <div className="border-b pb-2">
                  <div className="text-sm text-muted-foreground">Trastes</div>
                  <div className="font-medium">{guitar.specs.frets}</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-b pb-2">
                  <div className="text-sm text-muted-foreground">Pastillas</div>
                  <div className="font-medium">{guitar.specs.pickups}</div>
                </div>
                <div className="border-b pb-2">
                  <div className="text-sm text-muted-foreground">Puente</div>
                  <div className="font-medium">{guitar.specs.bridge}</div>
                </div>
                <div className="border-b pb-2">
                  <div className="text-sm text-muted-foreground">Hardware</div>
                  <div className="font-medium">{guitar.specs.hardware}</div>
                </div>
                <div className="border-b pb-2">
                  <div className="text-sm text-muted-foreground">Acabado</div>
                  <div className="font-medium">{guitar.specs.finish}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-muted-foreground">
              Especificaciones detalladas próximamente. Contacta con nosotros para más información.
            </div>
          )}
        </TabsContent>

        <TabsContent value="details">
          <h2 className="text-2xl font-bold mb-4">Detalles del producto</h2>
          <div className="prose max-w-none">
            <p>
              La {guitar.name} es una guitarra diseñada para músicos exigentes que buscan un instrumento de alta calidad
              con un sonido excepcional y una jugabilidad superior.
            </p>
            <p>
              Cada {guitar.name} es construida a mano por nuestros expertos luthiers, utilizando maderas seleccionadas y
              componentes de la más alta calidad. El resultado es un instrumento que no solo suena increíble, sino que
              también es una obra de arte visual.
            </p>
            <p>
              La atención al detalle es evidente en cada aspecto de esta guitarra, desde la precisión del trabajo en el
              mástil hasta el acabado impecable del cuerpo. Cada instrumento pasa por un riguroso proceso de control de
              calidad para garantizar que cumpla con nuestros altos estándares.
            </p>
            <p>
              Además, ofrecemos opciones de personalización para adaptar la guitarra a tus preferencias específicas.
              Puedes elegir entre diferentes maderas, acabados, pastillas y hardware para crear el instrumento perfecto
              para ti.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="sound">
          <h2 className="text-2xl font-bold mb-4">Características de sonido</h2>
          <div className="prose max-w-none">
            <p>
              La {guitar.name} ofrece un sonido versátil y potente que se adapta a una amplia gama de estilos musicales.
              Sus pastillas de alta calidad proporcionan una respuesta dinámica y una claridad excepcional en todos los
              registros.
            </p>
            <p>
              En configuraciones limpias, esta guitarra produce tonos cristalinos con un sustain impresionante y una
              definición notable. Los acordes suenan ricos y equilibrados, mientras que las notas individuales tienen
              una presencia y claridad que destacan en cualquier mezcla.
            </p>
            <p>
              Con distorsión, la {guitar.name} muestra su carácter más agresivo, ofreciendo un sonido potente y
              controlado con una excelente articulación incluso en los ajustes más extremos. Los riffs pesados suenan
              contundentes y defin incluso en los ajustes más extremos. Los riffs pesados suenan contundentes y
              definidos, mientras que los solos se benefician de la respuesta dinámica y el sustain natural del
              instrumento.
            </p>
            <p>
              La construcción y los materiales seleccionados contribuyen a un perfil tonal equilibrado con graves
              profundos, medios presentes y agudos brillantes pero no estridentes. Esta paleta tonal versátil hace que
              la {guitar.name} sea una excelente elección para músicos que necesitan cubrir diferentes estilos y
              sonidos.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      {relatedGuitars.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Guitarras relacionadas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedGuitars.map((relatedGuitar) => (
              <Link key={relatedGuitar.id} href={relatedGuitar.href} className="group">
                <div className="border rounded-lg overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={relatedGuitar.image || "/placeholder.svg"}
                      alt={relatedGuitar.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {relatedGuitar.isNew && (
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-sm font-medium px-2 py-1 rounded">
                        Nuevo
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {relatedGuitar.name}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 mb-4">{relatedGuitar.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <span className="font-medium">Cuerdas:</span> {relatedGuitar.strings}
                      </div>
                      <div className="text-primary font-medium">Ver detalles</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <Button asChild variant="outline" className="flex items-center gap-2">
          <Link href="/guitarras">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver a todas las guitarras</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}

function getGuitar(model: string, type: string) {
  // Buscar la guitarra que coincida con el modelo y tipo
  return featuredGuitars.find((guitar) => {
    const segments = guitar.href.split("/")
    return segments[2] === model && segments[3] === type
  })
}
