import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { AccommodationIntro } from "@/components/sections/accommodation-intro";
import { FeaturesSection } from "@/components/sections/features-section";
import { SeasonsOverview } from "@/components/sections/seasons-overview";
import { GallerySection } from "@/components/sections/gallery-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { LocationSection } from "@/components/sections/location-section";
import { InquirySection } from "@/components/sections/inquiry-section";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-transparent text-slate-100">
      <Header />
      <main>
        <Hero />
        <AccommodationIntro />

        <div className="section-divider mx-auto w-[90%] max-w-7xl" />
        <FeaturesSection />
        <SeasonsOverview />

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
