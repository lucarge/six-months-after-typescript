import { Column } from "components/grid/column";
import React, { ReactNode } from "react";
import { Heading, Text } from "spectacle";

type Props = {
  children: ReactNode;
};

const TypeScriptToken = ({ children }: Props) => (
  <Column alignItems="center">
    <Column
      backgroundColor="#fff"
      borderRadius={4}
      boxShadow="0 18px 38px rgba(0, 0, 0, 0.08), 0 35px 65px rgba(0, 0, 0, 0.08), 0 0 2px 0 rgba(0, 0, 0, 0.1)"
    >
      <Column padding="4px 16px">
        <Text textColor="primary" textFont="tertiary">
          {children}
        </Text>
      </Column>
    </Column>
  </Column>
);

export const S64 = () => (
  <>
    <Column paddingBottom="5.22rem">
      <TypeScriptToken>BONUS</TypeScriptToken>
    </Column>

    <Heading size={3} textColor="secondary">
      Scaling communications
    </Heading>
  </>
);
