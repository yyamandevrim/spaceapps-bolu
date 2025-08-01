//COPYRIGHT 2025, NASA SPACE APPS CHALLENGE BOLU
// BY YAMANDEVRIM

import Image from "next/image"

export interface Sponsor {
  id: string
  name: string
  logo: string
  width: number
  height: number
  className?: string
  hasText?: boolean
  textLines?: string[]
  textClassName?: string
}

export const sponsors: Sponsor[] = [
  {
    id: "bolu-belediyesi",
    name: "Bolu Belediyesi",
    logo: "https://www.bolu.bel.tr/wp-content/uploads/2020/01/logo-1.png",
    width: 220,
    height: 220,
    className: "h-16 sm:h-12 w-auto",
    hasText: true,
    textLines: ["Türkiye Cumhuriyeti", "Bolu Belediyesi"],
    textClassName: "text-gray-700"
  },
  {
    id: "cydd",
    name: "ÇYDD",
    logo: "/partners/cydd.svg",
    width: 120,
    height: 60,
    className: "flex-shrink-0 h-16 sm:h-12 w-auto",
    hasText: true,
    textLines: ["Çağdaş Yaşamı", "Destekleme Derneği"],
    textClassName: "text-gray-700"
  },
  {
    id: "bolu-valilik",
    name: "Bolu Valiliği",
    logo: "/partners/bolu-valilik.png",
    width: 120,
    height: 60,
    className: "flex-shrink-0 h-16 sm:h-12 w-auto",
    hasText: true,
    textLines: ["Türkiye Cumhuriyeti", "Bolu Valiliği"],
    textClassName: "text-gray-700"
  },
  {
    id: "turkroket",
    name: "TurkRoket",
    logo: "https://turkroket.space/assets/baslikcss.webp",
    width: 120,
    height: 60,
    className: "flex-shrink-0 h-10 sm:h-5 w-auto",
    hasText: false
  },
  {
    id: "bolu-seviyorum",
    name: "Bolu'yu Seviyorum - Bolu Belediyesi",
    logo: "https://www.bolu.bel.tr/wp-content/uploads/2021/07/Boluyu-Seviyorum-Logo-Beyaz.png",
    width: 220,
    height: 220,
    className: "flex-shrink-0 h-16 sm:h-12 w-auto",
    hasText: false
  }
]

export const SponsorItem = ({ sponsor }: { sponsor: Sponsor }) => {
  if (sponsor.hasText && sponsor.textLines) {
    return (
      <div className="flex flex-shrink-0 items-center space-x-3 gap-2">
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          width={sponsor.width}
          height={sponsor.height}
          className={sponsor.className}
        />
        <div className="flex flex-col">
          {sponsor.textLines.map((line, index) => (
            <span 
              key={index}
              className={`${sponsor.textClassName} font-overpass-${index === 0 ? 'regular' : 'bold'} text-base sm:text-lg whitespace-nowrap ${index === 0 ? 'leading-none' : ''}`}
            >
              {line}
            </span>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex-shrink-0">
      <Image
        src={sponsor.logo}
        alt={sponsor.name}
        width={sponsor.width}
        height={sponsor.height}
        className={sponsor.className}
      />
    </div>
  )
}

export const SponsorsCarousel = () => {
  return (
    <div className="flex space-x-8 sm:space-x-12 items-center">
      {sponsors.map((sponsor) => (
        <SponsorItem key={sponsor.id} sponsor={sponsor} />
      ))}
    </div>
  )
}