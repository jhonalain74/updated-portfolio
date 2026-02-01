import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Avatar - Shows first on mobile */}
          <div 
            className="order-first lg:order-last flex justify-center lg:justify-end opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              {/* Glow effect behind avatar */}
              <div className="absolute inset-0 bg-gradient-neon rounded-full blur-2xl opacity-30 scale-110 animate-glow-pulse" />
              
              {/* Avatar container */}
              <Avatar className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 border-4 border-primary/30 shadow-2xl relative animate-float">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                  alt="Jhon Gennes Alain"
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl md:text-5xl font-heading font-bold bg-gradient-neon text-primary-foreground">
                  JA
                </AvatarFallback>
              </Avatar>

              {/* Decorative ring */}
              <div className="absolute -inset-3 border-2 border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Available for Projects
              </p>
            </div>

            <h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in leading-tight"
              style={{ animationDelay: "0.2s" }}
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
              style={{ animationDelay: "0.3s" }}
            >
              I transform raw data into{" "}
              <span className="text-foreground font-medium">actionable insights</span> and 
              manual workflows into{" "}
              <span className="text-foreground font-medium">intelligent automated systems</span>—helping 
              businesses make smarter decisions and scale operations efficiently.
            </p>

            <div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
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

            {/* Quick stats */}
            <div 
              className="mt-12 pt-8 border-t border-border/50 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl font-heading font-bold text-gradient-neon">3+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl font-heading font-bold text-gradient-neon">20+</p>
                  <p className="text-sm text-muted-foreground">Projects Delivered</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl font-heading font-bold text-gradient-neon">99%</p>
                  <p className="text-sm text-muted-foreground">Time Saved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
