import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

/* Mono section label, e.g. "02 —— What I Do" */
export const Eyebrow = ({ index, children }: { index?: string; children: ReactNode }) => (
  <span className="label-mono inline-flex items-center gap-3 text-primary">
    {index && (
      <>
        <span className="text-muted-foreground">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-primary/60" />
      </>
    )}
    {children}
  </span>
);

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /* "split": title left, description right on large screens. "stacked": everything in one column. */
  layout?: "split" | "stacked";
  className?: string;
}

/* Shared opening for every section, so they all start the same way */
const SectionHeading = ({
  index,
  eyebrow,
  title,
  description,
  layout = "split",
  className,
}: SectionHeadingProps) => (
  <Reveal
    className={cn(
      "mb-12 flex flex-col gap-5 md:mb-16",
      layout === "split" && "lg:flex-row lg:items-end lg:justify-between lg:gap-16",
      className
    )}
  >
    <div className="flex flex-col gap-4">
      <Eyebrow index={index}>{eyebrow}</Eyebrow>
      <h2 className="text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-[3.4rem]">
        {title}
      </h2>
    </div>
    {description && (
      <p
        className={cn(
          "max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg",
          layout === "split" && "lg:max-w-md lg:pb-2"
        )}
      >
        {description}
      </p>
    )}
  </Reveal>
);

export default SectionHeading;
