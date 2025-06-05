import Link from "next/link";
import { TwoColumnsLayout } from "./TwoColumnsLayout";
import { Heading } from "./Heading";
import { Text } from "./Text";
import Image from "next/image";
import me from "../../public/assets/images/presentation.png";
import logo from "../../public/assets/images/logo-black.png";

export const Presentation = () => {
  return (
    <div className="w-[100vw]">
      <TwoColumnsLayout>
        <>
          <Image
            src={me}
            alt={"titolare F Beautique"}
            width={0}
            className="lg:w-[100%] w-[60%] rounded-2xl shadow-lg"
          />
        </>
        <div className="flex flex-col gap-20">
          <Heading main={false} textColor="text-sectionBg">
            Titolo
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            dicta fugit corrupti laborum earum laboriosam non nam sunt, iste
            natus nisi rem. Officia impedit magni consequatur repellat labore
            laudantium id. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Possimus dicta fugit corrupti laborum earum laboriosam non nam
            sunt, iste natus nisi rem. Officia impedit magni consequatur
            repellat labore laudantium id. id. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Possimus dicta fugit corrupti laborum
            earum laboriosam non nam sunt, iste natus nisi rem. Officia impedit
            magni consequatur repellat labore laudantium id.
          </Text>

          <Image src={logo} width={200} alt="logo" />

          <Link
            href={"/chi_siamo"}
            className="bg-sectionBg text-gray-50  max-w-40 py-3 flex items-center justify-center rounded-3xl text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 hover:text-accent  duration-300"
          >
            See more
          </Link>
        </div>
      </TwoColumnsLayout>
    </div>
  );
};
