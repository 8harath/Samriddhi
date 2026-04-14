import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { SectionWrapper } from '@/components/section-wrapper'
import { ProgrammeCard } from '@/components/programme-card'
import {
  GraduationCap,
  Brain,
  Heart,
  BookOpen,
  Users,
  Smile,
  Home,
  Activity,
  Shield,
  Star,
  Sprout,
  Lightbulb,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Programmes - Samriddhi Early Learning Center',
  description:
    'Explore all programmes offered by Samriddhi — from preschool and early stimulation to counselling, therapies and awareness programs.',
}

const programmes = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Preschool',
    description:
      'Admission open for Nursery, LKG & UKG. A nurturing environment where children take their first steps in structured learning.',
  },
  {
    icon: <Sprout className="w-8 h-8" />,
    title: 'School Collaboration',
    description:
      'Samriddhi Early Learning Centre collaborates with Ganges Educational Center for enriched and holistic early education.',
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'Early Stimulation & Intervention',
    description:
      'Targeted Early Stimulation & Early Intervention Program to support optimal brain development in young children.',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Counselling Services',
    description:
      'Professional counselling service for Children, Adolescents & Seniors — supporting emotional health at every stage of life.',
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Tuition & Special Education',
    description:
      'Personalized tuition and special education support tailored to each child\'s unique learning needs.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Inclusive Education',
    description:
      'An inclusive model where every child, irrespective of ability, background or circumstance, belongs and thrives.',
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: 'Samriddhi Early Learning Center',
    description:
      'Our flagship early learning center providing a holistic environment for children\'s cognitive, emotional and physical development.',
  },
  {
    icon: <Smile className="w-8 h-8" />,
    title: 'Social-Emotional Well-being',
    description:
      'Mental Health and Wellbeing program for Young Adolescents — building resilience, self-awareness and healthy relationships.',
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: 'Home School Training',
    description:
      'Structured Home School Training for Parents — equipping families to support their child\'s learning journey at home.',
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: 'Therapies (Online & Offline)',
    description:
      'Specialised therapies available online and offline for children with learning differences, delivered by trained professionals.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Awareness & Prevention',
    description:
      'Education on Early Childhood Abuse, Puberty Challenges & Suicide Prevention for Parents, Teachers and Care Givers.',
  },
]

export default function ProgrammesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageHeader
        title="Our Programmes"
        subtitle="Your child has one childhood — make it memorable"
      />

      {/* Why Section */}
      <SectionWrapper className="bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-2">
              Why Samriddhi
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-3">
              Our Approach to Early Learning
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: <Brain className="w-6 h-6 text-secondary" />,
                title: 'Brain-Based',
                description:
                  'All programmes are grounded in how the developing brain learns best — through play, exploration and experience.',
              },
              {
                icon: <Lightbulb className="w-6 h-6 text-secondary" />,
                title: 'Child-Centred',
                description:
                  'Each child is unique. We honour individual differences and tailor our approach to every learner.',
              },
              {
                icon: <Heart className="w-6 h-6 text-secondary" />,
                title: 'Holistic',
                description:
                  'We nurture cognitive, emotional, physical and social development — the whole child, not just academics.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-muted/20 p-5 rounded-lg flex gap-4 items-start">
                <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-1 text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* All Programmes Grid */}
      <SectionWrapper className="bg-muted/30">
        <div className="mb-8 text-center">
          <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-2">
            Explore All
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-3">
            Available Programmes
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Get engaged, explore, experience. Contact us to enroll or learn more about any programme.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programmes.map((programme) => (
            <ProgrammeCard
              key={programme.title}
              icon={programme.icon}
              title={programme.title}
              description={programme.description}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Delivery Methods */}
      <SectionWrapper className="bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
            How We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'In-Person',
                description: 'Face-to-face sessions at our learning center in Bangalore.',
              },
              {
                title: 'Online',
                description: 'Remote sessions and therapies available for families anywhere.',
              },
              {
                title: 'Home Visits',
                description: 'Our educators come to you for home school training and support.',
              },
            ].map((method) => (
              <div
                key={method.title}
                className="bg-card p-5 rounded-lg shadow-sm border-l-4 border-primary"
              >
                <h3 className="font-serif font-bold text-foreground mb-2">{method.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-primary text-primary-foreground text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            Ready to Enroll?
          </h2>
          <p className="text-sm mb-6 opacity-90">
            Contact us today to discuss which programme is the right fit for your child or family.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  )
}
