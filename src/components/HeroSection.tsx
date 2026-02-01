import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import avatarImage from "@/assets/avatar.png";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16"
    >
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-green/20 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[128px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in leading-tight"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-foreground">Data </span>
              <span className="text-gradient-neon">Analyst</span>
              <span className="text-foreground"> & </span>
              <br className="hidden sm:block" />
              <span className="text-foreground">AI </span>
              <span className="text-gradient-neon">Automation</span>
              <span className="text-foreground"> Specialist</span>
            </h1>

            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              I transform raw data into{" "}
              <span className="text-foreground font-medium">actionable insights</span> and 
              manual workflows into{" "}
              <span className="text-foreground font-medium">intelligent automated systems</span>—helping 
              businesses make smarter decisions and scale efficiently.
            </p>

            <div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Button 
                variant="neon" 
                size="lg" 
                onClick={scrollToProjects}
                className="group w-full sm:w-auto"
              >
                View Featured Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="neonOutline" 
                size="lg" 
                onClick={scrollToContact}
                className="w-full sm:w-auto"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Avatar with yellow circle background */}
          <div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-fade-in relative"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative group">
              {/* Yellow circle background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-[hsl(45_100%_60%)] opacity-90 group-hover:scale-105 transition-transform duration-500" />
              
              {/* Soft glow behind avatar */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 via-neon-cyan/10 to-transparent blur-3xl scale-110 opacity-40" />
              
              {/* Decorative tech shapes */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-primary/30 rounded-full animate-[spin_20s_linear_infinite] hidden lg:block" />
              <div className="absolute -bottom-2 -left-2 w-12 h-12 border border-accent/30 rounded-lg rotate-45 animate-float hidden lg:block" style={{ animationDelay: "2s" }} />
              
              {/* Avatar image container */}
              <div className="relative z-10 animate-avatar-float group-hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src={avatarImage} 
                  alt="Jhon Gennes Alain - Data Analyst & AI Automation Specialist"
                  className="w-72 h-auto md:w-80 lg:w-96 object-contain drop-shadow-2xl"
                />
              </div>

              {/* Floating tech icons */}
              <div className="absolute top-4 -left-8 w-12 h-12 bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center animate-float shadow-lg hidden lg:flex" style={{ animationDelay: "1s" }}>
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="absolute bottom-16 -right-6 w-12 h-12 bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center animate-float shadow-lg hidden lg:flex" style={{ animationDelay: "2.5s" }}>
                <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
