import React from "react";
import { S10 } from "slides/S10";
import { S11 } from "slides/S11";
import { S12 } from "slides/S12";
import { S13 } from "slides/S13";
import { S20 } from "slides/S20";
import { S21 } from "slides/S21";
import { S30 } from "slides/S30";
import { S31 } from "slides/S31";
import { Deck, Slide } from "spectacle";
import styled from "styled-components";
import { theme } from "theme";
import fogOfWar from "./fog_of_war.png";

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
    <Slide bgColor="secondary">
      <S13 />
    </Slide>
    <Slide>
      <S20 />
    </Slide>
    <Slide>
      <S21 />
    </Slide>
    <Slide>
      <S30 />
    </Slide>
    <Slide bgDarken={0.7} bgImage={fogOfWar}>
      <S31 />
    </Slide>
  </Deck>
);
