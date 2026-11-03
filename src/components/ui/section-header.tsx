import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/ui/eyebrow";

type SectionHeaderProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  action?: React.ReactNode;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  as: Heading = "h2",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-4 lg:mb-12 lg:flex-row lg:items-end lg:justify-between",
        className,
      )}
    >
      <div>
        {/* render <Eyebrow> only when eyebrow is provided */}
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {/* render <Heading className="type-h2 mt-3"> with the title */}
        <Heading className="type-h2 mt-3">{title}</Heading>
        {/* render the description <p className="type-lead text-muted mt-3 max-w-[560px]"> only when provided */}
        {description && (
          <p className="type-lead text-muted mt-3 max-w-[560px]">{description}</p>
        )}
      </div>
      {/* render the action only when provided */}
        {action && <div className="mt-6 lg:mt-0">{action}</div>}
    </div>
  );
}