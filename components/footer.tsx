import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Guitar, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              {/* <Guitar className="h-6 w-6" /> */}
              <span className="font-bold text-xl">Carpedna Guitars</span>
            </Link>
            <p className="text-muted-foreground">
              Fabricantes de guitarras y bajos personalizados de alta calidad
              desde.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Productos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/guitarras"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Guitarras
                </Link>
              </li>
              <li>
                <Link
                  href="/bajos"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Bajos
                </Link>
              </li>
              <li>
                <Link
                  href="/guitarras/custom"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Guitarras Custom
                </Link>
              </li>
              <li>
                <Link
                  href="/bajos/custom"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Bajos Custom
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/artistas"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Artistas
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Suscríbete</h3>
            <p className="text-muted-foreground mb-4">
              Recibe noticias y ofertas exclusivas
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Tu email"
                className="bg-background"
                required
              />
              <Button type="submit" className="w-full">
                Suscribirse
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Carpena Guitars. Todos los derechos
            reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/privacidad"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terminos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
