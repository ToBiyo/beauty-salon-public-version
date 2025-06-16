import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceData } from "@/lib/types/types";
import { CardTitle } from "./CardTitle";
import { CardDescriptionText } from "./CardDescriptionText";

export const ServiceCard = ({ data }: { data: ServiceData }) => {
  const { title, description, image } = data;

  return (
    <article
      className={`flex flex-col w-[full] rounded-3xl overflow-hidden gap-y-8 bg-grayBackground pb-4 drop-shadow-2xl relative`}
    >
      <Image
        src={image}
        width={200}
        alt="servizio 4"
        className="w-full overflow-hidden  border-b-2 border-secondaryAccent"
      />
      <div className=" flex flex-col p-4 gap-8 ">
        <div>
          <CardTitle textColor={"text-secondaryAccent"}>{title}</CardTitle>
          <div className={`h-[2px] w-[60px] ${"text-sectionBg"} mt-1`}></div>
        </div>
        <CardDescriptionText textColor={"text-sectionBg"}>
          {description}
        </CardDescriptionText>
        <Link
          href={"/servizi"}
          className={`bg-secondaryAccent text-gray-50  max-w-40 py-3 flex items-center justify-center rounded-3xl text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8  hover:bg-accent duration-300`}
        >
          See more
        </Link>
      </div>
    </article>
  );
};
