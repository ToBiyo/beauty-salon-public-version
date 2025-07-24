"use client";
import { motion } from "motion/react";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { WhatsAppButton } from "./WhatsappButton";
import { CallButton } from "./CallButton";
import { QuotedTitle } from "./QuotedTitle";
import { DecoratedTitle } from "./DecoratedTitle";

export type animationProp = {
  opacity: number;
  x?: number;
  y?: number;
};

export const ServiceDescription = ({
  title,
  description,
  buttonBg,
  order,
  textColor,
  initialAnimation,
}: {
  title: string;
  description: string;
  buttonBg: string;
  textColor: string;
  order?: string;
  initialAnimation: animationProp;
  borderColor?: string;
}) => {
  console.log(order);

  return (
    <motion.div
      initial={initialAnimation}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      className={`flex flex-col justify-center gap-6  items-center text-center lg:items-start lg:text-left ${order}`}
    >
      {textColor === "text-gray-700" ? (
        <DecoratedTitle
          title={title}
          color={textColor}
          borderColor={buttonBg}
        />
      ) : (
        <QuotedTitle title={title} color={textColor} />
      )}
      <Text textColor="text-gray-600">{description}</Text>
      <div className="flex gap-6 mt-2">
        <CallButton bgColor={buttonBg} textColor="text-gray-100" animate={true}>
          Prenota ora
        </CallButton>
        <WhatsAppButton
          bgColor={buttonBg}
          textColor="text-gray-100"
          animate={true}
        >
          Prenota subito
        </WhatsAppButton>
      </div>
    </motion.div>
  );
};
