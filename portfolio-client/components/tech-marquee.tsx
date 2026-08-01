const TECH_STACK = [
  { name: "Java", icon: "☕" },
  { name: "Kotlin", icon: "K" },
  { name: "TypeScript", icon: "TS" },
  { name: "Python", icon: "🐍" },
  { name: "C/C++", icon: undefined },
  { name: "Spring Boot", icon: "🍃" },
  { name: "React", icon: "⚛" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "PyTorch", icon: "🔥" },
  { name: "OpenCV", icon: "👁" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁" },
  { name: "MCP", icon: "◈" }
];

function TechItem({ name, icon }: { name: string; icon?: string }) {
  return (
    <div className="flex flex-row justify-start items-center gap-1.5 sm:gap-2 border border-border bg-background px-3 py-2 sm:px-5 sm:py-3 font-mono text-xs sm:text-sm text-muted-foreground">
      {icon && (
        <span aria-hidden className="text-sm sm:text-base leading-none">
          {icon}
        </span>
      )}
      <span className="whitespace-nowrap">{name}</span>
    </div>
  );
}

export function TechMarquee() {
  const items = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <div className="flex flex-col justify-start items-center border-y border-border bg-background/80 backdrop-blur-sm w-full max-w-screen overflow-hidden gap-3 sm:gap-4 pt-6 sm:pt-8 pb-3 sm:pb-4 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-400">
        <p className="font-mono text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase">
          {"// Tech Stack"}
        </p>
      </div>
      <div className="flex flex-row justify-start items-center gap-3 animate-[marquee_30s_linear_infinite]">
        {items.map((tech, i) => (
          <TechItem key={`a-${i}`} {...tech} />
        ))}
      </div>
    </div>
  );
}
