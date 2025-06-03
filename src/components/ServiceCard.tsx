import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceData } from "@/lib/types/types";
import { CardTitle } from "./CardTitle";
import { CardDescriptionText } from "./CardDescriptionText";

export const ServiceCard = ({ data }: { data: ServiceData }) => {
  const { title, description, image } = data;
  return (
    <article className="flex flex-col w-[full] gap-y-8 ">
      <Image
        src={image}
        width={200}
        alt="servizio 4"
        className="w-full  shadow-gray-800 drop-shadow-xl rounded-xl overflow-hidden"
      />
      <CardTitle textColor="text-tortora">{title}</CardTitle>
      <CardDescriptionText>{description}</CardDescriptionText>
      <Link
        href={"/servizi"}
        className="bg-cyan-700 text-gray-50  max-w-40 py-3 flex items-center justify-center rounded-lg text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 hover:bg-cyan-600  duration-300"
      >
        See more
      </Link>
    </article>
  );
};
