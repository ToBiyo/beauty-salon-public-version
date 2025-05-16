import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceData } from "@/lib/types/types";

export const ServiceCard = ({ data }: { data: ServiceData }) => {
  const { title, description, image } = data;
  return (
    <article className="flex flex-col w-[24%] gap-y-8 ">
      <Image
        src={image}
        width={200}
        alt="servizio 4"
        className="w-full  shadow-gray-800 drop-shadow-xl rounded-xl overflow-hidden"
      />
      <h2 className="font-playfair text-2xl text-tortora italic">{title}</h2>
      <p className="font-quicksand text-gray-800">{description}</p>
      <Link
        href={"/servizi"}
        className="bg-cyan-700 text-gray-50  max-w-32 py-3 flex items-center justify-center rounded-lg"
      >
        See more
      </Link>
    </article>
  );
};
