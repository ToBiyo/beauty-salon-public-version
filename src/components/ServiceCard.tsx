import { motion } from "motion/react";
import Image from "next/image";
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
  const { title, description, image, alt } = data;

  let imageOrder = "";
  let textOrder = "";

  switch (index) {
    case 0:
      imageOrder = "order-first";
      textOrder = "order-last";

      break;
    case 1:
      imageOrder = "order-first md:order-last lg:order-first";
      textOrder = "order-last md:order-first lg-order-last";

      break;
    case 2:
      imageOrder = "order-first lg:order-last";
      textOrder = "order-last lg:order-first";

      break;
    case 3:
      imageOrder = "order-first md:order-last ";
      textOrder = "order-last md:order-first ";

      break;
  }

  let background = index % 2 === 0 ? "bg-secondaryBg" : "bg-gray-700";
  let textColor = index % 2 === 0 ? "text-gray-800" : "text-gray-100";
  let titleColor = index % 2 === 0 ? "text-mainAccent" : "text-secondaryAccent";
  let borderColor =
    index % 2 === 0 ? "border-mainAccent" : "border-secondaryAccent";

  return (
    <motion.article
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
      }}
      viewport={{ once: true, amount: 0.3 }}
      className={`flex flex-col md:flex-row items-center gap-0 ${background} `}
    >
      <Image
        src={image}
        alt={alt}
        className={`w-full md:w-1/2 ${imageOrder}  h-full object-cover`}
      />
      <div className={`w-full h-full md:w-1/2  ${textOrder}  p-2 `}>
        <div
          className={`w-full h-full border-[4px] ${borderColor} flex flex-col justify-center items-center gap-3 text-center p-8 sm:p-5 lg:p-2`}
        >
          <CardTitle textColor={titleColor}>{title}</CardTitle>
          <CardDescriptionText textColor={textColor}>
            {description}
          </CardDescriptionText>
        </div>
      </div>
    </motion.article>
  );
};
