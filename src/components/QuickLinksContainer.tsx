import React from "react";

export const QuickLinksContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center xl:items-start justify-center gap-8">
      {children}
    </div>
  );
};
