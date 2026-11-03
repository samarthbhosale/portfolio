import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkediIcon";

export default function Home() {
  return (
    <Container className="space-y-6">
      <div>
        <Section
          id="hero"
          bordered={false}
          fillViewport
          className="flex flex-col"
        >
          <SectionHeader
            eyebrow="Frontend-focused software Developer"
            title="Building thoughtful interfaces for the modern web."
            description="I'm Samarth, a software developer specializing in
            React, Next.js, and TypeScript. I build responsive
            interfaces, reusable components, and web
            applications backed by practical full-stack
            experience."
          />
          <div className="flex flex-col">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-4">
              <Button href="/#work">View my work</Button>
              <Button href="/resume/Samarth-Bhosale-Resume.pdf" download variant="secondary">
                Download Resume
              </Button>
            </div>
            <div className="mx-2 flex flex-wrap gap-4 text-accent-2 font-bold">
              Get in Touch →
            </div>
            </div>
            <div className="flex flex-wrap gap-x-4 items-center">
              <span className="text-muted text-sm">
                Based in Pune, Maharashtra
              </span>
              <span className="text-accent text-sm">|</span>
              <div className="flex flex-wrap gap-2">
                <GithubIcon
                  size={64}
                  className="hover:scale-110 transition-transform"
                />
                <a href="https://github.com/samarthbhosale" target="_blank" rel="noopener noreferrer" className="flex items-center text-muted text-sm underline hover:text-foreground">
                  Github
                </a>
              </div>
              <span className="text-accent text-sm">|</span>
              <div className="flex flex-wrap gap-2">
                <LinkedinIcon
                  size={64}
                  className="hover:scale-110 transition-transform"
                />
                <a href="https://linkedin.com/in/samarthbhosale" target="_blank" rel="noopener noreferrer" className="flex items-center text-muted text-sm underline hover:text-foreground">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-wrap gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button size="sm">Small</Button>
            <Button href="/#work">Internal link</Button>
            <Button
              href="https://github.com/samarthbhosale"
              external
              variant="secondary"
            >
              External
            </Button>
            <Button
              href="/resume/Samarth-Bhosale-Resume.pdf"
              download
              variant="secondary"
            >
              Download
            </Button>
            <Button disabled>Disabled</Button>
            <Button fullOnMobile>Full on mobile</Button>
          </div> */}
        </Section>
        <Section id="work" bordered={false}>
          <SectionHeader
            eyebrow="02 — Projects"
            title="Selected Work"
            action={
              <a
                href="https://github.com/samarthbhosale"
                target="_blank"
                rel="noopener noreferrer"
              >
                All projects →
              </a>
            }
          />
          <div className="h-96" />
        </Section>

        <Section id="expertise" tone="alt">
          <SectionHeader
            eyebrow="03 — Expertise"
            title="Focused on the frontend. Fluent across the stack."
            description="A short description line."
          />
          <div className="h-96" />
        </Section>

        <Section id="contact">
          <SectionHeader eyebrow="04 — Contact" title="Get in touch." />
          <div className="h-96" />
        </Section>
      </div>
    </Container>
  );
}
