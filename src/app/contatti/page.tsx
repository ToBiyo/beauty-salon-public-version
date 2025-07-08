"use client";
import { motion } from "motion/react";
import { Heading } from "@/components/Heading";
import { Wrapper } from "@/components/Wrapper";
import {
  ImLocation,
  ImPhone,
  ImWhatsapp,
  ImLink,
  ImClock,
  ImInstagram,
  ImMap,
  ImFacebook,
} from "react-icons/im";

import background from "../../../public/assets/images/hero2.jpg";

export default function page() {
  return (
    <main className="min-h-[85vh] flex flex-col items-center justify-center mt-[80px] bg-secondaryAccent/20">
      {/*  <Hero bgColor="bg-secondaryAccent/20" image={background} order="order-1">
        <HeroDescription
          title="Il Tuo Centro Benessere, Pensato Per Te"
          subTitle="Uno spazio in cui poterti fermare, respirare e ritrovare il tuo
            equilibrio. Ogni trattamento nasce dall’ascolto, ogni percorso è
            modellato su di te."
          order="order-2"
        />
      </Hero> */}
      <section className="w-full  flex justify-center py-20">
        <Wrapper>
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-center py-5 mx-auto"
            >
              <Heading textColor="text-gray-700" main={false}>
                Dove Trovarci E Come Contattarci
              </Heading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col items-center p-4 bg-white my-8 lg:my-20"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6187.222138115729!2d8.605028096805405!3d39.160826886675814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e70583862c1c2d%3A0x17812c15b966b0d3!2s09010%20Perdaxius%20SU!5e0!3m2!1sit!2sit!4v1749656691800!5m2!1sit!2sit"
                width="600"
                height="450"
                className="w-[100%] lg:w-[1280px] h-[300px] md:h-[400px] lg:h-[600px] outline-none"
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col  justify-center items-center"
            >
              <div className="flex flex-row items-center gap-2 text-2xl">
                <ImClock className="text-secondaryAccent text-3xl" />{" "}
                <Heading textColor="text-gray-700" main={false}>
                  Orari
                </Heading>
              </div>
              <div className="flex flex-col md:flex-row mt-6 gap-3  text-gray-600 text-center md:text-start">
                <p className="font-quicksand text-lg sm:text-xl lg:text-2xl">
                  Lunedì-Venerdì : 09:00 - 19:00/
                </p>
                <p className="font-quicksand text-lg sm:text-xl lg:text-2xl">
                  Sabato : 09:00 - 13:00/
                </p>
                <p className="font-quicksand text-lg sm:text-xl lg:text-2xl">
                  Domenica : Chiuso
                </p>
              </div>
            </motion.div>
          </div>
          <div className=" my-8 lg:my-20 flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-2 text-2xl">
              <ImLink className="text-secondaryAccent text-3xl" />{" "}
              <Heading textColor="text-gray-700" main={false}>
                Social E Contatti
              </Heading>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-row justify-center  gap-3 text-sectionBg md:gap-8 lg:justify-start py-8"
            >
              <button className="flex gap-2 items-center bg-gray-700 p-3 rounded-full text-gray-50 hover:text-secondaryAccent transition-all duration-300">
                <ImPhone className="text-xl" />
              </button>
              <button className="flex gap-2 items-center bg-gray-700 p-3 rounded-full text-gray-50 hover:text-secondaryAccent transition-all duration-300">
                <ImWhatsapp className=" text-xl" />
              </button>
              <button className="flex gap-2 items-center bg-gray-700 p-3 rounded-full text-gray-50 hover:text-secondaryAccent transition-all duration-300">
                <ImInstagram className=" text-xl" />
              </button>
              <button className="flex gap-2 items-center bg-gray-700 p-3 rounded-full text-gray-50 hover:text-secondaryAccent transition-all duration-300">
                <ImFacebook className=" text-xl" />
              </button>
              <button className="flex gap-2 items-center bg-gray-700 p-3 rounded-full text-gray-50 hover:text-secondaryAccent transition-all duration-300">
                <ImMap className=" text-xl" />
              </button>
            </motion.div>
          </div>
        </Wrapper>
      </section>
    </main>
  );
}

/* <div className="flex flex-col gap-16 items-center">
            <div className="flex flex-col text-center items-center gap-5 lg:text-left lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-center py-5 mx-auto"
              >
                <Heading textColor="text-gray-700" main={false}>
                  Dove Trovarci E Come Contattarci
                </Heading>
              </motion.div>
              
              <div className="flex flex-col gap-10 mt-0 text-xl">
                
              </div>
            </div>
            <div className="flex flex-row w-full py-10 items-start justify-center gap-20">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex flex-col justify-center items-center text-center "
              >
                <div className="flex flex-row items-center gap-2 text-2xl">
                  <ImClock className="text-secondaryAccent text-3xl" />{" "}
                  <h4 className="font-playfair text-4xl text-gray-700">
                    Orari
                  </h4>
                </div>
                <div className="flex flex-col mt-6 gap-6 text-sectionBg">
                  <Text textColor="text-gray-600">
                    Lunedì/Venerdì : 09:00 - 19:00
                  </Text>
                  <Text textColor="text-gray-600">Sabato : 09:00 - 13:00</Text>
                  <Text textColor="text-gray-600">Domenica : Chiuso</Text>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex flex-col justify-center items-center text-center "
              >
                <div className="flex flex-row items-center gap-2 text-2xl">
                  <ImLink className="text-secondaryAccent text-3xl" />{" "}
                  <h4 className="font-playfair text-4xl text-gray-700">
                    Socail E Contatti
                  </h4>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex flex-row justify-center  gap-3 text-sectionBg md:gap-8 lg:justify-start py-8"
                >
                  <button className="flex gap-2 items-center bg-gray-700 p-3 rounded-full text-gray-50 hover:text-secondaryAccent transition-all duration-300">
                    <ImPhone className="text-xl" />
                  </button>
                  <button className="flex gap-2 items-center bg-gray-700 p-3 rounded-full text-gray-50 hover:text-secondaryAccent transition-all duration-300">
                    <ImWhatsapp className=" text-xl" />
                  </button>
                  <button className="flex gap-2 items-center bg-gray-700 p-3 rounded-full text-gray-50 hover:text-secondaryAccent transition-all duration-300">
                    <ImInstagram className=" text-xl" />
                  </button>
                  <button className="flex gap-2 items-center bg-gray-700 p-3 rounded-full text-gray-50 hover:text-secondaryAccent transition-all duration-300">
                    <ImMap className=" text-xl" />
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>  */
