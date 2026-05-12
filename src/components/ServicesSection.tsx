import { useState } from "react";

const services = [
  {
    title: "Workflow Automation",
    image: "/images/workflow-automation.jpg",
    description:
      "I design and build end-to-end automation workflows using n8n, Zapier, and custom APIs — eliminating repetitive tasks and freeing your team to focus on what matters.",
    tools: ["n8n", "Zapier", "Make", "API Integrations"],
  },
  {
    title: "Data Analytics",
    image: "/images/data-analytics.png",
    description:
      "I transform raw data into clear, actionable insights using SQL, Python, Power BI, and Looker Studio — building dashboards that drive smarter decisions.",
    tools: ["SQL", "Power BI", "Looker Studio", "Python"],
  },
  {
    title: "Data Management",
    image: "/images/data-management.png",
    description:
      "I organize, structure, and pipeline your data across tools like Airtable, Google Sheets, and databases — ensuring clean, accessible, and reliable information.",
    tools: ["Airtable", "Google Sheets", "Data Pipelines"],
  },
  {
    title: "Process Optimization",
    image: "/images/process-optimization.png",
    description:
      "I identify bottlenecks in your operations and redesign workflows for maximum efficiency — helping your business scale without scaling complexity.",
    tools: ["Workflow Design", "Process Mapping", "Systems Thinking"],
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden cursor-pointer opacity-0 animate-fade-in"
      style={{ animationDelay: `${0.1 * (index + 1)}s`, aspectRatio: "4/3" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
        style={{ transform: isHovered ? "scale(1.08)" : "scale(1)" }}
        loading="lazy"
      />

      {/* Default state — title at bottom + ? badge */}
      <div
        className="absolute inset-0 transition-opacity duration-400"
        style={{ opacity: isHovered ? 0 : 1 }}
      >
        {/* Dark gradient at bottom for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* ? Badge */}
        <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center text-white text-sm font-bold shadow-lg">
          ?
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-heading text-lg md:text-xl font-bold text-white">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Hover state — description overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-400"
        style={{
          opacity: isHovered ? 1 : 0,
          background:
            "linear-gradient(to top, hsl(220 30% 6% / 0.95) 0%, hsl(220 30% 8% / 0.85) 60%, hsl(220 30% 10% / 0.6) 100%)",
        }}
      >
        <h3 className="font-heading text-lg md:text-xl font-bold text-primary mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {service.tools.map((tool) => (
            <span
              key={tool}
              className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-primary/15 text-primary border border-primary/25"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
            What I Do
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-primary">
            My Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
