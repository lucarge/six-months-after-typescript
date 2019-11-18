import { Column } from "components/grid/column";
import { Row } from "components/grid/row";
import { GithubIcon } from "components/icons/github";
import React from "react";
import { Appear, Heading, Text } from "spectacle";

export const S41 = () => (
  <>
    <Column paddingBottom={96}>
      <Heading margin="0" size={4} textAlign="left" textColor="#222">
        Proofs of concept
      </Heading>
    </Column>

    <Appear>
      <Column paddingBottom="2.66rem">
        <Row alignItems="center" justifyContent="flex-start">
          <GithubIcon height="2.66rem" width="2.66rem" />
          <Text margin="0.25rem 0.5rem" textFont="tertiary">
            lucarge/<b>ts-immutable-playgroud</b>
          </Text>
        </Row>
      </Column>
    </Appear>

    <Appear>
      <Column paddingBottom="2.66rem">
        <Row alignItems="center" justifyContent="flex-start">
          <GithubIcon height="2.66rem" width="2.66rem" />
          <Text margin="0.25rem 0.5rem" textFont="tertiary">
            lucarge/<b>io-ts-poc</b>
          </Text>
        </Row>
      </Column>
    </Appear>

    <Appear>
      <Column paddingBottom="2.66rem">
        <Row alignItems="center" justifyContent="flex-start">
          <GithubIcon height="2.66rem" width="2.66rem" />
          <Text margin="0.25rem 0.5rem" textFont="tertiary">
            lucarge/<b>blog-poc</b>
          </Text>
        </Row>
      </Column>
    </Appear>
  </>
);
