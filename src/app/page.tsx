import { cn } from "@/lib/cn";
import { siteConfig } from "@/content/site";
import { navItems } from "@/content/navigation";
import { Container } from "@/components/ui/container";
import { Wordmark } from "@/components/layout/wordmark";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Container className="space-y-6 py-10">
      <div className="flex flex-wrap gap-4">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button size="sm">Small</Button>
        <Button href="/#work">Internal link</Button>
        <Button href="https://github.com/samarthbhosale" external variant="secondary">External</Button>
        <Button href="/resume/Samarth-Bhosale-Resume.pdf" download variant="secondary">Download</Button>
        <Button disabled>Disabled</Button>
        <Button fullOnMobile>Full on mobile</Button>
      </div>

      <div className={cn("p-4", true && "p-8")}>
        <p className="type-label text-accent-2">Frontend-focused software engineer</p>
        <h1 className="type-display">Building thoughtful interfaces for the modern web.</h1>
        <p className="type-lead text-muted">A short intro paragraph in the body font.</p>

        <h1 className="type-h2">{siteConfig.name}</h1>
      </div>
    </Container>

  );
}