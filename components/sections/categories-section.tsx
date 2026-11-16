import Link from "next/link";

const categories = [
  {
    id: "کت-و-پالتو",
    title: "کت و پالتو",
    hint: "لایه‌بندی زمستانه",
    span: "md:col-span-2 md:row-span-2",
    tone: "from-[oklch(0.32_0.05_25)] to-[oklch(0.22_0.08_15)]",
  },
  {
    id: "پیراهن",
    title: "پیراهن و بلوز",
    hint: "برش تمیز",
    span: "",
    tone: "from-[oklch(0.3_0.03_85)] to-[oklch(0.22_0.03_70)]",
  },
  {
    id: "شلوار",
    title: "شلوار و دامن",
    hint: "فرم مدرن",
    span: "",
    tone: "from-[oklch(0.3_0.04_50)] to-[oklch(0.22_0.05_40)]",
  },
  {
    id: "اکسسوری",
    title: "اکسسوری",
    hint: "جزئیات مهم‌اند",
    span: "md:col-span-2",
    tone: "from-[oklch(0.32_0.06_75)] to-[oklch(0.24_0.08_60)]",
  },
] as const;

export function CategoriesSection() {
  return (
    <section id="دسته‌بندی" className="scroll-mt-20 bg-secondary/40 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">دسته‌بندی‌ها</h2>
            <p className="mt-2 text-muted-foreground text-sm max-w-md">
              هر بخش را مطابق موجودی واقعی فروشگاه خودتان نام‌گذاری و پر کنید.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(140px,auto)] gap-3 md:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href="#مجموعه"
              className={`group relative overflow-hidden rounded-md border border-border bg-card p-6 flex flex-col justify-end min-h-[140px] transition-shadow hover:shadow-lg ${cat.span}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.tone} opacity-60 group-hover:opacity-80 transition-opacity`}
                aria-hidden
              />
              <div className="relative">
                <h3 className="text-lg font-semibold">{cat.title}</h3>
                <p className="text-xs text-foreground/70 mt-1">{cat.hint}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}