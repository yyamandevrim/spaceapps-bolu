"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer" 
import { translations, type Language } from "@/lib/translations"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function ErhanBudakPage() {
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
                  src="/judges/Erhan-Budak.webp"
                  alt="Assoc. Prof. Dr. Erhan Budak"
                  width={200}
                  height={200}
                  className="rounded-2xl object-cover w-48 h-48"
                />
              </div>
              
              {/* Basic Info */}
              <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl font-fira-black text-white mb-4">
                  Doç. Dr. Erhan Budak
                </h1>
                <p className="text-xl text-yellow-400 font-overpass-bold mb-6">
                  Jüri Üyesi
                </p>
                <div className="space-y-2 text-white/80">
                  <p className="font-overpass-regular">
                    <span className="font-overpass-bold">Kurum:</span> Bolu Abant İzzet Baysal Üniversitesi
                  </p>
                  <p className="font-overpass-regular">
                    <span className="font-overpass-bold">Bölüm:</span> Kimya Bölümü
                  </p>
                  <p className="font-overpass-regular">
                    <span className="font-overpass-bold">Uzmanlık:</span> Katı Hal Kimyası, Malzeme Bilimi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Biography Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-fira-black text-white mb-6">
              Biyografi
            </h2>
            <div className="text-white/90 font-overpass-regular space-y-6">
              <p>
                Doç. Dr. Erhan Budak, katı hal kimyası ve malzeme bilimi alanlarında uzmanlaşmış bir akademisyendir. 
                Lisans eğitimini Hacettepe Üniversitesi Kimya Eğitimi Anabilim Dalı’nda tamamladıktan sonra, yüksek lisans ve doktora derecelerini Bolu Abant İzzet Baysal Üniversitesi Kimya Bölümü’nde almıştır. 
                Doktora tezinde, altıgen bor nitrürün sentezi ve farklı metal tuzlarının etkileri üzerine çalışmalar yürütmüştür.
              </p>

              <p>
                Akademik kariyerine 1996 yılında araştırma görevlisi olarak başlayan Budak, 2012 yılında yardımcı doçent, 2021 yılında ise doçent unvanını almıştır. 
                Çalışmaları özellikle özel bor ürünleri, dedektörler, sensörler, nanomalzemeler, ileri seramikler ve ince filmler gibi ileri malzeme teknolojilerine odaklanmaktadır.
              </p>

              <p>
                Yer aldığı ulusal ve uluslararası projeler arasında, NATO, Horizon Europe ve TÜBİTAK destekli bilimsel araştırmalar yer almaktadır. 
                Bor nitrür tabanlı malzemelerden yüksek performanslı fotodedektörler ve radyasyon dedektörleri geliştirilmesi gibi yenilikçi çalışmalara imza atmıştır.
              </p>

              <p>
                Uluslararası dergilerde yayımlanmış çok sayıda makalesi bulunan Budak, ayrıca çeşitli patent başvurularının da sahibidir. 
                Bu patentler arasında nanotüp yapısında bor nitrür üretim yöntemleri ve grafen tabanlı biyosensörler yer almaktadır.
              </p>

              <p>
                NASA Space Apps Challenge Bolu etkinliğinde jüri üyesi olarak görev alan Doç. Dr. Budak, 
                bilimsel birikimini uzay, malzeme bilimi ve mühendislik alanlarındaki projelerin değerlendirilmesinde paylaşmaktadır.
              </p>

              <h3 className="text-xl font-overpass-bold text-yellow-400 mt-8 mb-4">
                Akademik Odak Alanları
              </h3>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>Katı Hal Kimyası</li>
                <li>Malzeme Bilimi</li>
                <li>Özel Bor Ürünleri</li>
                <li>Dedektör ve Sensör Teknolojileri</li>
                <li>Nanomalzemeler ve İleri Seramikler</li>
                <li>İnce Film Teknolojileri</li>
              </ul>

              <h3 className="text-xl font-overpass-bold text-yellow-400 mt-8 mb-4">
                Bilimsel Katkılar
              </h3>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>Çok sayıda uluslararası bilimsel makale</li>
                <li>NATO, Horizon Europe ve TÜBİTAK projelerinde araştırmacılık</li>
                <li>Patent başvuruları ve tescilli buluşlar</li>
                <li>Ulusal ve uluslararası konferanslarda sunumlar</li>
                <li>Lisansüstü tez danışmanlıkları</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-12 mt-8">
            <h2 className="text-2xl sm:text-3xl font-fira-black text-white mb-6">
              İletişim
            </h2>
            <div className="space-y-3 text-white/80 font-overpass-regular">
              <p>
                <span className="font-overpass-bold">Kurum:</span> Bolu Abant İzzet Baysal Üniversitesi
              </p>
              <p>
                <span className="font-overpass-bold">Fakülte:</span> Fen Edebiyat Fakültesi
              </p>
              <p>
                <span className="font-overpass-bold">Bölüm:</span> Kimya Bölümü
              </p>
              <p>
                <span className="font-overpass-bold">E-posta:</span> erhan@ibu.edu.tr
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
