import { Heading } from "@/components/Heading";
import { SubHeading } from "@/components/SubHeading";
import { WhatsAppButton } from "@/components/WhatsappButton";
import { CallButton } from "@/components/CallButton";
import Image from "next/image";
import { Text } from "@/components/Text";
import { Hero } from "@/components/Hero";
import hero from "../../../public/assets/images/hero3.jpg";
import viso from "../../../public/assets/images/viso.jpg";

const sampleText = {
  title: "Lorem ipsum",
  firstParagraph:
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima? Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima?",
  secondParagraph:
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima? Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima?",
};

export default function page() {
  return (
    <main className="w-[full] flex flex-col items-center bg-background justify-center">
      <Hero background={hero}>
        <div className="h-full w-[40%] mx-[10%] flex flex-col justify-center gap-12">
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
      <section className="w-full bg-grayBackground py-40 flex justify-center">
        <div className="grid grid-cols-2 w-[80vw]">
          <div className="w-full flex flex-col gap-20 rounded-3xl p-10">
            <Image
              src={viso}
              alt="me"
              className="w-[90%] z-20 shadow-2xl rounded-3xl"
            />
          </div>
          <div className="flex flex-col justify-center gap-20">
            <Heading textColor="text-secondaryAccent" main={false}>
              Consulenza
            </Heading>
            <Text textColor="text-sectionBg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur ipsa, quisquam odio quibusdam suscipit enim molestias
              vitae error esse vel nulla, est dolores excepturi quia eveniet,
              dignissimos accusamus inventore nisi. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit.
            </Text>
            <div className="flex gap-6">
              <CallButton
                bgColor="bg-secondaryAccent"
                textColor="text-gray-100"
              >
                Prenota ora
              </CallButton>
              <WhatsAppButton
                bgColor="bg-secondaryAccent"
                textColor="text-gray-100"
              >
                Prenota subito
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full  py-40 flex justify-center">
        <div className="grid grid-cols-2 w-[80vw]">
          <div className="flex flex-col justify-center gap-20">
            <Heading textColor="text-sectionBg" main={false}>
              Lorem ipsum
            </Heading>
            <Text textColor="text-sectionBg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur ipsa, quisquam odio quibusdam suscipit enim molestias
              vitae error esse vel nulla, est dolores excepturi quia eveniet,
              dignissimos accusamus inventore nisi. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit.
            </Text>
            <div className="flex gap-6">
              <CallButton bgColor="bg-sectionBg" textColor="text-gray-100">
                Prenota ora
              </CallButton>
              <WhatsAppButton bgColor="bg-sectionBg" textColor="text-gray-100">
                Prenota subito
              </WhatsAppButton>
            </div>
          </div>
          <div className="w-full flex flex-col gap-20 rounded-3xl items-end">
            <Image
              src={viso}
              alt="me"
              className="w-[80%] z-20 shadow-2xl rounded-3xl"
            />
          </div>
        </div>
      </section>
      <section className="w-full bg-sectionBg flex flex-col items-center justify-center text-center py-40 gap-20">
        <h2 className="text-accent font-playfair text-5xl block w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime
          obcaecati mollitia eligendi vitae consectetur?
        </h2>
        <div className="flex gap-6">
          <CallButton bgColor="bg-accent" textColor="text-gray-100">
            Prenota ora
          </CallButton>
          <WhatsAppButton bgColor="bg-accent" textColor="text-gray-100">
            Prenota subito
          </WhatsAppButton>
        </div>
      </section>
      <section className="w-full bg-grayBackground py-40 flex justify-center">
        <div className="grid grid-cols-2 w-[80vw]">
          <div className="w-full flex flex-col gap-20 rounded-3xl p-10">
            <Image
              src={viso}
              alt="me"
              className="w-[90%] z-20 shadow-2xl rounded-3xl"
            />
          </div>
          <div className="flex flex-col justify-center gap-20">
            <Heading textColor="text-secondaryAccent" main={false}>
              Consulenza
            </Heading>
            <Text textColor="text-sectionBg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur ipsa, quisquam odio quibusdam suscipit enim molestias
              vitae error esse vel nulla, est dolores excepturi quia eveniet,
              dignissimos accusamus inventore nisi. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit.
            </Text>
            <div className="flex gap-6">
              <CallButton
                bgColor="bg-secondaryAccent"
                textColor="text-gray-100"
              >
                Prenota ora
              </CallButton>
              <WhatsAppButton
                bgColor="bg-secondaryAccent"
                textColor="text-gray-100"
              >
                Prenota subito
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full  py-40 flex justify-center">
        <div className="grid grid-cols-2 w-[80vw]">
          <div className="flex flex-col justify-center gap-20">
            <Heading textColor="text-sectionBg" main={false}>
              Lorem ipsum
            </Heading>
            <Text textColor="text-sectionBg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur ipsa, quisquam odio quibusdam suscipit enim molestias
              vitae error esse vel nulla, est dolores excepturi quia eveniet,
              dignissimos accusamus inventore nisi. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit.
            </Text>
            <div className="flex gap-6">
              <CallButton bgColor="bg-sectionBg" textColor="text-gray-100">
                Prenota ora
              </CallButton>
              <WhatsAppButton bgColor="bg-sectionBg" textColor="text-gray-100">
                Prenota subito
              </WhatsAppButton>
            </div>
          </div>
          <div className="w-full flex flex-col gap-20 rounded-3xl items-end">
            <Image
              src={viso}
              alt="me"
              className="w-[80%] z-20 shadow-2xl rounded-3xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
