import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Data Analytics Certification",
    issuer: "Industry Standard",
    description: "Comprehensive training in SQL, Python, and data visualization tools.",
  },
  {
    title: "Workflow Automation",
    issuer: "n8n / Zapier",
    description: "Expert-level proficiency in building complex automation workflows.",
  },
  {
    title: "API Integration Specialist",
    issuer: "Technical Certification",
    description: "Skilled in REST APIs, webhooks, and system integrations.",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
            Credentials
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-neon">
            Certifications
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="group p-6 rounded-2xl bg-card border border-border card-glow text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-neon flex items-center justify-center mx-auto mb-6 glow-neon group-hover:glow-neon-intense transition-all duration-300">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>

              <h3 className="font-heading text-lg font-bold mb-2 text-foreground group-hover:text-gradient-neon transition-all duration-300">
                {cert.title}
              </h3>

              <p className="text-primary text-sm font-medium mb-3">
                {cert.issuer}
              </p>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          * Certifications represent core competencies and technical expertise
        </p>
      </div>
    </section>
  );
};

export default CertificationsSection;
