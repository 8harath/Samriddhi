'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { SectionWrapper } from '@/components/section-wrapper'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection
        title="Contact Us"
        subtitle="We&apos;d love to hear from you — reach out to us today"
      />

      <SectionWrapper className="bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Contact Information */}
            <div>
              <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-2">
                Reach Us
              </p>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">Email</h3>
                    <a
                      href="mailto:samriddhielp@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      samriddhielp@gmail.com
                    </a>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">Call Us Now</h3>
                    <div className="space-y-0.5">
                      {['+91 9741599110', '+91 9986999110', '+91 9590882642'].map((num) => (
                        <a
                          key={num}
                          href={`tel:${num.replace(/\s/g, '')}`}
                          className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          {num}
                        </a>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-xs mt-1">
                      Monday – Saturday, 9:00 AM – 6:00 PM IST
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Samriddhi Early Learning Center<br />
                      [Street Address]<br />
                      Bangalore, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Recognition badge */}
              <div className="mt-8 bg-muted/30 p-5 rounded-lg">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Government Recognized</span><br />
                  Early Learning Center Trust, Govt of Karnataka<br />
                  <span className="text-accent font-medium">Code: PP05081</span>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-2">
                Send a Message
              </p>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>

              {submitted && (
                <div className="mb-5 p-4 bg-secondary/15 border border-secondary rounded-lg">
                  <p className="text-primary font-medium text-sm">
                    Thank you! Your message has been sent. We&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-foreground mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-foreground mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-foreground mb-1.5">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a subject...</option>
                    <option value="preschool-admission">Preschool Admission</option>
                    <option value="programme-inquiry">Programme Inquiry</option>
                    <option value="therapy-services">Therapy Services</option>
                    <option value="counselling">Counselling Services</option>
                    <option value="collaboration">Collaboration / Partnership</option>
                    <option value="general">General Question</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>

              <p className="text-xs text-muted-foreground mt-3 text-center">
                Your information will only be used to respond to your inquiry.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  )
}
