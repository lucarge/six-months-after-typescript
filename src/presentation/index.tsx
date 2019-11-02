import React from "react";
import { Deck, Slide, Text, Appear } from "spectacle";
import { Column } from "components/grid/column";
import { Row } from "components/grid/row";
import { TypeScriptIcon } from "components/icons/typescript";
import { theme } from "theme";

export const Presentation = () => (
  <Deck controls={false} theme={theme}>
    <Slide>
      <TypeScriptIcon height="60vh" width="60vh" />
    </Slide>
    <Slide>
      <Row style={{ alignItems: "center", justifyContent: "center", paddingBottom: 24 }}>
        <Text bold margin="0" textColor="secondary" textFont="primary" textSize="48px">
          Six months after
        </Text>

        <Column style={{ paddingLeft: 20 }}>
          <TypeScriptIcon height="48px" width="48px" />
        </Column>
      </Row>

      <Appear>
        <Text caps textColor="secondary" textSize="24px">
          A retrospective
        </Text>
      </Appear>
    </Slide>
  </Deck>
);
