import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { SectionWrapper } from '@/components/section-wrapper'

export const metadata: Metadata = {
  title: 'About Us - Samriddhi Foundation',
  description: 'Learn about Samriddhi Foundation, our mission, and our journey.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection
        title="About Samriddhi"
        subtitle="Our Story, Mission, and Commitment to Education"
      />

      <SectionWrapper className="bg-background">
        <div className="max-w-4xl mx-auto">
          {/* Our Story */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Samriddhi Foundation was born from a simple yet powerful belief: that education should
              nurture the complete human being, not just fill minds with facts. Founded 15 years ago,
              we started as a small initiative to apply neuroscience research to real-world learning
              challenges.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              What began as experimental programmes in local communities has grown into a comprehensive
              foundation serving over 5,000 individuals annually across multiple age groups and
              demographics.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we remain committed to our core mission while continuously evolving our approaches
              based on the latest neuroscience research and feedback from our community.
            </p>
          </div>

          {/* Founder Profile */}
          <div className="bg-secondary/10 p-8 rounded-lg mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
              Meet Our Founder
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* TODO: Replace with actual founder image */}
              <div className="bg-muted rounded-lg h-80 flex items-center justify-center text-muted-foreground md:col-span-1">
                Founder Photo
              </div>
              <div className="md:col-span-2">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  [Founder Name]
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With a PhD in Neuroscience and over 20 years of experience in education, [Founder Name]
                  recognized a critical gap between neuroscience research and classroom practice.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Frustrated by traditional educational approaches that didn&apos;t reflect what we know about
                  how brains actually learn, they embarked on a mission to create a better way.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, [Founder Name] leads a team of educators, neuroscientists, and facilitators
                  dedicated to transforming how we approach human development.
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card p-8 rounded-lg shadow-md border-t-4 border-primary">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower individuals of all ages through neuroscience-informed education and holistic
                development programmes that foster intellectual growth, emotional resilience, and
                purposeful living.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-md border-t-4 border-secondary">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where every individual has access to education that honors their unique nature,
                nurtures their potential, and empowers them to lead meaningful, fulfilling lives.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Science-Informed',
                  description: 'We base all our approaches on current neuroscience research and evidence-based practices.',
                },
                {
                  title: 'Holistic',
                  description: 'We nurture the complete person—mind, body, emotions, and spirit.',
                },
                {
                  title: 'Inclusive',
                  description: 'We celebrate diversity and create spaces where everyone feels belonged and valued.',
                },
                {
                  title: 'Compassionate',
                  description: 'We approach every individual with empathy, understanding, and genuine care.',
                },
                {
                  title: 'Empowering',
                  description: 'We foster agency and self-determination, helping people become architects of their own growth.',
                },
                {
                  title: 'Transparent',
                  description: 'We communicate openly about our methods, outcomes, and commitment to continuous improvement.',
                },
              ].map((value) => (
                <div key={value.title} className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  )
}
