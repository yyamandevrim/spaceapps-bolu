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
    name: "Dr. Öğr. Üyesi Meral Ortaç",
    role: "Jüri Üyesi",
    avatar: "/judges/meral-ortac.webp",
  },
  {
    name: "Prof. Dr. Hakan Yetiş",
    role: "Jüri Üyesi",
    avatar: "/judges/hakan-yetis.webp",
  },
]

export type Judge = {
  name: string
  role: string
  avatar: string
}
