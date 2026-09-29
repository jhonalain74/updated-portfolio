import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { ArrowRight, BarChart3, Bot, Cable, Check, Compass, Database, Workflow, type LucideIcon } from "lucide-react";
import IntegrationArt from "@/components/IntegrationArt";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { CALENDLY_URL } from "@/lib/site";

interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  /* Robot illustration; services without one show a drawn stand-in */
  image?: string;
  description: string;
  /* What the client walks away with */
  deliverables: string[];
  tools: string[];
  /* "#case-<id>" opens that case study; an external link opens in a new tab */
  link: { href: string; text: string; external?: boolean };
}

const services: Service[] = [
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    icon: Workflow,
    image: "/images/services/workflow-automation.webp",
    description:
      "End-to-end automation in Make.com, n8n, and Apps Script that runs around the clock on its own, with error handling and Slack alerts so it holds up in production.",
    deliverables: [
      "The workflow built and running in your own accounts",
      "A recorded walkthrough of how it works",
      "Step-by-step written documentation",
    ],
    tools: ["Make.com", "n8n", "Apps Script", "Zapier"],
    link: { href: "#case-team-onboarding", text: "see it in action: Signed Contract to Day-One Access" },
  },
  {
    id: "ai-automation",
    title: "AI & LLM Automation",
    icon: Bot,
    image: "/images/services/ai-automation.webp",
    description:
      "Claude and OpenAI steps that read calls, replies, and documents, then turn them into structured data your team can act on.",
    deliverables: [
      "AI steps wired into the tools you already use",
      "Prompts and rules you can read and adjust",
      "A person signs off before anything reaches a customer",
    ],
    tools: ["Claude API", "OpenAI API", "Whisper", "Prompt Engineering"],
    link: { href: "#case-transcript-automation", text: "see it in action: Transcript Summarization" },
  },
  {
    id: "crm-revops",
    title: "CRM & RevOps Setup",
    icon: Database,
    image: "/images/services/crm-revops.webp",
    description:
      "Pipelines, stages, and fields in Close or Salesforce, organised so the data stays clean and reportable as the team grows.",
    deliverables: [
      "A map of your pipeline and fields",
      "Duplicates and messy records cleaned up",
      "Handover notes your team can follow",
    ],
    tools: ["Close CRM", "Salesforce", "Clay", "Google Sheets"],
    link: { href: "#case-post-call-form", text: "see it in action: Post-Call Form to CRM" },
  },
  {
    id: "dashboards",
    title: "Dashboards & Reporting",
    icon: BarChart3,
    image: "/images/services/dashboards.webp",
    description:
      "Looker Studio and Power BI dashboards fed straight from your real data sources, refreshing on their own and backed by a Statistics background.",
    deliverables: [
      "Dashboards that update on a schedule",
      "One trusted home for your key numbers",
      "Each metric defined in plain language",
    ],
    tools: ["Looker Studio", "Power BI", "SQL", "Python"],
    link: { href: "#case-email-dashboard", text: "see it in action: Email Campaign Dashboard" },
  },
  {
    id: "integrations",
    title: "Custom Integrations",
    icon: Cable,
    description: "Tools that don't talk to each other, connected directly through their APIs and webhooks.",
    deliverables: [
      "A connection built on each tool's own API",
      "Automatic retries, with Slack alerts when something fails",
      "Written documentation",
    ],
    tools: ["REST APIs", "Webhooks", "Python", "Make.com"],
    link: { href: "#case-instantly-to-crm", text: "see it in action: Instantly Reply to CRM" },
  },
  {
    id: "automation-audit",
    title: "Automation Audit",
    icon: Compass,
    image: "/images/services/automation-audit.webp",
    description:
      "A close look at how work really moves through your team, to find what's worth automating first.",
    deliverables: [
      "A written map of your current process",
      "A shortlist of what's worth automating",
      "A build plan with fixed scope and price",
    ],
    tools: ["Process Mapping", "Workflow Design", "Systems Thinking"],
    link: { href: CALENDLY_URL, text: "book a discovery call", external: true },
  },
];

const number = (index: number) => String(index + 1).padStart(2, "0");

const heading = {
  index: "02",
  eyebrow: "Services",
  title: (
    <>
      What I <span className="text-gradient-primary">build</span>
    </>
  ),
  description: "Automation and reporting for ops teams that want working systems, not another slide deck.",
};

/* Full detail for one service: the desktop panel, and the stacked card below lg.
   `eager` loads the image up front, for desktop panels that start hidden. */
const ServiceDetail = ({
  service,
  index,
  eager = false,
}: {
  service: Service;
  index: number;
  eager?: boolean;
}) => (
  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
    <div className="relative aspect-[16/9] overflow-hidden lg:aspect-[2/1]">
      {service.image ? (
        <img
          src={service.image}
          alt=""
          className="h-full w-full object-cover"
          loading={eager ? "eager" : "lazy"}
        />
      ) : (
        <IntegrationArt />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
      {/* The stand-in artwork already illustrates the service, so it skips the corner icon */}
      {service.image && (
        <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-background/70 text-primary backdrop-blur-md">
          <service.icon className="h-5 w-5" />
        </span>
      )}
    </div>

    <div className="flex flex-1 flex-col p-6 md:p-8">
      <span className="label-mono text-muted-foreground">
        Service {number(index)} / {number(services.length - 1)}
      </span>
      <h3 className="mt-3 font-heading text-2xl font-bold text-foreground md:text-3xl">{service.title}</h3>
      <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>

      <div className="mt-6 border-t border-border pt-5">
        <h4 className="label-mono text-primary">You get</h4>
        <ul className="mt-3 space-y-2">
          {service.deliverables.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-snug text-foreground/85">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <ul aria-label="Tools" className="mt-5 flex flex-wrap gap-2">
        {service.tools.map((tool) => (
          <li key={tool} className="chip">
            {tool}
          </li>
        ))}
      </ul>

      <a
        href={service.link.href}
        {...(service.link.external && { target: "_blank", rel: "noopener noreferrer" })}
        className="group mt-auto inline-flex w-fit items-start gap-2 pt-6 font-mono text-xs leading-relaxed text-primary"
      >
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        >
          ↗
        </span>
        <span className="underline-offset-4 group-hover:underline">{service.link.text}</span>
      </a>
    </div>
  </article>
);

const CallPrompt = () => (
  <div>
    <p className="text-sm text-muted-foreground">Not sure which one you need?</p>
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-2 inline-flex items-center gap-2 font-heading text-lg font-semibold text-foreground transition-colors hover:text-primary"
    >
      Book a 30-min call
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  </div>
);

const ServicesSection = () => {
  const [active, setActive] = useState(services[0].id);

  return (
    <section id="services" className="relative py-20 md:py-24">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]"
      />

      <div className="shell relative z-10">
        {/* Desktop: the numbered list on the left picks the service shown on the right */}
        <Tabs.Root
          value={active}
          onValueChange={setActive}
          orientation="vertical"
          className="hidden gap-12 lg:grid lg:grid-cols-[5fr_7fr] xl:gap-16"
        >
          <div className="flex flex-col">
            <SectionHeading {...heading} layout="stacked" className="md:mb-10" />

            <Reveal>
              <Tabs.List aria-label="Services" className="flex flex-col border-t border-border">
                {services.map((service, i) => (
                  <Tabs.Trigger
                    key={service.id}
                    value={service.id}
                    className="group relative flex items-center gap-5 border-b border-border py-4 pl-5 pr-3 text-left outline-none transition-colors duration-300 hover:bg-card/40 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary data-[state=active]:bg-card/70"
                  >
                    {/* Orange bar on the selected row */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-primary transition-transform duration-300 group-data-[state=active]:scale-y-100"
                    />
                    <span className="label-mono text-muted-foreground transition-colors group-data-[state=active]:text-primary">
                      {number(i)}
                    </span>
                    <span className="flex-1 font-heading text-lg font-semibold text-muted-foreground transition-colors duration-300 group-hover:text-foreground group-data-[state=active]:text-foreground xl:text-xl">
                      {service.title}
                    </span>
                    <ArrowRight className="h-4 w-4 -translate-x-2 text-primary opacity-0 transition-all duration-300 group-data-[state=active]:translate-x-0 group-data-[state=active]:opacity-100" />
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
            </Reveal>

            <Reveal delay={0.15} className="mt-10">
              <CallPrompt />
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            {services.map((service, i) => (
              <Tabs.Content
                key={service.id}
                value={service.id}
                // Kept mounted (with eager images) so switching tabs never shows a blank image
                forceMount
                className="h-full outline-none focus-visible:ring-2 focus-visible:ring-primary data-[state=inactive]:hidden data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-2 data-[state=active]:duration-500"
              >
                <ServiceDetail service={service} index={i} eager />
              </Tabs.Content>
            ))}
          </Reveal>
        </Tabs.Root>

        {/* Tablet and phone: every service as a card, nothing hidden behind a tap */}
        <div className="lg:hidden">
          <SectionHeading {...heading} />
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={0.06 * i} className="h-full">
                <ServiceDetail service={service} index={i} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 rounded-2xl border border-border bg-card/50 p-5">
            <CallPrompt />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
