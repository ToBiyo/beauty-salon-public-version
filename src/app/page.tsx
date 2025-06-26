import { Services } from "@/components/Services";
import { Presentation } from "@/components/Presentation";
import { Contatti } from "@/components/Contatti";
import hero from "../../public/assets/images/new.jpg";
import { Reviews } from "@/components/Reviews";
import { Hero } from "@/components/Hero";
import { HeroDescription } from "@/components/HeroDescription";

export default function Home() {
  return (
    <main className="bg-mainBg  mt-[80px]">
      <Hero bgColor="bg-secondaryBg" image={hero} order="lg:order-2 order-1">
        <HeroDescription
          title="Dove La Bellezza Incontra Il Benessere"
          subTitle="Ritrova l’equilibrio tra corpo e mente con percorsi su misura,
            pensati per esaltare la tua naturale bellezza."
          order="order-2 lg:order-1"
          showLink={true}
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
