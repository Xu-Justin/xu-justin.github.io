import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";

const DUMMY_PROJECTS = [
  {
    title: "AI Chat Platform",
    description:
      "A real-time conversational AI platform built with streaming responses, multi-turn context, and a clean chat interface.",
    tags: ["Next.js", "TypeScript", "Claude API", "Tailwind CSS"],
    href: "#",
  },
  {
    title: "Dev Portfolio Generator",
    description:
      "A CLI tool that scaffolds a fully customizable developer portfolio site from a simple config file.",
    tags: ["Node.js", "TypeScript", "React", "Markdown"],
    href: "#",
  },
  {
    title: "Fullstack Task Manager",
    description:
      "A collaborative task management app with real-time updates, role-based access control, and a REST API backend.",
    tags: ["React", "Express", "PostgreSQL", "WebSockets"],
    href: "#",
  },
  {
    title: "ML Model Dashboard",
    description:
      "An interactive dashboard for monitoring machine learning model performance metrics and experiment tracking.",
    tags: ["Python", "FastAPI", "React", "Recharts"],
    href: "#",
  },
  {
    title: "E-Commerce Storefront",
    description:
      "A performant e-commerce storefront with server-side rendering, cart management, and Stripe payment integration.",
    tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    href: "#",
  },
  {
    title: "Open Source CLI Toolkit",
    description:
      "A collection of developer productivity CLI utilities for automating repetitive workflows and project setup.",
    tags: ["Go", "Cobra", "Shell", "GitHub Actions"],
    href: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col items-center justify-start w-full py-16 sm:py-24 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col gap-12 sm:gap-16 w-full max-w-400">
        <SectionHeader
          label="// My Work"
          title="Featured Projects"
          subtitle="These are some of my favorite things I've built so far. Each one represents a challenge, a lesson, and a chance to turn ideas into products and something meaningful."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DUMMY_PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
