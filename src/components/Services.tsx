"use client";
import { motion } from "motion/react";
import { ServiceCard } from "./ServiceCard";
import { ServiceData } from "@/lib/types/types";
import { SubHeading } from "./SubHeading";
import { Heading } from "./Heading";
import { Wrapper } from "./Wrapper";
import viso from "../../public/assets/images/viso.png";
import { WhatsAppButton } from "./WhatsappButton";
import { CallButton } from "./CallButton";
const services: ServiceData[] = [
  {
    title: "Consulenza Personalizzata",
    description:
      "Attraverso una consulenza professionale, individuiamo il trattamento più adatto a te. Ogni percorso inizia dall’ascolto e dalla comprensione dei tuoi bisogni.",
    image: viso,
  },
  {
    title: "Trattamenti Corpo",
    description:
      "Tecniche avanzate per rimodellare, rilassare e rivitalizzare il corpo. Ogni gesto è calibrato per restituirti leggerezza e armonia.",
    image: viso,
  },
  {
    title: "Trattamenti Viso",
    description:
      "Tecniche avanzate per il trattamento del viso, mirate a idratare, rigenerare e illuminare. Ogni trattamento è personalizzato per rispondere alle esigenze specifiche della tua pelle.",
    image: viso,
  },
  {
    title: "Estetica Base Plus",
    description:
      "Cura della pelle, epilazione e trattamenti anti-età eseguiti con competenza e attenzione ai dettagli. Per risultati visibili e duraturi.",
    image: viso,
  },
];

export const Services = () => {
  return (
    <section
      id="first"
      className="w-full bg-white flex justify-center py-10 md:py-20 lg:py-32"
    >
      <Wrapper>
        <div className="w-full flex flex-col gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 1 }}
            className="flex flex-col items-center text-center gap-5 md:gap-8 xl:max-w-[50%]"
          >
            <Heading textColor="text-gray-700" main={true}>
              I Nostri Servizi
            </Heading>

            <SubHeading textColor="text-gray-500">
              Ritrova l’equilibrio con percorsi su misura, pensati per esaltare
              la tua naturale bellezza.
            </SubHeading>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-2 xl:my-10">
            {services.map((service, index) => {
              return (
                <ServiceCard data={service} index={index} key={service.title} />
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 1 }}
            className="flex flex-col justify-center items-center text-center w-full gap-5 md:gap-10 xl:max-w-[60%]"
          >
            <SubHeading textColor="text-gray-700">
              È tempo di prenderti cura di te. Prenota oggi stesso e inizia il
              tuo percorso verso una bellezza autentica e duratura.
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
        </div>
      </Wrapper>
    </section>
  );
};
