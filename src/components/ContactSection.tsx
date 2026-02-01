import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
              Get in Touch
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Looking for help with data analytics, automation, or process optimization? 
              I'd love to hear about your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:jhon.alain5@gmail.com"
              className="group card-float p-8 flex items-center gap-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center glow-primary group-hover:glow-primary-intense transition-all duration-300">
                <Mail className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="flex-grow">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-all duration-300">
                  jhon.alain5@gmail.com
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/jhongennes/"
              target="_blank"
              rel="noopener noreferrer"
              className="group card-float p-8 flex items-center gap-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center glow-primary group-hover:glow-primary-intense transition-all duration-300">
                <Linkedin className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="flex-grow">
                <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                <p className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-all duration-300">
                  /in/jhongennes
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          <div 
            className="text-center p-8 rounded-2xl border-gradient-primary opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Manila, Philippines</span>
            </div>
            <Button variant="neon" size="xl" asChild>
              <a href="mailto:jhon.alain5@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Me a Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
