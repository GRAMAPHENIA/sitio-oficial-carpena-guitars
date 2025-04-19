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

export async function generateStaticParams() {
  const models = ["jda", "explosion", "stinker"]

  return models.map((model) => ({
    model,
  }))
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
    title: `Bajos ${modelName} | Modelos de 4, 5 y 6 cuerdas`,
    description: `Explora nuestra colección de bajos ${modelName}. Modelos de 4, 5 y 6 cuerdas con diseños únicos y sonidos excepcionales.`,
  }
}

export default function BassModelPage({ params }: Props) {
  const modelName = getModelName(params.model)

  if (!modelName) {
    notFound()
  }

  // Obtener bajos del modelo
  const modelBasses = featuredGuitars.filter((bass) => bass.href.includes(`/bajos/${params.model}`))

  if (modelBasses.length === 0) {
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
        <Link href="/bajos" className="hover:text-foreground">
          Bajos
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{modelName}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Bajos {modelName}</h1>
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
          <Image src="/placeholder.svg?height=800&width=600" alt={`Bajo ${modelName}`} fill className="object-cover" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Modelos disponibles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modelBasses.map((bass) => (
            <Link key={bass.id} href={bass.href} className="group">
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={bass.image || "/placeholder.svg"}
                    alt={bass.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {bass.isNew && (
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-sm font-medium px-2 py-1 rounded">
                      Nuevo
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{bass.name}</h3>
                  <p className="text-muted-foreground line-clamp-2 mb-4">{bass.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="font-medium">Cuerdas:</span> {bass.strings}
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
              Diseña tu bajo personalizado con nuestro equipo de expertos luthiers. Desde la selección de maderas hasta
              el diseño final, trabajaremos contigo para crear el instrumento de tus sueños.
            </p>
            <Button asChild size="lg">
              <Link href="/contacto">Contactar</Link>
            </Button>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=600&width=800" alt="Bajo Custom" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Button asChild variant="outline" className="flex items-center gap-2">
          <Link href="/bajos">
            <ChevronRight className="h-4 w-4 rotate-180" />
            <span>Volver a todos los bajos</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}

function getModelName(model: string): string | null {
  switch (model) {
    case "jda":
      return "JDA"
    case "explosion":
      return "Explosion"
    case "stinker":
      return "Stinker"
    default:
      return null
  }
}

function getModelDescription(model: string): string {
  switch (model) {
    case "jda":
      return "Bajos de alta precisión con un sonido clásico y versátil, perfectos para cualquier estilo musical. Cada bajo JDA ofrece un equilibrio perfecto entre comodidad y rendimiento."
    case "explosion":
      return "Bajos con un sonido explosivo y una definición excepcional en todas las frecuencias. Diseñados para bajistas que buscan potencia y claridad en cualquier contexto."
    case "stinker":
      return "Bajos con un diseño moderno y un sonido potente y definido. Perfectos para estilos modernos que requieren versatilidad y precisión."
    default:
      return "Bajos de alta calidad diseñados y construidos por expertos luthiers."
  }
}

function getModelFeatures(model: string): string[] | null {
  switch (model) {
    case "jda":
      return [
        "Construcción de alta precisión para un sonido equilibrado",
        "Pastillas seleccionadas para un tono versátil",
        "Mástil cómodo para largas sesiones de interpretación",
        "Acabados de alta calidad con atención al detalle",
      ]
    case "explosion":
      return [
        "Pastillas de alta potencia para un sonido contundente",
        "Construcción robusta para mayor sustain",
        "Electrónica activa para mayor control tonal",
        "Diseño ergonómico para mayor comodidad",
      ]
    case "stinker":
      return [
        "Diseño moderno con líneas elegantes",
        "Sonido definido con excelente articulación",
        "Construcción ligera para mayor comodidad",
        "Versatilidad tonal para adaptarse a cualquier estilo",
      ]
    default:
      return null
  }
}
