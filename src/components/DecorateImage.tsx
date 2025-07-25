"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { animationProp } from "@/lib/types/types";

export const DecorateImage = ({
  imageSrc,
  alt,
  initialAnimation,
}: {
  imageSrc: StaticImageData | string;
  alt: string;
  initialAnimation: animationProp;
}) => {
  return (
    <motion.div
      initial={initialAnimation}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true, amount: 0.5 }}
      className={`p-2 lg:p-4 bg-white  drop-shadow-mf lg:drop-shadow-xl shadow-gray-700 w-full`}
    >
      <Image
        src={imageSrc}
        alt={alt}
        className="w-full object-fill z-20 relative ]"
      />
    </motion.div>
  );
};
