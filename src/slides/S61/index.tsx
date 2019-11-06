import { Column } from "components/grid/column";
import { Row } from "components/grid/row";
import React, { ReactNode } from "react";
import { Appear, Text } from "spectacle";

type Props = {
  children: ReactNode;
};

const TypeScriptToken = ({ children }: Props) => (
  <Column
    backgroundColor="#fff"
    borderRadius={4}
    boxShadow="0 18px 38px rgba(0, 0, 0, 0.08), 0 35px 65px rgba(0, 0, 0, 0.08), 0 0 2px 0 rgba(0, 0, 0, 0.1)"
    marginLeft="1.33rem"
    marginRight="1.33rem"
  >
    <Column padding="4px 8px">
      <Text textColor="primary" textFont="tertiary">
        {children}
      </Text>
    </Column>
  </Column>
);

export const S61 = () => (
  <Column alignItems="center">
    <Row>
      <TypeScriptToken>JavaScript that scales</TypeScriptToken>
    </Row>

    <Appear>
      <Row paddingTop="5.22rem">
        <Text textColor="secondary">What does</Text>
        <TypeScriptToken>scales</TypeScriptToken>
        <Text textColor="secondary">mean?</Text>
      </Row>
    </Appear>
  </Column>
);
