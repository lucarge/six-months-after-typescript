import { Column } from "components/grid/column";
import React from "react";
import { Text, Appear } from "spectacle";

export const S59 = () => (
  <>
    <Column paddingBottom={48}>
      <Text textColor="secondary">TypeScript learning curve can be steep.</Text>
    </Column>

    <Appear>
      <Column paddingBottom={48}>
        <Text textColor="secondary">
          Team members might not reach fluency
          <br />
          at the same time.
        </Text>
      </Column>
    </Appear>

    <Appear>
      <Column paddingBottom={48}>
        <Text textColor="secondary">
          <span aria-label="backhand-index-finger-pointing-down" role="img" style={{ fontSize: "4rem" }}>
            👇
          </span>
        </Text>
      </Column>
    </Appear>

    <Appear>
      <Column paddingBottom={48}>
        <Text textColor="secondary">
          Keep using JavaScript
          <br />
          until you'll feel confident with TypeScript.
        </Text>
      </Column>
    </Appear>

    <Appear>
      <Column paddingBottom={48}>
        <Text textColor="secondary">
          <>
            <span>It's ok to temporarily give up to</span> <span style={{ fontFamily: "monospace" }}>any</span>
            <br />
            <span>and go ahead with your work.</span>
          </>
        </Text>
      </Column>
    </Appear>
  </>
);
