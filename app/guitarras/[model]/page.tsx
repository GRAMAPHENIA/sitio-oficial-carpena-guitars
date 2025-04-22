import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ArrowRight } from "lucide-react"
import { featuredGuitars } from "@/data/guitars"

type Props = {
  params: {
    model: string
  }
}

// Función para generar rutas estáticas
export async function generateStaticParams() {
  // Obtener modelos únicos de guitarras
  const models = [
    ...new Set(
      featuredGuitars
        .filter((guitar) => guitar.href.includes("/guitarras/"))
        .map((guitar) => guitar.href.split("/")[2]),
    ),
  ]

  // Crear un array de objetos con los parámetros para cada ruta
  const paths = models.map((model) => ({
    model,
  }))

  return paths
}

export function generateMetadata({ params }: Props): Metadata {
  const modelName = getModelName(params.model)

  if (!modelName) {
    return {
      title: "Modelo no encontrado",
      description: "El modelo que estás buscando no existe o ha sido eliminado.",
    }
  }

  return {
    title: `Guitarras ${modelName} | Modelos de 6, 7 y 8 cuerdas`,
    description: `Explora nuestra colección de guitarras ${modelName}. Modelos de 6, 7 y 8 cuerdas con diseños únicos y sonidos excepcionales.`,
  }
}

export default function GuitarModelPage({ params }: Props) {
  const modelName = getModelName(params.model)

  if (!modelName) {
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

  // Obtener guitarras del modelo
  const modelGuitars = featuredGuitars.filter((guitar) => guitar.href.includes(`/guitarras/${params.model}`))

  if (modelGuitars.length === 0) {
    notFound()
  }

  // Obtener descripción del modelo
  const modelDescription = getModelDescription(params.model)

  // Obtener características del modelo
  const modelFeatures = getModelFeatures(params.model)

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
        <span className="text-foreground">{modelName}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Guitarras {modelName}</h1>
          <p className="text-lg text-muted-foreground mb-6">{modelDescription}</p>

          {modelFeatures && (
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Características principales</h3>
              <ul className="space-y-2">
                {modelFeatures.map((feature, index) => (
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
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt={`Guitarra ${modelName}`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Modelos disponibles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modelGuitars.map((guitar) => (
            <Link key={guitar.id} href={guitar.href} className="group">
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={guitar.image || "/placeholder.svg"}
                    alt={guitar.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {guitar.isNew && (
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-sm font-medium px-2 py-1 rounded">
                      Nuevo
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{guitar.name}</h3>
                  <p className="text-muted-foreground line-clamp-2 mb-4">{guitar.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="font-medium">Cuerdas:</span> {guitar.strings}
                    </div>
                    <div className="text-primary font-medium flex items-center">
                      Ver detalles <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-muted rounded-lg p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">¿Buscas algo único?</h2>
            <p className="text-lg mb-6">
              Diseña tu guitarra personalizada con nuestro equipo de expertos luthiers. Desde la selección de maderas
              hasta el diseño final, trabajaremos contigo para crear el instrumento de tus sueños.
            </p>
            <Button asChild size="lg">
              <Link href="/contacto">Contactar</Link>
            </Button>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=600&width=800" alt="Guitarra Custom" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Button asChild variant="outline" className="flex items-center gap-2">
          <Link href="/guitarras">
            <ChevronRight className="h-4 w-4 rotate-180" />
            <span>Volver a todas las guitarras</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}

function getModelName(model: string): string | null {
  switch (model) {
    case "fenix":
      return "Fenix"
    case "det-guitar":
      return "Det Guitar"
    case "valkiria":
      return "Valkiria"
    case "divell":
      return "Divell"
    default:
      return null
  }
}

function getModelDescription(model: string): string {
  switch (model) {
    case "fenix":
      return "Nuestra línea insignia de guitarras, diseñada para músicos exigentes que buscan versatilidad y calidad superior. Cada guitarra Fenix es construida con maderas seleccionadas y componentes de la más alta calidad."
    case "det-guitar":
      return "Guitarras con un diseño ergonómico y un sonido potente y definido para los estilos más extremos. Cada Det Guitar ofrece una combinación perfecta de comodidad y rendimiento."
    case "valkiria":
      return "Elegancia y potencia en un diseño único. Perfectas para géneros que requieren claridad y punch. Las guitarras Valkiria combinan estética clásica con prestaciones modernas."
    case "divell":
      return "Diseño agresivo con un sonido contundente. La elección perfecta para metal y géneros extremos. Las guitarras Divell están diseñadas para ofrecer máxima potencia y definición."
    default:
      return "Guitarras de alta calidad diseñadas y construidas por expertos luthiers."
  }
}

function getModelFeatures(model: string): string[] | null {
  switch (model) {
    case "fenix":
      return [
        "Construcción neck-through para máxima sustain",
        "Pastillas de alta ganancia seleccionadas",
        "Hardware premium para mayor estabilidad",
        "Acabados personalizables según tus preferencias",
      ]
    case "det-guitar":
      return [
        "Escala extendida para mayor tensión y definición",
        "Pastillas de alta definición para estilos modernos",
        "Construcción set-neck para mayor comodidad",
        "Diapasón con radio compuesto para mayor comodidad",
      ]
    case "valkiria":
      return [
        "Diseño elegante con líneas clásicas",
        "Equilibrio tonal perfecto para diversos estilos",
        "Construcción de alta precisión",
        "Acabados de lujo con atención al detalle",
      ]
    case "divell":
      return [
        "Diseño agresivo para estilos extremos",
        "Pastillas de alta ganancia para sonidos contundentes",
        "Construcción robusta para mayor estabilidad",
        "Diapasón plano para técnicas rápidas",
      ]
    default:
      return null
  }
}
