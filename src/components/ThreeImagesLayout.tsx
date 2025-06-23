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
    <div className="w-full flex flex-col gap-5  h-full">
      <div className="w-full p-2 bg-mainBg ">
        <Image
          src={main}
          alt="about hero"
          className="w-full h-auto object-cover  "
        />
      </div>
      <div className="flex flex-row gap-3">
        <div className="flex justify-start bg-mainBg p-2">
          <Image
            src={second}
            alt="about hero"
            className="w-full h-auto object-cover  drop-shadow-lg shadow-gray-800"
          />
        </div>
        <div className="flex justify-end bg-mainBg p-2">
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
