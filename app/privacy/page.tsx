"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-fira-black text-center mb-8">
            Gizlilik Politikası
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-fira-bold mb-4">1. Bilgi Toplama</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-fira-bold mb-4">2. Bilgi Kullanımı</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</li>
                <li>Consectetur, adipisci velit, sed quia non numquam eius modi tempora</li>
                <li>Incidunt ut labore et dolore magnam aliquam quaerat voluptatem</li>
                <li>Ut enim ad minima veniam, quis nostrum exercitationem</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-fira-bold mb-4">3. Çerezler (Cookies)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-fira-bold mb-4">4. Veri Güvenliği</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-fira-bold mb-4">5. Üçüncü Taraf Hizmetler</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-fira-bold mb-4">6. İletişim</h2>
              <p className="text-gray-300 leading-relaxed">
                Bu gizlilik politikası hakkında sorularınız varsa, lütfen bizimle iletişime geçin:
              </p>
              <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
                <p className="text-white font-semibold">Space Apps Challenge Bolu</p>
                <p className="text-gray-300">Email: info@spaceappsbolu.org</p>
                <p className="text-gray-300">Adres: Bolu, Türkiye</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-fira-bold mb-4">7. Politika Güncellemeleri</h2>
              <p className="text-gray-300 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                <strong>Son güncelleme:</strong> 30 Temmuz 2025
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
