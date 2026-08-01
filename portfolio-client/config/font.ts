import { Geist, JetBrains_Mono } from "next/font/google";

export const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});