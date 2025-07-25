import { motion } from "motion/react";

import { StaticImageData } from "next/image";
import Image from "next/image";

export default function ProductCard({
  src,
  index,
}: {
  src: StaticImageData;
  index: number;
}) {
  let cardBackgroundColor: string = "";

  switch (index) {
    case 0:
      cardBackgroundColor = "bg-secondaryAccent/40";

      break;
    case 1:
      cardBackgroundColor = "bg-gray-600";

      break;
    case 2:
      cardBackgroundColor =
        "bg-secondaryAccent/40 sm:bg-gray-600 lg:bg-secondaryAccent/40";

      break;
    case 3:
      cardBackgroundColor =
        "bg-gray-600 sm:bg-secondaryAccent/40 lg:bg-gray-600";

      break;
    case 4:
      cardBackgroundColor = "bg-secondaryAccent/40";

      break;
    case 5:
      cardBackgroundColor = "bg-gray-600";

      break;
    default:
      cardBackgroundColor = "bg-secondaryAccent/20";
  }

  return (
    <article>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
        className={`flex  flex-col items-center justify-center pt-5 ${cardBackgroundColor}`}
      >
        <Image src={src} alt="product1" className="w-[70%]" />
      </motion.div>
    </article>
  );
}
