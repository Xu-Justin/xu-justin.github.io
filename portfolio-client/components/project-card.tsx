import type { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  image?: StaticImageData | string;
}

const Wrapper = ({
  href,
  children,
}: {
  href?: string;
  children: ReactNode;
}) =>
  href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col border border-border hover:border-primary transition-colors duration-200"
    >
      {children}
    </a>
  ) : (
    <div className="group flex flex-col border border-border hover:border-primary transition-colors duration-200">
      {children}
    </div>
  );

export function ProjectCard({ title, description, tags, href, image }: ProjectCardProps) {
  return (
    <Wrapper href={href}>
      <div className="relative w-full aspect-4/3 bg-muted overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              No Preview
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:gap-4 p-6">
        <div className="flex flex-col gap-1 sm:gap-2">
          <h3 className="font-heading text-xl font-semibold tracking-tight text-pretty">
            {title}
          </h3>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed text-pretty">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-1 border border-border text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {href && (
          <span className="font-mono text-primary text-sm inline-flex items-center gap-1 transition-transform duration-200 group-hover:translate-x-1 mt-auto">
            View Project →
          </span>
        )}
      </div>
    </Wrapper>
  );
}
