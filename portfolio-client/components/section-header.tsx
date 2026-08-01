interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle: string;
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase">
        {label}
      </p>
      <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>
      <p className="font-mono text-base text-muted-foreground max-w-2xl leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}
