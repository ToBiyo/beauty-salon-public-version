import React from "react";
import { Heading } from "./Heading";
import { Text } from "./Text";

export const DetailedText = ({
  title,
  firstParagraph,
  secondParagraph,
  textColor,
}: {
  title: string;
  firstParagraph: string;
  secondParagraph: string | undefined;
  textColor: string;
}) => {
  return (
    <div className="flex flex-col  justify-center gap-8 w-full text-center lg:text-left">
      <Heading main={false} textColor={textColor}>
        {title}
      </Heading>
      <Text textColor="text-gray-600">{firstParagraph}</Text>
    </div>
  );
};

/*  */
