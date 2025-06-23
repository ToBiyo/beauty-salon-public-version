import { Heading } from "@/components/Heading";
import { SubHeading } from "@/components/SubHeading";
import { WhatsAppButton } from "@/components/WhatsappButton";
import { CallButton } from "@/components/CallButton";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Text } from "@/components/Text";
import hero from "../../../public/assets/images/hero3.jpg";
import viso from "../../../public/assets/images/viso.jpg";
import { TwoColumnsLayout } from "@/components/TwoColumnsLayout";
import { DecorateImage } from "@/components/DecorateImage";

export default function page() {
  return (
    <main className="w-[full] flex flex-col items-center bg-background justify-center mt-[80px]">
      <Hero bgColor="bg-secondaryBg" image={hero} order="lg:order-2 order-1">
        <div className="lg:w-1/2 w-full flex flex-col lg:items-start lg:text-left justify-center gap-5 relative items-center text-center  lg:order-1 order-2">
          <Heading textColor="text-gray-700" main={true}>
            Il tuo centro benessere, pensato per te
          </Heading>
          <SubHeading textColor="text-gray-500">
            Ogni trattamento nasce dall’ascolto, ogni percorso è modellato su di
            te.
          </SubHeading>

          <a
            href="#services"
            className="bg-gray-700 px-5 py-3 text-white rounded-3xl front-quicksand text-sm sm:text-base md:text-base lg:text-lg"
          >
            Scopri di più
          </a>
        </div>
      </Hero>
      <section className="w-full bg-white py-20 xl:py-32 flex justify-center">
        <TwoColumnsLayout>
          <DecorateImage background="bg-secondaryAccent/30" imageSrc={viso} />

          <div className="flex flex-col justify-center gap-5 items-center text-center lg:items-start lg:text-left">
            <Heading textColor="text-gray-700" main={false}>
              Consulenza
            </Heading>
            <Text textColor="text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur ipsa, quisquam odio quibusdam suscipit enim molestias
              vitae error esse vel nulla, est dolores excepturi quia eveniet,
              dignissimos accusamus inventore nisi. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit.
            </Text>
            <div className="flex gap-6 mt-2">
              <CallButton bgColor="bg-gray-700" textColor="text-gray-100">
                Prenota ora
              </CallButton>
              <WhatsAppButton bgColor="bg-gray-700" textColor="text-gray-100">
                Prenota subito
              </WhatsAppButton>
            </div>
          </div>
        </TwoColumnsLayout>
      </section>
      <section className="w-full  py-20 xl:py-32 flex justify-center bg-secondaryAccent/30">
        <TwoColumnsLayout>
          <div className="flex flex-col justify-center gap-5 order-last items-center text-center lg:text-left lg:items-start lg:order-first">
            <Heading textColor="text-gray-700" main={false}>
              Lorem ipsum
            </Heading>
            <Text textColor="text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur ipsa, quisquam odio quibusdam suscipit enim molestias
              vitae error esse vel nulla, est dolores excepturi quia eveniet,
              dignissimos accusamus inventore nisi. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit.
            </Text>
            <div className="flex gap-6 mt-2">
              <CallButton bgColor="bg-gray-700" textColor="text-gray-100">
                Prenota ora
              </CallButton>
              <WhatsAppButton bgColor="bg-gray-700" textColor="text-gray-100">
                Prenota subito
              </WhatsAppButton>
            </div>
          </div>
          <DecorateImage imageSrc={viso} background="bg-white" />
        </TwoColumnsLayout>
      </section>

      <section className="w-full bg-white py-20 xl:py-32 flex justify-center">
        <TwoColumnsLayout>
          <DecorateImage imageSrc={viso} background="bg-secondaryBg" />
          <div className="flex flex-col justify-center gap-5 items-center text-center lg:text-left lg:items-start">
            <Heading textColor="text-gray-700" main={false}>
              Consulenza
            </Heading>
            <Text textColor="text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur ipsa, quisquam odio quibusdam suscipit enim molestias
              vitae error esse vel nulla, est dolores excepturi quia eveniet,
              dignissimos accusamus inventore nisi. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit.
            </Text>
            <div className="flex gap-6 mt-2">
              <CallButton bgColor="bg-gray-700" textColor="text-gray-100">
                Prenota ora
              </CallButton>
              <WhatsAppButton bgColor="bg-gray-700" textColor="text-gray-100">
                Prenota subito
              </WhatsAppButton>
            </div>
          </div>
        </TwoColumnsLayout>
      </section>
      <section className="w-full  py-20 xl:py-32 flex justify-center bg-secondaryBg">
        <TwoColumnsLayout>
          <div className="flex flex-col justify-center gap-5 items-center text-center order-last lg:order-first lg:text-left lg:items-start">
            <Heading textColor="text-gray-700" main={false}>
              Lorem ipsum
            </Heading>
            <Text textColor="text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur ipsa, quisquam odio quibusdam suscipit enim molestias
              vitae error esse vel nulla, est dolores excepturi quia eveniet,
              dignissimos accusamus inventore nisi. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit.
            </Text>
            <div className="flex gap-6 mt-2">
              <CallButton bgColor="bg-gray-700" textColor="text-gray-100">
                Prenota ora
              </CallButton>
              <WhatsAppButton bgColor="bg-gray-700" textColor="text-gray-100">
                Prenota subito
              </WhatsAppButton>
            </div>
          </div>
          <DecorateImage imageSrc={viso} background="bg-white" />
        </TwoColumnsLayout>
      </section>
    </main>
  );
}
