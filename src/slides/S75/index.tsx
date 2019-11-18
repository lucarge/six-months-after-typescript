import { Column } from "components/grid/column";
import { Row } from "components/grid/row";
import { GithubIcon } from "components/icons/github";
import React from "react";
import { Appear, Text } from "spectacle";

export const S75 = () => (
  <Column style={{ color: "black", textAlign: "left" }}>
    <Row
      backgroundColor="#eeeeee"
      border="2px solid #ccc"
      borderRadius={8}
      flexGrow={1}
      flexShrink={1}
      justifyContent="space-between"
    >
      <Column>
        <Column borderBottom="2px solid #ccc" padding={16}>
          Aspect
        </Column>
        <Column padding={16}>Expands in error messages and logs</Column>
      </Column>
      <Column>
        <Column borderBottom="2px solid #ccc" padding={16}>
          Type
        </Column>
        <Column alignItems="center" padding={16}>
          <span aria-label="white-check-mark" role="img">
            ✅
          </span>
        </Column>
      </Column>
      <Column>
        <Column borderBottom="2px solid #ccc" padding={16}>
          Interface
        </Column>
        <Column alignItems="center" padding={16}>
          <span aria-label="prohibited" role="img">
            🚫
          </span>
        </Column>
      </Column>
    </Row>

    <Appear>
      <Column paddingTop="2.66rem">
        <Row alignItems="center" justifyContent="center">
          <GithubIcon height="2.66rem" width="2.66rem" />
          <Text margin="0.25rem 0.5rem" textFont="tertiary" textSize="1.8rem">
            typescript-cheatsheets/<b>react-typescript-cheatsheet</b>
          </Text>
        </Row>
      </Column>
    </Appear>

    <Appear>
      <Column paddingTop="5.22rem">
        <Column alignItems="center" justifyContent="center" padding="2.66rem 0">
          <Text margin="0.25rem 0.5rem" textFont="tertiary" textSize="1.8rem">
            TypeScript <b>3.7</b> improvements on error reporting
          </Text>
        </Column>
        <Row alignItems="center" justifyContent="center">
          <GithubIcon height="2.66rem" width="2.66rem" />
          <Text margin="0.25rem 0.5rem" textFont="tertiary" textSize="1.8rem">
            microsoft/TypeScript/<b>issues/33361</b>
          </Text>
        </Row>
      </Column>
    </Appear>
  </Column>
);
