# DESIGN.md — بوتیک پوشاک

## 1. Brand identity

- **Name (placeholder):** بوتیک پوشاک — مشتری می‌تواند نام واقعی را جایگزین کند.
- **Industry:** فروشگاه لباس و پوشاک زنانه و مردانه.
- **Audience:** خریداران آنلاین و حضوری که به استایل مینیمال و کیفیت پارچه اهمیت می‌دهند.
- **Personality:** ظریف، مدرن، مطمئن؛ نه پرزرق‌وبرق فروشگاهی.
- **Site goal:** معرفی برند، نمایش مجموعه‌ها، هدایت به تماس یا بازدید حضوری.

## 2. Language and direction

- `lang="fa"`, `dir="rtl"`.
- Body: Vazirmatn (Google font via `next/font/google` — فونت محلی در صورت افزودن فایل به `public/fonts/` جایگزین می‌شود).

## 3. Visual direction

- **Concept:** ویرایشگاه مد — تایپوگرافی بزرگ، فضای تیره گرم، گرید نامتقارن.
- **Keywords:** زغالی، کرم، شرابی، طلایی muted، بافت پارچه‌ای، ادیتوریل.
- **Mood:** لوکس دسترس‌پذیر شبانه (accessible luxury, dark).

## 4. Color system

| Token | Role |
| --- | --- |
| Background | زغالی گرم عمیق |
| Foreground | کرم روشن |
| Primary | شرابی/بورگوندی روشن‌تر برای کنتراست روی دارک |
| Accent | هل/طلایی muted |
| Muted | خاکستری گرم برای متن ثانویه |
| Card / Border | سطوح کمی روشن‌تر از پس‌زمینه با حاشیه ملایم |

تم پیش‌فرض سایت **دارک** است (`color-scheme: dark` و کلاس `dark` روی `html`). Mapped in `app/globals.css`.

## 5. Typography

- Headings: Vazirmatn bold، scale بزرگ برای هیرو.
- Body: Vazirmatn regular، line-height راحت برای فارسی.

## 6. Layout

- Max width ~1280px برای محتوا؛ سکشن‌های full-bleed برای هیرو و لوک‌بوک.
- Header ثابت شفاف → solid on scroll (optional: simple sticky solid).
- Navigation: راست در RTL، منوی موبایل با دیالوگ/پنل.

## 7. Pages and sections

**Home (`/`):**

1. Hero — پیام برند + CTA «مشاهده مجموعه»
2. دسته‌بندی‌ها — bento grid
3. محصولات برجسته — کارت با placeholder تصویر (گرادیان بافت)
4. لوک‌بوک — اسلاید ادیتوریل افقی
5. ارزش‌ها — سه ستون (کیفیت پارچه، دوخت، مشاوره استایل)
6. تماس / خبرنامه — فرم placeholder
7. Footer — لینک‌ها و placeholder تماس

## 8. Imagery

- بدون عکس ساختگی از برندهای دیگر؛ placeholder های گرادیان + الگوی بافت.
- مشتری بعداً تصاویر واقعی در `public/images/` قرار می‌دهد.

## 9. Motion

- کم: `transition` روی hover کارت‌ها؛ بدون کتابخانه انیمیشن اضافی.

## 10. Responsive

- Mobile-first؛ منوی همبرگری زیر `md`.
- گریدها 1 → 2 → 3/4 ستون.

## 11. Content constraints

- بدون آدرس، تلفن، قیمت یا نظر مشتری ساختگی — از placeholder مثل `[شماره تماس]` استفاده شود.
- نام محصولات نمونه‌ای و عمومی (پالتو، شال، …) بدون ادعای موجودی واقعی.

## 12. Accessibility & SEO

- semantic landmarks، `aria-label` برای منو، کنتراست کافی.
- Metadata فارسی در `layout.tsx`.