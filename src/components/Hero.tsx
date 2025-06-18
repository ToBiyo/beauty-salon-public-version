import { StaticImageData } from "next/image";

export const Hero = ({
  background,
  children,
}: {
  background: StaticImageData | string;
  children: React.ReactNode;
}) => {
  const backgroundUrl =
    typeof background === "string" ? background : background.src;

  return (
    <section
      className={`flex flex-row h-[100vh]  w-[100vw]  relative overflow-hidden`}
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gray-900/65">{children}</div>
    </section>
  );
};
