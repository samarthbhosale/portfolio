import { navItems } from "@/content/navigation";
import { Container } from "@/components/ui/container";
import { NavLinks } from "@/components/layout/nav-links";
import { ResumeButton } from "@/components/layout/resume-button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Wordmark } from "@/components/layout/wordmark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <Container>
        <div className="flex h-[60px] items-center justify-between lg:h-16">
          <Wordmark />
          <NavLinks items={navItems} />
          <div className="flex items-center gap-3">
            <ResumeButton className="hidden lg:inline-flex" />
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
