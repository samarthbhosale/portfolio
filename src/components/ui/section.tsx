import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";

type SectionProps = {
  id?: string;
  tone?: "default" | "alt";
  bordered?: boolean;
  fillViewport?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Section({
  id,
  tone = "default",
  bordered = true,
  fillViewport = false,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "",
        fillViewport && "py-0",
        tone === "alt" && "bg-background-alt",
        bordered && "border-t",
        className,
      )}
    >
      <Container fillViewport={fillViewport}>{children}</Container>
    </section>
  );
}