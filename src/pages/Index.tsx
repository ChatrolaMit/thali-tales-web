import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import WeServeSection from "@/components/WeServeSection";
import AboutSection from "@/components/AboutSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import RestaurantLanding from "@/components/Hero2";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      {/* <HeroSection /> */}
      <RestaurantLanding />
      <WeServeSection />
      <AboutSection />
      <AmenitiesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
