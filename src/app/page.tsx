import { cn } from "@/lib/cn";
import { siteConfig } from "@/content/site";
import { navItems } from "@/content/navigation";

export default function Home() {
  return (
    <main className={cn("p-4", true && "p-8")}>
      <p className="type-label text-accent-2">Frontend-focused software engineer</p>
      <h1 className="type-display">Building thoughtful interfaces for the modern web.</h1>
      <p className="type-lead text-muted">A short intro paragraph in the body font.</p>

      <h1 className="type-h2">{siteConfig.name}</h1>
      <ul>
        {navItems.map((item) => (
          <li key={item.href}>{item.label}: {item.href}</li>
        ))}
      </ul>
    </main>
  );
}