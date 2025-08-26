import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PainSection } from "@/components/pain-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ProofSection } from "@/components/proof-section"
import { ServicesSection } from "@/components/services-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PainSection />
      <BenefitsSection />
      <ProofSection />
      <ServicesSection />
      <EcosystemSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
