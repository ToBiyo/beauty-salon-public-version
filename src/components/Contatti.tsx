import Image from "next/image";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import { TwoColumnsLayout } from "./TwoColumnsLayout";
import { Text } from "./Text";
import image from "../../public/assets/images/trattamento_viso.png";
import { ImLocation, ImPhone, ImWhatsapp } from "react-icons/im";

export const Contatti = () => {
  return (
    <div className="flex flex-col  w-[80vw] bg-sectionBg py-20 rounded-3xl">
      <TwoColumnsLayout>
        <div className="flex flex-col  w-full  justify-center gap-8 px-4">
          <div className="mb-10 flex flex-col gap-12">
            <Heading main={false} textColor="text-accent">
              Some Text
            </Heading>

            <SubHeading textColor="text-gray-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus voluptatem optio at rerum est
            </SubHeading>
          </div>
          <div className="flex flex-col border-b-[2px] border-dotted pb-4 border-accent ">
            <h3 className="font-playfair italic text-2xl sm:text-3xl xl:text-4xl text-accent">
              Orari
            </h3>

            <div className="flex flex-col mt-6 gap-6 text-gray-50">
              <Text>Lunedì/Venerdì : 09:00 - 19:00</Text>
              <Text>Sabato : 09:00 - 13:00</Text>
              <Text>Domenica : Chiuso</Text>
            </div>
          </div>
          <div className="flex flex-col border-b-[2px] border-dotted pb-4 border-accent">
            <h3 className="font-playfair italic  text-2xl sm:text-3xl xl:text-4xl text-accent">
              Contatti
            </h3>
            <div className="flex flex-col mt-6 gap-6 text-gray-50">
              <div className="flex gap-2 items-center ">
                <ImLocation className="text-accent text-lg" />
                <Text>Via Nazionale, 41b, Perdaxius, (SU), Sardegna</Text>
              </div>
              <div className="flex gap-2 items-center">
                <ImPhone className="text-accent text-lg" />
                <Text>+39 3473976763</Text>
              </div>
              <div className="flex gap-2 items-center">
                <ImWhatsapp className="text-accent text-lg" />
                <Text>+39 3473976763</Text>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[100%] flex items-center justify-end px-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.7252971253206!2d8.610957877307477!3d39.158229231269736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e70582d9c88301%3A0x4564050ed35c87c6!2sVia%20Nazionale%2C%2041%2C%2009010%20Perdaxius%20SU!5e0!3m2!1sit!2sit!4v1747669731279!5m2!1sit!2sit"
            className="relative w-[40vw] h-[50vh]  drop-shadow-2xl shadow-gray-700"
            loading="lazy"
          ></iframe>
        </div>
      </TwoColumnsLayout>
    </div>
  );
};
