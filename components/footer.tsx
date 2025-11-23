"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">TeaLeaf</h3>
            <p className="text-sm text-white/80">
              Authentic tea from our sustainable plantation, bringing tradition to your table.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-white/80 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-white/80 hover:text-white">
                  Tea Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="mailto:hello@tealeaf.com" className="text-white/80 hover:text-white">
                  Email
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2025 TeaLeaf. Crafted with care, steeped in tradition.</p>
        </div>
      </div>
    </footer>
  )
}
