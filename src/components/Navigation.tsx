import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#works", label: "Projects" },
  { href: "#tools", label: "Tools" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(`#${section}`);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/50" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a 
            href="#home" 
            className="font-heading text-2xl font-bold text-gradient-primary hover:opacity-80 transition-opacity duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#home");
            }}
          >
            JGA
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-card/50 backdrop-blur-sm rounded-full px-2 py-1.5 border border-border/50">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === link.href
                    ? "text-primary-foreground bg-gradient-primary shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-md" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="neon" 
              size="default"
              className="shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow duration-300"
              onClick={() => {
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let's talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-secondary/50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}>
          <div className="flex flex-col gap-1 pt-4 border-t border-border/50">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href
                    ? "text-primary-foreground bg-gradient-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button 
              variant="neon" 
              className="mt-4"
              onClick={() => {
                setIsOpen(false);
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let's talk
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
