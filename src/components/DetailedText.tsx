import React from "react";
import { Heading } from "./Heading";
import { Text } from "./Text";

export const DetailedText = ({
  title,
  firstParagraph,
  secondParagraph,
  bgColor,
  textColor,
}: {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  bgColor: string;
  textColor: string;
}) => {
  return (
    <div className="flex flex-col  justify-center gap-10 w-full">
      <Heading main={false} textColor={textColor}>
        {title}
      </Heading>
      <Text>{firstParagraph}</Text>
      {secondParagraph && <Text>{secondParagraph}</Text>}

      <div className="flex gap-10">
        <button
          className={`min-w-32 py-3 ${bgColor} text-gray-100 rounded-xl text-lg font-quicksand`}
        >
          Whatsapp
        </button>
        <button
          className={`min-w-32 py-3 ${bgColor} text-gray-100 rounded-xl text-lg font-quicksand`}
        >
          Whatsapp
        </button>
      </div>
    </div>
  );
};

/*  */
