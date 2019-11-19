import { Column } from "components/grid/column";
import React from "react";
import { Appear, Heading, Text } from "spectacle";

export const S80 = () => (
  <>
    <Column paddingBottom={48}>
      <Heading>Conclusions</Heading>
    </Column>

    <Appear>
      <Column paddingBottom={48}>
        <Text textColor="secondary">TS has definitely brought value in ProntoPro.</Text>
      </Column>
    </Appear>

    <Appear>
      <Column paddingBottom={48}>
        <Text textColor="secondary">It's been a bumpy ride so far, but we're having fun!</Text>
      </Column>
    </Appear>

    <Appear>
      <Column paddingBottom={48}>
        <Text textColor="secondary">TS is not a must-have: context is the king.</Text>
      </Column>
    </Appear>
  </>
);
