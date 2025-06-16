"use client";
import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";
export default function ProductCard({ src }: { src: StaticImageData }) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className=" bg-sectionBg flex items-center justify-center rounded-2xl p-5 relative cursor-pointer overflow-hidden"
      onMouseEnter={() => {
        setTimeout(() => {
          setIsHover((prev) => !prev);
        }, 300);
      }}
      onMouseLeave={() => {
        setIsHover((prev) => !prev);
      }}
    >
      <div
        className="absolute w-full h-full bg-sectionBg bg-opacity-90 text-slate-100 p-10 flex flex-col items-center justify-center text-center gap-10 duration-200"
        style={{ opacity: isHover ? 1 : 0 }}
      >
        <h3 className="font-playfair text-accent text-2xl">Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sunt
          molestiae temporibus non, quidem, magni suscipit deleniti harum fugit,
          quos quisquam praesentium neque veniam dignissimos nemo consequatur
          quod inventore. Fugit.
        </p>
      </div>
      <Image src={src} alt="product1" className="w-[70%]" />
    </div>
  );
}
