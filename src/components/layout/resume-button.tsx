import { siteConfig } from "@/content/site";
import { Button } from "../ui/button";

export function ResumeButton({ className }: { className?: string }) {
  return (
    <Button
      href={siteConfig.resume.href}
      download
      variant="secondary"
      size="sm"
      className={className}
    >
      {siteConfig.resume.label}
    </Button>
  );
}