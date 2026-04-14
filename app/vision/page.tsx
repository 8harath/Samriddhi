import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { SectionWrapper } from '@/components/section-wrapper'
import { Eye, Compass } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Vision & Mission - Samriddhi Early Learning Center',
  description:
    'Our vision, mission and values — dedicated to early stimulation and holistic development of every child.',
}

export default function VisionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection
        title="Vision &amp; Mission"
        subtitle="The beliefs and values that guide everything we do"
      />

      <SectionWrapper className="bg-background">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Vision */}
          <div className="flex gap-5 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-1">
                Our Vision
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                A World Where Every Child Thrives
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where every child — irrespective of economic background, social circumstance or
                ability — has access to quality early education that honors their unique nature, nurtures
                their potential, and prepares them confidently for school and for life.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex gap-5 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
              <Compass className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-1">
                Our Mission
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                Early Stimulation for Every Child
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide Early Stimulation of the Brain and the overall development of children,
                irrespective of their economic and social backgrounds. We do this through inclusive
                education, therapeutic support, counselling, and community awareness programmes —
                because we believe education is the birth right of every child.
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-primary text-primary-foreground p-7 rounded-lg text-center">
            <p className="font-serif text-lg md:text-xl italic mb-2">
              &ldquo;The question is not whether you can afford to invest in Early Learning;
              it is whether you can afford not to.&rdquo;
            </p>
          </div>

          {/* Values */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
              Our Core Values
            </h2>
            <div className="space-y-3">
              {[
                {
                  title: 'Inclusive',
                  description:
                    'Education is a birth right. We are open to all children regardless of ability, background or circumstance.',
                },
                {
                  title: 'Child-Centred',
                  description:
                    'Each child is different, unique and special. Our methods are tailored to the individual, not a one-size-fits-all model.',
                },
                {
                  title: 'Professional Excellence',
                  description:
                    'Our educators and therapists are trained professionals who create the right environment for every child to grow.',
                },
                {
                  title: 'Holistic Development',
                  description:
                    'We nurture cognitive, emotional, physical and social growth — the whole child, not just academic performance.',
                },
                {
                  title: 'Compassionate',
                  description:
                    'We approach every child and family with empathy, patience and genuine care for their wellbeing.',
                },
                {
                  title: 'Community Driven',
                  description:
                    'As a not-for-profit, our work is driven by the needs of the community — not by profit motives.',
                },
                {
                  title: 'Evidence-Based',
                  description:
                    'Our programmes are grounded in research on early brain development and best practices in early childhood education.',
                },
                {
                  title: 'Empowering Families',
                  description:
                    'We equip parents and caregivers with knowledge, tools and training so the learning continues at home.',
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-card p-5 rounded-lg shadow-sm border-l-4 border-primary flex gap-4 items-start hover:shadow-md transition-shadow"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold text-foreground mb-1">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-secondary/10 p-6 rounded-lg">
            <h2 className="font-serif text-xl font-bold text-foreground mb-5 text-center">
              Our Commitment to You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Quality, evidence-based programmes for every child',
                'Safe, inclusive and nurturing learning environments',
                'Personalized support for individual needs',
                'Transparent communication with families',
                'Continuous improvement of our offerings',
                'Programmes accessible regardless of background',
              ].map((commitment, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-xs font-bold">✓</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{commitment}</p>
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
