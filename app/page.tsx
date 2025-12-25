import { getEvents } from '@/lib/data'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StrugglesSection from '@/components/StrugglesSection'
import RevolutionSection from '@/components/RevolutionSection'
import GuideSection from '@/components/GuideSection'
import FirstStepSection from '@/components/FirstStepSection'
import TwoWorldsSection from '@/components/TwoWorldsSection'
import ResetProtocolSection from '@/components/ResetProtocolSection'
import SoulNourishmentSection from '@/components/SoulNourishmentSection'
import PracticalTasksSection from '@/components/PracticalTasksSection'
import JourneyBenefitsSection from '@/components/JourneyBenefitsSection'
import ServicesSection from '@/components/ServicesSection'
import AboutServiceSection from '@/components/AboutServiceSection'
import EventsSection from '@/components/EventsSection'
import AboutSection from '@/components/AboutSection'
import BookingSection from '@/components/BookingSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default async function Home() {
  const events = await getEvents()

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StrugglesSection />
      <RevolutionSection />
      <div id="guide">
        <GuideSection />
      </div>
      <div id="journey">
        <FirstStepSection />
        <TwoWorldsSection />
        <ResetProtocolSection />
        <SoulNourishmentSection />
        <PracticalTasksSection />
        <JourneyBenefitsSection />
      </div>
      <div id="services">
        <ServicesSection />
        <AboutServiceSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="booking">
        <BookingSection />
      </div>
      <div id="events">
        <EventsSection events={events} />
      </div>
      <CTASection />
      <Footer />
    </main>
  )
}

