import { StaticImageData } from "next/image";
import { TwoColumnsLayout } from "./TwoColumnsLayout";
import { ServiceDescription } from "./ServiceDescription";
import { ImagesCarousel } from "./ImagesCarousel";

type ServiceDataProp = {
  title: string;
  description: string;
  imageUrl: StaticImageData[];
  alt: string[];
  id?: string;
};

export const ServiceSection = ({
  serviceData,
  index,
}: {
  serviceData: ServiceDataProp;
  index: number;
}) => {
  const { title, description, imageUrl, id, alt } = serviceData;

  const properties =
    index % 2 === 0
      ? {
          containerBg: "bg-white",
          textColor: "text-gray-700",
          decorativeBg: "bg-secondaryAccent",
          order: "order-last lg:order-first",
        }
      : {
          containerBg: "bg-secondaryBg",
          textColor: "text-mainAccent",
          decorativeBg: "bg-mainAccent",
          order: "order-last",
        };

  const order = index % 2 !== 0 ? "order-first lg:order-last" : "order-first";

  const DescripotionInitialAnimation =
    index % 2 === 0 ? { opacity: 0, y: 100 } : { opacity: 0, y: -100 };

  return (
    <section
      id={id}
      className={`w-full ${properties.containerBg} py-20  flex justify-center`}
    >
      <TwoColumnsLayout>
        <ImagesCarousel images={imageUrl} alt={alt} />
        <ServiceDescription
          buttonBg={properties.decorativeBg}
          title={title}
          description={description}
          order={properties.order}
          initialAnimation={DescripotionInitialAnimation}
          textColor={properties.textColor}
          borderColor={properties.decorativeBg}
        />
      </TwoColumnsLayout>
    </section>
  );
};
