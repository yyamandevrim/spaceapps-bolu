/**
 * Copyright (c) 2025 Yaman Devrim
 * All rights reserved. NASA Space Apps Challenge 2025 Bolu
 */

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-white font-bold text-xl tracking-tight">
            <div className="flex flex-col leading-none">
              <span className="text-2xl">DISCO</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl">CONF</span>
                <span className="text-lg font-normal">2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-white hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="#" className="text-white hover:text-gray-300 transition-colors">
            Speakers
          </Link>
          <Link href="#" className="text-white hover:text-gray-300 transition-colors">
            Agenda
          </Link>
          <Link href="#" className="text-white hover:text-gray-300 transition-colors">
            FAQs
          </Link>
          <Link href="#" className="text-white hover:text-gray-300 transition-colors">
            What is Maze?
          </Link>
        </nav>

        {/* CTA Button */}
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium">
          Watch On Demand
        </Button>
      </header>

      {/* Hero Section */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Virtual/On Demand Label */}
          <p className="text-gray-400 text-lg mb-8 font-medium">Virtual / On Demand</p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12">
            The global research
            <br />
            and discovery
            <br />
            conference by Maze
          </h1>

          {/* CTA Button */}
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-medium text-lg">
            Watch On Demand
          </Button>
        </div>
      </main>

      {/* Background Pattern */}
      <div
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  )
}
