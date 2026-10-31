import Image from "next/image";
import { SectionHeader } from "@/components/section-header";

interface Certification {
  title: string;
  issuer: string;
  logo: string;
  logoBackground?: string;
  description: string;
  href?: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    title: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    logo: "/organizations/aws.png",
    logoBackground: "bg-[#232f3e]",
    description:
      "Professional certification validating expertise in designing complex AWS architectures.",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    logo: "/organizations/aws.png",
    logoBackground: "bg-[#232f3e]",
    description:
      "Foundational certification validating cloud fluency and AWS core services knowledge.",
  },
  {
    title: "Software Professional Certified Engineer",
    issuer: "Samsung Research",
    logo: "/organizations/samsung.png",
    logoBackground: "bg-black",
    description:
      "Internal Samsung Research certification recognizing software engineering proficiency at a professional level.",
  },
  {
    title: "IELTS Academic",
    issuer: "British Council / IDP",
    logo: "/organizations/ielts.svg",
    logoBackground: "bg-[#d71920]",
    description:
      "Overall band score 7.5 / 9.0 — demonstrating proficient academic English across all four skills.",
  },
];

function CertificationCard({ title, issuer, logo, logoBackground = "bg-white", description, href }: Certification) {
  const content = (
    <>
      <div className={`flex size-12 sm:size-14 shrink-0 items-center justify-center border border-border p-2 ${logoBackground}`}>
        <Image src={logo} alt="" width={56} height={56} className="size-full object-contain brightness-0 invert" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <div className="flex flex-col gap-0.5">
          <span className="font-heading text-base font-semibold tracking-tight">
            {title}
          </span>
          <span className="font-mono text-sm text-primary">{issuer}</span>
        </div>
        <p className="font-mono text-sm text-muted-foreground leading-relaxed mt-auto text-pretty">
          {description}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-wrap items-start gap-4 sm:gap-6 border border-border px-6 py-8 hover:border-primary transition-colors duration-200"
      >
        {content}
        <span className="font-mono text-primary text-sm inline-flex items-center gap-1 transition-transform duration-200 group-hover:translate-x-1">
          View Certificate →
        </span>
      </a>
    );
  }

  return (
    <div className="group flex items-start gap-4 sm:gap-6 border border-border px-6 py-8 hover:border-primary transition-colors duration-200">
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CERTIFICATIONS.map((cert) => (
            <CertificationCard key={cert.title} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
