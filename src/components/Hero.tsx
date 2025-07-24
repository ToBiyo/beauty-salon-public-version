"use client";
import { motion } from "motion/react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { Wrapper } from "./Wrapper";
import { DecorateImage } from "./DecorateImage";
export const Hero = ({
  image,
  children,
  bgColor,
  order,
  alt,
}: {
  image: StaticImageData;
  children: React.ReactNode;
  bgColor: string;
  order: string;
  alt: string;
}) => {
  return (
    <section
      className={`w-full ${bgColor}  relative h-[auto] flex justify-center items-center py-10 md:py-20 lg:py-32 `}
    >
      <Wrapper>
        <div className="flex flex-col items-center jutify-center gap-12 lg:flex-row lg:justify-between  lg:w-full ">
          {children}

          <div
            className={`lg:w-1/2 w-full h-auto flex items-center justify-center ${order}`}
          >
            <DecorateImage
              imageSrc={image}
              initialAnimation={{ opacity: 0, y: 100 }}
              alt={alt}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
