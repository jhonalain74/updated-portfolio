import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, MapPin, MessageCircle, Send, User, FileText, AtSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CalendlyWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Add global style to hide Calendly's inner white background
    const style = document.createElement("style");
    style.textContent = `
      .calendly-inline-widget iframe {
        filter: invert(0.88) hue-rotate(180deg) saturate(1.2) brightness(0.85);
        border-radius: 0.75rem;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget rounded-xl overflow-hidden"
      data-url="https://calendly.com/jhonalain74/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a2e&primary_color=7c5cfc"
      style={{ 
        minWidth: "100%", 
        height: "520px",
      }}
    />
  );
};

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    subject: "",
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const mailtoLink = `mailto:jhon.alain5@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.fullName} (${formData.email})\n\n${formData.message}`)}`;
    window.open(mailtoLink, "_blank");
    
    toast({
      title: "Opening email client...",
      description: "Your message details have been prepared.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <MessageCircle className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium text-sm">Get in Touch</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Looking for help with data analytics, automation, or process optimization? 
              I'd love to hear about your project.
            </p>
          </div>


          {/* Form + Calendly Grid */}
          <div 
            className="grid lg:grid-cols-2 gap-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Compact Contact Form */}
            <div className="relative p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-muted-foreground">Manila, Philippines</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="fullName" className="text-xs font-medium text-foreground flex items-center gap-1.5">
                        <User className="h-3 w-3 text-primary" />
                        Full Name
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="Your name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                        className="bg-secondary/30 border-border/50 focus:border-primary/50 rounded-lg h-9 text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email" className="text-xs font-medium text-foreground flex items-center gap-1.5">
                        <AtSign className="h-3 w-3 text-primary" />
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-secondary/30 border-border/50 focus:border-primary/50 rounded-lg h-9 text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label htmlFor="subject" className="text-xs font-medium text-foreground flex items-center gap-1.5">
                      <FileText className="h-3 w-3 text-primary" />
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-secondary/30 border-border/50 focus:border-primary/50 rounded-lg h-9 text-sm"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <Label htmlFor="message" className="text-xs font-medium text-foreground flex items-center gap-1.5">
                      <MessageCircle className="h-3 w-3 text-primary" />
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={3}
                      className="bg-secondary/30 border-border/50 focus:border-primary/50 rounded-lg resize-none text-sm"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    variant="neon" 
                    size="default"
                    disabled={isSubmitting}
                    className="w-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow duration-300"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>

                {/* Social Icons */}
                <div className="flex items-center justify-center gap-3 mt-4">
                  <a
                    href="mailto:jhon.alain5@gmail.com"
                    className="w-10 h-10 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jhongennes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Calendly Embed */}
            <div className="relative p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              <div className="relative h-full">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Book a Call
                </h3>
                <CalendlyWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
