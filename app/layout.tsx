import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Rubik, Roboto_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })


// Configuración de la fuente Rubik para títulos
const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
})

// Configuración de la fuente Roboto Mono para párrafos
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
})

export const metadata: Metadata = {
  title: "Guitarras y Bajos Personalizados | Instrumentos de Alta Calidad",
  description:
    "Fabricantes de guitarras y bajos personalizados de alta calidad. Modelos Fenix, Det Guitar, Valkiria, Divell, JDA, Explosion y Stinker.",
  keywords:
    "guitarras personalizadas, bajos personalizados, guitarras de 7 cuerdas, guitarras de 8 cuerdas, bajos de 5 cuerdas, luthier",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${rubik.variable} ${robotoMono.variable}`}>
      <body className="font-body">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'