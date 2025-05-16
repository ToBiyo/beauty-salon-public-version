import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { FaStar } from "react-icons/fa";

export const Reviews: React.FC = () => {
  return (
    <div className="w-[1440px] mx-auto grid grid-rows-[1fr_auto] gap-8">
      {/* First Row */}
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-6xl font-playfair italic text-tortora ">Reviews</h2>
        <h3 className="text-3xl font-quicksand my-8">What our customers say</h3>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-4 gap-6">
        <div className="flex flex-col  gap-y-6">
          <h3 className="text-2xl font-playfair italic text-cyan-700">
            Francesca
          </h3>
          <p className="font-quicksand leading-[1.7]">
            Ho avuto il piacere di provare i servizi del nuovo centro estetico F
            BEAUTYQUE e sono rimasta entusiasta! L’attenzione ai dettagli, la
            professionalità e l’ambiente accogliente rendono ogni trattamento un
            momento di vero benessere. Francesca, ha creato uno spazio dove
            qualità e cura della persona si uniscono perfettamente. Mi sono
            sentita coccolata dalla prima all’ultima fase. I prodotti utilizzati
            sono eccellenti. Consiglio vivamente F BEAUTYQUE a chi cerca
            serietà, competenza e un tocco di dolcezza.
          </p>
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <div
                className="bg-tortora w-[24px] h-[24px]"
                key={i}
                style={{
                  clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col  gap-y-6">
          <h3 className="text-2xl font-playfair italic text-cyan-700">
            Valeria Lao
          </h3>
          <p className="font-quicksand leading-[1.7]">
            Consiglio di affidarvi alle mani esperte di Francesca che, con la
            sua empatia e professionalità, riesce sempre ad accontentarci e a
            farci sentire a casa.
          </p>
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="bg-tortora w-[24px] h-[24px]"
                style={{
                  clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col  gap-y-6">
          <h3 className="text-2xl font-playfair italic text-cyan-700">
            Roberta Scotto
          </h3>
          <p className="font-quicksand leading-[1.7]">
            Francesca, è un’estetista molto professionale, preparata e
            all’avanguardia. Una giovane donna cordiale e gentile, molto precisa
            ed impeccabile. Mi sono sentita capita e coccolata, grazie ad un mix
            di esperienza ed empatia. Ho trovato un ambiente curato e
            accogliente, mi sono proprio rilassata. Tornerò senza dubbio ad
            usufruire delle sue competenze e, ovviamente consiglio vivamente il
            suo centro.
          </p>
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <div
                className="bg-tortora w-[24px] h-[24px]"
                key={i}
                style={{
                  clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col  gap-y-6">
          <h3 className="text-2xl font-playfair italic text-cyan-700">
            Anna Rita Lai
          </h3>

          <p className="font-quicksand leading-[1.7] ">
            Da BEAUTYQUE centro estetico , troverete Francesca , seria,
            competente , affidabile, in grado di farvi sentire a vostro agio ,
            coccolandovi con il suo modo pacato e gentile , ma soprattutto
            professionale. Locale accogliente , moderno e di gusto , consiglio
            vivamente.
          </p>

          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <div
                className="bg-tortora w-[24px] h-[24px]"
                key={i}
                style={{
                  clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 mt-24 w-[1200px] mx-auto">
        <h2 className="font-playfair text-4xl text-cyan-700 italic">
          Lorem ipsum dolor sit amet consectetur adipisicing{" "}
        </h2>
        <h3 className="font-quicksand text-2xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur neque
          ad enim a illo facilis ea reprehenderit deleniti doloremque minima
        </h3>
        <div className="flex gap-8">
          <button className="bg-cyan-700 text-gray-100 py-3 w-32 rounded-xl text-xl font-quicksand">
            Call
          </button>
          <button className="bg-cyan-700 text-gray-100 py-3 w-32 rounded-xl text-xl font-quicksand">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};
