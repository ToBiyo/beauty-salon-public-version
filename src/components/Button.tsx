import React from "react";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="text-sm sm:text-base md:text-lg px-4 py-2 sm:px-6 md:px-8 rounded-lg bg-cyan-700 text-white hover:bg-cyan-600 duration-300">
      {children}
    </button>
  );
};
