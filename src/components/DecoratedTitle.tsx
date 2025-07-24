import React from "react";
import { Heading } from "./Heading";
export const DecoratedTitle = ({
  title,
  color,
  borderColor,
  centered,
}: {
  title: string;
  color: string;
  borderColor: string;
  centered?: boolean;
}) => {
  let alignment = centered ? "items-center" : " items-center lg:items-start";

  return (
    <div className={`flex flex-col gap-3  ${alignment}`}>
      <Heading textColor={color}>{title}</Heading>
      <div className={`h-[4px] ${borderColor} w-[100px]`} />
    </div>
  );
};
