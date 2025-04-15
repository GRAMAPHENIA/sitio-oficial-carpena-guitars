import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Contacto | Guitarras y Bajos Personalizados",
  description: "Contacta con nosotros para obtener más información sobre nuestras guitarras y bajos personalizados.",
}

export default function ContactoPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Estamos aquí para responder a tus preguntas y ayudarte con cualquier consulta sobre nuestros instrumentos
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Envíanos un mensaje</CardTitle>
              <CardDescription>Completa el formulario y te responderemos lo antes posible</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input id="name" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono (opcional)</Label>
                    <Input id="phone" placeholder="+54 11 1234 5678" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Select>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Selecciona un asunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="info-guitarras">Información sobre guitarras</SelectItem>
                        <SelectItem value="info-bajos">Información sobre bajos</SelectItem>
                        <SelectItem value="custom">Instrumentos personalizados</SelectItem>
                        <SelectItem value="artistas">Programa de artistas</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" placeholder="¿En qué podemos ayudarte?" className="min-h-[150px]" />
                </div>

                <div className="space-y-3">
                  <Label>¿Cómo prefieres que te contactemos?</Label>
                  <RadioGroup defaultValue="email" className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="contact-email" />
                      <Label htmlFor="contact-email">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="contact-phone" />
                      <Label htmlFor="contact-phone">Teléfono</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="whatsapp" id="contact-whatsapp" />
                      <Label htmlFor="contact-whatsapp">WhatsApp</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Acepto la política de privacidad
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Al enviar este formulario, acepto que mis datos sean procesados de acuerdo con la política de
                      privacidad.
                    </p>
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Información de contacto</CardTitle>
              <CardDescription>Otras formas de contactarnos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">info@guitarbrand.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Teléfono</h3>
                  <p className="text-muted-foreground">+54 11 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Dirección</h3>
                  <p className="text-muted-foreground">
                    Av. Guitarristas 1234
                    <br />
                    Buenos Aires, Argentina
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Horario</h3>
                  <p className="text-muted-foreground">
                    Lunes a Viernes: 9:00 - 18:00
                    <br />
                    Sábados: 10:00 - 14:00
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Visita nuestro taller</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Mapa de ubicación"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Te invitamos a visitar nuestro taller para conocer nuestro proceso de fabricación y ver nuestros
                instrumentos en persona. Por favor, agenda una cita previa para asegurarte de que podamos atenderte
                adecuadamente.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
