function TrophyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </svg>
  );
}

const PROFESSIONAL_AWARDS = [
  {
    title: "Exceed Expectation (EE)",
    issuer: "Traveloka",
    date: "2025",
    description:
      "Rated Exceed Expectation in the 2025 performance cycle at Traveloka.",
  },
  {
    title: "Employee of the Quarter",
    issuer: "Samsung Research",
    date: "Q2 2024",
    description:
      "Consecutive quarterly recognition for sustained high performance and contributions at Samsung Research.",
  },
  {
    title: "Employee of the Quarter",
    issuer: "Samsung Research",
    date: "Q1 2024",
    description:
      "Recognized for exceptional performance and impact during Q1 2024 at Samsung Research.",
  },
];

const CP_AWARDS = [
  {
    title: "Problem Author",
    issuer: "ICPC Asia Jakarta Regional Contest",
    date: "2025",
    description:
      "Authored competitive programming problems for one of Asia's most prestigious ICPC regional contests.",
  },
  {
    title: "Problem Author",
    issuer: "Indonesia National Contest (INC)",
    date: "2024",
    description:
      "Contributed original problems to the Indonesia National Contest, a premier national-level programming competition.",
  },
];

export function AwardsSection() {
  return (
    <section className="flex flex-col items-center w-full py-24 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col gap-16 w-full max-w-400">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase">
            {"// Recognition"}
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Awards & Honors
          </h2>
          <p className="font-mono text-base text-muted-foreground max-w-2xl leading-relaxed">
            Recognition earned through consistent delivery at work and active
            contribution to the competitive programming community.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Professional */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-primary">
                <TrophyIcon />
              </span>
              <span className="font-mono text-sm tracking-[0.2em] text-muted-foreground uppercase">
                Professional
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {PROFESSIONAL_AWARDS.map(({ title, issuer, date, description }) => (
                <div
                  key={`${title}-${date}`}
                  className="flex flex-col gap-2 border border-border px-6 py-6 hover:border-primary transition-colors duration-200"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="font-heading text-base font-semibold tracking-tight">
                      {title} — {date}
                    </span>
                    <span className="font-mono text-sm text-primary">
                      {issuer}
                    </span>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Programming */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-primary">
                <PencilIcon />
              </span>
              <span className="font-mono text-sm tracking-[0.2em] text-muted-foreground uppercase">
                Competitive Programming
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {CP_AWARDS.map(({ title, issuer, date, description }) => (
                <div
                  key={`${title}-${issuer}`}
                  className="flex flex-col gap-2 border border-border px-6 py-6 hover:border-primary transition-colors duration-200"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="font-heading text-base font-semibold tracking-tight">
                      {title} — {date}
                    </span>
                    <span className="font-mono text-sm text-primary">
                      {issuer}
                    </span>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
