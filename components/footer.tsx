import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-3">Samriddhi</h3>
            <p className="text-xs text-background/70 mb-3 leading-relaxed">
              Early Learning Center (Trust)<br />
              Recognized by Govt of Karnataka<br />
              <span className="text-accent font-medium">Code: PP05081</span>
            </p>
            <p className="text-sm opacity-80 leading-relaxed">
              A &apos;not for profit&apos; organization dedicated to the early stimulation of the brain
              and overall development of children.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-serif font-bold mb-3">Quick Links</h4>
            <ul className="space-y-1.5 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/overview', label: 'Overview' },
                { href: '/about', label: 'About Us' },
                { href: '/programmes', label: 'Programme' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/vision', label: 'Vision & Mission' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="opacity-80 hover:text-accent hover:opacity-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif font-bold mb-3">Reach Us</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:samriddhielp@gmail.com"
                  className="flex items-start gap-2 opacity-80 hover:text-accent hover:opacity-100 transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  samriddhielp@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919741599110"
                  className="flex items-start gap-2 opacity-80 hover:text-accent hover:opacity-100 transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    +91 9741599110<br />
                    +91 9986999110<br />
                    +91 9590882642
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs opacity-60">
          <p>&copy; Copyrights {currentYear} Samriddhi. All Rights Reserved.</p>
          <p>Call Us Now: +91 9741599110</p>
        </div>
      </div>
    </footer>
  )
}
