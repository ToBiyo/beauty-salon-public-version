import { CallToAction } from "./CallToAction";
import { Review } from "@/lib/types/types";
import { ReviewCard } from "./ReviewCard";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
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
    <section className=" w-[80vw] mx-auto grid grid-rows-[1fr_auto] gap-8 ">
      {/* First Row */}
      <div className="flex flex-col justify-center h-full mb gap-10">
        <Heading main={false} textColor="text-tortora">
          Reviews
        </Heading>
        <SubHeading textColor="text-gray-500">
          What our customers say
        </SubHeading>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-12 mb-28">
        {reviews.map((review, index) => {
          return <ReviewCard reviewData={review} key={index} />;
        })}
      </div>
    </section>
  );
};
