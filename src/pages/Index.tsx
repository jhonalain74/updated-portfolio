import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsBand from "@/components/StatsBand";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WorksSection from "@/components/WorksSection";
import ExperienceSection from "@/components/ExperienceSection";
import ToolsSection from "@/components/ToolsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FuturisticGrid from "@/components/FuturisticGrid";

const Index = () => {
  return (
    // overflow-x-clip stops decorative glows from widening the page on phones
    <div className="min-h-screen bg-transparent relative overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <FuturisticGrid />
      <div className="relative z-10">
        <Navigation />
        <main id="main" tabIndex={-1} className="outline-none">
          <HeroSection />
          <StatsBand />
          <AboutSection />
          <ServicesSection />
          <WorksSection />
          <ExperienceSection />
          <ToolsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
