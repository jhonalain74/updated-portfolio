import { 
  Database, 
  Code2, 
  BarChart3, 
  LineChart, 
  Workflow, 
  Zap, 
  Table2, 
  Grid3X3, 
  Globe, 
  Webhook, 
  Layers, 
  FileSpreadsheet 
} from "lucide-react";

const tools = [
  { name: "SQL", category: "Data", icon: Database, color: "from-blue-500 to-blue-600" },
  { name: "Python", category: "Data", icon: Code2, color: "from-yellow-500 to-green-500" },
  { name: "Power BI", category: "Visualization", icon: BarChart3, color: "from-yellow-400 to-orange-500" },
  { name: "Looker Studio", category: "Visualization", icon: LineChart, color: "from-blue-400 to-indigo-500" },
  { name: "n8n", category: "Automation", icon: Workflow, color: "from-orange-400 to-red-500" },
  { name: "Zapier", category: "Automation", icon: Zap, color: "from-orange-500 to-amber-500" },
  { name: "Google Sheets", category: "Data Management", icon: Table2, color: "from-green-400 to-green-600" },
  { name: "Airtable", category: "Data Management", icon: Grid3X3, color: "from-blue-400 to-teal-500" },
  { name: "REST APIs", category: "Integration", icon: Globe, color: "from-purple-400 to-pink-500" },
  { name: "Webhooks", category: "Integration", icon: Webhook, color: "from-indigo-400 to-purple-500" },
  { name: "Make", category: "Automation", icon: Layers, color: "from-violet-500 to-purple-600" },
  { name: "Excel", category: "Data", icon: FileSpreadsheet, color: "from-green-500 to-emerald-600" },
];

// Double the array for seamless looping
const duplicatedTools = [...tools, ...tools];

const ToolCard = ({ tool }: { tool: typeof tools[0] }) => {
  const IconComponent = tool.icon;
  return (
    <div className="group relative flex-shrink-0 w-40 p-5 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-default">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex flex-col items-center text-center gap-3">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="h-6 w-6 text-white" />
        </div>
        <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300 text-sm">
          {tool.name}
        </span>
        <span className="text-xs text-muted-foreground/70 px-2 py-0.5 rounded-full bg-secondary/50">
          {tool.category}
        </span>
      </div>
    </div>
  );
};

const ToolsSection = () => {
  return (
    <section id="tools" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />

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
      </div>

      {/* Carousel Row 1 - scrolls left */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex gap-4 animate-[scroll-left_30s_linear_infinite] hover:[animation-play-state:paused] w-max">
          {duplicatedTools.map((tool, index) => (
            <ToolCard key={`row1-${index}`} tool={tool} />
          ))}
        </div>
      </div>

      {/* Carousel Row 2 - scrolls right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex gap-4 animate-[scroll-right_35s_linear_infinite] hover:[animation-play-state:paused] w-max">
          {[...duplicatedTools].reverse().map((tool, index) => (
            <ToolCard key={`row2-${index}`} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
