import React from "react";
import { CtaButtons } from "./CtaButtons";

export const CallToAction = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center gap-10">
      {children}
      <CtaButtons />
    </div>
  );
};
