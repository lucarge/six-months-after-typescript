import { Column } from "components/grid/column";
import React from "react";
import { Appear, Image, Text } from "spectacle";
import tokei from "./tokei.png";

export const S20 = () => (
  <>
    <Text textColor="secondary" textFont="tertiary" textSize="48px">
      useContext(ProntoPro)
    </Text>

    <Appear>
      <Column paddingTop={24}>
        <Image src={tokei} />
      </Column>
    </Appear>
  </>
);
