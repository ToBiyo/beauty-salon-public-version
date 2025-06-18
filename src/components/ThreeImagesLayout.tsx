import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
export const ThreeImagesLayout = ({
  main,
  second,
  third,
}: {
  main: StaticImageData;
  second: StaticImageData;
  third: StaticImageData;
}) => {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <div className="w-full p-5 bg-mainBg">
        <Image
          src={main}
          alt="about hero"
          className="w-full h-auto object-cover  "
        />
      </div>
      <div className="flex flex-row mt-8 gap-4">
        <div className="flex justify-start bg-mainBg p-5">
          <Image
            src={second}
            alt="about hero"
            className="w-full h-auto object-cover  drop-shadow-lg shadow-gray-800"
          />
        </div>
        <div className="flex justify-end bg-mainBg p-5">
          <Image
            src={third}
            alt="about hero"
            className="w-full h-auto object-cover   drop-shadow-lg shadow-gray-800"
          />
        </div>
      </div>
    </div>
  );
};
