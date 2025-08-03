/**
 * Copyright (c) 2025 Yaman Devrim
 * All rights reserved. NASA Space Apps Challenge 2025 Bolu
 */

"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { translations, type Language } from "@/lib/translations"
import { useState } from "react"

export default function PrivacyPolicy() {
  const [language, setLanguage] = useState<Language>("tr")
  const t = translations[language]

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "var(--bg-primary)" }}>
      <Header />

      <main className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-fira-black text-center mb-8">
            Gizlilik Politikası
          </h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-fira-bold mb-4">1. Hangi Bilgileri Topluyoruz?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Kayıt sırasında ad, soyad, e-posta, yaş, eğitim durumu, takım adı gibi temel bilgiler toplanır. Ayrıca web sitemizi kullanırken teknik bilgiler (IP adresi, tarayıcı türü, cihaz bilgisi) ve çerez verileri de toplanabilir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-fira-bold mb-4">2. Bilgileri Nasıl Kullanıyoruz?</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Etkinlik katılımcı kaydını oluşturmak ve yönetmek</li>
                <li>Katılımcılarla bilgilendirme ve iletişim sağlamak</li>
                <li>Yaka kartları, sertifikalar ve benzeri belgeleri hazırlamak</li>
                <li>NASA ve diğer partnerlere anonim veya gerekli bilgileri raporlamak</li>
                <li>Etkinliğin genel istatistiklerini ve etkinlik deneyimini geliştirmek</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-fira-bold mb-4">3. Görsel ve Medya Kullanımı</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Etkinlik süresince organizasyon tarafından fotoğraf ve video çekimi yapılabilir. Bu içerikler sosyal medya, basın bültenleri, etkinlik sonrası raporlar ve tanıtım faaliyetlerinde kullanılabilir.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Katılımcılar, etkinliğe fiziksel olarak katılarak bu kullanımı kabul etmiş sayılır. İçerikler yalnızca etkinlikle ilgili ve saygılı bağlamlarda kullanılır.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-fira-bold mb-4">4. Üçüncü Taraf Hizmetler</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Kayıt, iletişim ve analiz süreçlerinde bazı üçüncü taraf yazılım ve hizmet sağlayıcılarla çalışabiliriz (örneğin: e-posta servisleri, kayıt altyapıları). Bu servisler sadece hizmet amacıyla sınırlı erişime sahiptir.
              </p>
              <p className="text-gray-300 leading-relaxed">
                NASA Space Apps Challenge küresel bir organizasyon olduğu için, bazı veriler NASA tarafından anonimleştirilmiş şekilde analiz veya raporlama için kullanılabilir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-fira-bold mb-4">5. Çerezler ve Takip Teknolojileri</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler ve benzeri takip teknolojilerini kullanabilir. Çerezleri tarayıcı ayarlarınızdan kontrol edebilirsiniz.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Çerezleri reddetmeniz bazı işlevlerin düzgün çalışmamasına yol açabilir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-fira-bold mb-4">6. Veri Güvenliği</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Kişisel verilerinizin gizliliği ve güvenliği bizim için önemlidir. Veriler yalnızca yetkili kişiler tarafından erişilebilecek şekilde korunur ve gerekli teknik/organizasyonel önlemler alınır.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-fira-bold mb-4">7. Saklama Süresi</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Verileriniz yalnızca etkinlik amaçları doğrultusunda ve yasal gereklilikler çerçevesinde makul süre boyunca saklanır. Daha sonra güvenli şekilde silinir veya anonimleştirilir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-fira-bold mb-4">8. İletişim</h2>
              <p className="text-gray-300 leading-relaxed">
                Gizlilik politikasıyla ilgili her türlü soru için bize aşağıdaki bilgilerden ulaşabilirsiniz:
              </p>
              <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
                <p className="text-white font-semibold">Space Apps Challenge Bolu</p>
                <p className="text-gray-300">Email: info@bolu.spaceapps.tr</p>
                <p className="text-white font-semibold">Ali Murat Kılıç</p>
                <p className="text-gray-300">Email: ali@bolu.spaceapps.tr mi</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-fira-bold mb-4">9. Politika Güncellemeleri</h2>
              <p className="text-gray-300 leading-relaxed">
                Gizlilik politikası zamanla değişebilir. Güncellemeler bu sayfa üzerinden yayınlanır ve yürürlüğe girer.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                <strong>Son güncelleme:</strong> 3 Ağustos 2025
              </p>
            </section>

            <section className="mt-10 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                Bu politika, <a href="https://www.spaceappschallenge.org/legal" className="underline hover:text-white" target="_blank" rel="noopener noreferrer">Space Apps Challenge'ın resmi gizlilik politikasına</a> dayanarak hazırlanmıştır.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer translations={t} language={language} setLanguage={setLanguage} />
    </div>
  )
}
