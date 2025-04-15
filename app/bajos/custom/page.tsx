import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Bajos Custom | Diseña tu Instrumento Personalizado",
  description:
    "Crea el bajo de tus sueños con nuestro servicio de personalización. Elige maderas, hardware, pastillas y acabados para un instrumento único.",
}

export default function BassCustomPage() {
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
        <span className="text-foreground">Custom</span>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bajos Personalizados</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Diseña el bajo de tus sueños con nuestro servicio de personalización. Cada detalle, desde las maderas hasta el
          hardware, adaptado a tus preferencias.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl font-bold mb-6">Tu Visión, Nuestra Artesanía</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Nuestro proceso de personalización te permite crear un instrumento único que refleje tu estilo y cumpla con
            tus necesidades específicas. Trabajamos contigo en cada paso del proceso para asegurar que el resultado
            final supere tus expectativas.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Desde la selección de maderas hasta el diseño de inlays personalizados, nuestro equipo de expertos luthiers
            te guiará a través de todas las opciones disponibles para crear el bajo perfecto para ti.
          </p>
          <Button asChild size="lg">
            <Link href="/contacto">Iniciar mi proyecto personalizado</Link>
          </Button>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
          <Image src="/placeholder.svg?height=800&width=600" alt="Bajo personalizado" fill className="object-cover" />
        </div>
      </div>

      <Tabs defaultValue="process" className="mb-16">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="process">Proceso</TabsTrigger>
          <TabsTrigger value="options">Opciones</TabsTrigger>
          <TabsTrigger value="examples">Ejemplos</TabsTrigger>
        </TabsList>

        <TabsContent value="process" className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Nuestro Proceso de Personalización</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Consulta Inicial</h3>
                  <p className="text-muted-foreground">
                    Comenzamos con una consulta detallada para entender tus necesidades, preferencias y visión para tu
                    instrumento personalizado.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Diseño y Especificaciones</h3>
                  <p className="text-muted-foreground">
                    Trabajamos contigo para definir todas las especificaciones técnicas y estéticas de tu bajo, desde la
                    forma del cuerpo hasta el tipo de trastes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Selección de Materiales</h3>
                  <p className="text-muted-foreground">
                    Seleccionamos cuidadosamente cada pieza de madera y componente para tu bajo, asegurando la más alta
                    calidad.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Construcción Artesanal</h3>
                  <p className="text-muted-foreground">
                    Nuestros luthiers expertos construyen tu bajo a mano, prestando atención a cada detalle para
                    garantizar un instrumento excepcional.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Actualizaciones Regulares</h3>
                  <p className="text-muted-foreground">
                    Te mantenemos informado durante todo el proceso con actualizaciones regulares y fotos del progreso
                    de tu bajo.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Configuración y Ajuste</h3>
                  <p className="text-muted-foreground">
                    Configuramos y ajustamos meticulosamente tu bajo para garantizar un rendimiento óptimo y una
                    jugabilidad excepcional.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">7</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Control de Calidad</h3>
                  <p className="text-muted-foreground">
                    Realizamos un riguroso control de calidad para asegurar que tu bajo cumpla con nuestros altos
                    estándares antes de la entrega.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">8</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Entrega y Seguimiento</h3>
                  <p className="text-muted-foreground">
                    Entregamos tu bajo personalizado y ofrecemos seguimiento para asegurar tu completa satisfacción con
                    el instrumento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="options" className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Opciones de Personalización</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Maderas para el Cuerpo</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Fresno</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Caoba</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Aliso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Arce</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Otras maderas exóticas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Maderas para el Mástil</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Arce</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Caoba</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Wenge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Bubinga</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Construcción de múltiples láminas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Maderas para el Diapasón</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Ébano</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Arce</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Pau Ferro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Wenge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Palo Rosa</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Pastillas</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Nuestras pastillas estándar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Bartolini</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>EMG</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Nordstrand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Aguilar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Seymour Duncan</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Hardware</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Puente Hipshot</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Puente Gotoh</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Puente ABM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Clavijas Hipshot</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Acabados en cromo, negro, dorado o satinado</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Acabados</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Natural</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Burst (varios colores)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Colores sólidos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Transparentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Mate o brillante</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>Diseños personalizados</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted rounded-lg p-6 mt-8">
            <h3 className="font-bold text-lg mb-2">Características adicionales</h3>
            <p className="text-muted-foreground mb-4">
              Además de las opciones anteriores, ofrecemos una variedad de características adicionales para personalizar
              aún más tu bajo:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ChevronRight className="h-3 w-3 text-primary" />
                </div>
                <span>Inlays personalizados</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ChevronRight className="h-3 w-3 text-primary" />
                </div>
                <span>Binding en cuerpo y mástil</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ChevronRight className="h-3 w-3 text-primary" />
                </div>
                <span>Preamplificadores activos</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ChevronRight className="h-3 w-3 text-primary" />
                </div>
                <span>Sistemas de ecualización avanzados</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ChevronRight className="h-3 w-3 text-primary" />
                </div>
                <span>Sistemas piezo</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ChevronRight className="h-3 w-3 text-primary" />
                </div>
                <span>Luminlay para marcadores laterales</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ChevronRight className="h-3 w-3 text-primary" />
                </div>
                <span>Trastes de acero inoxidable</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ChevronRight className="h-3 w-3 text-primary" />
                </div>
                <span>Opciones para zurdos</span>
              </li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Ejemplos de Bajos Personalizados</h2>
          <p className="text-muted-foreground mb-6">
            Aquí puedes ver algunos ejemplos de bajos personalizados que hemos creado para nuestros clientes. Cada uno
            es único y refleja las preferencias y necesidades específicas de su dueño.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Bajo personalizado 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">JDA Custom 5 - Burst Azul</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Cuerpo de fresno con tapa de arce flameado, mástil de arce/wenge, diapasón de ébano, 24 trastes,
                  pastillas Bartolini, puente Hipshot.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Bajo personalizado 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Explosion Custom - Verde Esmeralda</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Cuerpo de aliso, mástil de arce, diapasón de arce, 22 trastes, pastillas EMG, puente Gotoh.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Bajo personalizado 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Stinker Custom - Púrpura Transparente</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Cuerpo de caoba con tapa de arce rizado, mástil de caoba, diapasón de pau ferro, 24 trastes, pastillas
                  Nordstrand, puente ABM.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Bajo personalizado 4"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">JDA Custom 6 - Negro Mate</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Cuerpo de fresno, mástil de arce/wenge, diapasón de ébano, 24 trastes, pastillas Aguilar, puente
                  Hipshot.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Bajo personalizado 5"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Explosion Custom - Rojo Sangre</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Cuerpo de caoba, mástil de caoba, diapasón de ébano, 22 trastes, pastillas EMG, puente Gotoh.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Bajo personalizado 6"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Stinker Custom 5 - Natural</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Cuerpo de fresno, mástil de arce/bubinga, diapasón de arce, 24 trastes, pastillas Bartolini, puente
                  Hipshot.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">¿Listo para Crear tu Bajo Personalizado?</h2>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Contacta con nosotros para comenzar el proceso de diseño de tu bajo personalizado. Nuestro equipo de
              expertos luthiers estará encantado de asesorarte y responder a todas tus preguntas.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contacto">Contactar ahora</Link>
            </Button>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Luthier trabajando en un bajo personalizado"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
