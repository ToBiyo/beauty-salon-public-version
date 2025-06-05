import React from "react";

export const Heading = ({
  children,
  textColor,
  main,
}: {
  children: React.ReactNode;
  textColor: string;
  main: boolean;
}) => {
  return main ? (
    <h1
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug sm:leading-snug md:leading-tight lg:leading-tight xl:leading-none font-playfair ${textColor}`}
    >
      {children}
    </h1>
  ) : (
    <h2
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug sm:leading-snug md:leading-tight lg:leading-tight xl:leading-none font-playfair ${textColor}`}
    >
      {children}
    </h2>
  );
};
