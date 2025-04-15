import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Nosotros | Nuestra Historia y Filosofía",
  description:
    "Conoce nuestra historia, filosofía y el equipo detrás de nuestras guitarras y bajos personalizados de alta calidad.",
}

export default function NosotrosPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestra Historia</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Pasión por la música y la artesanía desde 2005
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=800&width=600" alt="Nuestro taller" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Nuestros Inicios</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Todo comenzó en un pequeño taller en Buenos Aires, con la pasión de un luthier por crear instrumentos que
            combinaran la artesanía tradicional con innovaciones modernas. Lo que empezó como un proyecto personal
            pronto se convirtió en una marca reconocida por músicos profesionales.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Desde nuestros humildes comienzos, nos hemos dedicado a perfeccionar cada aspecto de nuestros instrumentos,
            desde la selección de maderas hasta el acabado final, siempre con un objetivo claro: crear instrumentos que
            inspiren a los músicos a alcanzar nuevas alturas creativas.
          </p>
          <p className="text-lg text-muted-foreground">
            Hoy, nuestro equipo de luthiers expertos continúa esa tradición, combinando técnicas artesanales con
            tecnología de vanguardia para crear instrumentos de clase mundial.
          </p>
        </div>
      </div>

      <div className="bg-muted rounded-lg p-8 md:p-12 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Nuestra Filosofía</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Creemos que cada instrumento debe ser una extensión del músico que lo toca
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary text-xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Calidad sin Compromiso</h3>
            <p className="text-muted-foreground">
              Utilizamos solo las mejores maderas y componentes, seleccionados cuidadosamente para garantizar
              instrumentos de la más alta calidad.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary text-xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Personalización Total</h3>
            <p className="text-muted-foreground">
              Cada músico es único, y creemos que su instrumento también debe serlo. Por eso ofrecemos opciones de
              personalización en cada aspecto del instrumento.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary text-xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Innovación Constante</h3>
            <p className="text-muted-foreground">
              Nunca dejamos de investigar y experimentar con nuevas técnicas, diseños y materiales para mejorar
              continuamente nuestros instrumentos.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestro Proceso</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada instrumento que creamos pasa por un meticuloso proceso artesanal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-primary text-xl font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Diseño y Planificación</h3>
                <p className="text-muted-foreground">
                  Trabajamos estrechamente con el músico para entender sus necesidades y preferencias, creando un diseño
                  personalizado que cumpla con sus expectativas.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-primary text-xl font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Selección de Materiales</h3>
                <p className="text-muted-foreground">
                  Seleccionamos cuidadosamente cada pieza de madera y componente, asegurando que cumplan con nuestros
                  estrictos estándares de calidad.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-primary text-xl font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Construcción Artesanal</h3>
                <p className="text-muted-foreground">
                  Nuestros luthiers expertos trabajan meticulosamente en cada detalle, combinando técnicas tradicionales
                  con tecnología moderna.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-primary text-xl font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Acabado y Detallado</h3>
                <p className="text-muted-foreground">
                  Aplicamos múltiples capas de acabado y realizamos un detallado minucioso para lograr un instrumento
                  visualmente impresionante.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-primary text-xl font-bold">5</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Configuración y Prueba</h3>
                <p className="text-muted-foreground">
                  Configuramos y ajustamos cada instrumento para garantizar un rendimiento óptimo, realizando pruebas
                  exhaustivas antes de la entrega.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Proceso de diseño"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Selección de maderas"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Construcción artesanal"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Acabado y detallado"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conoce a las personas detrás de nuestros instrumentos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Fundador y Luthier Principal"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Carlos Rodríguez</h3>
            <p className="text-muted-foreground mb-2">Fundador y Luthier Principal</p>
            <p className="text-sm">
              Con más de 20 años de experiencia en la construcción de instrumentos, Carlos es el visionario detrás de
              nuestros diseños innovadores.
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Luthier Especialista en Acabados"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Laura Méndez</h3>
            <p className="text-muted-foreground mb-2">Luthier Especialista en Acabados</p>
            <p className="text-sm">
              Laura es reconocida por su meticuloso trabajo en acabados y su ojo para el detalle, creando instrumentos
              visualmente impresionantes.
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Ingeniero de Sonido"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Martín Gómez</h3>
            <p className="text-muted-foreground mb-2">Ingeniero de Sonido</p>
            <p className="text-sm">
              Martín aporta su experiencia como ingeniero de sonido y músico profesional para optimizar el sonido de
              cada instrumento que creamos.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">¿Interesado en Nuestros Instrumentos?</h2>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Contacta con nosotros para obtener más información sobre nuestras guitarras y bajos. Nuestro equipo estará
              encantado de asesorarte y responder a todas tus preguntas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="secondary" size="lg">
                <Link href="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=600&width=800" alt="Taller de luthería" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
