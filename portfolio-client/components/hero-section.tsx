import { BackgroundGrid } from "@/components/background-grid";
import { TechMarquee } from "@/components/tech-marquee";
import { ButtonLink } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { link } from "@/config/link";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-start w-full relative">
      <BackgroundGrid />
      <div className="flex flex-row justify-center items-center w-full py-16 lg:py-24 px-6 md:px-16 lg:px-24">
        <div className="flex flex-col gap-6 sm:gap-8 w-full max-w-400">
          <div className="flex flex-col gap-3 sm:gap-4">
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              William Justin
            </h1>
            <p className="font-mono text-base text-muted-foreground sm:text-xl">
              Fullstack Engineer
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <ButtonLink
              href={link.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="gap-2 px-6 py-3 font-mono text-sm rounded-none hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <LinkedinIcon />
              View LinkedIn
            </ButtonLink>
            <ButtonLink
              href={link.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="gap-2 px-6 py-3 font-mono text-sm rounded-none hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <GithubIcon />
              View GitHub
            </ButtonLink>
          </div>
        </div>
      </div>

      <TechMarquee />
    </section>
  );
}
