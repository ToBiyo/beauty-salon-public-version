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
    <>
      <div className="w-full">
        <Image
          src={main}
          alt="about hero"
          className="w-full h-auto object-cover rounded-xl drop-shadow-xl shadow-gray-800"
        />
      </div>
      <div className="flex flex-row mt-8 justify-between">
        <div className="flex justify-start">
          <Image
            src={second}
            alt="about hero"
            className="w-[90%] h-auto object-cover rounded-xl  drop-shadow-lg shadow-gray-800"
          />
        </div>
        <div className="flex justify-end ">
          <Image
            src={third}
            alt="about hero"
            className="w-[90%] h-auto object-cover rounded-xl  drop-shadow-lg shadow-gray-800"
          />
        </div>
      </div>
    </>
  );
};
