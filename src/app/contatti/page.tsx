import { TwoColumnsLayout } from "@/components/TwoColumnsLayout";
import { Hero } from "@/components/Hero";
import {
  ImLocation,
  ImPhone,
  ImWhatsapp,
  ImInstagram,
  ImFacebook2,
} from "react-icons/im";
import image from "../../../public/assets/images/hero-about.jpg";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <div className="realtive z-20 bg-avorio flex flex-col gap-[300px]">
        <TwoColumnsLayout>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.7252971253206!2d8.610957877307477!3d39.158229231269736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e70582d9c88301%3A0x4564050ed35c87c6!2sVia%20Nazionale%2C%2041%2C%2009010%20Perdaxius%20SU!5e0!3m2!1sit!2sit!4v1747669731279!5m2!1sit!2sit"
            className="relative w-[600px] h-[600px]"
            loading="lazy"
          ></iframe>
          <div className=" flex justify-center w-full">
            <div className="flex flex-col  justify-center  gap-20">
              <h2 className="font-playfair text-5xl text-cyan-700 italic">
                Passa a trovarci
              </h2>
              <div className="flex ">
                <ImLocation className="text-xl" />
                <p className="font-quicksand text-xl">
                  Via Nazionale, 41b. PErdaxius(Su), Italia
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-quicksand text-xl">
                  Lunedì - Venerdì : 09:00 - 19:00
                </h3>
                <h3 className="font-quicksand text-xl">
                  Sabato : 09:00 - 13:00
                </h3>
                <h3 className="font-quicksand text-xl">Domenica chiuso</h3>
              </div>
              <div className="flex gap-10 items-center justify-start">
                <button className="flex items-center w-32 py-4 text-gray-50 bg-cyan-700 rounded-xl justify-center text-lg">
                  <ImPhone />
                  Prenota
                </button>
                <button className="flex items-center w-32 py-4 text-gray-50 bg-cyan-700 rounded-xl justify-center text-lg">
                  <ImWhatsapp />
                  Prenota
                </button>
              </div>
            </div>
          </div>
        </TwoColumnsLayout>
        <section className="flex flex-col items-center justify-center gap-20">
          <h2 className="font-playfair text-tortora italic text-5xl">
            Contattaci per la tua consulenza o trattamento
          </h2>
          <h3 className="font-quicksand text-2xl">
            Ti accoglieremo con professionalità e attenzione, passo dopo passo.
          </h3>
          <div className="flex gap-10 items-center justify-start">
            <button className="flex items-center w-32 py-4 text-gray-50 bg-tortora rounded-xl justify-center text-lg gap-1">
              <ImPhone />
              <p className="font-quicksand">Prenota</p>
            </button>
            <button className="flex items-center w-32 py-4 text-gray-50 bg-tortora rounded-xl justify-center text-lg gap-1">
              <ImWhatsapp />
              <p className="font-quicksand">Prenota</p>
            </button>
          </div>
        </section>
        <TwoColumnsLayout>
          <div className="flex flex-col gap-10 border-l-4 border-cream p-[50px]">
            <h2 className="font-playfair text-tortora italic text-5xl mb-[50px]">
              I nostri contatti
            </h2>
            <div className="flex flex-col gap-10">
              <div className="flex gap-2 items-center text-2xl">
                <ImPhone className="text-cyan-700" />{" "}
                <h2 className="font-quicksand">+00 2349237490230</h2>
              </div>
              <div className="flex gap-2 items-center text-2xl">
                <ImWhatsapp className="text-cyan-700" />{" "}
                <h2 className="font-quicksand">+00 2349237490230</h2>
              </div>
              <div className="flex gap-2 items-center text-2xl">
                <ImInstagram className="text-cyan-700" />{" "}
                <h2 className="font-quicksand">F Beautyque</h2>
              </div>
              <div className="flex gap-2 items-center text-2xl">
                <ImFacebook2 className="text-cyan-700" />{" "}
                <h2 className="font-quicksand">F Beautyque</h2>
              </div>
            </div>
          </div>
          <>
            <Image
              src={image}
              alt="sample image"
              width={300}
              className="w-[100%] rounded-xl drop-shadow-2xl shadow-gray-700"
            ></Image>
          </>
        </TwoColumnsLayout>
      </div>
    </div>
  );
}
