// import type { Metadata } from "next"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// import { ChevronRight } from "lucide-react"

// export const metadata: Metadata = {
//   title: "Preguntas Frecuentes | Guitarras y Bajos Personalizados",
//   description:
//     "Encuentra respuestas a las preguntas más comunes sobre nuestros instrumentos, proceso de fabricación, pedidos y más.",
// }

// export default function FAQPage() {
//   return (
//     <div className="container mx-auto py-12 px-4 md:px-6">
//       <div className="flex flex-wrap items-center gap-2 mb-8 text-sm text-muted-foreground">
//         <Link href="/" className="hover:text-foreground">Inicio</Link>
//         <ChevronRight className="h-4 w-4" />
//         <span className="text-foreground">Preguntas Frecuentes</span>
//       </div>
      
//       <div className="text-center mb-12">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Preguntas Frecuentes</h1>
//         <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//           Encuentra respuestas a las preguntas más comunes sobre nuestros instrumentos, proceso de fabricación, pedidos y más.
//         </p>
//       </div>
      
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
//         <div className="lg:col-span-1">
//           <div className="sticky top-24 space-y-4">
//             <h2 className="text-xl font-bold mb-4">Categorías</h2>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#general" className="flex items-center text-primary hover:underline">
//                   <ChevronRight className="h-4 w-4 mr-1" />
//                   <span>Información General</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#pedidos" className="flex items-center text-primary hover:underline">
//                   <ChevronRight className="h-4 w-4 mr-1" />
//                   <span>Pedidos y Personalización</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#fabricacion" className="flex items-center text-primary hover:underline">
//                   <ChevronRight className="h-4 w-4 mr-1" />
//                   <span>Proceso de Fabricación</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#materiales" className="flex items-center text-primary hover:underline">
//                   <ChevronRight className="h-4 w-4 mr-1" />
//                   <span>Materiales y Componentes</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#envios" className="flex items-center text-primary hover:underline">
//                   <ChevronRight className="h-4 w-4 mr-1" />
//                   <span>Envíos y Garantía</span>
//                 </a>
//               </li>
//             </ul>
            
//             <div className="mt-8 p-4 bg-muted rounded-lg">
//               <h3 className="font-bold mb-2">¿No encuentras tu respuesta?</h3>
//               <p className="text-sm text-muted-foreground mb-4">
//                 Si no encuentras la respuesta que buscas, no dudes en contactarnos directamente.
//               </p>
//               <Button asChild className="w-full">
//                 <Link href="/contacto">Contactar</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
        
// <div className="lg:col-span-3 space-y-8">
//   <section id="general">
//     <h2 className="text-2xl font-bold mb-6">Información General</h2>
//     <Accordion type="single" collapsible className="w-full">
//       <AccordionItem value="item-1">
//         <AccordionTrigger>¿Quiénes son y desde cuándo fabrican instrumentos?</AccordionTrigger>
//         <AccordionContent>
//           <p className="mb-2">
//             Somos un equipo de luthiers apasionados por la música y la fabricación de instrumentos de alta calidad. Nuestra empresa comenzó en 2005 con un pequeño taller en Buenos Aires, y desde entonces hemos crecido hasta convertirnos en una marca reconocida por músicos profesionales en todo el mundo.
//           </p>
//           <p>
//             Nuestro equipo combina décadas de experiencia en la fabricación de instrumentos, con un enfoque en la innovación y la atención al detalle. Cada instrumento que creamos es el resultado de nuestra pasión por la música y nuestro compromiso con la excelencia.
//           </p>
//         </AccordionContent>
//       </AccordionItem>
      
//       <AccordionItem value="item-2">
//         <AccordionTrigger>¿Qué diferencia a sus instrumentos de otras marcas?</AccordionTrigger>
//         <AccordionContent>
//           <p className="mb-2">
//             Lo que diferencia a nuestros instrumentos es la combinación de artesanía tradicional con innovación moderna. Cada instrumento es construido a mano por nuestros expertos luthiers, prestando atención a cada detalle para garantizar la más alta calidad.
//           </p>
//           <p className="mb-2">
//             Además, ofrecemos un nivel de personalización que pocas marcas pueden igualar. Trabajamos estrechamente con cada cliente para crear instrumentos que se adapten perfectamente a sus necesidades y preferencias específicas.
//           </p>
//           <p>
//             Nuestro compromiso con la calidad se refleja en la selección de materiales, la precisión de la construcción y el riguroso control de calidad que aplicamos a cada instrumento antes de que salga de nuestro taller.
//           </p>
//         </AccordionContent>
//       </AccordionItem>
      
//       <AccordionItem value="item-3">
//         <AccordionTrigger>¿Ofrecen financiamiento o planes de pago?</AccordionTrigger>
//         <AccordionContent>
//           <p>
//             Actualmente no ofrecemos financiamiento directo, pero estamos trabajando para ofrecer opciones de financiamiento en el futuro. Sin embargo, aceptamos tarjetas de crédito y débito, y puedes consultar con tu banco sobre planes de pago a través de tu tarjeta.
//           </p>
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   </section>
// </div>
