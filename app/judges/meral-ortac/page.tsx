"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer" 
import { translations, type Language } from "@/lib/translations"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function MeralOrtacPage() {
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
                  src="/judges/meral-ortac.webp"
                  alt="Prof. Dr. Meral Ortaç"
                  width={200}
                  height={200}
                  className="rounded-2xl object-cover w-48 h-48"
                />
              </div>
              
              {/* Basic Info */}
              <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl font-fira-black text-white mb-4">
                  Prof. Dr. Meral Ortaç
                </h1>
                <p className="text-xl text-yellow-400 font-overpass-bold mb-6">
                  Profesör - Klasik Arkeoloji
                </p>
                <div className="space-y-2 text-white/80">
                  <p className="font-overpass-regular">
                    <span className="font-overpass-bold">Kurum:</span> Abant İzzet Baysal Üniversitesi
                  </p>
                  <p className="font-overpass-regular">
                    <span className="font-overpass-bold">Bölüm:</span> Tarih Bölümü, Eskiçağ Tarihi Anabilim Dalı
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
                <h3 className="font-overpass-bold text-yellow-400 mb-1">Lisans</h3>
                <p>
                  Ankara Üniversitesi, Dil ve Tarih-Coğrafya Fakültesi, Klasik Arkeoloji Anabilim Dalı, 1987
                </p>
              </div>
              <div>
                <h3 className="font-overpass-bold text-yellow-400 mb-1">Yüksek Lisans</h3>
                <p>
                  Ankara Üniversitesi, Sosyal Bilimler Enstitüsü, Arkeoloji ve Sanat Tarihi (Klasik Arkeoloji) Anabilim Dalı, 1990<br/>
                  Tez: Magnesia Artemis Tapınağı Mimari Bezemelerinin Tipolojisi<br/>
                  Tez Danışmanı: Prof. Dr. Orhan Bingöl
                </p>
              </div>
              <div>
                <h3 className="font-overpass-bold text-yellow-400 mb-1">Doktora</h3>
                <p>
                  Ruhr Üniversitesi (Almanya), Klasik Arkeoloji Enstitüsü, 2001<br/>
                  Tez: Die hellenistischen und römischen Propyla in Kleinasien<br/>
                  Tez Danışmanı: Prof. Dr. Volkmar von Graeve
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
              <p>1991-1993: Ankara Üniversitesi, Başkent Meslek Yüksekokulu, Uzman</p>
              <p>1993-2004: Abant İzzet Baysal Üniversitesi, Araştırma Görevlisi</p>
              <p>2004-2009: Abant İzzet Baysal Üniversitesi, Dr. Öğr. Üyesi (Eskiçağ Tarihi)</p>
              <p>2009-2021: Abant İzzet Baysal Üniversitesi, Arkeoloji Bölümü, Bölüm Başkanı</p>
              <p>2021- : Abant İzzet Baysal Üniversitesi, Tarih Bölümü, Eskiçağ Tarihi Anabilim Dalı</p>
            </div>
          </div>

          {/* Research & Excavations */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-12 mb-8">
            <h2 className="text-2xl sm:text-3xl font-fira-black text-white mb-6">
              Araştırma ve Kazı Deneyimi
            </h2>
            <ul className="list-disc list-inside space-y-2 text-white/80 font-overpass-regular">
              <li>1986-1992: Magnesia ad Maeandrum kazısı (Prof. Dr. Orhan Bingöl)</li>
              <li>1986-1987: Bodrum Sualtı Arkeoloji Müzesi Knidos fresk onarım çalışmaları</li>
              <li>2004: Sivas-Akpınar-Ziyaretsuyu Mevkii kurtarma kazısı</li>
              <li>2008: Ovaören kazısı (Aksaray)</li>
              <li>2009-2017: “Bolu İli ve İlçelerinde Helenistik ve Roma Dönemleri Yerleşimleri ve İzleri” yüzey araştırması (Proje Başkanı)</li>
            </ul>
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
