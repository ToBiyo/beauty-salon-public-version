"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import { Text } from "./Text";

import { Wrapper } from "./Wrapper";
import { DecorateImage } from "./DecorateImage";

import me from "../../public/assets/images/me.jpg";

export const Presentation = () => {
  return (
    <section className="w-full  bg-secondaryAccent/20 relative h-[auto] flex items-center justify-center py-10 md:py-20 xl:py-32">
      <Wrapper>
        <div className="max-w-full h-full flex flex-col lg:flex-row jutify-center gap-10  ">
          <div className="w-full lg:w-1/2">
            <DecorateImage
              imageSrc={me}
              background="bg-white"
              initialAnimation={{ opacity: 0, x: -50 }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="lg:w-1/2 w-full flex flex-col lg:items-start lg:text-left justify-center gap-5 lg:gap-5 xl:gap-8 relative  items-center text-center "
          >
            <Heading textColor="text-gray-700" main={false}>
              F Beautyque
            </Heading>
            <SubHeading textColor="text-gray-600">
              Un trattamento pensato solo per te
            </SubHeading>
            <Text textColor="text-gray-600">
              Mi chiamo Francesca e ho creato questo centro con l’obiettivo di
              offrire qualcosa di diverso: un luogo dove prendersi davvero cura
              di sé, con attenzione, ascolto e professionalità. Per questo, ogni
              trattamento che propongo nasce da un dialogo e da una visione
              personalizzata, in un ambiente sereno e curato in ogni dettaglio.
            </Text>
            <Link
              href={"/chi_siamo"}
              className={`bg-gray-700 text-gray-50 min-w-32 max-w-40 py-3 flex items-center justify-center rounded-3xl text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8  hover:bg-gray-600 duration-300`}
            >
              Scopri
            </Link>
          </motion.div>
        </div>
      </Wrapper>
    </section>
  );
};
