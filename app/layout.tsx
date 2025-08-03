import type React from "react"
import type { Metadata } from "next"
import { Inter, Fira_Sans, Overpass } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-fira-sans",
  display: "swap"
})

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-overpass",
  display: "swap"
})

export const metadata: Metadata = {
  title: "NASA Space Apps Bolu",
  icons: {
    icon: 'https://assets.spaceappschallenge.org/media/images/favicon2x.2e16d0ba.fill-192x192.png',
    shortcut: 'https://assets.spaceappschallenge.org/media/images/favicon2x.2e16d0ba.fill-192x192.png',
    apple: 'https://assets.spaceappschallenge.org/media/images/favicon2x.2e16d0ba.fill-192x192.png',
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Analytics/>
      </head>
      <body className={`${inter.className} ${firaSans.variable} ${overpass.variable}`}>
        {children}
      </body>
    </html>
  )
}
