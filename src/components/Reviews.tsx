"use client";
import { motion } from "motion/react";
import { Review } from "@/lib/types/types";
import { ReviewCard } from "./ReviewCard";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import { Wrapper } from "./Wrapper";
import { WhatsAppButton } from "./WhatsappButton";
import { CallButton } from "./CallButton";
//review should be fetched from google places api

const reviews: Review[] = [
  {
    user: "Francesca",
    review: `Ho avuto il piacere di provare i servizi del nuovo centro estetico F BEAUTYQUE e sono 
    rimasta entusiasta! L’attenzione ai dettagli, la professionalità e l’ambiente accogliente rendono 
    ogni trattamento un momento di vero benessere. Francesca, ha creato uno spazio dove qualità e cura della persona si uniscono perfettamente. 
    Mi sono sentita coccolata dalla prima all’ultima fase. I prodotti utilizzati sono eccellenti. 
    Consiglio vivamente F BEAUTYQUE a chi cerca serietà, competenza e un tocco di dolcezza`,
    score: 5,
  },
  {
    user: "Valeria Lao",
    review: `Consiglio di affidarvi alle mani esperte di Francesca che, con la sua empatia e professionalità, 
    riesce sempre ad accontentarci e a farci sentire a casa.`,
    score: 5,
  },
  {
    user: "Roberta Scotto",
    review: `Francesca, è un’estetista molto professionale, preparata e all’avanguardia. Una giovane donna cordiale e gentile, 
    molto precisa ed impeccabile. Mi sono sentita capita e coccolata, grazie ad un mix di esperienza ed empatia. Ho trovato un ambiente curato e accogliente, 
    mi sono proprio rilassata. Tornerò senza dubbio ad usufruire delle sue competenze e, ovviamente consiglio vivamente il suo centro.`,
    score: 5,
  },
  {
    user: "Anna Rita Lai",
    review: `Da BEAUTYQUE centro estetico , troverete Francesca , seria, competente , affidabile, in grado di farvi sentire a vostro agio , 
    coccolandovi con il suo modo pacato e gentile , ma soprattutto professionale. Locale accogliente , moderno e di gusto , consiglio vivamente.`,
    score: 5,
  },
];

export const Reviews = () => {
  return (
    <section className="w-full bg-white flex justify-center py-10  md:py-20 lg:py-32">
      <Wrapper>
        <>
          {/* Header */}
          <div className="flex flex-col text-center mb-10 gap-5 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Heading textColor="text-gray-800" main={false}>
                Cosa Dicono di Noi
              </Heading>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <SubHeading textColor="text-gray-600">
                La soddisfazione delle nostre clienti è la nostra più grande
                ricompensa.
              </SubHeading>
            </motion.div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-10 my-5 md:py-8 xl:my-12">
            {reviews.map((review, index) => (
              <ReviewCard key={review.user} reviewData={review} />
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 1 }}
            className="flex flex-col justify-center items-center mx-auto text-center w-full gap-5 md:gap-10 xl:max-w-[60%]"
          >
            <SubHeading textColor="text-gray-700">
              Come loro, anche tu puoi sentirti coccolata e valorizzata. Prenota
              oggi e inizia il tuo percorso di benessere con noi.
            </SubHeading>
            <div className="flex flex-row items-center gap-6">
              <WhatsAppButton bgColor={"bg-gray-700"} textColor="text-gray-200">
                Scrivici
              </WhatsAppButton>
              <CallButton bgColor={"bg-gray-700"} textColor="text-gray-200">
                Chiamaci
              </CallButton>
            </div>
          </motion.div>
        </>
      </Wrapper>
    </section>
  );
};
