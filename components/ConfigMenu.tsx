//COPYRIGHT 2025, NASA SPACE APPS CHALLENGE BOLU
// BY YAMANDEVRIM

"use client"

import { Settings, X } from "lucide-react"
import type { Language } from "@/lib/translations"

interface ConfigMenuProps {
  showConfigMenu: boolean
  setShowConfigMenu: (show: boolean) => void
  language: Language
  setLanguage: (lang: Language) => void
  showLocation: boolean
  setShowLocation: (show: boolean) => void
  showAwards: boolean
  setShowAwards: (show: boolean) => void
  showCookieNotice: boolean
  setShowCookieNotice: (show: boolean) => void
  showSponsors: boolean
  setShowSponsors: (show: boolean) => void
  showAgenda: boolean
  setShowAgenda: (show: boolean) => void
  showJudges: boolean
  setShowJudges: (show: boolean) => void
  showFaqs: boolean
  setShowFaqs: (show: boolean) => void
  commandSequence: string
  showNewsletter: boolean
  setShowNewsletter: (show: boolean) => void
}

export function ConfigMenu({
  showConfigMenu,
  setShowConfigMenu,
  language,
  setLanguage,
  showLocation,
  setShowLocation,
  showAwards,
  setShowAwards,
  showCookieNotice,
  setShowCookieNotice,
  showSponsors,
  setShowSponsors,
  showAgenda,
  setShowAgenda,
  showJudges,
  setShowJudges,
  showFaqs,
  setShowFaqs,
  commandSequence,
  showNewsletter,
  setShowNewsletter
}: ConfigMenuProps) {
  
  const saveConfig = () => {
    const config = {
      language,
      showLocation,
      showAwards,
      showCookieNotice,
      showSponsors,
      showAgenda,
      showJudges,
      showFaqs,
      showNewsletter
    }
    localStorage.setItem('siteConfig', JSON.stringify(config))
    alert('Configuration saved!')
  }

  const loadConfig = () => {
    const savedConfig = localStorage.getItem('siteConfig')
    if (savedConfig) {
      const config = JSON.parse(savedConfig)
      setLanguage(config.language || 'tr')
      setShowLocation(config.showLocation || false)
      setShowAwards(config.showAwards || false)
      setShowCookieNotice(config.showCookieNotice || false)
      setShowSponsors(config.showSponsors ?? true)
      setShowAgenda(config.showAgenda ?? true)
      setShowJudges(config.showJudges ?? true)
      setShowFaqs(config.showFaqs ?? true)
      setShowNewsletter(config.showNewsletter ?? true)
      alert('Configuration loaded!')
    }
  }

  const resetConfig = () => {
    setLanguage('tr')
    setShowLocation(false)
    setShowAwards(false)
    setShowCookieNotice(false)
    setShowSponsors(true)
    setShowAgenda(true)
    setShowJudges(true)
    setShowFaqs(true)
    setShowNewsletter(true)
    localStorage.removeItem('siteConfig')
    localStorage.removeItem('cookieNoticeDismissed')
    alert('Configuration reset!')
  }

  if (!showConfigMenu) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg border border-gray-700 p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-blue-400" />
                <h2 className="text-xl font-fira-bold text-white">Admin Config</h2>
            </div>
            <p className="text-xs text-gray-400 ml-3">
                This panel is for development only. Changes only affect your local browser. 
            </p>
          <button
            onClick={() => setShowConfigMenu(false)}
            className="p-1 hover:bg-gray-800 rounded transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Language Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Language / Dil
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white"
            >
              <option value="tr">Türkçe</option>
              <option value="en">English</option>
            </select>
          </div>

          {/* Toggle Options */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-300">Toggle Sections</h3>
            
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Show Sponsors Section</span>
              <input
                type="checkbox"
                checked={showSponsors}
                onChange={(e) => setShowSponsors(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
              />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Show Agenda Section</span>
              <input
                type="checkbox"
                checked={showAgenda}
                onChange={(e) => setShowAgenda(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
              />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Show Judges Section</span>
              <input
                type="checkbox"
                checked={showJudges}
                onChange={(e) => setShowJudges(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
              />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Show Awards Section</span>
              <input
                type="checkbox"
                checked={showAwards}
                onChange={(e) => setShowAwards(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
              />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Show FAQs Section</span>
              <input
                type="checkbox"
                checked={showFaqs}
                onChange={(e) => setShowFaqs(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
              />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Show Location (in Hero)</span>
              <input
                type="checkbox"
                checked={showLocation}
                onChange={(e) => setShowLocation(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
              />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Show Cookie Notice</span>
              <input
                type="checkbox"
                checked={showCookieNotice}
                onChange={(e) => setShowCookieNotice(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
              />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Show Newsletter Section</span>
              <input
                type="checkbox"
                checked={showNewsletter}
                onChange={(e) => setShowNewsletter(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
              />
            </label>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-4 border-t border-gray-700">
            <button
              onClick={saveConfig}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Save Configuration
            </button>
            
            <div className="flex gap-2">
              <button
                onClick={loadConfig}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Load Saved
              </button>
              <button
                onClick={resetConfig}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Reset All
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="text-xs text-gray-500 bg-gray-800 p-3 rounded">
            <p><strong>Access Command:</strong> Type "config2025" anywhere on the page</p>
            <p><strong>Current Sequence:</strong> {commandSequence || 'None'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
