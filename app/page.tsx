import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import IntroSection from '@/components/IntroSection'
import CoreFeatures from '@/components/CoreFeatures'
import VideoSection from '@/components/VideoSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative">
        <HeroSection />
        <IntroSection />
        <CoreFeatures />
        <VideoSection />
      </main>
      <Footer />
    </div>
  )
} 