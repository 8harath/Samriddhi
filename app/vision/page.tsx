import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { SectionWrapper } from '@/components/section-wrapper'
import { Eye, Compass, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Vision & Values - Samriddhi Foundation',
  description: 'Our vision, mission, and core values.',
}

export default function VisionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection
        title="Our Vision & Values"
        subtitle="The principles that guide our work and inspire our community"
      />

      <SectionWrapper className="bg-background">
        {/* Vision Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex gap-6 items-start">
            <Eye className="w-12 h-12 text-primary flex-shrink-0 mt-2" />
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A world where every individual has access to education that honors their unique nature,
                nurtures their potential, and empowers them to lead meaningful, fulfilling, and purposeful
                lives. We envision societies where learning is driven by curiosity, grounded in scientific
                understanding, and centered on the wellbeing of every person.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex gap-6 items-start">
            <Compass className="w-12 h-12 text-primary flex-shrink-0 mt-2" />
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower individuals of all ages through neuroscience-informed education and holistic
                development programmes that foster intellectual growth, emotional resilience, physical
                wellness, and spiritual clarity. We bridge the gap between cutting-edge neuroscience
                research and practical educational implementation.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Core Values
          </h2>
          <div className="space-y-6">
            {[
              {
                icon: '🧠',
                title: 'Science-Informed',
                description:
                  'We base all our approaches on current neuroscience research and evidence-based educational practices, continuously updating our methods as new discoveries emerge.',
              },
              {
                icon: '🌱',
                title: 'Holistic Development',
                description:
                  'We recognize and nurture the complete person—cognitive, emotional, physical, and spiritual dimensions—understanding that true growth encompasses all aspects of being human.',
              },
              {
                icon: '🤝',
                title: 'Inclusive Community',
                description:
                  'We celebrate diversity and create spaces where everyone—regardless of background, ability, or circumstance—feels belonged, valued, and empowered to contribute.',
              },
              {
                icon: '💚',
                title: 'Compassionate Approach',
                description:
                  'We approach every individual with genuine empathy, understanding, and care, recognizing the unique challenges and strengths each person brings.',
              },
              {
                icon: '✨',
                title: 'Empowerment',
                description:
                  'We foster agency and self-determination, helping individuals become architects of their own growth and capable of making intentional choices for their futures.',
              },
              {
                icon: '🔍',
                title: 'Transparency & Accountability',
                description:
                  'We communicate openly about our methods, outcomes, and impact, maintaining high standards and continuously seeking feedback for improvement.',
              },
              {
                icon: '🌍',
                title: 'Accessibility',
                description:
                  'We believe high-quality learning experiences should be accessible to all, working to remove barriers of cost, geography, and circumstance.',
              },
              {
                icon: '🚀',
                title: 'Continuous Innovation',
                description:
                  'We embrace learning and growth, staying curious about better approaches and willing to evolve our practices based on evidence and community feedback.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-md border-l-4 border-primary hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-4 items-start">
                  <span className="text-3xl flex-shrink-0">{value.icon}</span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Commitment Section */}
      <SectionWrapper className="bg-secondary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Our Commitment to You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Providing high-quality, evidence-based programmes',
              'Creating safe, inclusive learning environments',
              'Offering personalized support for individual needs',
              'Maintaining transparent communication',
              'Continuously improving our offerings',
              'Honoring your privacy and data security',
            ].map((commitment, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm font-bold">✓</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{commitment}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  )
}
