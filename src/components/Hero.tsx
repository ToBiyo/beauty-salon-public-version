import { CallToAction } from "./CallToAction";
export const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-20 w-full">
      <div className="w-full h-[800px] bg-[url(../../public/assets/images/hero-home.jpg)] bg-fixed bg-bottom bg-cover flex relative">
        <div className="bg-tortora h-full w-full absolute opacity-60"></div>
      </div>
      <CallToAction>
        <>
          <h1 className="text-5xl font-playfair text-cyan-700 italic">
            Lorem ipsum dolor sit amet
          </h1>
          <h3 className="text-3xl font-quicksand">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h3>
        </>
      </CallToAction>
    </section>
  );
};
