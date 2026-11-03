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
        "mx-auto w-full max-w-[1200px] px-5 lg:px-10",
        fillViewport &&
          "flex min-h-[calc(100dvh-60px)] flex-col justify-center py-0 lg:min-h-[calc(100dvh-64px)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
