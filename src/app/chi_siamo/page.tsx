import Image from "next/image";

import { TwoColumnsLayout } from "@/components/TwoColumnsLayout";
import { ImFacebook, ImInstagram } from "react-icons/im";
import { Wrapper } from "@/components/Wrapper";
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
import { Hero } from "@/components/Hero";
import { Text } from "@/components/Text";

export default function page() {
  return (
    <main className="flex flex-col items-center bg-background relative mt-[80px]">
      {/* Hero section */}
      <Hero bgColor="bg-secondaryAccent/30" image={hero} order="order-1">
        <div className="lg:w-1/2 w-full flex flex-col justify-center gap-5 items-center text-center lg:text-left lg:justify-between lg:items-start lg:gap-8  order-2">
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
      </Hero>
      {/* About me section */}
      <section className="w-full h-[auto]  bg-white flex flex-col justify-center items-center relative py-20">
        <TwoColumnsLayout>
          <div className="flex items-center mx-auto justify-center  2xl:w-[650px] 2xl:h-[650px] xl:w-[500px] xl:h-[500px] w-[300px] h-[300px] rounded-full bg-secondaryBg drop-shadow-2xl shadow-gray-900">
            <Image
              src={me}
              alt={"titolare F Beautique"}
              width={200}
              height={100}
              className=" w-[60%]"
            />
          </div>
          <div className="flex flex-col gap-10 justify-center">
            <DetailedText
              title="Chi sono"
              firstParagraph="Mi chiamo Francesca e sono la fondatrice di F Beautyque. Da sempre coltivo la passione per il benessere e la cura della persona, e ho deciso di trasformarla in una professione costruita su ascolto, formazione continua e attenzione al dettaglio."
              secondParagraph="Il mio obiettivo è accompagnare ogni cliente in un percorso di armonia e consapevolezza, offrendo trattamenti personalizzati che valorizzano la bellezza naturale e favoriscono un profondo equilibrio tra corpo e mente."
              textColor="text-gray-700"
            />
            <div className="flex gap-5 justify-center lg:justify-start">
              <div className="p-3 bg-gray-700 rounded-full">
                <ImFacebook className="text-2xl text-gray-200" />
              </div>
              <div className="p-3 bg-gray-700 rounded-full">
                <ImInstagram className="text-2xl text-gray-200" />
              </div>
            </div>
          </div>
        </TwoColumnsLayout>
      </section>
      {/* About our mission */}
      <section className="w-full h-auto py-20 flex justify-center items-center bg-secondaryAccent/30">
        <TwoColumnsLayout>
          <div className="flex flex-col gap-10 justify-center order-2 lg:order-1">
            <DetailedText
              title="Il nostro approccio"
              firstParagraph="Crediamo in un’estetica che non impone modelli, ma che esalta la naturale unicità di ogni persona. Ogni trattamento è pensato su misura, frutto di ascolto e analisi attenta delle esigenze di ognuno."
              secondParagraph="Lavoriamo con delicatezza e competenza per offrire non solo risultati visibili, ma anche esperienze di benessere durature, in un ambiente che trasmette tranquillità e professionalità."
              textColor="text-gray-700"
            />
            <div className="flex flex-col gap-5 items-center text-center lg:items-start lg:text-left">
              <Text textColor="text-gray-600 font-semibold">
                Ogni trattamento comincia da un primo passo: contattaci e ti
                guideremo nella scelta più adatta a te.
              </Text>
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
          <div className="bg-grayBackground order-1 lg:order-2">
            <ThreeImagesLayout
              main={trattamento}
              second={trattamento2}
              third={trattamento1}
            />
          </div>
        </TwoColumnsLayout>
      </section>
      {/* Products line */}
      <section className="w-full minh-[100vh] bg-grayBackground py-20 md:py-32 flex justify-center">
        <Wrapper>
          <div className="text-center flex flex-col gap-8 lg:gap-16">
            <div className="flex flex-col gap-5 lg:gap-8">
              <Heading main={false} textColor="text-gray-700">
                La mia linea di prodotti
              </Heading>

              <SubHeading textColor="text-gray-600">
                Ho creato una linea di prodotti cosmetici che racchiude la mia
                visione di bellezza e benessere: formulazioni essenziali,
                efficaci e rispettose della pelle.
              </SubHeading>
            </div>

            <div className="w-full flex flex-col items-center gap-4">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                <ProductCard src={product3} />
                <div className=" bg-secondaryAccent/30 flex items-center justify-center p-5">
                  <Image
                    src={product1}
                    alt="product1"
                    className="w-[80%]"
                  ></Image>
                </div>
                <div className=" bg-gray-700 flex items-center justify-center p-5 md:order-last lg:order-3">
                  <Image
                    src={product4}
                    alt="product1"
                    className="w-[80%]"
                  ></Image>
                </div>
                <div className=" bg-secondaryAccent/30 flex items-center justify-center p-5 lg:order-last">
                  <Image
                    src={product2}
                    alt="product1"
                    className="w-[80%]"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
      {/* About our beauty center */}
      <section className="w-full py-20 flex justify-center items-center bg-secondaryBg">
        <TwoColumnsLayout>
          <ThreeImagesLayout main={spazio1} second={spazio2} third={spazio3} />

          <div className="flex flex-col gap-10 justify-center">
            <DetailedText
              title="Un luogo dove ritrovare te stessa"
              firstParagraph="Ogni ambiente del nostro centro è progettato per accoglierti in un’atmosfera rilassante e armoniosa. Luci soffuse, materiali naturali e profumi avvolgenti contribuiscono a creare uno spazio sicuro e rigenerante."
              secondParagraph="Che tu venga per un trattamento, una coccola o semplicemente per staccare la mente, vogliamo che ogni momento trascorso qui sia una pausa preziosa dedicata solo a te."
              textColor="text-gary-700"
            />

            <div className="flex flex-col gap-5 text-center items-center lg:text-start lg:items-start">
              <Text textColor="text-gray-600 font-semibold">
                Vieni a scoprire il nostro centro: prenota la tua esperienza di
                benessere.
              </Text>
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
      </section>
    </main>
  );
}
