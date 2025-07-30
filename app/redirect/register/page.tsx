"use client"

import { useEffect } from "react"

export default function RegisterRedirect() {
  useEffect(() => {
    // Track the click (you can add analytics here)
    console.log('Register button clicked - tracking event')
    
    // You can add analytics tracking here, for example:
    // gtag('event', 'click', {
    //   event_category: 'registration',
    //   event_label: 'register_button'
    // })
    
    // Redirect to the actual registration page
    window.location.href = "https://www.spaceappschallenge.org/2025/local-events/bolu/"
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
        <p className="font-overpass-regular">Kayıt sayfasına yönlendiriliyorsunuz...</p>
        <p className="font-overpass-regular text-sm text-white/70 mt-2">Redirecting to registration page...</p>
      </div>
    </div>
  )
}