import Image from "next/image";
import { StaticImageData } from "next/image";
type TwoImagesLayoutProps = {
  main: StaticImageData;
  secondary: StaticImageData;
  direction: "left" | "right";
};
export const TwoImagesLayout = ({
  main,
  secondary,
  direction,
}: TwoImagesLayoutProps) => {
  const alignContent = direction === "right" ? "items-end" : "items-start";
  const position = direction === "right" ? "right-0" : "left-0";
  return (
    <div className={`py-10 flex items-center relative`}>
      {/* <div className={`absolute bg-cream w-[40%]  h-full ${position}`} /> */}
      <div
        className={`relative z-20 flex flex-col  justify-center ${alignContent}  gap-[50px] w-[100%] mx-[20px]`}
      >
        <Image
          src={main}
          alt="lorem"
          width={200}
          className="w-[80%] rounded-2xl drop-shadow-xl shadow-gray-800"
        />
        <Image
          src={secondary}
          alt="lorem"
          width={200}
          className="w-[80%] rounded-2xl drop-shadow-xl shadow-gray-800"
        />
      </div>
    </div>
  );
};
