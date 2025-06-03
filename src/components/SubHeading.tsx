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
      className={`font-quicksand text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-relaxed md:leading-normal lg:leading-snug font-medium ${textColor}`}
    >
      {children}
    </h3>
  );
};
