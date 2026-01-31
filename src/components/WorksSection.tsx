import { Rocket, Users, BarChart, CheckCircle } from "lucide-react";

const projects = [
  {
    icon: Users,
    title: "Lead Enrichment Pipeline",
    category: "Automation",
    description: "Built an intelligent lead enrichment pipeline that automatically finds missing emails, verifies contacts, and enriches lead profiles with professional data from multiple sources.",
    features: ["Email Finder", "Contact Verification", "Data Enrichment"],
  },
  {
    icon: Rocket,
    title: "B2B Lead Automation",
    category: "n8n Workflow",
    description: "Designed a production-ready B2B lead automation workflow in n8n, featuring duplicate protection, AI-driven lead qualification, real-time Slack alerts, and automated email nurture sequences.",
    features: ["AI Qualification", "Slack Integration", "Email Sequences"],
  },
  {
    icon: BarChart,
    title: "Email Campaign Dashboard",
    category: "Data Analytics",
    description: "Developed an email campaign performance dashboard to track key metrics, monitor engagement, and support data-driven optimization decisions.",
    features: ["Performance Metrics", "Engagement Tracking", "Optimization Insights"],
  },
];

const WorksSection = () => {
  return (
    <section id="works" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
            Portfolio
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-neon">
            Featured Works
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group p-8 rounded-2xl bg-card border border-border card-glow flex flex-col opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-neon flex items-center justify-center glow-neon group-hover:glow-neon-intense transition-all duration-300">
                  <project.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {project.category}
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold mb-3 text-foreground group-hover:text-gradient-neon transition-all duration-300">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="space-y-2">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
