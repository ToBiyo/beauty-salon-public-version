import corpo from "../../public/assets/images/corpo.jpg";
import estetica from "../../public/assets/images/estetica-base.jpg";
import consulenza from "../../public/assets/images/consulenza.jpg";
import viso from "../../public/assets/images/viso.jpg";
import { ServiceCard } from "./ServiceCard";
import { ServiceData } from "@/lib/types/types";

const services: ServiceData[] = [
  {
    title: "Consulenza",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ad inventore tempore. Porro, similique veniam aspernatur recusandae ipsa aperiam amet.",
    image: consulenza,
  },
  {
    title: "Corpo",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ad inventore tempore. Porro, similique veniam aspernatur recusandae ipsa aperiam amet.",
    image: corpo,
  },
  {
    title: "Estetica",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ad inventore tempore. Porro, similique veniam aspernatur recusandae ipsa aperiam amet.",
    image: estetica,
  },
  {
    title: "Viso",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ad inventore tempore. Porro, similique veniam aspernatur recusandae ipsa aperiam amet.",
    image: viso,
  },
];

export const Services = () => {
  return (
    <section className="flex flex-col mx-auto w-[1440px] gap-28">
      <div className="flex flex-col gap-12 h-full w-[50%]">
        <h2 className="font-playfair text-5xl text-cyan-700 italic">
          I Nostri Servizi
        </h2>
        <h3 className="font-quicksand text-2xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </h3>
      </div>
      <div className="flex flex-row flex-wrap justify-between">
        {services.map((service, index) => {
          return <ServiceCard data={service} key={index} />;
        })}
      </div>
      {/*  */}
    </section>
  );
};
