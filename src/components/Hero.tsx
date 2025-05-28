import Image from "next/image";
import { CallToAction } from "./CallToAction";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import image from "../../public/assets/images/hero-resize.png";
export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-start gap-20 xl:w-[1440px] w-[80vw] relative bg-avorio  z-20">
      <div className="w-full h-auto relative bg-avorio rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt="image"
          className="fixed xl:w-[1440px] w-[80vw] h-[auto] z-10 rounded-2xl object-cover"
        ></Image>
        <Image
          src={image}
          alt="image"
          className="xl:w-[1440px] w-[80vw] h-[auto] rounded-2xl opacity-0"
        ></Image>
      </div>
      <div className="relative z-20 w-full bg-avorio pb-[300px] py-20">
        <CallToAction>
          <Heading main={true} color="cyan-700">
            Lorem ipsum dolor sit amet
          </Heading>
          <SubHeading>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </SubHeading>
        </CallToAction>
      </div>
    </section>
  );
};
