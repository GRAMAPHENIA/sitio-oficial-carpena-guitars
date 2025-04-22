"use client"

import { useState } from "react"
import Image from "next/image"
import { galleryImages } from "@/data/gallery"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galería de Instrumentos</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explora nuestra colección de guitarras y bajos hechos a mano
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.thumbnail || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium">Ver</span>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
            <DialogTitle className="sr-only">Imagen en galería</DialogTitle>
            <div className="relative bg-background rounded-lg overflow-hidden">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 z-10 text-white bg-black/20 hover:bg-black/40"
                onClick={closeLightbox}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Cerrar</span>
              </Button>

              {selectedImage !== null && (
                <div className="relative h-[80vh]">
                  <Image
                    src={galleryImages[selectedImage].fullSize || "/placeholder.svg"}
                    alt={galleryImages[selectedImage].alt}
                    fill
                    className="object-contain"
                  />

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40"
                    onClick={goToPrevious}
                  >
                    <ChevronLeft className="h-8 w-8" />
                    <span className="sr-only">Anterior</span>
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40"
                    onClick={goToNext}
                  >
                    <ChevronRight className="h-8 w-8" />
                    <span className="sr-only">Siguiente</span>
                  </Button>

                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                    <p className="font-medium">{galleryImages[selectedImage].alt}</p>
                    {galleryImages[selectedImage].description && (
                      <p className="text-sm text-white/80 mt-1">{galleryImages[selectedImage].description}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
