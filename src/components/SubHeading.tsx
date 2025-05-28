import React from "react";

export const SubHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="font-quicksand text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-relaxed md:leading-normal lg:leading-snug font-medium text-gray-800">
      {children}
    </h3>
  );
};
