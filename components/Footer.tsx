"use client"

import type { translations, Language } from "@/lib/translations"
import Image from "next/image"
import Link from "next/link"
import { Globe } from "lucide-react"

interface FooterProps {
  translations: typeof translations.tr
  language: Language
  setLanguage: (lang: Language) => void
  showAwards?: boolean
}

export function Footer({ translations: t, language, setLanguage, showAwards = false }: FooterProps) {
  return (
    <footer className={`py-12 px-4 sm:px-6 lg:px-8 ${showAwards ? "bg-white" : "bg-gray-900"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src={showAwards ? "/logo-dark.svg" : "/logo-white.svg"}
                alt="NASA Space Apps Challenge"
                width={120}
                height={120}
                className="h-16 w-auto"
              />
            </div>
            <p className={`text-sm leading-relaxed max-w-md ${showAwards ? "text-gray-600" : "text-gray-300"}`}>
              {t.footerDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`font-fira-bold text-lg mb-4 ${showAwards ? "text-gray-900" : "text-white"}`}>
              {t.quickLinks}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className={`text-sm font-medium hover:underline transition-colors ${
                    showAwards ? "text-gray-700 hover:text-gray-900" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {t.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/code-of-conduct"
                  className={`text-sm font-medium hover:underline transition-colors ${
                    showAwards ? "text-gray-700 hover:text-gray-900" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {t.codeOfConduct}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className={`font-fira-bold text-lg mb-4 ${showAwards ? "text-gray-900" : "text-white"}`}>
              {t.followUs}
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/nasaspaceapps_bolu/?utm_source=website-footer"
                className={`p-2 rounded-full transition-colors ${
                  showAwards
                    ? "bg-gray-100 hover:bg-gray-200 text-gray-600"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                >
                  <path d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 ${
            showAwards ? "border-gray-200" : "border-gray-800"
          }`}
        >
          <p className={`text-sm ${showAwards ? "text-gray-600" : "text-gray-400"}`}>{t.copyright}</p>

          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <Globe className={`w-4 h-4 ${showAwards ? "text-gray-600" : "text-gray-400"}`} />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className={`text-sm border-none bg-transparent focus:outline-none cursor-pointer ${
                showAwards ? "text-gray-600" : "text-gray-400"
              }`}
            >
              <option value="tr">Türkçe</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  )
}
