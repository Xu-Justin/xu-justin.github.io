import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";

export default function Page() {
  return (
    <main className={"flex flex-col justify-start items-start w-full h-full"}>
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
