import React from "react";

export const TwoColumnsLayout = ({
  children,
}: {
  children: [React.ReactNode, React.ReactNode];
}) => {
  const [left, right] = React.Children.toArray(children);
  return (
    <section className="flex items-center min-h-[auto]  justify-between  w-[80vw] mx-auto relative  flex-col lg:flex-row">
      <div className="lg:w-[45%] w-[80vw] h-full relative rounded-xl flex  lg:justify-start">
        {left}
      </div>
      <div className="flex flex-col lg:w-[45%] w-[80vw]  h-full">{right}</div>
    </section>
  );
};
