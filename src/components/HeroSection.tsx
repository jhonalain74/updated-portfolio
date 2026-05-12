import { useState, useEffect, useCallback } from "react";

const highlights = [
  { text: "Reduced operational workload by up to", metric: "80%" },
  { text: "Automated reporting pipelines saving", metric: "20+ hrs/week" },
  { text: "Built AI workflows boosting efficiency by", metric: "3×" },
  { text: "Designed dashboards driving", metric: "faster decisions" },
  { text: "Integrated smart alerts cutting response time by", metric: "60%" },
];

const HeroSection = () => {
  const [robotLoaded, setRobotLoaded] = useState(false);
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const cycleHighlight = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length);
      setIsAnimating(false);
    }, 400);
  }, []);

  useEffect(() => {
    const interval = setInterval(cycleHighlight, 3500);
    return () => clearInterval(interval);
  }, [cycleHighlight]);

  const scrollToProjects = () => {
    document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16 pb-4"
    >
      <div className="w-full max-w-5xl mx-auto px-4 relative z-10 flex flex-col items-center">

        {/* Top — 3D Robot (centered) */}
        <div className="relative w-full max-w-[280px] md:max-w-[340px] aspect-square mb-0">
          {/* Glow behind the robot */}
          <div
            className="absolute inset-0 rounded-full blur-[80px] opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, hsl(215 85% 60% / 0.4) 0%, transparent 70%)",
            }}
          />

          {/* Loading spinner */}
          {!robotLoaded && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-14 h-14 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
            </div>
          )}

          {/* Spline 3D Scene */}
          <div
            className="w-full h-full relative"
            style={{
              clipPath: "inset(0 0 16% 0)",
            }}
          >
            <iframe
              src="https://my.spline.design/genkubgreetingrobot-CsaQDDcEjwx1DfYmVv4gJhAb/"
              frameBorder="0"
              title="GENKUB - Interactive 3D Greeting Robot"
              onLoad={() => setRobotLoaded(true)}
              style={{
                border: "none",
                width: "100%",
                height: "100%",
                opacity: robotLoaded ? 1 : 0,
                transition: "opacity 0.5s ease-in",
              }}
              allow="autoplay"
            />
          </div>
        </div>

        {/* Rotating Pill Badge */}
        <div
          className="mb-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.15s" }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/60 backdrop-blur-md border border-primary/20 text-sm font-medium shadow-lg min-w-[320px] justify-center">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_hsl(215_85%_60%)]" />
            <span
              className={`text-muted-foreground transition-all duration-400 ${
                isAnimating
                  ? "opacity-0 translate-y-2"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {highlights[currentHighlight].text}{" "}
              <span className="text-primary font-semibold">
                {highlights[currentHighlight].metric}
              </span>
            </span>
          </div>
        </div>

        {/* Headline (centered, bigger, higher) */}
        <h1
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in leading-[1.1] tracking-tight text-center"
          style={{ animationDelay: "0.25s" }}
        >
          <span
            className="text-foreground"
            style={{ textShadow: "0 0 30px hsl(215 85% 60% / 0.15)" }}
          >
            Data Analyst &
          </span>
          <br />
          <span
            className="text-gradient-primary"
            style={{
              filter: "drop-shadow(0 0 20px hsl(215 85% 60% / 0.3))",
            }}
          >
            AI Automation Specialist
          </span>
        </h1>

        {/* Scroll Indicator — interactive with hover glow */}
        <div
          className="group flex flex-col items-center gap-2 opacity-0 animate-fade-in cursor-pointer transition-all duration-300"
          style={{ animationDelay: "0.45s" }}
          onClick={scrollToProjects}
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase group-hover:text-primary transition-colors duration-300">
            Scroll to explore
          </span>
          <div className="w-7 h-11 rounded-full border-2 border-muted-foreground/40 flex justify-center p-1.5 group-hover:border-primary/60 group-hover:shadow-[0_0_15px_hsl(215_85%_60%/_0.3)] transition-all duration-300">
            <div className="w-1.5 h-2 rounded-full bg-primary animate-[bounce_2s_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
