import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, ArrowUpRight, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
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

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Email Card */}
            <a
              href="mailto:jhon.alain5@gmail.com"
              className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in overflow-hidden"
              style={{ animationDelay: "0.1s" }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-primary/40 group-hover:scale-105 transition-all duration-300">
                  <Mail className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-1 font-medium">Email</p>
                  <p className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    jhon.alain5@gmail.com
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/jhongennes/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in overflow-hidden"
              style={{ animationDelay: "0.2s" }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 group-hover:scale-105 transition-all duration-300">
                  <Linkedin className="h-7 w-7 text-white" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-1 font-medium">LinkedIn</p>
                  <p className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    /in/jhongennes
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>
            </a>
          </div>

          {/* CTA Section */}
          <div 
            className="relative text-center p-10 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/50 opacity-0 animate-fade-in overflow-hidden"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            
            <div className="relative">
              {/* Location */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-muted-foreground mb-6">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Manila, Philippines</span>
              </div>
              
              {/* Heading */}
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to start your project?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Let's discuss how I can help transform your data and automate your workflows.
              </p>
              
              {/* CTA Button */}
              <Button 
                variant="neon" 
                size="xl" 
                asChild 
                className="shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow duration-300"
              >
                <a href="mailto:jhon.alain5@gmail.com">
                  <Send className="mr-2 h-5 w-5" />
                  Send Me a Message
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
