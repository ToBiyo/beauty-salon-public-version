import { Review } from "@/lib/types/types";
import { ImStarFull } from "react-icons/im";

export const ReviewCard = ({ reviewData }: { reviewData: Review }) => {
  const { user, review, score } = reviewData;
  return (
    <div className="flex flex-col  gap-y-6">
      <h3 className="text-2xl font-playfair italic text-cyan-700">{user}</h3>

      <p className="font-quicksand leading-[1.7] ">{review}</p>

      <div className="flex gap-1 mb-2">
        {[...Array(score)].map((_, i) => (
          <ImStarFull className="text-tortora w-[24px] h-[24px]" key={i} />
        ))}
      </div>
    </div>
  );
};
/* 
 Anna Rita Lai 
  Da BEAUTYQUE centro estetico , troverete Francesca , seria,
            competente , affidabile, in grado di farvi sentire a vostro agio ,
            coccolandovi con il suo modo pacato e gentile , ma soprattutto
            professionale. Locale accogliente , moderno e di gusto , consiglio
            vivamente.*/
