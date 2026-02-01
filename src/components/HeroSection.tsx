import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, BarChart3, Brain, Cog, Code2, TrendingUp, Database } from "lucide-react";
import avatarImage from "@/assets/avatar.png";

const FloatingIcon = ({ 
  icon: Icon, 
  className, 
  delay = "0s",
  size = "w-8 h-8"
}: { 
  icon: React.ElementType; 
  className?: string; 
  delay?: string;
  size?: string;
}) => (
  <div 
    className={`absolute bg-card/60 backdrop-blur-md border border-primary/20 rounded-xl flex items-center justify-center animate-float-slow shadow-lg ${className}`}
    style={{ animationDelay: delay }}
  >
    <Icon className={`${size} text-primary/80`} />
  </div>
);

const GlowingParticle = ({ 
  className, 
  delay = "0s",
  size = "w-2 h-2"
}: { 
  className?: string; 
  delay?: string;
  size?: string;
}) => (
  <div 
    className={`absolute ${size} rounded-full bg-primary/60 animate-particle blur-[1px] ${className}`}
    style={{ animationDelay: delay }}
  />
);

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16"
    >
      {/* Enhanced Background Grid with Pulse Animation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] animate-grid-pulse" />
      
      {/* Circuit-like connecting lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(142 76% 50%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(142 76% 50%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(166 76% 50%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path 
          d="M0,300 Q200,250 400,300 T800,280" 
          stroke="url(#lineGradient)" 
          strokeWidth="1" 
          fill="none"
          className="animate-pulse"
        />
        <path 
          d="M0,500 Q300,450 600,500 T1200,480" 
          stroke="url(#lineGradient)" 
          strokeWidth="1" 
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </svg>
      
      {/* Enhanced Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />

      {/* Floating Particles */}
      <GlowingParticle className="top-[20%] left-[15%]" delay="0s" />
      <GlowingParticle className="top-[30%] left-[25%]" delay="0.5s" size="w-3 h-3" />
      <GlowingParticle className="top-[60%] left-[10%]" delay="1s" />
      <GlowingParticle className="top-[70%] left-[20%]" delay="1.5s" size="w-1.5 h-1.5" />
      <GlowingParticle className="top-[25%] right-[20%]" delay="2s" />
      <GlowingParticle className="top-[75%] right-[15%]" delay="2.5s" size="w-2.5 h-2.5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in leading-tight relative"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-foreground drop-shadow-[0_0_30px_hsl(var(--primary)/0.3)]">Data </span>
              <span className="text-gradient-neon drop-shadow-[0_0_40px_hsl(var(--primary)/0.5)]">Analyst</span>
              <span className="text-foreground"> & </span>
              <br className="hidden sm:block" />
              <span className="text-foreground drop-shadow-[0_0_30px_hsl(var(--primary)/0.3)]">AI </span>
              <span className="text-gradient-neon drop-shadow-[0_0_40px_hsl(var(--primary)/0.5)]">Automation</span>
              <span className="text-foreground"> Specialist</span>
            </h1>

            <div className="relative">
              <div className="absolute inset-0 bg-background/40 backdrop-blur-sm rounded-lg -m-2" />
              <p 
                className="relative text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed opacity-0 animate-fade-in p-2"
                style={{ animationDelay: "0.2s" }}
              >
                I transform raw data into{" "}
                <span className="text-foreground font-medium">actionable insights</span> and 
                manual workflows into{" "}
                <span className="text-foreground font-medium">intelligent automated systems</span>—helping 
                businesses make smarter decisions and scale efficiently.
              </p>
            </div>

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

          {/* Avatar with Enhanced Integration */}
          <div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-fade-in relative"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative group">
              {/* Radial glow behind avatar */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-xl" />
              
              {/* Yellow circle background with glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-[hsl(45_100%_60%)] opacity-90 group-hover:scale-105 transition-transform duration-500 shadow-[0_0_60px_hsl(45_100%_50%/0.4)]" />
              
              {/* Orbiting ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border border-primary/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-88 md:h-88 lg:w-[420px] lg:h-[420px] rounded-full border border-accent/10 animate-[spin_40s_linear_infinite_reverse]" />
              
              {/* Floating tech icons around avatar */}
              <FloatingIcon 
                icon={BarChart3} 
                className="w-12 h-12 top-0 -left-4 md:top-4 md:-left-8" 
                delay="0s"
              />
              <FloatingIcon 
                icon={Brain} 
                className="w-14 h-14 -top-8 right-8 md:-top-4 md:right-12" 
                delay="0.5s"
                size="w-7 h-7"
              />
              <FloatingIcon 
                icon={Cog} 
                className="w-11 h-11 top-1/4 -right-6 md:-right-10" 
                delay="1s"
                size="w-5 h-5"
              />
              <FloatingIcon 
                icon={Code2} 
                className="w-12 h-12 bottom-20 -right-4 md:bottom-24 md:-right-8" 
                delay="1.5s"
              />
              <FloatingIcon 
                icon={TrendingUp} 
                className="w-10 h-10 bottom-8 left-0 md:bottom-12 md:-left-4" 
                delay="2s"
                size="w-5 h-5"
              />
              <FloatingIcon 
                icon={Database} 
                className="w-11 h-11 top-1/3 -left-8 md:-left-12" 
                delay="2.5s"
                size="w-5 h-5"
              />

              {/* Connecting lines from icons to avatar */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="connectGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(142 76% 50%)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="hsl(142 76% 50%)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line x1="60" y1="80" x2="180" y2="180" stroke="url(#connectGradient)" strokeWidth="1" />
                <line x1="340" y1="100" x2="220" y2="180" stroke="url(#connectGradient)" strokeWidth="1" />
                <line x1="60" y1="300" x2="180" y2="220" stroke="url(#connectGradient)" strokeWidth="1" />
              </svg>
              
              {/* Avatar image container with enhanced effects */}
              <div className="relative z-10 animate-avatar-float group-hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src={avatarImage} 
                  alt="Jhon Gennes Alain - Data Analyst & AI Automation Specialist"
                  className="w-72 h-auto md:w-80 lg:w-96 object-contain relative z-10"
                  style={{
                    filter: 'drop-shadow(0 0 25px hsl(142 76% 50% / 0.5)) drop-shadow(0 0 50px hsl(166 76% 50% / 0.3)) drop-shadow(0 20px 40px hsl(0 0% 0% / 0.5))',
                    maskImage: 'radial-gradient(ellipse 90% 90% at 50% 48%, black 65%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 48%, black 65%, transparent 100%)',
                  }}
                />
              </div>

              {/* Ground shadow/glow effect */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-8 bg-gradient-to-t from-primary/20 to-transparent rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
