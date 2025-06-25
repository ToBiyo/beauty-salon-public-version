"use client";
import { motion } from "motion/react";
import { Heading } from "@/components/Heading";
import { Wrapper } from "@/components/Wrapper";
import { Text } from "@/components/Text";
import { Hero } from "@/components/Hero";
import { HeroDescription } from "@/components/HeroDescription";
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
    <main className="flex flex-col items-center justify-center bg-white mt-[80px]">
      <Hero bgColor="bg-secondaryAccent/20" image={background} order="order-1">
        <HeroDescription
          title="Il Tuo Centro Benessere, Pensato Per Te"
          subTitle="Uno spazio in cui poterti fermare, respirare e ritrovare il tuo
            equilibrio. Ogni trattamento nasce dall’ascolto, ogni percorso è
            modellato su di te."
          order="order-2"
        />
      </Hero>
      <section className="w-full  bg-white py-20 flex justify-center">
        <Wrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-center lg:p-4 lg:drop-shadow-2xl shadow-gray-400"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6187.222138115729!2d8.605028096805405!3d39.160826886675814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e70583862c1c2d%3A0x17812c15b966b0d3!2s09010%20Perdaxius%20SU!5e0!3m2!1sit!2sit!4v1749656691800!5m2!1sit!2sit"
                width="600"
                height="450"
                className="w-[100%] h-[300px] md:h-[400px] lg:h-[500px] outline-none "
                loading="lazy"
              ></iframe>
            </motion.div>
            <div className="w-full flex flex-col">
              <div className="flex flex-col text-center items-center gap-5 lg:text-left lg:items-start">
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Heading textColor="text-gray-700" main={false}>
                    Dove Trovarci E Come Contattarci
                  </Heading>
                </motion.div>
                <div className="flex flex-col gap-10 mt-8 text-xl">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-row gap-2 items-start text-2xl"
                  >
                    <ImLocation className="text-secondaryAccent" />
                    <Text textColor="text-black">
                      Via Giardini 23, Perdaxius, (SU), Sardegna, Italia
                    </Text>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col justify-center items-center border-b-[1px] border-gray-400 text-center pb-5 lg:text-left lg:items-start"
                  >
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
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-row justify-center  gap-3 text-sectionBg md:gap-8 lg:justify-start"
                  >
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
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </main>
  );
}

/*   */
