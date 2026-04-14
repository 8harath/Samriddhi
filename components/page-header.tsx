interface PageHeaderProps {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-primary mt-[64px] md:mt-[100px] py-7 md:py-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/65 text-sm mt-1.5 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
