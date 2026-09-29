import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

/* Contact is reached through the "Let's Talk" button, so it isn't repeated as a menu link */
const menuLinks = navLinks.filter((link) => link.href !== "#contact");
const CONTACT = "#contact";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 20);
      setProgress(maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0);

      // The last section can be too short to reach the top, so treat the page bottom as "Contact"
      if (window.scrollY >= maxScroll - 4) {
        setActiveSection(CONTACT);
        return;
      }
      const sections = ["#home", ...menuLinks.map((link) => link.href), CONTACT];
      for (const section of [...sections].reverse()) {
        const element = document.querySelector(section);
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  const handleClick = (href: string) => {
    setIsOpen(false);
    setActiveSection(href);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || isOpen ? "bg-background/75 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <nav
        aria-label="Main"
        className="shell flex h-16 items-center justify-between"
      >
        <a href="#home" onClick={() => handleClick("#home")} aria-label="Jhon Gennes, back to top">
          <Logo nameClassName="hidden sm:block" />
        </a>

        {/* Desktop links + CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <ul className="flex items-center gap-1 rounded-full border border-border/60 bg-card/40 p-1 backdrop-blur-md">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleClick(link.href)}
                  aria-current={activeSection === link.href ? "true" : undefined}
                  className={cn(
                    "block rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300",
                    activeSection === link.href
                      ? "bg-primary/15 text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Rings while the Contact section is on screen, standing in for a "Contact" link */}
          <Button
            asChild
            variant="neon"
            size="sm"
            className={cn(
              activeSection === CONTACT && "ring-2 ring-primary/60 ring-offset-2 ring-offset-background"
            )}
          >
            <a
              href={CONTACT}
              onClick={() => handleClick(CONTACT)}
              aria-current={activeSection === CONTACT ? "true" : undefined}
            >
              Let's Talk
            </a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="rounded-lg p-2 text-foreground lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Scroll progress */}
      <div
        aria-hidden="true"
        className={cn(
          "h-px w-full bg-border/40 transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0"
        )}
      >
        <div
          className="h-full origin-left bg-gradient-primary"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-b border-border transition-all duration-300 ease-in-out lg:hidden",
          isOpen ? "visible max-h-[28rem] opacity-100" : "invisible max-h-0 border-transparent opacity-0"
        )}
      >
        <ul className="shell flex flex-col gap-1 py-4">
          {menuLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleClick(link.href)}
                aria-current={activeSection === link.href ? "true" : undefined}
                className={cn(
                  "block rounded-lg px-3 py-3 text-sm font-medium transition-all duration-300",
                  activeSection === link.href
                    ? "bg-card text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <Button asChild variant="neon" className="w-full">
              <a href={CONTACT} onClick={() => handleClick(CONTACT)}>
                Let's Talk
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
