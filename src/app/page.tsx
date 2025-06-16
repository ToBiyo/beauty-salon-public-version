import { Hero } from "@/components/Hero";
import { Presentation } from "@/components/Presentation";
import { Services } from "@/components/Services";
import { Contatti } from "@/components/Contatti";
import { Reviews } from "@/components/Reviews";
import { Heading } from "@/components/Heading";
import { SubHeading } from "@/components/SubHeading";
import { WhatsAppButton } from "@/components/WhatsappButton";
import { CallButton } from "@/components/CallButton";
import backgroundImage from "../../public/assets/images/new.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-background">
      <Hero background={backgroundImage}>
        <div className="h-full  sm:w-[60%] lg:w-[40%] mx-[10%] flex flex-col justify-center gap-16">
          <Heading textColor="text-secondaryAccent" main={true}>
            Dove la bellezza incontra il benessere
          </Heading>
          <SubHeading textColor="text-gray-200">
            Rigenera corpo e mente con trattamenti estetici su misura. Prenota
            subito il tuo trattamento personalizzato.
          </SubHeading>

          <div className="flex gap-8">
            <WhatsAppButton
              bgColor="bg-secondaryAccent"
              textColor="text-gray-100"
            >
              Scrivici
            </WhatsAppButton>
            <CallButton bgColor="bg-secondaryAccent" textColor="text-gray-100">
              Chiama
            </CallButton>
          </div>
        </div>
      </Hero>

      <Services />
      <Presentation />
      <section className="w-[80vw] flex flex-col items-center justify-center text-center py-40 gap-20">
        <h2 className="text-sectionBg font-playfair text-4xl block w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime
          obcaecati mollitia eligendi vitae consectetur?
        </h2>
        <div className="flex gap-6">
          <CallButton bgColor="bg-sectionBg" textColor="text-gray-100">
            Prenota ora
          </CallButton>
          <WhatsAppButton bgColor="bg-sectionBg" textColor="text-gray-100">
            Prenota subito
          </WhatsAppButton>
        </div>
      </section>
      <Reviews />
      <Contatti />
    </main>
  );
}
