import React from "react";

export const SubHeading = ({
  children,
  textColor,
}: {
  children: React.ReactNode;
  textColor: string;
}) => {
  return (
    <h3
      className={`${textColor} font-quicksand text-lg md:text-xl  2xl:text-2xl leading-relaxed`}
    >
      {children}
    </h3>
  );
};
