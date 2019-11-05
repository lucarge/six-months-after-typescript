import { Column } from "components/grid/column";
import React from "react";
import { Appear, Heading, Image } from "spectacle";
import immutableGood from "./immutable_good.png";

export const S53 = () => (
  <>
    <Appear>
      <Column paddingBottom={48}>
        <Heading>
          <span aria-label="white-check-mark" role="img">
            ✅
          </span>
        </Heading>
      </Column>
    </Appear>

    <Image src={immutableGood} />
  </>
);
