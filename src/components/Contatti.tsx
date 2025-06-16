import { Heading } from "./Heading";
import { TwoColumnsLayout } from "./TwoColumnsLayout";
import { Text } from "./Text";
import { ImLocation, ImPhone, ImWhatsapp } from "react-icons/im";
import { CallButton } from "./CallButton";
import { WhatsAppButton } from "./WhatsappButton";

export const Contatti = () => {
  return (
    <section className="w-[100vw] h-[auto] bg-[url(../../public/assets/images/bg.jpg)] bg-cover bg-fixed ">
      <div className="flex flex-col justify-center items-center w-full h-full bg-grayBackground gap-20 bg-opacity-80 py-60">
        <div className=" w-[80vw] mb-10 flex flex-col items-center text-center gap-12">
          <Heading main={false} textColor="text-sectionBg">
            Dove e quando trovarci
          </Heading>
        </div>
        <TwoColumnsLayout width="2xl:w-[50vw] lg:w-[60vw]">
          <div className="w-full flex flex-col text-center">
            <h3 className="font-playfair italic text-2xl sm:text-3xl xl:text-5xl text-sectionBg mb-8">
              Orari
            </h3>

            <div className="flex flex-col mt-6 gap-12 text-sectionBg">
              <Text textColor="text-black">Lunedì/Venerdì : 09:00 - 19:00</Text>
              <Text textColor="text-black">Sabato : 09:00 - 13:00</Text>
              <Text textColor="text-black">Domenica : Chiuso</Text>
            </div>
          </div>
          <div className="flex flex-col pb-4 text-center ">
            <h3 className="font-playfair italic  text-2xl sm:text-3xl xl:text-5xl text-sectionBg mb-8">
              Contatti
            </h3>
            <div className="flex flex-col mt-6 gap-12 text-sectionBg items-center">
              <div className="flex gap-2 items-center ">
                <ImLocation className="text-secondaryAccent text-xl" />
                <Text textColor="text-black">
                  Via Nazionale, 41b, Perdaxius, (SU), Sardegna
                </Text>
              </div>
              <div className="flex gap-2 items-center">
                <ImPhone className="text-secondaryAccent text-xl" />
                <Text textColor="text-black">+39 3473976763</Text>
              </div>
              <div className="flex gap-2 items-center">
                <ImWhatsapp className="text-secondaryAccent text-xl" />
                <Text textColor="text-black">+39 3473976763</Text>
              </div>
            </div>
          </div>
        </TwoColumnsLayout>
      </div>
    </section>
  );
};
