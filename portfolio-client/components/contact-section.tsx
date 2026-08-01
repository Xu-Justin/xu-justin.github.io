import type { ComponentType } from "react";
import { EmailIcon, GithubIcon, LinkedinIcon } from "@/components/icons";
import { SectionHeader } from "@/components/section-header";
import { link } from "@/config/link";

interface ContactLink {
  label: string;
  description: string;
  action: string;
  href: string;
  Icon: ComponentType<{ size?: number }>;
}

const CONTACT_LINKS: ContactLink[] = [
  {
    label: "LinkedIn",
    description: "Let's connect professionally",
    action: "Connect",
    href: link.linkedin,
    Icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    description: "Check out my open source work",
    action: "View Profile",
    href: link.github,
    Icon: GithubIcon,
  },
  {
    label: "Email",
    description: "Send me a direct message",
    action: "Send Email",
    href: "mailto:williamjustin001@gmail.com",
    Icon: EmailIcon,
  },
];

function ContactCard({ label, description, action, href, Icon }: ContactLink) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-4 border border-border px-6 py-8 hover:border-primary transition-colors duration-200"
    >
      <span className="text-primary">
        <Icon size={24} />
      </span>
      <div className="flex flex-col gap-1">
        <span className="font-heading text-lg font-semibold tracking-tight">
          {label}
        </span>
        <span className="font-mono text-sm text-muted-foreground">
          {description}
        </span>
      </div>
      <span className="font-mono text-primary text-sm inline-flex items-center gap-1 transition-transform duration-200 group-hover:translate-x-1 mt-auto">
        {action} →
      </span>
    </a>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="flex flex-col items-center w-full py-24 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col gap-16 w-full max-w-400">
        <SectionHeader
          label="// Get In Touch"
          title="Have Something in Mind?"
          subtitle="Whether you're building a startup, exploring AI, or looking for someone to help bring an idea to life, I'd love to hear your story."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {CONTACT_LINKS.map((contact) => (
            <ContactCard key={contact.label} {...contact} />
          ))}
        </div>
      </div>
    </section>
  );
}
