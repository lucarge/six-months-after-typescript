import { Column } from "components/grid/column";
import React from "react";
import { Heading, Text } from "spectacle";

export const S51 = () => (
  <>
    <Column paddingBottom={48}>
      <Text lineHeight={1} textColor="primary">
        Rule #1
      </Text>
    </Column>

    <Heading size={2} textColor="primary">
      Core dependencies
    </Heading>

    <Column paddingTop={48}>
      <Heading>
        <span aria-label="link" role="img">
          🔗
        </span>
      </Heading>
    </Column>
  </>
);
