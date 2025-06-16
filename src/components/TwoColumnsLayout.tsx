import React from "react";

export const TwoColumnsLayout = ({
  children,
  width,
}: {
  children: [React.ReactNode, React.ReactNode];
  width?: string;
}) => {
  const [left, right] = React.Children.toArray(children);

  const containerWidth = width || "w-[80vw]";

  return (
    <section
      className={`grid h-[auto] ${containerWidth} mx-auto relative grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-0`}
    >
      <div className="h-auto relative rounded-xl flex  lg:justify-start">
        {left}
      </div>
      <div className="flex  justify-end">{right}</div>
    </section>
  );
};
