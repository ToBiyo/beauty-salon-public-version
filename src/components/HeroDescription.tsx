"use client";
import { motion } from "motion/react";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";

export const HeroDescription = ({
  title,
  subTitle,
  order,
}: {
  title: string;
  subTitle: string;
  order?: string;
}) => {
  return (
    <div
      className={`lg:w-1/2 w-full flex flex-col justify-center items-center text-center gap-5 md:gap-8 xl:gap-10 lg:justify-start lg:items-start lg:text-left ${order}`}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Heading textColor="text-gray-700" main={true}>
          {title}
        </Heading>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <SubHeading textColor="text-gray-500">{subTitle}</SubHeading>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.9 }}
      >
        <a
          href="#services"
          className="bg-gray-700 px-5 py-3 text-white rounded-3xl front-quicksand text-sm sm:text-base md:text-base lg:text-lg"
        >
          Scopri di più
        </a>
      </motion.div>
    </div>
  );
};
