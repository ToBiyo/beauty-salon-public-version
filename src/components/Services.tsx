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
    <section className="flex flex-col justify-center mx-auto gap-28 w-[80vw] h-[auto] py-60">
      <div className="flex flex-col gap-10">
        <Heading main={false} textColor="text-secondaryAccent">
          I Nostri Servizi
        </Heading>
        <SubHeading textColor="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </SubHeading>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-5 xl:gap-10 mb-10">
        {services.map((service, index) => {
          return <ServiceCard data={service} key={index} />;
        })}
      </div>
    </section>
  );
};
