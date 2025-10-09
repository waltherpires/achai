import { HeroSection } from "@/components/hero-section";
import { StorytellingSection } from "@/components/storytelling-section";
import { GoogleFormCTA } from "@/components/google-form-cta";
import { ContactSection } from "@/components/contact-section";
import { WhatsAppCommunityButton } from "@/components/ui/whatsAppCommunityButton";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StorytellingSection />
      <GoogleFormCTA />
      <ContactSection />
      <WhatsAppCommunityButton communityUrl="https://chat.whatsapp.com/JCIyhKj6EqqJTTgCiP0foX?mode=wwt" />
    </main>
  );
}
