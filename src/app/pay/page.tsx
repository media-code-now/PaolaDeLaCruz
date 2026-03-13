import Hero from "@/components/pay/home/Hero";
import Services from "@/components/pay/home/Services";
import Philosophy from "@/components/pay/home/Philosophy";
import FeaturedListings from "@/components/pay/home/FeaturedListings";
import Testimonials from "@/components/pay/home/Testimonials";
import Resources from "@/components/pay/home/Resources";
import CTASection from "@/components/pay/home/CTASection";

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <Services />
      <Philosophy />
      <FeaturedListings />
      <Testimonials />
      <Resources />
      <CTASection />
    </div>
  );
}
