import { ReactNode } from 'react'

interface ProgrammeCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function ProgrammeCard({ icon, title, description }: ProgrammeCardProps) {
  return (
    <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-primary mb-4 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-bold text-center text-foreground mb-3">
        {title}
      </h3>
      <p className="text-center text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}
