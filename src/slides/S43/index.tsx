import { Column } from "components/grid/column";
import React from "react";
import { Appear, Heading } from "spectacle";

export const S43 = () => (
  <Appear>
    <Column backgroundColor="#007ACC" borderRadius="100%" flexGrow={1} padding="10rem">
      <Heading size={2}>TypeScript all the things!!</Heading>
    </Column>
  </Appear>
);
