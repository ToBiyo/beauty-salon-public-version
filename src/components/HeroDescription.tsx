"use client";
import { motion } from "motion/react";
import { QuotedTitle } from "./QuotedTitle";
import { SubHeading } from "./SubHeading";
import { WhatsAppButton } from "./WhatsappButton";
import { CallButton } from "./CallButton";

export const HeroDescription = ({
  title,
  subTitle,
  order,
  link,
  callToAction,
}: {
  title: string;
  subTitle: string;
  order?: string;
  link?: boolean;
  callToAction?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`lg:w-1/2 w-full flex flex-col justify-center items-center text-center gap-6  lg:justify-start lg:items-start lg:text-left ${order}`}
    >
      <QuotedTitle title={title} color="text-mainAccent" />

      <SubHeading textColor="text-gray-500">{subTitle}</SubHeading>
      {callToAction && (
        <div className="flex gap-5 mt-3">
          <WhatsAppButton
            bgColor="bg-mainAccent"
            textColor="text-gray-100"
            animate={true}
          >
            Contattaci
          </WhatsAppButton>
          <CallButton
            bgColor="bg-mainAccent"
            textColor="text-gray-100"
            animate={true}
          >
            Chiamaci
          </CallButton>
        </div>
      )}

      {link && (
        <a
          href="#first"
          className="bg-mainAccent px-5 py-3 text-white  front-quicksand text-sm sm:text-base md:text-base lg:text-lg hover:scale-105 duration-300 "
        >
          Scopri di più
        </a>
      )}
    </motion.div>
  );
};
