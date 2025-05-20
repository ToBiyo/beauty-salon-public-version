import React from "react";

export const TwoColumnsLayout = ({
  children,
}: {
  children: [React.ReactNode, React.ReactNode];
}) => {
  const [left, right] = React.Children.toArray(children);
  return (
    <section className="flex items-center min-h-[700px]  justify-between w-[1440px] mx-auto relative ">
      <div className="w-[45%] h-full relative rounded-xl flex ">{left}</div>
      <div className="flex flex-col w-[45%]  justify-center h-full">
        {right}
      </div>
    </section>
  );
};
