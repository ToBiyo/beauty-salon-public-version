import { StaticImageData } from "next/image";
import { TwoColumnsLayout } from "./TwoColumnsLayout";
import { DecorateImage } from "./DecorateImage";
import { ServiceDescription } from "./ServiceDescription";

type ServiceDataProp = {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  buttonBg: string;
  id: string;
};

export const ServiceSection = ({
  serviceData,
  index,
}: {
  serviceData: ServiceDataProp;
  index: number;
}) => {
  const { title, description, imageUrl, buttonBg, id } = serviceData;

  const background =
    index % 2 === 0
      ? { containerBg: "bg-white", imageBg: "bg-secondaryAccent/20" }
      : index === 1
      ? { containerBg: "bg-secondaryAccent/20", imageBg: "bg-white" }
      : { containerBg: "bg-secondaryBg", imageBg: "bg-white" };

  const order = index % 2 === 0 ? "" : "order-first lg:order-first";

  const ImageInitialAnimation =
    index % 2 === 0 ? { opacity: 0, x: -100 } : { opacity: 0, x: 100 };
  const DescripotionInitialAnimation =
    index % 2 === 0 ? { opacity: 0, y: 100 } : { opacity: 0, y: -100 };

  return (
    <section
      id={id}
      className={`w-full ${background.containerBg} py-20 xl:py-32 flex justify-center`}
    >
      <TwoColumnsLayout>
        <DecorateImage
          background={background.imageBg}
          imageSrc={imageUrl}
          initialAnimation={ImageInitialAnimation}
        />
        <ServiceDescription
          buttonBg={buttonBg}
          title={title}
          description={description}
          order={order}
          initialAnimation={DescripotionInitialAnimation}
        />
      </TwoColumnsLayout>
    </section>
  );
};
