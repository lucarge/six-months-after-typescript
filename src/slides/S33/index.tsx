import { Column } from "components/grid/column";
import React from "react";
import { Appear, Heading, Text } from "spectacle";

export const S33 = () => (
  <>
    <Column paddingBottom={96}>
      <Heading size={3} textColor="secondary">
        Summary
      </Heading>
    </Column>

    <Appear>
      <Column paddingBottom={24}>
        <Text textColor="secondary">Shorten the feedback loop</Text>
      </Column>
    </Appear>

    <Appear>
      <Text textColor="secondary">Have better contracts</Text>
    </Appear>
  </>
);
