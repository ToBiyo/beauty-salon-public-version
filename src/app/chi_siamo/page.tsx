"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { HeroDescription } from "@/components/HeroDescription";
import { TwoColumnsLayout } from "@/components/TwoColumnsLayout";
import { ImFacebook, ImInstagram } from "react-icons/im";
import { Wrapper } from "@/components/Wrapper";
import { ThreeImagesLayout } from "@/components/ThreeImagesLayout";
import { DetailedText } from "@/components/DetailedText";
import { SubHeading } from "@/components/SubHeading";
import { Heading } from "@/components/Heading";
import { WhatsAppButton } from "@/components/WhatsappButton";
import { CallButton } from "@/components/CallButton";
import { Hero } from "@/components/Hero";
import { Text } from "@/components/Text";
import me from "../../../public/assets/images/me.png";
import hero from "../../../public/assets/images/hero3.jpg";
import product1 from "../../../public/assets/images/prodotto1.png";
import product2 from "../../../public/assets/images/prodotto2.png";
import product4 from "../../../public/assets/images/prodotto4.png";
import trattamento from "../../../public/assets/images/trattamento_viso.png";
import trattamento1 from "../../../public/assets/images/new.jpg";
import trattamento2 from "../../../public/assets/images/hero2.jpg";

export default function page() {
  return (
    <main className="flex flex-col items-center bg-background relative mt-[80px]">
      {/* Hero section */}
      <Hero bgColor="bg-secondaryAccent/20" image={hero} order="order-1">
        <HeroDescription
          title="Il Tuo Centro Benessere, Pensato Per Te"
          subTitle="Uno spazio in cui poterti fermare, respirare e ritrovare il tuo
            equilibrio. Ogni trattamento nasce dall’ascolto, ogni percorso è
            modellato su di te."
          order="order-2"
        />
      </Hero>
      {/* About me section */}
      <section className="w-full h-[auto]  bg-white flex flex-col justify-center items-center relative py-20">
        <TwoColumnsLayout>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex items-end mx-auto justify-center  2xl:w-[650px] 2xl:h-[650px] xl:w-[500px] xl:h-[500px] w-[300px] h-[300px]  bg-secondaryBg border-secondaryBg drop-shadow-2xl shadow-gray-900"
          >
            <Image
              src={me}
              alt={"titolare F Beautique"}
              width={200}
              height={100}
              className=" w-[80%]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-10 justify-center"
          >
            <DetailedText
              title="Chi Sono"
              firstParagraph="Mi chiamo Francesca e sono la fondatrice di F Beautyque. Da sempre coltivo la passione per il benessere e la cura della persona, e ho deciso di trasformarla in una professione costruita su ascolto, formazione continua e attenzione al dettaglio."
              textColor="text-gray-700"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex gap-5 justify-center lg:justify-start"
            >
              <div className="p-3 bg-gray-700 rounded-full hover:bg-secondaryAccent transition-all duration-300">
                <a href="https://www.facebook.com" target="_blank">
                  <ImFacebook className="text-2xl text-gray-200" />
                </a>
              </div>
              <div className="p-3 bg-gray-700 rounded-full hover:bg-secondaryAccent transition-all duration-300">
                <a href="https://www.instagram.com/" target="_blank">
                  <ImInstagram className="text-2xl text-gray-200" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </TwoColumnsLayout>
      </section>
      {/* About our mission */}
      <section className="w-full h-auto py-20 flex justify-center items-center bg-secondaryAccent/20">
        <TwoColumnsLayout>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-10 justify-center order-2 lg:order-1"
          >
            <DetailedText
              title="Il Nostro Approccio"
              firstParagraph="Crediamo in un’estetica che non impone modelli, ma che esalta la naturale unicità di ogni persona. Ogni trattamento è pensato su misura, frutto di ascolto e analisi attenta delle esigenze di ognuno."
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-grayBackground order-1 lg:order-2"
          >
            <ThreeImagesLayout
              main={trattamento}
              second={trattamento2}
              third={trattamento1}
            />
          </motion.div>
        </TwoColumnsLayout>
      </section>
      {/* Products line */}
      <section className="w-full minh-[100vh] bg-grayBackground py-20 md:py-32 flex justify-center">
        <Wrapper>
          <div className="text-center flex flex-col gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col gap-5 lg:gap-8 xl:max-w-[50%]"
            >
              <Heading main={false} textColor="text-gray-700">
                La Nostra Linea Di Prodotti
              </Heading>
              <SubHeading textColor="text-gray-600">
                Ho creato una linea di prodotti cosmetici che racchiude la mia
                visione di bellezza e benessere: formulazioni essenziali,
                efficaci e rispettose della pelle.
              </SubHeading>
            </motion.div>

            <div className="w-full flex flex-col items-center gap-4">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className=" bg-gray-700 flex items-center justify-center p-5 "
                >
                  <Image
                    src={product4}
                    alt="product1"
                    className="w-[80%]"
                  ></Image>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className=" bg-secondaryAccent/20 flex items-center justify-center p-5"
                >
                  <Image
                    src={product1}
                    alt="product1"
                    className="w-[80%]"
                  ></Image>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className=" bg-gray-700 flex items-center justify-center p-5 md:order-last lg:order-3"
                >
                  <Image
                    src={product4}
                    alt="product1"
                    className="w-[80%]"
                  ></Image>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className=" bg-secondaryAccent/20 flex items-center justify-center p-5 lg:order-last"
                >
                  <Image
                    src={product2}
                    alt="product1"
                    className="w-[80%]"
                  ></Image>
                </motion.div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
      {/* About our beauty center */}
      <section className="w-full py-20 flex justify-center items-center bg-secondaryBg">
        <TwoColumnsLayout>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-grayBackground order-first"
          >
            <ThreeImagesLayout
              main={trattamento}
              second={trattamento2}
              third={trattamento1}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-10 justify-center"
          >
            <DetailedText
              title="Un Luogo Dove Ritrovare Te Stessa"
              firstParagraph="Ogni ambiente del nostro centro è progettato per accoglierti in un’atmosfera rilassante e armoniosa. Luci soffuse, materiali naturali e profumi avvolgenti contribuiscono a creare uno spazio sicuro e rigenerante."
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
          </motion.div>
        </TwoColumnsLayout>
      </section>
    </main>
  );
}
