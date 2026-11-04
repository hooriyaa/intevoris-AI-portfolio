import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, Arizonia } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
})

const arizonia = Arizonia({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-arizonia",
})

export const metadata: Metadata = {
  title: "Intevoris AI Solutions | Simplify Work. Amplify Growth.",
  description:
    "Intevoris AI Solutions — intelligence, integration and impact. We help businesses simplify work and amplify growth with practical AI solutions.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${arizonia.variable} font-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
