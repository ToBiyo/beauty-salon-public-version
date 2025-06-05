import corpo from "../../public/assets/images/corpo.jpg";
import estetica from "../../public/assets/images/estetica-base.jpg";
import consulenza from "../../public/assets/images/consulenza.jpg";
import viso from "../../public/assets/images/viso.jpg";
import { ServiceCard } from "./ServiceCard";
import { ServiceData } from "@/lib/types/types";
import { SubHeading } from "./SubHeading";
import { Heading } from "./Heading";

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
    <section className="flex flex-col mx-auto gap-28 w-[80vw]">
      <div className="flex flex-col gap-10">
        <Heading main={false} textColor="text-accent">
          I Nostri Servizi
        </Heading>
        <SubHeading textColor="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </SubHeading>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {services.map((service, index) => {
          return <ServiceCard data={service} key={index} />;
        })}
      </div>
    </section>
  );
};
