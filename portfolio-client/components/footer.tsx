import { link } from "@/config/link";

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

export function Footer() {
  return (
    <footer className="flex flex-col items-center w-full">
      <div className="flex flex-col justify-start items-center gap-6 sm:gap-8 w-full px-6 md:px-16 lg:px-24 border-t border-border py-8 sm:py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between w-full max-w-400">
          <div className="flex flex-col gap-1">
            <span className="font-heading text-lg font-bold tracking-tight">
              William Justin
            </span>
            <span className="font-mono text-sm text-muted-foreground">
              Fullstack Engineer
            </span>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Navigate
              </span>
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Social
              </span>
              <ul className="flex flex-col gap-1">
                {SOCIAL_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center gap-8 w-full px-6 md:px-16 lg:px-24 border-t border-border py-6">
        <div className="w-full flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between max-w-400">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} William Justin.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            {"// Directed by me. Built with AI."}
          </p>
        </div>
      </div>
    </footer>
  );
}
