"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { animationProp } from "@/components/ServiceDescription";

export const DecorateImage = ({
  imageSrc,
  background,
  initialAnimation,
}: {
  imageSrc: StaticImageData | string;
  background: string;
  initialAnimation: animationProp;
}) => {
  return (
    <motion.div
      initial={initialAnimation}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true, amount: 0.5 }}
      className={`p-4 ${background} drop-shadow-xl shadow-gray-700 w-full `}
    >
      <Image
        src={imageSrc}
        alt="me"
        className="w-full object-fill z-20 relative"
      />
    </motion.div>
  );
};
