import { CalendarDays, CreditCard, Database, MessageSquare, Webhook, type LucideIcon } from "lucide-react";

/* Positions are percentages of the frame; the SVG uses a matching 100×50 viewBox */
const nodes: { icon: LucideIcon; label: string; x: number; y: number }[] = [
  { icon: Database, label: "CRM", x: 21, y: 24 },
  { icon: CalendarDays, label: "Calendar", x: 21, y: 60 },
  { icon: MessageSquare, label: "Slack", x: 79, y: 24 },
  { icon: CreditCard, label: "Payments", x: 79, y: 60 },
];
/* Sits above centre, clear of the fade at the bottom of the frame */
const HUB_Y = 42;

/* Stand-in artwork for the Custom Integrations service until it has its own robot image:
   four tools wired to a central API hub, with data flowing along the lines. */
const IntegrationArt = () => (
  <div
    aria-hidden="true"
    className="absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.18),transparent_65%)]"
  >
    <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] [background-size:28px_28px]" />

    <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
      {nodes.map((node) => {
        const y = node.y / 2; // percent of height → viewBox units
        const hubY = HUB_Y / 2;
        const midX = (50 + node.x) / 2;
        return (
          <path
            key={node.label}
            d={`M50 ${hubY} C ${midX} ${hubY}, ${midX} ${y}, ${node.x} ${y}`}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeOpacity="0.7"
            strokeWidth="1.5"
            strokeDasharray="2 4"
            vectorEffect="non-scaling-stroke"
            className="animate-[dash-flow_1.2s_linear_infinite]"
          />
        );
      })}
    </svg>

    {nodes.map((node) => (
      <div
        key={node.label}
        className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
        style={{ left: `${node.x}%`, top: `${node.y}%` }}
      >
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card text-foreground shadow-lg sm:h-12 sm:w-12">
          <node.icon className="h-5 w-5" />
        </span>
        <span className="label-mono hidden text-muted-foreground sm:block">{node.label}</span>
      </div>
    ))}

    <div
      className="absolute left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
      style={{ top: `${HUB_Y}%` }}
    >
      <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-[0_0_40px_hsl(var(--primary)/0.6)] sm:h-20 sm:w-20">
        <Webhook className="h-8 w-8 sm:h-9 sm:w-9" />
      </span>
      <span className="label-mono text-primary">API</span>
    </div>
  </div>
);

export default IntegrationArt;
