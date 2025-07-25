import { Mission } from "@/components/About/Mission";
import { HeroDescription } from "@/components/HeroDescription";
import { Hero } from "@/components/Hero";
import { ProductSection } from "@/components/About/ProductSection";
import { AboutMe } from "@/components/About/AboutMe";
import { Place } from "@/components/About/Place";
import hero from "../../../public/assets/images/about/about-hero.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi Siamo – F Beautyque, Centro Estetico a Perdaxius",
  description:
    "Conosci Francesca e la filosofia di F Beautyque: esperienza, accoglienza e trattamenti su misura per valorizzare la tua bellezza naturale.",
  keywords: [
    "chi siamo F Beautyque",
    "estetista Francesca Perdaxius",
    "filosofia centro estetico",
    "bellezza personalizzata",
    "centro benessere a misura di persona",
    "professionalità estetica",
    "team F Beautyque",
  ],
};

export default function page() {
  return (
    <main className="flex flex-col items-center bg-background relative mt-[80px]">
      {/* Hero section */}
      <Hero
        bgColor="bg-secondaryBg"
        image={hero}
        order="order-first lg:order-last"
        alt="Trattamento viso professionale centro estetico Perdaxius - estetista qualificata Sud Sardegna"
      >
        <HeroDescription
          title="F Beautyque - Il tuo centro benessere"
          subTitle="Il tuo centro benessere di fiducia a Perdaxius. Trattamenti estetici professionali, consulenza personalizzata e cura della bellezza naturale per ritrovare il tuo equilibrio"
          order="order-2"
          callToAction={true}
        />
      </Hero>
      {/* About me section */}
      <AboutMe />
      {/* About our mission */}
      <Mission />
      {/* Products line */}
      <ProductSection />
      {/* About our beauty center */}
      <Place />
    </main>
  );
}
