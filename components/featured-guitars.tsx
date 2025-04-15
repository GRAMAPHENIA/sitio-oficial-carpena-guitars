import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { featuredGuitars } from "@/data/guitars"

export default function FeaturedGuitars() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Instrumentos Destacados</h2>
            <p className="text-lg text-muted-foreground">Descubre nuestros modelos más populares</p>
          </div>
          <Link href="/guitarras" className="mt-4 md:mt-0 text-primary font-medium hover:underline">
            Ver todos los modelos
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredGuitars.map((guitar) => (
            <Link href={guitar.href} key={guitar.id} className="group">
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={guitar.image || "/placeholder.svg"}
                    alt={guitar.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {guitar.isNew && (
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Nuevo</Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="text-sm text-muted-foreground mb-1">{guitar.category}</div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{guitar.name}</h3>
                  <p className="text-muted-foreground line-clamp-2 mb-4">{guitar.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="font-medium">Cuerdas:</span> {guitar.strings}
                    </div>
                    <div className="text-primary font-bold">{guitar.price}</div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
