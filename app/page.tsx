import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const agendaItems = [
  {
    time: "9am PST/12pm EST",
    title: "Opening keynote with Jo Widawski, CEO at Maze",
    description:
      "Opening remarks from Maze CEO and Co-founder, Jo Widawski, on what brings us together, a look back at the year, the key trends in research, and how that's informing what's new and forthcoming from the Maze platform.",
    speaker: "Jonathan Widawski",
    role: "CEO & Co-founder at Maze",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    time: "9:15am PST/12:15pm EST",
    title: "Product vision keynote",
    description:
      "Hear from Chief Product Officer, George O'Brien, and the Maze Product Leads on how the platform has evolved to help its customers get user insights at scale across the key phases of product development. The keynote will announce exciting new features and provide a vision for the future.",
    speaker: "George O'Brien",
    role: "Chief Product Officer at Maze",
    avatar: "/placeholder.svg?height=60&width=60",
    additionalSpeakers: [
      { name: "Peter Kildegaard", role: "Senior Product Manager at Maze" },
      { name: "Jane Davis", role: "Senior Product Manager at Maze" },
      { name: "Netali Jakubovitz", role: "Director of Product Management at Maze" },
    ],
  },
  {
    time: "9:50am PST/12:50pm EST",
    title: "AI & Research: A measured perspective",
    description:
      "This talk explores the role of AI in nascent design research, focusing on the key considerations for effective and responsible usage. We'll begin with a brief history of AI, tracing its evolution and major milestones. Next, we'll dive into current trends in AI & product-oriented research, examining how AI is being integrated into research workflows and the benefits it brings.",
    speaker: "David Hartley-Simon",
    role: "Research Lead at Rippling",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

const speakers = [
  {
    name: "Amanda Gelb",
    role: "Independent (ex-Asana, Lyft, Google)",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Khalida Nicole Sebree",
    role: "Senior UX Researcher at LinkedIn",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Andy Warr",
    role: "Director of Portfolio Research & Insights at Dropbox",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  { name: "Ellis Yu", role: "Design Operations Lead at Plaid", avatar: "/placeholder.svg?height=200&width=200" },
  { name: "David Hartley-Simon", role: "Research Lead at Rippling", avatar: "/placeholder.svg?height=200&width=200" },
  {
    name: "Julia Cowing",
    role: "Principal Research Operations Manager at Etri",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  { name: "Kate Fisher", role: "Senior Design Researcher at Jasper", avatar: "/placeholder.svg?height=200&width=200" },
  {
    name: "Bryanne Peterson",
    role: "Global Head of Research and Strategy for the VCF Division at Broadcom",
    avatar: "/placeholder.svg?height=200&width=200",
  },
]

const faqs = [
  {
    question: "What is DISCO CONF?",
    answer:
      "DISCO CONF is Maze's annual virtual conference bringing together the global research and discovery community to share insights, best practices, and the latest trends in user research.",
  },
  {
    question: "When is DISCO CONF 2024?",
    answer: "DISCO CONF 2024 is available on-demand. You can watch all sessions at your convenience.",
  },
  {
    question: "How much does it cost to attend?",
    answer: "DISCO CONF is completely free to attend. Simply register to get access to all sessions and materials.",
  },
  {
    question: "Will sessions be recorded?",
    answer: "Yes, all sessions are recorded and available on-demand for registered attendees.",
  },
  {
    question: "Who should attend DISCO CONF?",
    answer:
      "DISCO CONF is perfect for UX researchers, product managers, designers, and anyone involved in user research and product discovery.",
  },
]

export default function Page() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 lg:px-8 relative z-50">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/placeholder.svg?height=50&width=120"
            alt="DISCO CONF 2024"
            width={120}
            height={50}
            className="text-white"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-white hover:text-blue-300 transition-colors font-overpass-regular">
            About
          </Link>
          <Link href="#speakers" className="text-white hover:text-blue-300 transition-colors font-overpass-regular">
            Speakers
          </Link>
          <Link href="#agenda" className="text-white hover:text-blue-300 transition-colors font-overpass-regular">
            Agenda
          </Link>
          <Link href="#faqs" className="text-white hover:text-blue-300 transition-colors font-overpass-regular">
            FAQs
          </Link>
          <Link href="#" className="text-white hover:text-blue-300 transition-colors font-overpass-regular">
            What is Maze?
          </Link>
        </nav>

        {/* CTA Button */}
        <Button
          className="px-6 py-2 rounded-lg font-overpass-bold text-white"
          style={{ backgroundColor: "var(--accent-blue)" }}
        >
          Watch On Demand
        </Button>
      </header>

      {/* Hero Section */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6 lg:px-8 relative">
        <div className="max-w-4xl z-10 text-center">
          <p className="text-gray-300 text-lg mb-8 font-overpass-regular">Virtual / On Demand</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-fira-black leading-tight mb-12">
            The global research
            <br />
            and discovery
            <br />
            conference by Maze
          </h1>
          <Button
            className="px-8 py-4 rounded-lg font-overpass-bold text-lg text-white"
            style={{ backgroundColor: "var(--accent-blue)" }}
          >
            Watch On Demand
          </Button>
        </div>
      </main>

      {/* Agenda Section */}
      <section id="agenda" className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-fira-black text-center mb-4">Agenda</h2>
          <p className="text-xl text-gray-300 text-center mb-16 font-overpass-regular">
            Your session line-up for Disco Conf 2024.
          </p>

          <div className="space-y-8">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 pb-4 border-b border-gray-600">
              <div className="col-span-2 font-overpass-bold text-gray-300">Time</div>
              <div className="col-span-7 font-overpass-bold text-gray-300">Sessions</div>
              <div className="col-span-3 font-overpass-bold text-gray-300">Speaker</div>
            </div>

            {/* Agenda Items */}
            {agendaItems.map((item, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 py-6 border-b border-gray-800">
                <div className="col-span-2 text-gray-300 font-overpass-regular">{item.time}</div>
                <div className="col-span-7">
                  <h3 className="text-2xl font-fira-bold mb-4">{item.title}</h3>
                  <p className="text-gray-300 mb-4 font-overpass-regular leading-relaxed">{item.description}</p>
                  <button className="text-blue-400 hover:text-blue-300 font-overpass-bold">Learn more</button>
                </div>
                <div className="col-span-3">
                  <div className="flex items-start space-x-3">
                    <Image
                      src={item.avatar || "/placeholder.svg"}
                      alt={item.speaker}
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                    <div>
                      <h4 className="font-overpass-bold">{item.speaker}</h4>
                      <p className="text-gray-300 text-sm font-overpass-regular">{item.role}</p>
                    </div>
                  </div>
                  {item.additionalSpeakers && (
                    <div className="mt-4 space-y-2">
                      {item.additionalSpeakers.map((speaker, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Image
                            src={`/placeholder.svg?height=60&width=60&query=${speaker.name}`}
                            alt={speaker.name}
                            width={60}
                            height={60}
                            className="rounded-lg"
                          />
                          <div>
                            <h4 className="font-overpass-bold">{speaker.name}</h4>
                            <p className="text-gray-300 text-sm font-overpass-regular">{speaker.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-fira-black text-center mb-4">Our speakers</h2>
          <p className="text-xl text-gray-300 text-center mb-16 font-overpass-regular">
            Meet our Disco Conf speaker lineup
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <Image
                    src={speaker.avatar || "/placeholder.svg"}
                    alt={speaker.name}
                    width={200}
                    height={200}
                    className="rounded-2xl mx-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl font-fira-bold mb-2">{speaker.name}</h3>
                <p className="text-gray-300 font-overpass-regular text-sm">{speaker.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-fira-black text-center mb-16">FAQs</h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-700 pb-6">
                <h3 className="text-2xl font-fira-bold mb-4">{faq.question}</h3>
                <p className="text-gray-300 font-overpass-regular leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 border-t border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image src="/placeholder.svg?height=40&width=100" alt="Maze" width={100} height={40} className="mb-6" />
            </div>

            <div>
              <h4 className="font-overpass-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 font-overpass-regular text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Customers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-overpass-bold text-lg mb-4">Product</h4>
              <ul className="space-y-2 font-overpass-regular text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Maze AI
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-overpass-bold text-lg mb-4">Resources and Tools</h4>
              <ul className="space-y-2 font-overpass-regular text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Content Hub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Guides & Reports
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 font-overpass-regular">© 2024 Maze. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
