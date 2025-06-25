"use client";
import { motion } from "motion/react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { Wrapper } from "./Wrapper";
export const Hero = ({
  image,
  children,
  bgColor,
  order,
}: {
  image: StaticImageData | string;
  children: React.ReactNode;
  bgColor: string;
  order: string;
}) => {
  const imageUrl = typeof image === "string" ? image : image.src;

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className={`w-full ${bgColor}  relative h-[auto] flex justify-center items-center py-10 md:py-20 xl:py-32 2xl:py-48`}
    >
      <Wrapper>
        <div className="flex flex-col items-center jutify-center gap-10 lg:flex-row lg:justify-between">
          {children}

          <div
            className={`lg:w-1/2 w-full h-auto flex items-center justify-center ${order}`}
          >
            <motion.div
              className="w-full bg-mainBg p-3 md:w-[600px] xl:w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Image
                src={imageUrl}
                width={500}
                height={400}
                alt="Hero Image"
                className="w-[100%]  object-contain"
              />
            </motion.div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
