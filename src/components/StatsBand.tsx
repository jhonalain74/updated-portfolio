import CountUp from "@/components/CountUp";
import { cn } from "@/lib/utils";

interface Result {
  value: number;
  prefix?: string;
  suffix?: string;
  /* Unit shown smaller after the number, e.g. "min" */
  unit?: string;
  label: string;
  link: { href: string; text: string };
}

/* Client outcomes from the case studies and résumé. "#case-<id>" links open that case study. */
const results: Result[] = [
  {
    value: 99,
    suffix: "%",
    label: "less time researching each lead, from 15 minutes to 10 seconds",
    link: { href: "#case-lead-enrichment", text: "read case study" },
  },
  {
    prefix: "~",
    value: 20,
    unit: "sec",
    label: "for every direct booking to get a confirmation text",
    link: { href: "#case-d2c-confirmation", text: "read case study" },
  },
  {
    prefix: "~",
    value: 1,
    unit: "min",
    label: "from signed contract to a new hire having every login",
    link: { href: "#case-team-onboarding", text: "read case study" },
  },
  {
    value: 5.5,
    unit: "hrs",
    label: "saved every week by automating a manual Excel report",
    link: { href: "#experience", text: "see the role" },
  },
];

/* Left padding per cell: the first column of each row lines up with the page edge */
const cellPadding = ["pl-0", "pl-5 sm:pl-8", "pl-0 lg:pl-8", "pl-5 sm:pl-8"];

const StatsBand = () => (
  <section aria-label="Results" className="relative z-10 border-y border-border bg-card text-foreground">
    <div
      aria-hidden="true"
      className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
    />
    <div className="shell">
      {/* The 1px gaps over a border-coloured background draw the dividers */}
      <ul className="grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
        {results.map((result, i) => (
          <li key={result.label} className={cn("flex flex-col bg-card py-10 pr-4 md:py-12", cellPadding[i])}>
            <p className="font-heading text-3xl font-bold leading-none tracking-tight sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
              <CountUp end={result.value} prefix={result.prefix} suffix={result.suffix} />
              {result.unit && (
                <span className="ml-1.5 text-xl text-primary sm:text-2xl md:text-3xl">{result.unit}</span>
              )}
            </p>
            <p className="mt-3 text-sm leading-snug text-muted-foreground sm:text-base md:text-lg">
              {result.label}
            </p>
            <a
              href={result.link.href}
              className="group mt-auto inline-flex w-fit items-center gap-2 pt-5 font-mono text-xs text-primary"
            >
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
              <span className="underline-offset-4 group-hover:underline">{result.link.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default StatsBand;
