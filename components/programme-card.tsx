import { ReactNode } from 'react'
import Link from 'next/link'

interface ProgrammeCardProps {
  icon: ReactNode
  title: string
  description: string
  applyLink?: string
}

export function ProgrammeCard({ icon, title, description, applyLink = '/contact' }: ProgrammeCardProps) {
  return (
    <div className="bg-card rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="text-secondary mb-3 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-serif text-base font-bold text-center text-foreground mb-2">
        {title}
      </h3>
      <p className="text-center text-muted-foreground text-xs leading-relaxed flex-1 mb-4">
        {description}
      </p>
      <div className="text-center">
        <Link
          href={applyLink}
          className="inline-block text-xs font-semibold text-accent hover:text-primary transition-colors border border-accent hover:border-primary px-4 py-1.5 rounded-full"
        >
          Apply Now
        </Link>
      </div>
    </div>
  )
}
