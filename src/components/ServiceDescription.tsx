"use client";
import { motion } from "motion/react";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { WhatsAppButton } from "./WhatsappButton";
import { CallButton } from "./CallButton";

export type animationProp = {
  opacity: number;
  x: number;
};

export const ServiceDescription = ({
  title,
  description,
  buttonBg,
  order,
  initialAnimation,
}: {
  title: string;
  description: string;
  buttonBg: string;
  order?: string;
  initialAnimation: animationProp;
}) => {
  return (
    <motion.div
      initial={initialAnimation}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      className={`flex flex-col justify-center gap-5 lg:gap-8 xl:gap-12 items-center text-center lg:items-start lg:text-left ${order}`}
    >
      <Heading textColor="text-gray-700" main={false}>
        {title}
      </Heading>
      <Text textColor="text-gray-600">{description}</Text>
      <div className="flex gap-6 mt-2">
        <CallButton bgColor={buttonBg} textColor="text-gray-100">
          Prenota ora
        </CallButton>
        <WhatsAppButton bgColor={buttonBg} textColor="text-gray-100">
          Prenota subito
        </WhatsAppButton>
      </div>
    </motion.div>
  );
};
