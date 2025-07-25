"use client";
import { motion } from "motion/react";
import { TwoColumnsLayout } from "../TwoColumnsLayout";
import { ImagesCarousel } from "../ImagesCarousel";
import { DetailedText } from "../DetailedText";
import { WhatsAppButton } from "../WhatsappButton";
import { CallButton } from "../CallButton";
import place1 from "../../../public/assets/images/about/place_1.jpg";
import place2 from "../../../public/assets/images/about/place_2.jpg";
import place3 from "../../../public/assets/images/about/place_3.jpg";
import place4 from "../../../public/assets/images/about/place_4.jpg";

export const Place = () => {
  return (
    <section className="w-full py-20 flex justify-center items-center bg-secondaryBg">
      <TwoColumnsLayout>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-grayBackground order-first"
        >
          <ImagesCarousel
            images={[place1, place2, place3, place4]}
            alt={[
              "Relax e benessere centro estetico - momento di cura personale",
              "Atmosfera rilassante studiata per il tuo benessere mentale",
              "Spazio intimo e riservato per il tuo momento me-time",
              "Accoglienza personalizzata centro benessere - dove ogni cliente si sente a casa",
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col gap-10 justify-center items-center lg:items-start"
        >
          <DetailedText
            title="Il Tuo Rifugio di Bellezza"
            firstParagraph="Nel nostro centro estetico a Perdaxius hai trovato il luogo ideale per staccare dalla routine quotidiana. Atmosfera rilassante, professionalità e attenzione ai dettagli creano l'ambiente perfetto per dedicarti del tempo di qualità. Riscopri il piacere di prenderti cura di te stessa."
            textColor="text-mainAccent"
          />

          <div className="flex flex-row gap-5 mt-4">
            <WhatsAppButton
              textColor="text-gray-100"
              bgColor="bg-mainAccent"
              animate={true}
            >
              Contattaci
            </WhatsAppButton>
            <CallButton
              textColor="text-gray-100"
              bgColor="bg-mainAccent"
              animate={true}
            >
              Prenota
            </CallButton>
          </div>
        </motion.div>
      </TwoColumnsLayout>
    </section>
  );
};
