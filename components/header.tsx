"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-foreground">
            TeaLeaf
          </Link>

          <nav className="hidden md:flex gap-8">
            {["About", "Varieties", "Stories", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {["About", "Varieties", "Stories", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-sm font-medium text-foreground hover:text-primary"
              >
                {item}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
