import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { SectionWrapper } from '@/components/section-wrapper'

export const metadata: Metadata = {
  title: 'About Us - Samriddhi Early Learning Center',
  description:
    'Learn about Samriddhi Early Learning Center, our founders Ms. Neetu and Dr. Mahesh Pavar, and our commitment to early childhood education.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageHeader
        title="About Samriddhi"
        subtitle="Our Story, Our Founders, Our Commitment to Children"
      />

      <SectionWrapper className="bg-background">
        <div className="max-w-4xl mx-auto">

          {/* Our Story */}
          <div className="mb-12">
            <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-2">
              Our Story
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-5">
              About Our Early Learning Program
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Samriddhi Early Learning Center was born from a simple yet powerful belief — that every
              child deserves an education that nurtures them completely. Founded as a &apos;not for
              profit&apos; organization, we are dedicated to the early stimulation of the brain and the
              overall development of children from all walks of life.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are recognized by the Government of Karnataka as an Early Learning Center Trust
              (Code: PP05081), a recognition that reflects our commitment to quality, safety and
              inclusive practice.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our programs span preschool education, early stimulation, special education, counselling,
              therapies and community awareness — because we believe that supporting a child means
              supporting the whole family and community around them.
            </p>
          </div>

          {/* Meet Our Founders */}
          <div className="mb-12">
            <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-2">
              Know Our
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Founders</h2>

            {/* Founder 1 */}
            <div className="bg-secondary/10 p-7 rounded-lg mb-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-serif text-3xl font-bold">N</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-1">Ms. Neetu</h3>
                  <p className="text-accent font-semibold text-sm mb-4">Founder, Samriddhi</p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Ms. Neetu is the visionary behind Samriddhi Early Learning Center. Driven by a deep
                    passion for early childhood development, she recognized that quality early education
                    is the most impactful investment a society can make in its future.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Her philosophy — that each child is unique, each child is curriculum — shapes every
                    program and interaction at Samriddhi. Under her leadership, the organization has
                    grown into a trusted resource for families and communities across Karnataka.
                  </p>
                </div>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="bg-muted/30 p-7 rounded-lg">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-secondary-foreground font-serif text-3xl font-bold">M</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                    Dr. Mahesh Pavar (PHD)
                  </h3>
                  <p className="text-accent font-semibold text-sm mb-4">
                    Co-Founder &amp; Trustee, Samriddhi
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Dr. Mahesh Pavar brings academic rigor and research depth to Samriddhi&apos;s work. His
                    doctoral expertise informs the organization&apos;s evidence-based approach to early
                    stimulation and holistic development programs.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    As Co-Founder and Trustee, Dr. Pavar ensures that Samriddhi&apos;s vision remains
                    anchored in best practices — bridging research and real-world impact for the
                    children and families they serve.
                  </p>
                  <div className="mt-4">
                    <a
                      href="/vision"
                      className="inline-block text-sm font-semibold text-primary hover:text-accent transition-colors"
                    >
                      View Vision &amp; Mission →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            <div className="bg-card p-6 rounded-lg shadow-sm border-t-4 border-primary">
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                To provide Early Stimulation of the Brain and overall development of children,
                irrespective of economic and social backgrounds — because education is the birth right
                of every child.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border-t-4 border-secondary">
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                A world where every child has access to quality early learning that honors their unique
                nature, nurtures their potential, and prepares them confidently for school and for life.
              </p>
            </div>
          </div>

          {/* Core Approach */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
              Our Core Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Inclusive Education',
                  description:
                    'We are open for all. Education is the birth right of every child and no child is turned away.',
                },
                {
                  title: 'Children Are Curriculum',
                  description:
                    'Each child is different and unique — our teaching method adapts to each individual learner.',
                },
                {
                  title: 'Professional Care',
                  description:
                    'Our educators are trained professionals committed to providing the right environment for growth.',
                },
                {
                  title: 'Fully Equipped Environment',
                  description:
                    'Love, laughter, stimulating toys, and open spaces — the perfect setting for exploration.',
                },
                {
                  title: 'Family Partnership',
                  description:
                    'We work closely with parents through home school training and regular engagement.',
                },
                {
                  title: 'Community Commitment',
                  description:
                    'As a not-for-profit, we serve communities with the belief that early education transforms lives.',
                },
              ].map((value) => (
                <div key={value.title} className="bg-muted/30 p-5 rounded-lg">
                  <h3 className="font-serif text-sm font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{value.description}</p>
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
