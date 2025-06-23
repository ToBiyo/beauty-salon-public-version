import React from "react";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[1440px] px-5 md:px-10 lg:px-5">{children}</div>;
};
