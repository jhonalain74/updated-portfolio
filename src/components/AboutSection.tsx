import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/SectionHeading";
import { ROLE } from "@/lib/site";

/* What a client can count on, drawn from the résumé's reliability and documentation work */
const principles = [
  {
    title: "Built to hold up in production",
    text: "Error handling, retries, and Slack alerts, so a failed step gets flagged instead of silently dropping data.",
  },
  {
    title: "Numbers you can trust",
    text: "Deduplication, validation, and audits against source records, backed by a Statistics degree.",
  },
  {
    title: "Documented and easy to hand off",
    text: "Workflows come with documentation and version control, so your team isn't dependent on me to run them.",
  },
];

/* Industries and functions from the résumé */
const industries = [
  "Short-term rental coaching",
  "B2B lead gen & outbound",
  "Sales & revenue ops",
  "Product analytics",
  "Customer support ops",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-veil relative py-20 md:py-24">
      <div className="shell">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Robot card — stays in view on large screens while the text beside it scrolls */}
          <Reveal className="lg:sticky lg:top-28">
            <figure className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-gradient-primary opacity-15 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[0_24px_70px_-20px_hsl(var(--primary)/0.35)]">
                {/* Aspect ratio crops the bottom strip of the image, which holds a watermark */}
                <div className="relative aspect-[1024/790] overflow-hidden">
                  <img
                    src="/images/robot-dashboard.jpg"
                    alt="AI robot presenting a Key Performance Insights dashboard"
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-card to-transparent" />
                </div>

                <figcaption className="border-t border-border px-6 py-5">
                  <p className="label-mono min-w-0 text-primary">{ROLE}</p>
                </figcaption>
              </div>
            </figure>
          </Reveal>

          {/* Story and how I work */}
          <div>
            <Reveal>
              <Eyebrow index="01">About Me</Eyebrow>
              <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-[3.4rem]">
                Hi, I'm <span className="text-gradient-primary">Jhon</span>{" "}
                <span className="inline-block origin-[70%_70%] animate-[wave_2.5s_ease-in-out_infinite]">
                  👋
                </span>
              </h2>

              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  I have a <span className="font-medium text-foreground">Statistics background</span>. I
                  started as a data analyst, replacing manual spreadsheet reporting with dashboards,
                  then moved into CRM data operations and, from there, automation.
                </p>
                <p>
                  Today I build the systems behind{" "}
                  <span className="font-medium text-foreground">sales and revenue teams</span>:
                  automations that keep bookings, CRM, and payments in sync,{" "}
                  <span className="font-medium text-primary">AI workflows</span> that turn call
                  recordings into structured data, and dashboards that show leaders what's actually
                  happening.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="label-mono mt-10 text-muted-foreground">How I work</h3>
              <ol className="mt-4 border-t border-border">
                {principles.map((principle, i) => (
                  <li key={principle.title} className="flex gap-5 border-b border-border py-4">
                    <span className="label-mono pt-1 text-primary">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="font-medium text-foreground">{principle.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{principle.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.15}>
              <h3 className="label-mono mt-8 text-muted-foreground">Worked across</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                {industries.map((industry, i) => (
                  <span key={industry} className="inline-block whitespace-nowrap">
                    {industry}
                    {i < industries.length - 1 && (
                      <span aria-hidden="true" className="mx-2 text-primary">
                        /
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
