import { Column } from "components/grid/column";
import { Row } from "components/grid/row";
import React from "react";
import { Appear, Heading, Text } from "spectacle";

export const S33 = () => (
  <>
    <Column paddingBottom={48}>
      <Heading size={3} textColor="secondary">
        How to enhance visibility?
      </Heading>
    </Column>

    <Appear>
      <Column paddingBottom={48}>
        <Text textColor="secondary">Typecheck based on solid contracts</Text>
      </Column>
    </Appear>

    <Row alignItems="center" flexGrow={1} flexShrink={1} justifyContent="center" paddingTop={48}>
      <Appear>
        <Column flexBasis="0" flexGrow={1}>
          <Text textColor="secondary" textSize="2rem">
            6 months ago
          </Text>
          <Text textColor="secondary" style={{ fontWeight: "bold" }}>
            prop-types
          </Text>
          <span aria-label="lightning" role="img" style={{ fontSize: "4rem" }}>
            👎
          </span>
        </Column>
      </Appear>

      <Appear>
        <Column flexBasis="0" flexGrow={1}>
          <Text textColor="secondary" textSize="2rem">
            today
          </Text>
          <Text textColor="secondary" style={{ fontWeight: "bold" }}>
            TypeScript
          </Text>
          <span aria-label="lightning" role="img" style={{ fontSize: "4rem" }}>
            👍
          </span>
        </Column>
      </Appear>
    </Row>
  </>
);
