import { Column } from "components/grid/column";
import { Row } from "components/grid/row";
import { FlowIcon } from "components/icons/flow";
import { TypeScriptIcon } from "components/icons/typescript";
import React, { useState } from "react";
import { Anim, Appear } from "spectacle";

export const S42 = () => {
  const [grow, setGrow] = useState(1);

  const handleAnim = (forwards?: boolean) => {
    if (forwards) {
      setGrow(0.0001);

      return;
    }

    setGrow(1);
  };

  return (
    <Row backgroundColor="#2d343a">
      <Column alignItems="center" flexBasis="0" flexGrow={grow} justifyContent="center" transition="all 1s">
        <FlowIcon height="20vw" width="20vw" />
      </Column>

      <Appear>
        <Column alignItems="center" backgroundColor="#007ACC" flexBasis="0" flexGrow={1} justifyContent="center">
          <TypeScriptIcon height="20vw" width="20vw" />
        </Column>
      </Appear>

      <Anim
        easing="back"
        fromStyle={{ display: "none " }}
        onAnim={handleAnim}
        toStyle={[{ display: "none" }]}
        transitionDuration={0}
      >
        <Column display="none" />
      </Anim>
    </Row>
  );
};
