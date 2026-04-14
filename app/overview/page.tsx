import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { SectionWrapper } from '@/components/section-wrapper'

export const metadata: Metadata = {
  title: 'Overview - Samriddhi Foundation',
  description: 'Learn about our neuroscience-informed approach to education and development.',
}

export default function OverviewPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection
        title="The Neuroscience of Learning"
        subtitle="Understanding how the brain develops and learns at every stage of life"
      />

      <SectionWrapper className="bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
            Our Approach
          </h2>

          <div className="space-y-8">
            {/* Brain Development */}
            <div className="bg-card p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Understanding Brain Development
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The human brain undergoes remarkable transformations throughout our lives. Research shows
                that neuroplasticity—the brain&apos;s ability to form new neural connections—continues well
                into adulthood. This understanding forms the foundation of all Samriddhi programmes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We design our educational approaches around how the brain actually learns, incorporating
                principles of distributed practice, active retrieval, and emotional engagement.
              </p>
            </div>

            {/* Learning Principles */}
            <div className="bg-card p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Core Learning Principles
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Spaced Repetition:</strong> Information is best retained when reviewed at
                    increasing intervals.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Active Learning:</strong> Engagement and participation deepen understanding
                    more than passive consumption.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Emotional Connection:</strong> Learning is stronger when tied to meaning and
                    emotional relevance.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Growth Mindset:</strong> Believing abilities can be developed leads to greater
                    achievement.
                  </span>
                </li>
              </ul>
            </div>

            {/* Holistic Development */}
            <div className="bg-card p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Holistic Development
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We recognize that learning isn&apos;t just intellectual. True development encompasses:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-foreground mb-2">Cognitive</h4>
                  <p className="text-muted-foreground text-sm">Critical thinking, problem-solving, and knowledge</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-foreground mb-2">Emotional</h4>
                  <p className="text-muted-foreground text-sm">Self-awareness, regulation, and interpersonal skills</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-foreground mb-2">Physical</h4>
                  <p className="text-muted-foreground text-sm">Health, movement, and body awareness</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-foreground mb-2">Spiritual</h4>
                  <p className="text-muted-foreground text-sm">Purpose, meaning, and values alignment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  )
}
