import { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import leadEnrichmentImg from "@/assets/lead-enrichment.png";
import leadQualificationImg from "@/assets/lead-qualification.png";
import emailDashboardImg from "@/assets/email-dashboard.png";
import heyreachAutomationImg from "@/assets/heyreach-automation.png";
import instantlyToCrmImg from "@/assets/instantly-to-crm.png";
import transcriptAutomationImg from "@/assets/transcript-automation.png";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  subtitle?: string;
  problem: string;
  solution: string;
  results: string[];
  stats?: { icon: string; value: string; label: string; sub?: string }[];
}

const featuredProjects: Project[] = [
  {
    id: "email-dashboard",
    title: "Email Campaign Dashboard",
    category: "DATA ANALYTICS",
    subtitle: "Turning email data into actionable engagement insights",
    image: emailDashboardImg,
    problem:
      "A long-term nurture (LTN) email campaign for Client A showed a steady decline in open rates despite historically strong engagement. With limited data available (only ~10 emails shared), the client lacked visibility into performance trends and potential drivers behind the drop.",
    solution:
      "Built a focused email performance dashboard that visualized open rates and key engagement metrics over time, segmented by relevant campaign attributes. The dashboard highlighted trend changes, surfaced potential fatigue or timing issues, and provided actionable insights for optimizing future campaigns.",
    results: [
      "📉 Identified declining trends in open rates across specific email segments",
      "📊 Clear visualization of engagement metrics enabled quick diagnosis",
      "🎯 Data-driven recommendations to improve subject lines, timing, and content for higher engagement",
      "⏱️ Faster decision-making with a centralized dashboard, reducing analysis time from hours to minutes",
    ],
    stats: [
      { icon: "📊", value: "85%", label: "Faster Analysis", sub: "Hours → Minutes" },
      { icon: "📈", value: "3x", label: "Engagement", sub: "Improved targeting" },
      { icon: "⏱️", value: "10min", label: "Setup Time", sub: "Per campaign" },
    ],
  },
  {
    id: "lead-enrichment",
    title: "Lead Enrichment Pipeline",
    category: "AUTOMATION",
    subtitle: "Automated lead research that scales with zero manual effort",
    image: leadEnrichmentImg,
    problem:
      "Sales and marketing teams spend 10–15 minutes manually researching each lead to collect basic professional data such as verified emails, job titles, company details, and LinkedIn profiles. At scale, this creates a major bottleneck.",
    solution:
      "Built an automated lead enrichment system using workflow automation and API integrations that processes leads in under 10 seconds. The workflow intelligently handles two scenarios: discovering missing emails using name and company data, or verifying existing emails.",
    results: [
      "⏱️ 99% time reduction — from ~15 minutes to ~10 seconds per lead",
      "✅ 70–85% enrichment success rate",
      "📊 Automated quality scoring and completeness tracking",
      "🔄 Scalable batch processing with zero manual intervention",
      "🎯 Improved outreach quality using verified, enriched contact data",
    ],
    stats: [
      { icon: "⏱️", value: "99%", label: "Time Saved", sub: "15min → 10sec" },
      { icon: "✅", value: "85%", label: "Enrichment", sub: "Success rate" },
      { icon: "🔄", value: "0", label: "Manual Work", sub: "Fully automated" },
    ],
  },
];

const moreProjects: Project[] = [
  {
    id: "b2b-automation",
    title: "B2B Lead Automation",
    category: "n8n Workflow",
    image: leadQualificationImg,
    problem:
      "B2B teams receive high volumes of leads that are often duplicated, inconsistently formatted, and poorly qualified, causing Sales to waste time on low-intent prospects while Marketing lacks a structured nurture process.",
    solution:
      "I built an automated B2B lead qualification workflow using n8n that captures and normalizes form data, prevents duplicate leads, applies rule-based scoring with AI qualification, and routes leads to Marketing (MQL) or Sales (SQL).",
    results: [
      "⏱️ Significantly reduced manual work — lead processing time cut from ~15 minutes per lead to seconds",
      "✅ Improved lead quality — MQLs nurtured automatically, SQLs routed immediately to Sales",
      "🔄 Increased workflow efficiency — duplicates prevented and all actions logged for tracking",
      "🎯 Better alignment between Sales and Marketing",
    ],
  },
  {
    id: "heyreach-automation",
    title: "LinkedIn Outreach Automation",
    category: "n8n Workflow",
    image: heyreachAutomationImg,
    problem:
      "LinkedIn outreach campaigns can generate many connection acceptances and replies, but tracking and qualifying these leads manually is inefficient.",
    solution:
      "Built an automated LinkedIn outreach response management system using workflow automation and an AI agent for message analysis.",
    results: [
      "⚡ Automated lead qualification — AI analyzes LinkedIn replies instantly",
      "📥 Automatic lead capture — accepted connections stored in Airtable",
      "🔔 Real-time notifications — Slack alerts for interested and non-interested responses",
      "🎯 Faster sales follow-up — interested leads immediately pushed to CRM",
    ],
  },
  {
    id: "instantly-to-crm",
    title: "Instantly Reply to CRM",
    category: "n8n Workflow",
    image: instantlyToCrmImg,
    problem:
      "The sales team was running email outreach campaigns through Instantly, but replies from prospects were not automatically tracked or centralized.",
    solution:
      "Built an automated workflow using webhook-based event triggers. The system listens for reply events from Instantly and processes them in real time.",
    results: [
      "✅ Eliminated manual monitoring of outreach inboxes",
      "⏱️ Enabled real-time notifications for replied leads",
      "⚡ Improved sales response time to inbound replies",
      "📂 Created a centralized record of all engaged prospects in the CRM",
    ],
  },
  {
    id: "transcript-automation",
    title: "Transcript Summarization",
    category: "n8n Workflow",
    image: transcriptAutomationImg,
    problem:
      "After client and internal calls, meeting transcripts pile up in cloud storage without anyone reviewing them.",
    solution:
      "Built an end-to-end transcript summarization workflow in n8n. The automation triggers when a new transcript is uploaded to OneDrive, downloads the file, and extracts the text.",
    results: [
      "🤖 AI-generated summaries — Claude analyzes transcripts and extracts key points automatically",
      "📝 Auto-documented in Notion — structured pages created in the right database every time",
      "🔔 Smart Slack routing — summaries posted to client, supplier, or internal channels",
      "⏱️ Eliminated manual review — transcripts processed within seconds",
    ],
  },
];

/* ─── Featured Card (large, image-left / text-right) ─── */
const FeaturedCard = ({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) => (
  <div
    className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-card/60 border border-border/50 opacity-0 animate-fade-in cursor-pointer hover:border-primary/30 transition-all duration-500"
    style={{ animationDelay: `${0.15 * (index + 1)}s` }}
    onClick={() => onOpen(project)}
  >
    {/* Left — Image */}
    <div className="relative overflow-hidden aspect-video lg:aspect-auto lg:min-h-[280px]">
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/30" />
    </div>

    {/* Right — Details */}
    <div className="p-6 flex flex-col justify-center">
      <span className="text-xs font-semibold tracking-[0.15em] text-primary mb-3 uppercase">
        {project.category}
      </span>
      <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2 leading-tight">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {project.subtitle || project.problem.slice(0, 160) + "..."}
      </p>

      {/* Stats Row */}
      {project.stats && (
        <div className="grid grid-cols-3 gap-2 mb-4">
          {project.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg bg-background/60 border border-border/40 p-2.5 text-center"
            >
              <span className="text-xs">{stat.icon}</span>
              <div className="text-base font-bold text-primary mt-1">
                {stat.value}
              </div>
              <div className="text-[11px] font-medium text-foreground">
                {stat.label}
              </div>
              {stat.sub && (
                <div className="text-[10px] text-muted-foreground">{stat.sub}</div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
        View Case Study <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  </div>
);

/* ─── Carousel ─── */
const Carousel = ({
  projects,
  onOpen,
}: {
  projects: Project[];
  onOpen: (p: Project) => void;
}) => {
  const duplicated = [...projects, ...projects];

  return (
    <div className="relative overflow-hidden">
      {/* Edge fade gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Scrolling track — CSS animation like Tools section, but slower */}
      <div className="flex gap-5 w-max animate-[scroll-left_50s_linear_infinite] hover:[animation-play-state:paused]">
        {duplicated.map((project, i) => (
          <div
            key={`${project.id}-${i}`}
            className="group flex-shrink-0 w-[320px] rounded-2xl overflow-hidden bg-card/60 border border-border/50 cursor-pointer hover:border-primary/30 transition-all duration-400"
            onClick={() => onOpen(project)}
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-5">
              <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {project.category}
              </span>
              <h4 className="font-heading text-base font-bold mt-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h4>
              <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                {project.problem.slice(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── Main Section ─── */
const WorksSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="works" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A look inside end-to-end operations systems I've built.
          </p>
        </div>

        {/* ── Featured Projects (large cards) ── */}
        <div className="flex flex-col gap-6 max-w-5xl mx-auto mb-14">
          {featuredProjects.map((project, index) => (
            <FeaturedCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

        {/* ── More Projects (carousel) ── */}
        <div className="max-w-6xl mx-auto">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2 text-center">
            More Projects
          </h3>
          <p className="text-muted-foreground text-sm text-center mb-8">
            Explore additional automation workflows and systems
          </p>
          <Carousel projects={moreProjects} onOpen={setSelectedProject} />
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
