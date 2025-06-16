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
import background from "../../../public/assets/images/bg.jpg";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center bg-background">
      <Hero background={background}>
        <div className="w-[40%] h-full flex flex-col mx-[10%]  justify-center  gap-20">
          <Heading main={true} textColor="text-accent">
            Lorem ipsum
          </Heading>
          <div className="max-w-[60vw] ">
            <SubHeading textColor="text-gray-100">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              aliquam minus cupiditate eos error fugit similique cumque illo ab
              voluptate. Modi quis sint deserunt provident fugit perferendis.
              Dolorum, accusamus recusandae.
            </SubHeading>
          </div>
          <Image src={logo} alt="logo" className="w-[40%]"></Image>
        </div>
      </Hero>
      <section className="w-[80vw] flex flex-row gap-5 justify-between items-center py-40">
        <div className="w-[40%] grid grid-rows-2 gap-20">
          <div className="flex flex-col border-b-[2px] border-accent border-dotted pb-10">
            <Heading textColor="text-accent" main={false}>
              Dove trovarci
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
            </div>
          </div>
          <div className="flex flex-col border-b-[2px] border-dotted border-accent pb-10">
            <Heading textColor="text-accent" main={false}>
              Come contattarci
            </Heading>
            <div className="flex flex-col mt-10 gap-6 text-sectionBg">
              <button className="flex gap-2 items-center">
                <ImPhone className="text-secondaryAccent text-2xl" />
                <Text textColor="text-black">Chiamaci</Text>
              </button>
              <button className="flex gap-2 items-center">
                <ImWhatsapp className="text-secondaryAccent text-2xl" />
                <Text textColor="text-black">Scrivici</Text>
              </button>
              <button className="flex gap-2 items-center">
                <ImInstagram className="text-secondaryAccent text-2xl" />
                <Text textColor="text-black">Scrivici</Text>
              </button>
              <button className="flex gap-2 items-center">
                <ImLocation className="text-secondaryAccent text-2xl" />
                <Text textColor="text-black">Vieni a trovarci</Text>
              </button>
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6187.222138115729!2d8.605028096805405!3d39.160826886675814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e70583862c1c2d%3A0x17812c15b966b0d3!2s09010%20Perdaxius%20SU!5e0!3m2!1sit!2sit!4v1749656691800!5m2!1sit!2sit"
            width="600"
            height="450"
            className="w-[40vw] h-[80vh] outline-none rounded-3xl drop-shadow-2xl shadow-gray-800"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
