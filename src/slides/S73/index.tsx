import { Column } from "components/grid/column";
import React, { ReactNode } from "react";
import { Heading, Text } from "spectacle";

type Props = {
  children: ReactNode;
};

const TypeScriptToken = ({ children }: Props) => (
  <Column alignItems="center">
    <Column
      backgroundColor="#007ACC"
      borderRadius={4}
      boxShadow="0 18px 38px rgba(0, 0, 0, 0.08), 0 35px 65px rgba(0, 0, 0, 0.08), 0 0 2px 0 rgba(0, 0, 0, 0.1)"
    >
      <Column padding="4px 16px">
        <Text textColor="secondary" textFont="tertiary">
          {children}
        </Text>
      </Column>
    </Column>
  </Column>
);

export const S73 = () => (
  <Column height={700} justifyContent="center" position="relative">
    <Column paddingBottom="5.22rem">
      <TypeScriptToken>Lesson #3</TypeScriptToken>
    </Column>

    <Text textColor="primary" textFont="tertiary">
      Embrace the tool
    </Text>

    <Heading size={3} textColor="primary">
      capabilities
    </Heading>
  </Column>
);
