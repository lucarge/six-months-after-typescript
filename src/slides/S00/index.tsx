import { Column } from "components/grid/column";
import { ProntoProIcon } from "components/icons/prontopro";
import React from "react";
import { Appear, Text } from "spectacle";

export const S00 = () => (
  <>
    <ProntoProIcon height="auto" width="100%" />

    <Appear>
      <Column paddingTop={48}>
        <Text textFont="tertiary">https://prontopro.engineering/careers</Text>
      </Column>
    </Appear>
  </>
);
