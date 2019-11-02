import React from "react";
import { S10 } from "slides/S10";
import { S11 } from "slides/S11";
import { S12 } from "slides/S12";
import { Deck, Slide } from "spectacle";
import styled from "styled-components";
import { theme } from "theme";

const SplitSlide = styled(Slide)`
  bottom: 0;
  display: flex;
  height: 100% !important;
  left: 0;
  margin: 0;
  max-height: 100% !important;
  max-width: 100% !important;
  padding: 0 !important;
  position: absolute;
  right: 0;
  top: 0;
  width: 100% !important;
`;

export const Presentation = () => (
  <Deck controls={false} theme={theme}>
    <Slide>
      <S10 />
    </Slide>
    <Slide>
      <S11 />
    </Slide>
    <SplitSlide bgColor="secondary">
      <S12 />
    </SplitSlide>
  </Deck>
);
