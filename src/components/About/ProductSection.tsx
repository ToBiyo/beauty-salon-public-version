"use client";
import { motion } from "motion/react";
import { Wrapper } from "../Wrapper";
import { DecoratedTitle } from "../DecoratedTitle";
import { SubHeading } from "../SubHeading";
import ProductCard from "./ProductCard";
import product1 from "../../../public/assets/images/about/product1.png";
import product2 from "../../../public/assets/images/about/product2.png";
import product3 from "../../../public/assets/images/about/product3.png";
import product4 from "../../../public/assets/images/about/product4.png";
import product5 from "../../../public/assets/images/about/product5.png";
import product6 from "../../../public/assets/images/about/product6.png";

const PRODUCTS = [product1, product2, product3, product4, product5, product6];

export const ProductSection = () => {
  return (
    <section className="w-full py-20 md:py-32 flex justify-center">
      <Wrapper>
        <div className="text-center flex flex-col gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-5 lg:gap-8"
          >
            <DecoratedTitle
              title="La Nostra Selezione di Prodotti Professionali"
              color="text-gray-700"
              borderColor="bg-secondaryAccent"
              centered={true}
            />

            <SubHeading textColor="text-gray-600">
              Ogni prodotto della nostra linea è scelto con cura per efficacia e
              qualità. Creme viso anti-età, sieri intensivi, trattamenti corpo e
              cosmetica naturale completano i servizi del centro, permettendoti
              di mantenere i risultati ottenuti anche a casa.
            </SubHeading>
          </motion.div>

          <div className="w-full flex flex-col items-center gap-4">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {PRODUCTS.map((product, index) => (
                <ProductCard key={index} src={product} index={index} />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
