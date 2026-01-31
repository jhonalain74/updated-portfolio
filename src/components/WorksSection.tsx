import { useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  problem: string;
  solution: string;
}

const projects: Project[] = [
  {
    id: "lead-enrichment",
    title: "Lead Enrichment Pipeline",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    problem: "B2B sales teams often struggle with incomplete lead data—missing emails, outdated contact information, and lack of professional context. Manual enrichment is time-consuming, error-prone, and doesn't scale. This creates bottlenecks in the sales pipeline and leads to missed opportunities.",
    solution: "Built an intelligent lead enrichment pipeline that automatically finds missing emails using multiple discovery APIs, verifies contact validity in real-time, and enriches lead profiles with professional data from LinkedIn, company databases, and other sources. The system features AI-powered prioritization, duplicate detection, and seamless CRM integration—reducing manual research time by 80% and improving lead quality scores significantly.",
  },
  {
    id: "b2b-automation",
    title: "B2B Lead Automation",
    category: "n8n Workflow",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    problem: "Managing B2B leads manually results in slow response times, inconsistent follow-ups, and poor lead qualification. Sales teams waste valuable time on low-quality leads while high-potential prospects slip through the cracks due to delayed outreach.",
    solution: "Designed a production-ready B2B lead automation workflow in n8n featuring duplicate protection to maintain data integrity, AI-driven lead scoring and qualification, real-time Slack alerts for hot leads, and automated multi-touch email nurture sequences. The system integrates with CRM platforms and provides analytics dashboards for continuous optimization.",
  },
  {
    id: "email-dashboard",
    title: "Email Campaign Dashboard",
    category: "Data Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    problem: "Marketing teams often lack visibility into email campaign performance across multiple platforms. Scattered data makes it difficult to identify trends, optimize send times, and understand which campaigns drive actual conversions versus just opens.",
    solution: "Developed a unified email campaign performance dashboard that aggregates data from multiple email platforms, tracks key metrics including open rates, click-through rates, and conversion attribution. Features include engagement heatmaps, A/B test analysis, subscriber segmentation insights, and automated weekly reports—enabling data-driven optimization decisions that improved overall campaign ROI.",
  },
];

const WorksSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="works" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-neon mb-4">
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
              className="group relative rounded-2xl overflow-hidden bg-card border border-border card-glow cursor-pointer opacity-0 animate-fade-in"
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
                  <span className="text-gradient-neon font-heading font-semibold text-lg border border-primary/50 px-6 py-3 rounded-lg glow-neon">
                    View Case Study
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {project.category}
                </span>
                <h3 className="font-heading text-xl font-bold mt-3 text-foreground group-hover:text-gradient-neon transition-all duration-300">
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
                <DialogTitle className="font-heading text-2xl md:text-3xl font-bold text-gradient-neon">
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
              <div className="space-y-3">
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
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WorksSection;
