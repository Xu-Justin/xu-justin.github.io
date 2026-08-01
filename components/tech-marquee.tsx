const TECH_STACK = [
  { name: "Java", icon: "☕" },
  { name: "Kotlin", icon: "K" },
  { name: "TypeScript", icon: "TS" },
  { name: "Python", icon: "🐍" },
  { name: "C++", icon: "C++" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "React", icon: "⚛" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "PyTorch", icon: "🔥" },
  { name: "OpenCV", icon: "👁" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁" },
  { name: "MCP", icon: "◈" },
];

function TechItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2 border border-border bg-background px-5 py-3 font-mono text-sm text-muted-foreground">
      <span aria-hidden className="text-base leading-none">
        {icon}
      </span>
      <span>{name}</span>
    </div>
  )
}

export function TechMarquee() {
  const items = [...TECH_STACK, ...TECH_STACK]

  return (
    <div className="border-t border-border bg-background/80 backdrop-blur-sm py-4 overflow-hidden">
      <p className="px-6 pb-3 font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
        Tech Stack
      </p>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-3 pr-3">
          {items.map((tech, i) => (
            <TechItem key={`a-${i}`} {...tech} />
          ))}
        </div>
        <div
          aria-hidden
          className="flex animate-[marquee_30s_linear_infinite] gap-3 pr-3"
        >
          {items.map((tech, i) => (
            <TechItem key={`b-${i}`} {...tech} />
          ))}
        </div>
      </div>
    </div>
  )
}
