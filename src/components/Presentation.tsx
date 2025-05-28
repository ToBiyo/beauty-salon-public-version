import Image from "next/image";
import me from "../../public/assets/images/me.png";
import logo from "../../public/assets/images/logo-black.png";
import { TwoColumnsLayout } from "./TwoColumnsLayout";
import { Heading } from "./Heading";
import { Text } from "./Text";

export const Presentation = () => {
  return (
    <TwoColumnsLayout>
      <>
        <div className="absolute h-full lg:w-3/6 bg-cream -z-20 lg:rounded-s-2xl w-[70%] rounded-2xl" />
        <Image
          src={me}
          alt={"titolare F Beautique"}
          width={0}
          className="lg:w-[100%] w-[60%]"
        />
      </>
      <div className="flex flex-col gap-20">
        <Heading main={false} color="cyan-700">
          Titolo
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          dicta fugit corrupti laborum earum laboriosam non nam sunt, iste natus
          nisi rem. Officia impedit magni consequatur repellat labore laudantium
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          dicta fugit corrupti laborum earum laboriosam non nam sunt, iste natus
          nisi rem. Officia impedit magni consequatur repellat labore laudantium
          id. id. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Possimus dicta fugit corrupti laborum earum laboriosam non nam sunt,
          iste natus nisi rem. Officia impedit magni consequatur repellat labore
          laudantium id.
        </Text>

        <Image src={logo} width={200} alt="logo" />

        <button className="bg-cyan-700 rounded-lg text-gray-50  p-4 max-w-40 flex items-center justify-center">
          See more
        </button>
      </div>
    </TwoColumnsLayout>
  );
};
