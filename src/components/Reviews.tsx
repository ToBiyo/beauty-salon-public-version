import { FaStar } from "react-icons/fa";
import { CallToAction } from "./CallToAction";
import { Review } from "@/lib/types/types";
import { ReviewCard } from "./ReviewCard";

//review should be fetched from google places api

const reviews: Review[] = [
  {
    user: "Francesca",
    review: `Ho avuto il piacere di provare i servizi del nuovo centro estetico F BEAUTYQUE e sono 
    rimasta entusiasta! L’attenzione ai dettagli, la professionalità e l’ambiente accogliente rendono 
    ogni trattamento un momento di vero benessere. Francesca, ha creato uno spazio dove qualità e cura della persona si uniscono perfettamente. 
    Mi sono sentita coccolata dalla prima all’ultima fase. I prodotti utilizzati sono eccellenti. 
    Consiglio vivamente F BEAUTYQUE a chi cerca serietà, competenza e un tocco di dolcezza`,
    score: 5,
  },
  {
    user: "Valeria Lao",
    review: `Consiglio di affidarvi alle mani esperte di Francesca che, con la sua empatia e professionalità, 
    riesce sempre ad accontentarci e a farci sentire a casa.`,
    score: 5,
  },
  {
    user: "Roberta Scotto",
    review: `Francesca, è un’estetista molto professionale, preparata e all’avanguardia. Una giovane donna cordiale e gentile, 
    molto precisa ed impeccabile. Mi sono sentita capita e coccolata, grazie ad un mix di esperienza ed empatia. Ho trovato un ambiente curato e accogliente, 
    mi sono proprio rilassata. Tornerò senza dubbio ad usufruire delle sue competenze e, ovviamente consiglio vivamente il suo centro.`,
    score: 5,
  },
  {
    user: "Anna Rita Lai",
    review: `Da BEAUTYQUE centro estetico , troverete Francesca , seria, competente , affidabile, in grado di farvi sentire a vostro agio , 
    coccolandovi con il suo modo pacato e gentile , ma soprattutto professionale. Locale accogliente , moderno e di gusto , consiglio vivamente.`,
    score: 5,
  },
];

export const Reviews: React.FC = () => {
  return (
    <section className="w-[1440px] mx-auto grid grid-rows-[1fr_auto] gap-8 ">
      {/* First Row */}
      <div className="flex flex-col justify-center h-full mb">
        <h2 className="text-6xl font-playfair italic text-tortora ">Reviews</h2>
        <h3 className="text-3xl font-quicksand my-8">What our customers say</h3>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-4 gap-6 mb-20">
        {reviews.map((review, index) => {
          return <ReviewCard reviewData={review} key={index} />;
        })}
      </div>
      <CallToAction>
        <>
          <h2 className="font-playfair text-4xl text-cyan-700 italic">
            Lorem ipsum dolor sit amet consectetur adipisicing{" "}
          </h2>
          <h3 className="font-quicksand text-2xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            neque ad enim a illo facilis ea reprehenderit deleniti doloremque
            minima
          </h3>
        </>
      </CallToAction>
    </section>
  );
};
