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
              <a
                href="#"
                className={`p-2 rounded-full transition-colors ${
                  showAwards
                    ? "bg-gray-100 hover:bg-gray-200 text-gray-600"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a
                href="#"
                className={`p-2 rounded-full transition-colors ${
                  showAwards
                    ? "bg-gray-100 hover:bg-gray-200 text-gray-600"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
