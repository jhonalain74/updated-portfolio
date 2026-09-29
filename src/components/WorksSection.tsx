import { useEffect, useState, type ReactNode } from "react";
import {
  Bot,
  Boxes,
  CalendarDays,
  CheckCircle2,
  CircleAlert,
  Clock,
  FileCheck,
  Layers,
  Lightbulb,
  Maximize2,
  MessageSquareText,
  Network,
  RefreshCw,
  Split,
  Terminal,
  Timer,
  TrendingUp,
  UserX,
  Video,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ImageLightbox from "@/components/ImageLightbox";
import Reveal from "@/components/Reveal";
import ProjectCarousel from "@/components/ProjectCarousel";
import SectionHeading from "@/components/SectionHeading";
import { CALENDLY_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import leadEnrichmentImg from "@/assets/lead-enrichment.png";
import leadQualificationImg from "@/assets/lead-qualification.png";
import emailDashboardImg from "@/assets/email-dashboard.png";
import heyreachAutomationImg from "@/assets/heyreach-automation.png";
import instantlyToCrmImg from "@/assets/instantly-to-crm.png";
import transcriptAutomationImg from "@/assets/transcript-automation.png";
import offboardingImg from "@/assets/offboarding-automation.png";
import onboardingImg from "@/assets/onboarding-automation.png";
import postCallFormImg from "@/assets/post-call-form.png";
import d2cCadenceImg from "@/assets/d2c-confirmation-cadence.png";

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
  sub?: string;
}

/* One thing the build does; a label is shown in bold ahead of the text */
type Step = string | { label: string; text: string };

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  client?: string;
  subtitle?: string;
  problem: string;
  solution: string;
  steps?: Step[];
  stepsNote?: string;
  /* Either a list of outcomes or a single paragraph */
  results: string | string[];
  stats?: Stat[];
}

const projects: Project[] = [
  {
    id: "team-offboarding",
    title: "One-Command Team Offboarding via Slack",
    category: "HR Ops",
    client: "High-ticket sales team",
    image: offboardingImg,
    problem:
      "When a setter or closer left, an admin had to remove them from Google Workspace, Zoom and the scheduling platform one at a time. Steps got missed, so former reps kept their logins and paid license seats. Deleting accounts also wiped their call recordings for good.",
    solution:
      "A Slack slash command that opens an offboarding form. Only approved managers can use it, and they must tick a confirm box before it runs. On submit, a Make.com scenario:",
    steps: [
      "suspends the person's Google Workspace account",
      "deactivates their Zoom user but keeps the recordings",
      "removes them from OnceHub",
      "marks them Inactive in the team roster, with an offboarding date",
      "posts an audit message naming who ran it",
    ],
    stepsNote: "For setters it skips the Zoom and scheduling steps automatically.",
    results:
      "Offboarding is now one command instead of a checklist. Every step can be undone, and the recorded exit dates feed a commission clawback check.",
    stats: [
      { icon: Terminal, value: "1", label: "Slack Command" },
      { icon: UserX, value: "3", label: "Accounts Revoked" },
      { icon: Video, value: "0", label: "Recordings Lost" },
    ],
  },
  {
    id: "team-onboarding",
    title: "Signed Contract to Day-One Access",
    category: "HR Ops",
    client: "High-ticket sales team",
    image: onboardingImg,
    problem:
      "Every new setter or closer needed accounts in about six tools before their first shift. Admins created them by hand after the contract came back, so logins arrived one at a time and new hires started without CRM or training access.",
    solution:
      "A pipeline of two Make.com scenarios. The hire's application form sends them a SignNow agreement. As soon as they sign it, the second scenario:",
    steps: [
      "creates their Google Workspace account and emails them the login",
      "invites them to Slack and Close CRM",
      "signs them up on the training platform and enrolls them in two courses",
      "for closers only, adds a licensed Zoom seat and a payment-platform team invite",
      "adds them to the team roster and sends a welcome email for their role, plus invoice and payout dates",
    ],
    results:
      "New hires get every login within about a minute of signing, and no admin has to do anything. Names are cleaned automatically (spaces and accents removed), so account creation doesn't fail on unusual names.",
    stats: [
      { icon: Timer, value: "~1 min", label: "Signature to Access" },
      { icon: Boxes, value: "6", label: "Platforms Provisioned" },
      { icon: Bot, value: "0 hrs", label: "Manual Setup" },
    ],
  },
  {
    id: "post-call-form",
    title: "Post-Call Form to CRM, Reporting & Slack",
    category: "Sales Ops",
    client: "High-ticket sales team",
    image: postCallFormImg,
    problem:
      "After every sales call, closers had to report the outcome in the CRM, the tracking sheet and Slack. Updates were late or skipped, setters lost credit for calls they booked, and managers couldn't trust the numbers behind commissions and dashboards.",
    solution:
      "A Jotform post-call form that fills in the lead, closer and setter from Close CRM, so the closer only records what happened. Make.com sorts each submission into one of six outcomes: no-show, cancelled, rescheduled, passed back to a setter, showed with no sale, or closed with cash. Every outcome writes a row to the central reporting sheet and posts to the right Slack channel. Then, depending on the outcome:",
    steps: [
      "closed deals also update Close and post to the wins channel with the amount",
      "no-shows go into an ActiveCampaign nurture list",
      "social-media leads also go to the social team's channel",
    ],
    results:
      "One form replaces four manual updates. The sheet feeds the sales dashboards and commission reports, and setter credit is taken from the booking itself, not from anyone's memory.",
    stats: [
      { icon: Split, value: "6", label: "Outcome Routes" },
      { icon: Network, value: "4", label: "Systems From One Form" },
      { icon: FileCheck, value: "0 hrs", label: "Manual Reporting" },
    ],
  },
  {
    id: "d2c-confirmation",
    title: "Direct-Booking Confirmation Cadence",
    category: "Lead Conversion",
    client: "High-ticket sales team",
    image: d2cCadenceImg,
    problem:
      "Leads who booked straight from an ad landed on a closer's calendar without talking to anyone first. Nobody owned confirming them, so reminders depended on whoever remembered, and no-shows used up closers' time.",
    solution: "Two Make.com scenarios:",
    steps: [
      {
        label: "Instant confirmation",
        text: 'Every new booking gets a confirmation text written for direct bookers within seconds. If the lead replies "YES", they\'re marked Confirmed in Close.',
      },
      {
        label: "Follow-up cadence",
        text: "Every 15 minutes, a second scenario sorts unconfirmed leads by how soon their call is: 24+ hours, 4–24 hours, or under 4 hours. It schedules the next touch and drafts a personal text in Close for the confirmation setter to send. A lead only moves to the next step after a call is logged, and drops out once confirmed.",
      },
    ],
    stepsNote: "Two Close smart views give setters a call queue and a reply inbox.",
    results:
      "Every direct booking gets confirmed within seconds and a follow-up plan matched to how soon its call is. Setters work from a queue, and every text is a draft that a person reviews before it goes out.",
    stats: [
      { icon: MessageSquareText, value: "~20 sec", label: "First Confirmation Text" },
      { icon: RefreshCw, value: "15 min", label: "Cadence Check" },
      { icon: Layers, value: "3", label: "Lead-Time Lanes" },
    ],
  },
  {
    id: "email-dashboard",
    title: "Email Campaign Dashboard",
    category: "Data Analytics",
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
      { icon: Zap, value: "85%", label: "Faster Analysis", sub: "Hours → Minutes" },
      { icon: TrendingUp, value: "3x", label: "Engagement", sub: "Improved targeting" },
      { icon: Clock, value: "10min", label: "Setup Time", sub: "Per campaign" },
    ],
  },
  {
    id: "lead-enrichment",
    title: "Lead Enrichment Pipeline",
    category: "Sales Ops",
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
      { icon: Timer, value: "99%", label: "Time Saved", sub: "15min → 10sec" },
      { icon: CheckCircle2, value: "85%", label: "Enrichment", sub: "Success rate" },
      { icon: Bot, value: "0", label: "Manual Work", sub: "Fully automated" },
    ],
  },
  {
    id: "b2b-automation",
    title: "B2B Lead Automation",
    category: "Lead Qualification",
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
    category: "Sales Outreach",
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
    category: "CRM Automation",
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
    category: "AI Automation",
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

const StatGrid = ({ stats }: { stats: Stat[] }) => (
  <div className="grid grid-cols-3 gap-3">
    {stats.map((stat) => (
      <div
        key={stat.label}
        className="rounded-xl border border-border/50 bg-background/50 p-3 text-center"
      >
        <stat.icon className="mx-auto h-4 w-4 text-accent" />
        <div className="mt-2 font-heading text-xl font-bold">
          <span className="text-gradient-primary">{stat.value}</span>
        </div>
        <div className="text-[11px] font-medium text-foreground">{stat.label}</div>
        {stat.sub && <div className="text-[10px] text-muted-foreground">{stat.sub}</div>}
      </div>
    ))}
  </div>
);

const CaseBlock = ({
  icon: Icon,
  tone,
  title,
  children,
}: {
  icon: LucideIcon;
  tone: string;
  title: string;
  children: ReactNode;
}) => (
  <div>
    <h4 className="flex items-center gap-3 font-heading text-lg font-semibold text-foreground">
      <span className={cn("grid h-8 w-8 place-items-center rounded-lg", tone)}>
        <Icon className="h-4 w-4" />
      </span>
      {title}
    </h4>
    <div className="mt-3 md:pl-11">{children}</div>
  </div>
);

/* ─── Main Section ─── */
const WorksSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageOpen, setImageOpen] = useState(false);

  // Links like "#case-lead-enrichment" (e.g. from the results band) open that case study
  useEffect(() => {
    const openFromHash = () => {
      const project = projects.find((p) => window.location.hash === `#case-${p.id}`);
      if (!project) return;
      document.getElementById("works")?.scrollIntoView({ behavior: "instant" });
      setSelectedProject(project);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  const closeCaseStudy = () => {
    setSelectedProject(null);
    setImageOpen(false);
    // Clear the "#case-…" hash so the same link opens the case study again next time
    if (window.location.hash.startsWith("#case-")) {
      history.replaceState(null, "", "#works");
    }
  };

  return (
    <section id="works" className="relative py-20 md:py-24">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[150px]"
      />

      <div className="shell relative z-10">
        <SectionHeading
          index="03"
          eyebrow="Case Studies"
          title={
            <>
              Featured <span className="text-gradient-primary">Projects</span>
            </>
          }
          description="A look inside end-to-end operations systems I've built."
          className="mb-2 md:mb-4"
        />
      </div>

      <Reveal className="relative z-10">
        <ProjectCarousel items={projects} onOpen={(project) => setSelectedProject(project)} />
      </Reveal>

      {/* Case Study Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && closeCaseStudy()}>
        <DialogContent className="max-h-[90vh] max-w-3xl gap-0 overflow-y-auto border-border/60 bg-card p-0 sm:rounded-2xl">
          {selectedProject && (
            <>
              <div className="space-y-8 p-6 md:p-8">
                <DialogHeader className="space-y-3 pr-10 text-left">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {selectedProject.category}
                    </span>
                    {selectedProject.client && (
                      <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                        {selectedProject.client}
                      </span>
                    )}
                  </div>
                  <DialogTitle className="font-heading text-2xl font-bold leading-tight text-foreground md:text-3xl">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription
                    className={cn("text-base", !selectedProject.subtitle && "sr-only")}
                  >
                    {selectedProject.subtitle ?? `Case study: ${selectedProject.title}`}
                  </DialogDescription>
                </DialogHeader>

                {/* Screenshots can be very tall, so cap the preview and open the full image in a viewer */}
                <button
                  type="button"
                  onClick={() => setImageOpen(true)}
                  aria-label={`View full-size screenshot of ${selectedProject.title}`}
                  className="group/img relative block w-full overflow-hidden rounded-xl border border-border/50 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} preview`}
                    className="max-h-[420px] w-full object-cover object-top transition-transform duration-700 group-hover/img:scale-[1.02]"
                  />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-md transition-opacity duration-300 md:opacity-0 md:group-hover/img:opacity-100 md:group-focus-visible/img:opacity-100">
                    <Maximize2 className="h-3.5 w-3.5" />
                    View full size
                  </span>
                </button>
                <ImageLightbox
                  src={selectedProject.image}
                  alt={`${selectedProject.title} full-size screenshot`}
                  title={selectedProject.title}
                  open={imageOpen}
                  onOpenChange={setImageOpen}
                />

                {selectedProject.stats && <StatGrid stats={selectedProject.stats} />}

                <CaseBlock
                  icon={CircleAlert}
                  tone="bg-destructive/15 text-destructive"
                  title="The Problem"
                >
                  <p className="leading-relaxed text-muted-foreground">{selectedProject.problem}</p>
                </CaseBlock>

                <CaseBlock icon={Lightbulb} tone="bg-accent/15 text-accent" title="What I Built">
                  <p className="leading-relaxed text-muted-foreground">
                    {selectedProject.solution}
                  </p>
                  {selectedProject.steps && (
                    <ul className="mt-4 space-y-2.5">
                      {selectedProject.steps.map((step) => (
                        <li
                          key={typeof step === "string" ? step : step.label}
                          className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>
                            {typeof step === "string" ? (
                              step
                            ) : (
                              <>
                                <span className="font-semibold text-foreground">{step.label}.</span>{" "}
                                {step.text}
                              </>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {selectedProject.stepsNote && (
                    <p className="mt-4 rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-sm text-muted-foreground">
                      {selectedProject.stepsNote}
                    </p>
                  )}
                </CaseBlock>

                <CaseBlock
                  icon={TrendingUp}
                  tone="bg-primary/15 text-primary"
                  title={Array.isArray(selectedProject.results) ? "The Results" : "The Result"}
                >
                  {Array.isArray(selectedProject.results) ? (
                    <ul className="grid gap-2.5 sm:grid-cols-2">
                      {selectedProject.results.map((result) => (
                        <li
                          key={result}
                          className="rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          {result}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="leading-relaxed text-foreground/90">{selectedProject.results}</p>
                  )}
                </CaseBlock>

                <div className="flex flex-col items-start gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm">
                    <span className="font-semibold text-foreground">Need something similar?</span>{" "}
                    <span className="text-muted-foreground">Let's talk about your workflow.</span>
                  </p>
                  <Button asChild variant="neon" className="shrink-0">
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                      <CalendarDays />
                      Book a Call
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WorksSection;
