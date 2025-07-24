"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { StaticImageData } from "next/image";
import Autoplay from "embla-carousel-autoplay";

export const ImagesCarousel = ({
  images,
  alt,
}: {
  images: StaticImageData[];
  alt: string[];
}) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div
      className={`mx-auto w-full embla overflow-hidden shadow-2xl shadow-gray-500  border-[8px] lg:border-[16px] border-mainBg cursor-grab `}
      ref={emblaRef}
    >
      <div className="flex embla__container">
        {images.map((image, index) => (
          <div className="embla__slide min-w-full" key={index}>
            <Image src={image} alt={alt[index]} />
          </div>
        ))}
      </div>
    </div>
  );
};
