import Image from "next/image";
import me from "../../public/assets/images/me.png";
import logo from "../../public/assets/images/logo-black.png";
import { TwoColumnsLayout } from "./TwoColumnsLayout";

export const Presentation = () => {
  return (
    <TwoColumnsLayout>
      <>
        <div className="absolute h-full w-3/6 bg-cream -z-20 rounded-s-2xl" />
        <Image
          src={me}
          alt={"titolare F Beautique"}
          width={0}
          className="h-[100%] w-[auto]"
        />
      </>
      <>
        <h2 className="font-playfair text-6xl italic text-cyan-700">Titolo</h2>
        <p className="font-quicksand text-lg mt-16 mb-8">
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
        </p>

        <Image src={logo} width={200} alt="logo" />

        <button className="bg-cyan-700 rounded-lg text-gray-50 mt-16 p-4 max-w-40 flex items-center justify-center">
          See more
        </button>
      </>
    </TwoColumnsLayout>
  );
};
