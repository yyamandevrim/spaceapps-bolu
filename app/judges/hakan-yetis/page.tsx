"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer" 
import { translations, type Language } from "@/lib/translations"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function HakanYetisPage() {
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
                  src="/judges/hakan-yetis.webp"
                  alt="Prof. Dr. Hakan Yetiş"
                  width={200}
                  height={200}
                  className="rounded-2xl object-cover w-48 h-48"
                />
              </div>
              
              {/* Basic Info */}
              <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl font-fira-black text-white mb-4">
                  Prof. Dr. Hakan Yetiş
                </h1>
                <p className="text-xl text-yellow-400 font-overpass-bold mb-6">
                  Profesör - Fizik
                </p>
                <div className="space-y-2 text-white/80">
                  <p className="font-overpass-regular">
                    <span className="font-overpass-bold">Kurum:</span> Bolu Abant İzzet Baysal Üniversitesi, Fen-Edebiyat Fakültesi
                  </p>
                  <p className="font-overpass-regular">
                    <span className="font-overpass-bold">Bölüm:</span> Fizik Bölümü, Genel Fizik Anabilim Dalı Başkanı
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
              <p>
                Lisans, yüksek lisans ve doktora eğitimlerini Bolu Abant İzzet Baysal Üniversitesi'nde tamamladı.
              </p>
              <p>
                Doktora sonrası araştırmalarını Ankara Üniversitesi/CESUR ve İtalya’daki Cenova Üniversitesi/CNR-SPIN iş birliğinde yürüttü.
              </p>
            </div>
          </div>

          {/* Academic Positions */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-12 mb-8">
            <h2 className="text-2xl sm:text-3xl font-fira-black text-white mb-6">
              Akademik Görevler & İdari Görevler
            </h2>
            <div className="text-white/90 font-overpass-regular space-y-6">
              <p>Bolu Abant İzzet Baysal Üniversitesi, Fen-Edebiyat Fakültesi, Fizik Bölümü öğretim üyesi</p>
              <p>Genel Fizik Anabilim Dalı Başkanı</p>
              <p>Çeşitli bilimsel kurul ve jüri üyeliklerinde bulundu</p>
            </div>
          </div>

          {/* Research & Experience */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-12 mb-8">
            <h2 className="text-2xl sm:text-3xl font-fira-black text-white mb-6">
              Araştırma Alanları
            </h2>
            <ul className="list-disc list-inside space-y-2 text-white/80 font-overpass-regular">
              <li>Düşük sıcaklık fiziği</li>
              <li>Malzeme fiziği</li>
              <li>Elektromanyetizma</li>
              <li>Manyetik malzemeler ve süperiletkenler</li>
              <li>MgB₂ süperiletken tel ve bobin üretimi ile karakterizasyonu</li>
              <li>Deneysel ve sayısal simülasyon temelli çalışmalar</li>
            </ul>
          </div>

          {/* Publications & Projects */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-12 mb-8">
            <h2 className="text-2xl sm:text-3xl font-fira-black text-white mb-6">
              Bilimsel Katkılar
            </h2>
            <div className="text-white/90 font-overpass-regular space-y-4">
              <p>Ulusal ve uluslararası düzeyde çok sayıda proje yürüttü.</p>
              <p>Bilimsel makaleler, patentler ve konferans bildirileri yayınladı.</p>
              <p>Öğrenci ve araştırmacı yetiştirilmesine önemli katkılar sağladı.</p>
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
