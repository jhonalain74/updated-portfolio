import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WorksSection from "@/components/WorksSection";
import ToolsSection from "@/components/ToolsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FuturisticGrid from "@/components/FuturisticGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent relative">
      <FuturisticGrid />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorksSection />
        <ToolsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
