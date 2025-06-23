import Image from "next/image";
import { StaticImageData } from "next/image";

export const DecorateImage = ({
  imageSrc,
  background,
}: {
  imageSrc: StaticImageData | string;
  background: string;
}) => {
  return (
    <div className={`p-4 ${background} drop-shadow-xl shadow-gray-700`}>
      <Image
        src={imageSrc}
        alt="me"
        className="w-full object-fill z-20 relative"
      />
    </div>
  );
};
