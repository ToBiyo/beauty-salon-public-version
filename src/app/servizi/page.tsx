import Image from "next/image";
import logo from "../../../public/assets/images/logo-black.png";
import { TwoColumnsLayout } from "@/components/TwoColumnsLayout";
import { TwoImagesLayout } from "@/components/TwoImagesLayout";
import { DetailedText } from "@/components/DetailedText";
import diagnosticaMain from "../../../public/assets/images/contatti.jpg";
import diagnosticaSecond from "../../../public/assets/images/consulenza.jpg";
import visoMain from "../../../public/assets/images/viso-2.jpg";
import visoSecond from "../../../public/assets/images/viso.jpg";
import corpoMain from "../../../public/assets/images/alternative.jpg";
import corpoSecond from "../../../public/assets/images/corpo.jpg";
import esteticaMain from "../../../public/assets/images/estetica.jpg";
import esteticaSecond from "../../../public/assets/images/estetica-base.jpg";

const sampleText = {
  title: "Lorem ipsum",
  firstParagraph:
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima? minima? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima?",
  secondParagraph:
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima? minima? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima?",
};

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center gap-[300px]">
      <div className="flex w-full bg-cream items-center justify-center">
        <section className="w-[80vw] flex flex-col items-center justify-center h-[700px] gap-[100px] my-[50px]">
          <h1 className="font-playfair text-6xl text-cyan-700 italic">
            I nostri trattamenti, pensati per te
          </h1>
          <h3 className="text-2xl font-quicksand text-center leading-[2.5] text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit a
            eveniet neque pariatur minus. Amet illum esse facilis inventore in.
            Maiores fuga facere doloremque laudantium fugit ipsa ad deserunt
            distinctio. Amet illum esse facilis inventore in. Maiores fuga
            facere doloremque laudantium fugit ipsa ad deserunt distinctio.
          </h3>
          <Image src={logo} alt="logo" width={400}></Image>
        </section>
      </div>
      <TwoColumnsLayout>
        <TwoImagesLayout
          main={diagnosticaMain}
          secondary={diagnosticaSecond}
          direction="left"
        />
        <DetailedText
          title={sampleText.title}
          firstParagraph={sampleText.firstParagraph}
          secondParagraph={sampleText.secondParagraph}
          color="tortora"
        />
      </TwoColumnsLayout>
      <TwoColumnsLayout>
        <DetailedText
          title={sampleText.title}
          firstParagraph={sampleText.firstParagraph}
          secondParagraph={sampleText.secondParagraph}
          color="cyan-700"
        />
        <TwoImagesLayout
          main={visoMain}
          secondary={visoSecond}
          direction="right"
        />
      </TwoColumnsLayout>
      <TwoColumnsLayout>
        <TwoImagesLayout
          main={corpoMain}
          secondary={corpoSecond}
          direction="left"
        />
        <DetailedText
          title={sampleText.title}
          firstParagraph={sampleText.firstParagraph}
          secondParagraph={sampleText.secondParagraph}
          color="tortora"
        />
      </TwoColumnsLayout>
      <TwoColumnsLayout>
        <DetailedText
          title={sampleText.title}
          firstParagraph={sampleText.firstParagraph}
          secondParagraph={sampleText.secondParagraph}
          color="cyan-700"
        />
        <TwoImagesLayout
          main={esteticaMain}
          secondary={esteticaSecond}
          direction="right"
        />
      </TwoColumnsLayout>
    </div>
  );
}
