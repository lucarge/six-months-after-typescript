import { Column } from "components/grid/column";
import React from "react";
import { Appear, Heading, Text } from "spectacle";

export const S32 = () => (
  <>
    <Column paddingBottom={48}>
      <Heading size={3} textColor="secondary">
        What does visibility mean?
      </Heading>
    </Column>

    <Appear>
      <Column paddingBottom={48}>
        <Text textColor="secondary">Working in codebase with more confidence.</Text>
      </Column>
    </Appear>

    <Appear>
      <Column paddingBottom={48}>
        <Text textColor="secondary">
          <span aria-label="lightning" role="img" style={{ fontSize: "4rem" }}>
            👇
          </span>
        </Text>
      </Column>
    </Appear>

    <Appear>
      <Column paddingBottom={48}>
        <Text textColor="secondary">
          <span aria-label="lightning" role="img" style={{ fontSize: "2.66rem", paddingRight: 16 }}>
            ⚡️
          </span>
          <span>Faster development phase.</span>
        </Text>
      </Column>
    </Appear>

    <Appear>
      <Column paddingBottom={48}>
        <Text textColor="secondary">
          <span aria-label="stopwatch" role="img" style={{ fontSize: "2.66rem", paddingRight: 16 }}>
            ⏱
          </span>
          <span>More precise estimations.</span>
        </Text>
      </Column>
    </Appear>

    <Appear>
      <Text textColor="secondary">
        <span aria-label="beach-with-umbrella" role="img" style={{ fontSize: "2.66rem", paddingRight: 16 }}>
          🏖
        </span>
        <span>A more relaxed DX.</span>
      </Text>
    </Appear>
  </>
);
