"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  translations?: {
    about: string
    speakers: string
    agenda: string
    faqs: string
    whatIsMaze: string
    registerNow: string
  }
}

export function Header({ translations }: HeaderProps) {
  const t = translations || {
    about: "Hakkında",
    speakers: "Jüriler",
    agenda: "Takvim",
    faqs: "S.S.S.",
    whatIsMaze: "Space Apps Challenge Nedir?",
    registerNow: "ŞİMDİ KAYIT OL"
  }

  return (
    <header className="sticky top-0 flex items-center justify-between px-4 sm:px-6 py-4 lg:px-8 z-50 backdrop-blur-md bg-black/30 border-b border-gray-700/50">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/placeholder.svg?height=50&width=190"
            alt="Space Apps Challenge Bolu"
            width={190}
            height={50}
            className="text-white h-12 sm:h-14 w-auto"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
        <Link
          href="/#about"
          className="text-white hover:text-blue-300 transition-colors font-overpass-regular text-sm lg:text-base"
        >
          {t.about}
        </Link>
        <Link
          href="/#judges"
          className="text-white hover:text-blue-300 transition-colors font-overpass-regular text-sm lg:text-base"
        >
          {t.speakers}
        </Link>
        <Link
          href="/#agenda"
          className="text-white hover:text-blue-300 transition-colors font-overpass-regular text-sm lg:text-base"
        >
          {t.agenda}
        </Link>
        <Link
          href="/#faqs"
          className="text-white hover:text-blue-300 transition-colors font-overpass-regular text-sm lg:text-base"
        >
          {t.faqs}
        </Link>
        <Link
          href="#"
          className="text-white hover:text-blue-300 transition-colors font-overpass-regular text-sm lg:text-base"
        >
          {t.whatIsMaze}
        </Link>
      </nav>

      {/* CTA Button */}
      <Button 
        className="px-4 sm:px-6 py-2 rounded-lg font-overpass-bold text-black text-sm lg:text-base" 
        style={{ backgroundColor: "var(--accent-yellow)" }}
        onClick={() => window.open('https://demo.bolu.spaceapps.tr/redirect/register', '_blank')}
      >
        {t.registerNow}
      </Button>
    </header>
  )
}
