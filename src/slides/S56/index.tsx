import { Column } from "components/grid/column";
import React from "react";
import { Heading, Text } from "spectacle";

export const S56 = () => (
  <>
    <Column paddingBottom={48}>
      <Text lineHeight={1} textColor="primary">
        Rule #3
      </Text>
    </Column>

    <Heading size={2} textColor="primary">
      Types swiss-knife
    </Heading>

    <Column paddingTop={48}>
      <Heading>
        <span aria-label="hammer-and-spanner" role="img">
          🛠
        </span>
      </Heading>
    </Column>
  </>
);
