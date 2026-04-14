import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
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
  Lightbulb,
  Star,
  Sprout,
} from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      title: 'Inclusive Education',
      description: 'Education is the birth right of every child and we are open for all.',
    },
    {
      title: 'Children Are Curriculum',
      description:
        'Each child is different, each child is unique, each one is special — so is our teaching method for each one of them.',
    },
    {
      title: 'Professional Educators',
      description: 'Our work is to provide them the right environment to grow with qualified and caring educators.',
    },
    {
      title: 'Fully Equipped',
      description:
        'With lots of love, laughter, toys for tots and open sky — a perfect place to explore and live their imagination.',
    },
  ]

  const programmes = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Preschool',
      description: 'Admissions open for Nursery, LKG & UKG.',
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: 'School Collaboration',
      description: 'Samriddhi Early Learning Centre collaborates with Ganges Educational Center.',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Early Stimulation & Intervention',
      description: 'Early Stimulation & Early Intervention Program for young children.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Counselling Services',
      description: 'Counselling service for Child, Adolescent & Seniors.',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Tuition & Special Education',
      description: 'Personalized tuition and special education support.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Inclusive Education',
      description: 'Creating spaces where every child belongs and thrives.',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Early Learning Center',
      description: 'Samriddhi Early Learning Center for holistic child development.',
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: 'Social-Emotional Well-being',
      description: 'Mental health and wellbeing for young adolescents.',
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Home School Training',
      description: 'Home school training and guidance for parents.',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Therapies',
      description: 'Online & offline therapies for children with learning differences.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Awareness & Prevention',
      description:
        'Education on early childhood abuse, puberty challenges & suicide prevention for parents, teachers & caregivers.',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero */}
      <HeroSection
        title="Welcome to Our Amazing World of Learning"
        subtitle="Let's Play, Learn, Explore and Grow"
        ctaText="Let's Go"
        ctaLink="/about"
      />

      {/* About / Key Features */}
      <SectionWrapper className="bg-secondary/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-2">
              About our early learning program
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              Welcome To Samriddhi
            </h2>
            <p className="text-muted-foreground text-sm">
              A unique LEARNING program designed for very young kids
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-card p-5 rounded-lg shadow-sm border-l-4 border-accent"
              >
                <h3 className="font-serif font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Get Involved Quote */}
      <SectionWrapper className="bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">
            Get Involved!
          </p>
          <p className="font-serif text-lg md:text-xl italic leading-relaxed mb-6">
            &ldquo;Learning begins at birth and preparation for learning begins before birth. The investment done in
            Early Education gives highest returns in future.&rdquo;
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Join Now
          </a>
        </div>
      </SectionWrapper>

      {/* Programmes */}
      <SectionWrapper className="bg-muted/30">
        <div className="mb-8 text-center">
          <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-2">
            Explore All Our Programs
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Programmes
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Your child has one childhood — make it memorable. Get engaged, explore, experience.
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
        <div className="text-center mt-8">
          <a
            href="/programmes"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View All Programmes
          </a>
        </div>
      </SectionWrapper>

      {/* Enroll CTA */}
      <SectionWrapper className="bg-accent text-accent-foreground text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-serif text-xl md:text-2xl italic font-medium mb-3">
            &ldquo;I am confident, I am communicative, I am curious — I am ready for school and for life.&rdquo;
          </p>
          <p className="text-sm opacity-80 mb-6">
            &ldquo;The question is not whether you can afford to invest in Early Learning; it is whether you can afford
            not to.&rdquo;
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            ENROLL NOW
          </a>
        </div>
      </SectionWrapper>

      {/* Founders */}
      <SectionWrapper className="bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-2">
              Know Our
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Founders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Founder 1 */}
            <div className="bg-card rounded-lg p-6 shadow-md text-center border-t-4 border-accent">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-serif text-2xl font-bold">N</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-1">Ms. Neetu</h3>
              <p className="text-secondary font-medium text-sm mb-4">Founder</p>
              <a
                href="/about"
                className="inline-block text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                View Profile →
              </a>
            </div>
            {/* Founder 2 */}
            <div className="bg-card rounded-lg p-6 shadow-md text-center border-t-4 border-primary">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-foreground font-serif text-2xl font-bold">M</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                Dr. Mahesh Pavar (PHD)
              </h3>
              <p className="text-secondary font-medium text-sm mb-4">Co-Founder & Trustee</p>
              <a
                href="/vision"
                className="inline-block text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                View Vision →
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper className="bg-secondary text-secondary-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            See Our Special Features &amp; Activities!
          </h2>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Get Involved
          </a>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  )
}
