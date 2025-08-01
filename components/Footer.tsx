/**
 * Copyright (c) 2025 Yaman Devrim
 * All rights reserved. NASA Space Apps Challenge 2025 Bolu
 */

"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

interface FooterProps {
  translations?: {
    company: string
    aboutUs: string
    product: string
    pricing: string
    integrations: string
    spaceAppsAI: string
    resourcesAndTools: string
    contentHub: string
    collections: string
    guidesReports: string
    copyright: string
    language: string
    turkish: string
    english: string
    homepage: string
    privacy: string
    codeOfConduct: string
    sponsors: string
    contact: string
  }
  language?: "tr" | "en"
  setLanguage?: (lang: "tr" | "en") => void
  showAwards?: boolean
}

export function Footer({ translations, language = "tr", setLanguage, showAwards = false }: FooterProps) {
  const t = translations || {
    company: "Şirket",
    aboutUs: "Hakkımızda",
    product: "Ürün",
    pricing: "Fiyatlandırma",
    integrations: "Entegrasyonlar",
    spaceAppsAI: "Space Apps AI",
    resourcesAndTools: "Kaynaklar ve Araçlar",
    contentHub: "İçerik Merkezi",
    collections: "Koleksiyonlar",
    guidesReports: "Kılavuzlar ve Raporlar",
    copyright:
      "© 2025 NASA Space Apps Bolu. Tüm hakları saklıdır. NASA Space Apps Challange, NASA'nın ticari markasıdır.",
    language: "Dil",
    turkish: "Türkçe",
    english: "English",
    homepage: "Ana Sayfa",
    privacy: "Gizlilik Politikası",
    codeOfConduct: "Davranış Kuralları",
    sponsors: "Sponsorlar",
    contact: "İletişim",
  }

  const isWhiteFooter = showAwards
  const logoSrc = isWhiteFooter ? "/logo-dark.svg" : "/logo-white.svg"
  const textColor = isWhiteFooter ? "text-gray-900" : "text-white"
  const hoverColor = isWhiteFooter ? "hover:text-blue-600" : "hover:text-yellow-400"
  const mutedTextColor = isWhiteFooter ? "text-gray-600" : "text-gray-400"
  const mutedHoverColor = isWhiteFooter ? "hover:text-gray-900" : "hover:text-white"
  const borderColor = isWhiteFooter ? "border-gray-300" : "border-gray-700"
  const backgroundColor = isWhiteFooter ? "bg-white" : ""

  return (
    <footer
      className={`py-16 px-4 sm:px-6 lg:px-8 ${backgroundColor}`}
      style={!isWhiteFooter ? { backgroundColor: "var(--bg-primary)" } : {}}
    >
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <Image
            src={logoSrc || "/placeholder.svg"}
            alt="Space Apps Challenge"
            width={300}
            height={120}
            className="h-24 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 mb-12">
          <Link
            href="/"
            className={`${isWhiteFooter ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-yellow-400"} transition-colors font-overpass-regular text-lg font-medium`}
          >
            {t.homepage}
          </Link>
          <Link
            href="/privacy"
            className={`${isWhiteFooter ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-yellow-400"} transition-colors font-overpass-regular text-lg font-medium`}
          >
            {t.privacy}
          </Link>
          <Link
            href="/code-of-conduct"
            className={`${isWhiteFooter ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-yellow-400"} transition-colors font-overpass-regular text-lg font-medium`}
          >
            {t.codeOfConduct}
          </Link>
          <Link
            href="#sponsors"
            className={`${isWhiteFooter ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-yellow-400"} transition-colors font-overpass-regular text-lg font-medium`}
          >
            {t.sponsors}
          </Link>
          <Link
            href="#contact"
            className={`${isWhiteFooter ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-yellow-400"} transition-colors font-overpass-regular text-lg font-medium`}
          >
            {t.contact}
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-12">
          <Link
            href="#"
            className={`${isWhiteFooter ? "text-gray-600 hover:text-gray-900" : "text-gray-400 hover:text-white"} transition-colors`}
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </Link>
          <Link
            href="#"
            className={`${isWhiteFooter ? "text-gray-600 hover:text-gray-900" : "text-gray-400 hover:text-white"} transition-colors`}
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </Link>
          <Link
            href="#"
            className={`${isWhiteFooter ? "text-gray-600 hover:text-gray-900" : "text-gray-400 hover:text-white"} transition-colors`}
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </Link>
          <Link
            href="#"
            className={`${isWhiteFooter ? "text-gray-600 hover:text-gray-900" : "text-gray-400 hover:text-white"} transition-colors`}
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </Link>
        </div>

        {/* Bottom Section with Copyright and Language Selector */}
        <div className={`pt-8 border-t ${borderColor} flex flex-col sm:flex-row justify-between items-center gap-4`}>
          <p className={`${mutedTextColor} font-overpass-regular text-sm sm:text-base text-center sm:text-left`}>
            {t.copyright}
          </p>

          {/* Language Toggle - only show if setLanguage is provided */}
          {setLanguage && (
            <div className="flex items-center space-x-2">
              <span className={`${mutedTextColor} font-overpass-regular text-sm`}>{t.language}:</span>
              <button
                onClick={() => setLanguage("tr")}
                className={`px-3 py-1 rounded text-sm font-overpass-regular transition-colors ${
                  language === "tr" ? "" : `${mutedTextColor} ${mutedHoverColor}`
                }`}
                style={language === "tr" ? { backgroundColor: "var(--accent-yellow)", color: "var(--bg-primary)" } : {}}
              >
                {t.turkish}
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded text-sm font-overpass-regular transition-colors ${
                  language === "en" ? "" : `${mutedTextColor} ${mutedHoverColor}`
                }`}
                style={language === "en" ? { backgroundColor: "var(--accent-yellow)", color: "var(--bg-primary)" } : {}}
              >
                {t.english}
              </button>
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
