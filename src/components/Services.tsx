import viso from "../../public/assets/images/viso.png";
import { ServiceCard } from "./ServiceCard";
import { ServiceData } from "@/lib/types/types";
import { SubHeading } from "./SubHeading";
import { Heading } from "./Heading";

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
      id="services"
      className="w-full bg-mainBg flex flex-col items-center justify-center relative py-52 gap-28"
    >
      <div className="w-[80%] flex flex-col gap-28">
        <div className="flex flex-col  gap-12 items-center text-center">
          <Heading textColor="text-gray-700" main={true}>
            I Nostri Servizi
          </Heading>
          <SubHeading textColor="text-gray-500">
            Ogni persona è unica, e così deve essere ogni trattamento. Ritrova
            l’equilibrio tra corpo e mente con percorsi su misura, pensati per
            esaltare la tua naturale bellezza.
          </SubHeading>
        </div>
        <div className="grid grid-cols-1 2xl:grid-cols-2  gap-4">
          {services.map((service, index) => {
            return <ServiceCard data={service} key={index} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
};
