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
import { NewsletterForm } from "@/components/NewsletterForm"
import { translations, type Language } from "@/lib/translations"
import { agendaItems } from "@/lib/agenda"
import { judges } from "@/lib/judges"
import { faqs } from "@/lib/faqs"
import { SponsorsCarousel } from "@/lib/sponsors"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

export default function Page() {
  const [language, setLanguage] = useState<Language>("tr")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [openMonth, setOpenMonth] = useState<number | null>(null)
  const [heroBackground, setHeroBackground] = useState<string>("")
  const [showLocation, setShowLocation] = useState<boolean>(true)
  const [showAwards, setShowAwards] = useState<boolean>(true)
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

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
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
    const cookieDismissed = localStorage.getItem("cookieNoticeDismissed")
    if (!cookieDismissed) {
      setShowCookieNotice(true)
    }
  }, [])

  // Function to dismiss cookie notice
  const dismissCookieNotice = () => {
    setShowCookieNotice(false)
    localStorage.setItem("cookieNoticeDismissed", "true")
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
      <Header translations={t} showAwards={showAwards} />

      {/* Hero Section - With Electric Blue Gradients */}
      <main className="relative overflow-hidden" style={{ backgroundColor: "var(--bg-primary)", minHeight: "calc(100vh - 5.55rem)" }}>
        {/* Sparkle Stars Background */}
        <div className="sparkle-stars" />

        {/* Electric Blue Gradients */}
        <div className="electric-gradient-1" />
        <div className="electric-gradient-2" />

        {/* Main content */}
        <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8" style={{ minHeight: "calc(100vh - 5.55rem)" }}>
          <div className="max-w-5xl mx-auto text-center">
            {/* Location badge */}
            {showLocation && (
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
                <svg width="16" height="20" viewBox="0 0 34 34" className="flex-shrink-0">
                  <path
                    d="M16,6c-3,3-7.58,8.01-11.15,11.44-3.43-3.43-8.01-8.44-11.15-11.44-6.15-6.01-6.15-15.87,0-21.88,6.15-6.01,16.16-6.01,22.31,0,6.15,6.15,6.15,15.87,0,21.88Z"
                    fill="var(--accent-red)"
                    transform="translate(12, 16)"
                  />
                </svg>
                <span className="text-white/90 font-overpass-regular text-sm">{t.location}</span>
              </div>
            )}

            {/* Main title */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-fira-black leading-tight text-white mb-8"
              style={{ lineHeight: 1.09 }}
            >
              {language === "en"
              ? t.heroTitle.split(" ").slice(0, 3).join(" ")
              : (
                <>
                <span style={{ color: "var(--accent-yellow)" }}>
                  {t.heroTitle.split(" ").slice(0, 3).join(" ")}
                </span>
                <br />
                <span style={{ color: "var(--accent-yellow)" }}>
                  {t.heroTitle.split(" ").slice(3, 5).join(" ")}
                </span>
                <span style={{ color: "white" }}>
                  {" "}{t.heroTitle.split(" ").slice(5).join(" ")}
                </span>
                </>
              )
              }
              <span className="block">
              {language === "en"
                ? (
                <>
                  <span style={{ color: "var(--accent-yellow)" }}>
                  {t.heroTitle.split(" ").slice(3, 8).join(" ")}
                  </span>{" "}
                  <span style={{ color: "white" }}>
                  {t.heroTitle.split(" ").slice(8).join(" ")}
                  </span>
                </>
                )
                : null
              }
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 font-overpass-regular max-w-3xl mx-auto mb-12 leading-relaxed">
              {language === "tr"
                ? (
                    (() => {
                      const words = t.heroSubtitle.split(" ");
                      return (
                        <>
                          {words.map((word, idx) => {
                            if (idx === 3) {
                              return <b key={idx}>{word} </b>;
                            }
                            return <span key={idx}>{word} </span>;
                          })}
                        </>
                      );
                    })()
                  )
                : (
                    (() => {
                      const words = t.heroSubtitle.split(" ");
                      const lastWord = words[words.length - 1];
                      const lastWordClean = lastWord.replace(/\.$/, "");
                      const ending = lastWord.endsWith(".") ? "." : "";
                      return (
                        <>
                          {words.slice(0, -1).join(" ") + " "}
                          <b>{lastWordClean}</b>{ending}
                        </>
                      );
                    })()
                  )
              }
            </p>

            {/* CTA Buttons - Equal Size */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button
                className="w-full sm:w-auto px-8 py-4 text-lg font-overpass-bold text-black rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
                style={{ backgroundColor: "var(--accent-yellow)" }}
                onClick={() => (window.location.href = "/redirect/register")}
              >
                {t.registerNow}
              </Button>

              {/* Secondary action - Same size */}
              <Button
                variant="outline"
                onClick={() => document.getElementById("agenda")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto px-8 py-4 text-lg font-overpass-regular text-white border-white/30 rounded-xl hover:bg-white/10 transition-all duration-300 bg-transparent"
              >
                {language === "tr" ? "Programı İncele" : "View Schedule"}
              </Button>
            </div>

            {/* Floating elements */}
            <div
              className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "var(--accent-blue)" }}
            />
            <div
              className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: "var(--accent-yellow)", animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "var(--accent-red)", animationDelay: "2s" }}
            />
            <div
              className="absolute bottom-1/3 right-1/3 w-1 h-1 rounded-full animate-pulse"
              style={{ backgroundColor: "var(--accent-blue)", animationDelay: "0.5s" }}
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
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
                  src="/logo-dark.webp"
                  alt="NASA"
                  width={260}
                  height={220}
                  className="w-32 h-auto sm:w-25 sm:h-auto block sm:hidden"
                />
                {/* Desktop logo */}
                <Image
                  src="/logo-circular-dark.webp"
                  alt="NASA"
                  width={220}
                  height={220}
                  className="w-16 h-16 sm:w-20 sm:h-20 hidden sm:block"
                />
                <div className="h-20 sm:h-16 w-px bg-gray-300"></div>
                <span className="text-gray-700 font-overpass-regular text-base sm:text-lg whitespace-nowrap">
                  {t.inPartnershipWith}
                </span>
              </div>

              {/* Sliding Sponsors Carousel */}
              <div className="flex-1 overflow-hidden ml-0 sm:ml-8 w-full sm:w-auto mt-4 sm:mt-0">
                <div className="flex animate-slide space-x-8 sm:space-x-12 items-center w-max">
                  <SponsorsCarousel />
                  <SponsorsCarousel />
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
        <section id="judges" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
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
                    <Link 
                      href={index === 0 ? "/judges/erhan-budak" : "/judges/ismail-ugur-tiryaki"}
                      key={index + 1}
                    >
                      <div className="text-center bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 w-full max-w-xs cursor-pointer hover:scale-105 min-h-[320px] flex flex-col flex-1">
                        <div className="relative mb-4">
                          <Image
                            src={judge.avatar || "/placeholder.svg"}
                            alt={judge.name}
                            width={200}
                            height={200}
                            className="rounded-2xl mx-auto transition-all duration-300 object-cover w-full max-w-[120px] h-[120px]"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <h3 className="font-fira-bold mb-2 text-gray-900 text-base min-h-[48px] flex items-center justify-center text-center">
                            {judge.name}
                          </h3>
                          <p className="text-gray-600 font-overpass-regular text-xs mb-2 text-center min-h-[32px] flex items-center justify-center">{judge.role}</p>
                          {/* Show for both (hide only when name is "Çok Yakında") */}
                          {judge.name !== "Çok Yakında" && (
                            <p className="text-blue-600 font-overpass-regular text-xs mt-auto text-center">Detayları Görüntüle →</p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Third row - 2 judges */}
                <div className="flex justify-center gap-4">
                  {judges.slice(3, 5).map((judge, index) => (
                    <Link
                      href={index === 0 ? "/judges/meral-ortac" : "/judges/hakan-yetis"}
                      key={index + 3}
                    >
                      <div className="text-center bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 w-full max-w-xs cursor-pointer hover:scale-105 min-h-[320px] flex flex-col flex-1">
                        <div className="relative mb-4">
                          <Image
                            src={judge.avatar || "/placeholder.svg"}
                            alt={judge.name}
                            width={200}
                            height={200}
                            className="rounded-2xl mx-auto transition-all duration-300 object-cover w-full max-w-[120px] h-[120px]"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <h3 className="font-fira-bold mb-2 text-gray-900 text-base min-h-[48px] flex items-center justify-center text-center">{judge.name}</h3>
                          <p className="text-gray-600 font-overpass-regular text-xs mb-2 text-center min-h-[32px] flex items-center justify-center">{judge.role}</p>
                          {/* Show for both (hide only when name is "Çok Yakında") */}
                          {judge.name !== "Çok Yakında" && (
                            <p className="text-blue-600 font-overpass-regular text-xs mt-auto text-center">Detayları Görüntüle →</p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Desktop Layout - All cards same size */}
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {judges.map((judge, index) =>
                  index === 0 ? (
                    <Link href="/judges/okan-kulkoyluoglu" key={index}>
                      <div className="text-center bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer hover:scale-105 h-[280px] flex flex-col">
                        <div className="relative mb-4">
                          <Image
                            src={judge.avatar || "/placeholder.svg"}
                            alt={judge.name}
                            width={200}
                            height={200}
                            className="rounded-2xl mx-auto transition-all duration-300 object-cover w-full max-w-[120px] h-[120px]"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <h3 className="font-fira-bold mb-2 text-gray-900 text-lg min-h-[56px] flex items-center justify-center text-center">{judge.name}</h3>
                          <p className="text-gray-600 font-overpass-regular text-sm min-h-[40px] flex items-center justify-center text-center">{judge.role}</p>
                          {judge.name !== "Çok Yakında" && (
                            <p className="text-blue-600 font-overpass-regular text-xs mt-auto text-center">Detayları Görüntüle →</p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ) : index === 1 ? (
                    <Link href="/judges/erhan-budak" key={index}>
                      <div className="text-center bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer hover:scale-105 h-[280px] flex flex-col">
                        <div className="relative mb-4">
                          <Image
                            src={judge.avatar || "/placeholder.svg"}
                            alt={judge.name}
                            width={200}
                            height={200}
                            className="rounded-2xl mx-auto transition-all duration-300 object-cover w-full max-w-[120px] h-[120px]"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <h3 className="font-fira-bold mb-2 text-gray-900 text-lg min-h-[56px] flex items-center justify-center text-center">
                            {judge.name}
                          </h3>
                          <p className="text-gray-600 font-overpass-regular text-sm min-h-[40px] flex items-center justify-center text-center">{judge.role}</p>
                          {judge.name !== "Çok Yakında" && (
                            <p className="text-blue-600 font-overpass-regular text-xs mt-auto text-center">Detayları Görüntüle →</p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ) : index === 2 ? (
                    <Link href="/judges/ismail-ugur-tiryaki" key={index}>
                      <div className="text-center bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer hover:scale-105 h-[280px] flex flex-col">
                        <div className="relative mb-4">
                          <Image
                            src={judge.avatar || "/placeholder.svg"}
                            alt={judge.name}
                            width={200}
                            height={200}
                            className="rounded-2xl mx-auto transition-all duration-300 object-cover w-full max-w-[120px] h-[120px]"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <h3 className="font-fira-bold mb-2 text-gray-900 text-lg min-h-[56px] flex items-center justify-center text-center">{judge.name}</h3>
                          <p className="text-gray-600 font-overpass-regular text-sm min-h-[40px] flex items-center justify-center text-center">{judge.role}</p>
                          {judge.name !== "Çok Yakında" && (
                            <p className="text-blue-600 font-overpass-regular text-xs mt-auto text-center">Detayları Görüntüle →</p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ) : index === 3 ? (
                    <Link href="/judges/meral-ortac" key={index}>
                      <div className="text-center bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer hover:scale-105 h-[280px] flex flex-col">
                        <div className="relative mb-4">
                          <Image
                            src={judge.avatar || "/placeholder.svg"}
                            alt={judge.name}
                            width={200}
                            height={200}
                            className="rounded-2xl mx-auto transition-all duration-300 object-cover w-full max-w-[120px] h-[120px]"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <h3 className="font-fira-bold mb-2 text-gray-900 text-lg min-h-[56px] flex items-center justify-center text-center">{judge.name}</h3>
                          <p className="text-gray-600 font-overpass-regular text-sm min-h-[40px] flex items-center justify-center text-center">{judge.role}</p>
                          {/* Show for 5th too (hide only when name is "Çok Yakında") */}
                          {judge.name !== "Çok Yakında" && (
                            <p className="text-blue-600 font-overpass-regular text-xs mt-auto text-center">Detayları Görüntüle →</p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ) : index === 4 ? (
                    <Link href="/judges/hakan-yetis" key={index}>
                      <div className="text-center bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer hover:scale-105 h-[280px] flex flex-col">
                        <div className="relative mb-4">
                          <Image
                            src={judge.avatar || "/placeholder.svg"}
                            alt={judge.name}
                            width={200}
                            height={200}
                            className="rounded-2xl mx-auto transition-all duration-300 object-cover w-full max-w-[120px] h-[120px]"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <h3 className="font-fira-bold mb-2 text-gray-900 text-lg min-h-[56px] flex items-center justify-center text-center">{judge.name}</h3>
                          <p className="text-gray-600 font-overpass-regular text-sm min-h-[40px] flex items-center justify-center text-center">{judge.role}</p>
                          {/* Show for 5th too (hide only when name is "Çok Yakında") */}
                          {judge.name !== "Çok Yakında" && (
                            <p className="text-blue-600 font-overpass-regular text-xs mt-auto text-center">Detayları Görüntüle →</p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <Link
                      href={`/judges/${judge.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                      key={index}
                    >
                      <div className="text-center bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer hover:scale-105 h-[280px] flex flex-col">
                        <div className="relative mb-4">
                          <Image
                            src={judge.avatar || "/placeholder.svg"}
                            alt={judge.name}
                            width={200}
                            height={200}
                            className="rounded-2xl mx-auto transition-all duration-300 object-cover w-full max-w-[120px] h-[120px]"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <h3 className="font-fira-bold mb-2 text-gray-900 text-lg min-h-[56px] flex items-center justify-center text-center">{judge.name}</h3>
                          <p className="text-gray-600 font-overpass-regular text-sm min-h-[40px] flex items-center justify-center text-center">{judge.role}</p>
                          {/* Remove index check so it shows for 5th too */}
                          {judge.name !== "Çok Yakında" && (
                            <p className="text-blue-600 font-overpass-regular text-xs mt-auto text-center">Detayları Görüntüle →</p>
                          )}
                        </div>
                      </div>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Awards Section - Conditional */}
      {showAwards && (
        <section
          id="awards"
          className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
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
            <p className="text-lg sm:text-xl text-white/90  text-center mb-12 sm:mb-16 font-overpass-regular">
              {language === "tr"
                ? "Büyük ödüller sizi bekliyor!"
                : "Great prizes await the winning teams!"}
            </p>

            {/* Podium Design - Only desktop */}
            <div className="hidden sm:flex flex-row items-end justify-center gap-8 max-w-4xl mx-auto">
              {/* 2nd Place */}
              <div className="flex-1 flex flex-col items-center">
                <div className="bg-gradient-to-t from-gray-400 to-gray-300 rounded-t-lg p-8 mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300 w-full flex flex-col items-center">
                  <div className="text-4xl mb-2 drop-shadow-md">🥈</div>
                  <div className="text-xl font-fira-bold text-black mb-2">
                    {language === "tr" ? "2. Takım" : "2nd Team"}
                  </div>
                  <div className="text-3xl font-fira-black text-black">20.000₺</div>
                </div>
                <div className="bg-gray-300 h-32 w-full rounded-b-lg shadow-md"></div>
              </div>
              {/* 1st Place */}
              <div className="flex-1 flex flex-col items-center">
                <div className="bg-gradient-to-t from-yellow-500 to-yellow-400 rounded-t-lg p-8 mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300 w-full flex flex-col items-center">
                  <div className="text-5xl mb-2 drop-shadow-lg">🥇</div>
                  <div className="text-2xl font-fira-bold text-black mb-2">
                    {language === "tr" ? "1. Takım" : "1st Team"}
                  </div>
                  <div className="text-4xl font-fira-black text-black">30.000₺</div>
                </div>
                <div className="bg-yellow-400 h-40 w-full rounded-b-lg shadow-md"></div>
              </div>
              {/* 3rd Place */}
              <div className="flex-1 flex flex-col items-center">
                <div className="bg-gradient-to-t from-amber-600 to-amber-500 rounded-t-lg p-8 mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300 w-full flex flex-col items-center">
                  <div className="text-4xl mb-2 drop-shadow-md">🥉</div>
                  <div className="text-xl font-fira-bold text-black mb-2">
                    {language === "tr" ? "3. Takım" : "3rd Team"}
                  </div>
                  <div className="text-3xl font-fira-black text-black">10.000₺</div>
                </div>
                <div className="bg-amber-500 h-28 w-full rounded-b-lg shadow-md"></div>
              </div>
            </div>

            {/* Mobile version (uses same gradient etc.) */}
            <div className="sm:hidden flex flex-col gap-8 items-center">
              {[1, 2, 3].map((rank, i) => {
                const medal = ["🥇", "🥈", "🥉"][rank - 1];
                const team = language === "tr" ? `${rank}. Takım` : `${rank}st Team`;
                const amount = ["30.000₺", "20.000₺", "10.000₺"][rank - 1];
                const from = ["from-yellow-500", "from-gray-400", "from-amber-600"][rank - 1];
                const to = ["to-yellow-400", "to-gray-300", "to-amber-500"][rank - 1];
                return (
                  <div key={rank} className={`bg-gradient-to-t ${from} ${to} rounded-lg p-6 w-full max-w-md shadow-lg flex flex-col items-center`}>
                    <div className="text-4xl mb-2">{medal}</div>
                    <div className="text-xl font-fira-bold text-black mb-2">{team}</div>
                    <div className="text-3xl font-fira-black text-black">{amount}</div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="text-center mt-12">
              <p className="text-white/90  font-overpass-regular text-sm sm:text-base mt-6">
                {language === "tr"
                  ? "Ödüller kazanan takımın üyeleri arasında eşit olarak paylaştırılacaktır."
                  : "Awards will be shared equally among winning team members."}
              </p>
            </div>
          </div>
        </section>
      )}



      {showFaqs && (
        <section id="faqs" className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${showAwards ? "bg-white" : ""}`}>
          <div className="max-w-6xl mx-auto">
            <h2
              className={`text-4xl sm:text-5xl md:text-6xl font-fira-black text-center mb-12 sm:mb-16 ${showAwards ? "text-gray-900" : "text-white"}`}
            >
              {t.faqsTitle}
            </h2>

            <div className="text-center mb-8 sm:mb-12">
              <p
                className={`text-lg sm:text-xl font-overpass-regular leading-relaxed ${showAwards ? "text-gray-700" : "text-gray-300"}`}
              >
                {language === "tr" ? (
                  <>
                    Etkinlik hakkında daha detaylı bilgi ve güncel duyurular için Space Apps Challenge'ın resmi sitesi
                    olan{" "}
                    <a
                      href="https://spaceappschallenge.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline transition-colors"
                    >
                      spaceappschallenge.org
                    </a>{" "}
                    adresini ziyaret edebilirsiniz.
                  </>
                ) : (
                  <>
                    For more detailed information and current announcements about the event, visit the official Space
                    Apps Challenge site at{" "}
                    <a
                      href="https://spaceappschallenge.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline transition-colors"
                    >
                      spaceappschallenge.org
                    </a>
                    .
                  </>
                )}
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border rounded-lg overflow-hidden ${showAwards ? "border-gray-300 bg-white" : "border-gray-700"}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className={`w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between transition-colors ${
                      showAwards ? "hover:bg-gray-50 text-gray-900" : "hover:bg-gray-800/50 text-white"
                    }`}
                  >
                    <h3
                      className={`text-lg sm:text-xl font-fira-bold pr-4 ${showAwards ? "text-gray-900" : "text-white"}`}
                    >
                      {language === "tr" ? faq.question : faq.questionEn}
                    </h3>
                    {openFaq === index ? (
                      <ChevronUp
                        className={`w-5 h-5 flex-shrink-0 ${showAwards ? "text-gray-600" : "text-gray-400"}`}
                      />
                    ) : (
                      <ChevronDown
                        className={`w-5 h-5 flex-shrink-0 ${showAwards ? "text-gray-600" : "text-gray-400"}`}
                      />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                      <p
                        className={`font-overpass-regular leading-relaxed text-sm sm:text-base ${
                          showAwards ? "text-gray-700" : "text-gray-300"
                        }`}
                      >
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

      {/* Newsletter Section */}
      <section
        className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${showAwards ? "" : "bg-white"}`}
        style={showAwards ? { backgroundColor: "var(--brand-deepblue)" } : {}}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`text-4xl sm:text-5xl md:text-6xl font-fira-black mb-6 ${showAwards ? "text-white" : "text-gray-900"}`}
            >
              {t.newsletterTitle}
            </h2>
            <p
              className={`text-lg sm:text-xl font-overpass-regular max-w-3xl mx-auto ${showAwards ? "text-white/90" : "text-gray-600"}`}
            >
              {t.newsletterSubtitle}
            </p>
          </div>

          <NewsletterForm translations={t} isBlueBackground={showAwards} />
        </div>
      </section>

      {/* Footer */}
      <Footer translations={t} language={language} setLanguage={setLanguage} showAwards={showAwards} />

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
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
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
