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
} from "react-icons/im";
import logo from "../../../public/assets/images/logo-gold.png";
import Image from "next/image";
import background from "../../../public/assets/images/hero2.jpg";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center bg-background">
      <section className="w-[100vw]  bg-secondaryAccent/50 relative h-[auto] md:h-[60vh] xl:h-[80vh] flex items-center justify-center py-4">
        <div className="sm:w-[90vw] lg:w-[80vw] h-full flex flex-col md:flex-row   jutify-center">
          <div className="md:w-1/2 w-full h-auto p-5 flex items-center  justify-end lg:justify-center">
            <div className="w-full bg-mainBg p-8">
              <Image
                src={background}
                alt="Hero Image"
                className="w-[100%] object-contain"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col md:items-start md:text-left justify-center gap-10 relative items-center text-center pl-8 xl:pl-32">
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
      <section className="w-[100vw] flex flex-row gap-5 justify-between items-center  bg-mainBg py-40">
        <div className="ml-[10vw] p-8 bg-mainBg drop-shadow-2xl shadow-gray-400 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6187.222138115729!2d8.605028096805405!3d39.160826886675814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e70583862c1c2d%3A0x17812c15b966b0d3!2s09010%20Perdaxius%20SU!5e0!3m2!1sit!2sit!4v1749656691800!5m2!1sit!2sit"
            width="600"
            height="450"
            className="w-[30vw] h-[30vW] outline-none "
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-[50%] flex flex-col gap-20 pr-[10vw] ">
          <div className="flex flex-col border-b-[2px] border-secondaryAccent border-dotted pb-20">
            <Heading textColor="text-secondaryAccent" main={false}>
              Dove trovarci e come contattarci
            </Heading>
            <div className="flex flex-col gap-10 mt-10 text-xl">
              <div className="flex flex-row gap-2 items-center text-2xl">
                <ImLocation className="text-secondaryAccent" />
                <Text textColor="text-black">
                  Via Giardini 23, Perdaxius, (SU), Sardegna, Italia
                </Text>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-2 text-2xl">
                  <ImClock className="text-secondaryAccent" />{" "}
                  <h4 className="font-quicksand ">Orari</h4>
                </div>
                <div className="flex flex-col mt-6 gap-6 text-sectionBg">
                  <Text textColor="text-black">
                    Lunedì/Venerdì : 09:00 - 19:00
                  </Text>
                  <Text textColor="text-black">Sabato : 09:00 - 13:00</Text>
                  <Text textColor="text-black">Domenica : Chiuso</Text>
                </div>
              </div>
              <div className="flex flex-row mt-10  gap-10 text-sectionBg">
                <button className="flex gap-2 items-center">
                  <ImPhone className="text-gray-700 text-4xl" />
                </button>
                <button className="flex gap-2 items-center">
                  <ImWhatsapp className="text-gray-700 text-4xl" />
                </button>
                <button className="flex gap-2 items-center">
                  <ImInstagram className="text-gray-700 text-4xl" />
                </button>
                <button className="flex gap-2 items-center">
                  <ImLocation className="text-gray-700 text-4xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
