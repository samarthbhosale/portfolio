"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/types/content";

export function NavLinks({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  function isActive(item: NavItem) {
    // return true for Home on "/" and for Projects on "/projects/..."
    if (item.href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(item.href);
  }

  return (
    <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={isActive(item) ? "page" : undefined}
          className={cn(
            "inline-flex min-h-11 items-center border-b-2 border-transparent text-sm text-muted transition-colors hover:text-foreground",
            isActive(item) && "border-accent text-foreground",
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
