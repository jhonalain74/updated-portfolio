import { useState, useEffect, useRef } from "react";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/lib/site";

/* The Spline scene always renders at this size and is scaled to fit its box. Its
   "Built with Spline" badge is a fixed pixel size, so scaling the whole scene keeps
   the badge inside the clipped bottom 16% on every screen size. */
const SCENE_SIZE = 460;

const HeroSection = () => {
  const [robotLoaded, setRobotLoaded] = useState(false);
  const robotBoxRef = useRef<HTMLDivElement>(null);
  const [robotScale, setRobotScale] = useState(1);

  useEffect(() => {
    const box = robotBoxRef.current;
    if (!box) return;
    const observer = new ResizeObserver(([entry]) =>
      setRobotScale(entry.contentRect.width / SCENE_SIZE)
    );
    observer.observe(box);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center overflow-hidden pb-16 pt-24 lg:min-h-[calc(100svh-15rem)] lg:pb-12"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px] lg:left-auto lg:right-[8%] lg:translate-x-0"
      />

      <div className="shell relative z-10">
        <div className="grid items-center gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
          {/* Copy */}
          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
            <div
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 px-4 py-2 text-xs text-muted-foreground backdrop-blur-md opacity-0 animate-fade-in sm:text-sm"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span>
                Open to contract &amp; full-time roles
                <span className="hidden sm:inline"> · Remote, any timezone</span>
              </span>
            </div>

            <h1
              className="font-heading text-[2.6rem] font-bold leading-[1.05] tracking-tight opacity-0 animate-fade-in sm:text-5xl xl:text-[3.5rem]"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-foreground">Data &amp; AI</span>
              <br />
              <span className="text-gradient-primary">Automation Engineer</span>
            </h1>

            <p
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground opacity-0 animate-fade-in md:text-lg"
              style={{ animationDelay: "0.3s" }}
            >
              I build sales and revenue automation, AI-powered workflows, and executive dashboards,
              so teams stop doing repetitive work by hand and make decisions from clean data.
            </p>

            <div
              className="mt-8 flex flex-wrap justify-center gap-3 opacity-0 animate-fade-in lg:justify-start"
              style={{ animationDelay: "0.4s" }}
            >
              <Button asChild variant="neon" size="lg">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  <CalendarDays />
                  Book a Call
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group border-border bg-card/40 backdrop-blur-md hover:border-primary/50 hover:bg-card hover:text-foreground"
              >
                <a href="#works">
                  View My Work
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>

          {/* 3D Robot */}
          <div className="order-1 mx-auto w-full max-w-[240px] sm:max-w-[300px] lg:order-2 lg:max-w-[440px]">
            {/* Negative margin reclaims the 16% clipped off the bottom (Spline watermark) */}
            <div ref={robotBoxRef} className="relative -mb-[16%] aspect-square">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full opacity-40 blur-[80px]"
                style={{
                  background: "radial-gradient(circle, hsl(var(--primary) / 0.35) 0%, transparent 70%)",
                }}
              />

              {!robotLoaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="h-14 w-14 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
                </div>
              )}

              <div className="absolute inset-0" style={{ clipPath: "inset(0 0 16% 0)" }}>
                <iframe
                  src="https://my.spline.design/genkubgreetingrobot-CsaQDDcEjwx1DfYmVv4gJhAb/"
                  frameBorder="0"
                  title="GENKUB - Interactive 3D Greeting Robot"
                  onLoad={() => setRobotLoaded(true)}
                  style={{
                    border: "none",
                    width: SCENE_SIZE,
                    height: SCENE_SIZE,
                    transform: `scale(${robotScale})`,
                    transformOrigin: "top left",
                    opacity: robotLoaded ? 1 : 0,
                    transition: "opacity 0.5s ease-in",
                  }}
                  allow="autoplay"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
