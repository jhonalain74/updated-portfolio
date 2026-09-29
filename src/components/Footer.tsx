import { ArrowUp } from "lucide-react";
import Logo from "@/components/Logo";
import { LOCATION, ROLE, navLinks, socials } from "@/lib/site";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-black/40 backdrop-blur-md">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />

      <div className="shell py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <a href="#home" aria-label="Jhon Gennes, back to top">
              <Logo />
            </a>
            <p className="text-sm text-muted-foreground">
              {ROLE} · {LOCATION}
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <ul className="flex items-center gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  {...(social.external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border/40 bg-card/60 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
                >
                  <social.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground/70">
            Copyright © {currentYear} by Jhon Gennes Alain. All rights reserved.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors duration-300 hover:text-primary"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
