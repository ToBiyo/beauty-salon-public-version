import Image from "next/image";
import logo from "../../../public/assets/images/logo-gold.png";
import me from "../../../public/assets/images/me.png";
import hero from "../../../public/assets/images/hero-about.jpg";
import { TwoColumnsLayout } from "@/components/TwoColumnsLayout";
import { ThreeImagesLayout } from "@/components/ThreeImagesLayout";
import { DetailedText } from "@/components/DetailedText";

const sampleText = {
  title: "Lorem ipsum",
  firstParagraph:
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima? minima? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima?",
  secondParagraph:
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima? minima? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima?",
};

export default function page() {
  return (
    <main className="flex flex-col items-center gap-[300px]">
      {/* Hero */}
      <section
        className={`w-full h-[700px] bg-[url(../../public/assets/images/hero-about.jpg)] bg-fixed bg-center bg-cover flex justify-center items-center flex-col `}
      >
        <div className="absolute w-full h-[700px] bg-cyan-900 opacity-85"></div>
        <div className="w-[1440px] flex flex-col  justify-center gap-28 relative z-20 items-center">
          <Image
            src={logo}
            alt="logo"
            width={300}
            className="min-w-[500px] "
          ></Image>
          <p className="font-quicksand leading-[2.7] text-lg  text-gray-100 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            obcaecati magni necessitatibus sequi, expedita odit ullam mollitia
            architecto rerum fugit neque perspiciatis quam quis distinctio odio
            nulla repellendus? Corporis, minima? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Dolore obcaecati magni necessitatibus
            sequi, expedita odit ullam mollitia architecto rerum fugit neque
            perspiciatis quam quis distinctio odio nulla repellendus? Corporis,
            minima? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <div className="flex flwx-row gap-5">
            <button className="min-w-32 py-3 bg-avorio rounded-xl  text-lg font-quicksand">
              Call
            </button>
            <button className="min-w-32 py-3 bg-avorio rounded-xl text-lg font-quicksand">
              Whatsapp
            </button>
          </div>
        </div>
      </section>
      {/* Page section */}
      <TwoColumnsLayout>
        <>
          <div className="absolute h-full w-3/6 bg-cream -z-20 rounded-s-2xl" />
          <Image
            src={me}
            alt={"titolare F Beautique"}
            width={0}
            className="h-[100%] w-[auto]"
          />
        </>
        <DetailedText
          title={sampleText.title}
          firstParagraph={sampleText.firstParagraph}
          secondParagraph={sampleText.secondParagraph}
          color="cyan-700"
        />
      </TwoColumnsLayout>
      <TwoColumnsLayout>
        <DetailedText
          title={sampleText.title}
          firstParagraph={sampleText.firstParagraph}
          secondParagraph={sampleText.secondParagraph}
          color="tortora"
        />
        <ThreeImagesLayout main={hero} second={hero} third={hero} />
      </TwoColumnsLayout>
      <TwoColumnsLayout>
        <ThreeImagesLayout main={hero} second={hero} third={hero} />
        <DetailedText
          title={sampleText.title}
          firstParagraph={sampleText.firstParagraph}
          secondParagraph={sampleText.secondParagraph}
          color="cyan-700"
        />
      </TwoColumnsLayout>
    </main>
  );
}
