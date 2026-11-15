import { HeroSection } from "@/components/sections/hero-section";
import { CategoriesSection } from "@/components/sections/categories-section";
import { FeaturedSection } from "@/components/sections/featured-section";
import { LookbookSection } from "@/components/sections/lookbook-section";
import { ValuesSection } from "@/components/sections/values-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <FeaturedSection />
      <LookbookSection />
      <ValuesSection />
      <ContactSection />
    </main>
  );
}