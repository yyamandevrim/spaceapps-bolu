"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { translations, type Language } from "@/lib/translations"
import { agendaItems } from "@/lib/agenda"
import { judges } from "@/lib/judges"
import { faqs } from "@/lib/faqs"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function Page() {
  const [language, setLanguage] = useState<Language>("tr")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [openMonth, setOpenMonth] = useState<number | null>(null)
  const [heroBackground, setHeroBackground] = useState<string>("")
  const [showLocation, setShowLocation] = useState<boolean>(false)
  const t = translations[language]

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
                  onClick={() => window.open("https://www.spaceappschallenge.org/2025/local-events/bolu/", "_blank")}
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

      {/* Sponsors Section */}
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

      {/* Agenda Section */}
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

      {/* Judges Section */}
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
                <div className="text-center bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 w-full max-w-xs">
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
                </div>
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-fira-black text-center mb-12 sm:mb-16">{t.faqsTitle}</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                >
                  <h3 className="text-lg sm:text-xl font-fira-bold pr-4">
                    {language === "tr" ? faq.question : faq.questionEn}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                    <p className="text-gray-300 font-overpass-regular leading-relaxed text-sm sm:text-base">
                      {language === "tr" ? faq.answer : faq.answerEn}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer translations={t} language={language} setLanguage={setLanguage} />
    </div>
  )
}
