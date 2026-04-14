import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery - Samriddhi Foundation',
  description: 'Explore moments from our programmes, workshops, and community events showcasing learning and growth.',
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
