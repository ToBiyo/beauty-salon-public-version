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
  secondParagraph: string | undefined;
  bgColor: string;
  textColor: string;
}) => {
  return (
    <div className="flex flex-col  justify-center gap-10 w-full">
      <Heading main={false} textColor={textColor}>
        {title}
      </Heading>
      <Text textColor="text-sectionBg">{firstParagraph}</Text>
      {secondParagraph && (
        <Text textColor="text-sectionBg">{secondParagraph}</Text>
      )}
    </div>
  );
};

/*  */
