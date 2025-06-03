import Image from "next/image";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import { TwoColumnsLayout } from "./TwoColumnsLayout";
import { Text } from "./Text";
import image from "../../public/assets/images/trattamento_viso.png";
import { ImLocation, ImPhone, ImWhatsapp } from "react-icons/im";

export const Contatti = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-cyan-800 py-20">
      <section className="flex flex-col  w-[80vw]">
        <div className="mb-40 flex flex-col gap-12">
          <Heading main={false} color="tortora">
            Some Text
          </Heading>
          <div className="max-w-[50%]">
            <SubHeading textColor="tetx-gray-50">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus voluptatem optio at rerum est
            </SubHeading>
          </div>
        </div>
        <TwoColumnsLayout>
          <div className="flex flex-col  w-full  justify-center gap-8  rounded-s-2xl ">
            <div className="flex flex-col border-b-[2px] border-dotted pb-4 border-tortora ">
              <h3 className="font-playfair italic text-2xl sm:text-3xl xl:text-4xl text-tortora">
                Orari
              </h3>

              <div className="flex flex-col mt-6 gap-6 text-gray-50">
                <Text>Lunedì/Venerdì : 09:00 - 19:00</Text>
                <Text>Sabato : 09:00 - 13:00</Text>
                <Text>Domenica : Chiuso</Text>
              </div>
            </div>
            <div className="flex flex-col border-b-[2px] border-dotted pb-4 border-tortora">
              <h3 className="font-playfair italic  text-2xl sm:text-3xl xl:text-4xl text-tortora">
                Contatti
              </h3>
              <div className="flex flex-col mt-6 gap-6 text-gray-50">
                <div className="flex gap-2 items-center ">
                  <ImLocation className="text-tortora text-lg" />
                  <Text>Via Nazionale, 41b, Perdaxius, (SU), Sardegna</Text>
                </div>
                <div className="flex gap-2 items-center">
                  <ImPhone className="text-tortora text-lg" />
                  <Text>+39 3473976763</Text>
                </div>
                <div className="flex gap-2 items-center">
                  <ImWhatsapp className="text-tortora text-lg" />
                  <Text>+39 3473976763</Text>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={image}
            alt="sample image"
            width={200}
            className="w-full rounded-xl drop-shadow-lg shadow-gray-800"
          />
        </TwoColumnsLayout>
      </section>
    </div>
  );
};
