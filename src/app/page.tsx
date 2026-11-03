import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkediIcon";
import LocationIcon from "@/components/icons/LocationIcon";

export default function Home() {
  return (
    <Container className="space-y-6">
      <Section
        id="hero"
        bordered={false}
        fillViewport
      >
        <div className="grid flex-1 grid-cols-1 items-center gap-10 px-5 sm:px-8 md:grid-cols-2 md:gap-8 lg:px-10">
          <div className="flex flex-col gap-y-6">
            <SectionHeader
              eyebrow="Frontend-focused software Developer"
              title="Building thoughtful interfaces for the modern web."
              description="I'm Samarth, a software developer specializing in
            React, Next.js, and TypeScript. I build responsive
            interfaces, reusable components, and web
            applications backed by practical full-stack
            experience."
              className=""
            />
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap gap-4">
                    <Button fullOnMobile href="/#work">View my work</Button>
                    <Button fullOnMobile href="/resume/Samarth-Bhosale-Resume.pdf" download variant="secondary">
                      Download Resume
                    </Button>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4 text-center font-bold text-accent-2 md:justify-start md:text-left">
                    Get in Touch →
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-center md:justify-start md:text-left">
                <div className="flex items-center justify-center gap-2">
                  <LocationIcon
                    size={24}
                    className="text-muted pb-2"
                  />
                  <span className="text-muted text-sm">
                    Based in Pune, Maharashtra
                  </span>
                </div>
                <span className="hidden text-accent text-sm md:inline">|</span>
                <div className="flex items-center gap-2">
                  <GithubIcon
                    size={64}
                    className="size-8 transition-transform hover:scale-110 md:size-16"
                  />
                  <a href="https://github.com/samarthbhosale" target="_blank" rel="noopener noreferrer" className="flex items-center text-muted text-sm underline hover:text-foreground">
                    Github
                  </a>
                </div>
                <span className="hidden text-accent text-sm md:inline">|</span>
                <div className="flex items-center gap-2">
                  <LinkedinIcon
                    size={64}
                    className="size-8 transition-transform hover:scale-110 md:size-16"
                  />
                  <a href="https://linkedin.com/in/samarthbhosale" target="_blank" rel="noopener noreferrer" className="flex items-center text-muted text-sm underline hover:text-foreground">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex min-w-0 items-center justify-center md:justify-end">
            <img
              src="/gifs/Data_Scraping_cropped.gif"
              alt="Scraping"
              width="400"
              height="400"
              className="h-auto w-full max-w-[480px] transition-transform hover:scale-[1.05]"
            />
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
    </Container>
  );
}
