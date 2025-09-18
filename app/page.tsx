import { HeroSection } from "@/components/hero-section";
import { StorytellingSection } from "@/components/storytelling-section";
import { GoogleFormCTA } from "@/components/google-form-cta";
import { ContactSection } from "@/components/contact-section";
import { FloatingChatButton } from "@/components/ui/FloatingChatButton";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StorytellingSection />
      <GoogleFormCTA />
      <ContactSection />
      <FloatingChatButton
        url="https://achai-mu.vercel.app"
        text="Opa, tudo bem? Lembrei de você! Achei esse site de achados e perdidos da faculdade. Dá uma olhada."
      />
    </main>
  );
}
