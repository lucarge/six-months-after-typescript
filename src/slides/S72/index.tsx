import { Column } from "components/grid/column";
import { Row } from "components/grid/row";
import { EslintIcon } from "components/icons/eslint";
import { JestIcon } from "components/icons/jest";
import { PrettierIcon } from "components/icons/prettier";
import { TypeScriptIcon } from "components/icons/typescript";
import React, { ReactNode } from "react";
import { Appear, Heading, Text } from "spectacle";

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

export const S72 = () => (
  <Column>
    <Column paddingBottom="5.22rem">
      <TypeScriptToken>Lesson #2</TypeScriptToken>
    </Column>

    <Text textColor="primary" textFont="tertiary">
      Assign the right
    </Text>

    <Heading size={3} textColor="primary">
      responsibilities
    </Heading>

    <Appear>
      <Column alignItems="center" justifyContent="center" paddingTop="5.22rem">
        <Row flexWrap="wrap">
          <Column marginRight="3rem">
            <TypeScriptIcon height="5.22rem" width="5.22rem" />
          </Column>
          <Column marginRight="3rem">
            <JestIcon height="5.22rem" width="5.22rem" />
          </Column>
          <Column marginRight="3rem">
            <EslintIcon height="5.22rem" width="5.22rem" />
          </Column>
          <Column>
            <PrettierIcon height="5.22rem" width="5.22rem" />
          </Column>
        </Row>
      </Column>
    </Appear>
  </Column>
);
