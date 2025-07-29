"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const translations = {
  tr: {
    about: "Hakkında",
    speakers: "Jüriler",
    agenda: "Ajanda",
    faqs: "SSS",
    whatIsMaze: "Space Apps Challenge Nedir?",
    watchOnDemand: "Canlı İzle",
    virtualOnDemand: "Sanal / Canlı",
    heroTitle: "2025 NASA Space Apps Challenge için kayıtlar açık!",
    heroSubtitle: "4-5 Ekim tarihlerinde dünyanın en büyük yıllık hackathon etkinliğinin bir parçası olun.",
    registerNow: "ŞİMDİ KAYIT OL",
    inPartnershipWith: "İş ortaklığında",
    agendaTitle: "Ajanda",
    agendaSubtitle: "Space Apps Challenge 2025 oturum programınız.",
    speakersTitle: "Jürilerimiz",
    speakersSubtitle: "Space Apps Challenge jüri üyelerimizle tanışın",
    faqsTitle: "Sıkça Sorulan Sorular",
    company: "Şirket",
    aboutUs: "Hakkımızda",
    customers: "Müşteriler",
    careers: "Kariyer",
    product: "Ürün",
    pricing: "Fiyatlandırma",
    integrations: "Entegrasyonlar",
    spaceAppsAI: "Space Apps AI",
    resourcesAndTools: "Kaynaklar ve Araçlar",
    contentHub: "İçerik Merkezi",
    collections: "Koleksiyonlar",
    guidesReports: "Kılavuzlar ve Raporlar",
    copyright: "© 2025 Space Apps Challenge. Tüm hakları saklıdır.",
    language: "Dil",
    turkish: "Türkçe",
    english: "English",
  },
  en: {
    about: "About",
    speakers: "Judges",
    agenda: "Agenda",
    faqs: "FAQs",
    whatIsMaze: "What is Space Apps Challenge?",
    watchOnDemand: "Watch Live",
    virtualOnDemand: "Virtual / Live",
    heroTitle: "Registration for the 2025 NASA Space Apps Challenge is now open!",
    heroSubtitle: "Be a part of the largest annual global hackathon on October 4-5.",
    registerNow: "REGISTER NOW",
    inPartnershipWith: "In partnership with",
    agendaTitle: "Agenda",
    agendaSubtitle: "Your session line-up for Space Apps Challenge 2025.",
    speakersTitle: "Our Judges",
    speakersSubtitle: "Meet our Space Apps Challenge judge lineup",
    faqsTitle: "Frequently Asked Questions",
    company: "Company",
    aboutUs: "About Us",
    customers: "Customers",
    careers: "Careers",
    product: "Product",
    pricing: "Pricing",
    integrations: "Integrations",
    spaceAppsAI: "Space Apps AI",
    resourcesAndTools: "Resources and Tools",
    contentHub: "Content Hub",
    collections: "Collections",
    guidesReports: "Guides & Reports",
    copyright: "© 2025 Space Apps Challenge. All rights reserved.",
    language: "Language",
    turkish: "Türkçe",
    english: "English",
  },
}

const agendaItems = [
  {
    time: "9am PST/12pm EST",
    title: "Opening keynote with Space Apps Challenge Team",
    description:
      "Opening remarks from Space Apps Challenge team on what brings us together, a look back at the year, the key trends in space technology, and how that's informing what's new and forthcoming from the challenge.",
    speaker: "Space Apps Team",
    role: "Challenge Organizers",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    time: "9:15am PST/12:15pm EST",
    title: "Innovation in Space Technology",
    description:
      "Hear from leading space technology experts on how innovation has evolved to help solve real-world problems using NASA's open data. The keynote will announce exciting new challenges and provide a vision for the future.",
    speaker: "Dr. Sarah Johnson",
    role: "NASA Technology Expert",
    avatar: "/placeholder.svg?height=60&width=60",
    additionalSpeakers: [
      { name: "Dr. Michael Chen", role: "Space Innovation Lead" },
      { name: "Prof. Elena Rodriguez", role: "Aerospace Engineering" },
      { name: "Dr. James Wilson", role: "Data Science Director" },
    ],
  },
  {
    time: "9:50am PST/12:50pm EST",
    title: "AI & Space Research: Future Perspectives",
    description:
      "This talk explores the role of AI in space research and exploration, focusing on the key considerations for effective and responsible usage. We'll begin with current applications and dive into future trends in AI-powered space missions.",
    speaker: "Dr. Lisa Park",
    role: "AI Research Lead at NASA",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

const judges = [
  {
    name: "Dr. Amanda Rodriguez",
    role: "NASA Ames Research Center",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Prof. Michael Thompson",
    role: "MIT Aerospace Engineering",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dr. Sarah Kim",
    role: "JPL Mission Specialist",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dr. James Wilson",
    role: "ESA Technology Director",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Prof. Elena Petrov",
    role: "Space Technology Institute",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dr. Carlos Mendez",
    role: "SpaceX Innovation Lead",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dr. Priya Sharma",
    role: "ISRO Research Director",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Prof. David Chen",
    role: "Stanford Space Systems Lab",
    avatar: "/placeholder.svg?height=200&width=200",
  },
]

const faqs = [
  {
    question: "Space Apps Challenge nedir?",
    questionEn: "What is Space Apps Challenge?",
    answer:
      "Space Apps Challenge, NASA'nın açık verilerini kullanarak gerçek dünya problemlerini çözmek için düzenlenen dünyanın en büyük yıllık hackathon etkinliğidir.",
    answerEn:
      "Space Apps Challenge is the world's largest annual hackathon event organized to solve real-world problems using NASA's open data.",
  },
  {
    question: "Space Apps Challenge 2025 ne zaman?",
    questionEn: "When is Space Apps Challenge 2025?",
    answer: "Space Apps Challenge 2025, 4-5 Ekim tarihlerinde gerçekleşecektir.",
    answerEn: "Space Apps Challenge 2025 will take place on October 4-5.",
  },
  {
    question: "Katılım ücreti var mı?",
    questionEn: "Is there a participation fee?",
    answer: "Hayır, Space Apps Challenge'a katılım tamamen ücretsizdir.",
    answerEn: "No, participation in Space Apps Challenge is completely free.",
  },
  {
    question: "Etkinlik kaydedilecek mi?",
    questionEn: "Will the event be recorded?",
    answer: "Evet, tüm oturumlar kaydedilecek ve kayıtlı katılımcılar için erişilebilir olacaktır.",
    answerEn: "Yes, all sessions will be recorded and available for registered participants.",
  },
  {
    question: "Kimler katılabilir?",
    questionEn: "Who can participate?",
    answer:
      "Space Apps Challenge, yazılım geliştiriciler, tasarımcılar, mühendisler ve uzay teknolojisi ile ilgilenen herkes için idealdir.",
    answerEn:
      "Space Apps Challenge is perfect for software developers, designers, engineers, and anyone interested in space technology.",
  },
]

export default function Page() {
  const [language, setLanguage] = useState<"tr" | "en">("tr")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [heroBackground, setHeroBackground] = useState<string>("")
  const t = translations[language]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
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
      <header className="flex items-center justify-between px-4 sm:px-6 py-4 lg:px-8 relative z-50">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/placeholder.svg?height=50&width=190"
            alt="Space Apps Challenge Bolu"
            width={190}
            height={50}
            className="text-white h-8 sm:h-12 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link
            href="#about"
            className="text-white hover:text-blue-300 transition-colors font-overpass-regular text-sm lg:text-base"
          >
            {t.about}
          </Link>
          <Link
            href="#speakers"
            className="text-white hover:text-blue-300 transition-colors font-overpass-regular text-sm lg:text-base"
          >
            {t.speakers}
          </Link>
          <Link
            href="#agenda"
            className="text-white hover:text-blue-300 transition-colors font-overpass-regular text-sm lg:text-base"
          >
            {t.agenda}
          </Link>
          <Link
            href="#faqs"
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
        <Button className="px-4 sm:px-6 py-2 rounded-lg font-overpass-bold text-white text-sm lg:text-base bg-green-600 hover:bg-green-700">
          {t.watchOnDemand}
        </Button>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-[calc(100vh-80px)] overflow-hidden">
        {/* Background Image Upload */}
        <div className="absolute top-4 right-4 z-20">
          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="hero-bg-upload" />
          <label
            htmlFor="hero-bg-upload"
            className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded cursor-pointer text-sm hover:bg-white/30 transition-colors"
          >
            Upload Background
          </label>
        </div>

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
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left side - Content */}
              <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                <p className="text-lg sm:text-xl text-white/90 font-overpass-regular">{t.virtualOnDemand}</p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fira-black leading-tight text-white">
                  {t.heroTitle}
                </h1>

                <p className="text-lg sm:text-xl text-white/90 font-overpass-regular max-w-lg mx-auto lg:mx-0">
                  {t.heroSubtitle}
                </p>

                <Button className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-overpass-bold text-black rounded-lg hover:opacity-90 transition-opacity bg-green-500 hover:bg-green-600">
                  {t.registerNow}
                </Button>
              </div>

              {/* Right side - Globe */}
              <div className="relative flex justify-center lg:justify-end">
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
                      src="/placeholder.svg?height=400&width=400"
                      alt="World Map"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-full opacity-70"
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
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* NASA Logo and Text */}
            <div className="flex items-center space-x-4 sm:space-x-6 flex-shrink-0">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="NASA"
                width={80}
                height={80}
                className="rounded-full w-16 h-16 sm:w-20 sm:h-20"
              />
              <div className="h-12 sm:h-16 w-px bg-gray-300"></div>
              <span className="text-gray-700 font-overpass-regular text-base sm:text-lg whitespace-nowrap">
                {t.inPartnershipWith}
              </span>
            </div>

            {/* Sliding Sponsors Carousel */}
            <div className="flex-1 overflow-hidden ml-0 sm:ml-8 w-full sm:w-auto">
              <div className="flex animate-slide space-x-8 sm:space-x-12 items-center">
                {/* First set of logos */}
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="CONAE"
                  width={120}
                  height={60}
                  className="flex-shrink-0 h-12 sm:h-15 w-auto"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Agencia Espacial del Paraguay"
                  width={120}
                  height={60}
                  className="flex-shrink-0 h-12 sm:h-15 w-auto"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="SANSA"
                  width={120}
                  height={60}
                  className="flex-shrink-0 h-12 sm:h-15 w-auto"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="AEB"
                  width={120}
                  height={60}
                  className="flex-shrink-0 h-12 sm:h-15 w-auto"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Turkish Space Agency"
                  width={120}
                  height={60}
                  className="flex-shrink-0 h-12 sm:h-15 w-auto"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="ESA"
                  width={120}
                  height={60}
                  className="flex-shrink-0 h-12 sm:h-15 w-auto"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="JAXA"
                  width={120}
                  height={60}
                  className="flex-shrink-0 h-12 sm:h-15 w-auto"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="CSA"
                  width={120}
                  height={60}
                  className="flex-shrink-0 h-12 sm:h-15 w-auto"
                />

                {/* Duplicate set for seamless loop */}
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="CONAE"
                  width={120}
                  height={60}
                  className="flex-shrink-0 h-12 sm:h-15 w-auto"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Agencia Espacial del Paraguay"
                  width={120}
                  height={60}
                  className="flex-shrink-0 h-12 sm:h-15 w-auto"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="SANSA"
                  width={120}
                  height={60}
                  className="flex-shrink-0 h-12 sm:h-15 w-auto"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="AEB"
                  width={120}
                  height={60}
                  className="flex-shrink-0 h-12 sm:h-15 w-auto"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Turkish Space Agency"
                  width={120}
                  height={60}
                  className="flex-shrink-0 h-12 sm:h-15 w-auto"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="ESA"
                  width={120}
                  height={60}
                  className="flex-shrink-0 h-12 sm:h-15 w-auto"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="JAXA"
                  width={120}
                  height={60}
                  className="flex-shrink-0 h-12 sm:h-15 w-auto"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
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

          <div className="space-y-6 sm:space-y-8">
            {/* Header */}
            <div className="hidden sm:grid grid-cols-12 gap-4 pb-4 border-b border-gray-600">
              <div className="col-span-2 font-overpass-bold text-gray-300">Time</div>
              <div className="col-span-7 font-overpass-bold text-gray-300">Sessions</div>
              <div className="col-span-3 font-overpass-bold text-gray-300">Speaker</div>
            </div>

            {/* Agenda Items */}
            {agendaItems.map((item, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-12 gap-4 py-4 sm:py-6 border-b border-gray-800">
                <div className="sm:col-span-2 text-gray-300 font-overpass-regular text-sm sm:text-base">
                  {item.time}
                </div>
                <div className="sm:col-span-7">
                  <h3 className="text-xl sm:text-2xl font-fira-bold mb-3 sm:mb-4">{item.title}</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 font-overpass-regular leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                  <button className="text-green-400 hover:text-green-300 font-overpass-bold text-sm sm:text-base">
                    Learn more
                  </button>
                </div>
                <div className="sm:col-span-3">
                  <div className="flex items-start space-x-3">
                    <Image
                      src={item.avatar || "/placeholder.svg"}
                      alt={item.speaker}
                      width={60}
                      height={60}
                      className="rounded-lg w-12 h-12 sm:w-15 sm:h-15"
                    />
                    <div>
                      <h4 className="font-overpass-bold text-sm sm:text-base">{item.speaker}</h4>
                      <p className="text-gray-300 text-xs sm:text-sm font-overpass-regular">{item.role}</p>
                    </div>
                  </div>
                  {item.additionalSpeakers && (
                    <div className="mt-4 space-y-2">
                      {item.additionalSpeakers.map((speaker, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Image
                            src={`/placeholder.svg?height=60&width=60&query=${speaker.name}`}
                            alt={speaker.name}
                            width={60}
                            height={60}
                            className="rounded-lg w-12 h-12 sm:w-15 sm:h-15"
                          />
                          <div>
                            <h4 className="font-overpass-bold text-sm sm:text-base">{speaker.name}</h4>
                            <p className="text-gray-300 text-xs sm:text-sm font-overpass-regular">{speaker.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Judges Section */}
      <section id="speakers" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-fira-black text-center mb-4">{t.speakersTitle}</h2>
          <p className="text-lg sm:text-xl text-gray-300 text-center mb-12 sm:mb-16 font-overpass-regular">
            {t.speakersSubtitle}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {judges.map((judge, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <Image
                    src={judge.avatar || "/placeholder.svg"}
                    alt={judge.name}
                    width={200}
                    height={200}
                    className="rounded-2xl mx-auto grayscale hover:grayscale-0 transition-all duration-300 w-full max-w-[200px] h-auto"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-fira-bold mb-2">{judge.name}</h3>
                <p className="text-gray-300 font-overpass-regular text-sm">{judge.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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
      <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <Image
                src="/placeholder.svg?height=40&width=100"
                alt="Space Apps Challenge"
                width={100}
                height={40}
                className="mb-6 h-8 sm:h-10 w-auto"
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
                  <Link href="#" className="hover:text-white transition-colors text-sm sm:text-base">
                    {t.customers}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors text-sm sm:text-base">
                    {t.careers}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-overpass-bold text-lg mb-4">{t.product}</h4>
              <ul className="space-y-2 font-overpass-regular text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors text-sm sm:text-base">
                    {t.pricing}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors text-sm sm:text-base">
                    {t.integrations}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors text-sm sm:text-base">
                    {t.spaceAppsAI}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-overpass-bold text-lg mb-4">{t.resourcesAndTools}</h4>
              <ul className="space-y-2 font-overpass-regular text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors text-sm sm:text-base">
                    {t.contentHub}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors text-sm sm:text-base">
                    {t.collections}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors text-sm sm:text-base">
                    {t.guidesReports}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-overpass-regular text-sm sm:text-base text-center sm:text-left">
              {t.copyright}
            </p>

            {/* Language Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 font-overpass-regular text-sm">{t.language}:</span>
              <button
                onClick={() => setLanguage("tr")}
                className={`px-3 py-1 rounded text-sm font-overpass-regular transition-colors ${
                  language === "tr" ? "bg-green-600 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {t.turkish}
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded text-sm font-overpass-regular transition-colors ${
                  language === "en" ? "bg-green-600 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {t.english}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
