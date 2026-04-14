interface StatCardProps {
  number: string
  label: string
}

export function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
        {number}
      </div>
      <p className="text-foreground text-sm md:text-base">
        {label}
      </p>
    </div>
  )
}
