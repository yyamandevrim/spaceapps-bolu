/**
 * Copyright (c) 2025 Yaman Devrim
 * All rights reserved. NASA Space Apps Challenge 2025 Bolu
 */

export const agendaItems = [
  {
    month: "Temmuz",
    monthEn: "July",
    events: [
      {
        date: "8 Temmuz",
        dateEn: "July 8",
        title: "Tema Açıklaması",
        titleEn: "Theme Announced",
        description: "2025 NASA Space Apps Challenge'ın ana teması ve odak alanlarının açıklanması.",
        descriptionEn: "The main theme and focus areas for the 2025 NASA Space Apps Challenge are announced.",
      },
      {
        date: "17 Temmuz",
        dateEn: "July 17",
        title: "Kayıt Açılması ve 2025 Uzay Ajansı Ortaklarının Duyurulması",
        titleEn: "Registration Opens and 2025 Space Agency Partners Announced",
        description: "Katılımcı kayıtlarının başlaması ve etkinliğin uzay ajansı ortaklarının duyurulması.",
        descriptionEn: "Participant registration begins and the event's space agency partners are announced.",
      },
    ],
  },
  {
    month: "Ağustos",
    monthEn: "August",
    events: [
      {
        date: "21 Ağustos",
        dateEn: "August 21",
        title: "Görev Özetlerinin Yayınlanması ve Takım Oluşturmanın Başlaması",
        titleEn: "Challenge Summaries Available and Team Formation Opens",
        description: "Görev özetlerinin yayınlanması ve takım oluşturma sürecinin başlaması.",
        descriptionEn: "Challenge summaries are published and the team formation process begins.",
      },
    ],
  },
  {
    month: "Eylül",
    monthEn: "September",
    events: [
      {
        date: "16 Eylül",
        dateEn: "September 16",
        title: "Zorluk Beyanlarının Yayınlanması",
        titleEn: "Challenge Statements Available",
        description: "Detaylı zorluk beyanları ve teknik gereksinimlerin yayınlanması.",
        descriptionEn: "Detailed challenge statements and technical requirements are published.",
      },
      {
        date: "23 Eylül",
        dateEn: "September 23",
        title: "Space Apps Connect'in Açılması ve Katılımcı Kılavuzlarının Hazırlanması",
        titleEn: "Space Apps Connect Opens and Participant Guides Available",
        description: "Networking platformunun açılması ve katılımcılar için rehber materyallerin hazırlanması.",
        descriptionEn: "The networking platform opens and guide materials for participants are published.",
      },
    ],
  },
  {
    month: "Ekim",
    monthEn: "October",
    events: [
      {
        date: "3 Ekim",
        dateEn: "October 3",
        title: "Küresel Tekliflerin Sunulması",
        titleEn: "Global Offers Available",
        description: "Katılımcılar için özel fırsatların ve küresel tekliflerin sunulması.",
        descriptionEn: "Special opportunities and global offers for participants are announced.",
      },
      {
        date: "4-5 Ekim",
        dateEn: "October 4-5",
        title: "NASA Space Apps Challenge Etkinliğinin Gerçekleşmesi",
        titleEn: "NASA Space Apps Challenge Event",
        description: "48 saatlik hackathon etkinliğinin gerçekleşmesi! Ekiplerin projelerini geliştirmesi.",
        descriptionEn: "The 48-hour hackathon event takes place! Teams develop their projects.",
      },
    ],
  },
  {
    month: "Hackathon Sonrası",
    monthEn: "After the Hackathon",
    events: [
      {
        date: "Değerlendirme Süreci",
        dateEn: "Judging",
        title: "Jüri Değerlendirmesinin Yapılması",
        titleEn: "Expert Evaluation",
        description: "NASA, Uzay Ajansı Ortakları ve endüstri liderlerinden uzmanların projeleri değerlendirmesi.",
        descriptionEn: "Experts from NASA, Space Agency Partners, and industry leaders evaluate the projects.",
      },
      {
        date: "Sonuçların Açıklanması",
        dateEn: "Results",
        title: "Küresel Kazananların Açıklanması!",
        titleEn: "Global Winners Announced!",
        description: "Küresel düzeyde kazanan projelerin ve ekiplerin açıklanması.",
        descriptionEn: "Global winning projects and teams are announced.",
      },
    ],
  },
]

export type AgendaEvent = {
  date: string
  dateEn: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
}

export type AgendaMonth = {
  month: string
  monthEn: string
  events: AgendaEvent[]
}
