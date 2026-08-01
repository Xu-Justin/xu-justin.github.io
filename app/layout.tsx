import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { fontMono, fontSans } from "@/config/font";
import { cn } from "@/lib/utils";

import "./globals.css";

export { metadata } from "@/config/site";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("antialiased", fontSans.variable, "font-mono", fontMono.variable)}>
    <body>
    <ThemeProvider>
      <div className={"flex min-h-svh w-full flex-col items-start justify-start overflow-x-hidden"}>
        <Header />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
    </body>
    </html>
  );
}
