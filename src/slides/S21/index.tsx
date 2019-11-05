import { Column } from "components/grid/column";
import { Row } from "components/grid/row";
import { AndroidIcon } from "components/icons/android";
import { AppleIcon } from "components/icons/apple";
import { CodeSandboxIcon } from "components/icons/codesandbox";
import { GoogleChromeIcon } from "components/icons/googlechrome";
import React from "react";
import { Appear, Text } from "spectacle";

export const S21 = () => (
  <Column>
    <Row alignItems="center" flexGrow={0} justifyContent="space-around" paddingBottom={96}>
      <Column alignItems="center" paddingRight={24}>
        <GoogleChromeIcon color="#fff" height="96px" width="96px" />
        <Column paddingTop={12}>
          <Text textColor="secondary" textSize="24px">
            web
          </Text>
        </Column>
      </Column>

      <Appear>
        <Column alignItems="center" paddingRight={24}>
          <AndroidIcon color="#fff" height="96px" width="96px" />
          <Column paddingTop={12}>
            <Text textColor="secondary" textSize="24px">
              android
            </Text>
          </Column>
        </Column>
      </Appear>

      <Appear>
        <Column alignItems="center" paddingRight={24}>
          <AppleIcon color="#fff" height="96px" width="96px" />
          <Column paddingTop={12}>
            <Text textColor="secondary" textSize="24px">
              iOS
            </Text>
          </Column>
        </Column>
      </Appear>

      <Appear>
        <Column alignItems="center" paddingRight={24}>
          <CodeSandboxIcon color="#fff" height="96px" width="96px" />
          <Column paddingTop={12}>
            <Text textColor="secondary" textSize="24px">
              SDK
            </Text>
          </Column>
        </Column>
      </Appear>
    </Row>

    <Appear>
      <Text textColor="secondary" textFont="tertiary" textSize="2rem">
        https://write-once-run-everywhere.lucarge.now.sh
      </Text>
    </Appear>
  </Column>
);
