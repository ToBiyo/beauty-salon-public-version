import { Review } from "@/lib/types/types";
import { ImStarFull } from "react-icons/im";
import { CardTitle } from "./CardTitle";
import { CardDescriptionText } from "./CardDescriptionText";

export const ReviewCard = ({ reviewData }: { reviewData: Review }) => {
  const { user, review, score } = reviewData;
  return (
    <div className="flex flex-col  gap-y-6 px-3">
      <CardTitle textColor="text-accent">{user}</CardTitle>

      <CardDescriptionText>{review}</CardDescriptionText>

      <div className="flex gap-1 mb-2">
        {[...Array(score)].map((_, i) => (
          <ImStarFull className="text-accent w-[24px] h-[24px]" key={i} />
        ))}
      </div>
    </div>
  );
};
