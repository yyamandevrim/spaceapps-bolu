/**
 * Copyright (c) 2025 Yaman Devrim
 * All rights reserved. NASA Space Apps Challenge 2025 Bolu
 */

"use client"

import Image from "next/image"
import Link from "next/link"

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
  }
  language?: "tr" | "en"
  setLanguage?: (lang: "tr" | "en") => void
}

export function Footer({ translations, language = "tr", setLanguage }: FooterProps) {
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
    copyright: "© 2025 NASA Space Apps Bolu. Tüm hakları saklıdır. NASA Space Apps Challange, NASA'nın ticari markasıdır.",
    language: "Dil",
    turkish: "Türkçe",
    english: "English"
  }

  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            {/* Mobile logo */}
            <Image
              src="/logo-white.svg?height=400&width=400"
              alt="Space Apps Challenge"
              width={140}
              height={140}
              className="mb-6 h-25 sm:h-36 lg:h-42 xl:h-50 w-auto block sm:hidden"
            />
            {/* Desktop logo */}
            <Image
              src="/logo-circular-white.svg?height=400&width=400"
              alt="Space Apps Challenge"
              width={140}
              height={140}
              className="mb-6 h-25 sm:h-36 lg:h-42 xl:h-50 w-auto hidden sm:block"
            />
          </div>

          <div>
            <h4 className="font-overpass-bold text-lg mb-4">{t.company}</h4>
            <ul className="space-y-2 font-overpass-regular text-gray-300">
              <li>
                <Link href="#" className="hover:text-white transition-colors text-sm sm:text-base">
                  {t.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors text-sm sm:text-base">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/code-of-conduct" className="hover:text-white transition-colors text-sm sm:text-base">
                  Davranış Kuralları
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 font-overpass-regular text-sm sm:text-base text-center sm:text-left">
            {t.copyright}
          </p>

          {/* Language Toggle - only show if setLanguage is provided */}
          {setLanguage && (
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 font-overpass-regular text-sm">{t.language}:</span>
              <button
                onClick={() => setLanguage("tr")}
                className={`px-3 py-1 rounded text-sm font-overpass-regular transition-colors ${
                  language === "tr" ? "" : "text-gray-400 hover:text-white"
                }`}
                style={language === "tr" ? { backgroundColor: "var(--accent-yellow)", color: "var(--bg-primary)" } : {}}
              >
                {t.turkish}
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded text-sm font-overpass-regular transition-colors ${
                  language === "en" ? "" : "text-gray-400 hover:text-white"
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
