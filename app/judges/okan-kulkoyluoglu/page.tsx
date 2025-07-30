/**
 * Copyright (c) 2025 Yaman Devrim
 * All rights reserved. NASA Space Apps Challenge 2025 Bolu
 */

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer" 
import Image from "next/image"
import Link from "next/link"

export default function OkanKulkoyluogluPage() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "var(--bg-primary)" }}>
      <Header />
      
      <main className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/#speakers"
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
                  src="/judges/okan-hoca.png"
                  alt="Prof. Dr. Okan Külköylüoğlu"
                  width={200}
                  height={200}
                  className="rounded-2xl object-cover w-48 h-48"
                />
              </div>
              
              {/* Basic Info */}
              <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl font-fira-black text-white mb-4">
                  Prof. Dr. Okan Külköylüoğlu
                </h1>
                <p className="text-xl text-yellow-400 font-overpass-bold mb-6">
                  Jüri Heyeti Başkanı
                </p>
                <div className="space-y-2 text-white/80">
                  <p className="font-overpass-regular">
                    <span className="font-overpass-bold">Kurum:</span> Bolu Abant İzzet Baysal Üniversitesi
                  </p>
                  <p className="font-overpass-regular">
                    <span className="font-overpass-bold">Bölüm:</span> Biyoloji Bölümü
                  </p>
                  <p className="font-overpass-regular">
                    <span className="font-overpass-bold">Uzmanlık:</span> Hidrobiyoloji, Ostrakoda
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
                Prof. Dr. Okan Külköylüoğlu, tatlı su ekosistemleri bilimi olan limnoloji alanında Türkiye’nin önde gelen bilim insanlarından biridir. Bolu Abant İzzet Baysal Üniversitesi Fen-Edebiyat Fakültesi Biyoloji Bölümü Başkanı olan Külköylüoğlu, özellikle ostrakod (mikroskobik kabuklu canlılar) üzerine yaptığı araştırmalarla ulusal ve uluslararası alanda tanınmaktadır.
              </p>

              <p>
                Akademik hayatı boyunca TÜBİTAK Proje Performans Ödülü, TEMA Eğitim ve Hizmet Ödülü, Çevre Bilim Ödülü gibi çok sayıda prestijli ödüle layık görülmüştür. 2017–2018 yılları arasında Fulbright bursu ile Texas State University’de araştırmacı profesör olarak görev yapmış; burada yaptığı saha çalışmaları sonucu bilim dünyasına yedi yeni ostrakod türü ve yedi yeni cins kazandırmıştır. Aynı zamanda Türkiye Limnoloji Derneği’nin kurucu başkanıdır.
              </p>

              <p>
                Bu yıl 14.sü düzenlenen ve Türkiye’deki limnoloji camiası açısından önemli bir yeri olan SEFS14 (Symposium for European Freshwater Sciences) etkinliğinin ana organizatörü olarak, su bilimine gönül veren pek çok akademisyeni ve öğrenciyi bir araya getirmiştir.
              </p>

              <p>
                Su ekosistemleri, biyoçeşitlilik ve çevre bilimleri konularında çok sayıda araştırma projesine imza atmış; özellikle tatlı su ortamlarındaki mikroorganizmaların ekolojisi ve sistematik sınıflandırması üzerine öncü çalışmalar yürütmüştür.
              </p>

              <p>
                Uluslararası bilimsel dergilerde yayımlanmış 100'den fazla makaleye sahip olan Prof. Dr. Külköylüoğlu, aynı zamanda birçok bilimsel projenin yürütücülüğünü üstlenmiştir. Çevre koruma ve sürdürülebilir kalkınma konularındaki hassasiyeti ile tanınan akademisyen, genç bilim insanlarının yetiştirilmesinde de önemli katkılar sağlamaktadır.
              </p>

              <p>
                NASA Space Apps Challenge Bolu etkinliğinde jüri heyeti başkanlığını üstlenen Prof. Dr. Külköylüoğlu, uzay bilimleri ve teknolojisi alanındaki projelerin değerlendirilmesinde bilimsel deneyimini katılımcılarla paylaşmaya devam etmektedir.
              </p>

              <h3 className="text-xl font-overpass-bold text-yellow-400 mt-8 mb-4">
                Akademik Odak Alanları
              </h3>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>Hidrobiyoloji ve Limnoloji</li>
                <li>Ostrakoda Sistematik ve Ekolojisi</li>
                <li>Tatlı Su Ekosistemleri</li>
                <li>Biyoçeşitlilik Araştırmaları</li>
                <li>Çevre Bilimleri ve Koruma</li>
                <li>Su Kalitesi Yönetimi</li>
              </ul>

              <h3 className="text-xl font-overpass-bold text-yellow-400 mt-8 mb-4">
                Bilimsel Katkılar
              </h3>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>100+ uluslararası bilimsel makale</li>
                <li>Çok sayıda bilimsel proje yürütücülüğü</li>
                <li>Uluslararası konferans konuşmacılığı</li>
                <li>Editörlük ve hakemlik görevleri</li>
                <li>Lisansüstü öğrenci danışmanlığı</li>
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
                <span className="font-overpass-bold">Bölüm:</span> Biyoloji Bölümü
              </p>
            </div>
          </div>

          {/* Back to Judges Button */}
          <div className="mt-12 text-center">
            <Link 
              href="/#speakers"
              className="inline-block px-8 py-4 text-lg font-overpass-bold text-black rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--accent-yellow)" }}
            >
              Tüm Jüri Üyelerini Görüntüle
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}