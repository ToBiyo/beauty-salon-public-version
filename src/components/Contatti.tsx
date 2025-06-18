import { Heading } from "./Heading";
import { Text } from "./Text";
import {
  ImCalendar,
  ImLocation,
  ImPhone,
  ImWhatsapp,
  ImClock,
  ImCross,
  ImAddressBook,
} from "react-icons/im";

export const Contatti = () => {
  return (
    <section className="w-full h-[auto] bg-none flex flex-col items-center justify-center py-40 gap-28 relative bg-secondaryBg">
      <div className="relative z-20">
        <Heading main={false} textColor="text-secondaryAccent">
          Dove e quando trovarci
        </Heading>
      </div>

      <div className="max-w-[90%] min-h-[30vh] flex flex-col lg:flex-row gap-24 lg:gap-10 justify-center items-center  lg:justify-between p-10 bg-secondaryBg">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center h-full text-center ">
          <div className="flex  gap-4">
            <ImCalendar className="text-secondaryAccent text-5xl" />
            <h3 className="font-playfair text-5xl text-sectionBg mb-8">
              Orari
            </h3>
          </div>

          <div className="flex flex-col mt-6 gap-5 text-sectionBg items-center">
            <div className="flex gap-2 items-center ">
              <ImClock className="text-secondaryAccent text-xl" />
              <Text textColor="text-black">Lunedì/Venerdì : 09:00 - 19:00</Text>
            </div>
            <div className="flex gap-2 items-center ">
              <ImClock className="text-secondaryAccent text-xl" />
              <Text textColor="text-black">Sabato : 09:00 - 13:00</Text>
            </div>
            <div className="flex gap-2 items-center ">
              <ImCross className="text-secondaryAccent text-xl" />
              <Text textColor="text-black">Domenica : Chiuso</Text>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="flex  gap-4">
            <ImAddressBook className="text-secondaryAccent text-5xl" />
            <h3 className="font-playfair text-5xl text-gray-700 mb-8">
              Contatti
            </h3>
          </div>
          <div className="flex flex-col mt-6 gap-5 text-sectionBg items-center">
            <div className="flex gap-2 items-center ">
              <ImLocation className="text-secondaryAccent text-xl" />
              <Text textColor="text-gray-700">
                Via Nazionale, 41b, Perdaxius, (SU), Sardegna
              </Text>
            </div>
            <div className="flex gap-2 items-center">
              <ImPhone className="text-secondaryAccent text-xl" />
              <Text textColor="text-gray-700">+39 3473976763</Text>
            </div>
            <div className="flex gap-2 items-center">
              <ImWhatsapp className="text-secondaryAccent text-xl" />
              <Text textColor="text-gray-700">+39 3473976763</Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
