import { Column } from "components/grid/column";
import React from "react";
import { Heading, Text } from "spectacle";

export const S32 = () => (
  <>
    <Column paddingBottom={48}>
      <Text lineHeight={1} textColor="secondary">
        Problem #2
      </Text>
    </Column>

    <Heading size={2}>Breaking changes</Heading>
  </>
);
