import Image from "next/image";
import { CallToAction } from "./CallToAction";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import image from "../../public/assets/images/hero2.png";

export const Hero = () => {
  return (
    <section className="flex flex-row  w-[100vw] h-auto  relative">
      <Image src={image} alt="image" className="w-[100%] h-[auto] " />

      <div className="absolute w-[35%]  h-[100%] left-[10%] flex flex-col justify-center items-start gap-20 ">
        <Heading main={true} color="cyan-700">
          Lorem ipsum dolor sit amet
        </Heading>
        <SubHeading textColor="text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
          voluptatem ipsum esse sed beatae hic veniam, libero totam commodi
          repellat.
        </SubHeading>
        <button className="text-gray-50 bg-cyan-700 p-3 rounded-lg">
          Something
        </button>
      </div>
    </section>
  );
};
