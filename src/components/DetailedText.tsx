import React from "react";

export const DetailedText = ({
  title,
  firstParagraph,
  secondParagraph,
  color,
}: {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  color: string;
}) => {
  return (
    <div className="flex flex-col  justify-center gap-10 w-full">
      <h2 className={`font-playfair text-6xl italic text-${color}`}>{title}</h2>
      <p className="font-quicksand text-lg mt-16 mb-8">{firstParagraph}</p>
      {secondParagraph && (
        <p className="font-quicksand text-lg  mb-8">{secondParagraph}</p>
      )}

      <div className="flex gap-10">
        <button
          className={`min-w-32 py-3 bg-${color} text-gray-100 rounded-xl text-lg font-quicksand`}
        >
          Whatsapp
        </button>
        <button
          className={`min-w-32 py-3 bg-${color} text-gray-100 rounded-xl text-lg font-quicksand`}
        >
          Whatsapp
        </button>
      </div>
    </div>
  );
};

/*  */
