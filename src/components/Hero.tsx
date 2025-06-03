import Image from "next/image";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import image from "../../public/assets/images/new.png";

export const Hero = () => {
  return (
    <section className="flex flex-row h-[80vh]  w-[100vw]  relative bg-[url(../../public/assets/images/new.png)] bg-cover bg-fixed  overflow-hidden">
      {/* <Image src={image} alt="image" className="w-[100%] h-[auto] " /> */}

      <div className="absolute w-[100%]  h-[100%] flex items-center bg-tortora bg-opacity-40">
        <div className="max-w-[40%] ml-[10%] flex flex-col gap-12 opacity-100">
          <Heading main={true} textColor="text-cyan-700">
            Lorem ipsum dolor sit amet
          </Heading>
          <SubHeading textColor="text-gray-100">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            voluptatem ipsum esse sed beatae hic veniam, libero totam commodi
            repellat.
          </SubHeading>
          <button className="text-gray-50 block max-w-36 bg-cyan-700 p-3 rounded-lg">
            Something
          </button>
        </div>
      </div>
    </section>
  );
};
