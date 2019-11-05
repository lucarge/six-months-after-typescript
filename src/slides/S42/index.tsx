import { Column } from "components/grid/column";
import { Row } from "components/grid/row";
import { FlowIcon } from "components/icons/flow";
import { TypeScriptIcon } from "components/icons/typescript";
import React from "react";
import { Appear } from "spectacle";

export const S42 = () => (
  <Row backgroundColor="#2d343a">
    <Column alignItems="center" flexBasis="0" flexGrow={1} justifyContent="center">
      <FlowIcon height="20vw" width="20vw" />
    </Column>

    <Appear>
      <Column alignItems="center" backgroundColor="#007ACC" flexBasis="0" flexGrow={1} justifyContent="center">
        <TypeScriptIcon height="20vw" width="20vw" />
      </Column>
    </Appear>
  </Row>
);
