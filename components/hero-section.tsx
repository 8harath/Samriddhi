import Link from 'next/link'

interface HeroSectionProps {
  title: string
  subtitle: string
  backgroundImage?: string
  ctaText?: string
  ctaLink?: string
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
}: HeroSectionProps) {
  return (
    <div
      className="relative h-[500px] md:h-[600px] flex items-center justify-center mt-[70px]"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {
              background: 'linear-gradient(135deg, #1F3A5F 0%, #2E5487 50%, #7A9E7E 100%)',
            }
      }
    >
      <div className="text-center text-white px-4">
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 text-balance">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-8 text-balance max-w-2xl mx-auto opacity-90">
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <Link
            href={ctaLink}
            className="inline-block bg-primary hover:opacity-90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-opacity"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </div>
  )
}
