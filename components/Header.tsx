//COPYRIGHT 2025, NASA SPACE APPS CHALLENGE BOLU
// BY YAMANDEVRIM

"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  translations?: {
    about: string
    speakers: string
    agenda: string
    awards: string
    faqs: string
    registerNow: string
  }
  showAwards?: boolean
}

export function Header({ translations, showAwards = false }: HeaderProps) {
  const t = translations || {
    about: "Hakkında",
    speakers: "Jüriler",
    agenda: "Takvim",
    awards: "Ödüller",
    faqs: "S.S.S.",
    registerNow: "Şimdi Kayıt Ol"
  }

  return (
    <header className="sticky top-0 flex items-center justify-between px-4 sm:px-6 py-4 lg:px-8 z-50 backdrop-blur-md bg-black/30 border-b border-gray-700/50">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo-white.webp"
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
        {showAwards && (
          <Link
            href="/#awards"
            className="text-white hover:text-blue-300 transition-colors font-overpass-regular text-sm lg:text-base"
          >
            {t.awards}
          </Link>
        )}
        <Link
          href="/#faqs"
          className="text-white hover:text-blue-300 transition-colors font-overpass-regular text-sm lg:text-base"
        >
          {t.faqs}
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
