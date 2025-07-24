"use client";
import { motion } from "framer-motion";
import { SubHeading } from "./SubHeading";
import { WhatsAppButton } from "./WhatsappButton";
import { CallButton } from "./CallButton";
export const CTA = ({ message }: { message: string }): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true, amount: 1 }}
      className="flex flex-col justify-center items-center text-center w-full gap-5 md:gap-10 "
    >
      <SubHeading textColor="text-gray-600">{message}</SubHeading>
      <div className="flex flex-row items-center gap-6">
        <WhatsAppButton
          bgColor={"bg-secondaryAccent"}
          textColor="text-gray-100"
          animate={true}
        >
          Scrivici
        </WhatsAppButton>
        <CallButton
          bgColor={"bg-secondaryAccent"}
          textColor="text-gray-100"
          animate={true}
        >
          Chiamaci
        </CallButton>
      </div>
    </motion.div>
  );
};
