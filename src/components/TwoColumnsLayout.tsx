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
      className={`grid h-[auto] ${containerWidth} mx-auto relative gap-20 grid-cols-1 lg:grid-cols-2`}
    >
      <div className="w-auto h-auto relative rounded-xl flex  lg:justify-start mr-20">
        {left}
      </div>
      <div className="w-auto flex  justify-end">{right}</div>
    </section>
  );
};
