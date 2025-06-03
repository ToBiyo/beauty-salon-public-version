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
      className={`font-playfair ${textColor} italic text-lg sm:text-xl md:text-2xl lg:text-3xl`}
    >
      {children}
    </h3>
  );
};
