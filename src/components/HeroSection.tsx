import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-green/20 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[128px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
              Data Analyst & AI Automation Specialist
            </p>
          </div>

          <h1 
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-foreground">Jhon Gennes</span>
            <br />
            <span className="text-gradient-neon">Alain</span>
          </h1>

          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Turning data into clear insights and manual processes into smart, 
            automated systems. Based in Manila, Philippines.
          </p>

          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="neon" size="lg" onClick={scrollToContact}>
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
            <Button variant="neonOutline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/jhongennes/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>

          <div 
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="animate-bounce text-muted-foreground hover:text-primary"
              onClick={scrollToServices}
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
