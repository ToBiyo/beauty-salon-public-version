import React from "react";
import { Wrapper } from "./Wrapper";

export const TwoColumnsLayout = ({
  children,
}: {
  children: [React.ReactNode, React.ReactNode];
}) => {
  const [left, right] = React.Children.toArray(children);

  return (
    <Wrapper>
      <div
        className={`w-full grid h-[auto] mx-auto grid-cols-1 lg:grid-cols-2 gap-8`}
      >
        {left}

        {right}
      </div>
    </Wrapper>
  );
};
