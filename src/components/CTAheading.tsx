import React from "react";

export const CTAheading = ({
  children,
  textColor,
}: {
  children: React.ReactNode;
  textColor: string;
}) => {
  return (
    <h3
      className={`${textColor} font-playfair text-base sm:text-lg md:text-xl lg:text-3xl leading-relaxed sm:leading-relaxed md:leading-normal lg:leading-snug font-medium relative`}
    >
      {children}
    </h3>
  );
};
