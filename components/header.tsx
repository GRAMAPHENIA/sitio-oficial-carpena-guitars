"use client"

import React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Guitar, Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const guitarasItems = [
    { title: "Fenix", href: "/guitarras/fenix", description: "Nuestra línea insignia de guitarras" },
    { title: "Det Guitar", href: "/guitarras/det-guitar", description: "Precisión y versatilidad" },
    { title: "Valkiria", href: "/guitarras/valkiria", description: "Potencia y elegancia" },
    { title: "Divell", href: "/guitarras/divell", description: "Diseño agresivo y sonido contundente" },
    { title: "Custom", href: "/guitarras/custom", description: "Diseña tu guitarra personalizada" },
  ]

  const bajosItems = [
    { title: "JDA", href: "/bajos/jda", description: "Bajos de alta precisión" },
    { title: "Explosion", href: "/bajos/explosion", description: "Potencia y definición" },
    { title: "Stinker", href: "/bajos/stinker", description: "Versatilidad y confort" },
    { title: "Custom", href: "/bajos/custom", description: "Diseña tu bajo personalizado" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Guitar className="h-6 w-6" />
          <span className="font-bold text-xl">GuitarBrand</span>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className={cn(
                    "px-4 py-2 text-lg font-medium rounded-md hover:bg-muted",
                    pathname === "/" && "bg-muted",
                  )}
                >
                  Inicio
                </Link>
                <MobileAccordion title="Guitarras" items={guitarasItems} />
                <MobileAccordion title="Bajos" items={bajosItems} />
                <Link
                  href="/artistas"
                  className={cn(
                    "px-4 py-2 text-lg font-medium rounded-md hover:bg-muted",
                    pathname === "/artistas" && "bg-muted",
                  )}
                >
                  Artistas
                </Link>
                <Link
                  href="/nosotros"
                  className={cn(
                    "px-4 py-2 text-lg font-medium rounded-md hover:bg-muted",
                    pathname === "/nosotros" && "bg-muted",
                  )}
                >
                  Nosotros
                </Link>
                <Link
                  href="/contacto"
                  className={cn(
                    "px-4 py-2 text-lg font-medium rounded-md hover:bg-muted",
                    pathname === "/contacto" && "bg-muted",
                  )}
                >
                  Contacto
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Guitarras</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {guitarasItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Bajos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {bajosItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/artistas" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Artistas</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/nosotros" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Nosotros</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}

        <div className="flex items-center gap-4">
          <Button asChild variant="default">
            <Link href="/contacto">Contacto</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

function MobileAccordion({
  title,
  items,
}: {
  title: string
  items: { title: string; href: string; description: string }[]
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border rounded-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-4 py-2 font-medium"
      >
        {title}
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>
      {isOpen && (
        <div className="px-4 py-2 space-y-2">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="block px-2 py-1 text-sm rounded-md hover:bg-muted">
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
