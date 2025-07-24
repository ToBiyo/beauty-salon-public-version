"use client";
import { motion } from "motion/react";
import { QuotedTitle } from "./QuotedTitle";
import { SubHeading } from "./SubHeading";
import { Text } from "./Text";
import { Wrapper } from "./Wrapper";
import { WhatsAppButton } from "./WhatsappButton";
import { CallButton } from "./CallButton";
import { MapsButton } from "./MapsButton";
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
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center gap-8 text-center"
        >
          <QuotedTitle title="Dove trovarci" color="text-mainAccent" />
          <SubHeading textColor="text-gray-700">
            Ci trovi a Perdaxius, in provincia del Sud Sardegna – facilmente
            raggiungibile da Carbonia.
          </SubHeading>
        </motion.div>

        <div className="w-full flex flex-col gap-16 justify-center lg:flex-row lg:justify-between lg:min-w-[800px] mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full lg:w-1/2 flex flex-col items-center justify-center h-full text-center gap-5 border-b-[1px] border-mainAccent border-dotted pb-10"
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.75 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-5 border-b-[1px] border-mainAccent border-dotted pb-10"
          >
            <div className="flex  gap-4 items-center ">
              <ImAddressBook className="text-secondaryAccent text-3xl" />
              <h3 className="font-playfair text-3xl text-gray-700">Contatti</h3>
            </div>
            <div className="flex flex-col  gap-5 text-sectionBg items-center lg:min-w-[600px]">
              <MapsButton></MapsButton>
              <CallButton textColor="gray-700" bgColor="none">
                +39 346 336 0553
              </CallButton>
              <WhatsAppButton textColor="gray-700" bgColor="none">
                +39 346 336 0553
              </WhatsAppButton>
            </div>
          </motion.div>
        </div>
      </Wrapper>
    </section>
  );
};
