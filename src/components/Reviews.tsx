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

export const Reviews = () => {
  return (
    <section className="w-full py-40 px-4 bg-stone-50">
      <div className="w-[80%] mx-auto">
        {/* Header */}
        <div className="flex flex-col text-center mb-20 gap-12">
          <Heading textColor="text-gray-800" main={false}>
            Cosa Dicono di Noi
          </Heading>
          <SubHeading textColor="text-gray-600">
            La soddisfazione delle nostre clienti è la nostra più grande
            ricompensa. Scopri le esperienze di chi ha già scelto F Beautyque.
          </SubHeading>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} reviewData={review} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-stone-700 transition-colors">
            Prenota il Tuo Trattamento
          </button>
        </div>
      </div>
    </section>
  );
};
