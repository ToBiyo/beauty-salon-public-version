"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { HeroDescription } from "@/components/HeroDescription";
import { TwoColumnsLayout } from "@/components/TwoColumnsLayout";
import { ImFacebook, ImInstagram } from "react-icons/im";
import { Wrapper } from "@/components/Wrapper";
import { DetailedText } from "@/components/DetailedText";
import { SubHeading } from "@/components/SubHeading";
import { Heading } from "@/components/Heading";
import { WhatsAppButton } from "@/components/WhatsappButton";
import { CallButton } from "@/components/CallButton";
import { DecorateImage } from "@/components/DecorateImage";
import { Hero } from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { ImagesCarousel } from "@/components/ImagesCarousel";
import me from "../../../public/assets/images/about/about-me.jpg";
import hero from "../../../public/assets/images/about/about-hero.jpg";
import product1 from "../../../public/assets/images/about/product1.png";
import product2 from "../../../public/assets/images/about/product2.png";
import product3 from "../../../public/assets/images/about/product3.png";
import product4 from "../../../public/assets/images/about/product4.png";
import product5 from "../../../public/assets/images/about/product5.png";
import product6 from "../../../public/assets/images/about/product6.png";
import approccio1 from "../../../public/assets/images/about/approccio_1.jpg";
import approccio2 from "../../../public/assets/images/about/approccio_2.jpg";
import approccio3 from "../../../public/assets/images/about/approccio_3.jpg";
import place1 from "../../../public/assets/images/about/place_1.jpg";
import place2 from "../../../public/assets/images/about/place_2.jpg";
import place3 from "../../../public/assets/images/about/place_3.jpg";
import place4 from "../../../public/assets/images/about/place_4.jpg";

let products = [product1, product2, product3, product4, product5, product6];

export default function page() {
  return (
    <main className="flex flex-col items-center bg-background relative mt-[80px]">
      {/* Hero section */}
      <Hero
        bgColor="bg-secondaryBg"
        image={hero}
        order="order-first lg:order-last"
        alt="Trattamento viso professionale centro estetico Perdaxius - estetista qualificata Sud Sardegna"
      >
        <HeroDescription
          title="F Beautyque - Il tuo centro benessere"
          subTitle="Il tuo centro benessere di fiducia a Perdaxius. Trattamenti estetici professionali, consulenza personalizzata e cura della bellezza naturale per ritrovare il tuo equilibrio"
          order="order-2"
          callToAction={true}
        />
      </Hero>
      {/* About me section */}
      <section className="w-full h-[auto]  bg-white flex flex-col justify-center items-center relative py-20">
        <TwoColumnsLayout>
          <DecorateImage
            imageSrc={me}
            alt="Francesca, fondatrice di F Beautyque, centro estetico a Perdaxius"
            initialAnimation={{ opacity: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-10 justify-center"
          >
            <DetailedText
              title="Mi presento"
              firstParagraph="Sono Francesca, estetista qualificata con anni di esperienza nei trattamenti viso e corpo. La mia filosofia si basa su consulenza personalizzata e trattamenti professionali che valorizzano la tua bellezza naturale. Ogni cliente riceve un approccio su misura, perché credo che il benessere sia un percorso unico e personale."
              textColor="text-gray-700"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex gap-5 justify-center lg:justify-start"
            >
              <div className="p-3 bg-secondaryAccent rounded-full text-gray-50 hover:bg-gray-700 hover:text-secondaryAccent transition-all duration-300">
                <a
                  href="https://www.facebook.com/people/F-Beautyque-di-Francesca-Lai/61575575922189/#"
                  target="_blank"
                >
                  <ImFacebook className="text-2xl" />
                </a>
              </div>
              <div className="p-3 bg-secondaryAccent text-gray-50 rounded-full hover:bg-gray-700 hover:text-secondaryAccent transition-all duration-300">
                <a href="https://www.instagram.com/fbeautyque/" target="_blank">
                  <ImInstagram className="text-2xl " />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </TwoColumnsLayout>
      </section>
      {/* About our mission */}
      <section className="w-full h-auto py-20 flex justify-center items-center bg-secondaryBg">
        <TwoColumnsLayout>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-10 justify-center order-2 lg:order-1 items-center lg:items-start"
          >
            <DetailedText
              title="Il Nostro Approccio alla Bellezza"
              firstParagraph={
                "Adottiamo un metodo olistico che mette al centro le tue esigenze. Ogni trattamento viso e corpo è studiato per i tuoi obiettivi specifici, utilizzando prodotti professionali di alta qualità. Dalla consulenza iniziale ai trattamenti avanzati, ti accompagniamo in un percorso di benessere che rispetta i tempi della tua pelle."
              }
              textColor="text-mainAccent"
            />
            <div className="flex flex-row gap-5 mt-4">
              <WhatsAppButton
                textColor="text-gray-100"
                bgColor="bg-mainAccent"
                animate={true}
              >
                Contattaci
              </WhatsAppButton>
              <CallButton
                textColor="text-gray-100"
                bgColor="bg-mainAccent"
                animate={true}
              >
                Prenota
              </CallButton>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-grayBackground order-1 lg:order-2"
          >
            <ImagesCarousel
              images={[approccio1, approccio2, approccio3]}
              alt={[
                "Consulenza estetica personalizzata - analisi della pelle centro benessere",
                "Trattamento viso anti-età con prodotti professionali centro estetico",
                "Trattamento corpo con tecniche avanzate centro benessere",
              ]}
            />
          </motion.div>
        </TwoColumnsLayout>
      </section>
      {/* Products line */}
      <section className="w-full py-20 md:py-32 flex justify-center">
        <Wrapper>
          <div className="text-center flex flex-col gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col gap-5 lg:gap-8 ]"
            >
              <div className="flex flex-col gap-3 items-center">
                <Heading main={false} textColor="text-gray-700">
                  La Nostra Selezione di Prodotti Professionali
                </Heading>
                <div className="h-[4px] bg-secondaryAccent w-[100px]" />
              </div>
              <SubHeading textColor="text-gray-600">
                Ogni prodotto della nostra linea è scelto con cura per efficacia
                e qualità. Creme viso anti-età, sieri intensivi, trattamenti
                corpo e cosmetica naturale completano i servizi del centro,
                permettendoti di mantenere i risultati ottenuti anche a casa.
              </SubHeading>
            </motion.div>

            <div className="w-full flex flex-col items-center gap-4">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {products.map((product, index) => (
                  <ProductCard key={index} src={product} index={index} />
                ))}
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
            <ImagesCarousel
              images={[place1, place2, place3, place4]}
              alt={[
                "Relax e benessere centro estetico - momento di cura personale",
                "Atmosfera rilassante studiata per il tuo benessere mentale",
                "Spazio intimo e riservato per il tuo momento me-time",
                "Accoglienza personalizzata centro benessere - dove ogni cliente si sente a casa",
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-10 justify-center items-center lg:items-start"
          >
            <DetailedText
              title="Il Tuo Rifugio di Bellezza nel Sud Sardegna"
              firstParagraph="Nel nostro centro estetico a Perdaxius hai trovato il luogo ideale per staccare dalla routine quotidiana. Atmosfera rilassante, professionalità e attenzione ai dettagli creano l'ambiente perfetto per dedicarti del tempo di qualità. Riscopri il piacere di prenderti cura di te stessa."
              textColor="text-mainAccent"
            />

            <div className="flex flex-row gap-5 mt-4">
              <WhatsAppButton
                textColor="text-gray-100"
                bgColor="bg-mainAccent"
                animate={true}
              >
                Contattaci
              </WhatsAppButton>
              <CallButton
                textColor="text-gray-100"
                bgColor="bg-mainAccent"
                animate={true}
              >
                Prenota
              </CallButton>
            </div>
          </motion.div>
        </TwoColumnsLayout>
      </section>
    </main>
  );
}
