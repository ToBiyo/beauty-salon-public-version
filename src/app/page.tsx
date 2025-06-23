import { Services } from "@/components/Services";
import { Heading } from "@/components/Heading";
import { SubHeading } from "@/components/SubHeading";
import { Presentation } from "@/components/Presentation";
import { Contatti } from "@/components/Contatti";
import hero from "../../public/assets/images/half-hero.png";
import { Reviews } from "@/components/Reviews";
import { Hero } from "@/components/Hero";
export default function Home() {
  return (
    <main className="bg-mainBg  mt-[80px]">
      <Hero bgColor="bg-secondaryBg" image={hero} order="lg:order-2 order-1">
        <div className="lg:w-1/2 w-full flex flex-col order-2 lg:order-2 justify-center items-center text-center gap-5 md:gap-8 lg:justify-start lg:items-start lg:text-left">
          <Heading textColor="text-gray-700" main={true}>
            Dove la bellezza incontra il benessere
          </Heading>
          <SubHeading textColor="text-gray-500">
            Ritrova l’equilibrio tra corpo e mente con percorsi su misura,
            pensati per esaltare la tua naturale bellezza.
          </SubHeading>

          <a
            href="#services"
            className="bg-gray-700 px-5 py-3 text-white rounded-3xl front-quicksand text-sm sm:text-base md:text-base lg:text-lg"
          >
            Scopri di più
          </a>
        </div>
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
