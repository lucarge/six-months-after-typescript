import { Column } from "components/grid/column";
import React from "react";
import { Appear, Heading, Text } from "spectacle";

export const S37 = () => (
  <>
    <Column paddingBottom={56}>
      <Heading size={4} textColor="secondary">
        Breaking changes 6 months ago
      </Heading>
    </Column>

    <Appear>
      <Column paddingBottom={24}>
        <Text textColor="secondary">High test coverage and test quality.</Text>
      </Column>
    </Appear>

    <Appear>
      <Column paddingBottom={56}>
        <Text textColor="secondary">
          <span aria-label="sweat" role="img" style={{ paddingRight: 16 }}>
            😅
          </span>
          <span>Not really easy.</span>
        </Text>
      </Column>
    </Appear>

    <Appear>
      <Column paddingBottom={24}>
        <Text textColor="secondary">Long waiting time for the tests.</Text>
      </Column>
    </Appear>

    <Appear>
      <Column paddingBottom={56}>
        <Text textColor="secondary">
          <span aria-label="coffee" role="img" style={{ paddingRight: 16 }}>
            ☕️
          </span>
          <span>Too many coffees.</span>
        </Text>
      </Column>
    </Appear>

    <Appear>
      <Column paddingBottom={24}>
        <Text textColor="secondary">Massive QA effort to test "everything".</Text>
      </Column>
    </Appear>

    <Appear>
      <Text textColor="secondary">
        <span>QA</span>
        <span aria-label="knife" role="img" style={{ fontSize: "4rem" }}>
          🔪
        </span>
        <span>Dev.</span>
      </Text>
    </Appear>
  </>
);
