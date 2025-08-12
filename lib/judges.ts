/**
 * Copyright (c) 2025 Yaman Devrim
 * All rights reserved. NASA Space Apps Challenge 2025 Bolu
 */

export const judges = [
  {
    name: "Prof. Dr. Okan Külköylüoğlu",
    role: "Jüri Heyeti Başkanı",
    avatar: "/judges/okan-hoca.webp",
  },
  {
    name: "Doç. Dr. Erhan Budak",
    role: "Jüri Üyesi",
    avatar: "/judges/e77d65cb-3bd8-416e-b68b-490119831696.jpeg",
  },
  {
    name: "Prof. Dr. İsmail Uğur Tiryaki",
    role: "Jüri Üyesi",
    avatar: "/judges/ismail-ugur-tiryaki.webp",
  },
  {
    name: "Çok Yakında!",
    role: "",
    avatar: "/logo-circular-dark.webp",
  },
  {
    name: "Çok Yakında!",
    role: "",
    avatar: "/logo-circular-dark.webp",
  },
]

export type Judge = {
  name: string
  role: string
  avatar: string
}
