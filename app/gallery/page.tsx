'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { SectionWrapper } from '@/components/section-wrapper'
import { X } from 'lucide-react'

// TODO: Replace with actual images
const galleryImages = [
  { id: 1, title: 'Workshop Activity 1', category: 'workshops' },
  { id: 2, title: 'Community Gathering 1', category: 'community' },
  { id: 3, title: 'Learning Session 1', category: 'learning' },
  { id: 4, title: 'Workshop Activity 2', category: 'workshops' },
  { id: 5, title: 'Community Event 1', category: 'community' },
  { id: 6, title: 'Meditation Session', category: 'wellness' },
  { id: 7, title: 'Workshop Activity 3', category: 'workshops' },
  { id: 8, title: 'Team Building Activity', category: 'community' },
  { id: 9, title: 'Learning Space', category: 'learning' },
  { id: 10, title: 'Group Discussion', category: 'workshops' },
  { id: 11, title: 'Wellness Activity', category: 'wellness' },
  { id: 12, title: 'Community Support', category: 'community' },
]

interface Gallery {
  id: number
  title: string
  category: string
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<Gallery | null>(null)
  const [filter, setFilter] = useState('all')

  const categories = ['all', 'workshops', 'community', 'learning', 'wellness']

  const filteredImages =
    filter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection
        title="Our Gallery"
        subtitle="Moments from our programmes and community"
      />

      <SectionWrapper className="bg-background">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-colors capitalize ${
                filter === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="relative overflow-hidden rounded-lg h-64 bg-muted group cursor-pointer"
            >
              {/* TODO: Replace with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center text-muted-foreground">
                {image.title}
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="font-semibold">{image.title}</p>
                  <p className="text-sm capitalize opacity-75">{image.category}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </SectionWrapper>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full bg-card rounded-lg overflow-hidden">
            {/* TODO: Replace with actual image */}
            <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center text-muted-foreground">
              {selectedImage.title}
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-muted-foreground capitalize">
                Category: {selectedImage.category}
              </p>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
