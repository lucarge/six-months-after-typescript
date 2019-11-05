import { Column } from "components/grid/column";
import React from "react";
import { Appear, Heading, Image } from "spectacle";
import immutableBad from "./immutable_bad.png";

export const S52 = () => (
  <>
    <Appear>
      <Column paddingBottom={48}>
        <Heading>
          <span aria-label="red-cross" role="img">
            ❌
          </span>
        </Heading>
      </Column>
    </Appear>

    <Image src={immutableBad} />
  </>
);
