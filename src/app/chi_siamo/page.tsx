import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsappButton";
import { CallButton } from "@/components/CallButton";
import { TwoColumnsLayout } from "@/components/TwoColumnsLayout";
import { ThreeImagesLayout } from "@/components/ThreeImagesLayout";
import { DetailedText } from "@/components/DetailedText";
import { SubHeading } from "@/components/SubHeading";
import { Heading } from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import { CallToAction } from "@/components/CallToAction";
import { Hero } from "@/components/Hero";
import me from "../../../public/assets/images/me.png";
import hero from "../../../public/assets/images/hero3.jpg";
import product1 from "../../../public/assets/images/prodotto1.png";
import product2 from "../../../public/assets/images/prodotto2.png";
import product3 from "../../../public/assets/images/prodotto3.png";
import product4 from "../../../public/assets/images/prodotto4.png";
import trattamento from "../../../public/assets/images/trattamento_viso.png";
import trattamento1 from "../../../public/assets/images/new.jpg";
import trattamento2 from "../../../public/assets/images/hero2.jpg";
import spazio3 from "../../../public/assets/images/spazio3.jpg";
import spazio1 from "../../../public/assets/images/spazio1.jpg";
import spazio2 from "../../../public/assets/images/spazio2.jpg";

const sampleText = {
  title: "Lorem ipsum",
  firstParagraph:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima? ",
  secondParagraph:
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati magni necessitatibus sequi, expedita odit ullam mollitia architecto rerum fugit neque perspiciatis quam quis distinctio odio nulla repellendus? Corporis, minima? ",
};

export default function page() {
  return (
    <main className="flex flex-col items-center bg-background relative">
      <Hero background={hero}>
        <div className="h-full w-[40%] mx-[10%] flex flex-col justify-center gap-12">
          <Heading textColor="text-secondaryAccent" main={true}>
            Dove la bellezza incontra il benessere
          </Heading>
          <SubHeading textColor="text-gray-200">
            Rigenera corpo e mente con trattamenti estetici su misura. Prenota
            subito il tuo trattamento personalizzato.
          </SubHeading>

          <div className="flex gap-8">
            <WhatsAppButton
              bgColor="bg-secondaryAccent"
              textColor="text-gray-100"
            >
              Scrivici
            </WhatsAppButton>
            <CallButton bgColor="bg-secondaryAccent" textColor="text-gray-100">
              Chiama
            </CallButton>
          </div>
        </div>
      </Hero>

      <div className="w-[100vw] h-[auto] py-20 bg-grayBackground flex justify-center items-center relative">
        <TwoColumnsLayout>
          <Image
            src={me}
            alt={"titolare F Beautique"}
            width={250}
            className="w-[60%]"
          />

          <DetailedText
            title={sampleText.title}
            firstParagraph={sampleText.firstParagraph}
            secondParagraph={sampleText.secondParagraph}
            textColor="text-secondaryAccent"
            bgColor="bg-sectionBg"
          />
        </TwoColumnsLayout>
      </div>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center ">
        <TwoColumnsLayout>
          <DetailedText
            title={sampleText.title}
            firstParagraph={sampleText.firstParagraph}
            secondParagraph={sampleText.secondParagraph}
            textColor="text-secondaryAccent"
            bgColor="bg-secondaryAccent"
          />
          <div className="bg-grayBackground p-10 rounded-2xl overflow-hidden">
            <ThreeImagesLayout
              main={trattamento}
              second={trattamento2}
              third={trattamento1}
            />
          </div>
        </TwoColumnsLayout>
      </div>
      <section className="w-full bg-sectionBg flex flex-col items-center justify-center text-center py-40 gap-20">
        <h2 className="text-accent font-playfair text-5xl block w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime
          obcaecati mollitia eligendi vitae consectetur?
        </h2>
        <div className="flex gap-6">
          <CallButton bgColor="bg-accent" textColor="text-gray-100">
            Prenota ora
          </CallButton>
          <WhatsAppButton bgColor="bg-accent" textColor="text-gray-100">
            Prenota subito
          </WhatsAppButton>
        </div>
      </section>
      <section className="w-[100vw] minh-[100vh] bg-grayBackground py-32 flex flex-col items-center justify-between gap-28">
        <div className="w-[80vw]">
          <div className="text-center flex flex-col gap-20 mb-20">
            <Heading main={false} textColor="text-secondaryAccent">
              Lorem ipsum
            </Heading>
            <div className="max-w-[70%] flex mx-auto">
              <SubHeading textColor="text-sectionBg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate reprehenderit laudantium dolore architecto
                consectetur, reiciendis provident eligendi, suscipit,
                voluptatibus debitis dolor quos doloremque nemo illum
                perferendis voluptatem. Sint, tenetur inventore.
              </SubHeading>
            </div>
          </div>
          <div className="w-[100%] flex flex-col items-center gap-4">
            <div className="w-[100%] grid grid-cols-4 gap-4 ">
              <ProductCard src={product3} />
              <div className=" bg-accent flex items-center justify-center rounded-2xl p-5">
                <Image
                  src={product1}
                  alt="product1"
                  className="w-[70%]"
                ></Image>
              </div>
              <div className=" bg-sectionBg flex items-center justify-center rounded-2xl p-5">
                <Image
                  src={product4}
                  alt="product1"
                  className="w-[70%]"
                ></Image>
              </div>
              <div className=" bg-accent flex items-center justify-center rounded-2xl p-5">
                <Image
                  src={product2}
                  alt="product1"
                  className="w-[70%]"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center ">
        <TwoColumnsLayout>
          <div className="bg-grayBackground p-10 rounded-2xl overflow-hidden">
            <ThreeImagesLayout
              main={spazio1}
              second={spazio2}
              third={spazio3}
            />
          </div>
          <DetailedText
            title={sampleText.title}
            firstParagraph={sampleText.firstParagraph}
            secondParagraph={sampleText.secondParagraph}
            textColor="text-secondaryAccent"
            bgColor="bg-secondaryAccent"
          />
        </TwoColumnsLayout>
      </div>
    </main>
  );
}
