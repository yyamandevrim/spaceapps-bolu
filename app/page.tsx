/**
 * Copyright (c) 2025 Yaman Devrim
 * All rights reserved. NASA Space Apps Challenge 2025 Bolu
 */

"use client"

import type React from "react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ConfigMenu } from "@/components/ConfigMenu"
import { translations, type Language } from "@/lib/translations"
import { agendaItems } from "@/lib/agenda"
import { judges } from "@/lib/judges"
import { faqs } from "@/lib/faqs"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

export default function Page() {
  const [language, setLanguage] = useState<Language>("tr")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [openMonth, setOpenMonth] = useState<number | null>(null)
  const [heroBackground, setHeroBackground] = useState<string>("")
  const [showLocation, setShowLocation] = useState<boolean>(false)
  const [showAwards, setShowAwards] = useState<boolean>(false)
  const [showCookieNotice, setShowCookieNotice] = useState<boolean>(false)
  
  // Add new section toggles
  const [showSponsors, setShowSponsors] = useState<boolean>(true)
  const [showAgenda, setShowAgenda] = useState<boolean>(true)
  const [showJudges, setShowJudges] = useState<boolean>(true)
  const [showFaqs, setShowFaqs] = useState<boolean>(true)
  
  // Config menu states
  const [showConfigMenu, setShowConfigMenu] = useState<boolean>(false)
  const [commandSequence, setCommandSequence] = useState<string>("")
  
  const t = translations[language]

  // Command sequence detection
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const newSequence = commandSequence + event.key.toLowerCase()
      setCommandSequence(newSequence)
      
      // Check for config command: "config2025"
      if (newSequence.includes("config2025")) {
        setShowConfigMenu(true)
        setCommandSequence("")
      }
      
      // Reset sequence if it gets too long
      if (newSequence.length > 20) {
        setCommandSequence("")
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [commandSequence])

  // Reset command sequence after 3 seconds of inactivity
  useEffect(() => {
    if (commandSequence.length > 0) {
      const timer = setTimeout(() => {
        setCommandSequence("")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [commandSequence])

  // Check if cookie notice was previously dismissed
  useEffect(() => {
    const cookieDismissed = localStorage.getItem('cookieNoticeDismissed')
    if (!cookieDismissed) {
      setShowCookieNotice(true)
    }
  }, [])

  // Function to dismiss cookie notice
  const dismissCookieNotice = () => {
    setShowCookieNotice(false)
    localStorage.setItem('cookieNoticeDismissed', 'true')
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const toggleMonth = (index: number) => {
    setOpenMonth(openMonth === index ? null : index)
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setHeroBackground(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Config Menu */}
      <ConfigMenu
        showConfigMenu={showConfigMenu}
        setShowConfigMenu={setShowConfigMenu}
        language={language}
        setLanguage={setLanguage}
        showLocation={showLocation}
        setShowLocation={setShowLocation}
        showAwards={showAwards}
        setShowAwards={setShowAwards}
        showCookieNotice={showCookieNotice}
        setShowCookieNotice={setShowCookieNotice}
        showSponsors={showSponsors}
        setShowSponsors={setShowSponsors}
        showAgenda={showAgenda}
        setShowAgenda={setShowAgenda}
        showJudges={showJudges}
        setShowJudges={setShowJudges}
        showFaqs={showFaqs}
        setShowFaqs={setShowFaqs}
        commandSequence={commandSequence}
      />

      {/* Header */}
      <Header translations={t} />

      {/* Hero Section */}
      <main className="relative min-h-[calc(100vh-80px)] overflow-hidden">
        {/* Background Image Upload
        <div className="absolute top-4 right-4 z-20">
          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="hero-bg-upload" />
          <label
            htmlFor="hero-bg-upload"
            className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded cursor-pointer text-sm hover:bg-white/30 transition-colors"
          >
            Upload Background
          </label>
        </div>
 */}
        {/* Background */}
        <div
          className={`absolute inset-0 hero-bg ${heroBackground ? "" : "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"}`}
          style={heroBackground ? { backgroundImage: `url(${heroBackground})` } : {}}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
        radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)
      `,
          }}
        />

        <div className="relative z-10 flex items-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left side - Content */}
              <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                {showLocation && (
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <svg width="16" height="20" viewBox="0 0 34 34" className="flex-shrink-0">
                      <path
                        d="M16,6c-3,3-7.58,8.01-11.15,11.44-3.43-3.43-8.01-8.44-11.15-11.44-6.15-6.01-6.15-15.87,0-21.88,6.15-6.01,16.16-6.01,22.31,0,6.15,6.15,6.15,15.87,0,21.88Z"
                        fill="#db240b"
                        transform="translate(12, 16)"
                      />
                    </svg>
                    <p className="text-lg sm:text-xl text-white/90 font-overpass-regular">{t.location}</p>
                  </div>
                )}

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fira-black leading-tight text-white">
                  {t.heroTitle}
                </h1>

                <p className="text-lg sm:text-xl text-white/90 font-overpass-regular max-w-lg mx-auto lg:mx-0">
                  {t.heroSubtitle}
                </p>

                <Button
                  className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-overpass-bold text-black rounded-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "var(--accent-yellow)" }}
                  onClick={() => window.location.href = "/redirect/register"}
                >
                  {t.registerNow}
                </Button>
              </div>

              {/* Right side - Globe */}
              <div className="relative hidden lg:flex justify-center lg:justify-end">
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
                  {/* Globe base */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.8) 0%, rgba(29, 78, 216, 0.9) 70%)",
                      boxShadow: "inset -20px -20px 60px rgba(0,0,0,0.3), 0 0 100px rgba(59, 130, 246, 0.3)",
                    }}
                  />

                  {/* Continents overlay */}
                  <div className="absolute inset-4 rounded-full opacity-60">
                    <Image
                      src="/Globe.png?height=400&width=400"
                      alt="World Map"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-full opacity-100"
                    />
                  </div>

                  {/* Location markers */}
                  <div className="absolute inset-0">
                    {/* Sample location markers positioned around the globe */}
                    <div className="absolute top-16 right-20 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <div
                      className="absolute top-24 right-32 w-2 h-2 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <div
                      className="absolute top-32 right-16 w-2 h-2 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    />
                    <div
                      className="absolute top-40 right-28 w-3 h-3 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: "1.5s" }}
                    />
                    <div
                      className="absolute top-48 right-24 w-2 h-2 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: "2s" }}
                    />
                    <div
                      className="absolute top-56 right-36 w-2 h-2 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.3s" }}
                    />
                    <div
                      className="absolute top-64 right-20 w-3 h-3 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.8s" }}
                    />
                    <div
                      className="absolute top-72 right-32 w-2 h-2 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: "1.3s" }}
                    />

                    {/* Left side markers */}
                    <div
                      className="absolute top-20 left-24 w-2 h-2 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.7s" }}
                    />
                    <div
                      className="absolute top-36 left-16 w-3 h-3 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: "1.2s" }}
                    />
                    <div
                      className="absolute top-52 left-28 w-2 h-2 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: "1.7s" }}
                    />
                    <div
                      className="absolute top-68 left-20 w-2 h-2 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    />

                    {/* Bottom markers */}
                    <div
                      className="absolute bottom-20 left-32 w-2 h-2 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.9s" }}
                    />
                    <div
                      className="absolute bottom-16 right-40 w-3 h-3 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: "1.4s" }}
                    />
                    <div
                      className="absolute bottom-24 left-40 w-2 h-2 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: "1.9s" }}
                    />
                  </div>

                  {/* Orbital rings */}
                  <div
                    className="absolute inset-0 rounded-full border border-white/20 animate-spin"
                    style={{ animationDuration: "20s" }}
                  />
                  <div
                    className="absolute inset-8 rounded-full border border-white/10 animate-spin"
                    style={{ animationDuration: "30s", animationDirection: "reverse" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sponsors Section - Conditional */}
      {showSponsors && (
        <section className="bg-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              {/* NASA Logo and Text */}
              <div className="flex items-center space-x-4 sm:space-x-6 flex-shrink-0">
                {/* Mobile logo */}
                <Image
                  src="/logo-dark.svg?height=220&width=220"
                  alt="NASA"
                  width={220}
                  height={220}
                  className="w-32 h-32 sm:w-20 sm:h-20 block sm:hidden"
                />
                {/* Desktop logo */}
                <Image
                  src="/logo-circular-dark.svg?height=220&width=220"
                  alt="NASA"
                  width={220}
                  height={220}
                  className="rounded-full w-16 h-16 sm:w-20 sm:h-20 hidden sm:block"
                />
                <div className="h-20 sm:h-16 w-px bg-gray-300"></div>
                <span className="text-gray-700 font-overpass-regular text-base sm:text-lg whitespace-nowrap">
                  {t.inPartnershipWith}
                </span>
              </div>

              {/* Sliding Sponsors Carousel */}
              <div className="flex-1 overflow-hidden ml-0 sm:ml-8 w-full sm:w-auto mt-4 sm:mt-0">
                <div className="flex animate-slide space-x-8 sm:space-x-12 items-center">
                  {/* First set of logos */}
                  <Image
                    src="/logo-dark.svg?height=60&width=120"
                    alt="CONAE"
                    width={120}
                    height={60}
                    className="flex-shrink-0 h-12 sm:h-15 w-auto"
                  />
                  <Image
                    src="/logo-dark.svg?height=60&width=120"
                    alt="Agencia Espacial del Paraguay"
                    width={120}
                    height={60}
                    className="flex-shrink-0 h-12 sm:h-15 w-auto"
                  />
                  <Image
                    src="/logo-dark.svg?height=60&width=120"
                    alt="SANSA"
                    width={120}
                    height={60}
                    className="flex-shrink-0 h-12 sm:h-15 w-auto"
                  />
                  <Image
                    src="/logo-dark.svg?height=60&width=120"
                    alt="AEB"
                    width={120}
                    height={60}
                    className="flex-shrink-0 h-12 sm:h-15 w-auto"
                  />
                  <Image
                    src="/logo-dark.svg?height=60&width=120"
                    alt="Turkish Space Agency"
                    width={120}
                    height={60}
                    className="flex-shrink-0 h-12 sm:h-15 w-auto"
                  />
                  <Image
                    src="/logo-dark.svg?height=60&width=120"
                    alt="ESA"
                    width={120}
                    height={60}
                    className="flex-shrink-0 h-12 sm:h-15 w-auto"
                  />
                  <Image
                    src="/logo-dark.svg?height=60&width=120"
                    alt="JAXA"
                    width={120}
                    height={60}
                    className="flex-shrink-0 h-12 sm:h-15 w-auto"
                  />
                  <Image
                    src="/logo-dark.svg?height=60&width=120"
                    alt="CSA"
                    width={120}
                    height={60}
                    className="flex-shrink-0 h-12 sm:h-15 w-auto"
                  />

                  {/* Duplicate set for seamless loop */}
                  <Image
                    src="/logo-dark.svg?height=60&width=120"
                    alt="CONAE"
                    width={120}
                    height={60}
                    className="flex-shrink-0 h-12 sm:h-15 w-auto"
                  />
                  <Image
                    src="/logo-dark.svg?height=60&width=120"
                    alt="Agencia Espacial del Paraguay"
                    width={120}
                    height={60}
                    className="flex-shrink-0 h-12 sm:h-15 w-auto"
                  />
                  <Image
                    src="/logo-dark.svg?height=60&width=120"
                    alt="SANSA"
                    width={120}
                    height={60}
                    className="flex-shrink-0 h-12 sm:h-15 w-auto"
                  />
                  <Image
                    src="/logo-dark.svg?height=60&width=120"
                    alt="AEB"
                    width={120}
                    height={60}
                    className="flex-shrink-0 h-12 sm:h-15 w-auto"
                  />
                  <Image
                    src="/logo-dark.svg?height=60&width=120"
                    alt="Turkish Space Agency"
                    width={120}
                    height={60}
                    className="flex-shrink-0 h-12 sm:h-15 w-auto"
                  />
                  <Image
                    src="/logo-dark.svg?height=60&width=120"
                    alt="ESA"
                    width={120}
                    height={60}
                    className="flex-shrink-0 h-12 sm:h-15 w-auto"
                  />
                  <Image
                    src="/logo-dark.svg?height=60&width=120"
                    alt="JAXA"
                    width={120}
                    height={60}
                    className="flex-shrink-0 h-12 sm:h-15 w-auto"
                  />
                  <Image
                    src="/logo-dark.svg?height=60&width=120"
                    alt="CSA"
                    width={120}
                    height={60}
                    className="flex-shrink-0 h-12 sm:h-15 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Agenda Section - Conditional */}
      {showAgenda && (
        <section id="agenda" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-fira-black text-center mb-4">{t.agendaTitle}</h2>
            <p className="text-lg sm:text-xl text-gray-300 text-center mb-12 sm:mb-16 font-overpass-regular">
              {t.agendaSubtitle}
            </p>

            <div className="space-y-4">
              {agendaItems.map((monthItem, monthIndex) => (
                <div key={monthIndex} className="border border-gray-700 rounded-lg overflow-hidden">
                  {/* Month Header - Clickable */}
                  <button
                    onClick={() => toggleMonth(monthIndex)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                  >
                    <h3 className="text-xl sm:text-2xl font-fira-bold" style={{ color: "white" }}>
                      {language === "tr" ? monthItem.month : monthItem.monthEn}
                    </h3>
                    {openMonth === monthIndex ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>

                  {/* Events for this month - Collapsible */}
                  {openMonth === monthIndex && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 sm:pt-4">
                      <div className="space-y-4">
                        {monthItem.events.map((event, eventIndex) => (
                          <div
                            key={eventIndex}
                            className="grid grid-cols-1 sm:grid-cols-12 gap-4 py-3 sm:py-4 border-b border-gray-800 last:border-b-0"
                          >
                            <div className="sm:col-span-3 text-gray-300 font-overpass-bold text-sm sm:text-base">
                              {language === "tr" ? event.date : event.dateEn}
                            </div>
                            <div className="sm:col-span-9">
                              <h4 className="text-lg sm:text-xl font-fira-bold mb-2 sm:mb-3">
                                {language === "tr" ? event.title : event.titleEn}
                              </h4>
                              <p className="text-gray-300 font-overpass-regular leading-relaxed text-sm sm:text-base">
                                {language === "tr" ? event.description : event.descriptionEn}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Judges Section - Conditional */}
      {showJudges && (
        <section id="speakers" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-100"
            style={{
              backgroundImage: "url('https://assets.spaceappschallenge.org/media/images/rose-pattern.original.png')",
              backgroundRepeat: "repeat",
              backgroundSize: "auto",
            }}
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-fira-black text-center mb-4 text-gray-900">
              {t.speakersTitle}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 text-center mb-12 sm:mb-16 font-overpass-regular">
              {t.speakersSubtitle}
            </p>

            <div className="space-y-6 md:space-y-0">
              {/* Mobile Layout */}
              <div className="block md:hidden space-y-6">
                {/* First row - 1 judge (large) */}
                <div className="flex justify-center">
                  <Link href="/judges/okan-kulkoyluoglu">
                    <div className="text-center bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 w-full max-w-xs cursor-pointer hover:scale-105">
                      <div className="relative mb-4">
                        <Image
                          src={judges[0].avatar || "/placeholder.svg"}
                          alt={judges[0].name}
                          width={200}
                          height={200}
                          className="rounded-2xl mx-auto transition-all duration-300 object-cover w-full max-w-[200px] h-[200px]"
                        />
                      </div>
                      <h3 className="font-fira-bold mb-2 text-gray-900 text-xl">{judges[0].name}</h3>
                      <p className="text-gray-600 font-overpass-regular text-base">{judges[0].role}</p>
                      <p className="text-blue-600 font-overpass-regular text-sm mt-2">Detayları Görüntüle →</p>
                    </div>
                  </Link>
                </div>

                {/* Second row - 2 judges */}
                <div className="flex justify-center gap-4">
                  {judges.slice(1, 3).map((judge, index) => (
                    <div
                      key={index + 1}
                      className="text-center bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 w-full max-w-xs"
                    >
                      <div className="relative mb-4">
                        <Image
                          src={judge.avatar || "/placeholder.svg"}
                          alt={judge.name}
                          width={200}
                          height={200}
                          className="rounded-2xl mx-auto transition-all duration-300 object-cover w-full max-w-[120px] h-[120px]"
                        />
                      </div>
                      <h3 className="font-fira-bold mb-2 text-gray-900 text-base">{judge.name}</h3>
                      <p className="text-gray-600 font-overpass-regular text-xs">{judge.role}</p>
                    </div>
                  ))}
                </div>

                {/* Third row - 2 judges */}
                <div className="flex justify-center gap-4">
                  {judges.slice(3, 5).map((judge, index) => (
                    <div
                      key={index + 3}
                      className="text-center bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 w-full max-w-xs"
                    >
                      <div className="relative mb-4">
                        <Image
                          src={judge.avatar || "/placeholder.svg"}
                          alt={judge.name}
                          width={200}
                          height={200}
                          className="rounded-2xl mx-auto transition-all duration-300 object-cover w-full max-w-[120px] h-[120px]"
                        />
                      </div>
                      <h3 className="font-fira-bold mb-2 text-gray-900 text-base">{judge.name}</h3>
                      <p className="text-gray-600 font-overpass-regular text-xs">{judge.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Layout - All cards same size */}
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {judges.map((judge, index) => (
                  index === 0 ? (
                    <Link href="/judges/okan-kulkoyluoglu" key={index}>
                      <div className="text-center bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer hover:scale-105">
                        <div className="relative mb-4">
                          <Image
                            src={judge.avatar || "/placeholder.svg"}
                            alt={judge.name}
                            width={200}
                            height={200}
                            className="rounded-2xl mx-auto transition-all duration-300 object-cover w-full max-w-[120px] h-[120px]"
                          />
                        </div>
                        <h3 className="font-fira-bold mb-2 text-gray-900 text-lg">{judge.name}</h3>
                        <p className="text-gray-600 font-overpass-regular text-sm">{judge.role}</p>
                        <p className="text-blue-600 font-overpass-regular text-xs mt-2">Detayları Görüntüle →</p>
                      </div>
                    </Link>
                  ) : (
                    <div
                      key={index}
                      className="text-center bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="relative mb-4">
                        <Image
                          src={judge.avatar || "/placeholder.svg"}
                          alt={judge.name}
                          width={200}
                          height={200}
                          className="rounded-2xl mx-auto transition-all duration-300 object-cover w-full max-w-[120px] h-[120px]"
                        />
                      </div>
                      <h3 className="font-fira-bold mb-2 text-gray-900 text-lg">{judge.name}</h3>
                      <p className="text-gray-600 font-overpass-regular text-sm">{judge.role}</p>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Awards Section - Conditional */}
      {showAwards && (
        <section id="awards" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)
              `,
            }}
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-fira-black text-center mb-4 text-white">
              {language === "tr" ? "Ödüller" : "Awards"}
            </h2>
            <p className="text-lg sm:text-xl text-white/90 text-center mb-12 sm:mb-16 font-overpass-regular">
              {language === "tr" 
                ? "Kazanan takımlar için büyük ödüller sizi bekliyor!" 
                : "Great prizes await the winning teams!"}
            </p>

            {/* Podium Design */}
            <div className="flex items-end justify-center gap-4 sm:gap-8 max-w-4xl mx-auto">
              {/* 2nd Place */}
              <div className="text-center">
                <div className="bg-gradient-to-t from-gray-400 to-gray-300 rounded-t-lg p-6 sm:p-8 mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl mb-2">🥈</div>
                  <div className="text-lg sm:text-xl font-fira-bold text-gray-800 mb-2">
                    {language === "tr" ? "2. Takım" : "2nd Team"}
                  </div>
                  <div className="text-2xl sm:text-3xl font-fira-black text-gray-900">20.000₺</div>
                </div>
                <div className="bg-gray-300 h-24 sm:h-32 w-full rounded-b-lg shadow-md"></div>
              </div>

              {/* 1st Place - Highest */}
              <div className="text-center">
                <div className="bg-gradient-to-t from-yellow-500 to-yellow-400 rounded-t-lg p-6 sm:p-8 mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl sm:text-5xl mb-2">🥇</div>
                  <div className="text-xl sm:text-2xl font-fira-bold text-gray-800 mb-2">
                    {language === "tr" ? "1. Takım" : "1st Team"}
                  </div>
                  <div className="text-3xl sm:text-4xl font-fira-black text-gray-900">30.000₺</div>
                </div>
                <div className="bg-yellow-400 h-32 sm:h-40 w-full rounded-b-lg shadow-md"></div>
              </div>

              {/* 3rd Place */}
              <div className="text-center">
                <div className="bg-gradient-to-t from-amber-600 to-amber-500 rounded-t-lg p-6 sm:p-8 mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl mb-2">🥉</div>
                  <div className="text-lg sm:text-xl font-fira-bold text-gray-800 mb-2">
                    {language === "tr" ? "3. Takım" : "3rd Team"}
                  </div>
                  <div className="text-2xl sm:text-3xl font-fira-black text-gray-900">10.000₺</div>
                </div>
                <div className="bg-amber-500 h-20 sm:h-28 w-full rounded-b-lg shadow-md"></div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center mt-12">
              {/* Sponsor Thank You Note */}
              <button
                onClick={() => document.getElementById('supporters')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/80 font-overgipass-regular text-sm hover:text-white transition-colors cursor-pointer underline decoration-dotted underline-offset-4"
              >
                {language === "tr" 
                  ? "Ödül sponsoru XX Şirketine teşekkür ederiz. →" 
                  : "Thanks to award sponsor XX Company →"}
              </button>

                <p className="text-white/70 font-overpass-regular text-sm sm:text-base mt-6">
                {language === "tr" 
                  ? "Ödüller kazanan takım üyeleri arasında eşit olarak paylaştırılacaktır." 
                  : "Awards will be shared equally among winning team members."}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section - Conditional */}
      {showFaqs && (
        <section id="faqs" className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${showAwards ? 'bg-white' : ''}`}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-fira-black text-center mb-12 sm:mb-16 ${showAwards ? 'text-gray-900' : 'text-white'}`}>
              {t.faqsTitle}
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className={`border rounded-lg overflow-hidden ${showAwards ? 'border-gray-300 bg-white' : 'border-gray-700'}`}>
                  <button
                    onClick={() => toggleFaq(index)}
                    className={`w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between transition-colors ${
                      showAwards 
                        ? 'hover:bg-gray-50 text-gray-900' 
                        : 'hover:bg-gray-800/50 text-white'
                    }`}
                  >
                    <h3 className={`text-lg sm:text-xl font-fira-bold pr-4 ${showAwards ? 'text-gray-900' : 'text-white'}`}>
                      {language === "tr" ? faq.question : faq.questionEn}
                    </h3>
                    {openFaq === index ? (
                      <ChevronUp className={`w-5 h-5 flex-shrink-0 ${showAwards ? 'text-gray-600' : 'text-gray-400'}`} />
                    ) : (
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 ${showAwards ? 'text-gray-600' : 'text-gray-400'}`} />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                      <p className={`font-overpass-regular leading-relaxed text-sm sm:text-base ${
                        showAwards ? 'text-gray-700' : 'text-gray-300'
                      }`}>
                        {language === "tr" ? faq.answer : faq.answerEn}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer translations={t} language={language} setLanguage={setLanguage} />
      
      {/* Cookie Notice - Conditional */}
      {showCookieNotice && (
        <div className="fixed inset-x-0 w-11/12 p-4 mx-auto space-y-1 rounded-lg shadow-lg select-none bottom-4 lg:w-1/4 ring-1 ring-white/20 lg:mx-0 lg:left-4 bg-white/10 backdrop-blur-xl z-50">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-medium leading-tight text-white font-fira-bold">
              {language === "tr" ? "Çerezler 🍪" : "Cookies 🍪"}
            </h3>
            <button 
              onClick={dismissCookieNotice}
              className="p-1 transition-colors rounded-xl hover:bg-white/20 bg-white/10 text-white"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-white/80 font-overpass-regular">
            {language === "tr" 
              ? "Deneyiminizi daha da iyi hale getirmek için çerezler kullanıyoruz." 
              : "We use cookies to make your experience here even better."}
          </p>
        </div>
      )}
    </div>
  )
}
