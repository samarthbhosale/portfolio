import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samarth Bhosale — Frontend-Focused Software Engineer",
  description:
    "Software developer specializing in React, Next.js, and TypeScript. I build responsive interfaces, reusable components, and web applications backed by practical full-stack experience.",
  keywords: ["Frontend", "Software Engineer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Samarth Bhosale" }],
  creator: "Samarth Bhosale",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F8FB" },
    { media: "(prefers-color-scheme: dark)", color: "#090B11" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SkipLink />
          <SiteHeader />
          <main id="main">{children}</main>
        </ThemeProvider>
        <Analytics />
      </body>
      <Analytics />
    </html>

  );
}
