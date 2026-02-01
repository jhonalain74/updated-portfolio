import { User, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
            Get to Know Me
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-neon">
            About Me
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Who I Am */}
            <div className="p-6 rounded-2xl bg-card border border-border card-glow opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 rounded-xl bg-gradient-neon flex items-center justify-center mb-4 glow-neon">
                <User className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-foreground">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                A dedicated Data Analyst and AI Automation Specialist passionate about leveraging technology to solve real business challenges.
              </p>
            </div>

            {/* What I Do */}
            <div className="p-6 rounded-2xl bg-card border border-border card-glow opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 rounded-xl bg-gradient-neon flex items-center justify-center mb-4 glow-neon">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-foreground">What I Do</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                I transform raw data into actionable insights and build intelligent automation systems that eliminate manual work and scale efficiently.
              </p>
            </div>

            {/* How I Create Value */}
            <div className="p-6 rounded-2xl bg-card border border-border card-glow opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="w-12 h-12 rounded-xl bg-gradient-neon flex items-center justify-center mb-4 glow-neon">
                <Lightbulb className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-foreground">How I Create Value</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                By bridging the gap between data, technology, and business needs—helping organizations make smarter decisions and optimize operations.
              </p>
            </div>
          </div>

          {/* Extended bio */}
          <div className="p-8 rounded-2xl bg-card border border-border card-glow opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With expertise in <span className="text-foreground font-medium">SQL, Python, Power BI, and Looker Studio</span>, I build dashboards and analyze performance metrics that drive decision-making. My automation work spans platforms like <span className="text-foreground font-medium">n8n and Zapier</span>, connecting tools, APIs, and data sources to streamline workflows.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I thrive on solving complex problems and delivering solutions that are not just technically sound, but genuinely useful. Whether you're a startup looking to automate operations or an established business seeking deeper insights from your data, I'm here to help you work smarter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
