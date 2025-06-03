import React from "react";

export const CardDescriptionText = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <p className="font-quicksand text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
      {children}
    </p>
  );
};
