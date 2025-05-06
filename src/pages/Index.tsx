
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { KeyBenefits } from "@/components/KeyBenefits";
import { PlatformOverview } from "@/components/PlatformOverview";
import { AIDifferentiation } from "@/components/AIDifferentiation";
import { CaseStudies } from "@/components/CaseStudies";
import { TargetAudience } from "@/components/TargetAudience";
import { SecuritySection } from "@/components/SecuritySection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <TrustBar />
      <KeyBenefits />
      <PlatformOverview />
      <AIDifferentiation />
      <CaseStudies />
      <TargetAudience />
      <SecuritySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
