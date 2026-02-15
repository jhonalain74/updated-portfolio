import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, MapPin, ArrowUpRight, MessageCircle, Send, User, FileText, AtSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

          {/* Contact Form */}
          <div 
            className="relative p-8 md:p-10 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/50 opacity-0 animate-fade-in overflow-hidden"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            
            <div className="relative">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Manila, Philippines</span>
              </div>
              
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
                Ready to start your project?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-center">
                Let's discuss how I can help transform your data and automate your workflows.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <User className="h-3.5 w-3.5 text-primary" />
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                      className="bg-secondary/30 border-border/50 focus:border-primary/50 rounded-xl h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <AtSign className="h-3.5 w-3.5 text-primary" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-secondary/30 border-border/50 focus:border-primary/50 rounded-xl h-12"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <FileText className="h-3.5 w-3.5 text-primary" />
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-secondary/30 border-border/50 focus:border-primary/50 rounded-xl h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MessageCircle className="h-3.5 w-3.5 text-primary" />
                    Write your message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-secondary/30 border-border/50 focus:border-primary/50 rounded-xl resize-none"
                  />
                </div>
                
                <div className="text-center pt-2">
                  <Button 
                    type="submit"
                    variant="neon" 
                    size="xl" 
                    disabled={isSubmitting}
                    className="shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
