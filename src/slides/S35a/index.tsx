import { Column } from "components/grid/column";
import React from "react";
import { Image } from "spectacle";
import really from "./really.jpg";

export const S35a = () => (
  <Column paddingBottom={48}>
    <Image src={really} />
  </Column>
);
