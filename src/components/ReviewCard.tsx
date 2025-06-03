import { Review } from "@/lib/types/types";
import { ImStarFull } from "react-icons/im";
import { CardTitle } from "./CardTitle";
import { CardDescriptionText } from "./CardDescriptionText";

export const ReviewCard = ({ reviewData }: { reviewData: Review }) => {
  const { user, review, score } = reviewData;
  return (
    <div className="flex flex-col  gap-y-6">
      <CardTitle textColor="text-cyan-700">{user}</CardTitle>

      <CardDescriptionText>{review}</CardDescriptionText>

      <div className="flex gap-1 mb-2">
        {[...Array(score)].map((_, i) => (
          <ImStarFull className="text-tortora w-[24px] h-[24px]" key={i} />
        ))}
      </div>
    </div>
  );
};
