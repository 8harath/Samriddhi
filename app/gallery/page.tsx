'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { SectionWrapper } from '@/components/section-wrapper'
import { X } from 'lucide-react'

// Update src paths once images are placed in public/images/gallery/
const galleryImages = [
  { id: 1, title: 'Children at Play', category: 'activities', src: '/images/gallery/1.jpg' },
  { id: 2, title: 'Learning Together', category: 'activities', src: '/images/gallery/2.jpg' },
  { id: 3, title: 'Art & Craft Session', category: 'activities', src: '/images/gallery/3.jpg' },
  { id: 4, title: 'Early Stimulation Activity', category: 'programmes', src: '/images/gallery/4.jpg' },
  { id: 5, title: 'Community Gathering', category: 'events', src: '/images/gallery/5.jpg' },
  { id: 6, title: 'Parent Workshop', category: 'events', src: '/images/gallery/6.jpg' },
  { id: 7, title: 'Outdoor Exploration', category: 'activities', src: '/images/gallery/7.jpg' },
  { id: 8, title: 'Special Education Session', category: 'programmes', src: '/images/gallery/8.jpg' },
  { id: 9, title: 'Therapy Activity', category: 'programmes', src: '/images/gallery/9.jpg' },
  { id: 10, title: 'Preschool Class', category: 'activities', src: '/images/gallery/10.jpg' },
  { id: 11, title: 'Awareness Event', category: 'events', src: '/images/gallery/11.jpg' },
  { id: 12, title: 'Annual Celebration', category: 'events', src: '/images/gallery/12.jpg' },
]

interface GalleryImage {
  id: number
  title: string
  category: string
  src: string
}

const GalleryTile = ({
  image,
  onClick,
}: {
  image: GalleryImage
  onClick: (img: GalleryImage) => void
}) => {
  return (
    <button
      onClick={() => onClick(image)}
      className="relative overflow-hidden rounded-lg h-56 bg-muted group cursor-pointer w-full"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt={image.title}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.currentTarget
          target.style.display = 'none'
          const parent = target.parentElement
          if (parent) {
            parent.style.background = `linear-gradient(135deg, #1F3A5F22, #7A9E7E33)`
          }
        }}
      />
      <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="text-white text-center px-4">
          <p className="font-semibold text-sm">{image.title}</p>
          <p className="text-xs opacity-80 capitalize mt-1">{image.category}</p>
        </div>
      </div>
    </button>
  )
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [filter, setFilter] = useState('all')

  const categories = ['all', 'activities', 'programmes', 'events']

  const filteredImages =
    filter === 'all' ? galleryImages : galleryImages.filter((img) => img.category === filter)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection
        title="Our Gallery"
        subtitle="We are a group of teachers who love children and enjoy every moment of teaching"
      />

      <SectionWrapper className="bg-background">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image) => (
            <GalleryTile key={image.id} image={image} onClick={setSelectedImage} />
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Place gallery images at <code className="bg-muted px-1 rounded">public/images/gallery/1.jpg</code> etc. to display them here.
        </p>
      </SectionWrapper>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-card rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-80 md:h-[450px] object-cover"
            />
            <div className="p-5">
              <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                {selectedImage.title}
              </h3>
              <p className="text-muted-foreground text-sm capitalize">{selectedImage.category}</p>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
