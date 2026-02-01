import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import leadEnrichmentImg from "@/assets/lead-enrichment.png";
import leadQualificationImg from "@/assets/lead-qualification.png";
import emailDashboardImg from "@/assets/email-dashboard.png";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  problem: string;
  solution: string;
  results: string[];
}

const projects: Project[] = [
  {
    id: "lead-enrichment",
    title: "Lead Enrichment Pipeline",
    category: "Automation",
    image: leadEnrichmentImg,
    problem: "Sales and marketing teams spend 10–15 minutes manually researching each lead to collect basic professional data such as verified emails, job titles, company details, and LinkedIn profiles. At scale, this creates a major bottleneck—delaying outreach, reducing productivity, and leading to incomplete or outdated contact data that lowers conversion rates.",
    solution: "Built an automated lead enrichment system using workflow automation and API integrations that processes leads in under 10 seconds. The workflow intelligently handles two scenarios: discovering missing emails using name and company data, or verifying existing emails. Each lead is enriched with job details, company information, work experience, education, and social profiles. A built-in quality scoring system evaluates data completeness, flags low-quality records for review, and logs errors without interrupting the workflow.",
    results: [
      "⏱️ 99% time reduction — from ~15 minutes to ~10 seconds per lead",
      "✅ 70–85% enrichment success rate",
      "📊 Automated quality scoring and completeness tracking",
      "🔄 Scalable batch processing with zero manual intervention",
      "🎯 Improved outreach quality using verified, enriched contact data",
    ],
  },
  {
    id: "b2b-automation",
    title: "B2B Lead Automation",
    category: "n8n Workflow",
    image: leadQualificationImg,
    problem: "B2B teams receive high volumes of leads that are often duplicated, inconsistently formatted, and poorly qualified, causing Sales to waste time on low-intent prospects while Marketing lacks a structured nurture process.",
    solution: "I built an automated B2B lead qualification workflow using n8n that captures and normalizes form data, prevents duplicate leads, applies rule-based scoring with AI qualification, and routes leads to Marketing (MQL) or Sales (SQL). The system sends automated nurture emails to MQLs, real-time Slack alerts to Sales for SQLs, and logs all activity in Google Sheets for visibility and tracking.",
    results: [
      "⏱️ Significantly reduced manual work — lead processing time cut from ~15 minutes per lead to seconds",
      "✅ Improved lead quality — MQLs nurtured automatically, SQLs routed immediately to Sales",
      "🔄 Increased workflow efficiency — duplicates prevented and all actions logged for tracking",
      "🎯 Better alignment between Sales and Marketing — clear ownership, faster follow-up, and higher engagement rates",
    ],
  },
  {
    id: "email-dashboard",
    title: "Email Campaign Dashboard",
    category: "Data Analytics",
    image: emailDashboardImg,
    problem: "A long-term nurture (LTN) email campaign for Client A showed a steady decline in open rates despite historically strong engagement. With limited data available (only ~10 emails shared), the client lacked visibility into performance trends and potential drivers behind the drop.",
    solution: "Built a focused email performance dashboard that visualized open rates and key engagement metrics over time, segmented by relevant campaign attributes. The dashboard highlighted trend changes, surfaced potential fatigue or timing issues, and provided actionable insights for optimizing future campaigns.",
    results: [
      "📉 Identified declining trends in open rates across specific email segments",
      "📊 Clear visualization of engagement metrics enabled quick diagnosis",
      "🎯 Data-driven recommendations to improve subject lines, timing, and content for higher engagement",
      "⏱️ Faster decision-making with a centralized dashboard, reducing analysis time from hours to minutes",
    ],
  },
];

const WorksSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="works" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A look inside end-to-end operations systems I've built.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden card-float cursor-pointer opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-gradient-primary font-heading font-semibold text-lg border border-primary/50 px-6 py-3 rounded-full glow-primary">
                    View Case Study
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {project.category}
                </span>
                <h3 className="font-heading text-xl font-bold mt-3 text-foreground group-hover:text-gradient-primary transition-all duration-300">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border">
          {selectedProject && (
            <>
              <DialogHeader className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {selectedProject.category}
                  </span>
                </div>
                <DialogTitle className="font-heading text-2xl md:text-3xl font-bold text-gradient-primary">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              {/* Project Image */}
              <div className="rounded-xl overflow-hidden my-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Problem Section */}
              <div className="space-y-3 mb-8">
                <h4 className="font-heading text-xl font-semibold text-foreground flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-destructive/20 flex items-center justify-center text-destructive text-sm">
                    ✕
                  </span>
                  The Problem
                </h4>
                <p className="text-muted-foreground leading-relaxed pl-10">
                  {selectedProject.problem}
                </p>
              </div>

              {/* Solution Section */}
              <div className="space-y-3 mb-8">
                <h4 className="font-heading text-xl font-semibold text-foreground flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm">
                    ✓
                  </span>
                  The Solution
                </h4>
                <p className="text-muted-foreground leading-relaxed pl-10">
                  {selectedProject.solution}
                </p>
              </div>

              {/* Results Section */}
              <div className="space-y-3">
                <h4 className="font-heading text-xl font-semibold text-foreground flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent text-sm">
                    📈
                  </span>
                  The Results
                </h4>
                <ul className="space-y-2 pl-10">
                  {selectedProject.results.map((result, index) => (
                    <li key={index} className="text-muted-foreground leading-relaxed">
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WorksSection;
