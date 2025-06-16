import React from "react";

export const CardDescriptionText = ({
  children,
  textColor,
}: {
  children: React.ReactNode;
  textColor: string;
}) => {
  return (
    <p
      className={`font-quicksand ${textColor} text-sm sm:text-base md:text-lg leading-relaxed`}
    >
      {children}
    </p>
  );
};
