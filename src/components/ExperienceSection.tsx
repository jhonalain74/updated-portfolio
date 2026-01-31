import { Briefcase, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "Data Analyst & AI Automation Specialist",
    type: "Current Focus",
    description: "Helping businesses turn data into clear insights and manual processes into smart, automated systems. Working across data analysis, visualization, and workflow automation to support better decision-making and operational efficiency.",
    highlights: [
      "Building dashboards and analyzing performance metrics",
      "Designing automations connecting tools, APIs, and data sources",
      "Bridging gaps between data, technology, and business teams",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
            Background
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-neon">
            Experience
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="relative opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="p-8 rounded-2xl bg-card border border-border card-glow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-neon flex items-center justify-center glow-neon flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary text-sm font-medium">{exp.type}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  {exp.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/90">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
