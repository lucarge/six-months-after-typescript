import { Column } from "components/grid/column";
import { Row } from "components/grid/row";
import { GithubIcon } from "components/icons/github";
import React, { useState } from "react";
import { Anim, Appear, Heading, Text } from "spectacle";

export const S55 = () => {
  const [height, setHeight] = useState(700);

  const handleAnim = (forwards?: boolean) => {
    if (forwards) {
      setHeight(0);

      return;
    }

    setHeight(700);
  };

  return (
    <Column>
      <Column
        alignItems="center"
        height={height}
        justifyContent="center"
        overflow="hidden"
        position="relative"
        transition="height 1s"
      >
        <Appear order={1}>
          <Column position="absolute" top={48}>
            <Heading>
              <span aria-label="red-cross" role="img">
                ❌
              </span>
            </Heading>
          </Column>
        </Appear>

        <Column paddingBottom="2.66rem">
          <Row alignItems="center" justifyContent="center">
            <GithubIcon height="2.66rem" width="2.66rem" />
            <Text margin="0.25rem 0.5rem" textFont="tertiary">
              sylvainpolletvillard/<b>ObjectModel</b>
            </Text>
          </Row>
        </Column>

        <Appear>
          <Column>
            <Row alignItems="center" justifyContent="center">
              <GithubIcon height="2.66rem" width="2.66rem" />
              <Text margin="0.25rem 0.5rem" textFont="tertiary">
                imbrn/<b>v8n</b>
              </Text>
            </Row>
          </Column>
        </Appear>
      </Column>

      <Anim
        easing="linear"
        fromStyle={{ height: 0 }}
        onAnim={handleAnim}
        order={2}
        toStyle={[{ height: 700 }]}
        transitionDuration={1000}
      >
        <Column
          alignItems="center"
          backgroundColor="#007ACC"
          borderRadius={8}
          boxShadow="0 18px 38px rgba(0, 0, 0, 0.08), 0 35px 65px rgba(0, 0, 0, 0.08), 0 0 2px 0 rgba(0, 0, 0, 0.1)"
          justifyContent="center"
          overflow="hidden"
          position="relative"
        >
          <Appear order={3}>
            <Column position="absolute" top={48}>
              <Heading>
                <span aria-label="tada" role="img">
                  🎉
                </span>
              </Heading>
            </Column>
          </Appear>

          <Column>
            <Row alignItems="center" justifyContent="center">
              <GithubIcon color="#ffffff" height="2.66rem" width="2.66rem" />
              <Text margin="0.25rem 0.5rem" textColor="secondary" textFont="tertiary">
                gcanti/<b>io-ts</b>
              </Text>
            </Row>
          </Column>
        </Column>
      </Anim>
    </Column>
  );
};
