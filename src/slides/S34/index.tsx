import { Column } from "components/grid/column";
import React from "react";
import { Appear, Heading, Text } from "spectacle";

export const S34 = () => (
  <>
    <Column paddingBottom={36}>
      <Heading size={3} textColor="secondary">
        Issues with PropTypes
      </Heading>
    </Column>

    <Appear>
      <Column paddingBottom={16}>
        <Text textColor="secondary">Runtime only checks</Text>
      </Column>
    </Appear>

    <Appear>
      <Column paddingBottom={24}>
        <Text textColor="secondary">Lack of expressiveness</Text>
      </Column>
    </Appear>
  </>
);
