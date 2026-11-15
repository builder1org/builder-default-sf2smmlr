import { Button } from "@/components/ui/button";

const products = [
  { name: "پالتو کرکی بافت‌دار", note: "پارچه پشم‌آلپاکا" },
  { name: "بلوز ابریشمی گشاد", note: "رنگ‌های خنثی" },
  { name: "شلوار خط‌دار کلاسیک", note: "برش ارتفاع بلند" },
  { name: "شال نخی دست‌بافت", note: "لبه‌ی روان" },
] as const;

export function FeaturedSection() {
  return (
    <section id="مجموعه" className="scroll-mt-20 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">مجموعه منتخب</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              نمونه‌های نمایشی — قیمت و موجودی را با اطلاعات واقعی جایگزین کنید.
            </p>
          </div>
          <Button variant="outline" className="rounded-full shrink-0" type="button" disabled>
            مشاهده همه (به‌زودی)
          </Button>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <li key={product.name}>
              <article className="group">
                <div
                  className="aspect-[3/4] rounded-md border border-border overflow-hidden relative fabric-surface transition-transform group-hover:-translate-y-1 duration-300"
                >
                  <span className="absolute top-3 start-3 text-[10px] tracking-widest uppercase bg-card/80 px-2 py-1 border border-border">
                    نمونه {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-medium text-sm">{product.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{product.note}</p>
                <p className="text-xs text-muted-foreground mt-2">قیمت: [تماس بگیرید]</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}