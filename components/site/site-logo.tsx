import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteLogo() {
  return (
    <Link
      href="/"
      className="group inline-flex flex-col gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
    >
      <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
        {siteConfig.name}
      </span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground hidden sm:block">
        boutique
      </span>
    </Link>
  );
}