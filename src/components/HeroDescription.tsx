"use client";
import { motion } from "motion/react";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";

export const HeroDescription = ({
  title,
  subTitle,
  order,
  showLink,
}: {
  title: string;
  subTitle: string;
  order?: string;
  showLink?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`lg:w-1/2 w-full flex flex-col justify-center items-center text-center gap-5 md:gap-8 xl:gap-10 lg:justify-start lg:items-start lg:text-left ${order}`}
    >
      <Heading textColor="text-gray-700" main={true}>
        {title}
      </Heading>

      <SubHeading textColor="text-gray-500">{subTitle}</SubHeading>

      {showLink && (
        <a
          href="#first"
          className="bg-gray-700 px-5 py-3 text-white rounded-3xl front-quicksand text-sm sm:text-base md:text-base lg:text-lg hover:bg-gray-600 duration-300 "
        >
          Scopri di più
        </a>
      )}
    </motion.div>
  );
};
