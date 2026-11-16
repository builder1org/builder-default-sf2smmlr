import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <p className="text-xs tracking-[0.25em] uppercase text-accent mb-4">
              فصل جدید
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] text-balance">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md">
              لباس‌هایی که هم در ویترین و هم در زندگی روزمره‌تان می‌درخشند — با پارچه‌های
              انتخاب‌شده و دوخت دقیق.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full gap-2">
                <Link href="#مجموعه">
                  مشاهده مجموعه
                  <ArrowLeft className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="#تماس">مشاوره استایل</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/5] max-h-[min(70vh,520px)] mx-auto lg:max-h-none w-full max-w-md lg:max-w-none">
              <div
                className="absolute inset-0 rounded-sm fabric-surface shadow-2xl shadow-primary/10"
                aria-hidden
              />
              <div
                className="absolute inset-4 border border-foreground/10 rounded-sm"
                aria-hidden
              />
              <div className="absolute bottom-6 start-6 end-6 bg-card/90 backdrop-blur-sm p-4 border border-border">
                <p className="text-sm font-medium">کالکشن پاییز</p>
                <p className="text-xs text-muted-foreground mt-1">تصویر فروشگاه شما اینجا قرار می‌گیرد</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute -top-24 start-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        aria-hidden
      />
    </section>
  );
}