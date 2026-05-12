const DV = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

/* Inline SVG data URIs for logos not available on devicon CDN */
const LOGOS = {
  // Power BI - yellow chart icon
  powerbi: `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="13" y="2" width="4" height="20" rx="1" fill="#F2C811"/><rect x="7" y="7" width="4" height="15" rx="1" fill="#F2C811" opacity="0.8"/><rect x="1" y="12" width="4" height="10" rx="1" fill="#F2C811" opacity="0.6"/><rect x="19" y="5" width="4" height="17" rx="1" fill="#F2C811" opacity="0.9"/></svg>')}`,
  // Looker Studio - Google blue chart
  lookerstudio: `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19h2V9H4v10zm4 0h2V5H8v14zm4 0h2v-6h-2v6zm4 0h2V9h-2v10z" fill="#4285F4"/></svg>')}`,
  // Excel - green spreadsheet
  excel: `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="#217346"/><path d="M14 2v6h6" fill="#33a867"/><text x="8" y="17" font-family="Arial" font-weight="bold" font-size="8" fill="white">X</text></svg>')}`,
  // OpenAI - white swirl
  openai: `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.998 5.998 0 0 0-3.998 2.9 6.042 6.042 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" fill="white"/></svg>')}`,
  // Claude/Anthropic
  claude: `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.308 3.616L12.478 20.94a.497.497 0 01-.957 0L6.692 3.616a.497.497 0 01.67-.584l4.638 2.2 4.638-2.2a.497.497 0 01.67.584z" fill="#D4A27F"/></svg>')}`,
  // Gemini
  gemini: `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12c.808 0 1.596-.082 2.362-.235C9.574 22.58 6 18.72 6 14c0-5.524 4.476-10 10-10 1.572 0 3.06.365 4.383 1.013A11.95 11.95 0 0012 0z" fill="#8E75B2"/><path d="M22 12c0 5.524-4.476 10-10 10-.808 0-1.596-.082-2.362-.235C14.426 22.58 18 18.72 18 14c0-5.524-4.476-10-10-10-1.572 0-3.06.365-4.383 1.013A11.95 11.95 0 0112 0c6.628 0 12 5.372 12 12z" fill="#B89FD4"/></svg>')}`,
  // Lovable - gradient heart icon
  lovable: `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FF6B35"/><stop offset="50%" stop-color="#FF385C"/><stop offset="100%" stop-color="#8B5CF6"/></linearGradient></defs><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#lg)"/></svg>')}`,
  // n8n - pink connected nodes (transparent bg)
  n8n: `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="30" r="10" fill="#EA4B71"/><circle cx="45" cy="15" r="10" fill="#EA4B71"/><circle cx="45" cy="45" r="10" fill="#EA4B71"/><circle cx="75" cy="30" r="12" fill="#EA4B71"/><circle cx="105" cy="15" r="10" fill="#EA4B71"/><circle cx="105" cy="45" r="10" fill="#EA4B71"/><line x1="25" y1="30" x2="35" y2="18" stroke="#EA4B71" stroke-width="5" stroke-linecap="round"/><line x1="25" y1="30" x2="35" y2="42" stroke="#EA4B71" stroke-width="5" stroke-linecap="round"/><line x1="55" y1="18" x2="63" y2="25" stroke="#EA4B71" stroke-width="5" stroke-linecap="round"/><line x1="55" y1="42" x2="63" y2="35" stroke="#EA4B71" stroke-width="5" stroke-linecap="round"/><line x1="87" y1="25" x2="95" y2="18" stroke="#EA4B71" stroke-width="5" stroke-linecap="round"/><line x1="87" y1="35" x2="95" y2="42" stroke="#EA4B71" stroke-width="5" stroke-linecap="round"/></svg>')}`,
  // Zapier - orange starburst (transparent bg)
  zapier: `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0l1.8 5.4L18.6 2.4l-2 5.6 5.8-.6-4.4 3.8 4.4 3.8-5.8-.6 2 5.6-4.8-3L12 22.4l-1.8-5.4-4.8 3 2-5.6-5.8.6 4.4-3.8L1.6 7.4l5.8.6-2-5.6L10.2 5.4zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 1.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" fill="#FF4F00"/></svg>')}`,
  // Airtable
  airtable: `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 2L2 6.5l9.5 4.5 9.5-4.5z" fill="#FCB400"/><path d="M12.5 12.8V22l9.5-4.5V8.5z" fill="#18BFFF"/><path d="M11.5 12.8V22L2 17.5V8.5z" fill="#F82B60"/></svg>')}`,
  // Heyreach
  heyreach: `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#6366F1"/><path d="M8 8v8M8 12h8M16 8v8" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>')}`,
  // Instantly
  instantly: `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#5B5FC7"/><path d="M13 6l-5 7h4l-1 5 5-7h-4z" fill="white"/></svg>')}`,
  // Clay
  clay: `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#4F46E5"/><text x="12" y="16" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="10" fill="white">C</text></svg>')}`,
  // Asana
  asana: `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="6" r="4" fill="#F06A6A"/><circle cx="6" cy="16" r="4" fill="#F06A6A"/><circle cx="18" cy="16" r="4" fill="#F06A6A"/></svg>')}`,
  // Discord
  discord: `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" fill="#5865F2"/></svg>')}`,
  // Telegram
  telegram: `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" fill="#26A5E4"/></svg>')}`,
  // Zoom
  zoom: `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="5" fill="#0B5CFF"/><path d="M5 8.5a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 5 13.5zm11 1l3-2v7l-3-2z" fill="white"/></svg>')}`,
  // Calendly
  calendly: `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="5" fill="#006BFF"/><path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 6v8h12v-8zm2-4v2m8-2v2" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="12" cy="14" r="2" fill="white"/></svg>')}`,
  // Apollo
  apollo: `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 80 28" xmlns="http://www.w3.org/2000/svg"><g transform="translate(12,14)"><path d="M0-8l1.8 3.6 3.8.6-2.8 2.7.7 3.9L0 1l-3.5 1.8.7-3.9-2.8-2.7 3.8-.6z" fill="#E8E44A"/></g><text x="28" y="19" font-family="Arial,sans-serif" font-weight="700" font-size="15" fill="white">Apollo</text></svg>')}`,
  // Hunter.io
  hunterio: `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11" fill="#FF6633"/><circle cx="12" cy="12" r="7" fill="none" stroke="white" stroke-width="1.5"/><circle cx="12" cy="12" r="3.5" fill="none" stroke="white" stroke-width="1.5"/><circle cx="12" cy="12" r="1" fill="white"/></svg>')}`,
  // ZoomInfo
  zoominfo: `data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11" fill="#21B573"/><text x="12" y="17" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="12" fill="white">Z</text></svg>')}`,
};

interface Tool {
  name: string;
  logo: string;
}

interface ToolGroup {
  label: string;
  tools: Tool[];
}

const toolGroups: ToolGroup[] = [
  {
    label: "LANGUAGES & ANALYTICS TOOLS",
    tools: [
      { name: "SQL", logo: `${DV}/postgresql/postgresql-original.svg` },
      { name: "Python", logo: `${DV}/python/python-original.svg` },
      { name: "Power BI", logo: LOGOS.powerbi },
      { name: "Looker Studio", logo: "/images/logos/lookerstudio.png" },
      { name: "Excel", logo: LOGOS.excel },
      { name: "GitHub", logo: `${DV}/github/github-original.svg` },
      { name: "VS Code", logo: `${DV}/vscode/vscode-original.svg` },
    ],
  },
  {
    label: "PLATFORMS & INTEGRATIONS",
    tools: [
      { name: "OpenAI", logo: LOGOS.openai },
      { name: "Claude", logo: "/images/logos/claude.png" },
      { name: "Gemini", logo: "/images/logos/gemini.png" },
      { name: "Lovable", logo: LOGOS.lovable },
      { name: "Supabase", logo: `${DV}/supabase/supabase-original.svg` },
      { name: "Make", logo: "/images/logos/make.png" },
      { name: "Zapier", logo: LOGOS.zapier },
      { name: "n8n", logo: LOGOS.n8n },
      { name: "Airtable", logo: LOGOS.airtable },
      { name: "Google Workspace", logo: `${DV}/google/google-original.svg` },
      { name: "Heyreach", logo: LOGOS.heyreach },
      { name: "Instantly", logo: LOGOS.instantly },
      { name: "Clay", logo: LOGOS.clay },
      { name: "Salesforce", logo: `${DV}/salesforce/salesforce-original.svg` },
      { name: "Asana", logo: LOGOS.asana },
      { name: "Slack", logo: `${DV}/slack/slack-original.svg` },
      { name: "Discord", logo: LOGOS.discord },
      { name: "Telegram", logo: LOGOS.telegram },
      { name: "Zoom", logo: LOGOS.zoom },
      { name: "Calendly", logo: LOGOS.calendly },
      { name: "Apollo", logo: LOGOS.apollo },
      { name: "Hunter.io", logo: "/images/logos/hunter.png" },
      { name: "ZoomInfo", logo: "/images/logos/zoominfo.png" },
    ],
  },
];

const ToolCard = ({ tool }: { tool: Tool }) => (
  <div className="group flex flex-col items-center gap-2.5 p-4 rounded-xl bg-card/60 border border-border/40 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 cursor-default">
    <img
      src={tool.logo}
      alt={tool.name}
      className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-300"
      style={{ mixBlendMode: "screen" }}
      loading="lazy"
    />
    <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center leading-tight">
      {tool.name}
    </span>
  </div>
);

const ToolsSection = () => {
  return (
    <section
      id="tools"
      className="py-24 relative"
      style={{ backgroundColor: "hsl(230 25% 8% / 0.9)" }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">
            Tools & Technologies
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Tools are selected based on reliability, scalability, and clean handoff.
          </p>
        </div>

        {/* Tool Groups */}
        <div className="max-w-5xl mx-auto space-y-10">
          {toolGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-4">
                {group.label}
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {group.tools.map((tool) => (
                  <ToolCard key={tool.name} tool={tool} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
