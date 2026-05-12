import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

const ROTATING_WORDS = [
  "conversation",
  "automation",
  "dashboard",
  "workflow",
  "integration",
  "insight",
];

const ContactSection = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsAnimating(false);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "hsl(230 25% 8% / 0.9)" }}
    >
      {/* Background effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">

          {/* ── Heading above the photo ── */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Book A Call With Me
          </h2>
          {/* Accent underline */}
          <div className="w-20 h-1 rounded-full bg-primary mx-auto mb-10" />

          {/* ── Robot Photo ── */}
          <div className="relative max-w-lg mx-auto mb-10 rounded-2xl overflow-hidden border border-border/30 group">
            <img
              src="/images/robot-contact.jpg"
              alt="Jhon ready for a call"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle vignette */}
            <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_60px_rgba(0,0,0,0.3)]" />
          </div>

          {/* ── Interactive rotating sentence ── */}
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Your next breakthrough is one{" "}
            <span
              className={`inline-block text-primary transition-all duration-400 ${
                isAnimating
                  ? "opacity-0 translate-y-3 scale-95"
                  : "opacity-100 translate-y-0 scale-100"
              }`}
            >
              {ROTATING_WORDS[wordIndex]}
            </span>{" "}
            away.
          </h3>

          <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-lg mx-auto">
            Stop leaving revenue on the table. Let's build the systems that work while you sleep.
          </p>

          {/* ── Book a Call Button ── */}
          <a
            href="https://calendly.com/jhonalain74/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold text-base shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40 hover:scale-105 transition-all duration-300"
          >
            Book a Call
            <Calendar className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
