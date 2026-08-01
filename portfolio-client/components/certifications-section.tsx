function BadgeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
  );
}

const CERTIFICATIONS = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    description:
      "Foundational certification validating cloud fluency and AWS core services knowledge.",
    href: undefined,
  },
  {
    title: "Software Professional Certified Engineer",
    issuer: "Samsung",
    description:
      "Internal Samsung certification recognizing software engineering proficiency at a professional level.",
    href: undefined,
  },
  {
    title: "IELTS Academic",
    issuer: "British Council / IDP",
    description:
      "Overall band score 7.5 / 9.0 — demonstrating proficient academic English across all four skills.",
    href: undefined,
  },
];

export function CertificationsSection() {
  return (
    <section className="flex flex-col items-center w-full py-24 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col gap-16 w-full max-w-400">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase">
            {"// Credentials"}
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Certifications
          </h2>
          <p className="font-mono text-base text-muted-foreground max-w-2xl leading-relaxed">
            Industry and institutional certifications that validate my technical
            expertise, engineering standards, and communication skills.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {CERTIFICATIONS.map(({ title, issuer, description, href }) => {
            const inner = (
              <>
                <span className="text-primary">
                  <BadgeIcon />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="font-heading text-base font-semibold tracking-tight">
                    {title}
                  </span>
                  <span className="font-mono text-sm text-primary">{issuer}</span>
                </div>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed mt-auto">
                  {description}
                </p>
              </>
            );

            return href ? (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 border border-border px-6 py-8 hover:border-primary transition-colors duration-200"
              >
                {inner}
                <span className="font-mono text-primary text-sm inline-flex items-center gap-1 transition-transform duration-200 group-hover:translate-x-1">
                  View Certificate →
                </span>
              </a>
            ) : (
              <div
                key={title}
                className="flex flex-col gap-4 border border-border px-6 py-8"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
