import { Heading } from "./Heading";
import { Text } from "./Text";
import { Wrapper } from "./Wrapper";
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
    <section className="w-full h-[auto] bg-secondaryBg flex flex-col items-center justify-center py-10 gap-16  md:py-20 ">
      <Heading main={false} textColor="text-gray-700">
        Dove e quando trovarci
      </Heading>
      <Wrapper>
        <div className="w-full flex flex-col gap-16 justify-center lg:flex-row lg:justify-between lg:min-w-[800px]  ">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center h-full text-center gap-5 ">
            <div className="flex  gap-4 items-center">
              <ImCalendar className="text-secondaryAccent text-3xl" />
              <h3 className="font-playfair text-3xl text-sectionBg ">Orari</h3>
            </div>

            <div className="flex flex-col  gap-5 text-sectionBg items-center">
              <div className="flex gap-2 items-center ">
                <ImClock className="text-secondaryAccent text-xl" />
                <Text textColor="text-black">
                  Lunedì/Venerdì : 09:00 - 19:00
                </Text>
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
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-5 ">
            <div className="flex  gap-4 items-center">
              <ImAddressBook className="text-secondaryAccent text-3xl" />
              <h3 className="font-playfair text-3xl text-gray-700">Contatti</h3>
            </div>
            <div className="flex flex-col  gap-5 text-sectionBg items-center">
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
      </Wrapper>
    </section>
  );
};
