import React from "react";
import { QuotedTitle } from "./QuotedTitle";
import { Text } from "./Text";
import { DecoratedTitle } from "./DecoratedTitle";

export const DetailedText = ({
  title,
  firstParagraph,

  textColor,
}: {
  title: string;
  firstParagraph: string;

  textColor: string;
}) => {
  return (
    <div className="flex flex-col  justify-center gap-5 w-full text-center lg:text-left">
      {textColor === "text-gray-700" ? (
        <DecoratedTitle
          title={title}
          color={textColor}
          borderColor="bg-secondaryAccent"
        />
      ) : (
        <QuotedTitle title={title} color={textColor} />
      )}
      <Text textColor="text-gray-600">{firstParagraph}</Text>
    </div>
  );
};

/*  */
