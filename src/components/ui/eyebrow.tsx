import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: React.ReactNode;
  tone?: "default" | "accent" | "muted";
  className?: string;
};

const tones = {
  default: "text-accent-2",
  accent: "text-accent",
  muted: "text-muted",
};

export function Eyebrow({ children, tone = "default", className }: EyebrowProps) {
  return <p className={cn("type-label", tones[tone], className)}>{children}</p>;
}