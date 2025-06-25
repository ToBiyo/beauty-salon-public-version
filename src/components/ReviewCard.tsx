import { motion } from "motion/react";
import { Review } from "@/lib/types/types";
import { ImStarFull } from "react-icons/im";

export const ReviewCard = ({
  reviewData,
  index,
}: {
  reviewData: Review;
  index: number;
}) => {
  const { user, review, score } = reviewData;

  let animationDelay = 0;
  switch (index) {
    case 0:
      animationDelay = 0.2;
      break;
    case 1:
      animationDelay = 0.4;
      break;
    case 2:
      animationDelay = 0.6;
      break;
    case 3:
      animationDelay = 0.8;
      break;
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: animationDelay,
      }}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-secondaryBg/30 rounded-lg shadow-sm border border-stone-100 p-3 h-full flex flex-col"
    >
      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <ImStarFull
            key={i}
            className={`w-5 h-5 ${
              i < score ? "fill-mainAccent text-amber-400" : "text-stone-300"
            }`}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-500 font-quicksand text-md leading-relaxed mb-6 flex-grow">
        "{review}"
      </p>

      {/* Bottom Info */}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-playfair font-medium text-secondaryAccent text-xl">
              {user}
            </h4>
          </div>
          <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-mainAccent font-medium text-sm">
              {user
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
