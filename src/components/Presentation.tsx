"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { SubHeading } from "./SubHeading";
import { QuotedTitle } from "./QuotedTitle";
import { Text } from "./Text";
import { Wrapper } from "./Wrapper";
import { DecorateImage } from "./DecorateImage";
import me from "../../public/assets/images/home/about-me.jpg";

export const Presentation = () => {
  return (
    <section className="w-full  bg-secondaryBg relative h-[auto] flex items-center justify-center py-10 md:py-20 xl:py-32">
      <Wrapper>
        <div className="max-w-full h-full flex flex-col lg:flex-row jutify-center gap-10  ">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="lg:w-1/2 w-full flex flex-col lg:items-start lg:text-left justify-center gap-5 lg:gap-5 relative  items-center text-center "
          >
            <QuotedTitle title="F Beautyque" color="text-mainAccent" />
            <SubHeading textColor="text-gray-600">
              Un’esperienza estetica su misura per te
            </SubHeading>
            <Text textColor="text-gray-600">
              Mi chiamo Francesca e ho fondato F Beautique per offrire
              trattamenti estetici di alta qualità, mirati a valorizzare la
              bellezza autentica di ogni persona. Ogni percorso è creato su
              misura, in un ambiente intimo, professionale e accogliente. Il tuo
              benessere è la nostra priorità.
            </Text>
            <Link
              href={"/chi_siamo"}
              className={`bg-mainAccent text-gray-50  flex items-center justify-center  text-sm sm:text-base md:text-lg px-6 py-4 sm:py-3 sm:px-6  hover:scale-105 duration-300`}
            >
              Scopri
            </Link>
          </motion.div>
          <div className="w-full lg:w-1/2 order-first lg:order-last">
            <DecorateImage
              imageSrc={me}
              initialAnimation={{ opacity: 0, x: -50 }}
              alt="Francesca, fondatrice di F Beautyque, centro estetico a Perdaxius"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
