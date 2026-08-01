import { ThemeProvider } from "@/components/theme-provider";
import { fontMono, fontSans } from "@/config/font";
import { cn } from "@/lib/utils";
import "./globals.css";

export { metadata } from "@/config/metadata";

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("antialiased", fontSans.variable, "font-mono", fontMono.variable)}>
    <body className={"flex flex-col justify-start items-start w-screen h-svh overflow-x-hidden"}>
    <ThemeProvider>
      {children}
    </ThemeProvider>
    </body>
    </html>
  );
}
