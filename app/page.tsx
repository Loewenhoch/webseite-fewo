import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroWinter } from "@/components/sections/hero-winter";
import { AboutSection } from "@/components/sections/about-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { WinterExperience } from "@/components/sections/winter-experience";
import { WinterDivider } from "@/components/sections/winter-divider";
import { SummerExperience } from "@/components/sections/summer-experience";
import { GallerySection } from "@/components/sections/gallery-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { LocationSection } from "@/components/sections/location-section";
import { InquirySection } from "@/components/sections/inquiry-section";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-transparent text-slate-100">
      <Header />
      <main>
        <HeroWinter />
        <AboutSection />
        <div className="section-divider mx-auto w-[90%] max-w-7xl" />
        <FeaturesSection />
        <WinterExperience />
        <WinterDivider />
        <SummerExperience />
        <div className="section-divider mx-auto w-[90%] max-w-7xl" />
        <GallerySection />
        <PricingSection />
        <LocationSection />
        <InquirySection />
      </main>
      <Footer />
    </div>
  );
}
