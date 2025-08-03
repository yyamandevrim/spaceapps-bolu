/**
 * Copyright (c) 2025 Yaman Devrim
 * All rights reserved. NASA Space Apps Challenge 2025 Bolu
 */

"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { translations, type Language } from "@/lib/translations"

export default function CodeOfConduct() {
  const [language, setLanguage] = useState<Language>("tr")
  const t = translations[language]

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "var(--bg-primary)" }}>
      <Header translations={t} />

      <main className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-fira-black text-center mb-8">
            {language === "tr" ? "Davranış Kuralları" : "Code of Conduct"}
          </h1>

          <div className="prose prose-invert max-w-none">
            {language === "tr" ? (
              <>
                <section className="mb-8">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    NASA Space Apps Challenge, herkes için güvenli, kapsayıcı ve saygılı bir ortam sağlamayı taahhüt eder. Bu Davranış Kuralları, etkinliğe katılan herkesin (katılımcılar, gönüllüler, mentorlar, organizatörler, sponsorlar ve jüri üyeleri dahil) uyması gereken davranış standartlarını belirler.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-fira-bold mb-4">1. Saygılı Davranış</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Farklı geçmişlere, kültürlere, kimliklere ve bakış açılarına sahip insanlara saygı gösterin.</li>
                    <li>Hakaret, dışlama, taciz, zorbalık, ayrımcılık veya küçük düşürücü davranışlarda bulunmayın.</li>
                    <li>Fiziksel veya sözlü tacize, cinsiyet temelli yorumlara veya istenmeyen dikkat davranışlarına kesinlikle izin verilmez.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-fira-bold mb-4">2. Güvenli Ortam</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Etkinlik boyunca herkesin fiziksel ve psikolojik güvenliği önceliklidir. Herkesin kendini rahat hissedebileceği, destekleyici ve açık bir atmosferin sürdürülmesi gerekir.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Kimsenin kişisel alanını ihlal etmeyin.</li>
                    <li>Fotoğraf ve videolarda yer almayı reddeden kişilere saygı gösterin.</li>
                    <li>Yıkıcı eleştirilerden kaçının, yapıcı ve yardımsever olun.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-fira-bold mb-4">3. Katılımda Eşitlik</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Space Apps, yaş, cinsiyet, ırk, etnik köken, milliyet, engellilik durumu, cinsel yönelim, cinsiyet kimliği, sosyoekonomik durum, eğitim seviyesi veya teknik geçmiş gibi fark etmeksizin herkesi davet eder ve destekler.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Herkesin katılımı değerli kabul edilir. Yeni başlayanlar kadar deneyimli geliştiricilerin de katkısı önemlidir.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-fira-bold mb-4">4. Kabul Edilemez Davranışlar</h2>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
                    <h3 className="text-red-400 font-semibold mb-2">Aşağıdaki davranışlar kabul edilemez:</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>Tehdit, taciz veya zorbalık</li>
                      <li>Nefret söylemi, ırkçılık veya ayrımcı ifadeler</li>
                      <li>Cinsel içerikli yorumlar veya uygunsuz fiziksel temas</li>
                      <li>Bilerek engelleme, dışlama veya aşağılama</li>
                      <li>Yetkisiz kayıt, fotoğraf veya paylaşım</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-fira-bold mb-4">5. Nasıl Raporlanır?</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Davranış Kuralları’nın ihlali durumunda, aşağıdaki iletişim kanallarından birini kullanarak doğrudan yerel organizasyon ekibine başvurabilirsiniz. Şikayetler gizli olarak değerlendirilir.
                  </p>
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mb-4">
                    <h3 className="text-yellow-400 font-semibold mb-2">İletişim Bilgileri</h3>
                    <p className="text-gray-300">Email: conduct@bolu.spaceapps.tr</p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-fira-bold mb-4">6. Yaptırımlar</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    İhlal durumunda organizasyon ekibi aşağıdaki yaptırımları uygulayabilir:
                  </p>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2">
                    <li>Uyarı</li>
                    <li>Etkinlikten geçici uzaklaştırma</li>
                    <li>Etkinlikten tamamen çıkarma</li>
                    <li>Gelecek etkinliklere katılım yasağı</li>
                  </ol>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    Gerekli durumlarda yerel yetkililerle iletişime geçilebilir.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-fira-bold mb-4">7. Uygulama ve Destek</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Bu kurallar, hem fiziksel hem sanal ortamda geçerlidir. Organizasyon ekibi bu kuralları uygulamakla sorumludur. Destek ve sorularınız için bizimle iletişime geçebilirsiniz.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-fira-bold mb-4">8. Son Güncelleme ve Kaynak</h2>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    Bu Davranış Kuralları, NASA Space Apps Challenge'ın{" "}
                    <a
                      href="https://www.spaceappschallenge.org/legal/"
                      className="underline hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      resmi davranış kuralları
                    </a>
                    na dayalı olarak hazırlanmıştır.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    <strong>Son güncelleme:</strong> 3 Ağustos 2025
                  </p>
                </section>
              </>
            ) : (
              <>
                <section className="mb-8">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    NASA Space Apps Challenge is committed to providing a safe, inclusive, and respectful environment for everyone. This Code of Conduct outlines the behavioral standards that everyone participating in the event (including participants, volunteers, mentors, organizers, sponsors, and jury members) must follow.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-fira-bold mb-4">1. Respectful Behavior</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Show respect to people with different backgrounds, cultures, identities, and perspectives.</li>
                    <li>Do not engage in insults, exclusion, harassment, bullying, discrimination, or demeaning behavior.</li>
                    <li>Physical or verbal harassment, gender-based comments, or unwanted attention behaviors are strictly prohibited.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-fira-bold mb-4">2. Safe Environment</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    The physical and psychological safety of everyone is a priority throughout the event. It is essential to maintain a supportive and open atmosphere where everyone can feel comfortable.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Do not invade anyone's personal space.</li>
                    <li>Respect the wishes of individuals who decline to be photographed or filmed.</li>
                    <li>Avoid destructive criticism; be constructive and helpful.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-fira-bold mb-4">3. Equality in Participation</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Space Apps invites and supports everyone, regardless of age, gender, race, ethnicity, nationality, disability status, sexual orientation, gender identity, socioeconomic status, education level, or technical background.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    The participation of everyone is valued. Contributions from both beginners and experienced developers are important.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-fira-bold mb-4">4. Unacceptable Behaviors</h2>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
                    <h3 className="text-red-400 font-semibold mb-2">The following behaviors are unacceptable:</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>Threats, harassment, or bullying</li>
                      <li>Hate speech, racism, or discriminatory remarks</li>
                      <li>Sexually explicit comments or inappropriate physical contact</li>
                      <li>Deliberate obstruction, exclusion, or belittlement</li>
                      <li>Unauthorized recording, photography, or sharing</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-fira-bold mb-4">5. How to Report?</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    In case of violation of the Code of Conduct, you can directly contact the local organizing team using one of the communication channels below. Complaints will be treated confidentially.
                  </p>
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mb-4">
                    <h3 className="text-yellow-400 font-semibold mb-2">Contact Information</h3>
                    <p className="text-gray-300">Email: conduct@bolu.spaceapps.tr</p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-fira-bold mb-4">6. Sanctions</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    In case of violation, the organizing team may impose the following sanctions:
                  </p>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2">
                    <li>Warning</li>
                    <li>Temporary suspension from the event</li>
                    <li>Permanent removal from the event</li>
                    <li>Ban from future events</li>
                  </ol>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    Local authorities may be contacted if necessary.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-fira-bold mb-4">7. Implementation and Support</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    These rules apply in both physical and virtual environments. The organizing team is responsible for enforcing these rules. You can contact us for support and questions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-fira-bold mb-4">
                    {language === "tr" ? "8. Son Güncelleme ve Kaynak" : "8. Last Update and Source"}
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    {language === "tr" 
                      ? "Bu Davranış Kuralları, NASA Space Apps Challenge'ın" 
                      : "This Code of Conduct is based on NASA Space Apps Challenge's"
                    }{" "}
                    <a
                      href="https://www.spaceappschallenge.org/legal/"
                      className="underline hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {language === "tr" ? "resmi davranış kuralları" : "official code of conduct"}
                    </a>
                    {language === "tr" ? "na dayalı olarak hazırlanmıştır." : "."}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    <strong>{language === "tr" ? "Son güncelleme:" : "Last updated:"}</strong> {language === "tr" ? "3 Ağustos 2025" : "August 3, 2025"}
                  </p>
                </section>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer 
        translations={t} 
        language={language} 
        setLanguage={setLanguage} 
        showAwards={false} 
      />
    </div>
  )
}
