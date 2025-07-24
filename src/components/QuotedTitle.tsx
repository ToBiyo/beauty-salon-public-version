import { Heading } from "./Heading";

import React from "react";

export const QuotedTitle = ({
  title,
  color,
}: {
  title: string;
  color: string;
}) => {
  return (
    <>
      <Heading textColor={color} main={false}>
        "{title}"
      </Heading>
    </>
  );
};
