const panels = [
  { title: "لایه‌لایه", body: "ترکیب بافت‌ها برای روزهای سرد" },
  { title: "پالت خنثی", body: "زغالی، کرم و لمس طلایی" },
  { title: "جزئیات", body: "دکمه، درز و آستر مهم‌اند" },
] as const;

export function LookbookSection() {
  return (
    <section className="py-16 md:py-20 border-y border-border bg-secondary text-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">لوک‌بوک</p>
        <h2 className="text-2xl sm:text-3xl font-bold max-w-lg text-balance">
          یک نگاه ادیتوریل به استایل فروشگاه شما
        </h2>
        <div className="mt-10 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {panels.map((panel, index) => (
            <div
              key={panel.title}
              className="snap-start shrink-0 w-[min(85vw,320px)] md:w-[360px] aspect-[3/4] relative rounded-sm overflow-hidden border border-border"
            >
              <div
                className="absolute inset-0 opacity-90"
                style={{
                  background: `linear-gradient(${145 + index * 40}deg, oklch(0.22 0.04 30), oklch(0.38 0.1 ${20 + index * 15}))`,
                }}
                aria-hidden
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-lg font-semibold">{panel.title}</p>
                <p className="text-sm text-foreground/80 mt-1">{panel.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          عکس‌های واقعی مدل یا ویترین را در این اسلاید جایگزین کنید.
        </p>
      </div>
    </section>
  );
}