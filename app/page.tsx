import FloatingBackground from "@/components/FloatingBackground";
import InteractiveSpotlight from "@/components/InteractiveSpotlight";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import CollectionsSection from "@/components/CollectionsSection";
import ProductsSection from "@/components/ProductsSection";
import StorySection from "@/components/StorySection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Global animated background orbs */}
      <FloatingBackground />
      
      {/* Custom desktop mouse trailing spotlight */}
      <InteractiveSpotlight />

      <main style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <HeroSection />
        <MarqueeStrip />
        <CollectionsSection />
        <ProductsSection />
        <StorySection />
        <NewsletterSection />
        <Footer />
      </main>
    </>
  );
}

