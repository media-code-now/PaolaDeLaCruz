import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import FeaturedListings from "@/components/home/FeaturedListings";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedNeighborhoods from "@/components/home/FeaturedNeighborhoods";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import LeadCapture from "@/components/home/LeadCapture";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Stats />
      <FeaturedListings />
      <AboutPreview />
      <FeaturedNeighborhoods />
      <Testimonials />
      <CTASection />
      <LeadCapture />
    </div>
  );
}
