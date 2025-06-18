import { Services } from "@/components/Services";
import { Heading } from "@/components/Heading";
import { SubHeading } from "@/components/SubHeading";
import { Presentation } from "@/components/Presentation";
import { Contatti } from "@/components/Contatti";
import Image from "next/image";
import hero from "../../public/assets/images/half-hero.png";
import { Reviews } from "@/components/Reviews";
export default function Home() {
  return (
    <main className="flex flex-col items-center bg-mainBg ">
      <section className="w-full  bg-secondaryBg relative h-[auto] md:h-[60%] xl:h-[80%] flex items-center justify-center py-4">
        <div className="sm:w-[90%] lg:w-[80%] h-full flex flex-col md:flex-row   jutify-center ">
          <div className="md:w-1/2 w-full flex flex-col md:items-start md:text-left justify-center gap-10 relative md:order-1 order-2 items-center text-center pr-8 xl:pr-32">
            <Heading textColor="text-gray-700" main={true}>
              Dove la bellezza incontra il benessere
            </Heading>
            <SubHeading textColor="text-gray-500">
              Ogni persona è unica, e così deve essere ogni trattamento. Ritrova
              l’equilibrio tra corpo e mente con percorsi su misura, pensati per
              esaltare la tua naturale bellezza.
            </SubHeading>

            <a
              href="#services"
              className="bg-gray-700 px-5 py-3 text-white rounded-3xl front-quicksand text-sm sm:text-base md:text-base lg:text-lg"
            >
              Scopri di più
            </a>
          </div>

          <div className="md:w-1/2 w-full h-auto p-5 flex items-center  justify-end lg:justify-center md:order-2 order-1 ">
            <div className="w-full bg-mainBg p-8">
              <Image
                src={hero}
                alt="Hero Image"
                className="w-[100%] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Presentation />
      <Reviews />
      <Contatti />
    </main>
  );
}

/* */
