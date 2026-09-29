import { Briefcase } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

interface Role {
  title: string;
  company: string;
  meta: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  tools: string[];
}

const roles: Role[] = [
  {
    title: "Data and AI Automation Engineer",
    company: "10xDigital Solutions",
    meta: "Freelance · Remote",
    period: "Jun 2026 – Present",
    current: true,
    summary:
      "Own the reporting and automation layer for a short-term rental coaching business.",
    highlights: [
      "Executive Looker Studio dashboards for gross and net revenue, closer and setter performance, and ad-spend attribution across Google and Meta",
      "Sales automation across Make.com and n8n: booking-to-CRM sync, round-robin closer assignment, and Slack routing of booking and payment events",
      "Python audit automation reconciling 12,000+ CRM records against booking and payment evidence",
    ],
    tools: ["Looker Studio", "Make.com", "n8n", "Close CRM", "Python"],
  },
  {
    title: "AI Automation Engineer",
    company: "MultiOrigin Partners",
    meta: "Remote",
    period: "Feb 2026 – May 2026",
    summary:
      "Built AI and automation systems for lead generation, enrichment, and CRM operations for a B2B outbound team.",
    highlights: [
      "Lead generation automation for prospecting, enrichment, and CRM syncing that reduced manual work by 60%",
      "AI call transcription and insight extraction with Claude, ChatGPT, and Whisper, turning recordings into structured data",
      "Self-hosted AI and automation infrastructure on Docker, Coolify, and Cloudflare",
    ],
    tools: ["n8n", "Claude API", "OpenAI API", "Docker", "PostgreSQL"],
  },
  {
    title: "Senior Data Associate",
    company: "2X",
    meta: "Remote",
    period: "May 2025 – Jul 2026",
    summary:
      "Owned CRM data quality, lead enrichment, and campaign reporting for B2B sales and marketing teams.",
    highlights: [
      "Maintained 10,000+ Salesforce lead records at 95% data accuracy",
      "Enriched 3,000+ records, increasing enrichment coverage by 40%",
      "Built a Looker Studio email campaign dashboard consolidating 3 data sources",
    ],
    tools: ["Salesforce", "Looker Studio", "Lead Scoring"],
  },
  {
    title: "Data Analyst",
    company: "Chromelab Technologies Inc.",
    meta: "Makati",
    period: "Sep 2023 – Apr 2025",
    summary:
      "Replaced manual spreadsheet processes with governed dashboards and templated reporting.",
    highlights: [
      "Power BI dashboard across 8 vendors that cut weekly reporting from 6 hours to 30 minutes",
      "Cleaned and standardized 20,000+ records from 3 sources",
      "Excel reporting templates that cut ad-hoc report turnaround from 2 days to 3 hours",
    ],
    tools: ["Power BI", "Excel", "SQL"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-veil relative py-20 md:py-24">
      <div className="shell relative z-10">
        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.5fr] lg:gap-16">
          {/* Heading stays in view while the timeline scrolls past on large screens */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              index="04"
              eyebrow="Experience"
              layout="stacked"
              title={
                <>
                  Where I've <span className="text-gradient-primary">Worked</span>
                </>
              }
              description="Since 2023, across data analytics, CRM data operations, and AI automation."
            />
          </div>

          <ol className="relative">
            {/* Timeline rail */}
            <span
              aria-hidden="true"
              className="absolute bottom-6 left-5 top-6 w-px bg-gradient-to-b from-primary/60 via-border to-transparent"
            />
            {roles.map((role, i) => (
              <Reveal as="li" key={role.company} delay={0.05 * i} className="relative pb-6 pl-14 last:pb-0 md:pl-16">
                <span
                  className={cn(
                    "absolute left-0 top-5 grid h-10 w-10 place-items-center rounded-full border bg-card",
                    role.current
                      ? "border-primary/60 text-primary shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                      : "border-border text-muted-foreground"
                  )}
                >
                  <Briefcase className="h-4 w-4" />
                </span>

                <article className="rounded-2xl border border-border bg-card/70 p-6 transition-colors duration-300 hover:border-primary/40">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground md:text-xl">
                        {role.title}
                      </h3>
                      <p className="mt-0.5 text-sm">
                        <span className="font-medium text-primary">{role.company}</span>
                        <span className="text-muted-foreground"> · {role.meta}</span>
                      </p>
                    </div>
                    <span
                      className={cn(
                        "label-mono inline-flex w-fit shrink-0 items-center gap-2 rounded-full border px-3 py-1 tracking-[0.12em]",
                        role.current
                          ? "border-primary/30 bg-primary/10 text-primary"
                          : "border-border bg-white/[0.03] text-muted-foreground"
                      )}
                    >
                      {role.current && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                      {role.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{role.summary}</p>

                  <ul className="mt-4 space-y-2">
                    {role.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {role.tools.map((tool) => (
                      <li key={tool} className="chip">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
