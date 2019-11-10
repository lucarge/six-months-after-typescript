import { Column } from "components/grid/column";
import React from "react";
import { Heading, Text } from "spectacle";

export const S60 = () => (
  <>
    <Column paddingBottom={48}>
      <Text textColor="secondary">Did TypeScript</Text>
    </Column>

    <Heading caps size={1}>
      deliver
    </Heading>

    <Column paddingTop={48}>
      <Text textColor="secondary">on its promises?</Text>
    </Column>
  </>
);
