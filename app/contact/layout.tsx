import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Samriddhi Foundation',
  description: 'Get in touch with Samriddhi Foundation. We\'d love to hear from you and answer any questions about our programmes and initiatives.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
