import Link from "next/link";
import { cn } from "@/lib/cn";

type CommonProps = {
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  fullOnMobile?: boolean;
  className?: string;
  children: React.ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
  external?: boolean;
  download?: boolean;
};

type NativeButtonProps = CommonProps &
  React.ComponentProps<"button"> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg border font-semibold " +
  "transition-colors duration-200 motion-reduce:transition-none " +
  "disabled:pointer-events-none disabled:opacity-45";

const variants = {
  primary:
    "bg-accent border-accent text-on-accent hover:bg-accent-hover hover:border-accent-hover active:bg-accent-active",
  secondary:
    "border-border text-foreground hover:border-accent active:bg-surface-2",
};

const sizes = {
  md: "min-h-12 px-6 text-[15px]",
  sm: "min-h-11 px-[18px] text-sm",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", fullOnMobile, className, children } = props;

  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    fullOnMobile && "w-full lg:w-auto",
    className,
  );

  if (typeof props.href === "string") {
    const { href, external, download } = props;

    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    if (download) {
      return (
        <a href={href} download className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, fullOnMobile: _f, className: _c, children: _ch, href: _h, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}