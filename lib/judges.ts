/**
 * Copyright (c) 2025 Yaman Devrim
 * All rights reserved. NASA Space Apps Challenge 2025 Bolu
 */

export const judges = [
  {
    name: "Prof. Dr. Okan Külköylüoğlu",
    role: "Jüri Heyeti Başkanı",
    avatar: "/judges/okan-hoca.png",
  },
  {
    name: "Prof. Michael Thompson",
    role: "MIT Aerospace Engineering",
    avatar: "https://picsum.photos/id/91/200/200",
  },
  {
    name: "Dr. Sarah Kim",
    role: "JPL Mission Specialist",
    avatar: "https://picsum.photos/id/64/200/200",
  },
  {
    name: "Dr. James Wilson",
    role: "ESA Technology Director",
    avatar: "https://picsum.photos/id/65/200/200",
  },
  {
    name: "Yaman Devrim",
    role: "Lorem Ipsum Dolor",
    avatar: "https://picsum.photos/id/40/200/200",
  },
]

export type Judge = {
  name: string
  role: string
  avatar: string
}
