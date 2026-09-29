import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  prefix?: string;
  suffix?: string;
  /* Milliseconds to wait after the number scrolls into view */
  delay?: number;
  duration?: number;
}

/* Counts from 0 to `end` the first time it scrolls into view. Screen readers get the final value. */
const CountUp = ({ end, prefix = "", suffix = "", delay = 0, duration = 1400 }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  // Keep as many decimal places as `end` has, so 5.5 counts 0.0 → 5.5
  const decimals = (String(end).split(".")[1] ?? "").length;
  const format = (n: number) =>
    n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }

    let frame = 0;
    let timeout: ReturnType<typeof setTimeout>;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        setValue(end * (1 - Math.pow(1 - t, 3))); // ease-out
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        timeout = setTimeout(run, delay);
      }
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [end, delay, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden="true">
        {prefix}
        {format(value)}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {format(end)}
        {suffix}
      </span>
    </span>
  );
};

export default CountUp;
