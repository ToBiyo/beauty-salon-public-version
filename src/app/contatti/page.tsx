import { Heading } from "@/components/Heading";
import { SubHeading } from "@/components/SubHeading";
import { Text } from "@/components/Text";
import { Hero } from "@/components/Hero";
import {
  ImLocation,
  ImPhone,
  ImWhatsapp,
  ImClock,
  ImInstagram,
  ImMap,
} from "react-icons/im";

import background from "../../../public/assets/images/hero2.jpg";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center bg-background mt-[80px]">
      <Hero bgColor="bg-secondaryAccent/30" image={background} order="order-1">
        <div className="md:w-1/2 w-full flex flex-col md:items-start md:text-left justify-center gap-10 relative items-center text-center pl-8 xl:pl-32 order-2">
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
      </Hero>
      <section className="w-full  bg-white py-40 flex justify-center ">
        <div className="max-w-[1440px] flex flex-row gap-20 justify-between items-center">
          <div className=" p-8 bg-mainBg drop-shadow-2xl shadow-gray-400 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6187.222138115729!2d8.605028096805405!3d39.160826886675814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e70583862c1c2d%3A0x17812c15b966b0d3!2s09010%20Perdaxius%20SU!5e0!3m2!1sit!2sit!4v1749656691800!5m2!1sit!2sit"
              width="600"
              height="450"
              className="w-[600px] h-[600px] outline-none "
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-[50%] flex flex-col gap-20  ">
            <div className="flex flex-col ">
              <Heading textColor="text-gray-700" main={false}>
                Dove trovarci e come contattarci
              </Heading>
              <div className="flex flex-col gap-10 mt-10 text-xl">
                <div className="flex flex-row gap-2 items-center text-2xl">
                  <ImLocation className="text-secondaryAccent" />
                  <Text textColor="text-black">
                    Via Giardini 23, Perdaxius, (SU), Sardegna, Italia
                  </Text>
                </div>
                <div className="flex flex-col border-b-[1px] border-gray-400 py-10">
                  <div className="flex flex-row items-center gap-2 text-2xl">
                    <ImClock className="text-secondaryAccent text-3xl" />{" "}
                    <h4 className="font-playfair text-3xl text-gray-700">
                      Orari
                    </h4>
                  </div>
                  <div className="flex flex-col mt-6 gap-6 text-sectionBg">
                    <Text textColor="text-gray-600">
                      Lunedì/Venerdì : 09:00 - 19:00
                    </Text>
                    <Text textColor="text-gray-600">
                      Sabato : 09:00 - 13:00
                    </Text>
                    <Text textColor="text-gray-600">Domenica : Chiuso</Text>
                  </div>
                </div>
                <div className="flex flex-row  gap-10 text-sectionBg ">
                  <button className="flex gap-2 items-center bg-gray-700 p-4 rounded-full text-gray-50 hover:text-secondaryAccent transition-all duration-300">
                    <ImPhone className="text-xl" />
                  </button>
                  <button className="flex gap-2 items-center bg-gray-700 p-4 rounded-full text-gray-50 hover:text-secondaryAccent transition-all duration-300">
                    <ImWhatsapp className=" text-xl" />
                  </button>
                  <button className="flex gap-2 items-center bg-gray-700 p-4 rounded-full text-gray-50 hover:text-secondaryAccent transition-all duration-300">
                    <ImInstagram className=" text-xl" />
                  </button>
                  <button className="flex gap-2 items-center bg-gray-700 p-4 rounded-full text-gray-50 hover:text-secondaryAccent transition-all duration-300">
                    <ImMap className=" text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/*   */
