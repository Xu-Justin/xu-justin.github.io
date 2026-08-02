import { ButtonLink } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className={"flex flex-col items-center justify-center w-full h-full pt-14 gap-6 text-center"}>
      <div className={"flex flex-col items-center gap-2"}>
        <span className={"text-7xl font-bold tracking-tight"}>404</span>
        <h1 className={"text-2xl font-semibold"}>Page not found</h1>
        <p className={"text-muted-foreground max-w-[60ch] text-balance"}>
          The page you are looking for doesn’t exist or has been moved.
        </p>
      </div>

      <div className={"flex items-center gap-3"}>
        <ButtonLink href="/">Go home</ButtonLink>
      </div>
    </main>
  );
}
