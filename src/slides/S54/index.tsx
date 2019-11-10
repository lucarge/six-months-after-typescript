import { Column } from "components/grid/column";
import React from "react";
import { Heading, Text } from "spectacle";

export const S54 = () => (
  <>
    <Column paddingBottom={48}>
      <Text lineHeight={1} textColor="primary">
        Rule #2
      </Text>
    </Column>

    <Heading size={2} textColor="primary">
      Application boundaries
    </Heading>

    <Column paddingTop={48}>
      <Heading>
        <span aria-label="shield" role="img">
          🛡
        </span>
      </Heading>
    </Column>
  </>
);
