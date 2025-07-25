"use client";
import { motion } from "motion/react";
import { Wrapper } from "../Wrapper";
import { DecoratedTitle } from "../DecoratedTitle";
import { Text } from "../Text";
import {
  ImCalendar,
  ImClock,
  ImCross,
  ImAddressBook,
  ImLocation,
  ImPhone,
  ImWhatsapp,
  ImInstagram,
  ImFacebook,
  ImLink,
  ImMap,
} from "react-icons/im";

export const ContactInfos = () => {
  return (
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
              <h3 className="font-playfair text-3xl text-sectionBg ">Orari</h3>
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
              <h3 className="font-playfair text-3xl text-gray-700">Contatti</h3>
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
            <div className="grid grid-cols-2  items-center gap-3">
              <a
                href="https://www.instagram.com/fbeautyque/"
                target="_blank"
                className="flex gap-2 items-center justify-center bg-secondaryAccent w-10 h-10 rounded-sm text-gray-50 hover:bg-secondaryAccent/80 transition-all duration-300 hover:scale-110"
              >
                <ImInstagram className=" text-xl" />
              </a>
              <a
                href="https://www.facebook.com/people/F-Beautyque-di-Francesca-Lai/61575575922189/#"
                target="_blank"
                className="flex gap-2 items-center justify-center bg-secondaryAccent w-10 h-10 rounded-sm text-gray-50 hover:bg-secondaryAccent/80 transition-all duration-300 hover:scale-110"
              >
                <ImFacebook className=" text-xl" />
              </a>
            </div>
          </motion.div>
        </div>
      </Wrapper>
    </section>
  );
};
