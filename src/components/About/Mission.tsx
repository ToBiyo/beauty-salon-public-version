"use client";
import { motion } from "motion/react";
import { TwoColumnsLayout } from "../TwoColumnsLayout";
import { DetailedText } from "../DetailedText";
import { WhatsAppButton } from "../WhatsappButton";
import { CallButton } from "../CallButton";
import { ImagesCarousel } from "../ImagesCarousel";
import approccio1 from "../../../public/assets/images/about/approccio_1.jpg";
import approccio2 from "../../../public/assets/images/about/approccio_2.jpg";
import approccio3 from "../../../public/assets/images/about/approccio_3.jpg";

export const Mission = () => {
  return (
    <section className="w-full h-auto py-20 flex justify-center items-center bg-secondaryBg">
      <TwoColumnsLayout>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col gap-10 justify-center order-2 lg:order-1 items-center lg:items-start"
        >
          <DetailedText
            title="Il Nostro Approccio alla Bellezza"
            firstParagraph={
              "Adottiamo un metodo olistico che mette al centro le tue esigenze. Ogni trattamento viso e corpo è studiato per i tuoi obiettivi specifici, utilizzando prodotti professionali di alta qualità. Dalla consulenza iniziale ai trattamenti avanzati, ti accompagniamo in un percorso di benessere che rispetta i tempi della tua pelle."
            }
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
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-grayBackground order-1 lg:order-2"
        >
          <ImagesCarousel
            images={[approccio1, approccio2, approccio3]}
            alt={[
              "Consulenza estetica personalizzata - analisi della pelle centro benessere",
              "Trattamento viso anti-età con prodotti professionali centro estetico",
              "Trattamento corpo con tecniche avanzate centro benessere",
            ]}
          />
        </motion.div>
      </TwoColumnsLayout>
    </section>
  );
};
