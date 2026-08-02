import { BadgeIcon } from "@/components/icons";
import { SectionHeader } from "@/components/section-header";

interface Certification {
  title: string;
  issuer: string;
  description: string;
  href?: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    description:
      "Foundational certification validating cloud fluency and AWS core services knowledge.",
  },
  {
    title: "Software Professional Certified Engineer",
    issuer: "Samsung",
    description:
      "Internal Samsung certification recognizing software engineering proficiency at a professional level.",
  },
  {
    title: "IELTS Academic",
    issuer: "British Council / IDP",
    description:
      "Overall band score 7.5 / 9.0 — demonstrating proficient academic English across all four skills.",
  },
];

function CertificationCard({ title, issuer, description, href }: Certification) {
  const content = (
    <>
      <span className="text-primary">
        <BadgeIcon size={20} />
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="font-heading text-base font-semibold tracking-tight">
          {title}
        </span>
        <span className="font-mono text-sm text-primary">{issuer}</span>
      </div>
      <p className="font-mono text-sm text-muted-foreground leading-relaxed mt-auto text-pretty">
        {description}
      </p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col gap-4 border border-border px-6 py-8 hover:border-primary transition-colors duration-200"
      >
        {content}
        <span className="font-mono text-primary text-sm inline-flex items-center gap-1 transition-transform duration-200 group-hover:translate-x-1">
          View Certificate →
        </span>
      </a>
    );
  }

  return (
    <div className="group flex flex-col gap-4 border border-border px-6 py-8 hover:border-primary transition-colors duration-200">
      {content}
    </div>
  );
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="flex flex-col items-center w-full py-16 sm:py-24 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col gap-12 sm:gap-16 w-full max-w-400">
        <SectionHeader
          label="// Credentials"
          title="Certifications"
          subtitle="Industry and institutional certifications that validate my technical expertise, engineering standards, and communication skills."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {CERTIFICATIONS.map((cert) => (
            <CertificationCard key={cert.title} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
