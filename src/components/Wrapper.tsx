import React from "react";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="xl:w-[1280px] w-5/6 ">{children}</div>;
};
