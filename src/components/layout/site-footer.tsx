import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Wordmark } from "@/components/layout/wordmark";
import { footerLinks } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col items-start gap-6 py-8 lg:flex-row lg:items-center lg:justify-between">
          <Wordmark />
          <p className="type-small text-muted">
            © {year} {siteConfig.name}
          </p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6">
            {/* map over footerLinks and render one Link per item */}
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
