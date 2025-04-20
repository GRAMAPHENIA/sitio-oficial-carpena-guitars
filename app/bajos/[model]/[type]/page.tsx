// app/bajos/[model]/[type]/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { featuredGuitars } from "@/data/guitars";
import { capitalize } from "@/utils/capitalize";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ChevronRight, Star, Info, Settings, Music } from "lucide-react";

type Props = {
  params: {
    model: string;
    type: string;
  };
};

// ———————————————————————————————————————
// STATIC PARAMS
// ———————————————————————————————————————
export async function generateStaticParams() { 
  const seen = new Set();
  const params = featuredGuitars
    .map((bass) => {
      const parts = bass.href.split("/");
      // console.log(`Processing href: ${bass.href}`);
      if (parts.length >= 4) {
        const model = parts[parts.length - 2];
        const type = parts[parts.length - 1];
        const key = `${model}/${type}`;
        if (!seen.has(key)) {
          seen.add(key);
          return { model, type };
        }
      }
      return null;
    })
    .filter(Boolean);

  // console.log("Generated params:", params); 
  return params;
}

// ———————————————————————————————————————
// METADATA
// ———————————————————————————————————————
export function generateMetadata({ params }: Props): Metadata {
  const bass = getBass(params.model, params.type);
  if (!bass) {
    return {
      title: "Bajo no encontrado",
      description: "El bajo que estás buscando no existe o ha sido eliminado.",
    };
  }
  return {
    title: `${bass.name} | Bajos ${capitalize(params.model)}`,
    description: bass.description,
  };
}

// ———————————————————————————————————————
// HELPER
// ———————————————————————————————————————
function getBass(model: string, type: string) {
  return featuredGuitars.find((b) => b.href === `/bajos/${model}/${type}`);
}

// ———————————————————————————————————————
// COMPONENT
// ———————————————————————————————————————
export default function BassDetailPage({ params }: Props) {
  const bass = getBass(params.model, params.type);
  if (!bass) notFound();

  const relatedBasses = featuredGuitars
    .filter(
      (b) => b.href.startsWith(`/bajos/${params.model}`) && b.href !== bass.href
    )
    .slice(0, 3);

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      {/* BREADCRUMB */}
      <div className="flex flex-wrap items-center gap-2 mb-8 text-sm text-muted-foreground">
        <Link href="/">Inicio</Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/bajos">Bajos</Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/bajos/${params.model}`} className="capitalize">
          {params.model}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium">{bass.name}</span>
      </div>

      {/* DETALLE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* IMÁGENES */}
        <div className="space-y-6">
          <div className="relative aspect-square rounded-lg overflow-hidden border">
            <Image
              src={bass.image || "/placeholder.svg"}
              alt={bass.name}
              fill
              className="object-cover"
              priority
            />
            {bass.isNew && (
              <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                Nuevo
              </Badge>
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-lg overflow-hidden border"
              >
                <Skeleton className="w-full h-full" />
              </div>
            ))}
          </div>
        </div>

        {/* INFO */}
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

          <p className="text-lg text-muted-foreground mb-6">
            {bass.description}
          </p>

          {/* DATOS */}
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

          {/* CARACTERÍSTICAS */}
          {bass.features && (
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">
                Características principales
              </h3>
              <ul className="space-y-2">
                {bass.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Separator className="my-6" />

          {/* PRECIO */}
          <div className="mb-6">
            <div className="text-xl font-bold">{bass.price}</div>
            <p className="text-sm text-muted-foreground">
              Precio base. Puede variar según opciones.
            </p>
          </div>

          {/* BOTONES */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="flex-1">
              <Link href="/contacto">Solicitar información</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex-1">
              <Link href="/contacto">Consultar disponibilidad</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* TABS */}
      <Tabs defaultValue="specs" className="mb-16">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="specs" className="flex items-center gap-2">
            <Settings className="h-4 w-4" /> Especificaciones
          </TabsTrigger>
          <TabsTrigger value="details" className="flex items-center gap-2">
            <Info className="h-4 w-4" /> Detalles
          </TabsTrigger>
          <TabsTrigger value="sound" className="flex items-center gap-2">
            <Music className="h-4 w-4" /> Sonido
          </TabsTrigger>
        </TabsList>

        <TabsContent value="specs" className="space-y-6">
          <h2 className="text-2xl font-bold">Especificaciones técnicas</h2>
          {bass.specs ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(bass.specs).map(([key, val]) => (
                <div key={key} className="border-b pb-2">
                  <div className="text-sm text-muted-foreground">
                    {capitalize(key)}
                  </div>
                  <div className="font-medium">{val}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-muted-foreground">
              Especificaciones próximamente.
            </div>
          )}
        </TabsContent>

        <TabsContent value="details">
          <h2 className="text-2xl font-bold mb-4">Detalles del producto</h2>
          <div className="prose max-w-none">
            <p>
              El {bass.name} es un bajo diseñado para músicos exigentes que
              buscan un instrumento de alta calidad.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="sound">
          <h2 className="text-2xl font-bold mb-4">Características de sonido</h2>
          <div className="prose max-w-none">
            <p>
              El {bass.name} ofrece un sonido potente y definido con gran
              versatilidad tonal.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      {/* RELACIONADOS */}
      {relatedBasses.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">Modelos relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedBasses.map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className="border rounded-lg overflow-hidden hover:shadow-md transition"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={b.image || "/placeholder.svg"}
                    alt={b.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{b.name}</h3>
                  <p className="text-sm text-muted-foreground">{b.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
