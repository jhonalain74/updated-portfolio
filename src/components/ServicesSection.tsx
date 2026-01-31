import { BarChart3, Workflow, Database, Zap } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights using SQL, Power BI, Looker Studio, and Python. Build dashboards that drive decision-making.",
    tools: ["SQL", "Power BI", "Looker Studio", "Python"],
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description: "Design and implement intelligent automation workflows that connect tools, APIs, and data sources to eliminate manual work.",
    tools: ["n8n", "Zapier", "API Integrations"],
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Organize and structure data effectively using modern tools for seamless collaboration and accessibility.",
    tools: ["Google Sheets", "Airtable", "Data Pipelines"],
  },
  {
    icon: Zap,
    title: "Process Optimization",
    description: "Streamline operations by identifying bottlenecks and implementing efficient workflows that scale with your business.",
    tools: ["Workflow Design", "Process Automation"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
            What I Do
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-neon">
            My Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border card-glow opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-neon flex items-center justify-center mb-6 glow-neon group-hover:glow-neon-intense transition-all duration-300">
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>

              <h3 className="font-heading text-2xl font-bold mb-3 text-foreground group-hover:text-gradient-neon transition-all duration-300">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
