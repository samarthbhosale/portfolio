import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  fillViewport?: boolean;
};

export function Container({
  children,
  className,
  fillViewport = false,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1200px]",
        fillViewport &&
          "flex min-h-[calc(100dvh-60px)] flex-col justify-between py-12 lg:min-h-[calc(100dvh-64px)] lg:py-20",
        className,
      )}
    >
      {children}
    </div>
  );
}
