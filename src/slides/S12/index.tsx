import { Column } from "components/grid/column";
import { Row } from "components/grid/row";
import { GithubIcon } from "components/icons/github";
import { StackOverflowIcon } from "components/icons/stackoverflow";
import { TwitterIcon } from "components/icons/twitter";
import React from "react";
import { Appear, Image, Text } from "spectacle";
import tech01 from "./tech01.png";

export const S12 = () => (
  <Row>
    <Column backgroundColor="#fff" flexBasis={0} flexGrow={1} justifyContent="center" padding="0 24px">
      <Text margin="0" padding="8px 0" textAlign="left" textColor="primary">
        Luca Argenziano
      </Text>
      <Text margin="0" padding="8px 0" textAlign="left" textColor="primary">
        25
      </Text>
      <Text margin="0" padding="8px 0" textAlign="left" textColor="primary">
        Frontend Software Engineer
      </Text>
      <Text margin="0" padding="8px 0" textAlign="left" textColor="primary">
        ProntoPro
      </Text>

      <Row flexGrow={0} paddingTop={48}>
        <Appear>
          <Column alignItems="flex-start" paddingRight={24}>
            <Row alignItems="center" flexGrow={0} justifyContent="center">
              <GithubIcon height="24px" width="24px" />
              <Column paddingLeft={12}>
                <Text textSize="24px">lucarge</Text>
              </Column>
            </Row>
          </Column>
        </Appear>

        <Appear>
          <Column alignItems="flex-start" paddingRight={24}>
            <Row alignItems="center" flexGrow={0} justifyContent="center">
              <TwitterIcon height="24px" width="24px" />
              <Column paddingLeft={12}>
                <Text textColor="#1DA1F2" textSize="24px">
                  lucarge
                </Text>
              </Column>
            </Row>
          </Column>
        </Appear>

        <Appear>
          <Column alignItems="flex-start" paddingRight={24}>
            <Row alignItems="center" flexGrow={0} justifyContent="center">
              <StackOverflowIcon height="24px" width="24px" />
              <Column paddingLeft={12}>
                <Text textColor="#FE7A16" textSize="24px">
                  lucarge
                </Text>
              </Column>
            </Row>
          </Column>
        </Appear>
      </Row>
    </Column>
    <Appear>
      <Column backgroundColor="#007ACC" flexBasis={0} flexGrow={1} justifyContent="center">
        <Column padding="16px">
          <Image src={tech01} />
        </Column>

        <Text caps textColor="secondary">
          <span aria-label="tada" role="img">
            🎉
          </span>
          <span> We are hiring </span>
          <span aria-label="tada" role="img">
            🎉
          </span>
        </Text>
      </Column>
    </Appear>
  </Row>
);
