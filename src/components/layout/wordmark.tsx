"use client";

import Link from "next/link";

export function Wordmark() {
  return (
    <div>
        <Link href={"/"} className="font-heading text-3xl font-bold inline-flex min-h-11 items-center" aria-label="Samarth Bhosale, home">
        SB
        <span className="text-accent">.</span>
    </Link>
    </div>
  );
}