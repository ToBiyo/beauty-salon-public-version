import { motion } from "motion/react";
import Image from "next/image";
import { WhatsAppButton } from "./WhatsappButton";
import { CallButton } from "./CallButton";
import { ServiceData } from "@/lib/types/types";
import { CardTitle } from "./CardTitle";
import { CardDescriptionText } from "./CardDescriptionText";

export const ServiceCard = ({
  data,
  index,
}: {
  data: ServiceData;
  index: number;
}) => {
  const { title, description, image } = data;

  let imageOrder = "";
  let textOrder = "";

  switch (index) {
    case 0:
      imageOrder = "order-1";
      textOrder = "order-2";

      break;
    case 1:
      imageOrder = " md:order-2 2xl:order-1";
      textOrder = "2xl:order-2";

      break;
    case 2:
      imageOrder = "2xl:order-2";
      textOrder = "2xl:order-1";

      break;
    case 3:
      imageOrder = " md:order-2 2xl:order-2";
      textOrder = "2xl:order-1";

      break;
  }

  let background = index % 2 === 0 ? "bg-secondaryAccent/20" : "bg-gray-700";
  let textColor = index % 2 === 0 ? "text-gray-800" : "text-gray-100";
  let titleColor = index % 2 === 0 ? "text-gray-800" : "text-secondaryAccent";
  let buttonBg = index % 2 === 0 ? "bg-gray-800" : "bg-secondaryAccent";

  return (
    <motion.article
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
      }}
      viewport={{ once: true, amount: 0.3 }}
      className={`flex flex-col sm:flex-row items-center gap-0 ${background} `}
    >
      <Image
        src={image}
        alt={title}
        className={`w-full md:w-1/2 ${imageOrder} `}
      />
      <div
        className={`w-full h-[full] md:w-1/2  ${textOrder} flex flex-col items-center justify-center gap-5 p-5 text-center`}
      >
        <CardTitle textColor={titleColor}>{title}</CardTitle>
        <CardDescriptionText textColor={textColor}>
          {description}
        </CardDescriptionText>
      </div>
    </motion.article>
  );
};
