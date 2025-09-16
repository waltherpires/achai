import { HeroSection } from "@/components/hero-section"
import { StorytellingSection } from "@/components/storytelling-section"
import { GoogleFormCTA } from "@/components/google-form-cta"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StorytellingSection />
      <GoogleFormCTA />
      <ContactSection />
    </main>
  )
}
