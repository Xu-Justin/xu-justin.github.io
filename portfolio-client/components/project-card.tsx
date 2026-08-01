import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  image?: StaticImageData | string;
}

export function ProjectCard({ title, description, tags, href, image }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-4 border border-border hover:border-primary transition-colors duration-200">
      <div className="relative w-full aspect-video bg-muted overflow-hidden">
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

      <div className="flex flex-col gap-4 p-6 pt-2">
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-xl font-semibold tracking-tight">
            {title}
          </h3>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
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
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-auto self-start font-mono text-sm text-primary underline-offset-4 hover:underline"
          >
            View Project{" "}
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        )}
      </div>
    </div>
  );
}
