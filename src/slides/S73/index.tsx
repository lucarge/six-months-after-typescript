import { Column } from "components/grid/column";
import { Row } from "components/grid/row";
import { EslintIcon } from "components/icons/eslint";
import { JestIcon } from "components/icons/jest";
import { PrettierIcon } from "components/icons/prettier";
import { TypeScriptIcon } from "components/icons/typescript";
import React from "react";
import { Appear, Text } from "spectacle";

export const S73 = () => (
  <Column>
    <Row alignItems="center" justifyContent="flex-start" paddingBottom="3rem">
      <Column marginRight="3rem">
        <TypeScriptIcon height="5.22rem" width="5.22rem" />
      </Column>

      <Column>
        <Text>Does the code work?</Text>
      </Column>
    </Row>

    <Appear>
      <Row alignItems="center" justifyContent="flex-start" paddingBottom="3rem">
        <Column marginRight="3rem">
          <JestIcon height="5.22rem" width="5.22rem" />
        </Column>

        <Column>
          <Text>Does the code work as intended?</Text>
        </Column>
      </Row>
    </Appear>

    <Appear>
      <Row alignItems="center" justifyContent="flex-start" paddingBottom="3rem">
        <Column marginRight="3rem">
          <EslintIcon height="5.22rem" width="5.22rem" />
        </Column>

        <Column>
          <Text>Does the code respect the team coding standards?</Text>
        </Column>
      </Row>
    </Appear>

    <Appear>
      <Row alignItems="center" justifyContent="flex-start">
        <Column marginRight="3rem">
          <PrettierIcon height="5.22rem" width="5.22rem" />
        </Column>

        <Column>
          <Text>Is the code formatted correctly?</Text>
        </Column>
      </Row>
    </Appear>
  </Column>
);
