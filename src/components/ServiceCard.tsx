import React from "react";
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

  let background = index % 2 === 0 ? "bg-secondaryAccent/30 " : "bg-gray-800 ";
  let textColor = index % 2 === 0 ? "text-gray-800" : "text-gray-100";
  let titleColor = index % 2 === 0 ? "text-gray-800" : "text-secondaryAccent";
  let buttonBg = index % 2 === 0 ? "bg-gray-800" : "bg-secondaryAccent";

  return (
    <article className="flex flex-col sm:flex-row items-center gap-0">
      <Image
        src={image}
        alt={title}
        className={`w-full md:w-1/2 ${imageOrder} `}
      />
      <div
        className={`w-full h-full md:w-1/2 ${background} ${textOrder} flex flex-col items-center justify-center gap-5 p-5 text-center`}
      >
        <CardTitle textColor={titleColor}>{title}</CardTitle>
        <CardDescriptionText textColor={textColor}>
          {description}
        </CardDescriptionText>
        <div className="flex flex-row items-center gap-6">
          <button
            className={`font-quicksand text-sm rounded-3xl py-2 px-4 ${buttonBg} text-white transition-all duration-300 hover:scale-105`}
          >
            Chiama
          </button>
          <button
            className={`font-quicksand text-sm rounded-3xl py-2 px-4 ${buttonBg} text-white transition-all duration-300 hover:scale-105`}
          >
            Scrivici
          </button>
        </div>
      </div>
    </article>
  );
};
