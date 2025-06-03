import Image from "next/image";
import logo from "../../../public/assets/images/logo-gold.png";
import me from "../../../public/assets/images/me.png";
import hero from "../../../public/assets/images/hero-about.jpg";
import { TwoColumnsLayout } from "@/components/TwoColumnsLayout";
import { ThreeImagesLayout } from "@/components/ThreeImagesLayout";
import { DetailedText } from "@/components/DetailedText";
import { SubHeading } from "@/components/SubHeading";

const sampleText = {
  title: "Lorem ipsum",
  firstParagraph:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima? ",
  secondParagraph:
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima? ",
};

export default function page() {
  return (
    <main className="flex flex-col items-center gap-[300px] mb-[300px]">
      <div className="w-full bg-cyan-800 flex justify-center items-center ">
        <section
          className={`w-[80vw]  flex justify-center items-center flex-col gap-20`}
        >
          <TwoColumnsLayout>
            <Image
              src={me}
              alt={"titolare F Beautique"}
              width={0}
              className="w-[80%]"
            />
            <div className="flex flex-col gap-20">
              <Image
                src={logo}
                alt="logo"
                width={300}
                className="w-[80%] "
              ></Image>
              <SubHeading textColor="text-avorio">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
                obcaecati magni necessitatibus sequi, expedita odit ullam
                mollitia architecto rerum fugit neque perspiciatis quam quis
                distinctio odio nulla repellendus? Corporis, minima?
              </SubHeading>
              <div className="flex flwx-row gap-5">
                <button className="min-w-32 py-3 bg-tortora rounded-xl text-avorio text-lg font-quicksand">
                  Call
                </button>
                <button className="min-w-32 py-3 bg-tortora rounded-xl text-avorio text-lg font-quicksand">
                  Whatsapp
                </button>
              </div>
            </div>
          </TwoColumnsLayout>
        </section>
      </div>

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
