import { cn } from "@/lib/utils";

/* "JG" monogram followed by the name */
const Logo = ({ className, nameClassName }: { className?: string; nameClassName?: string }) => (
  <span className={cn("group inline-flex items-center gap-2.5", className)}>
    <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary font-heading text-sm font-bold text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.35)] transition-transform duration-300 group-hover:scale-105">
      JG
    </span>
    <span
      className={cn(
        "font-heading text-base font-semibold tracking-tight text-foreground",
        nameClassName
      )}
    >
      Jhon Gennes
    </span>
  </span>
);

export default Logo;
