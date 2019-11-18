import { Column } from "components/grid/column";
import React from "react";
import { Appear, Heading, Text } from "spectacle";

export const S38 = () => (
  <>
    <Column paddingBottom={96}>
      <Heading size={3} textColor="secondary">
        So, what did we need?
      </Heading>
    </Column>

    <Appear>
      <Column paddingBottom={48}>
        <Text textColor="secondary">Shorten the feedback loop</Text>
      </Column>
    </Appear>

    <Appear>
      <Text textColor="secondary">Define better contracts</Text>
    </Appear>
  </>
);
