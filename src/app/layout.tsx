// modified- layout with versioned brand favicons, cache busters, and floating whatsapp button
import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, Arizonia } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

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
  icons: {
    icon: [
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/icon.png?v=2", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico?v=2", sizes: "any" },
    ],
    shortcut: "/favicon-32x32.png?v=2",
    apple: [
      { url: "/apple-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png?v=2" />
        <link rel="shortcut icon" href="/favicon-32x32.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=2" />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${poppins.variable} ${arizonia.variable} font-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
