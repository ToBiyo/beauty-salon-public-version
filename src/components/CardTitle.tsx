import React from "react";

export const CardTitle = ({
  children,
  textColor,
}: {
  children: React.ReactNode;
  textColor: string;
}) => {
  return (
    <h3 className={`font-playfair italic ${textColor} text-2xl md:text-3xl]`}>
      {children}
    </h3>
  );
};
