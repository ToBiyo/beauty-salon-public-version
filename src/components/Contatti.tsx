import Image from "next/image";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import { TwoColumnsLayout } from "./TwoColumnsLayout";
import { Text } from "./Text";
import image from "../../public/assets/images/new.jpg";

export const Contatti = () => {
  return (
    <section className="flex flex-col lg:max-w-[1440px] w-[80vw]">
      <div className="mb-12 flex flex-col gap-12">
        <Heading main={false} color="cyan-700">
          Some Text
        </Heading>
        <SubHeading>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus voluptatem optio at rerum est
        </SubHeading>
      </div>
      <TwoColumnsLayout>
        <div className="flex flex-col  w-full  justify-center gap-8  rounded-s-2xl ">
          <div className="flex flex-col border-b-[1px] border-cream ">
            <h3 className="font-playfair italic text-2xl sm:text-3xl xl:text-4xl text-tortora">
              Orari
            </h3>

            <div className="flex flex-col mt-6 gap-6">
              <Text>Lunedì/Venerdì : 09:00 - 19:00</Text>
              <Text>Sabato : 09:00 - 13:00</Text>
              <Text>Domenica : Chiuso</Text>
            </div>
          </div>
          <div className="flex flex-col border-b-[1px] border-cream mt-6 ">
            <h3 className="font-playfair italic  text-2xl sm:text-3xl xl:text-4xl text-tortora">
              Contatti
            </h3>
            <div className="flex flex-col mt-6 gap-6">
              <Text>Via Nazionale, 41b, Perdaxius, (SU), Sardegna</Text>
              <Text>+39 3473976763</Text>
              <Text>+39 3473976763</Text>
            </div>
          </div>
        </div>
        <Image
          src={image}
          alt="sample image"
          width={200}
          className="w-full rounded-xl"
        />
      </TwoColumnsLayout>
    </section>
  );
};
