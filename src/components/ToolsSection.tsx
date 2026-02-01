const tools = [
  { name: "SQL", category: "Data" },
  { name: "Python", category: "Data" },
  { name: "Power BI", category: "Visualization" },
  { name: "Looker Studio", category: "Visualization" },
  { name: "n8n", category: "Automation" },
  { name: "Zapier", category: "Automation" },
  { name: "Google Sheets", category: "Data Management" },
  { name: "Airtable", category: "Data Management" },
  { name: "REST APIs", category: "Integration" },
  { name: "Webhooks", category: "Integration" },
  { name: "Make", category: "Automation" },
  { name: "Excel", category: "Data" },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
            My Tech Stack
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Tools & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The platforms and technologies I use to transform data into insights and manual processes into automated workflows.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className="group px-6 py-3 rounded-full bg-card border border-border hover:border-primary/50 card-glow transition-all duration-300 opacity-0 animate-fade-in hover:bg-primary/5"
                style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              >
                <span className="font-medium text-foreground group-hover:text-primary transition-all duration-300">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
