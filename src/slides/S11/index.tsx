import { Column } from "components/grid/column";
import { Row } from "components/grid/row";
import { TypeScriptIcon } from "components/icons/typescript";
import React from "react";
import { Appear, Text } from "spectacle";

export const S11 = () => (
  <>
    <Row alignItems="center" justifyContent="center" paddingBottom={24}>
      <Text bold margin="0" textColor="secondary" textFont="primary" textSize="48px">
        Six months after
      </Text>

      <Column paddingLeft={20}>
        <TypeScriptIcon color="#FFFFFF" height="48px" width="48px" />
      </Column>
    </Row>

    <Appear>
      <Text caps textColor="secondary" textSize="24px">
        A retrospective
      </Text>
    </Appear>
  </>
);
