'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Mail, Phone } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/overview', label: 'Overview' },
    { href: '/about', label: 'About Us' },
    { href: '/programmes', label: 'Programme' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/vision', label: 'Vision & Mission' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top contact bar — desktop only */}
      <div className="bg-accent text-accent-foreground hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between text-xs font-medium">
          <a
            href="mailto:samriddhielp@gmail.com"
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <Mail className="w-3 h-3" />
            samriddhielp@gmail.com
          </a>
          <a
            href="tel:+919741599110"
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <Phone className="w-3 h-3" />
            +91 9741599110 / 9986999110 / 9590882642
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="h-[64px] bg-primary shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-lg font-serif font-bold text-primary-foreground tracking-wide">
              Samriddhi
            </span>
            <span className="text-[10px] text-primary-foreground/60 hidden md:block tracking-wider uppercase">
              Early Learning Center
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-foreground hover:text-accent transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-primary border-t border-primary-foreground/20 absolute w-full left-0">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
              {/* Mobile contact info */}
              <div className="pb-3 border-b border-primary-foreground/20 space-y-1 text-xs text-primary-foreground/80">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3 h-3" />
                  samriddhielp@gmail.com
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3 h-3" />
                  +91 9741599110
                </div>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-primary-foreground hover:text-accent transition-colors text-sm py-0.5"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
