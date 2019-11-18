import { Column } from "components/grid/column";
import React from "react";
import { Appear, Text } from "spectacle";

export const S35 = () => (
  <>
    <Column paddingTop={48}>
      <Text margin="0" padding="0 0 48px" textAlign="left" textColor="secondary" textSize="2rem">
        PropTypes.func.isRequired
      </Text>
      <Appear>
        <Text margin="0" padding="0 0 24px" textAlign="right" textColor="secondary" textSize="2rem">
          Thanks to let me know!
        </Text>
      </Appear>
      <Appear>
        <Text margin="0 0 0 35%" padding="0 0 48px" textAlign="right" textColor="secondary" textSize="2rem">
          Can you tell me what information my function will receive as input?
        </Text>
      </Appear>
      <Appear>
        <Text margin="0" padding="0 0 48px" textAlign="left" textColor="secondary" textSize="2rem">
          Nope.
        </Text>
      </Appear>
      <Appear>
        <Text margin="0 0 0 35%" padding="0 0 48px" textAlign="right" textColor="secondary" textSize="2rem">
          Can you tell me if this function can do asynchronous work?
        </Text>
      </Appear>
      <Appear>
        <Text margin="0" padding="0 0 48px" textAlign="left" textColor="secondary" textSize="2rem">
          Nope.
        </Text>
      </Appear>
      <Appear>
        <Text margin="0" padding="0 0 24px" textAlign="right" textColor="secondary" textSize="2rem">
          Will my output be consumed by someone else?
        </Text>
      </Appear>
      <Appear>
        <Text margin="0" padding="0 0 48px" textAlign="right" textColor="secondary" textSize="2rem">
          Should I yield back something in particular?
        </Text>
      </Appear>
      <Appear>
        <Text margin="0" textAlign="left" textColor="secondary" textSize="2rem">
          <span>Dunno, sorry</span>
          <span aria-label="don't know" role="img" style={{ paddingLeft: 16 }}>
            🤷‍♂️
          </span>
        </Text>
      </Appear>
    </Column>
  </>
);
