import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { SectionWrapper } from '@/components/section-wrapper'
import { ProgrammeCard } from '@/components/programme-card'
import {
  Brain,
  Sprout,
  Heart,
  BookOpen,
  Users,
  Lightbulb,
  Leaf,
  Target,
  Zap,
  Smile,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Programmes - Samriddhi Foundation',
  description: 'Explore our diverse range of neuroscience-informed educational programmes.',
}

export default function ProgrammesPage() {
  const programmes = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'Neuroscience Fundamentals',
      description:
        'Understanding the brain development and how learning happens at different stages of life. Suitable for educators, parents, and individuals interested in the science of learning.',
    },
    {
      icon: <Sprout className="w-12 h-12" />,
      title: 'Holistic Growth',
      description:
        'Integrated approach to physical, emotional, and intellectual development. Designed for schools, organizations, and individuals seeking comprehensive development.',
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Emotional Intelligence',
      description:
        'Building emotional awareness, resilience, and healthy relationships. Ideal for adolescents, young adults, and professionals.',
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Adaptive Learning',
      description:
        'Customized educational approaches that honor individual learning styles. Perfect for students of all ages seeking personalized learning paths.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Community Building',
      description:
        'Creating supportive environments where everyone feels valued and included. Great for teams, organizations, and community groups.',
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'Critical Thinking',
      description:
        'Fostering creative problem-solving and independent thought processes. Essential for academic excellence and professional success.',
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: 'Mindfulness & Meditation',
      description:
        'Practices for stress reduction, focus, and present-moment awareness. Beneficial for anyone seeking mental clarity and emotional balance.',
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Goal Setting & Achievement',
      description:
        'Framework for defining meaningful goals and tracking progress. Practical for students, professionals, and anyone pursuing their dreams.',
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Life Skills Training',
      description:
        'Practical abilities for communication, time management, and self-care. Essential skills for thriving in modern life.',
    },
    {
      icon: <Smile className="w-12 h-12" />,
      title: 'Well-being Initiative',
      description:
        'Comprehensive programmes focused on overall wellness and happiness. Covers physical health, mental health, and life satisfaction.',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection
        title="Our Programmes"
        subtitle="Transformative learning experiences designed for every stage of life"
      />

      <SectionWrapper className="bg-background">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Why Choose Our Programmes?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Science-Backed',
                description:
                  'All programmes are grounded in current neuroscience research and evidence-based educational practices.',
              },
              {
                title: 'Personalized',
                description:
                  'We recognize that every individual is unique and tailor our approaches to meet specific needs and learning styles.',
              },
              {
                title: 'Practical',
                description:
                  'Our programmes are designed to be immediately applicable, creating lasting change in daily life and decision-making.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-muted/20 p-6 rounded-lg">
                <h3 className="font-serif font-bold text-foreground mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted/30">
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Available Programmes
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Browse our complete range of programmes. Click on any programme to learn more or get in touch to
            enroll.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            How We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'In-Person Workshops',
                description:
                  'Interactive, immersive experiences where participants engage directly with facilitators and peers.',
              },
              {
                title: 'Online Courses',
                description:
                  'Flexible, self-paced learning with video content, interactive modules, and community support.',
              },
              {
                title: 'Customized Programs',
                description:
                  'Tailored solutions for organizations, schools, and groups with specific needs and goals.',
              },
            ].map((method) => (
              <div key={method.title} className="bg-card p-8 rounded-lg shadow-md border-l-4 border-primary">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                  {method.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-primary text-primary-foreground text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Learning?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Contact us today to discuss which programme is the best fit for your needs.
        </p>
        <a
          href="/contact"
          className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </a>
      </SectionWrapper>

      <Footer />
    </div>
  )
}
