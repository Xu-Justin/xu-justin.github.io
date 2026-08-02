import { link } from "@/config/link";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: link.linkedin },
  { label: "GitHub", href: link.github },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full border-b border-border bg-background/80 backdrop-blur-sm px-6 md:px-16 lg:px-24">
      <div className="flex items-center justify-between w-full max-w-400 h-14">
        <a href="#" className="flex flex-col gap-0">
          <span className="font-heading text-sm font-bold tracking-tight leading-tight">
            William Justin
          </span>
          <span className="font-mono text-xs text-muted-foreground leading-tight">
            Fullstack Engineer
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
