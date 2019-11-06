import { Column } from "components/grid/column";
import React from "react";
import { Heading, Text } from "spectacle";

export const S58 = () => (
  <>
    <Column paddingBottom={48}>
      <Text lineHeight={1} textColor="primary">
        Rule #4
      </Text>
    </Column>

    <Heading size={2} textColor="primary">
      Time to adapt
    </Heading>

    <Column paddingTop={48}>
      <Heading>
        <span aria-label="clock" role="img">
          🕐
        </span>
      </Heading>
    </Column>
  </>
);
