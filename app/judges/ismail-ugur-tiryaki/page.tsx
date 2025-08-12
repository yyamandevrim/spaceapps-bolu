"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer" 
import { translations, type Language } from "@/lib/translations"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function IsmailUgurTiryakiPage() {
  const [language, setLanguage] = useState<Language>("tr")
  const t = translations[language]

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "var(--bg-primary)" }}>
      <Header />
      
      <main className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/#judges"
              className="inline-flex items-center px-4 py-2 text-white border border-white rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              ← Jüri Üyelerine Dön
            </Link>
          </div>

          {/* Judge Profile Header */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-12 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <Image
                  src="/judges/ismail-ugur-tiryaki.webp"
                  alt="Prof. Dr. İsmail Uğur Tiryaki"
                  width={200}
                  height={200}
                  className="rounded-2xl object-cover w-48 h-48"
                />
              </div>
              
              {/* Basic Info */}
              <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl font-fira-black text-white mb-4">
                  Prof. Dr. İsmail Uğur Tiryaki
                </h1>
                <p className="text-xl text-yellow-400 font-overpass-bold mb-6">
                  Profesör
                </p>
                <div className="space-y-2 text-white/80">
                  <p className="font-overpass-regular">
                    <span className="font-overpass-bold">Kurum:</span> Abant İzzet Baysal Üniversitesi
                  </p>
                  <p className="font-overpass-regular">
                    <span className="font-overpass-bold">Bölüm:</span> Matematik Bölümü, Topoloji Anabilim Dalı
                  </p>
                  <p className="font-overpass-regular">
                    <span className="font-overpass-bold">E-Posta:</span> ismail@ibu.edu.tr
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-12 mb-8">
            <h2 className="text-2xl sm:text-3xl font-fira-black text-white mb-6">
              Öğrenim Bilgisi
            </h2>
            <div className="text-white/90 font-overpass-regular space-y-6">
              <div>
                <h3 className="font-overpass-bold text-yellow-400 mb-1">Doktora</h3>
                <p>
                  Hacettepe Üniversitesi, Fen Bilimleri Enstitüsü, Matematik (DR), 2005<br/>
                  Tez: Yumuşak belirtisiz kümeler (2005)<br/>
                  Tez Danışmanı: Lawrence Michael Brown
                </p>
              </div>
              <div>
                <h3 className="font-overpass-bold text-yellow-400 mb-1">Yüksek Lisans</h3>
                <p>
                  Abant İzzet Baysal Üniversitesi, Fen-Edebiyat Fakültesi, Matematik Bölümü, Analiz ve Fonksiyonlar Teorisi, 1996<br/>
                  Tez: Fixed points of non-expensive mappings and uniformly convex Banach spaces (1996)<br/>
                  Tez Danışmanı: Kenan Taş
                </p>
              </div>
              <div>
                <h3 className="font-overpass-bold text-yellow-400 mb-1">Lisans</h3>
                <p>
                  Hacettepe Üniversitesi, Fen Fakültesi, Matematik Bölümü, Topoloji Anabilim Dalı, 1993
                </p>
              </div>
            </div>
          </div>

          {/* Academic Positions */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-12 mb-8">
            <h2 className="text-2xl sm:text-3xl font-fira-black text-white mb-6">
              Akademik Görevler & İdari Görevler
            </h2>
            <div className="text-white/90 font-overpass-regular space-y-6">
              <p><span className="font-overpass-bold">Doçent:</span> Abant İzzet Baysal Üniversitesi, Matematik Bölümü, Topoloji Anabilim Dalı, 2018</p>
              <p><span className="font-overpass-bold">Anabilim Dalı Başkanı:</span> Abant İzzet Baysal Üniversitesi, Matematik Bölümü, Topoloji Anabilim Dalı, 2017</p>
              <p><span className="font-overpass-bold">Bölüm Başkan Yardımcısı:</span> Aynı bölümde 2017 ve 2006-2009 yılları arasında görev yaptı</p>
            </div>
          </div>

          {/* Selected Supervised Theses */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-12 mb-8">
            <h2 className="text-2xl sm:text-3xl font-fira-black text-white mb-6">
              Yönetilen Tezler (Seçmeler)
            </h2>
            <ul className="list-disc list-inside space-y-2 text-white/80 font-overpass-regular">
              <li><strong>2019:</strong> Bakanakoğlu Gamze - Monotone and open Whitney maps defined on hyperspaces</li>
              <li><strong>2017:</strong> Doğan Eyüp - Whitney property in the hyperspace C(X) and its types</li>
              <li><strong>2014:</strong> Yavuz Ayşenur - Mamedov type m-singular integral operators and their convergence properties</li>
            </ul>
          </div>

          {/* Publications (Selected) */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-12 mb-8">
            <h2 className="text-2xl sm:text-3xl font-fira-black text-white mb-6">
              Seçme Yayınlar
            </h2>
            <ul className="list-disc list-inside space-y-2 text-white/80 font-overpass-regular max-h-96 overflow-y-auto">
              <li>2025 - Convergence of Mao Operators for Functions with Derivatives of Bounded Variation. Advanced Studies: Euro-Tbilisi Mathematical Journal</li>
              <li>2023 - On convergence of positive linear operators related to squared-Durrmeyer operators. Advanced Studies: Euro-Tbilisi Mathematical Journal</li>
              <li>2021 - Approximation of Borel derivatives of functions via non-linear singular integral operators. Palestine Journal of Mathematics</li>
              <li>2020 - OPEN DIAMETERS ON GRAPHS. Houston Journal of Mathematics</li>
              <li>2020 - Parameter identification for gompertz and logistic dynamic equations. PLOS ONE</li>
              <li>2019 - On nonoscillatory solutions of three dimensional time-scale systems. Turkish Journal of Mathematics</li>
              {/* İstersen devamını ekleyebilirim */}
            </ul>
          </div>

          {/* Research & International Experience */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-12 mb-8">
            <h2 className="text-2xl sm:text-3xl font-fira-black text-white mb-6">
              Araştırma ve Yurtdışı Deneyim
            </h2>
            <ul className="list-disc list-inside space-y-2 text-white/80 font-overpass-regular">
              <li>2014-2015: Doktora sonrası araştırma, Missouri University of Science and Technology, USA (Hyperspace üzerine)</li>
              <li>2010-2011: Doktora sonrası araştırma, University of Birmingham, UK (Locale ve Frameler ile ditopolojik texture uzayları üzerine)</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-12 mt-8">
            <h2 className="text-2xl sm:text-3xl font-fira-black text-white mb-6">
              İletişim
            </h2>
            <div className="space-y-3 text-white/80 font-overpass-regular">
              <p>
                <span className="font-overpass-bold">Kurum:</span> Abant İzzet Baysal Üniversitesi
              </p>
              <p>
                <span className="font-overpass-bold">Fakülte:</span> Fen-Edebiyat Fakültesi
              </p>
              <p>
                <span className="font-overpass-bold">Bölüm:</span> Matematik Bölümü
              </p>
              <p>
                <span className="font-overpass-bold">Adres:</span> Abant İzzet Baysal Üniversitesi Fen-Edebiyat Fakültesi Matematik Bölümü
              </p>
              <p>
                <span className="font-overpass-bold">E-Posta:</span> ismail@ibu.edu.tr
              </p>
         
            </div>
          </div>

          {/* Back to Judges Button */}
          <div className="mt-12 text-center">
            <Link 
              href="/#judges"
              className="inline-block px-8 py-4 text-lg font-overpass-bold text-black rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--accent-yellow)" }}
            >
              Tüm Jüri Üyelerini Görüntüle
            </Link>
          </div>
        </div>
      </main>

      <Footer translations={t} language={language} setLanguage={setLanguage} />
    </div>
  )
}
