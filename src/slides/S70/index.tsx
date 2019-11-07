import { Column } from "components/grid/column";
import React from "react";
import { Heading, Text } from "spectacle";

export const S70 = () => (
  <>
    <Heading caps size={1} textColor="primary">
      Lessons
    </Heading>

    <Column paddingTop={48}>
      <Text textColor="primary">we learned on our skins</Text>
    </Column>
  </>
);
