import React from "react";

export const CardTitle = ({
  children,
  textColor,
}: {
  children: React.ReactNode;
  textColor: string;
}) => {
  return (
    <h3
      className={`font-playfair ${textColor} text-lg sm:text-xl md:text-2xl lg:text-3xl pb-1]`}
    >
      {children}
    </h3>
  );
};
