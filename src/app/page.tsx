import { Metadata } from "next";
import { Services } from "@/components/Services";
import { Presentation } from "@/components/Presentation";
import { Contatti } from "@/components/Contatti";
import { Reviews } from "@/components/Reviews";
import { Hero } from "@/components/Hero";
import { HeroDescription } from "@/components/HeroDescription";
import hero from "../../public/assets/images/home/hero-home.jpg";

export const metadata: Metadata = {
  title: "F Beautique – Trattamenti Estetici a Perdaxius",
  description:
    "Trattamenti estetici professionali a Perdaxius. Prenota ora la tua consulenza e scopri percorsi personalizzati per il tuo benessere.",
  keywords: [
    "trattamenti estetici Perdaxius",
    "centro estetico Perdaxius",
    "estetista Perdaxius",
    "cura del viso",
    "estetica base",
    "trattamenti corpo",
    "bellezza e benessere",
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
