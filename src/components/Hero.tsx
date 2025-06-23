import { StaticImageData } from "next/image";
import Image from "next/image";
import { Wrapper } from "./Wrapper";
export const Hero = ({
  image,
  children,
  bgColor,
  order,
}: {
  image: StaticImageData | string;
  children: React.ReactNode;
  bgColor: string;
  order: string;
}) => {
  const imageUrl = typeof image === "string" ? image : image.src;

  return (
    <section
      className={`w-full ${bgColor}  relative h-[auto] flex justify-center items-center py-10 md:py-20 xl:py-32`}
    >
      <Wrapper>
        <div className="flex flex-col items-center jutify-center gap-10 lg:flex-row lg:justify-between">
          {children}

          <div
            className={`lg:w-1/2 w-full h-auto flex items-center justify-center ${order}`}
          >
            <div className="w-full bg-mainBg p-3 md:w-[600px] xl:w-full">
              <Image
                src={imageUrl}
                width={500}
                height={400}
                alt="Hero Image"
                className="w-[100%]  object-contain"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
