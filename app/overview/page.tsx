import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { SectionWrapper } from '@/components/section-wrapper'

export const metadata: Metadata = {
  title: 'Overview - Samriddhi Early Learning Center',
  description:
    'An overview of Samriddhi Early Learning Center — our approach to early childhood education, brain stimulation and holistic development.',
}

export default function OverviewPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageHeader
        title="Overview"
        subtitle="A unique learning program designed for very young kids"
      />

      <SectionWrapper className="bg-background">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* What We Are */}
          <div className="bg-card p-7 rounded-lg shadow-sm">
            <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-2">
              Who We Are
            </p>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Samriddhi Early Learning Center
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Samriddhi is a <strong className="text-foreground">&apos;not for profit&apos;</strong> organization
              dedicated to the Early Stimulation of the Brain and overall development of children. We are
              recognized by the Government of Karnataka as an Early Learning Center Trust (Code: PP05081).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We work with children from birth through adolescence and provide support to families,
              teachers and caregivers — because we know that a child&apos;s environment is just as important
              as the programmes they attend.
            </p>
          </div>

          {/* Why Early Education Matters */}
          <div className="bg-card p-7 rounded-lg shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Why Early Education Matters
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The first few years of a child&apos;s life are the most critical period for brain development.
              Research shows that over 90% of a child&apos;s brain develops before the age of 5. Early
              stimulation — through play, exploration, social interaction and structured learning —
              lays the foundation for cognitive ability, emotional health and lifelong learning.
            </p>
            <div className="bg-secondary/10 border-l-4 border-secondary p-4 rounded-r-lg">
              <p className="font-serif italic text-foreground text-sm">
                &ldquo;Learning begins at birth and preparation for learning begins before birth. The investment
                done in Early Education gives highest returns in future.&rdquo;
              </p>
            </div>
          </div>

          {/* Core Learning Pillars */}
          <div className="bg-card p-7 rounded-lg shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Our Four Pillars
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Inclusive Education',
                  desc: 'Education is the birth right of every child. We welcome all children, regardless of ability or background.',
                },
                {
                  title: 'Child-as-Curriculum',
                  desc: 'Each child is different, unique and special. Our methods are tailored to the individual learner.',
                },
                {
                  title: 'Professional Educators',
                  desc: 'Trained facilitators who provide children with the right environment and encouragement to grow.',
                },
                {
                  title: 'Fully Equipped',
                  desc: 'Love, laughter, open sky, and stimulating toys — everything a child needs to explore and imagine.',
                },
              ].map((p) => (
                <div key={p.title} className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-foreground text-sm mb-1">{p.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Holistic Development */}
          <div className="bg-card p-7 rounded-lg shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Holistic Development
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
              True development encompasses the whole child. Every Samriddhi programme is designed to
              nurture all dimensions of a child&apos;s growth:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { area: 'Cognitive', detail: 'Thinking, problem-solving, curiosity' },
                { area: 'Emotional', detail: 'Self-awareness, resilience, relationships' },
                { area: 'Physical', detail: 'Health, movement, sensory development' },
                { area: 'Social', detail: 'Communication, empathy, community' },
              ].map((d) => (
                <div key={d.area} className="bg-muted/30 p-4 rounded-lg text-center">
                  <h4 className="font-bold text-primary text-sm mb-1">{d.area}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{d.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recognition */}
          <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">G</span>
            </div>
            <div>
              <h4 className="font-serif font-bold text-foreground mb-1">Government Recognized</h4>
              <p className="text-muted-foreground text-sm">
                Samriddhi is an Early Learning Center Trust recognized by the{' '}
                <strong className="text-foreground">Government of Karnataka</strong>, Code:{' '}
                <strong className="text-accent">PP05081</strong>. Our programs meet the standards set for
                quality early childhood education and care.
              </p>
            </div>
          </div>

        </div>
      </SectionWrapper>

      <Footer />
    </div>
  )
}
