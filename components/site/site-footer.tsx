import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-bold text-lg">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs">
            {siteConfig.description}
          </p>
        </div>
        <div>
          <p className="text-sm font-medium mb-3">دسترسی سریع</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium mb-3">تماس</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>تلفن: [شماره تماس]</li>
            <li>ایمیل: [ایمیل فروشگاه]</li>
            <li>آدرس: [آدرس فروشگاه]</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {year} {siteConfig.name}. تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}