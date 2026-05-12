import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#works", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["#home", ...navLinks.map(link => link.href)];
      for (const section of [...sections].reverse()) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    setActiveSection(href);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        {/* Logo — simple text initials */}
        <a
          href="#home"
          className="font-heading font-bold text-xl text-foreground hover:opacity-80 transition-opacity tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#home");
          }}
        >
          JG
        </a>

        {/* Desktop Nav Links + CTA — right aligned */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* CTA — outlined */}
          <button
            onClick={() => handleClick("#contact")}
            className="text-sm font-medium px-5 py-2 rounded-md border border-muted-foreground/40 text-foreground hover:border-primary hover:text-primary transition-all duration-300"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Subtle bottom line */}
      <div
        className="h-px w-full transition-opacity duration-300"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(215 85% 60% / 0.15) 30%, hsl(195 85% 55% / 0.15) 70%, transparent)",
          opacity: scrolled ? 1 : 0.3,
        }}
      />

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-xl border-b border-border px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-left px-3 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === link.href
                  ? "text-foreground bg-card"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            className="mt-2 text-sm font-medium px-5 py-2.5 rounded-md border border-muted-foreground/40 text-foreground hover:border-primary transition-all duration-300"
            onClick={() => handleClick("#contact")}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
