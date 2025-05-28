import React from "react";

export const Text = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-quicksand leading-relaxed md:leading-loose">
      {children}
    </p>
  );
};
