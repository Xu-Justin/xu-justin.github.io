import Image from "next/image";
import type { ComponentType } from "react";
import { PencilIcon, TrophyIcon } from "@/components/icons";
import { SectionHeader } from "@/components/section-header";

interface Award {
  title: string;
  issuer: string;
  logo: string;
  logoBackground: string;
  logoClassName?: string;
  logoPadding?: string;
  date: string;
  description: string;
}

const PROFESSIONAL_AWARDS: Award[] = [
  {
    title: "Exceed Expectation (EE)",
    issuer: "Traveloka",
    logo: "/organizations/traveloka.png",
    logoBackground: "bg-white",
    logoPadding: "p-0",
    date: "2025",
    description:
      "Rated Exceed Expectation in the 2025 performance cycle at Traveloka.",
  },
  {
    title: "Employee of the Quarter",
    issuer: "Samsung Research",
    logo: "/organizations/samsung.png",
    logoBackground: "bg-black",
    logoClassName: "brightness-0 invert",
    date: "Q2 2024",
    description:
      "Consecutive quarterly recognition for sustained high performance and contributions at Samsung Research.",
  },
  {
    title: "Employee of the Quarter",
    issuer: "Samsung Research",
    logo: "/organizations/samsung.png",
    logoBackground: "bg-black",
    logoClassName: "brightness-0 invert",
    date: "Q1 2024",
    description:
      "Recognized for exceptional performance and impact during Q1 2024 at Samsung Research.",
  },
];

const CP_AWARDS: Award[] = [
  {
    title: "Problem Setter",
    issuer: "ICPC Asia Jakarta Regional Contest",
    logo: "/organizations/icpc.svg",
    logoBackground: "bg-white",
    date: "2025",
    description:
      "Authored competitive programming problems for one of Asia's most prestigious ICPC regional contests.",
  },
  {
    title: "Problem Setter",
    issuer: "Indonesia National Contest (INC)",
    logo: "/organizations/icpc.svg",
    logoBackground: "bg-white",
    date: "2024",
    description:
      "Contributed original problems to the Indonesia National Contest, a premier national-level programming competition.",
  },
];

function AwardCard({ title, issuer, logo, logoBackground, logoClassName = "", logoPadding = "p-2", date, description }: Award) {
  return (
    <div className="flex items-start gap-4 sm:gap-6 border border-border px-6 py-6 hover:border-primary transition-colors duration-200">
      <div className={`flex size-12 sm:size-14 shrink-0 items-center justify-center border border-border ${logoPadding} ${logoBackground}`}>
        <Image src={logo} alt="" width={56} height={56} className={`size-full object-contain ${logoClassName}`} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex flex-col gap-0.5">
          <span className="font-heading text-base font-semibold tracking-tight">
            {title} — {date}
          </span>
          <span className="font-mono text-sm text-primary">
            {issuer}
          </span>
        </div>
        <p className="font-mono text-sm text-muted-foreground leading-relaxed text-pretty">
          {description}
        </p>
      </div>
    </div>
  );
}

interface AwardGroupProps {
  label: string;
  Icon: ComponentType<{ size?: number }>;
  awards: Award[];
}

function AwardGroup({ label, Icon, awards }: AwardGroupProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <span className="text-primary">
          <Icon size={20} />
        </span>
        <span className="font-mono text-sm tracking-[0.2em] text-muted-foreground uppercase">
          {label}
        </span>
      </div>
      <div className="flex flex-col gap-4">
        {awards.map((award) => (
          <AwardCard key={`${award.title}-${award.date}-${award.issuer}`} {...award} />
        ))}
      </div>
    </div>
  );
}

export function AwardsSection() {
  return (
    <section id="awards" className="flex flex-col items-center w-full py-16 sm:py-24 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col gap-12 sm:gap-16 w-full max-w-400">
        <SectionHeader
          label="// Recognition"
          title="Awards & Honors"
          subtitle="Recognition earned through consistent delivery at work and active contribution to the competitive programming community."
        />
        <div className="flex flex-col gap-8 sm:gap-12">
          <AwardGroup label="Professional" Icon={TrophyIcon} awards={PROFESSIONAL_AWARDS} />
          <AwardGroup label="Competitive Programming" Icon={PencilIcon} awards={CP_AWARDS} />
        </div>
      </div>
    </section>
  );
}
