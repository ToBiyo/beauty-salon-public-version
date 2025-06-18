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
      <section className="w-[100vw]  bg-secondaryBg relative h-[auto] md:h-[60vh] xl:h-[80vh] flex items-center justify-center py-4">
        <div className="sm:w-[90vw] lg:w-[80vw] h-full flex flex-col md:flex-row   jutify-center">
          <div className="md:w-1/2 w-full h-auto p-5 flex items-center  justify-end lg:justify-center  md:order-2">
            <div className="w-full bg-mainBg p-8">
              <Image
                src={hero}
                alt="Hero Image"
                className="w-[100%] object-contain"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col md:items-start md:text-left justify-center gap-10 relative items-center text-center pr-8 xl:pr-32">
            <Heading textColor="text-gray-700" main={true}>
              Il tuo centro benessere, pensato per te
            </Heading>
            <SubHeading textColor="text-gray-500">
              Uno spazio in cui poterti fermare, respirare e ritrovare il tuo
              equilibrio. Ogni trattamento nasce dall’ascolto, ogni percorso è
              modellato su di te.
            </SubHeading>

            <a
              href="#services"
              className="bg-gray-700 px-5 py-3 text-white rounded-3xl front-quicksand text-sm sm:text-base md:text-base lg:text-lg"
            >
              Scopri di più
            </a>
          </div>
        </div>
      </section>
      <section className="w-full bg-grayBackground py-40 flex justify-center">
        <div className="grid grid-cols-2 w-[80vw] gap-8">
          <div className="w-full flex flex-col gap-20">
            <div className="p-8 bg-secondaryAccent/60 drop-shadow-2xl shadow-gray-700">
              <Image src={viso} alt="me" className="w-[100%] z-20 " />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-20 pl-20">
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
      <section className="w-full  py-40 flex justify-center bg-secondaryBg">
        <div className="grid grid-cols-2 w-[80vw]">
          <div className="flex flex-col justify-center gap-20 pr-20">
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
            <div className="flex gap-6">
              <CallButton bgColor="bg-gray-700" textColor="text-gray-100">
                Prenota ora
              </CallButton>
              <WhatsAppButton bgColor="bg-gray-700" textColor="text-gray-100">
                Prenota subito
              </WhatsAppButton>
            </div>
          </div>
          <div className="w-full flex flex-col gap-20  items-end">
            <div className="bg-mainBg w-auto p-8 ">
              <Image src={viso} alt="me" className="w-[100%] z-20" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-grayBackground py-40 flex justify-center">
        <div className="grid grid-cols-2 w-[80vw]">
          <div className="w-full flex flex-col gap-20 rounded-3xl p-10">
            <div className="w-full flex flex-col gap-20">
              <div className="p-8 bg-secondaryAccent/60 drop-shadow-2xl shadow-gray-700">
                <Image src={viso} alt="me" className="w-[100%] z-20 " />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-20 pl-20">
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
      <section className="w-full  py-40 flex justify-center bg-secondaryBg">
        <div className="grid grid-cols-2 w-[80vw]">
          <div className="flex flex-col justify-center gap-20 pr-20">
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
            <div className="flex gap-6">
              <CallButton bgColor="bg-gray-700" textColor="text-gray-100">
                Prenota ora
              </CallButton>
              <WhatsAppButton bgColor="bg-gray-700" textColor="text-gray-100">
                Prenota subito
              </WhatsAppButton>
            </div>
          </div>
          <div className="w-full flex flex-col gap-20  items-end">
            <div className="bg-mainBg w-auto p-8 ">
              <Image src={viso} alt="me" className="w-[100%] z-20" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
