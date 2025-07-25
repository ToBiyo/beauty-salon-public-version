"use client";
import { motion } from "motion/react";
import { ServiceCard } from "../ServiceCard";
import { SubHeading } from "../SubHeading";
import { DecoratedTitle } from "../DecoratedTitle";
import { Wrapper } from "../Wrapper";
import { CTA } from "../CTA";
import { ServiceData } from "@/lib/types/types";
import viso from "../../../public/assets/images/home/service-viso.jpg";
import corpo from "../../../public/assets/images/home/service-corpo.jpg";
import estetica from "../../../public/assets/images/home/service-estetica.jpg";
import consulenza from "../../../public/assets/images/home/service-consulenza.jpg";

const services: ServiceData[] = [
  {
    title: "Consulenza Personalizzata",
    description:
      "Ogni trattamento inizia con un’attenta consulenza per analizzare le tue esigenze e costruire un percorso estetico su misura. Un momento di ascolto e cura per garantire risultati duraturi e naturali.",
    image: consulenza,
    alt: "Consulenza estetica personalizzata per trattamenti su misura",
  },
  {
    title: "Trattamenti Corpo",
    description:
      "Rimodella, rilassa e riequilibra il corpo con trattamenti mirati al benessere dei tessuti, alla tonicità e alla riduzione degli inestetismi. Ritrova leggerezza e armonia.",
    image: corpo,
    alt: "Trattamento corpo rilassante per il benessere fisico ed emotivo",
  },
  {
    title: "Trattamenti Viso",
    description:
      "Tecniche avanzate per la rigenerazione cutanea, il trattamento di rughe, macchie e impurità. La tua pelle visibilmente più luminosa, compatta e sana.",
    image: viso,
    alt: "Trattamenti viso specifici per ogni tipo di pelle a Cagliari",
  },
  {
    title: "Estetica Base Plus",
    description:
      "Cura della pelle, delle unghie e del corpo con trattamenti estetici classici di alta qualità. Dalla depilazione alla manicure, ogni gesto è pensato per offrirti un’esperienza di benessere completa, in un ambiente curato e professionale.",
    image: estetica,
    alt: "Servizi estetici professionali in ambiente accogliente",
  },
];

export const Services = () => {
  return (
    <section
      id="first"
      className="w-full bg-white flex justify-center py-10 md:py-20 lg:py-32"
    >
      <Wrapper>
        <div className="w-full flex flex-col gap-8  items-center">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 1 }}
            className="flex flex-col items-center text-center gap-5 md:gap-8 "
          >
            <DecoratedTitle
              title="I Nostri Servizi"
              color="text-gray-700"
              borderColor="bg-secondaryAccent"
              centered={true}
            />

            <SubHeading textColor="text-gray-500">
              "Ritrova l’equilibrio con percorsi su misura, pensati per esaltare
              la tua naturale bellezza."
            </SubHeading>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-2 xl:my-10">
            {services.map((service, index) => {
              return (
                <ServiceCard data={service} index={index} key={service.title} />
              );
            })}
          </div>
          <CTA message="È il momento di prenderti cura di te. Prenota oggi la tua consulenza gratuita e inizia il tuo percorso verso una bellezza autentica e duratura." />
        </div>
      </Wrapper>
    </section>
  );
};
