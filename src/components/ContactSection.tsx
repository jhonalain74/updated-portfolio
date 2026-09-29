import { useState, useEffect, type ComponentType, type ReactNode } from "react";
import { ArrowUpRight, CalendarDays, Check, Clock, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/SectionHeading";
import { CALENDLY_URL, socials } from "@/lib/site";
import { cn } from "@/lib/utils";

const ROTATING_WORDS = [
  "conversation",
  "automation",
  "dashboard",
  "workflow",
  "integration",
  "insight",
];

/* What a prospect can expect from the discovery call */
const steps = [
  {
    title: "You walk me through the bottleneck",
    text: "The manual process, report, or handoff that's slowing your team down.",
  },
  {
    title: "I map where automation pays off",
    text: "Which workflows, dashboards, or AI steps would save the most time.",
  },
  {
    title: "You get a clear next step",
    text: "If it's a fit, a written plan with scope, timeline, and cost.",
  },
];

/* WhatsApp is left out here so the phone number isn't shown in the contact card */
const contactMethods = socials.filter((social) => social.label !== "WhatsApp");

const formatMakatiTime = (date: Date) =>
  new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Manila", hour: "numeric", minute: "2-digit" }).format(date);

/* Current time in Makati, refreshed every 30 seconds */
const useMakatiTime = () => {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);
  return formatMakatiTime(now);
};

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  return (
    <>
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
          } catch {
            // Clipboard blocked by the browser; the mailto link on the row still works
          }
        }}
        className="relative z-10 inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? "Copied" : "Copy"}
        <span className="sr-only"> email address</span>
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied" : ""}
      </span>
    </>
  );
};

interface ContactRowProps {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  action?: ReactNode;
}

/* One way to reach me. The link stretches over the whole row; `action` sits on top of it. */
const ContactRow = ({ icon: Icon, label, value, href, external, action }: ContactRowProps) => (
  <li className="group relative flex items-center gap-4 border-b border-border py-3.5">
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-background/60 text-primary transition-colors group-hover:border-primary/40">
      <Icon className="h-4 w-4" />
    </span>
    <div className="min-w-0 flex-1">
      <p className="label-mono text-muted-foreground">{label}</p>
      <a
        href={href}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        className="mt-0.5 block truncate text-sm font-medium text-foreground transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-primary focus-visible:outline-none focus-visible:after:rounded-lg focus-visible:after:ring-2 focus-visible:after:ring-primary"
      >
        {value}
      </a>
    </div>
    {action ?? (
      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
    )}
  </li>
);

const ContactSection = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const makatiTime = useMakatiTime();

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setIsAnimating(true);
      timeout = setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsAnimating(false);
      }, 300);
    }, 2800);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section id="contact" className="section-veil relative overflow-hidden py-20 md:py-24">
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.07] blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-accent/[0.06] blur-[120px]"
      />

      <div className="shell relative z-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/80 shadow-[0_30px_80px_-30px_hsl(var(--primary)/0.35)] backdrop-blur-md">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-[100px]"
            />

            <div className="relative grid lg:grid-cols-[1.15fr_1fr]">
              {/* Pitch and what to expect */}
              <div className="flex flex-col p-6 sm:p-8 md:p-12">
                <Eyebrow index="06">Get in Touch</Eyebrow>
                <h2 className="mt-4 text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl">
                  Book a call with me
                </h2>

                {/* The rotating word sits on its own line so changing its width never reflows the text */}
                <p className="mt-5 font-heading text-lg font-semibold leading-snug text-foreground/90 sm:text-xl md:text-2xl">
                  Your next breakthrough is one
                  <br />
                  <span
                    className={cn(
                      "inline-block text-gradient-primary transition-all duration-300",
                      isAnimating ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
                    )}
                  >
                    {ROTATING_WORDS[wordIndex]}
                  </span>{" "}
                  away.
                </p>

                <p className="mt-4 max-w-md text-muted-foreground">
                  Stop leaving revenue on the table. Let's build the systems that work while you
                  sleep.
                </p>

                <h3 className="label-mono mt-10 text-muted-foreground">What happens on the call</h3>
                <ol className="mt-4 border-t border-border">
                  {steps.map((step, i) => (
                    <li key={step.title} className="flex gap-5 border-b border-border py-4">
                      <span className="label-mono pt-1 text-primary">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <p className="font-medium text-foreground">{step.title}</p>
                        <p className="mt-0.5 text-sm text-muted-foreground">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Button asChild variant="neon" size="lg">
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                      <CalendarDays />
                      Book a Call
                    </a>
                  </Button>
                  <span className="text-sm text-muted-foreground">30 min · via Calendly</span>
                </div>
              </div>

              {/* Photo, availability, and direct contact */}
              <div className="flex flex-col border-t border-border bg-background/30 lg:border-l lg:border-t-0">
                {/* Aspect ratio crops the bottom strip of the photo, which holds a watermark */}
                <div className="relative aspect-[1024/490] overflow-hidden">
                  <img
                    src="/images/robot-contact.jpg"
                    alt="Robot on a phone call at a desk"
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="rounded-2xl border border-border bg-background/50 p-4">
                    <p className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                      Open to contract &amp; full-time roles
                    </p>
                    <p className="mt-2 flex items-center gap-2.5 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 shrink-0 text-primary" />
                      <span>
                        It's <span className="tabular-nums text-foreground">{makatiTime}</span> in Makati
                        (GMT+8) · Remote, any timezone
                      </span>
                    </p>
                  </div>

                  <h3 className="label-mono mt-8 text-muted-foreground">Or reach me directly</h3>
                  <ul className="mt-3 border-t border-border">
                    {contactMethods.map((social) => (
                      <ContactRow
                        key={social.label}
                        icon={social.icon}
                        label={social.label}
                        value={social.value}
                        href={social.href}
                        external={social.external}
                        action={social.label === "Email" ? <CopyButton text={social.value} /> : undefined}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
