import { Column } from "components/grid/column";
import React from "react";
import { Image } from "spectacle";
import thanks from "./thanks.gif";

export const S90 = () => (
  <Column paddingBottom={48}>
    <Image src={thanks} />
  </Column>
);
