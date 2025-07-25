"use client";
import { motion } from "motion/react";
import { TwoColumnsLayout } from "../TwoColumnsLayout";
import { DecorateImage } from "../DecorateImage";
import { DetailedText } from "../DetailedText";
import { ImFacebook, ImInstagram } from "react-icons/im";
import me from "../../../public/assets/images/about/about-me.jpg";

export const AboutMe = () => {
  return (
    <section className="w-full h-[auto]  bg-white flex flex-col justify-center items-center relative py-20">
      <TwoColumnsLayout>
        <DecorateImage
          imageSrc={me}
          alt="Francesca, fondatrice di F Beautyque, centro estetico a Perdaxius"
          initialAnimation={{ opacity: 0, x: -100 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col gap-10 justify-center"
        >
          <DetailedText
            title="Mi presento"
            firstParagraph="Sono Francesca, estetista qualificata con anni di esperienza nei trattamenti viso e corpo. La mia filosofia si basa su consulenza personalizzata e trattamenti professionali che valorizzano la tua bellezza naturale. Ogni cliente riceve un approccio su misura, perché credo che il benessere sia un percorso unico e personale."
            textColor="text-gray-700"
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex gap-5 justify-center lg:justify-start"
          >
            <div className="p-3 bg-secondaryAccent rounded-full text-gray-50 hover:bg-gray-700 hover:text-secondaryAccent transition-all duration-300">
              <a
                href="https://www.facebook.com/people/F-Beautyque-di-Francesca-Lai/61575575922189/#"
                target="_blank"
              >
                <ImFacebook className="text-2xl" />
              </a>
            </div>
            <div className="p-3 bg-secondaryAccent text-gray-50 rounded-full hover:bg-gray-700 hover:text-secondaryAccent transition-all duration-300">
              <a href="https://www.instagram.com/fbeautyque/" target="_blank">
                <ImInstagram className="text-2xl " />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </TwoColumnsLayout>
    </section>
  );
};
