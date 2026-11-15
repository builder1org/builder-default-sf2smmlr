"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section id="تماس" className="scroll-mt-20 py-16 md:py-20 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">تماس و بازدید</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              برای رزرو وقت بازدید، سفارش یا پرسش درباره سایز، فرم زیر را پر کنید یا مستقیم
              تماس بگیرید.
            </p>
            <dl className="mt-8 space-y-3 text-sm">
              <div>
                <dt className="text-muted-foreground">تلفن</dt>
                <dd className="font-medium mt-0.5">[شماره تماس]</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">ساعات کاری</dt>
                <dd className="font-medium mt-0.5">[ساعات کاری فروشگاه]</dd>
              </div>
            </dl>
          </div>
          <form
            className="rounded-md border border-border bg-card p-6 sm:p-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
            aria-label="فرم تماس"
          >
            <p className="text-xs text-muted-foreground">
              ارسال فرم هنوز به سرور وصل نشده — پس از راه‌اندازی، درخواست‌ها را دریافت
              خواهید کرد.
            </p>
            <div className="space-y-2">
              <Label htmlFor="contact-name">نام</Label>
              <Input id="contact-name" name="name" placeholder="نام شما" autoComplete="name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-phone">شماره موبایل</Label>
              <Input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="۰۹۱۲..."
                dir="ltr"
                className="text-end"
                autoComplete="tel"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-message">پیام</Label>
              <Textarea
                id="contact-message"
                name="message"
                placeholder="چه کمکی از ما برمی‌آید؟"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full rounded-full">
              ارسال درخواست
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}