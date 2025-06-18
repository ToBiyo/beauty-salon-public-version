import Image from "next/image";

import { TwoColumnsLayout } from "@/components/TwoColumnsLayout";
import { ThreeImagesLayout } from "@/components/ThreeImagesLayout";
import { DetailedText } from "@/components/DetailedText";
import { SubHeading } from "@/components/SubHeading";
import { Heading } from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import { WhatsAppButton } from "@/components/WhatsappButton";
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
import { CallButton } from "@/components/CallButton";

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
      <section className="w-[100vw]  bg-secondaryAccent/40 relative h-[auto] md:h-[60vh] xl:h-[80vh] flex items-center justify-center py-4">
        <div className="sm:w-[90vw] lg:w-[80vw] h-full flex flex-col md:flex-row   jutify-center">
          <div className="md:w-1/2 w-full h-auto p-5 flex items-center  justify-end lg:justify-center  ">
            <div className="w-full bg-mainBg p-8">
              <Image
                src={hero}
                alt="Hero Image"
                className="w-[100%] object-contain"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col md:items-start md:text-left justify-center gap-10 relative items-center text-center pl-8 xl:pl-32">
            <Heading textColor="text-gray-700" main={true}>
              Il tuo centro benessere, pensato per te
            </Heading>
            <SubHeading textColor="text-gray-500">
              Uno spazio in cui poterti fermare, respirare e ritrovare il tuo
              equilibrio. Ogni trattamento nasce dall’ascolto, ogni percorso è
              modellato su di te.
            </SubHeading>

            <a
              href="#services"
              className="bg-gray-700 px-5 py-3 text-white rounded-3xl front-quicksand text-sm sm:text-base md:text-base lg:text-lg"
            >
              Scopri di più
            </a>
          </div>
        </div>
      </section>

      <div className="w-[100vw] h-[auto] py-40 bg-grayBackground flex justify-center items-center relative">
        <TwoColumnsLayout>
          <div className="p-5 g rounded-full">
            <div className=" flex items-center justify-center 2xl:w-[650px] 2xl:h-[650px] xl:w-[500px] xl:h-[500px] w-[400px] h-[400px] rounded-full bg-secondaryBg drop-shadow-2xl shadow-gray-900">
              <Image
                src={me}
                alt={"titolare F Beautique"}
                width={250}
                className=" w-[60%]"
              />
            </div>
          </div>
          <DetailedText
            title="Chi sono"
            firstParagraph="Mi chiamo Francesca e sono la fondatrice di F Beautyque. Da sempre coltivo la passione per il benessere e la cura della persona, e ho deciso di trasformarla in una professione costruita su ascolto, formazione continua e attenzione al dettaglio."
            secondParagraph="Il mio obiettivo è accompagnare ogni cliente in un percorso di armonia e consapevolezza, offrendo trattamenti personalizzati che valorizzano la bellezza naturale e favoriscono un profondo equilibrio tra corpo e mente."
            textColor="text-gray-700"
          />
        </TwoColumnsLayout>
      </div>
      <div className="w-[100vw] h-auto py-20 flex justify-center items-center bg-secondaryAccent/40">
        <TwoColumnsLayout>
          <div className="flex flex-col gap-10 justify-center">
            <DetailedText
              title="Il nostro approccio"
              firstParagraph="Crediamo in un’estetica che non impone modelli, ma che esalta la naturale unicità di ogni persona. Ogni trattamento è pensato su misura, frutto di ascolto e analisi attenta delle esigenze di ognuno."
              secondParagraph="Lavoriamo con delicatezza e competenza per offrire non solo risultati visibili, ma anche esperienze di benessere durature, in un ambiente che trasmette tranquillità e professionalità."
              textColor="text-gray-700"
            />
            <div className="flex flex-col gap-5">
              <p className="font-quicksand text-2xl">
                Ogni trattamento comincia da un primo passo: contattaci e ti
                guideremo nella scelta più adatta a te.
              </p>
              <div className="flex flex-row gap-5 mt-4">
                <WhatsAppButton textColor="text-gray-100" bgColor="bg-gray-700">
                  Contattaci
                </WhatsAppButton>
                <CallButton textColor="text-gray-100" bgColor="bg-gray-700">
                  Prenota
                </CallButton>
              </div>
            </div>
          </div>
          <div className="bg-grayBackground p-10 rounded-2xl overflow-hidden">
            <ThreeImagesLayout
              main={trattamento}
              second={trattamento2}
              third={trattamento1}
            />
          </div>
        </TwoColumnsLayout>
      </div>
      {/* <section className="w-full bg-sectionBg flex flex-col items-center justify-center text-center py-40 gap-20">
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
      </section> */}
      <section className="w-[100vw] minh-[100vh] bg-grayBackground py-60 flex flex-col items-center justify-between gap-28">
        <div className="w-[80vw]">
          <div className="text-center flex flex-col gap-20 mb-20">
            <Heading main={false} textColor="text-gray-700">
              La mia linea di prodotti
            </Heading>
            <div className="max-w-[70%] flex mx-auto">
              <SubHeading textColor="text-gray-600">
                Ho creato una linea di prodotti cosmetici che racchiude la mia
                visione di bellezza e benessere: formulazioni essenziali,
                efficaci e rispettose della pelle. Ogni prodotto è frutto della
                mia esperienza sul campo e di un'attenta selezione di
                ingredienti naturali e performanti.
              </SubHeading>
            </div>
          </div>
          <div className="w-[100%] flex flex-col items-center gap-4">
            <div className="w-[100%] grid grid-cols-4 gap-4 ">
              <ProductCard src={product3} />
              <div className=" bg-secondaryBg flex items-center justify-center  p-5">
                <Image
                  src={product1}
                  alt="product1"
                  className="w-[70%]"
                ></Image>
              </div>
              <div className=" bg-gray-700 flex items-center justify-center  p-5">
                <Image
                  src={product4}
                  alt="product1"
                  className="w-[70%]"
                ></Image>
              </div>
              <div className=" bg-secondaryBg flex items-center justify-center  p-5">
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
      <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-secondaryAccent/40">
        <TwoColumnsLayout>
          <div className="bg-grayBackground p-10 rounded-2xl overflow-hidden">
            <ThreeImagesLayout
              main={spazio1}
              second={spazio2}
              third={spazio3}
            />
          </div>
          <div className="flex flex-col gap-10 justify-center">
            <DetailedText
              title="Un luogo dove ritrovare te stessa"
              firstParagraph="Ogni ambiente del nostro centro è progettato per accoglierti in un’atmosfera rilassante e armoniosa. Luci soffuse, materiali naturali e profumi avvolgenti contribuiscono a creare uno spazio sicuro e rigenerante."
              secondParagraph="Che tu venga per un trattamento, una coccola o semplicemente per staccare la mente, vogliamo che ogni momento trascorso qui sia una pausa preziosa dedicata solo a te."
              textColor="text-gary-700"
            />

            <div className="flex flex-col gap-5">
              <p className="font-quicksand text-2xl text-gray-600">
                Vieni a scoprire il nostro centro: prenota la tua esperienza di
                benessere.
              </p>
              <div className="flex flex-row gap-5 mt-4">
                <WhatsAppButton textColor="text-gray-100" bgColor="bg-gray-700">
                  Contattaci
                </WhatsAppButton>
                <CallButton textColor="text-gray-100" bgColor="bg-gray-700">
                  Prenota
                </CallButton>
              </div>
            </div>
          </div>
        </TwoColumnsLayout>
      </div>
    </main>
  );
}
