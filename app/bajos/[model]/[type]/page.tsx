import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ChevronRight, Star, Info, Settings, Music, ArrowLeft } from "lucide-react"
import { featuredGuitars } from "@/data/guitars"
import { featuredBasses } from "@/data/basses"

type Props = {
  params: {
    model: string
    type: string
  }
}

export async function generateStaticParams() {
  // Usar el nuevo archivo de datos específico para bajos
  return featuredBasses.map((bass) => {
    const segments = bass.href.split("/")
    return {
      model: segments[2],
      type: segments[3],
    }
  })
}

export function generateMetadata({ params }: Props): Metadata {
  const bass = getBass(params.model, params.type)

  if (!bass) {
    return {
      title: "Bajo no encontrado",
      description: "El bajo que estás buscando no existe o ha sido eliminado.",
    }
  }

  return {
    title: `${bass.name} | Bajos ${params.model.charAt(0).toUpperCase() + params.model.slice(1)}`,
    description: bass.description,
  }
}

export default function BassDetailPage({ params }: Props) {
  const bass = getBass(params.model, params.type)

  if (!bass) {
    return (
      <div className="container mx-auto py-16 px-4 md:px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Modelo no encontrado</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Lo sentimos, el modelo de bajo que estás buscando no existe o ha sido descontinuado.
        </p>
        <div className="mb-12">
          <h2 className="text-xl font-medium mb-4">¿Qué puedes hacer ahora?</h2>
          <ul className="space-y-2 max-w-md mx-auto text-left">
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <ChevronRight className="h-3 w-3 text-primary" />
              </div>
              <span>Explorar nuestra colección completa de bajos</span>
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
            <Link href="/bajos">Ver todos los bajos</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contacto">Contactar</Link>
          </Button>
        </div>
      </div>
    )
  }

  // Obtener bajos relacionados (mismo modelo, diferente tipo)
  const relatedBasses = featuredBasses
    .filter((b) => b.href.includes(`/bajos/${params.model}`) && b.href !== bass.href)
    .slice(0, 3)

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-wrap items-center gap-2 mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Inicio
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/bajos" className="hover:text-foreground">
          Bajos
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/bajos/${params.model}`} className="hover:text-foreground capitalize">
          {params.model}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{bass.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <div className="relative aspect-square rounded-lg overflow-hidden border">
            <Image src={bass.image || "/placeholder.svg"} alt={bass.name} fill className="object-cover" priority />
            {bass.isNew && <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">Nuevo</Badge>}
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden border cursor-pointer">
              <Image
                src={bass.image || "/placeholder.svg"}
                alt={`${bass.name} - Vista frontal`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden border cursor-pointer">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt={`${bass.name} - Vista trasera`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden border cursor-pointer">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt={`${bass.name} - Detalle mástil`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden border cursor-pointer">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt={`${bass.name} - Detalle cuerpo`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{bass.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-muted-foreground">(8 opiniones)</span>
          </div>

          <p className="text-lg text-muted-foreground mb-6">{bass.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border rounded-md p-3">
              <div className="text-sm text-muted-foreground">Categoría</div>
              <div className="font-medium">{bass.category}</div>
            </div>
            <div className="border rounded-md p-3">
              <div className="text-sm text-muted-foreground">Cuerdas</div>
              <div className="font-medium">{bass.strings}</div>
            </div>
          </div>

          {bass.features && (
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Características principales</h3>
              <ul className="space-y-2">
                {bass.features.map((feature, index) => (
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
            <div className="text-xl font-bold mb-2">{bass.price}</div>
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

          {bass.specs ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-b pb-2">
                  <div className="text-sm text-muted-foreground">Cuerpo</div>
                  <div className="font-medium">{bass.specs.body}</div>
                </div>
                <div className="border-b pb-2">
                  <div className="text-sm text-muted-foreground">Mástil</div>
                  <div className="font-medium">{bass.specs.neck}</div>
                </div>
                <div className="border-b pb-2">
                  <div className="text-sm text-muted-foreground">Diapasón</div>
                  <div className="font-medium">{bass.specs.fretboard}</div>
                </div>
                <div className="border-b pb-2">
                  <div className="text-sm text-muted-foreground">Trastes</div>
                  <div className="font-medium">{bass.specs.frets}</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-b pb-2">
                  <div className="text-sm text-muted-foreground">Pastillas</div>
                  <div className="font-medium">{bass.specs.pickups}</div>
                </div>
                <div className="border-b pb-2">
                  <div className="text-sm text-muted-foreground">Puente</div>
                  <div className="font-medium">{bass.specs.bridge}</div>
                </div>
                <div className="border-b pb-2">
                  <div className="text-sm text-muted-foreground">Hardware</div>
                  <div className="font-medium">{bass.specs.hardware}</div>
                </div>
                <div className="border-b pb-2">
                  <div className="text-sm text-muted-foreground">Acabado</div>
                  <div className="font-medium">{bass.specs.finish}</div>
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
              El {bass.name} es un bajo diseñado para músicos exigentes que buscan un instrumento de alta calidad con un
              sonido excepcional y una jugabilidad superior.
            </p>
            <p>
              Cada {bass.name} es construido a mano por nuestros expertos luthiers, utilizando maderas seleccionadas y
              componentes de la más alta calidad. El resultado es un instrumento que no solo suena increíble, sino que
              también es una obra de arte visual.
            </p>
            <p>
              La atención al detalle es evidente en cada aspecto de este bajo, desde la precisión del trabajo en el
              mástil hasta el acabado impecable del cuerpo. Cada instrumento pasa por un riguroso proceso de control de
              calidad para garantizar que cumpla con nuestros altos estándares.
            </p>
            <p>
              Además, ofrecemos opciones de personalización para adaptar el bajo a tus preferencias específicas. Puedes
              elegir entre diferentes maderas, acabados, pastillas y hardware para crear el instrumento perfecto para
              ti.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="sound">
          <h2 className="text-2xl font-bold mb-4">Características de sonido</h2>
          <div className="prose max-w-none">
            <p>
              El {bass.name} ofrece un sonido potente y definido con un excelente equilibrio tonal que lo hace versátil
              para diversos estilos musicales. Sus pastillas de alta calidad capturan todos los matices de tu técnica,
              desde suaves líneas melódicas hasta potentes grooves.
            </p>
            <p>
              Los graves son profundos y contundentes, con una respuesta rápida que proporciona la base sólida que
              cualquier bajista necesita. Los medios están presentes pero equilibrados, permitiendo que el bajo se
              asiente perfectamente en la mezcla sin competir con otros instrumentos.
            </p>
            <p>
              Los agudos son claros y definidos, aportando articulación y presencia sin resultar estridentes. Esta
              claridad es especialmente notable en técnicas como slap, tapping o acordes, donde cada nota se distingue
              con claridad incluso en pasajes rápidos o complejos.
            </p>
            <p>
              La construcción y los materiales seleccionados contribuyen a un sustain excepcional, permitiendo que las
              notas florezcan y se desarrollen completamente. Este sustain, combinado con la respuesta dinámica del
              instrumento, hace que el {bass.name} sea una herramienta expresiva en manos de cualquier bajista.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      {relatedBasses.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Bajos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedBasses.map((relatedBass) => (
              <Link key={relatedBass.id} href={relatedBass.href} className="group">
                <div className="border rounded-lg overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={relatedBass.image || "/placeholder.svg"}
                      alt={relatedBass.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {relatedBass.isNew && (
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-sm font-medium px-2 py-1 rounded">
                        Nuevo
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {relatedBass.name}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 mb-4">{relatedBass.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <span className="font-medium">Cuerdas:</span> {relatedBass.strings}
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
          <Link href="/bajos">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver a todos los bajos</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}

function getBass(model: string, type: string) {
  // Buscar primero en el archivo específico de bajos
  const bass = featuredBasses.find((bass) => {
    const segments = bass.href.split("/")
    return segments[2] === model && segments[3] === type
  })

  if (bass) return bass

  // Si no se encuentra, buscar en el archivo general como respaldo
  // Normalizar el tipo para comparar con la URL
  const normalizedType = type.replace("-cuerdas", "")

  return featuredGuitars
    .filter((guitar) => guitar.href.includes("/bajos/"))
    .find((bass) => {
      const bassModel = bass.href.split("/")[2] // Extraer el modelo de la URL
      const bassType = bass.strings // El tipo es el número de cuerdas

      return bassModel === model && bassType === normalizedType
    })
}
