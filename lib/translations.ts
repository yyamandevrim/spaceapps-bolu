/**
 * Copyright (c) 2025 Yaman Devrim
 * All rights reserved. NASA Space Apps Challenge 2025 Bolu
 */

export const translations = {
  tr: {
    about: "Hakkında",
    speakers: "Jüri Üyeleri",
    agenda: "Takvim",
    faqs: "S.S.S.",
    whatIsMaze: "Space Apps Challenge Nedir?",
    location: "Bolu 50.⁠ ⁠Yıl İzzet Baysal Ortaokulu",
    heroTitle: "2025 NASA Space Apps Challenge için kayıtlar açıldı!",
    heroSubtitle: "4-5 Ekim tarihlerinde dünyanın en büyük yıllık hackathon etkinliğinin bir parçası olun.",
    registerNow: "ŞİMDİ KAYIT OL",
    inPartnershipWith: "Destekçilerimiz",
    agendaTitle: "Etkinlik Takvimi",
    agendaSubtitle: "Space Apps Challenge 2025 etkinlik programınız.",
    speakersTitle: "Jüri Üyelerimiz",
    speakersSubtitle: "Space Apps Challenge jüri üyelerimizle tanışın",
    faqsTitle: "Sıkça Sorulan Sorular",
    company: "Lorem ipsum",
    aboutUs: "Lorem ipsum",
    customers: "Lorem ipsum",
    careers: "Lorem ipsum",
    product: "Lorem ipsum",
    pricing: "Lorem ipsum",
    integrations: "Lorem ipsum",
    spaceAppsAI: "Lorem ipsum",
    resourcesAndTools: "Lorem ipsum",
    contentHub: "Lorem ipsum",
    collections: "Lorem ipsum",
    guidesReports: "Lorem ipsum",
    copyright:
      "© 2025 NASA Space Apps Bolu. Tüm hakları saklıdır. NASA Space Apps Challange, NASA'nın ticari markasıdır.",
    language: "Dil",
    turkish: "Türkçe",
    english: "English",

    // Newsletter section
    newsletterTitle: "Haber Bültenimize Kayıt Olun",
    newsletterSubtitle:
      "Etkinlik güncellemeleri, önemli duyurular ve NASA Space Apps Challenge hakkında en son haberleri doğrudan e-postanızdan takip edin.",
    newsletterFirstName: "Ad",
    newsletterLastName: "Soyad",
    newsletterEmail: "E-posta Adresi",
    newsletterSubmit: "Kayıt Ol",
    newsletterSuccess: "Başarıyla kayıt oldunuz! Teşekkür ederiz.",
    newsletterError: "Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.",
    newsletterPrivacy:
      "E-posta adresiniz güvende. Spam göndermiyoruz ve dilediğiniz zaman abonelikten çıkabilirsiniz.",
    
    // Footer translations
    footerDescription: "NASA Space Apps Challenge, dünyanın en büyük yıllık global hackathon etkinliğidir. Bolu'da gerçekleşen bu etkinlikte, uzay ve yer bilimleri konularında yaratıcı çözümler geliştiriyoruz.",
    quickLinks: "Hızlı Linkler",
    privacy: "Gizlilik Politikası",
    codeOfConduct: "Davranış Kuralları",
    followUs: "Bizi Takip Edin",
    awards: "Ödüller",
  },
  en: {
    about: "About",
    speakers: "Judges",
    agenda: "Agenda",
    faqs: "FAQs",
    whatIsMaze: "What is Space Apps Challenge?",
    location: "Bolu 50.⁠ ⁠Yıl İzzet Baysal Middle School",
    heroTitle: "Registration for the 2025 NASA Space Apps Challenge is now open!",
    heroSubtitle: "Be a part of the largest annual global hackathon on October 4-5.",
    registerNow: "REGISTER NOW",
    inPartnershipWith: "In partnership with",
    agendaTitle: "Agenda",
    agendaSubtitle: "Your session line-up for Space Apps Challenge 2025.",
    speakersTitle: "Our Judges",
    speakersSubtitle: "Meet our Space Apps Challenge judge lineup",
    faqsTitle: "Frequently Asked Questions",
    company: "Lorem ipsum",
    aboutUs: "Lorem ipsum",
    customers: "Lorem ipsum",
    careers: "Lorem ipsum",
    product: "Lorem ipsum",
    pricing: "Lorem ipsum",
    integrations: "Lorem ipsum",
    spaceAppsAI: "Lorem ipsum",
    resourcesAndTools: "Lorem ipsum",
    contentHub: "Lorem ipsum",
    collections: "Lorem ipsum",
    guidesReports: "Lorem ipsum",
    copyright:
      "© 2025 NASA Space Apps Bolu. All rights reserved. NASA Space Apps Challenge is a trademark of NASA.",
    language: "Language",
    turkish: "Türkçe",
    english: "English",

    // Newsletter section
    newsletterTitle: "Subscribe to Our Newsletter",
    newsletterSubtitle:
      "Stay updated with event announcements, important updates, and the latest news about NASA Space Apps Challenge directly in your inbox.",
    newsletterFirstName: "First Name",
    newsletterLastName: "Last Name",
    newsletterEmail: "Email Address",
    newsletterSubmit: "Subscribe",
    newsletterSuccess: "Successfully subscribed! Thank you.",
    newsletterError: "An error occurred during registration. Please try again.",
    newsletterPrivacy:
      "Your email is safe with us. We don't spam and you can unsubscribe at any time.",
    
    // Footer translations
    footerDescription: "NASA Space Apps Challenge is the world's largest annual global hackathon. Join us in Bolu to develop creative solutions for space and earth science challenges.",
    quickLinks: "Quick Links",
    privacy: "Privacy Policy",
    codeOfConduct: "Code of Conduct",
    followUs: "Follow Us",
    awards: "Awards",
  },
}

export type Language = keyof typeof translations
export type TranslationKeys = keyof typeof translations.tr
