"use client";
import { motion } from "motion/react";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import { ImCalendar, ImCross, ImAddressBook, ImLocation } from "react-icons/im";
import { Wrapper } from "@/components/Wrapper";
import { DecoratedTitle } from "@/components/DecoratedTitle";
import {
  ImWhatsapp,
  ImPhone,
  ImLink,
  ImClock,
  ImInstagram,
  ImMap,
  ImFacebook,
} from "react-icons/im";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center mt-[80px] bg-mainBg">
      <section className="w-full  flex justify-center py-10 bg-secondaryBg">
        <Wrapper>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex items-center justify-center"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6187.222138115729!2d8.605028096805405!3d39.160826886675814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e70583862c1c2d%3A0x17812c15b966b0d3!2s09010%20Perdaxius%20SU!5e0!3m2!1sit!2sit!4v1749656691800!5m2!1sit!2sit"
              width="600"
              height="450"
              className="w-[100%] xl:w-[1024px] lg:w-[768px] md:w-[640px] sm:w-[480px] h-[300px] md:h-[400px] lg:h-[600px] outline-none border-[8px] border-white lg:border-[16px]"
              loading="lazy"
            ></iframe>
          </motion.div>
        </Wrapper>
      </section>
      <section className="w-full  flex flex-col items-center justify-center py-10 bg-mainBg">
        <Wrapper>
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col text-center pt-5 mx-auto gap-3"
            >
              <DecoratedTitle
                title="Dove e quando trovarci"
                borderColor="bg-secondaryAccent"
                color="text-gray-700"
                centered={true}
              />
            </motion.div>
          </div>
          <div className="w-full gap-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className=" flex flex-col items-center justify-center h-full text-center gap-5"
            >
              <div className="flex  gap-4 items-center">
                <ImCalendar className="text-secondaryAccent text-3xl" />
                <h3 className="font-playfair text-3xl text-sectionBg ">
                  Orari
                </h3>
              </div>

              <div className="flex flex-col gap-5 text-sectionBg items-center">
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.75 }}
              viewport={{ once: true, amount: 0.5 }}
              className=" flex flex-col items-center justify-center gap-5"
            >
              <div className="flex  gap-4 items-center ">
                <ImAddressBook className="text-secondaryAccent text-3xl" />
                <h3 className="font-playfair text-3xl text-gray-700">
                  Contatti
                </h3>
              </div>
              <div className="flex flex-col  gap-5 text-sectionBg items-center lg:min-w-[600px]">
                <div className="flex gap-2 items-center text-center">
                  <ImLocation className="text-secondaryAccent text-xl " />
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.75 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col items-center  gap-5"
            >
              <div className="flex  gap-4 items-center ">
                <ImLink className="text-secondaryAccent text-3xl" />
                <h3 className="font-playfair text-3xl text-gray-700">
                  Social e link utili
                </h3>
              </div>
              <div className="grid grid-cols-3  items-center gap-3">
                <button className="flex gap-2 items-center justify-center bg-secondaryAccent w-10 h-10 rounded-sm text-gray-50 hover:bg-secondaryAccent/80 transition-all duration-300 hover:scale-110">
                  <ImInstagram className=" text-xl" />
                </button>
                <button className="flex gap-2 items-center justify-center bg-secondaryAccent w-10 h-10 rounded-sm text-gray-50 hover:bg-secondaryAccent/80 transition-all duration-300 hover:scale-110">
                  <ImFacebook className=" text-xl" />
                </button>
                <button className="flex gap-2 items-center justify-center bg-secondaryAccent w-10 h-10 rounded-sm text-gray-50 hover:bg-secondaryAccent/80 transition-all duration-300 hover:scale-110">
                  <ImMap className=" text-xl" />
                </button>
              </div>
            </motion.div>
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
