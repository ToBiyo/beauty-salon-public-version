import Link from "next/link";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import { Text } from "./Text";
import Image from "next/image";
import { TwoColumnsLayout } from "./TwoColumnsLayout";
import me from "../../public/assets/images/presentation.png";

export const Presentation = () => {
  return (
    <div className="w-[100vw] h-[auto] flex flex-col items-center justify-center bg-gradient-to-r from-sectionBg via-sectionBg/80 to-accent py-60">
      <TwoColumnsLayout>
        <div className="flex flex-col gap-10  justify-center">
          <Heading textColor="text-secondaryAccent" main={false}>
            Lorem ipsum
          </Heading>
          <SubHeading textColor="text-gray-100">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </SubHeading>
          <Text textColor="text-gray-100">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur ipsa, quisquam odio quibusdam suscipit enim molestias
            vitae error esse vel nulla, est dolores excepturi quia eveniet,
            dignissimos accusamus inventore nisi.
          </Text>
          <Link
            href={"/chi_siamo"}
            className={`bg-secondaryAccent text-gray-50  max-w-40 py-3 flex items-center justify-center rounded-3xl text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8  hover:bg-accent duration-300`}
          >
            Scopri
          </Link>
        </div>

        <div className=" flex items-end justify-end rounded-2xl">
          <Image
            src={me}
            alt="me"
            className="rounded-2xl w-[100%] shadow-2xl shadow-gray-800"
          ></Image>
        </div>
      </TwoColumnsLayout>
    </div>
  );
};
