/**
 * Copyright (c) 2025 Yaman Devrim
 * All rights reserved. NASA Space Apps Challenge 2025 Bolu
 */

"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function CodeOfConduct() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-fira-black text-center mb-8">
            Davranış Kuralları
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-fira-bold mb-4">1. Genel Prensipler</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-fira-bold mb-4">2. Saygılı İletişim</h2>
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
              <h2 className="text-2xl font-fira-bold mb-4">3. Kapsayıcı Ortam</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-fira-bold mb-4">4. İşbirliği ve Takım Çalışması</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Itaque earum rerum hic tenetur a sapiente delectus</li>
                <li>Ut aut reiciendis voluptatibus maiores alias consequatur</li>
                <li>Aut perferendis doloribus asperiores repellat</li>
                <li>Quis autem vel eum iure reprehenderit qui in ea voluptate</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-fira-bold mb-4">5. Kabul Edilemez Davranışlar</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
                <h3 className="text-red-400 font-semibold mb-2">Aşağıdaki davranışlar kesinlikle kabul edilemez:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Duis aute irure dolor in reprehenderit in voluptate</li>
                  <li>Velit esse cillum dolore eu fugiat nulla pariatur</li>
                  <li>Excepteur sint occaecat cupidatat non proident</li>
                  <li>Sunt in culpa qui officia deserunt mollit anim</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-fira-bold mb-4">6. Şikayet ve Raporlama</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mb-4">
                <h3 className="text-yellow-400 font-semibold mb-2">Şikayet için iletişim:</h3>
                <p className="text-gray-300">Email: conduct@spaceappsbolu.org</p>
                <p className="text-gray-300">Telefon: +90 XXX XXX XX XX</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-fira-bold mb-4">7. Sonuçlar ve Yaptırımlar</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
              <ol className="list-decimal list-inside text-gray-300 space-y-2">
                <li>Consectetur, adipisci velit, sed quia non numquam</li>
                <li>Eius modi tempora incidunt ut labore et dolore</li>
                <li>Magnam aliquam quaerat voluptatem</li>
                <li>Ut enim ad minima veniam, quis nostrum</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-fira-bold mb-4">8. Etkinlik Güvenliği</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-fira-bold mb-4">9. Kuralların Güncellemesi</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
              </p>
              <p className="text-gray-300 leading-relaxed">
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
