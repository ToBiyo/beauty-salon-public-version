import { Review } from "@/lib/types/types";
import { ImStarFull } from "react-icons/im";
import { CardTitle } from "./CardTitle";
import { CardDescriptionText } from "./CardDescriptionText";

export const ReviewCard = ({ reviewData }: { reviewData: Review }) => {
  const { user, review, score } = reviewData;
  return (
    <div className="flex flex-col  gap-y-6 border-b-[1px] rounded-xl shadow-xl border-[1px] border-gray-100 shadow-gray-600 px-8 py-5  relative ">
      <div className="flex gap-1">
        {[...Array(score)].map((_, i) => (
          <ImStarFull
            className="text-secondaryAccent w-[24px] h-[24px]"
            key={i}
          />
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <CardDescriptionText textColor="text-gray-100">
          "{review}"
        </CardDescriptionText>
      </div>
      <CardTitle textColor="text-gray-100">-{user}</CardTitle>
    </div>
  );
};
