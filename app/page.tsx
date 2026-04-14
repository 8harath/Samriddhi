import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { SectionWrapper } from '@/components/section-wrapper'
import { ProgrammeCard } from '@/components/programme-card'
import { StatCard } from '@/components/stat-card'
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

export default function Home() {
  const programmes = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'Neuroscience Fundamentals',
      description:
        'Understanding the brain development and how learning happens at different stages of life.',
    },
    {
      icon: <Sprout className="w-12 h-12" />,
      title: 'Holistic Growth',
      description:
        'Integrated approach to physical, emotional, and intellectual development.',
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Emotional Intelligence',
      description:
        'Building emotional awareness, resilience, and healthy relationships.',
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Adaptive Learning',
      description:
        'Customized educational approaches that honor individual learning styles.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Community Building',
      description:
        'Creating supportive environments where everyone feels valued and included.',
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'Critical Thinking',
      description:
        'Fostering creative problem-solving and independent thought processes.',
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: 'Mindfulness',
      description:
        'Practices for stress reduction, focus, and present-moment awareness.',
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Goal Setting',
      description:
        'Framework for defining meaningful goals and tracking progress.',
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Life Skills',
      description:
        'Practical abilities for communication, time management, and self-care.',
    },
    {
      icon: <Smile className="w-12 h-12" />,
      title: 'Well-being Initiative',
      description:
        'Programs focused on overall wellness and happiness in daily life.',
    },
  ]

  const stats = [
    { number: '5000+', label: 'Lives Touched' },
    { number: '50+', label: 'Programmes Offered' },
    { number: '100+', label: 'Trained Facilitators' },
    { number: '15+', label: 'Years of Service' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="Nature & Nurture"
        subtitle="Empowering individuals through neuroscience-informed education and holistic development"
        ctaText="Explore Our Programmes"
        ctaLink="/programmes"
      />

      {/* Welcome Strip */}
      <SectionWrapper className="bg-secondary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Welcome to Samriddhi
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            At Samriddhi, we believe in nurturing the complete human being. Our mission is to bridge
            the gap between neuroscience research and practical education, creating environments where
            individuals of all ages can flourish intellectually, emotionally, and spiritually.
          </p>
        </div>
      </SectionWrapper>

      {/* Stats Section */}
      <SectionWrapper className="bg-background">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatCard key={stat.label} number={stat.number} label={stat.label} />
          ))}
        </div>
      </SectionWrapper>

      {/* Programmes Section */}
      <SectionWrapper className="bg-muted/30">
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Our Programmes
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Discover our diverse range of programmes designed to nurture growth at every stage of life
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

      {/* Inspirational Quote */}
      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic mb-6">
            &quot;Every person has the potential to grow, learn, and thrive when provided with the
            right environment and support.&quot;
          </blockquote>
          <p className="font-medium">— Samriddhi Philosophy</p>
        </div>
      </SectionWrapper>

      {/* Founder Section */}
      <SectionWrapper className="bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
            About Our Founder
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* TODO: Replace with actual founder image */}
            <div className="bg-muted rounded-lg h-80 flex items-center justify-center text-muted-foreground">
              Founder Photo
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Our Vision Leader
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With a background in neuroscience and education, our founder created Samriddhi to
                bridge the gap between scientific research and practical learning. Passionate about
                human development, they have dedicated their life to creating transformative
                educational experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Their vision is a world where every individual has access to education that honors
                their unique nature and nurtures their potential to become their best selves.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of individuals who have experienced transformation through our programmes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/programmes"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View Programmes
            </a>
            <a
              href="/contact"
              className="inline-block bg-primary-foreground/20 border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  )
}
