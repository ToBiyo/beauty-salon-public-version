import { Hero } from "@/components/Hero";
import hero from "../../../public/assets/images/hero3.jpg";
import viso from "../../../public/assets/images/viso.jpg";
import { HeroDescription } from "@/components/HeroDescription";
import { ServiceSection } from "@/components/ServiceSection";

export default function page() {
  const services = [
    {
      buttonBg: "bg-gray-700",
      title: "Consulenza Personalizzata",
      description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur ipsa, quisquam odio quibusdam suscipit enim molestias
              vitae error esse vel nulla, est dolores excepturi quia eveniet,
              dignissimos accusamus inventore nisi. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit.`,
      imageUrl: viso,
      id: "consulenza",
    },
    {
      buttonBg: "bg-gray-700",
      title: "Tattamenti Viso",
      description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur ipsa, quisquam odio quibusdam suscipit enim molestias
              vitae error esse vel nulla, est dolores excepturi quia eveniet,
              dignissimos accusamus inventore nisi. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit.`,
      imageUrl: viso,
      id: "trattamenti_viso",
    },
    {
      buttonBg: "bg-gray-700",
      title: "Trattamenti Corpo",
      description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur ipsa, quisquam odio quibusdam suscipit enim molestias
              vitae error esse vel nulla, est dolores excepturi quia eveniet,
              dignissimos accusamus inventore nisi. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit.`,
      imageUrl: viso,
      id: "trattamenti_viso",
    },
    {
      buttonBg: "bg-gray-700",
      title: "Estetica Base Plus",
      description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur ipsa, quisquam odio quibusdam suscipit enim molestias
              vitae error esse vel nulla, est dolores excepturi quia eveniet,
              dignissimos accusamus inventore nisi. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit.`,
      imageUrl: viso,
      id: "estetica_plus",
    },
  ];

  return (
    <main className="w-[full] flex flex-col items-center bg-background justify-center mt-[80px]">
      <Hero bgColor="bg-secondaryBg" image={hero} order="lg:order-2 order-1">
        <HeroDescription
          title="  Il tuo centro benessere, pensato per te"
          subTitle="Ogni trattamento nasce dall’ascolto, ogni percorso è modellato su di
            te."
          order="order-2 lg:order-1"
        />
      </Hero>
      {services.map((service, index) => (
        <ServiceSection
          serviceData={service}
          index={index}
          key={service.title}
        />
      ))}
    </main>
  );
}
