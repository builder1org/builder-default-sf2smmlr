import { Gem, Ruler, Sparkles } from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "پارچه منتخب",
    text: "اولویت با بافت، دوام و حس لمس در پوشیدن است.",
  },
  {
    icon: Ruler,
    title: "برش دقیق",
    text: "سایزبندی شفاف و امکان تعویض طبق سیاست فروشگاه شما.",
  },
  {
    icon: Sparkles,
    title: "مشاوره استایل",
    text: "در بازدید حضوری یا تماس، ترکیب لباس‌ها را با هم پیشنهاد می‌دهیم.",
  },
] as const;

export function ValuesSection() {
  return (
    <section id="درباره" className="scroll-mt-20 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">چرا این بوتیک؟</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            این متن‌ها قابل ویرایش‌اند. داستان برند، سال تأسیس و شهر فعالیت خود را اینجا
            بنویسید تا بازدیدکنندگان با هویت واقعی فروشگاه آشنا شوند.
          </p>
        </div>
        <ul className="grid gap-8 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <li key={title} className="border border-border rounded-md p-6 bg-card">
              <Icon className="size-8 text-primary mb-4" aria-hidden />
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}