import { Metadata } from "next";
import { Services } from "@/components/Home/Services";
import { Presentation } from "@/components/Home/Presentation";
import { Contatti } from "@/components/Home/Contatti";
import { Reviews } from "@/components/Home/Reviews";
import { Hero } from "@/components/Hero";
import { HeroDescription } from "@/components/HeroDescription";
import hero from "../../public/assets/images/home/hero-home.jpg";

export const metadata: Metadata = {
  title: "F Beautyque – Centro Estetico a Perdaxius",
  description:
    "F Beautyque è il tuo centro benessere di fiducia a Perdaxius. Trattamenti estetici professionali, consulenze personalizzate e prodotti naturali per la tua bellezza e relax.",
  keywords: [
    "trattamenti estetici Perdaxius",
    "centro estetico Perdaxius",
    "estetista Perdaxius",
    "cura del viso",
    "trattamenti corpo",
    "bellezza naturale",
    "prodotti estetici professionali",
    "benessere a Perdaxius",
    "consulenze estetiche personalizzate",
  ],
};

export default function Home() {
  return (
    <main className="bg-mainBg  mt-[80px]">
      <Hero
        bgColor="bg-secondaryBg"
        image={hero}
        order="order-first"
        alt="Trattamento viso professionale in centro estetico a Perdaxius"
      >
        <HeroDescription
          title="Trattamenti estetici professionali a Perdaxius"
          subTitle="Scopri i nostri servizi di bellezza su misura: trattamenti viso, corpo, trattamenti estetici di base personalizzati per ogni esigenza."
          order="order-2 lg:order-1"
          link={true}
        />
      </Hero>
      <Services />
      <Presentation />
      <Reviews />
      <Contatti />
    </main>
  );
}

/* 
 
*/
