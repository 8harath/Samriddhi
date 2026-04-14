import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Samriddhi</h3>
            <p className="text-sm opacity-90">
              Nurturing minds through neuroscience-informed education and holistic development.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/overview" className="opacity-90 hover:opacity-100 transition-opacity">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/programmes" className="opacity-90 hover:opacity-100 transition-opacity">
                  Programmes
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="opacity-90 hover:opacity-100 transition-opacity">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/vision" className="opacity-90 hover:opacity-100 transition-opacity">
                  Vision
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Email: info@samriddhi.org</li>
              <li>Phone: +91 (0) XXX-XXXX-XXXX</li>
              <li>Location: [Your City], India</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8 mt-8">
          <p className="text-sm text-center opacity-75">
            &copy; {currentYear} Samriddhi Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
