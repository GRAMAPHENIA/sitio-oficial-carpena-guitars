import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Guitarras y Bajos Personalizados",
  description: "Encuentra respuestas a las preguntas más comunes sobre nuestros instrumentos y servicios.",
}

export default function FAQPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-wrap items-center gap-2 mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Inicio</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">Preguntas Frecuentes</span>
      </div>
      
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Preguntas Frecuentes</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Respuestas a las consultas más comunes sobre nuestros productos y servicios.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 p-6 bg-muted rounded-lg text-center">
          <h3 className="text-xl font-bold mb-3">¿Necesitas más ayuda?</h3>
          <p className="text-muted-foreground mb-4">
            Si no encontras lo que buscas, contáctanos directamente.
          </p>
          <Button asChild>
            <Link href="/contacto">Contactar al soporte</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

const faqItems = [
  {
    value: "item-1",
    question: "¿Cuánto tiempo toma la fabricación de un instrumento personalizado?",
    answer: "El tiempo promedio de fabricación es de 8-10 semanas desde la confirmación del diseño final. Los pedidos complejos pueden tomar hasta 12 semanas.",
  },
  {
    value: "item-2",
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos todas las tarjetas de crédito/débito principales, transferencias bancarias y PayPal. Los pagos se realizan en dos partes: 50% al confirmar el pedido y 50% antes del envío.",
  },
  {
    value: "item-3",
    question: "¿Ofrecen garantía en sus instrumentos?",
    answer: "Todos nuestros instrumentos tienen garantía de 3 años contra defectos de fabricación. La garantía cubre reparaciones y reemplazo de piezas defectuosas.",
  },
  {
    value: "item-4",
    question: "¿Puedo cancelar o modificar mi pedido?",
    answer: "Las modificaciones son posibles durante los primeros 7 días. Las cancelaciones con reembolso completo deben realizarse dentro de las primeras 48 horas tras la confirmación.",
  },
  {
    value: "item-5",
    question: "¿Hacen envíos internacionales?",
    answer: "Sí, realizamos envíos a todo el mundo con seguro incluido. Los tiempos de entrega varían entre 3-10 días hábiles según el destino.",
  },
  {
    value: "item-6",
    question: "¿Qué materiales utilizan en la construcción?",
    answer: "Trabajamos con maderas premium como caoba, arce y ébano, combinadas con componentes de alta calidad de marcas como Seymour Duncan y Hipshot.",
  },
]