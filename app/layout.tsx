import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700;900&family=Overpass:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="https://assets.spaceappschallenge.org/media/images/favicon2x.2e16d0ba.fill-192x192.png" />
        <Analytics/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
