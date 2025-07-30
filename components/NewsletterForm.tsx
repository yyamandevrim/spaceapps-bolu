//COPYRIGHT 2025, NASA SPACE APPS CHALLENGE BOLU
// BY YAMANDEVRIM

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
const ipRes = await fetch('https://api.ipify.org?format=json')
const ipJson = await ipRes.json()

interface NewsletterFormProps {
  translations: {
    newsletterFirstName: string
    newsletterLastName: string
    newsletterEmail: string
    newsletterSubmit: string
    newsletterSuccess: string
    newsletterError: string
    newsletterPrivacy: string
  }
  isBlueBackground: boolean
}

export function NewsletterForm({ translations: t, isBlueBackground }: NewsletterFormProps) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      const formData = new FormData()
      formData.append('firstName', firstName)
      formData.append('lastName', lastName)
      formData.append('email', email)
      formData.append('deviceInfo', window.navigator.userAgent)
      formData.append('ip', ipJson.ip)

      const response = await fetch('https://formspree.io/f/xdkddeby', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setMessage(t.newsletterSuccess)
        setMessageType("success")
        setFirstName("")
        setLastName("")
        setEmail("")
      } else {
        throw new Error('Network response was not ok')
      }
    } catch (error) {
      setMessage(t.newsletterError)
      setMessageType("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`rounded-2xl p-8 sm:p-10 shadow-xl ${isBlueBackground ? 'bg-white/10 backdrop-blur-lg border border-white/20' : 'bg-gray-50 border border-gray-200'}`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label 
              htmlFor="firstName" 
              className={`block text-sm font-medium mb-2 ${isBlueBackground ? 'text-white' : 'text-gray-700'}`}
            >
              {t.newsletterFirstName}
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className={`w-full px-4 py-3 rounded-lg border transition-colors font-overpass-regular ${
                isBlueBackground 
                  ? 'bg-white/20 border-white/30 text-white placeholder-white/70 focus:border-white focus:ring-2 focus:ring-white/50' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-offset-2'
              }`}
              style={!isBlueBackground ? { 
                '--tw-ring-color': 'var(--brand-deepblue)',
                borderColor: 'var(--brand-deepblue)'
              } as React.CSSProperties : {}}
              onFocus={!isBlueBackground ? (e) => {
                e.target.style.borderColor = 'var(--brand-deepblue)'
              } : undefined}
              placeholder={t.newsletterFirstName}
            />
          </div>

          {/* Last Name */}
          <div>
            <label 
              htmlFor="lastName" 
              className={`block text-sm font-medium mb-2 ${isBlueBackground ? 'text-white' : 'text-gray-700'}`}
            >
              {t.newsletterLastName}
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className={`w-full px-4 py-3 rounded-lg border transition-colors font-overpass-regular ${
                isBlueBackground 
                  ? 'bg-white/20 border-white/30 text-white placeholder-white/70 focus:border-white focus:ring-2 focus:ring-white/50' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-offset-2'
              }`}
              style={!isBlueBackground ? { 
                '--tw-ring-color': 'var(--brand-deepblue)',
                borderColor: 'var(--brand-deepblue)'
              } as React.CSSProperties : {}}
              onFocus={!isBlueBackground ? (e) => {
                e.target.style.borderColor = 'var(--brand-deepblue)'
              } : undefined}
              placeholder={t.newsletterLastName}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label 
            htmlFor="email" 
            className={`block text-sm font-medium mb-2 ${isBlueBackground ? 'text-white' : 'text-gray-700'}`}
          >
            {t.newsletterEmail}
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`w-full px-4 py-3 rounded-lg border transition-colors font-overpass-regular ${
              isBlueBackground 
                ? 'bg-white/20 border-white/30 text-white placeholder-white/70 focus:border-white focus:ring-2 focus:ring-white/50' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-offset-2'
            }`}
            style={!isBlueBackground ? { 
              '--tw-ring-color': 'var(--brand-deepblue)',
              borderColor: 'var(--brand-deepblue)'
            } as React.CSSProperties : {}}
            onFocus={!isBlueBackground ? (e) => {
              e.target.style.borderColor = 'var(--brand-deepblue)'
            } : undefined}
            placeholder={t.newsletterEmail}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 rounded-lg font-overpass-bold text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 border-2"
          style={{
            borderColor: isBlueBackground ? 'white' : 'var(--brand-deepblue)',
            backgroundColor: isBlueBackground ? 'white' : 'var(--brand-neonyellow)',
            color: isBlueBackground ? 'var(--brand-deepblue)' : 'black'
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) {
              const target = e.target as HTMLElement
              target.style.backgroundColor = 'var(--brand-neonyellow)'
              target.style.color = 'black'
            }
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) {
              const target = e.target as HTMLElement
              target.style.backgroundColor = isBlueBackground ? 'white' : 'var(--brand-neonyellow)'
              target.style.color = isBlueBackground ? 'var(--brand-deepblue)' : 'black'
              target.style.borderColor = isBlueBackground ? 'white' : 'var(--brand-deepblue)'
            }
          }}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div 
                className="animate-spin rounded-full h-4 w-4 border-b-2"
                style={{ borderColor: isBlueBackground ? 'white' : 'var(--brand-deepblue)' }}
              ></div>
              {isBlueBackground ? 'Gönderiliyor...' : 'Sending...'}
            </div>
          ) : (
            t.newsletterSubmit
          )}
        </Button>

        {/* Message */}
        {message && (
          <div className={`text-center p-4 rounded-lg ${
            messageType === "success"
              ? isBlueBackground 
                ? 'bg-green-500/20 text-green-100 border border-green-400/30'
                : 'bg-green-50 text-green-700 border border-green-200'
              : isBlueBackground
                ? 'bg-red-500/20 text-red-100 border border-red-400/30'
                : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            <p className="font-overpass-regular">{message}</p>
          </div>
        )}

        {/* Privacy Notice */}
        <p className={`text-sm text-center font-overpass-regular ${isBlueBackground ? 'text-white/80' : 'text-gray-500'}`}>
          {t.newsletterPrivacy}
        </p>
      </form>
    </div>
  )
}
